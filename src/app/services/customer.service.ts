import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customerInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { User } from '../interfaces/userInterface';
import jwt_decode  from 'jwt-decode';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {

    public logStatusCustomer = new Subject<boolean>();
    public loggedStatus = this.logStatusCustomer.asObservable();
    public url = '';

    user: User={username:"", password:""}
    customer: Customer;

    constructor(private http: HttpClient) { }

    //Registro de un nuevo usuario 
    registraCustomer(formCustomer: Customer): Observable<any>
  {
    this.customer = formCustomer;
    const md5 = new Md5();
    const passMd5 = md5.appendStr(this.customer.password).end().toString();
    this.customer.password = passMd5;
    console.log(this.customer);
    return this.http.post<Customer>(environment.signUpUrl, this.customer);
  }


  /**Para realizar la peticion de autenticación del usuario, cogiendo la pass codificada en md5 */
  login(nick: string, pass: string): Observable<any> {
    const md5 = new Md5();
    const passMd5 = md5.appendStr(pass).end().toString();

    this.user.username=nick;
    this.user.password=passMd5;

    return this.http.post(environment.loginUrl, this.user, { responseType: 'text'});
  }

  //Se usa para saber si hay un usuario Logado o no para CanActivate
  isloggedIn(url: string){
    const isLogged = localStorage.getItem('jwt');

    if(!isLogged){
      this.url = url
      return false;
    }
    return true;
  }

  //Obtiene los datos del usuario actual
  getUsuarioAutenticado(): Observable<Customer>{
    return this.http.get<Customer>(environment.apiUrl + '/customer/' + localStorage.getItem('id'))
  }

  almacenaId(token: string){
    const tokenDecodificado: any = jwt_decode(token);
    localStorage.setItem('id', tokenDecodificado.sub);
  }


  /**Modifica un usuario según su id */
  modificarUser(customer: any): Observable<any> {
    let id = localStorage.getItem('id');

    return this.http.put(environment.apiUrl + '/customer' + `/${id}`, customer);
  }



  }
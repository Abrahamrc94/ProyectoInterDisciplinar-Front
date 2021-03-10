import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customerInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { User } from '../interfaces/userInterface';

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

    return this.http.post(environment.loginUrl, this.user).pipe(
      data => {
        return data;
      }
    )
  }


  isloggedIn(url: string){
    const isLogged = localStorage.getItem('id');

    if(!isLogged){
      this.url = url
      return false;
    }
    return true;
  }




  }
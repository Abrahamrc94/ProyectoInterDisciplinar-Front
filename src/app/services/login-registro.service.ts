import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customerInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {

    public logStatusCustomer = new Subject<boolean>();
    public loggedStatus = this.logStatusCustomer.asObservable();
    public url = '';

    customer: Customer;

    constructor(private http: HttpClient) { }

    //Registro de un nuevo usuario 
    registraCustomer(formCustomer: Customer): Observable<any>
  {
    this.customer = formCustomer;
    const md5 = new Md5();
    const passMd5 = md5.appendStr(this.customer.password).end().toString();
    this.customer.password = passMd5;
    return this.http.post<Customer>(environment.signUpUrl, this.customer);
  }


  /**Para realizar la peticion de autenticación del usuario, cogiendo la pass codificada en md5 */
  login(nick: string, pass: string): Observable<any> {
    const md5 = new Md5();
    const passMd5 = md5.appendStr(pass).end().toString();

    return this.http.get(environment.loginUrl + '?username=' + nick + '&password=' + passMd5).pipe(
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
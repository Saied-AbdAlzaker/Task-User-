import { environment } from './../environments/environment.development';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  // private url = environment.apiUrl;
  private url = 'https://dummyapi.io/data/v1';

  constructor(private http:HttpClient) {}

   private getHeaders():HttpHeaders
   {
      const header = new HttpHeaders({
        'content-type': 'application/json',
        'app-id': ' 64fc4a747b1786417e354f31'
      })
      return header;
   }

   addUsers(user:any):Observable<any>
   {
     const headers = this.getHeaders();
     return this.http.post(`${this.url}/user/create`,user , {headers})
   }

  listUsers():Observable<any>
  {
    const headers = this.getHeaders();
    return this.http.get(`${this.url}/user`, {headers})
  }

  deleteUsers(id:string):Observable<any>
  {
    const headers = this.getHeaders();
    return this.http.delete(`${this.url}/user/${id}` , {headers})
  }
  updateUsers(user:any,id:string):Observable<any>
  {
    const headers = this.getHeaders();
    return this.http.put(`${this.url}/user/${id}`,user, {headers})
  }

}


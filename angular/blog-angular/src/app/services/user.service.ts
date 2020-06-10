import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

import { global } from './global';

@Injectable()
export class UserService {

    public url: string;

    constructor(public _http: HttpClient) 
    { 
        this.url=global.url;
    }

    test() {
        return "hola mundo desde el servicio de usuario..";
    }
    // enviamos y resepcionamos la respuesta desde la api-rest
    register(user): Observable<any>{
        let json =  JSON.stringify(User);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-Type','aplication/x-www-form-urlendoded');
        return this._http.post(this.url+'regiter',params,{headers:headers});
    }

    update(user): Observable<any>{

        /*
          console.log(country);
        //parametros enviados
        let file:File;
        let formdata:FormData=new FormData();
        formdata.set('Id_Country',country.id.toString());
        formdata.set('Country_Name',country.Name);
        formdata.set('Country_Code',country.Code);
        formdata.set('Country_Status',country.Status.toString());

        const req = new HttpRequest('POST', this.url+'country/update', formdata, {
            reportProgress: true,
        });
        return this._http.request(req);
        
        
        */
       
        let json = JSON.stringify(user);
        console.log(json);
        let params = json;
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.post(this.url+'prueba/users/update',params,{headers:headers});

    }
}
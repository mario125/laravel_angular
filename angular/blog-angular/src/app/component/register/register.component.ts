import { Component, OnInit } from '@angular/core';
// IMPORTAR MODELO DE USUARIO
import { User } from '../../models/user';
//service
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // inyecto service
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;
  public status:string;

  constructor(private _userService: UserService) {
    this.title = "registrate..";
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');
  }



  ngOnInit() {
    console.log('componente lanzado..');
  }



//ENVIANDO DATOS PARA REGISTRO...
  onSubmit(form) {
    //console.log(this.user);
    //console.log(this._userService.test());
    this._userService.register(this.user).subscribe(
      Response => {
      
        console.log(Response);
      },
      error =>{
        console.log(<any>error);
      }

    );
    
    form.reset();// limpiar formulario
  }

}

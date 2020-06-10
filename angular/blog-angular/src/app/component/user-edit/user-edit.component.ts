import { Component, OnInit } from '@angular/core';
// IMPORTAR MODELO DE USUARIO
import { User } from '../../models/user';
//service
import { UserService } from '../../services/user.service';

//para subirt img

import {global} from '../../services/global';

import { ViewChild } from '@angular/core';
import { AngularFileUploaderComponent } from "angular-file-uploader";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})

@ViewChild('fileUpload1')

export class UserEditComponent implements OnInit {

  public title: string;
  public user: User;
  public status: string;
  public fileToUpload: File = null;

  private fileUpload1:  AngularFileUploaderComponent;

  public afuConfig = {
                      multiple: false,
                      formatsAllowed: ".jpg,.png,.gif,.jpeg",
                      maxSize: "50",
                      uploadAPI: {
                        url: global.url+"prueba/usersfoto",//url api                                            
                      },
                      theme: "attachPin",
                      hideProgressBar: false,
                      hideResetBtn: true,
                      hideSelectBtn: false,
                      fileNameIndex: true,
                      attachPinText:'sube tu foto'
                    
                    };

  constructor(
    private _userService: UserService
  ) {
    this.title = "ajustes..";
    this.user = new User(1, 'pedrp', 'dsdd', 'ROLE_USER', 'h@g.com', 'rr', '<p><span class="fr-video fr-fvc fr-dvb fr-draggable" contenteditable="false" draggable="true"><iframe width="640" height="360" src="https://www.youtube.com/embed/EFIG7GhLgMM?wmode=opaque" frameborder="0" allowfullscreen="" class="fr-draggable"></iframe></span><img src="https://i.froala.com/assets/photo5.jpg" data-id="5" data-type="image" data-name="Image 2020-05-01 at 21:05:53.jpg" style="width: 300px;" class="fr-fic fr-dib"><img src="blob:http://localhost:4200/e2c7e09d-ab15-40da-9a1a-357e5a46f79c" style="width: 300px;" class="fr-fic fr-dib">descripcion de ajuste</p>', '');
  }

  ngOnInit() {
  }


  onSubmit(form) {
    //console.log(this.user);
    //console.log(this._userService.test());
    this._userService.update(this.user).subscribe(
      response => {

        console.log(response);
      },
      error => {
        console.log(<any>error);
      }

    );

    form.reset();// limpiar formulario
  }

  AvatarUpload(datos){
    let data = JSON.parse(datos.response);
    this.user.image=data.Image_Name;
    console.log(this.user.image);
  }

}

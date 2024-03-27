import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-com-login',
  templateUrl: './com-login.component.html',
  styleUrls: ['./com-login.component.css']
})
export class ComLoginComponent {

  public form_login: FormGroup;
  public user: User;

  constructor(public userService: UserService, public router: Router){

  }

  ngOnInit(){
    
    let minPassLength = 8;

    this.form_login = new FormGroup({

      'usuario': new FormControl (null, [Validators.required]),
      'password': new FormControl (null, [Validators.required, Validators.minLength(minPassLength)])
    
    });

  }

  iniciarSesion(){

    let usuario = this.form_login.get('usuario').value;
    let password = this.form_login.get('password').value;

    this.user = new User (null,'', usuario, '', password, '', '', '')

    console.log(usuario);
    console.log(password);

    this.userService.login(this.user).subscribe((data) => {
      
      console.log(data);
      
      if (data) {
      
        this.userService.logueado = true;
        this.userService.user = data[0];

      } else {
        console.log('Los datos de inicio de sesión no son correctos');
      }
    });
}
}

import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'



@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  
  public myForm: FormGroup;
  public user: User;

  constructor(private formBuilder: FormBuilder, public userService: UserService, public router: Router) {
    this.buildForm()
  }
  public regist(){
    const user = this.myForm.value;
    console.log(user);
    
  }
  private buildForm(){

    const minPassLength = 8;

    this.myForm = this.formBuilder.group({

       nombre: [, Validators.required],
       usuario: [, Validators.required],
       email: [, [Validators.required, Validators.email]],
       password: [, [Validators.required, Validators.minLength(minPassLength)]],
       provincia: [, Validators.required],
       descripcion: [, Validators.required],
       foto: [, Validators.required],

    });

  }

registerUser() {
  if (this.myForm.valid) {
    const userData = this.myForm.value;
    this.userService.register(userData).subscribe((id: number) => {
        console.log("Campos guardados correctamente");
        this.userService.idRegistro = id;
        this.router.navigateByUrl('/register-deporte');
        
    });
  } else {
    console.log('Error al guardar datos del usuario');
  }}
}
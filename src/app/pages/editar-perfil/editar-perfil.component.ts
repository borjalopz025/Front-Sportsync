import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {

  public update_user: User 

  constructor(public userService: UserService, public router: Router) {
    this.update_user = this.userService.user;
  }
  

  editarPerfil(nombre:string, provincia:string, descripcion:string, foto:string): void {

   let actualizacion: boolean = false;

   if(nombre != ''){
   this.update_user.nombre = nombre;
   actualizacion = true;
   }

   if(provincia != ''){
   this.update_user.provincia = provincia;
   actualizacion = true;
   }

   if(descripcion != ''){
   this.update_user.descripcion = descripcion;
   actualizacion = true;
   }

   if(foto != ''){
   this.update_user.foto = foto;
   actualizacion = true;
   }
  
      this.userService.user = this.update_user;

      this.userService.editPerfil(this.update_user).subscribe(() => {
          console.log('Perfil actualizado con éxito');
          console.log(this.update_user);
          
          this.router.navigate(['/perfil']);
        })
  }

  cancelarPerfil(): void {
    this.router.navigate(['/perfil']);
  }
}

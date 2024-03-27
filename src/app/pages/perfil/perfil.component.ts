import { Component } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Deporte } from 'src/app/models/deporte';
import { UsEvent } from 'src/app/models/us-event';
import { Event } from 'src/app/models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  [x: string]: any;

  
  public us: UsEvent;

  public eventPerfil: Event[] = [];

  public usevent: UsEvent[] = [];

  mostrarContenido: number = 1

  public user: User;

  public deporte: Deporte[] = []

  public event : Event

  public perfil: Event[] = []

  public spoortUs


  constructor(public eventService: EventosService, private userService: UserService, public router: Router){
    
    this.user = this.userService.user

    this.event = this.eventService.event

    console.log(this.user);
    
    this.eventService.getSportUs().subscribe((data:any) =>{
      console.log(data);
      this.deporte = data
      for(let dep of this.deporte){
        this.spoortUs= [dep.deporte]
      }
    })


    this.userService.getProyect().subscribe((data:any) =>{
      console.log(data);
      
      this.eventPerfil = data
    })

   

  }
 
  mostrarContenido1(){

    this.mostrarContenido = 1
  }

   
  mostrarContenido2(){

    this.mostrarContenido = 2
       
    this.userService.getSeguidos().subscribe((data: any) =>{
      console.log(data);
      this.perfil = data
    })
      
  }

  botonEditar():void{
    this.router.navigate(['/editar-perfil']);
  }

  borrar(id_evento){
    console.log(id_evento);
    

    this.eventService.dejarDeSeguir(id_evento).subscribe((data:any)=>{
     console.log(data);
      this.perfil = this.perfil.filter( val =>{ return val.id_eventos != id_evento })
    })
  }
 
  
}

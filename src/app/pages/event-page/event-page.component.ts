import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Deporte } from 'src/app/models/deporte';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { EventosService } from 'src/app/shared/eventos.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {
  
  public dataList: Deporte[] = [];

  public id_deporte: {} = {}

  public deporteSelect: number;

  constructor( private eventService: EventosService, private router : Router, public userService : UserService){
     
    this.eventService.getSport().subscribe((data:any)=>{
      console.log(data);
      this.dataList = data.data
      this.dataList.forEach((data)=>{
        this.id_deporte[data.deporte] = data.id_deporte
      })
      console.log(this.id_deporte);
      
    })
  }

  

  public callevento(  titulo: string, fecha: number, descripcion: string, foto: string){
    
   
    console.log(this.userService.user.id_user);
    console.log(fecha)
    
    
    this.eventService.postEvent( new Event(this.deporteSelect,this.userService.user.id_user,titulo,fecha,descripcion,foto,"")).subscribe((data: any) =>{
      console.log(data);
      
      
    })
     this.router.navigateByUrl("/")
   }

   selectSport(nombre:string){
    console.log(nombre);

    this.deporteSelect = this.id_deporte[nombre]
    
   }

}

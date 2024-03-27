import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/shared/eventos.service';
import { UsEvent } from 'src/app/models/us-event';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() event: Event;

  @Input() user: Event;

  @Input() usEvent: UsEvent

 

  stafol: boolean = false;

  constructor(private usevent: EventosService, private userService: UserService){}
 
  btnClick(){

    this.usevent.btnFollow(new UsEvent(0,this.userService.user.id_user, this.event.id_eventos)).subscribe((data:any) =>{
      console.log(data);
      
    })
  }
 
 
 
 
  public btnfol(){

    this.stafol = !this.stafol;
  }
}

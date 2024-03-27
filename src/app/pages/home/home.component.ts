import { Component } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public home: Event[] = []

 constructor(private eventService: EventosService){
  
  
    this.eventService.getEventos().subscribe((data:any) =>{
      console.log(data.data);
      this.home = data.data
    })
 }

  

}

import { Component } from '@angular/core';
import { EventosService } from 'src/app/shared/eventos.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {

  public home: Event[] = []


  constructor(private eventService: EventosService){

    this.eventService.getEventos().subscribe((data:any) =>{
      console.log(data.data);
      this.home = data.data
    })
  }

  buscar(provincia,titulo):void{
    
    if(provincia || titulo)
    {
      this.eventService.getOne(provincia,titulo).subscribe((data:any)=>{
        console.log(data);
        this.home = data.data
      })
    }else{

      console.log('entran todos los eventos de todas la provincias');
      
      this.eventService.getEventos().subscribe((data:any) =>{
        console.log(data);
        this.home = data.data
      })
    }

  }

  buscar2(titulo){
    
    if(titulo != 0)
    {
   
      console.log('entro a TITULO desde el componente');

      this.eventService.getone2(titulo).subscribe((data:any)=>{
        console.log(data);
        this.home = data.data
      })
    }else{

      console.log('entran todos los eventos de todas la provincias');
      
      this.eventService.getEventos().subscribe((data:any) =>{
        console.log(data);
        this.home = data.data
      })
    }
  }
}
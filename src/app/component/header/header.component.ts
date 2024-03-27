import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public userService: UserService, public router: Router){}

  public cerrarSesion(){

    this.userService.logueado = false;
    this.userService.user = null;
    this.router.navigate(['/login']);
  }
}

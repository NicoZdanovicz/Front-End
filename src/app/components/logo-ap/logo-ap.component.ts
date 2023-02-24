import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonService } from 'src/app/service/button.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {
  isLogged = false;
  modalBoton: boolean;
  constructor(private router:Router, private tokenService: TokenService,private modalSS: ButtonService) { }

  ngOnInit(): void{
    this.modalSS.$modal.subscribe((valor) => {this.modalBoton = valor})

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  openModal(){
    this.modalBoton = true;
  }
}

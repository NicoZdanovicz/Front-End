import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ButtonService } from 'src/app/service/button.service';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyectos: Proyectos[] = [];
  modalBoton: boolean;
  constructor(private proyectosS: ProyectosService, private tokenService: TokenService, private modalSS: ButtonService){}
  isLogged = false;

  ngOnInit(): void{
    this.modalSS.$modal.subscribe((valor) => {this.modalBoton = valor})
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarProyectos(): void{
    this.proyectosS.lista().subscribe(
      data =>{
        this.proyectos = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectosS.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

  openModal(){
    this.modalBoton = true;
  }
}

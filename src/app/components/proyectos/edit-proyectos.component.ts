import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit{
  proyectos: Proyectos = null;
  isLogged = false;
  constructor(private proyectoS: ProyectosService, private activatedRouter : ActivatedRoute, private router: Router, private tokenService: TokenService){}
  
  ngOnInit():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
      alert("No tienes permitido ingresar");
      this.router.navigate(['']);
    }
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyectos).subscribe(data => {
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar el Proyecto");
      this.router.navigate(['']);
    })
  }
}

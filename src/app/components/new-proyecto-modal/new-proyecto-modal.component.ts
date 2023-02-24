import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ButtonService } from 'src/app/service/button.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto-modal',
  templateUrl: './new-proyecto-modal.component.html',
  styleUrls: ['./new-proyecto-modal.component.css']
})
export class NewProyectoModalComponent implements OnInit{
  nombreP: string;
  descripcionP: string;
  img: string;
  constructor(private modalSS: ButtonService, private proyectoS: ProyectosService, private router: Router){}

  ngOnInit(): void {
    
  }
  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.img);
    this.proyectoS.save(proyectos).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
        window.location.reload();
      }, err =>{
        alert("Formato Incorrecto");
        this.router.navigate(['']);
      }
    )
  }
  closeModal(){
    this.modalSS.$modal.emit(false)
  }

}

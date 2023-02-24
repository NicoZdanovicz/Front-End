import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ButtonService } from 'src/app/service/button.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-edu-modal',
  templateUrl: './new-edu-modal.component.html',
  styleUrls: ['./new-edu-modal.component.css']
})
export class NewEduModalComponent implements OnInit{
  nombreE: string;
  descripcionE: string;
  
  constructor(private modalSS: ButtonService, private educacionS: EducacionService, private router: Router){}

  ngOnInit(): void {
    
  }
  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        window.location.reload();
      }, err =>{
        alert("Fallo");
        window.location.reload();
      }
    )
  }
  closeModal(){
    this.modalSS.$modal.emit(false)
  }
}

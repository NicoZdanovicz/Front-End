import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ButtonService } from 'src/app/service/button.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-hys-modal',
  templateUrl: './new-hys-modal.component.html',
  styleUrls: ['./new-hys-modal.component.css']
})
export class NewHysModalComponent implements OnInit{
  nombre: string;
  porcentaje: number;
  img: string;

  constructor(private modalSS: ButtonService, private hysS: SkillService, private router: Router){}

  ngOnInit(): void {
    
  }
  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje, this.img);
    this.hysS.save(skill).subscribe(
      data =>{
        alert("Skill añadida correctamente");
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

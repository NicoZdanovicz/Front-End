import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { ButtonService } from 'src/app/service/button.service';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit{
  skill: Skill[] = [];
  modalBoton: boolean;
  constructor(private skillS: SkillService, private tokenService: TokenService, private modalSS: ButtonService){}
  isLogged = false;

  ngOnInit(): void{
    this.modalSS.$modal.subscribe((valor) => {this.modalBoton = valor})
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }

  delete(id: number): void{
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data =>{
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
  openModal(){
    this.modalBoton = true;
  }
}

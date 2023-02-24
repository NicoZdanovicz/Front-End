import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ButtonService } from 'src/app/service/button.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-exp-modal',
  templateUrl: './new-exp-modal.component.html',
  styleUrls: ['./new-exp-modal.component.css']
})
export class NewExpModalComponent {
  nombreE: string;
  descripcionE: string;
  
  constructor(private modalSS: ButtonService, private expeS: SExperienciaService, private router: Router){}

  ngOnInit(): void {
    
  }
  onCreate(): void{
    const experiencia = new Experiencia(this.nombreE, this.descripcionE);
    this.expeS.save(experiencia).subscribe(
      data =>{
        alert("Experiencia añadida correctamente");
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

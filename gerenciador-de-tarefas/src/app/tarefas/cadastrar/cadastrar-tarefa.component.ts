import { Component, ViewChild } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent {
  @ViewChild('formTarefa', {static: true}) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router){}

    ngOnInit(){
      this.tarefa = new Tarefa();
    }

    cadastrar(): void {
      if(this.formTarefa.form.valid){
        this.tarefaService.cadastrar(this.tarefa);
        this.router.navigate(["/tarefas"]);
      }
    }
}

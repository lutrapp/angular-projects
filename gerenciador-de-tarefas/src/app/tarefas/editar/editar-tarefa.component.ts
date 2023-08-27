import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from './../shared/tarefa.service';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent {
  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    const id = +this.route.snapshot.params['id']; // + tranforma a string em number
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}

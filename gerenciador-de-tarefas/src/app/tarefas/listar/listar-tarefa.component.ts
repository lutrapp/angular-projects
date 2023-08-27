import { Component } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent {
  constructor(private tarefaService: TarefaService){}

  tarefas: Tarefa[];

  ngOnInit(){
    this.tarefas = this.listarTodos();
    // this.tarefas = [new Tarefa(1, "tarefa 1", false), new Tarefa(2, "tarefa 222", true)];
  }
  listarTodos():Tarefa[] {
    return this.tarefaService.listarTodos();
  }

}

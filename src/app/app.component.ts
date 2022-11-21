import { Component } from '@angular/core';
import { Tarefa } from './models/todoitem';
import { TarefasLista } from './models/todolist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showComplete: boolean = false;
  list = new TarefasLista('Senac', [
    new Tarefa('Estudar HTML'),
    new Tarefa('Estudar CSS'),
    new Tarefa('Estudar JAVASCRIPT'),
  ]);
  get username(): string {
    return this.list.user;
  }
  get itemCount(): number {
    return this.list.items.filter((item: any) => !item.complete).length;
  }

  addTarefa(nomeTarefa: string) {
    this.list.addTarefa(nomeTarefa);
  }
}

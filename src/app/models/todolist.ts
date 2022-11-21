import { Tarefa } from './todoitem';

export class TarefasLista {
  user: any = [];
  items: any;

  constructor(public usuario: string, private listaTarefas: Tarefa[] = []) {}
  get tarefas(): readonly Tarefa[] {
    return this.listaTarefas;
  }
  addTarefa(nomeTarefa: string) {
    this.listaTarefas.push(new Tarefa(nomeTarefa));
  }
}

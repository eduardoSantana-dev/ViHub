declare global {
  type Inspiracoes = {
      id: number;
      nome: string;
      data: string
  }
  type ideia = {
      id: number;
      nome: string;
      data: string
  }
    type materia = {
      id: number;
      nome: string;
      totalTarefas: number;
      completadas:number
  }
  type tarefa = {
      id: number;
      nome: string;
      fase: string
  }
  interface Tarefa {
    id: number;
    nome: string;
    fase: string;
  }
  interface Inspiracoes {
    id: number;
    nome: string;
    data: string;
  }
  interface ideia {
    id: number;
    nome: string;
    data: string;
  }
  interface Props {
    header?: React.ReactNode;
}

}

export { };

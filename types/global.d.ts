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
    type estudo = {
      id: number;
      nome: string;
      data: string
  }
    type material = {
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
    type duvida = {
      id: number;
      nome: string;
      data: string
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
   interface duvida {
    id: number;
    nome: string;
    data: string;
  }
   interface material {
    id: number;
    nome: string;
    data: string;
  }
   interface estudo {
    id: number;
    nome: string;
    data: string;
  }
  interface Props {
    header?: React.ReactNode;
}
 export type Usuario = {
  id: string;
  nome: string;
  email: string;
  senha: string;
  criado_em: number;
  atualizado_em: number;
};

export type Projeto = {
  id: string;
  name: string;
  id_usuario: string;
  status: string;
  criado_em: number;
  atualizado_em: number;
};

export type Tarefa = {
  id: string;
  id_usuario: string;
  descricao: string;
  status: string;
  prazo?: string;
  criado_em: number;
  atualizado_em: number;
};

export type TarefaProjeto = {
  id: string;
  id_projeto: string;
  descricao: string;
  status: string;
  prazo?: string;
  criado_em: number;
  atualizado_em: number;
};

export type Ideia = {
  id: string;
  id_projeto: string;
  descricao: string;
  criado_em: number;
  atualizado_em: number;
};

export type Inspiracao = {
  id: string;
  id_projeto: string;
  titulo: string;
  criado_em: number;
  atualizado_em: number;
};

export type ImgInspiracao = {
  id: string;
  id_inspiracao: string;
  img: string;
  criado_em: number;
  atualizado_em: number;
};

export type LinkInspiracao = {
  id: string;
  id_inspiracao: string;
  url: string;
  criado_em: number;
  atualizado_em: number;
};

export type Estudo = {
  id: string;
  id_usuario: string;
  nome: string;
  status: string;
  criado_em: number;
  atualizado_em: number;
};

export type Materia = {
  id: string;
  id_estudo: string;
  nome: string;
  criado_em: number;
  atualizado_em: number;
};

export type TarefaMateria = {
  id: string;
  id_materia: string;
  status: string;
  descricao: string;
  prazo: string;
  criado_em: number;
  atualizado_em: number;
};

export type AnotacaoMateria = {
  id: string;
  id_materia: string;
  anotacao: string;
  criado_em: number;
  atualizado_em: number;
};

export type Duvida = {
  id: string;
  id_materia: string;
  descricao: string;
  criado_em: number;
  atualizado_em: number;
};

export type Material = {
  id: string;
  id_materia: string;
  anexo?: string;
  criado_em: number;
  atualizado_em: number;
};

export type Planejamento = {
  id: string;
  id_usuario: string;
  dia_semana: string;
  id_atividade: string;
  atividade: string;
  criado_em: number;
  atualizado_em: number;
};
type ListaProps = {
  header: React.ReactNode;
  selecionado: string;
  pesquisa: string;
};
}

export { };

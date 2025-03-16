// aluno.model.ts
export interface IMeta {
  area: string;
  valor: number;
}

export interface IAluno {
  id: number;
  nome?: string | null;
  metas?: IMeta[]; // Adicionando a propriedade metas, que será um array de IMeta
}

export type NewAluno = Omit<IAluno, 'id'> & { id: null };

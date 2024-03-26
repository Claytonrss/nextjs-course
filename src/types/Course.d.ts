export type Course = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  error: string;
  aulas: Class[];
};

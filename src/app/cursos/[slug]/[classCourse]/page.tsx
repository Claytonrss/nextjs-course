import { getClassBySlug } from "@/api/courses";
import Link from "next/link";

type Params = {
  params: {
    slug: string;
    classCourse: string;
  };
}

export default async function CoursePage({ params }: Params) {
  const { slug, classCourse } = params;
  const classData = await getClassBySlug(slug, classCourse);

  if(!classData || classData.error) {
    return <div>
      <h1>{classData?.error} || Nenhuma aula encontrada</h1>
      <Link href={`/cursos`}>Voltar para cursos</Link>
    </div>
  }

  return (
    <main>
      <h1>{classData.nome}</h1>
      <p>{classData.descricao}</p>
      <p>{classData.tempo} minutos</p>
      <Link href={`/cursos/${slug}`}>Voltar</Link>
    </main>
  );
}

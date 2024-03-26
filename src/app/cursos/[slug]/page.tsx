import { getCourseBySlug } from "@/api/courses";
import Link from "next/link";

type Params = {
  params: {
    slug: string;
  };
};

export default async function CoursePage({ params }: Params) {
  const { slug } = params;
  const course = await getCourseBySlug(slug);

  if(!course || course.error) {
    return <div>
      <h1>{course?.error || "Nenhum curso encontrado"}</h1>
      <Link href={`/cursos`}>Voltar para cursos</Link>
    </div>
  }

  return (
    <main>
      <h1>{course.nome}</h1>
      <p>{course.descricao}</p>
      <p>{course.total_aulas} aulas</p>
      <p>{course.total_horas} horas</p>

      <h2>Aulas</h2>
      <ul>
        {course.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${course.slug}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/cursos">Voltar</Link>
    </main>
  );
}

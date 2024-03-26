import { getCourses } from "@/api/courses"
import Link from "next/link"

type Course = {
    id: number
    slug: string
    nome: string
    descricao: string
    total_aulas: number
    total_horas: number
}

export default async function CoursesPage() {
    const courses = await getCourses()

    if(!courses) {
        return <div>
            <h1>Nenhum curso encontrado</h1>
        </div>
    }
    
    return (
        <main>
            <h1>Cursos</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <Link href={`/cursos/${course.slug}`}>{course.nome}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
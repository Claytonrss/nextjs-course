import { Class } from "@/types/Class";
import { Course } from "@/types/Course";

export async function getCourses() {
    try {
      const courseResponse = await fetch('https://api.origamid.online/cursos');
      return (await courseResponse.json()) as Course[];
    } catch (error) {
      console.error(error)
      return undefined
    }
  }

  export async function getCourseBySlug(slug: string) {
    try {
      const courseResponse = await fetch(`https://api.origamid.online/cursos/${slug}`);
      return (await courseResponse.json()) as Course;
    } catch (error) {
      console.error(error)
      return undefined
    }
  }

  export async function getClassBySlug(slug: string, classSlug: string) {
    try {
      const classResponse = await fetch(`https://api.origamid.online/cursos/${slug}/${classSlug}`);
      return (await classResponse.json()) as Class;
    } catch (error) {
      console.error(error)
      return undefined
    }
  }
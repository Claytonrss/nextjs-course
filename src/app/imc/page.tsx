import IMC from "@/components/components/IMC";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Curso de NextJS | IMC",
    description: "Criado por Clayton Rafael",
  };
  export default function SobrePage() {
    return (
      <main>
        <IMC/>
      </main>
    );
  }
  
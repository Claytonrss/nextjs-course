import ClientFetch from "@/components/components/client-fetch";
import ServerFetch from "@/components/components/server-fetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso de NextJS | Fetch",
  description: "Criado por Clayton Rafael",
};
export default function SobrePage() {
  return (
    <main>
      <h1>Obter dados</h1>
      <ServerFetch />
      <ClientFetch />
    </main>
  );
}

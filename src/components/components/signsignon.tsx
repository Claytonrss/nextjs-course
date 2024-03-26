import { cookies } from "next/headers";
import Link from "next/link";

type UserLoggedIn = {
  autorizado: boolean;
  usuario: string;
};

async function getUserLoggedIn() {
  const token = cookies().get("token")?.value;
  if (!token) return null;
  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.ok ? ((await response.json()) as UserLoggedIn) : null;
}

export async function SignInSignOn() {
  const userLoggedIn = await getUserLoggedIn();

  if (!userLoggedIn) {
    return <Link href="/login">Login</Link>;
  }

  return <span>{`${userLoggedIn.usuario}`}</span>;
}

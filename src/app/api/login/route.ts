import { cookies } from "next/headers";
import { NextRequest } from "next/server";

async function authenticate(
  username: string,
  password: string
): Promise<string> {
  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.status !== 200) {
    throw new Error("Login falhou");
  }

  const { token } = await response.json();

  if (!token) {
    throw new Error("Token não encontrado");
  }

  return token;
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = (await request.json()) || {};

    if (!username || !password) {
      return Response.json({ error: "Missing username or password" });
    }

    const token = await authenticate(username, password);

    if (!token) {
      return Response.json({ error: "login mal sucedido" });
    }

    cookies().set("token", token, {
      secure: true,
      httpOnly: true,
    });

    return Response.json({ status: 200, message: "login bem sucedido" });
  } catch (error) {
    console.error(error);
    return Response.json({ status: 401, error: "Login mal sucedido" });
  }
}

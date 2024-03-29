"use server";

import { LoginParams } from "@/types/Login";
import { ENDPOINTS } from "@/config/apiConfig";
import { setCookie } from "./cookies";

export async function login({ username, password }: LoginParams) {
  try {
    const response = await fetch(ENDPOINTS.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      return { status: response.status, error: "Login falhou" };
    }

    const dataLogin = await response.json();
    setCookie("token-action", dataLogin.token);
    return dataLogin;
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    throw error;
  }
}

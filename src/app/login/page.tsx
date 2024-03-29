"use client";
import { Form } from "@/components/components/form";
import { ENDPOINTS } from "@/config/apiConfig";
import { useLogin } from "@/hooks/useLogin";
import { LoginParams } from "@/types/Login";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login, isLoading, error } = useLogin({
    fetchLogin,
    actionAfterLogin,
  });
  const router = useRouter();

  async function fetchLogin({username, password}: LoginParams) {
    const response = await fetch(ENDPOINTS.loginLocal, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if(response.ok) {
      return await response.json();
    }
    return {
      error: await response.text(),
    }
  }

  function actionAfterLogin() {
    router.push("/");
  }

  return (
    <div>
      <h1>Login</h1>
      <Form login={login} isLoading={isLoading} error={error} />
    </div>
  );
}

"use client";
import { Form } from "@/components/components/form";
import { useLogin } from "@/hooks/useLogin";
import { deleteCookie, getCookie } from "@/server-actions/cookies";
import { login } from "@/server-actions/login";
import { LoginParams } from "@/types/Login";
import { useEffect, useState } from "react";

export default function LoginActionPage() {
  const COOKIE_NAME = "token-action";
  const [token, setToken] = useState<string | null>(null);
  const [showToken, setShowToken] = useState(false);
  const {
    login: loginHook,
    isLoading,
    error,
  } = useLogin({
    fetchLogin,
    actionAfterLogin,
  });

  async function fetchLogin({ username, password }: LoginParams) {
    return await login({ username, password });
  }

  function actionAfterLogin() {
    window.location.reload();
  }

  async function searchToken() {
    const token = await getCookie(COOKIE_NAME);
    if (token) {
      setToken(token);
    }
  }

  useEffect(() => {
    searchToken();
  }, []);

  return (
    <div>
      <h1>Login action</h1>
      {token ? (
        <div>
          <p>Logado</p>
          <button onClick={() => setShowToken(!showToken)}>Exibir Token</button>
          <button
            onClick={async () => {
              await deleteCookie(COOKIE_NAME);
              actionAfterLogin();
            }}
          >
            Sair
          </button>
          {showToken && <p>{token}</p>}
        </div>
      ) : (
        <Form login={loginHook} isLoading={isLoading} error={error} />
      )}
    </div>
  );
}

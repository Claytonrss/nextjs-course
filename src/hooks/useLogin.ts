import { LoginParams } from "@/types/Login";
import { useState } from "react";

interface ResponseType extends Response {
  error?: string;
  token?: string;
}

type UseLoginType = {
  fetchLogin: ({username, password}: LoginParams) => Promise<ResponseType>;
  actionAfterLogin: () => void;
};

export const useLogin = ({ fetchLogin, actionAfterLogin }: UseLoginType) => {
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({ username, password }: LoginParams) => {
    setIsLoading(true);
    setError(undefined);

    try {
      const data = await fetchLogin({username, password});
      console.log("🚀 ~ login ~ data:", data)

      if (data.token) {
        actionAfterLogin();
      } else {
        setError(data.error);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Ocorreu um erro inesperado";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

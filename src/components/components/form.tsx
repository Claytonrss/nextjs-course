"use client"
import { useLogin } from "@/hooks/useLogin";

export function Form() {
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    await login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username</span>
        <input type="text" name="username" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      {isLoading && <p style={{ color: "green" }}>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

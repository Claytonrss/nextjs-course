"use client";

import React from "react";
import { LoginParams } from "@/types/Login";

type FormType = {
  login: (params: LoginParams) => Promise<void>;
  isLoading: boolean;
  error?: string;
};

export function Form({ login, isLoading, error }: FormType) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if (username && password) {
      await login({ username, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-busy={isLoading}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" name="username" aria-required="true" />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        aria-required="true"
      />

      {isLoading && <p style={{ color: "green" }}>Carregando...</p>}
      {error && (
        <p style={{ color: "red" }} aria-live="assertive">
          {error}
        </p>
      )}

      <button type="submit">Login</button>
    </form>
  );
}

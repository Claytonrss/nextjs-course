"use client";

import { createProduct } from "@/actions/products";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";

function ButtonSubmit() {
  const { pending } = useFormStatus();  

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Cadastrando..." : "Cadastrar"}
    </button>
  );
}

export function FormAddProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    const formData = new FormData(event.currentTarget);
    const nome = formData.get("nome")?.toString() || "";
    const preco = formData.get("preco")?.toString();
    const descricao = formData.get("descricao")?.toString() || "";
    const estoque = formData.get("estoque")?.toString();
    const importado = formData.get("importado") === "on" ? 1 : 0;

    if (nome && preco && descricao && estoque) {
      try {
        const product = {
          nome,
          preco: Number(preco),
          descricao,
          estoque: Number(estoque),
          importado: importado as 1 | 0,
        };
        const result = await createProduct(product);
        console.log("Produto cadastrado com sucesso:", result);
      } catch (error) {
        setError("Falha ao cadastrar o produto. Tente novamente.");
        console.error("Erro ao cadastrar produto:", error);
      }
    } else {
      setError("Por favor, preencha todos os campos obrigatórios.");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} aria-busy={isLoading}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" name="nome" aria-required="true" />

      <label htmlFor="preco">Preço</label>
      <input id="preco" type="number" name="preco" aria-required="true" />

      <label htmlFor="descricao">Descrição</label>
      <input id="descricao" type="text" name="descricao" aria-required="true" />

      <label htmlFor="estoque">Estoque</label>
      <input id="estoque" type="number" name="estoque" aria-required="true" />

      <label htmlFor="importado">
        <input
          type="checkbox"
          id="importado"
          name="importado"
          aria-required="true"
        />
        Importado
      </label>
      {isLoading && <p style={{ color: "green" }}>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ButtonSubmit />
    </form>
  );
}

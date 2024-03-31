"use client";

import { createProduct } from "@/actions/products";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

function ButtonSubmit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Cadastrando..." : "Cadastrar"}
    </button>
  );
}

export function FormAddProduct() {
  const [state, formAction] = useFormState(createProduct, {
    errors: [],
  });

  return (
    <form action={formAction}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" />
      <label htmlFor="preco">Preço</label>
      <input type="number" id="preco" name="preco" />
      <label htmlFor="descricao">Descrição</label>
      <input type="text" id="descricao" name="descricao" />
      <label htmlFor="estoque">Estoque</label>
      <input type="number" id="estoque" name="estoque" />
      <label htmlFor="importado">
        <input type="checkbox" id="importado" name="importado" />
        Importado
      </label>
      {state.errors.map((error, i) => (
        <p style={{ color: "red" }} key={i}>
          {error}
        </p>
      ))}
      <ButtonSubmit />
    </form>
  );
}

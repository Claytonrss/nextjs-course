"use server";

import { Product } from "@/types/Product";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function getProducts() {
  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      next: {
        revalidate: 60 * 5, // 5 min
        tags: ["get-products"],
      },
    });
    return (await response.json()) as Product[];
  } catch (error) {
    console.error(error);
    throw new Error("Falha ao tentar buscar os dados dos produtos");
  }
}

function isProductNameValid(name: unknown): boolean {
  return typeof name === "string" && name.length > 1;
}

function isProductPriceValid(price: unknown): boolean {
  return typeof price === "number" && price > 1;
}

function mountProduct(formData: FormData): Product {
  return {
    nome: formData.get("nome") as string,
    preco: Number(formData.get("preco")),
    descricao: formData.get("descricao") as string,
    estoque: Number(formData.get("estoque")),
    importado: formData.get("importado") ? 1 : 0,
  };
}

export async function createProduct(
  state: { errors: string[] },
  formData: FormData
) {
  const product = mountProduct(formData);

  const errors = [];
  if (!isProductNameValid(product.nome)) errors.push("Nome inválido.");
  if (!isProductPriceValid(product.preco)) errors.push("Preço inválido.");
  if (errors.length > 0) return { errors };

  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Erro ao adicionar o produto.");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }
  revalidateTag("get-products");
  redirect("/produtos");

  return { errors: [] };
}

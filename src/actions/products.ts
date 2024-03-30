import { Product } from "@/types/Product";

export async function getProducts() {
  try {
    const response = await fetch("https://api.origamid.online/produtos");
    return (await response.json()) as Product[];
  } catch (error) {
    console.error(error);
    throw new Error("Falha ao tentar buscar os dados dos produtos");
  }
}

export async function createProduct(product: Product) {
  console.log("🚀 ~ createProduct ~ product:", product)
  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(product),
    });
    console.log("🚀 ~ createProduct ~ response:", response)
    const newProduct = (await response.json()) as Product
    console.log("🚀 ~ createProduct ~ newProduct:", newProduct)
    return newProduct;
  } catch (error) {
    console.error("TESTEEEEEEEE");
    console.error(error);
    return undefined;
  }
}

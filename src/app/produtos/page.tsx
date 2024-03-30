import { getProducts } from "@/actions/products";

export default async function SobrePage() {
  const products = await getProducts();

  if(!products) {
    return <div>
      <h1>Nenhum produto encontrado</h1>
    </div>
  }

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => {
          const priceFormatted = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.preco);
          return (
            <li key={product.id}>
              {product.nome} | {priceFormatted}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

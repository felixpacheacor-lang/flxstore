import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  const produtos = [
    {
      nome: "Smartwatch Premium",
      preco: "199,90",
      imagem: "https://via.placeholder.com/200",
    },
    {
      nome: "Fone Bluetooth",
      preco: "149,90",
      imagem: "https://via.placeholder.com/200",
    },
    {
      nome: "Caixa de Som",
      preco: "299,90",
      imagem: "https://via.placeholder.com/200",
    },
    {
      nome: "Mouse Gamer",
      preco: "89,90",
      imagem: "https://via.placeholder.com/200",
    },
  ];

  return (
    <>
      <Header />
      <Banner />

      <main style={{ padding: "30px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#0057D9",
            marginBottom: "30px",
          }}
        >
          Produtos em Destaque
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {produtos.map((produto, index) => (
            <ProductCard
              key={index}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

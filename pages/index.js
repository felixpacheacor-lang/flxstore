import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import ProductCard from "../componentes/ProductCard";
import Footer from "../componentes/Footer";

export default function Home() {
  const produtos = [
    {
      nome: "Smartwatch Premium",
      preco: "199,90",
      imagem: "https://via.placeholder.com/250",
    },
    {
      nome: "Fone Bluetooth",
      preco: "149,90",
      imagem: "https://via.placeholder.com/250",
    },
    {
      nome: "Caixa de Som",
      preco: "299,90",
      imagem: "https://via.placeholder.com/250",
    },
    {
      nome: "Mouse Gamer",
      preco: "89,90",
      imagem: "https://via.placeholder.com/250",
    },
  ];

  return (
    <>
      <Header />
      <Banner />

      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {produtos.map((produto, index) => (
          <ProductCard key={index} {...produto} />
        ))}
      </main>

      <Footer />
    </>
  );
}

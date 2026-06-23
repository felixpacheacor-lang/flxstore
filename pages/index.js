export default function Home() {
  return (
    <div
      style={{
        background: "#f5f8ff",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          background: "#0057D9",
          color: "#fff",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h1>FLX Store</h1>

        <nav>
          <a href="/" style={{ color: "#fff", marginRight: "15px" }}>
            Início
          </a>
          <a href="/produtos" style={{ color: "#fff", marginRight: "15px" }}>
            Produtos
          </a>
          <a href="/afiliados" style={{ color: "#fff", marginRight: "15px" }}>
            Afiliados
          </a>
          <a href="/sobre" style={{ color: "#fff", marginRight: "15px" }}>
            Sobre
          </a>
          <a href="/contato" style={{ color: "#fff" }}>
            Contato
          </a>
        </nav>
      </header>

      <main style={{ padding: "30px" }}>
        <h2>Destaques</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,.1)",
            }}
          >
            <img
              src="https://via.placeholder.com/200"
              width="200"
              alt="Produto"
            />
            <h3>Produto 1</h3>
            <h2>R$ 99,90</h2>
            <button>Comprar</button>
          </div>
        </div>
      </main>
    </div>
  );
}

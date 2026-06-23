import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: "#f4f7fc", minHeight: "100vh" }}>

      {/* Cabeçalho */}
      <header
        style={{
          background: "#0057D9",
          color: "#fff",
          padding: "15px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h1 style={{ margin: 0 }}>FLX Store</h1>

        <input
          type="text"
          placeholder="Pesquisar produtos..."
          style={{
            width: "40%",
            minWidth: "220px",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <div>
          <button
            style={{
              marginRight: "10px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>

          <button
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: "#FFD700",
            }}
          >
            🛒 Carrinho
          </button>
        </div>
      </header>

      {/* Menu */}
      <nav
        style={{
          background: "#003f9e",
          padding: "12px",
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
          Início
        </Link>

        <Link href="/produtos" style={{ color: "#fff", textDecoration: "none" }}>
          Produtos
        </Link>

        <Link href="/afiliados" style={{ color: "#fff", textDecoration: "none" }}>
          Afiliados
        </Link>

        <Link href="/sobre" style={{ color: "#fff", textDecoration: "none" }}>
          Sobre
        </Link>

        <Link href="/contato" style={{ color: "#fff", textDecoration: "none" }}>
          Contato
        </Link>
      </nav>

      {/* Banner */}
      <section
        style={{
          margin: "30px",
          background: "linear-gradient(90deg,#0057D9,#00A3FF)",
          color: "#fff",
          padding: "50px",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px" }}>
          Bem-vindo à FLX Store
        </h1>

        <p style={{ fontSize: "22px" }}>
          Tecnologia, eletrônicos, moda, casa, esportes e muito mais.
        </p>

        <button
          style={{
            padding: "15px 35px",
            fontSize: "18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#FFD700",
          }}
        >
          Ver Ofertas
        </button>
      </section>

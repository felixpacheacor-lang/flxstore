import Link from "next/link";

export default function Home() {
return (
<div
style={{
fontFamily: "Arial, sans-serif",
backgroundColor: "#0a0a0a",
color: "#fff",
minHeight: "100vh",
}}
>
<header
style={{
background: "#000",
borderBottom: "2px solid #d4af37",
padding: "20px",
textAlign: "center",
}}
>
<h1
style={{
color: "#d4af37",
fontSize: "42px",
margin: 0,
}}
>
FLX STORE
</h1>

    <p style={{ color: "#ccc" }}>
      Tecnologia, Esportes e Oportunidades
    </p>

    <nav
      style={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link href="/">Início</Link>
      <Link href="/produtos">Produtos</Link>
      <Link href="/afiliados">Afiliados</Link>
      <Link href="/contato">Contato</Link>
    </nav>
  </header>

  <section
    style={{
      textAlign: "center",
      padding: "80px 20px",
      background:
        "linear-gradient(to bottom, #000000, #1a1a1a)",
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        fontSize: "48px",
      }}
    >
      FLX STORE
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "20px auto",
        fontSize: "20px",
      }}
    >
      Encontre os melhores produtos de academia,
      eletrônicos, celulares, esportes e muito mais.
    </p>

    <a
      href="/produtos"
      style={{
        background: "#d4af37",
        color: "#000",
        padding: "15px 30px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Ver Produtos
    </a>
  </section>

  <section style={{ padding: "40px 20px" }}>
    <h2 style={{ color: "#d4af37" }}>
      Categorias Principais
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(180px,1fr))",
        gap: "20px",
      }}
    >
      <div>🏋️ Academia</div>
      <div>⚽ Esportes</div>
      <div>📱 Celulares</div>
      <div>🎧 Fones</div>
      <div>🔌 Carregadores</div>
      <div>🏠 Eletrodomésticos</div>
    </div>
  </section>

  <section
    style={{
      background: "#111",
      padding: "50px 20px",
      textAlign: "center",
    }}
  >
    <h2 style={{ color: "#d4af37" }}>
      Programa de Afiliados
    </h2>

    <p>
      Ganhe comissões divulgando produtos da FLX Store.
    </p>

    <a
      href="/afiliados"
      style={{
        background: "#d4af37",
        color: "#000",
        padding: "12px 25px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Quero ser Afiliado
    </a>
  </section>

  <footer
    style={{
      borderTop: "1px solid #d4af37",
      padding: "20px",
      textAlign: "center",
    }}
  >
    <p>WhatsApp: (11) 99121-7277</p>
    <p>felixpacheacor@gmail.com</p>
  </footer>
</div>

);
        }

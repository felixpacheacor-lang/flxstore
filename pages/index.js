import Link from "next/link";

export default function Home() {
return (
<div
style={{
background: "#0A0A0A",
color: "#FFFFFF",
minHeight: "100vh",
fontFamily: "Arial, sans-serif",
}}
>
{/* TOPO */}
<header
style={{
background: "#000",
borderBottom: "2px solid #D4AF37",
padding: "15px 20px",
position: "sticky",
top: 0,
zIndex: 1000,
}}
>
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
flexWrap: "wrap",
}}
>
<div>
<h1
style={{
color: "#D4AF37",
margin: 0,
letterSpacing: "2px",
}}
>
FLX STORE
</h1>

        <small style={{ color: "#999" }}>
          Tecnologia • Esportes • Academia
        </small>
      </div>

      <nav
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "10px",
        }}
      >
        <Link href="/">Início</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/afiliados">Afiliados</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </div>
  </header>

  {/* BANNER */}
  <section
    style={{
      textAlign: "center",
      padding: "90px 20px",
      background:
        "linear-gradient(135deg,#000000,#181818,#000000)",
    }}
  >
    <h2
      style={{
        color: "#D4AF37",
        fontSize: "52px",
        marginBottom: "20px",
      }}
    >
      FLX STORE
    </h2>

    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        fontSize: "20px",
        color: "#DDD",
      }}
    >
      As melhores ofertas em eletrônicos,
      celulares, academia, esportes,
      acessórios e oportunidades para afiliados.
    </p>

    <div style={{ marginTop: "35px" }}>
      <a
        href="/produtos"
        style={{
          background: "#D4AF37",
          color: "#000",
          padding: "15px 30px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        VER PRODUTOS
      </a>
    </div>
  </section>

  {/* CATEGORIAS */}
  <section style={{ padding: "50px 20px" }}>
    <h2
      style={{
        textAlign: "center",
        color: "#D4AF37",
      }}
    >
      Categorias
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(180px,1fr))",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <div>🏋️ Academia</div>
      <div>⚽ Esportes</div>
      <div>📱 Celulares</div>
      <div>🎧 Fones</div>
      <div>🔌 Carregadores</div>
      <div>💾 Pen Drives</div>
      <div>⌚ Smartwatch</div>
      <div>🏠 Eletrodomésticos</div>
    </div>
  </section>

  {/* PRODUTOS */}
  <section
    style={{
      padding: "50px 20px",
      background: "#111",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        color: "#D4AF37",
      }}
    >
      Produtos em Destaque
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          border: "1px solid #D4AF37",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h3>🎧 Fone Bluetooth</h3>
        <p>Qualidade premium.</p>
      </div>

      <div
        style={{
          border: "1px solid #D4AF37",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h3>📱 Smartphone</h3>
        <p>Ofertas especiais.</p>
      </div>

      <div
        style={{
          border: "1px solid #D4AF37",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h3>⌚ Smartwatch</h3>
        <p>Alta tecnologia.</p>
      </div>
    </div>
  </section>

  {/* AFILIADOS */}
  <section
    style={{
      textAlign: "center",
      padding: "60px 20px",
    }}
  >
    <h2 style={{ color: "#D4AF37" }}>
      Programa de Afiliados FLX Store
    </h2>

    <p>
      Divulgue produtos e ganhe comissões.
    </p>

    <a
      href="/afiliados"
      style={{
        background: "#D4AF37",
        color: "#000",
        padding: "15px 25px",
        borderRadius: "10px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      QUERO SER AFILIADO
    </a>
  </section>

  {/* RODAPÉ */}
  <footer
    style={{
      borderTop: "1px solid #D4AF37",
      textAlign: "center",
      padding: "30px 20px",
      color: "#AAA",
    }}
  >
    <p>WhatsApp: (11) 99121-7277</p>
    <p>felixpacheacor@gmail.com</p>
    <p>© FLX Store - Todos os direitos reservados</p>
  </footer>

  {/* BOTÃO WHATSAPP */}
  <a
    href="https://wa.me/5511991217277"
    target="_blank"
    style={{
      position: "fixed",
      right: "20px",
      bottom: "20px",
      background: "#25D366",
      color: "#FFF",
      padding: "15px 18px",
      borderRadius: "50px",
      textDecoration: "none",
      fontWeight: "bold",
      boxShadow: "0 0 10px rgba(0,0,0,.4)",
    }}
  >
    WhatsApp
  </a>
</div>

);
  }

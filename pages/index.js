export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>FLX Store</h1>
        <p>Ofertas, promoções e produtos com entrega para todo Brasil</p>
      </header>

      <main style={{ padding: "20px" }}>
        <h2>Bem-vindo à FLX Store</h2>

        <p>
          Encontre produtos selecionados com os melhores preços e ofertas.
        </p>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <h3>Contato</h3>

          <p>
            <strong>WhatsApp:</strong> (11) 99121-7277
          </p>

          <p>
            <strong>E-mail:</strong> felixpacheacor@gmail.com
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <h3>Produtos em Destaque</h3>

          <p>Em breve você verá aqui os produtos para divulgação e comissão.</p>
        </div>
      </main>
    </div>
  );
}
export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "#000",
          color: "#fff",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h1>FLX Store</h1>
        <p>As melhores ofertas da internet em um só lugar</p>
      </header>

      <section style={{ padding: "20px" }}>
        <h2>🔥 Produtos em Destaque</h2>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "15px",
          }}
        >
          <h3>Produto 1</h3>
          <p>Descrição do produto.</p>

          <a
            href="#"
            style={{
              background: "#000",
              color: "#fff",
              padding: "10px 15px",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            Comprar Agora
          </a>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "15px",
          }}
        >
          <h3>Produto 2</h3>
          <p>Descrição do produto.</p>

          <a
            href="#"
            style={{
              background: "#000",
              color: "#fff",
              padding: "10px 15px",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            Comprar Agora
          </a>
        </div>
      </section>

      <section style={{ padding: "20px" }}>
        <h2>Contato</h2>

        <p>WhatsApp: (11) 99121-7277</p>
        <p>E-mail: felixpacheacor@gmail.com</p>
      </section>

      <a
        href="https://wa.me/5511991217277"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "#fff",
          padding: "15px",
          borderRadius: "50%",
          textDecoration: "none",
          fontSize: "24px",
        }}
      >
        💬
      </a>
    </div>
  );
}

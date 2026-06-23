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

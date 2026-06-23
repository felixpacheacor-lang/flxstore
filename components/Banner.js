export default function Banner() {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #0057D9, #0099FF)",
        color: "#fff",
        padding: "60px 20px",
        textAlign: "center",
        borderRadius: "12px",
        margin: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "15px",
        }}
      >
        Bem-vindo à FLX Store
      </h1>

      <p
        style={{
          fontSize: "20px",
          marginBottom: "25px",
        }}
      >
        Os melhores produtos com os menores preços.
      </p>

      <button
        style={{
          background: "#FFD700",
          color: "#000",
          border: "none",
          padding: "15px 30px",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Ver ofertas
      </button>
    </section>
  );
          }

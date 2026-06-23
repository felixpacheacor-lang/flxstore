export default function Afiliados() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Programa de Afiliados FLX Store</h1>

      <p>
        Cadastre-se para divulgar produtos e ganhar comissões.
      </p>

      <form>
        <input
          type="text"
          placeholder="Nome Completo"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="email"
          placeholder="E-mail"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button type="submit">
          Solicitar Cadastro
        </button>
      </form>
    </div>
  );
}

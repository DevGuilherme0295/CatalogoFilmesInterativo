import { Link } from "react-router";

function NaoEncontrada() {
  return (
    <section className="nao-encontrada">
      <h1>404</h1>
      <p>Ops! A página que você procura não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </section>
  );
}

export default NaoEncontrada;

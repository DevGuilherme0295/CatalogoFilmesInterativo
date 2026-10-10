import { useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard/MovieCard";

function Busca({ favoritos, alternarFavorito }) {
  const [termo, setTermo] = useState("");
  const [resultados, setResultados] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const [buscou, setBuscou] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (termo.trim() === "") {
      setErro("Digite o nome de um filme para buscar.");
      return;
    }

    setErro("");
    setLoading(true);

    try {
      const dados = await searchMovies(termo.trim());
      setResultados(dados.results);
      setBuscou(true);
    } catch (error) {
      setErro(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h1>Buscar Filmes</h1>

      <form className="form-busca" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome do filme"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {erro && <p className="mensagem erro">{erro}</p>}
      {loading && <p className="mensagem">Buscando...</p>}

      {!loading && buscou && resultados.length === 0 && (
        <p className="mensagem">Nenhum filme encontrado.</p>
      )}

      <div className="grid">
        {resultados.map((filme) => (
          <MovieCard
            key={filme.id}
            movie={filme}
            favorito={favoritos.some((f) => f.id === filme.id)}
            onFavoritar={alternarFavorito}
          />
        ))}
      </div>
    </section>
  );
}

export default Busca;

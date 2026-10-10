import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard/MovieCard";

function Home({ favoritos, alternarFavorito }) {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const dados = await getPopularMovies();
        setFilmes(dados.results);
      } catch (error) {
        setErro(error.message);
      } finally {
        setLoading(false);
      }
    }

    carregarFilmes();
  }, []);

  if (loading) return <p className="mensagem">Carregando filmes...</p>;
  if (erro) return <p className="mensagem erro">{erro}</p>;

  return (
    <section>
      <h1>Filmes Populares</h1>

      <div className="grid">
        {filmes.map((filme) => (
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

export default Home;

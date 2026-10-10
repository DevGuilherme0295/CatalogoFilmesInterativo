import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getMovieDetails, IMG_URL } from "../services/api";

function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarDetalhes() {
      try {
        const dados = await getMovieDetails(id);
        setFilme(dados);
      } catch (error) {
        setErro(error.message);
      }
    }

    carregarDetalhes();
  }, [id]);

  if (erro) return <p className="mensagem erro">{erro}</p>;
  if (!filme) return <p className="mensagem">Carregando detalhes...</p>;

  return (
    <section className="detalhes">
      <button onClick={() => navigate(-1)}>Voltar</button>

      <div className="detalhes-conteudo">
        {filme.poster_path && (
          <img src={`${IMG_URL}${filme.poster_path}`} alt={filme.title} />
        )}

        <div>
          <h1>{filme.title}</h1>
          <p>
            <strong>Nota:</strong> ★ {filme.vote_average?.toFixed(1)}
          </p>
          <p>
            <strong>Lançamento:</strong> {filme.release_date}
          </p>
          <p>
            <strong>Duração:</strong> {filme.runtime} min
          </p>
          <p>
            <strong>Gêneros:</strong>{" "}
            {filme.genres.map((genero) => genero.name).join(", ")}
          </p>
          <p>{filme.overview || "Sinopse não disponível."}</p>
        </div>
      </div>
    </section>
  );
}

export default Detalhes;

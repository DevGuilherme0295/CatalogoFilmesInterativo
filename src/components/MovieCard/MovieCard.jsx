import { useNavigate } from "react-router";
import { IMG_URL } from "../../services/api";
import "./MovieCard.css";

const POSTER_PADRAO = "https://placehold.co/500x750?text=Sem+imagem";

function MovieCard({ movie, favorito, onFavoritar }) {
  const navigate = useNavigate();

  const poster = movie.poster_path
    ? `${IMG_URL}${movie.poster_path}`
    : POSTER_PADRAO;

  function handleFavoritar(e) {
    e.stopPropagation();
    onFavoritar(movie);
  }

  return (
    <div className="movie-card" onClick={() => navigate(`/filme/${movie.id}`)}>
      <img className="movie-poster" src={poster} alt={movie.title} />

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <span className="movie-nota">★ {movie.vote_average?.toFixed(1)}</span>
      </div>

      <button className="botao-favorito" onClick={handleFavoritar}>
        {favorito ? "Desfavoritar" : "Favoritar"}
      </button>
    </div>
  );
}

export default MovieCard;

import MovieCard from "../components/MovieCard/MovieCard";

function Favoritos({ favoritos, alternarFavorito }) {
  return (
    <section>
      <h1>Meus Favoritos</h1>

      {favoritos.length === 0 ? (
        <p className="mensagem">Você ainda não tem filmes favoritos.</p>
      ) : (
        <div className="grid">
          {favoritos.map((filme) => (
            <MovieCard
              key={filme.id}
              movie={filme}
              favorito={true}
              onFavoritar={alternarFavorito}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favoritos;

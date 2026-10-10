import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import Busca from "./pages/Busca";
import Favoritos from "./pages/Favoritos";
import NaoEncontrada from "./pages/NaoEncontrada";

function carregarFavoritos() {
  const salvos = localStorage.getItem("favoritos");
  return salvos ? JSON.parse(salvos) : [];
}

function App() {
  const [favoritos, setFavoritos] = useState(carregarFavoritos);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function alternarFavorito(movie) {
    const jaFavorito = favoritos.some((f) => f.id === movie.id);

    if (jaFavorito) {
      setFavoritos(favoritos.filter((f) => f.id !== movie.id));
    } else {
      setFavoritos([...favoritos, movie]);
    }
  }

  const props = { favoritos, alternarFavorito };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home {...props} />} />
          <Route path="filme/:id" element={<Detalhes />} />
          <Route path="busca" element={<Busca {...props} />} />
          <Route path="favoritos" element={<Favoritos {...props} />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

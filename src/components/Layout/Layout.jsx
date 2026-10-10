import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Navbar />

      <main className="conteudo">
        <Outlet />
      </main>

      <footer className="rodape">
        <p>CineCatálogo - Dados fornecidos pela API do TMDb</p>
      </footer>
    </div>
  );
}

export default Layout;

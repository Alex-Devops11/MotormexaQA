import { Link } from "react-router-dom";

function Seccion1() {
  return (
    <header className="nav-container">
      <img class="logo" src="/motormexa.png" style={{width: "130px", height: "75px"}}/>
      <nav class="menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/encuesta">Encuesta</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        <Link to="/login" className="login-icon">🔑</Link>
      </nav>
    </header>
  );
}

export default Seccion1;
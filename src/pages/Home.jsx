import { useState, useEffect } from "react";
import "../Home.css"; // Importamos los estilos

const images = [
  "/DURA24.jpg",
  "/FIFA25.jpg",
  "/NATT25.jpg"
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambio automático cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Fondo desenfocado */}
      <div className="gallery-background"></div>

      {/* Galería con imágenes y texto */}
      <div className="gallery">
        <img src={images[currentIndex]} alt="Galería" className="gallery-img" />
        <p className="gallery-text">
          <strong>Ven a conocer nuestros nuevos vehiculos 2026. <br /> <br />Agenda con nosotros una cotización o una prueba de manejo <br /> <br /></strong> <button>Solicitar información</button>
        </p>
      </div>
    </div>
  );
}

export default Home;
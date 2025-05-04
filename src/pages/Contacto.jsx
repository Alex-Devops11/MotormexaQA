import { useEffect } from "react";
import "../contacto.css";

const Contacto = () => {
  useEffect(() => {
    document.body.className = "contacto"; // Establece el fondo exclusivo para Contacto
    return () => {
      document.body.className = ""; // Limpia la clase cuando se cambie de página
    };
  }, []);

  return (
    <div className="contenedor-contacto">
      <h1>CONTÁCTENOS</h1>
      <h2>Estamos aquí para ayudarte</h2>
      <p>En Grupo Motormexa, nuestra prioridad es brindarte el mejor servicio para mantener tu vehículo en perfectas condiciones. Ya sea que necesites reparaciones, mantenimiento preventivo o asistencia en garantías, estamos listos para atenderte con profesionalismo y compromiso.
      </p>
      <form>
        <label>Nombre:</label>
        <input type="text" name="nombre" placeholder="Ingrese su nombre" required />

        <label>Correo Electrónico:</label>
        <input type="email" name="correo" placeholder="Ingrese su email" required />

        <label>Empresa/Organización:</label>
        <input type="text" name="empresa" placeholder="Ingrese su empresa (Opcional)" />

        <label>Mensaje:</label>
        <textarea name="mensaje" rows="5" placeholder="Escriba su mensaje aquí..." required></textarea>

        <button type="submit">Enviar Mensaje</button>
      </form>

      <div className="informacion-contacto">
        <h2>Información de Contacto</h2>
        <p><strong>Dirección:</strong> Av. Ignacio L Vallarta 5051, Camino Real, 45040 Zapopan, Jal., México</p>
        <p><strong>Correo:</strong> webmaster@motormexa.mx</p>
        <p><strong>Teléfono:</strong> +52 123 456 7890</p>
      </div>
    </div>
  );
};

export default Contacto;
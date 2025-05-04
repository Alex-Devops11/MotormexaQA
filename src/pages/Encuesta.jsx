import { useState, useEffect } from "react";
import "../encuesta.css";

const Encuesta = () => {
  useEffect(() => {
    document.body.className = "encuesta"; // Establece el fondo exclusivo para Encuesta
    return () => {
      document.body.className = ""; // Limpia la clase cuando se cambie de página
    };
  }, []);

  const [formData, setFormData] = useState({
    satisfaccion: "",
    profesionalismo: "",
    tiempoEspera: "",
    limpiezaOrden: "",
    precioJusto: "",
    explicacionTecnicos: "",
    recomendacionAmigos: "",
    eficienciaResolucion: "",
    calidadRefacciones: "",
    comunicacionServicio: "",
    mejoras: "",
    inconvenientes: "",
    loMejor: "",
    sugerencias: "",
    comoEntero: "",
    volveriaUsar: "",
    recomendacionRedes: "",
    facilidadCita: "",
    solucionProblema: "",
    experienciaGeneral: ""
  });

  const [errores, setErrores] = useState({});

  const validar = () => {
    let nuevosErrores = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        nuevosErrores[key] = "Este campo es obligatorio";
      } else if (
        [
          "satisfaccion",
          "profesionalismo",
          "tiempoEspera",
          "limpiezaOrden",
          "precioJusto",
          "explicacionTecnicos",
          "recomendacionAmigos",
          "eficienciaResolucion",
          "calidadRefacciones",
          "comunicacionServicio",
          "recomendacionRedes",
          "facilidadCita"
        ].includes(key) &&
        !["1", "2", "3", "4", "5"].includes(value)
      ) {
        nuevosErrores[key] = "Seleccione una opción válida (1-5)";
      } else if (["volveriaUsar", "solucionProblema"].includes(key) && !["Sí", "No", "Parcialmente"].includes(value)) {
        nuevosErrores[key] = "Seleccione una opción válida";
      } else if (
        ["mejoras", "inconvenientes", "loMejor", "sugerencias", "comoEntero", "experienciaGeneral"].includes(key) &&
        value.length < 10
      ) {
        nuevosErrores[key] = "Debe contener al menos 10 caracteres";
      }
    });

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarCambio = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Formulario enviado correctamente");
    }
  };

  const renderCheckboxGroup = (name, label) => (
    <div className="pregunta">
      <label>{label}:</label>
      <div className="opciones">
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num}>
            <input 
              type="radio" 
              name={name} 
              value={num} 
              checked={formData[name] === String(num)}
              onChange={manejarCambio}
            />
            {num}
          </label>
        ))}
      </div>
      {errores[name] && <span className="error">{errores[name]}</span>}
    </div>
  );

  const renderTextField = (name, label) => (
    <div className="pregunta">
      <label>{label}:</label>
      <textarea 
        name={name}
        value={formData[name]}
        onChange={manejarCambio}
        rows="4"
        cols="50"
        className="textarea"
      />
      {errores[name] && <span className="error">{errores[name]}</span>}
    </div>
  );

  return (
    <div className="contenedor-encuesta">
      <h2>Encuesta de Satisfacción</h2>
      <form onSubmit={manejarEnvio}>
        {renderCheckboxGroup("satisfaccion", "Satisfacción general")}
        {renderCheckboxGroup("profesionalismo", "Amabilidad y profesionalismo del personal")}
        {renderCheckboxGroup("tiempoEspera", "Tiempo de espera para el servicio")}
        {renderCheckboxGroup("limpiezaOrden", "Limpieza y orden de las instalaciones")}
        {renderCheckboxGroup("precioJusto", "Precio justo en relación con la calidad")}
        {renderCheckboxGroup("explicacionTecnicos", "Explicación del trabajo realizado")}
        {renderCheckboxGroup("recomendacionAmigos", "¿Recomendaría el servicio a un amigo?")}
        {renderCheckboxGroup("eficienciaResolucion", "Eficiencia en la resolución de dudas")}
        {renderCheckboxGroup("calidadRefacciones", "Calidad de las refacciones utilizadas")}
        {renderCheckboxGroup("comunicacionServicio", "Comunicación durante el proceso")}
        {renderTextField("mejoras", "¿Qué aspectos del servicio podríamos mejorar?")}
        {renderTextField("inconvenientes", "¿Hubo algún problema o inconveniente?")}
        {renderTextField("loMejor", "¿Qué fue lo que más le gustó del servicio?")}
        {renderTextField("sugerencias", "¿Tiene alguna sugerencia adicional?")}
        {renderTextField("comoEntero", "¿Cómo se enteró de nuestros servicios?")}
        {renderTextField("experienciaGeneral", "En general, ¿cómo describiría su experiencia?")}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Encuesta;
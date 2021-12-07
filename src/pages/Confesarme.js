import React from 'react'
import style from './confesarme.module.css'

export const Confesarme = () => {

  const [formulario, setFormulario] = React.useState({ titulo: "", confesion: "", alias: "" })

  const titleHandleChange = (event) => {
    setFormulario({ titulo: event.target.value, confesion: formulario.confesion, alias: formulario.alias })
  }
  const consfesionHandleChange = (event) => {
    setFormulario({ confesion: event.target.value, titulo: formulario.titulo, alias: formulario.alias })
  }


const aliasHandleChange = (event) => {
  setFormulario({ confesion: formulario.confesion, titulo: formulario.titulo, alias: event.target.value });
}

const handleSubmit = (event) => {
  event.preventDefault();
  fetch('http://localhost:3001/confesiones', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      alias: formulario.alias,
      titulo: formulario.titulo,
      contenido: formulario.confesion
    }),
  })
    .then(response => {
      if(!response.ok) {
        throw Error(response.status);
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(handleReset())
    .catch(error => console.error(error));
}
const handleReset = (event) => {
  setFormulario({ titulo: "", confesion: "", alias: "" });
}

return (
  <form className={style.root} onSubmit={handleSubmit}>
    <label className={style.label} htmlFor="alias">Alias</label>
    <input type="text" id="alias" onChange={aliasHandleChange} className={style.input} value={formulario.alias} />
    <label className={style.label} htmlFor="titulo">Título</label>
    <input type="text" id="titulo" onChange={titleHandleChange} value={formulario.titulo} className={style.input} />
    <label className={style.label} htmlFor="confesion">Confesión</label>
    <textarea name="confesion" id="confesion" cols="30" rows="12" onChange={consfesionHandleChange} value={formulario.confesion}></textarea>
    <div className={style.btnContainer}>
      <label htmlFor="enviar"></label>
      <button className={style.btnSubmit} type="submit" id="enviar">Enviar</button>
      <label htmlFor="reset"></label>
      <button className={style.btnReset} onClick={handleReset} type="reset" id="reset">Limpiar</button>
    </div>
  </form>
)
}

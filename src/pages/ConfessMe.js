import React from 'react'
import RecipeReviewCard from "../components/Card/RecipeReviewCard"
import style from '../pages/confessme.module.css'

export const ConfessMe = () => {

  const [collection, setCollection] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3001/confesiones', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setCollection(data))


    return () => {
    }
  }, [])

  const mapa = collection.length > 0 ? collection.map(e=>{
    return <RecipeReviewCard alias={e.alias} title={e.titulo} confesion={e.contenido} key={e.id} /> 
  }) : null;

  return (
    
    <div className={style.root}>
      {mapa}
    </div>

  )
}

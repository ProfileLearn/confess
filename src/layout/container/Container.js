import React from 'react'
import style from "../container/container.module.css"
import { ConfessMe } from '../../pages/ConfessMe'
import { Route, Routes } from 'react-router-dom'
import { Confesarme } from '../../pages/Confesarme'


const Container = () => {
  return (
    <div className={style.root}>
        <Routes>
          <Route path="/confess" exact element={<ConfessMe />} />
          <Route path="/confesarme" exact element={<Confesarme />} />
        </Routes>    
    </div>
  )
}

export default Container

import React from 'react'
import style from './footer.module.css'
import linkedin from '../../media/img/linkedin.png'
import email from '../../media/img/email.png'
import wpp from '../../media/img/whatsapp.png'
import git from '../../media/img/github.png'


export const Footer = (props) => {
  return (
    <footer className={style.footer}>
        <a href={props.linkedin}>
          <img src={linkedin} className={style.img} alt="linkedin" />
        </a>
        <a href={props.linkedin}>
        <img src={email} className={style.img} alt="linkedin" />
        </a>
        <a href={props.linkedin}>
        <img src={wpp} className={style.img} alt="linkedin" />
        </a>
        <a href={props.linkedin}>
        <img src={git} className={style.img} alt="linkedin" />
        </a>
    </footer>
  )
}

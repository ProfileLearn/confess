import React from 'react'
import Container from './layout/container/Container'
import Header from './layout/header/Header'
import { Footer } from './layout/footer/Footer'
import ResponsiveDrawer from './components/Drawer/ResponsiveDrawer'
import { BrowserRouter } from 'react-router-dom'
import style from './app.module.css'


export const App = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <BrowserRouter>
      <div className={style.root}>
        <Header onBtnClick={handleDrawerToggle} />
        <ResponsiveDrawer open={mobileOpen} onClose={handleDrawerToggle} onClick={handleDrawerToggle} />
        <Container />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

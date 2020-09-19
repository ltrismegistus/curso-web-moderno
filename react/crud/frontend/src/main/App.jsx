import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../componets/template/Logo'
import Nav from '../componets/template/Nav'
import Main from '../componets/template/Main'
import Footer from '../componets/template/Footer'

export default props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main icon="home" title="inicio" subtitle="Segundo projeto"></Main>
        <Footer></Footer>
    </div>
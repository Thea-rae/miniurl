import React from 'react'
import { Container } from '@material-ui/core'
import { Header, Footer } from './partials'
import Main from './main'

const Layout = () => (
  <Container>
    <Header/>
    <Main/>
    <Footer/>
  </Container>
)

export default Layout
import React from 'react'

import Spinner from '@/presentation/components/spinner'

import logo from '../../assets/images/logo.svg'
import classes from './styles.scss'

const Login: React.FC = () => {
  return (
    <div className={classes.login}>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
        <h1>Clean React - Enquetes para Programadores</h1>
      </header>

      <form className={classes.form}>
        <h2>Login</h2>

        <div className={classes.inputWrap}>
          <input type="email" name="email" placeholder='digite seu e-mail' />
          <span className={classes.status}>&#128308;</span>
        </div>

        <div className={classes.inputWrap}>
          <input type="password" name="password" placeholder='digite sua senha' />
          <span className={classes.status}>&#128308;</span> {/* &#128994; */}
        </div>

        <button type="submit" className={classes.submit}>Entrar</button>
        <span className={classes.link}>Criar conta</span>

        <div className={classes.errorWrap}>
          <Spinner className={classes.spinner} />
          <span className={classes.error}>Erro</span>
        </div>

      </form>

      <footer className={classes.footer}></footer>
    </div>
  )
}

export default Login

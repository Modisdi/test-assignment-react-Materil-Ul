import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
// connected-react-router
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
// material-ul
import { Box } from '@material-ui/core'
// styles
import '../../assets/fonts/fonts.scss'
import './reset.css'
import styles from './App.module.scss'
// components
import Header from '../Header/Header'
// pages
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import Academies from '../../pages/AcademiesPage/AcademiesPage'
import CreateAcademyPage from '../../pages/CreateAcademy/CreateAcademyPage'

const cx = classNames.bind(styles)


const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <Box pb={10} class={cx('app')}>
      <Header />
      <Switch>
        <Route path='/not-found' component={NotFoundPage} />
        <Route exact path='/' component={Academies} />
        <Route exact path='/create-academy' component={CreateAcademyPage} />
        <Redirect to='/not-found' />
      </Switch>
    </Box>
  </ConnectedRouter>
)


App.propTypes = {
  history: PropTypes.object.isRequired,
}

export default App

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// material-ul
import {
  Container, Tabs, Tab, AppBar,
} from '@material-ui/core'

const Header = ({ pathname }) => (
  <AppBar position='static'>
    <Container>
      <Tabs value={pathname}>
        <Tab label='Academies' to='/' value='/' component={Link} />
        <Tab label='Create academy' to='/create-academy' value='/create-academy' component={Link} />
      </Tabs>
    </Container>
  </AppBar>
)


Header.propTypes = {
  pathname: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
  const { pathname } = state.router.location
  return {
    pathname,
  }
}

export default connect(
  mapStateToProps,
)(Header)

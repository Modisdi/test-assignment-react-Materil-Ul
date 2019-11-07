import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
// material-ul
import { Box, Container, Grid } from '@material-ui/core'
import styles from './Wrapper.module.scss'

const cx = classNames.bind(styles)


const Wrapper = ({ children, title }) => (
  <Box pt={{ xs: 5, sm: 17 }} >
    <Container >
      <Grid container justify='center' >
        <Grid item xs={12} sm={12} md={10} lg={9} className={cx('wrapperRelative')}>
          {title && <h1 className={cx('title')}>{title}</h1>}
          {children}
        </Grid>
      </Grid>
    </Container>
  </Box>
)

Wrapper.defaultProps = {
  title: '',
}

Wrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
}


export default Wrapper

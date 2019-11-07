import React from 'react'
import classNames from 'classnames/bind'
// material-ul
import { CircularProgress } from '@material-ui/core'
import styles from './Loader.module.scss'

const cx = classNames.bind(styles)


const Loader = () => (
  <div className={cx('loaderWrapper')}>
    <CircularProgress className={cx('loader')} />
  </div>
)


export default Loader

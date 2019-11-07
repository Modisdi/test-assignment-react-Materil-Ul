import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import _ from 'lodash/core'
import classNames from 'classnames/bind'
// material-ui
import { withStyles } from '@material-ui/core/styles'
import {
  Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, Box,
} from '@material-ui/core'
// styles
import styles from './AcademiesPage.module.scss'
// components
import AcademyRow from './AcademyRow/AcademyRow'
import { fetchAcademies, clearAcademiesStore } from '../../store/modules/academies'
import Wrapper from '../../components/Wrapper/Wrapper'
import Loader from '../../components/Loader/Loader'

const cx = classNames.bind(styles)


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#04b5c5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell)


class AcademiesPage extends Component {
  componentDidMount() {
    this.handlerFetchAcademies()
  }

  componentWillUnmount() {
    const { clearAcademiesStore } = this.props
    clearAcademiesStore()
  }

  handlerFetchAcademies = () => {
    const { fetchAcademies } = this.props
    fetchAcademies()
  }

  pushCreateAcademy = () => {
    const { push } = this.props
    push('/create-academy')
  }

  render() {
    const { isLoading, academies, isInitialLoading } = this.props
    return (
      <>
        {!isInitialLoading && (
          <Wrapper title='Academies'>
            <Paper>
              <Table aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Type</StyledTableCell>
                    <StyledTableCell>Created</StyledTableCell>
                    <StyledTableCell>Updated</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {academies.length && academies.map(academy => (
                    <AcademyRow
                      key={academy.id}
                      {..._.pick(academy, ['id', 'name', 'status', 'type', 'created', 'updated'])}
                    />
                  ))}
                </TableBody>
              </Table>
            </Paper>
            {!isLoading && academies.length === 0
        && (
          <Box textAlign='center'>
            <h3 className={cx('h3')}>No academies here :(</h3>
            <Button
              className={cx('createAcademy')}
              onClick={this.pushCreateAcademy}
              color='primary'
              variant='contained'
            >
              Create academy
            </Button>
          </Box>
        )}
          </Wrapper>
        )}
        {(isLoading || isInitialLoading) && <Loader />}
      </>
    )
  }
}

AcademiesPage.propTypes = {
  academies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isInitialLoading: PropTypes.bool.isRequired,
  fetchAcademies: PropTypes.func.isRequired,
  clearAcademiesStore: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const {
    academies, isLoading, isInitialLoading,
  } = state.academiesReducer
  return {
    academies, isLoading, isInitialLoading,
  }
}

export default connect(
  mapStateToProps,
  { fetchAcademies, push, clearAcademiesStore },
)(AcademiesPage)

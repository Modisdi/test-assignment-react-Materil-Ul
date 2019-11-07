import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import _ from 'lodash/core'
import classNames from 'classnames/bind'
// import {
//   Paper, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress, Button, Box,
// } from '@material-ui/core'
// styles
import { Paper, Box } from '@material-ui/core'
import styles from './CreateAcademyPage.module.scss'
// components
import CreateAcademyForm from './CreateAcademyForm'
import Wrapper from '../../components/Wrapper/Wrapper'


const cx = classNames.bind(styles)


class CreateAcademyPage extends Component {
  // componentDidMount() {
  //   this.handlerFetchAcademies()
  // }

  // componentWillUnmount() {
  //   const { fetchAcademies } = this.props
  //   fetchAcademies()
  // }

  // handlerFetchAcademies = () => {
  //   const { fetchAcademies } = this.props
  //   fetchAcademies()
  // }
  //
  // pushCreateAcademy = () => {
  //   const { push } = this.props
  //   push('/create-academy')
  // }

  handleSubmit = (value, { setErrors }) => {

  }

  render() {
    return (
      <Wrapper title='Create Academy'>
        <Paper>
          <Box p={5}>
            <CreateAcademyForm onSubmit={this.handleSubmit} />
          </Box>
        </Paper>
      </Wrapper>
    )
  }
}

// AcademiesPage.propTypes = {
//   academies: PropTypes.array.isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   fetchAcademies: PropTypes.func.isRequired,
//   push: PropTypes.func.isRequired,
// }

// const mapStateToProps = state => {
//   const {
//     academies, isLoading,
//   } = state.academiesReducer
//   return {
//     academies, isLoading,
//   }
// }

export default connect(
  null,
)(CreateAcademyPage)

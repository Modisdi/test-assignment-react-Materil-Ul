import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@material-ui/core'
import Moment from 'react-moment'


const AcademyRow = ({
  id, name, status, type, created, updated,
}) => (
  <TableRow key={id}>
    <TableCell>
      {name}
    </TableCell>
    <TableCell>{status}</TableCell>
    <TableCell>{type}</TableCell>
    <TableCell>
      <Moment date={created} format='DD.MM.YYYY' />
    </TableCell>
    <TableCell>
      <Moment date={updated} format='DD.MM.YYYY' />
    </TableCell>
  </TableRow>
)


AcademyRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  updated: PropTypes.number.isRequired,
}


export default AcademyRow

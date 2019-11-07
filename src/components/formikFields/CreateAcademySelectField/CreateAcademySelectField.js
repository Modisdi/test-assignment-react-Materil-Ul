import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
// material-ui
import { TextField, MenuItem } from '@material-ui/core'
// scss
import styles from './CreateAcademySelectField.module.scss'
// icons
import { ReactComponent as SuccessIcon } from '../../../assets/icons/successIcon.svg'

const cx = classNames.bind(styles)

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

const CreateAcademySelectField = ({
  field: {
    name, value, onChange, onBlur,
  }, form: { touched, errors }, label,
  items,
}) => (
  <>
    <div className={cx('accountField')}>
      <TextField
        select
        className={cx('input', { inputErrorActive: touched[name] && errors[name] },
          { inputSuccess: errors[name] === 'success' })}
        name={name}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        pattern='\d [0-9]'
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
      {errors[name] === 'success' && <SuccessIcon className={cx('successIcon')} />}
    </div>
    <p className={cx('error')}>
      {(touched[name] && errors[name]) && errors[name]}
    </p>
  </>
)


CreateAcademySelectField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }),
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
  }),
  label: PropTypes.string,
}

export default CreateAcademySelectField

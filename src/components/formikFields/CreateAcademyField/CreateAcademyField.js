import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
// material-ui
import { TextField } from '@material-ui/core'
// scss
import styles from './CreateAcademyField.module.scss'
// icons
import { ReactComponent as SuccessIcon } from '../../../assets/icons/successIcon.svg'

const cx = classNames.bind(styles)

const CreateAcademyField = ({
  field: {
    name, value, onChange, onBlur,
  }, form: { touched, errors }, label,
}) => (
  <>
    <div className={cx('accountField')}>
      <TextField
        className={cx('input', { inputErrorActive: touched[name] && errors[name] },
          { inputSuccess: errors[name] === 'success' })}
        name={name}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        pattern='\d [0-9]'
      />
      {errors[name] === 'success' && <SuccessIcon className={cx('successIcon')} />}
    </div>
    <p className={cx('error')}>
      {(touched[name] && errors[name]) && errors[name]}
    </p>
  </>
)


//   <TextField
// id="standard-select-currency"
// select
// label="Select"
// className={classes.textField}
// value={values.currency}
// onChange={handleChange('currency')}
// SelectProps={{
//   MenuProps: {
//     className: classes.menu,
//   },
// }}
// helperText="Please select your currency"
// margin="normal"
// >


CreateAcademyField.propTypes = {
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

export default CreateAcademyField

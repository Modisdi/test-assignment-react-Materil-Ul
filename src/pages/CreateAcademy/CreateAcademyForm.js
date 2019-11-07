import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form, Formik } from 'formik'
import { Grid, Button, Container, Box } from '@material-ui/core'
import * as Yup from 'yup'
import classNames from 'classnames/bind'
// scss
import styles from './CreateAcademyPage.module.scss'
// components
import CreateAcademyField from '../../components/formikFields/CreateAcademyField/CreateAcademyField'
import CreateAcademySelectField from '../../components/formikFields/CreateAcademySelectField/CreateAcademySelectField'

const cx = classNames.bind(styles)


export const createAcademyValidate = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  status: Yup.string().required('Required'),
  type: Yup.string().required('Required'),
})


const CreateAcademyForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ name: '', status: '', type: '' }}
    validationSchema={createAcademyValidate}
    onSubmit={onSubmit}
  >
    <Form className={cx('form')}>
      <Field name='name' component={CreateAcademyField} label='Name' />
      <Field name='status' component={CreateAcademySelectField} label='Status' items={['visible', 'invisible']} />
      <Field name='type' component={CreateAcademySelectField} label='Type' items={['general', 'football']} />
      <div className={cx('submitWrapper')}>
        <Button className={cx('submit')} type='submit' color='primary' variant='contained' size='medium'>
          Submit
        </Button>
      </div>
    </Form>
  </Formik>
)


CreateAcademyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


export default CreateAcademyForm

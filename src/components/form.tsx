import React from 'react'
import { Card, CardContent, Button } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { TextField } from 'formik-material-ui'

const ShrinkForm = ({
  handleSubmit,
  submitting,
  urls,
} : any) => {
  
  const styles = {
    card: {
      marginTop:'2em',
    },
    input: {
      width:'100%',
    },
    button: {
      marginTop: '3em',
      width:'100%',
    }
  }
  return (
    <Formik
      data-testid="form"
      initialValues={{
        url: '',
        slug: '',
      }}
      onSubmit={handleSubmit}
      validateOnChange={true}
      validationSchema={
        Yup.object().shape(
          {
            url: Yup.string()
              .url()
              .required()
              .test('uniqueUrl', 'Url has already been shrunk', (value:string) => {
                if(urls !== undefined){
                  return !urls.some((url:any) => url.url === value)
                } else {
                  return false
                }
              }),
            slug: Yup.string()
              .test('uniqueSlug', 'Slug has already been used', (value:string) => {
                if(urls !== undefined){
                  return !urls.some((url:any) => url.slug === value)
                } else {
                  return false
                }
              }),
          })}
    >
      <Card style={styles.card}>
        <CardContent>
          <Form>
            <Field
              id='url-input'
              name="url"
              label="Url to shrink"
              component={TextField}
              type='url'
              helperText='*required'
              style={styles.input}
            />
            <Field
              id='slug-input'
              name="slug"
              label="Custom Slug"
              component={TextField}
              type='text'
              helperText='*optional'
              style={styles.input}
            />
            <Button
              id='submit-button'
              type="submit"
              disabled={submitting}
              variant='contained'
              color='primary'
              style={styles.button}
            > Shrink </Button>
          </Form>
        </CardContent>
      </Card>
    </Formik>
  )
}

export default ShrinkForm
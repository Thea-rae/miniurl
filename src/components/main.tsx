import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import api from '../api/api'
import Form from './form'
import UrlList from './urlList'

const Main = () => {
  const [urls, setUrls] = useState([] as any)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchUrls = async () => {
      const res = await api.getUrls()
      setUrls(res)
      setLoading(false) 
    }
    fetchUrls()
  }, [])
  
  const handleSubmit = async (values: any) => {
    const { url, customSlug } = values
    const res = await api.postUrl(url, customSlug)
    setUrls((urls:any) => [...urls, res])
  }

  const deleteUrl = async (slug: string) => {
    await api.deleteUrl(slug)
    setUrls(urls.filter((url:any) => url.slug !== slug))
  }
  return (
    <Grid>
      <Form handleSubmit={handleSubmit} urls={urls}/>
      {!loading&&
        <UrlList urls={urls} deleteUrl={deleteUrl}/>
      }
    </Grid>
  )
}
export default Main

// when form loads fetchs urls and appends to page
// when form is submitted api is called and if successful appends card to page
// when delete is pressed element is removed and api is called
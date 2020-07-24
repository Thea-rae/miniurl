import axios from 'axios'
console.log("api key: ", process.env.REACT_APP_API_KEY)

axios.defaults.headers['GB-Access-Token'] = process.env.REACT_APP_API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

const api = {
  getUrls: async () => {
    try {
      const res = await axios.get('/links')
      console.log(res)
      return res.data
    } catch (err) {
      console.log(err)
      return []
    }
  },
  // post does not accept a duplicate url and/or slug both need to be unique 
  postUrl: async (url:any, slug:any) => {
    try {
      const res = await axios.post('/links', {url, slug})
      return res.data
    } catch (err) {
      return err
    }
  },
  deleteUrl: async (slug: any) => {
    try {
      await axios.delete(`/links/${slug}`)
    } catch (err) {
      console.error(err)
    }
  },
}
export default api
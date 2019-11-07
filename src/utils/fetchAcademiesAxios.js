import * as axios from 'axios'

export const fetchAcademiesAxios = () => (
  axios.get('https://test.api.sportstars.club/academies', { params: { type: 'general' } })
    .then(({ data }) => data)
)

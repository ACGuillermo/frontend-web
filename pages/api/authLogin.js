const axios = require('axios');
require('dotenv').config();
export default (req, res) => {
  console.log('Lammada auth api in nextjs')
    axios.post(process.env.API_URL + 'auth/login',{
        user: "test",
        password: "test2"
      })
      .then(response => {
          console.log(response)
          res.status(200).json(response.data)
      })
      .catch(error => {
        console.log(error.response.data)
        res.status(400).json(error.response.data)
      })
}  
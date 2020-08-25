const axios = require('axios');
export default (req, res) => {
    axios.post('auth:3000/api/auth/login',{
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
import React, { useEffect } from 'react'
import Link from 'next/link'
const axios = require('axios');

function About() {
  useEffect(()=>{
    axios.post('http://auth:3000/api/auth/login',{
      user: "test",
      password: "test2"
    })
    .then(res => console.log(res.data))
    .catch(error => console.log(error.response))
  },[])
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>About</h1>
    </>
  )
}

export default About
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
  const [data, setData] = useState(0)

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get('https://api-pesantrenhub.pesantrentelkom.com/api/v1/public/data/inkubasi/count')
      .then(res => {
        setData(res)
      })
  }
  console.log(data);

  return (
    <div>
      <h1>Axios</h1>
    </div>
  )
}

export default Axios
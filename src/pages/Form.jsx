import React, {useState} from 'react'
import DetailsForm from '../components/forms/DetailsForm'
import Display from '../components/Display'


function Form() {
  const [data, setData] = useState(null)
  return (
    <>
      <Display {...data} />
      <DetailsForm setter={setData} />
    </>
  )
}

export default Form
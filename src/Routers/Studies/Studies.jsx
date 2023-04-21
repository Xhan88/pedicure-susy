import { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading';
import '../Studies/Studies.css'

const Studies = () => {
  const [ loading, setLoadin ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadin(false)
    },1000)
  })

  return (
    <>
    { loading ? 
      <Loading /> :
        

    <div>
      <h1>Studios</h1>
    </div>
    }
    </>
  )
}

export default Studies

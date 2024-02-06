import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Details({data}) {

    const obj=useParams()

  const movie=data.find(el=>el.id==obj.id)

  return (
    <div>
      <p>{movie.description} </p>
      <iframe src={movie.trailerSrc}   ></iframe>
      <Link to={'/'} style={{textDecoration:'none'}} > 
                  <button >Return</button></Link> 
    </div>
  )
}

export default Details



import React from 'react'

const NewsCards = ({title, description, imagesrc, url}) => {
  return (
    <div className='my-3'>
          <div className="card d-inline-block bg-dark bg-gradient text-light p-2 " style= {{maxwidth: "360px", height: "510px"}}>
  <img src= {imagesrc ? imagesrc : "https://th.bing.com/th/id/OIP.lAV0PV1HXp3UPwY7RLBHcgHaFj?rs=1&pid=ImgDetMain" } className="card-img-top" alt="..."  style={{width: "100%", height: "200px"}} />
  <div className="card-body" maxwidth= "340px" height = "300px" >

    <h5 className="card-title" style={{height: "60px"}} > {description? title.slice(0, 38): title}</h5>
    <div  className="card-text mt-4" style={{height: "150px"}}>{ description ?  description.slice(0,120): ""} </div>
    <a href= {url} className="btn btn-primary"> Read More</a>
  </div>
</div>
      
    </div>
  )
}

export default NewsCards

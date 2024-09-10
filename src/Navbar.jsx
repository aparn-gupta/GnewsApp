
import React from 'react'
import { useContext } from 'react'
import { newsContext } from './Main'



const Navbar = () => {

  const {newsArticles, setNewsArticles, newsCategory, setNewsCategory, lang, setLang, country, setCountry, fromDate, setFromDate, toDate, setToDate, searchKeyword, setSearchKeyword} = useContext(newsContext)


  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light grey">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"> <img src="https://startups.startupmission.in/storage/uploads/DIPP117624/logo-6519d463b0e8f-acowale-alone-dpjpg.jpg" width={100} height={50}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-black" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <div className="nav-link" onClick={()=> {setNewsCategory("general")}}   >Home</div>
       
        <div className="nav-link" onClick={()=> {setNewsCategory("world")}} >World</div>
        <div className="nav-link" onClick={()=> {setNewsCategory("nation")}} >Nation</div>
        <div className="nav-link" onClick={()=> {setNewsCategory("business")}} >Business</div>
        <div className="nav-link" onClick={()=> {setNewsCategory("technology")}} >Technology</div>
        <div className="nav-link" onClick={()=> {setNewsCategory("sports")}} >Sports</div>
        <div className="nav-link" onClick={()=> {setNewsCategory("entertainment")}} >Entertainment</div>
        <div className="nav-link" onClick={()=> {setNewsCategory("science")}} >Science</div>
        <div className="nav-link" onClick={()=> {setNewsCategory("health")}} >Health</div>
      </div>
    </div>
  </div>
</nav>
      
    </div>




  )
}

export default Navbar

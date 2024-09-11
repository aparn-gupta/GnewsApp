
import React from "react";

import { useState, useEffect, useContext } from "react";
import NewsBoard from "./Newsboard";

import Navbar from "./Navbar";
import MenuBar from "./MenuBar";


export const newsContext = React.createContext()

const Main = () => {

const [newsArticles, setNewsArticles] = useState([""])
const [newsCategory, setNewsCategory] = useState("general")
const [lang, setLang] = useState("en")
const [country, setCountry] = useState("us")
const [fromDate, setFromDate] = useState("")
const [toDate, setToDate] = useState("")
const [searchKeyword, setSearchKeyword] = useState("")
const [search, setSearch] = useState("")
const [loading, setLoading] = useState(false)
const [noNewsMessage, setNoNewsMessage] = useState("")



const loader = loading ? <img src = "https://media1.tenor.com/images/a6a6686cbddb3e99a5f0b60a829effb3/tenor.gif?itemid=7427055" width={64} height={64} /> : ""









useEffect(() => {
try {
    setLoading(true)
    fetch(`https://gnews.io/api/v4/top-headlines?category=${newsCategory}&q=${search}&lang=${lang}&country=${country}&from=${fromDate}&to=${toDate}&max=60&apikey=${process.env.REACT_APP_API_KEY}`)

  .then(res => res.json())
  .then(data => {
    setNewsArticles(data.articles)
    setLoading(false)
    if (newsArticles.length === 0) {
      setNoNewsMessage("No news articles found")
    } else if (newsArticles.length > 0) {
      setNoNewsMessage("")
      console.log(newsArticles.length)
    }
  })
}

catch (err) {
    setLoading(false)
    setNoNewsMessage(err.message)
    if (err.response) {
        handleStatus(err.response.status)
      } else if (err.request) {
        setNoNewsMessage(`No response received", ${err.request}` )
      } else {
        setNoNewsMessage(`Error: ${err.message}`)
      }
    

}

}, [newsCategory, lang, country, fromDate, toDate, search])

const handleStatus = (errStatus) => {
    switch (errStatus) {
      case 400 :
        setNoNewsMessage("Error: Invalid Request")
        break;
      case 401 :
        setNoNewsMessage("Error: Unauthorised")
        break;
      case 505 :
        setNoNewsMessage("Error: Server Error")
        break;
      default :
      setNoNewsMessage("An unknown error occured")
      
    }
  
  }

let contextValues = {newsArticles, setNewsArticles, newsCategory, setNewsCategory, lang, setLang, country, setCountry, fromDate, setFromDate, toDate, setToDate, searchKeyword, setSearchKeyword, search, setSearch, noNewsMessage, setNoNewsMessage, loader}





  return (
  

  <newsContext.Provider value = {contextValues}>
      <div>
      <Navbar />
      <MenuBar />
      <NewsBoard />
    </div>
  </newsContext.Provider>

     
      
   
  )
}

export default Main

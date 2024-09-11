

import React, { useContext } from 'react'
import { newsContext } from './Main'


const MenuBar = () => {

const {newsArticles, setNewsArticles, newsCategory, setNewsCategory, lang, setLang, country, setCountry, fromDate, setFromDate, toDate, setToDate, searchKeyword, setSearchKeyword, search, setSearch} = useContext(newsContext)

const handleCountryChange = (e) => {
    setCountry(e.target.value)
    

}

const handleLangChange = (e) => {
    setLang(e.target.value)
   
   
}





const handleSubmit = (e) => {
    e.preventDefault();
  
  setSearch(searchKeyword)
 

}

const handleInputChange = (e) => {
  setSearchKeyword(e.target.value)
  
}




  return (
    <div className=' container mb-5'>

   <form onSubmit={handleSubmit} className='me-4 mb-5 mt-4'  >
   <input className='border border-1 me-4 py-3 ps-2' style={{width: "320px"}} type='text' name= "newsKeyword" value={searchKeyword} onChange={handleInputChange} placeholder='Search Acowale News'/>
   <button  type="submit" className="btn btn-danger mt-2 mt-lg-0">Search</button>
   </form>
   <div className=' me-2 fw-bold'>  Select Publication Date</div>
   <div className='d-lg-flex'>
   <div className='d-flex mt-3'>
   
   
   <label htmlFor='dateFrom' className='me-3 fw-bold' > From:</label>
   <input className='border border-1 me-4 p-2 transparent' type='date' onChange={(e) => {setFromDate(e.target.value + "T00:00:00Z")
    console.log(fromDate)
   }} id= "dateFrom" />
   </div>
   <div className='d-flex mt-3'>
   <label htmlFor='dateTo'className='me-3 fw-bold' >To:</label>
   <input className='border border-1 me-4 p-2 transparent ms-3 ms-lg-0' type='date' onChange={(e) => {setToDate(e.target.value + "T00:00:00Z")
    console.log(toDate)
   }} id="dateTo" />
   </div>


    <select className='border border-1 me-4 p-2 transparent mt-3' onChange={handleCountryChange}>
    <option  > Select Country</option>
  <option value="br" >Brazil</option>
  <option value="ca" >Canada</option>
  <option value="cn" >China</option>
  <option value="eg" >Egypt</option>
  <option value="fr" >France</option>
  <option value="de" >Germany</option>
  <option value="gr" >Greece</option>
  <option value="hk" >Hong Kong</option>
  <option value="in" >India</option>
  <option value="ie" >Ireland</option>
  <option value="il" >Israel</option>
  <option value="it" >Italy</option>
  <option value="jp" >Japan</option>
  <option value="nl" >Netherlands</option>
  <option value="no" >Norway</option>
  <option value="pk" >Pakistan</option>
  <option value="pe" >Peru</option>
  <option value="ph" >Philippines</option>
  <option value="pt" >Portugal</option>
  <option value="ro" >Romania</option>
  <option value="ru" >Russian Federation</option>
  <option value="sg" >Singapore</option>
  <option value="es" >Spain</option>
  <option value="se" >Sweden</option>
  <option value="ch" >Switzerland</option>
  <option value="tw" >Taiwan</option>
  <option value="ua" >Ukraine</option>
  <option value="gb" >United Kingdom</option>
  <option value="us" >United States</option>
</select>

        
<select  className='border border-1 me-4 p-2 transparent mt-3' onChange={handleLangChange}>
<option  > Select Language</option>
  <option value="ar" >Arabic</option>
  <option value="zh" >Chinese</option>
  <option value="nl" >Dutch</option>
  <option value="en" >English</option>
  <option value="fr" >French</option>
  <option value="de" >German</option>
  <option value="el" >Greek</option>
  <option value="he" >Hebrew</option>
  <option value="hi" >Hindi</option>
  <option value="it" >Italian</option>
  <option value="ja" >Japanese</option>
  <option value="ml" >Malayalam</option>
  <option value="mr" >Marathi</option>
  <option value="no" >Norwegian</option>
  <option value="pt" >Portuguese</option>
  <option value="ro" >Romanian</option>
  <option value="ru" >Russian</option>
  <option value="es" >Spanish</option>
  <option value="sv" >Swedish</option>
  <option value="ta" >Tamil</option>
  <option value="te" >Telugu</option>
  <option value="uk" >Ukrainian</option>
</select>

      
   </div>
    </div>
  )
}

export default MenuBar



import React, {useState, useContext} from 'react'
import NewsCards from "./NewsCard";
import { newsContext } from './Main';




const NewsBoard = ({}) => {

  const {newsArticles, setNewsArticles, newsCategory, setNewsCategory, lang, setLang, country, setCountry, fromDate, setFromDate, toDate, setToDate, searchKeyword, setSearchKeyword, noNewsMessage, setNoNewsMessage, loader} = useContext(newsContext)



  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8; 

 
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    let currentCards, totalPages, paginate

    if (newsArticles) {
        currentCards = newsArticles.slice(indexOfFirstCard, indexOfLastCard);
        totalPages = Math.ceil(newsArticles.length / cardsPerPage);
        paginate = (pageNumber) => setCurrentPage(pageNumber);

    }




    
  


  return (
   

  
<div className=" container">
  <h2 className='p-3'>Top <span className='badge bg-danger mt-6 mb-4 '>Headlines</span> </h2>

<div className=''>
    {noNewsMessage}
    {loader}

{currentCards && <div className=" row">{currentCards.map((item, i) => <div key = {i}  className='col-12 col-md-6 col-lg-3 '><NewsCards title={item.title}  description={item.description} url={item.url} imagesrc={item.image? item.image: "https://th.bing.com/th/id/OIP.lAV0PV1HXp3UPwY7RLBHcgHaFj?rs=1&pid=ImgDetMain"} /></div>)}</div>}
</div>


<nav>
        <ul className="pagination justify-content-center my-5">
          {[...Array(totalPages)].map((_, index) => (
            <li
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              key={index}
            >
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>

</div>

      
 
  )
}

export default NewsBoard
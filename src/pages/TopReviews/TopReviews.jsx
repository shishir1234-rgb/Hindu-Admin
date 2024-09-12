import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import TopReviewsTable from '../../components/TopReviewsTable/TopReviewsTable'


const TopReviews = () => {
  return (

    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
    <div>

    <TopReviewsTable/>
      
    </div>
    </div>
    </div>
  )
}

export default TopReviews;

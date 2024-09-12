import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import NewListingComp from '../../components/NewListingsComp/NewListings'


const NewListings = () => {
  return (

    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
    <div>
     <NewListingComp/>
    </div>
    </div>
    </div>
  )
}

export default NewListings

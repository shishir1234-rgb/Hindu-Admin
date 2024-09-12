import React from 'react'
import TopCompaniesTable from '../../components/TopCompaniesTable/TopCompaniesTable'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const TopCompanies = () => {
  return (

    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
    <div>

    <TopCompaniesTable/>
      
    </div>
    </div>
    </div>
  )
}

export default TopCompanies

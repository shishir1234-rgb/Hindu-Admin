import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import CategoriesData from "../../components/CategoriesWidget/CategoriesData";
// import "./States.scss";
import CategoriesData from "../../components/CategoriesWidget/CategoriesData";


const Categories = () => {
  return (
    <div  className="home" >
       <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
        Categories Listing Datas
        </div>
        <div className="widgets">
          <CategoriesData />
        </div>
      </div>
    </div>
  )
}


export default Categories

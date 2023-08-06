import React, { useState, useEffect } from "react";
import Cardody from "./Cardody";





function Cardcomponent() {
//   const [data, setData] = useState([]); // State to store the fetched data\

  

//   const fetchdata = async () => {
//     const Url = "https://www.themealdb.com/api/json/v1/1/categories.php";
//     const Data = await fetch(Url);
//     const Passdata = await Data.json();
//     setData(Passdata.categories); // Update the state with the fetched data

// };
// console.log(data)


//   useEffect(() => {
//     fetchdata();
//   }, []); // Add an empty dependency array to run the effect only once after the component mounts

  // return (
  //   <div className="row">
  //       {data.map((elemente)=>{
  //           return(
  //           <div className="col-4" key={elemente.strCategory}>
  //           <Cardody cardtitle={elemente.strCategory} carddis ={elemente.strCategoryDescription } titaleimg={elemente.strCategoryThumb}  /> {/* Pass the fetched data to the Cardody component */}
  //         </div>)

  //       })}
      
  //   </div>
  // );
}

export default Cardcomponent;


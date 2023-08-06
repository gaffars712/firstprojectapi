import React, { useState } from "react";
import Cardody from "./Cardody";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [nodatafound, setnodatafound] = useState([])


    const search = async  (keyy) =>{
        const Url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyy}`;
        const serchdata = await fetch(Url);
        const serchPassdata = await serchdata.json();
        setSearchResults(serchPassdata.meals) 
        if(searchResults.length <= 1){
            setnodatafound("No Data Found");

        }else {
            setnodatafound(" Data Found")
        }


    }
 

  return (
    <>
    <div style={{display:"flex" , alignItems:"center" , margin:" 3rem 0 2rem 0 ", justifyContent:"center"}}>
    <form className="w-50 text-center" > 
      <input style={{textAlign:"center", outline:"2px solid #2962FF"}}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(element) => search(element.target.value)}
      />

     
      </form>
      
      </div>
      <h1 style={{ textAlign:"center"}}>{nodatafound}</h1>

      {/* Display search results */}
      <div className="row">
        {searchResults.map((meal)=>{
            return(
            <div className="col-4" key={meal.meals}>
            <Cardody cardtitle={meal.strIngredient2} carddis ={meal.strCategoryDescription } titaleimg={meal.strCategoryThumb ? meal.strCategoryThumb :"data:image/jpeg;base64,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"  }  /> {/* Pass the fetched data to the Cardody component */}
          </div>)

        })}
      
    </div>
    </>
  );
}

export default Search;

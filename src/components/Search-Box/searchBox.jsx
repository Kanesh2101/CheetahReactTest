
import { useState } from "react";
const SearchBox =(props)=>{
   
    const onSubmitButton = (e)=>{ 
        e.preventDefault();
        props.onSubmit();
    }

  
    return(
        <div>
            <form onSubmit={onSubmitButton} >
            <div className="col-12">
                <button className="btn col-6">Submit</button>
            </div>
            
            </form>
        </div>     
    )
}

export default SearchBox;

import { useState } from "react";
const SearchBox =(props)=>{
    const[input1, setInput1] = useState("");
    const[input2, setInput2] = useState("");
    
    const onSubmitButton = (e)=>{ 
        e.preventDefault();
        props.onSubmit(input1, input2);
    }

    const onClearClick = (e)=>{ 
        setInput1("");
        setInput2("");
        props.onClear();
    }

    const onInput1Change =(event)=>{
        let input1 = event.target.value.toLocaleLowerCase();
        setInput1(input1);
    }

    const onInput2Change =(event)=>{
        let input2 = event.target.value.toLocaleLowerCase();
        setInput2(input2);
    }

    return(
        <div>
            <form onSubmit={onSubmitButton} >
            <div>
                <span>Tag 1 </span>
                <input
                type='text'
                required
                value={input1}
                onChange={onInput1Change} 
                />
            </div>

            <div>
                <span>Tag 2 </span>
                <input
                type='text' 
                required
                value={input2}
                onChange={onInput2Change} 
                />
            </div>
            <div className="col-12">
                <button className="btn col-6">Submit</button>
            
            </div>
            
            </form>
            <button className="btn-clear col-6" onClick={onClearClick}>Clear</button>
        </div>
       

            
    )

}

export default SearchBox;
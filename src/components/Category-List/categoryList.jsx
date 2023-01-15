

const CategoryList = (props) =>{
    return (
        <div>
             {props.commonTag != "" && props.categories.length>0 ? (<h2>Matching Tags : {props.commonTag.toString()}</h2>) : "" }
            {props?.categories.length>0 ? 
            (   
            <table className="center col-12"  style={{textAlign: 'center'}}>
                <thead>
                    <tr className='col-12'>
                        <th scope="col" className="col-9">Recipient Name</th>
                        <th scope="col" className="col-1">Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {props?.categories?.map((item)=>
                    <tr key={item.id} >
                        <td className='font-20' style={{letterSpacing : "1.5px"}}>{ item.name }</td>
                        <td className='font-16'>{(item.tags?.length>0 ? item.tags?.toString() : "No Tags Found")}</td>
                    </tr> )
                    } 
                </tbody>
            </table>
            ) 
            : <h3>No Match Found</h3>}
        </div>
    )
        
    }

export default CategoryList;
import hocComponent from "./hocComponent";
import React from "react";
class ClothingCategory extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
  const {result,handleInput,handleSearch}=this.props
    return(
        <>
        <h1>Clothing Category</h1>
        <form>
       enter product name you want to search <input type='text' onChange={(e)=>handleInput(e)}></input>
       <button onClick={(e)=>handleSearch(e)}>search</button>
        </form>
        <div>
            {result.map((item)=>(
                <>
                <h2>Product name:{item.pName}</h2>
                <p>Price :{item.price}</p>
                <p>Manufacturer:{item.manufacturer}</p>
                <p>Expected Delivery by :{item.expectedDelivery}</p>
                </>
            ))}
        </div>

        </>
    )
  }
}
export default hocComponent(ClothingCategory)
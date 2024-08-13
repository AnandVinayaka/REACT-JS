import { result } from "lodash";
import React from "react";

class FilterClothingProducts extends React.Component{
  constructor(props){
    super(props)
    this.state={
        result:[],
        productList:[],
        searchItem:''
    }
  }
  static getDerivedStateFromProps(props,state){
    return {productList:props.data}
  }
  handleInput=(e)=>{
    
    this.setState({searchItem:e.target.value})
    }
  handleSearch=(e)=>{
    e.preventDefault()
    const resultArray=this.state.productList.filter((item)=>item.pName===this.state.searchItem)
    this.setState({result:resultArray})
   

  }
  render(){
    {   console.log(this.state.result)}
    return(
        <>
        <h1>Clothing Category</h1>
        <form>
       enter product name you want to search <input type='text' onChange={(e)=>this.handleInput(e)}></input>
       <button onClick={(e)=>this.handleSearch(e)}>search</button>
        </form>
        <div>
            {this.state.result.map((item)=>(
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
export default FilterClothingProducts
import { useState } from "react"

const ItemCoutn = ({initial=1, stock=10, onAdd}) => {
    const [ count, setCount] = useState(initial)

    const handleSuma = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const handleRestar = () =>{
        if(count > initial){
            setCount(count - 1)
        }
    }

    const handleOnAdd = ()=>{
        onAdd(count)        
    }

  return (
    <div className="card mt-5 w-50 text-bg-success" style={{borderRadius:'25px'}} >
       <div className="card-body row">
           <div className="col">
           <button 
           className="btn btn-white w-100"
           style={{
               color:'white'
           }} onClick={handleSuma}> + </button>

           </div>
           <div className="col">
           <center>
           <label>{count}</label>
           </center> 

           </div>
           <div className="col">
           <button
           className="btn btn-outline-white w-100" 
           style={{
               color:'white'
           }} onClick={handleRestar }> - </button>

           </div>
       </div>

       <div className="card-footer">
           <button
           className="btn btn-outline-white w-100" 
           style={{
               color:'white'
           }} onClick={handleOnAdd}>Agregar al carrito</button>
       </div>
   </div>
  )
}

export default ItemCoutn
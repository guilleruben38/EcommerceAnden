import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import CantStock from "../CantStock/CantStock"


const Componente = ()=> {
    return (
        <div style={{
            height: '60vh',
            width: '50vw',
            backgroundImage: "url(/imagessss.png)",
            color:'black',
            fontSize:'35px',
            display: 'absolute',
            float: 'right'
        }}>
          
            <Link style={{color:"black"}} to="/cart" >Completar la compra</Link>
        </div>
    )
}



const ItemDetail = ({ producto }) => {

    const [isCount, setIsCount] = useState(true)
    const [cart, setCart] = useState(false)
    const { agregarCarrito } = useCartContext()

    const onAdd = (cant)=>{
        agregarCarrito( { ...producto, cantidad: cant } )
        setIsCount(false)
    }  

   
    const handleCart = () => {
        setCart(!cart)
    }
    return (
        
            <div style={{
                 backgroundImage: "url(/images.png)"
                
            }}>
                 <center>
                    <div className="col-8">
                        <button className="btn btn-dark col-2" onClick={handleCart}>Carrito</button>
                        {
                            isCount ? 
                                <ItemCount  stock={producto.stock} initial={1}  onAdd={onAdd} />                        
                            :
                                <>
                                    <Link className="btn btn-dark" to='/cart'>
                                        Ir al Carrito
                                    </Link>
                                    <Link className="btn btn-dark" to='/'>
                                        Ir al Inicio
                                    </Link>
                                </>
                        }   
                        {
                            cart && <Componente />
                        }
                    </div>
                    </center>
                <div className="row-10 "> 
                <center>
              
    
     
                      <div className="col-4 card text-bg-success " style={{borderRadius:'100px'}} > 
                        <img src = {producto.imagen} className='card-img-top'/>
                        
                       <CantStock stocks={producto.stock} />
                        <div className="card-body">
                        <h4 style={{
                           
                            
                        }}> <strong>{producto.name }</strong> </h4> 
                        <p  style={{
                            fontSize:'small',
                           fontFamily:'Roboto, sans-serif'
                            
                        }}>{producto.desc}</p>
                        <h4 style={{
                          
                            
                        }}>   $ {producto.precio}</h4>
    
                        </div>
                        
    
       
                           
                        
    
    
                   
                    </div>   
                    </center>
                   
                </div>
            
            </div>
            
    )
                    }

export default ItemDetail
import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    
    <div className='card center mt-5  m-5' style={{
      width:'250px',
      marginTop:'50px',
      height:'360px',
      backgroundColor:'green'  
    }} >
           <Link style={{textDecoration:'none'}} to={`/detalle/${producto.id}`}>
                    <div className='card-header text-bg-success '>
                     <center  style={{
                      fontFamily: 'Abril Fatface, cursive',
                      fontSize:'20px',
                      color:'whitesmoke',
                      textDecoration:'none'}}>{producto.name}</center> 
                    </div>


                    <div className='card-body text-bg-success'>
                     <center> <img src={producto.imagen}  style={{
                      height:'200px',
                        
                        borderRadius:'25px'
                        }} alt='foto' className="w-100"/>
                        </center>
                    </div>


                    <div className='card-footer hola w-100 text-bg-success '>
                      <center style={{
                        fontFamily: 'Abril Fatface, cursive', 
                        fontSize:'px', color:'whitesmoke',
                        textDecoration:'none'
                        }} >Categoria: {producto.categoria}</center> 


                      <center style={{fontFamily: 'Abril Fatface, cursive',
                       fontSize:'30px',
                        color:'whitesmoke',
                        textDecoration:'none'
                        }} > ${producto.precio}</center>
                    </div>


                  </Link>

                </div>
                
  )
}

export default Item
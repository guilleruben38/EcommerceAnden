import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore' 
import ItemList from "../ItemList/ItemList"


const  Cargando = ()=> {
 
  useEffect (()=> {
    return () => {

    }
  })
 
 
 
 return          <center>
  <div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>
          </center>
}


export const ItemListContainer = ({ saludo }) => {
  const [ productos, setProductos ] = useState([])
 
  const [ cargando, setCargando ] = useState(true)

  const { idCategoria } = useParams()






   useEffect(()=>{
 setCargando (true)
    const db = getFirestore()

    const queryCollections = collection (db, 'productos')

    const queryFilter = idCategoria ? query ( queryCollections,  where ('categoria','==',idCategoria)  ) : queryCollections 


     getDocs(queryFilter)

     .then(resp => {setProductos ( resp.docs.map(product => ( { id: product.id,  ...product.data() }) ) )})
     .catch (err => console.error(err) )
     .finally(()=> setCargando(false))     
 
   }, [idCategoria])



 
  return (
        
            cargando
            ?  

            <Cargando/> 

            : 
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }} >
                    <ItemList productos={productos} />                    
                </div>
  )
}



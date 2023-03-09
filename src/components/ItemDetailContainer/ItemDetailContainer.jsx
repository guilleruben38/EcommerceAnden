import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [ producto, setProducto ] =  useState({})
    const { idProducto } = useParams()


    useEffect(()=>{        
            const db = getFirestore()
     const query = doc (db,'productos',idProducto)
     getDoc (query)
     .then (resp => setProducto ({ id: resp.id, ...resp.data() }))
    }, [])


    return (
        <div 
    
        >        
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
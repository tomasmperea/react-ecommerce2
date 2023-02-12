import { useState, useEffect } from "react";
import './styles/ItemDetailContainer.css';
import { arrayProducts } from "../components/baseDatos/datos";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = arrayProducts.find(item=>item.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "black"}}>Detalle del producto</p>
            <ItemDetail item={item}/>
        </div>
    )
}
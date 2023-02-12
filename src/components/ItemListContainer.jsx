import { useEffect, useState } from "react";
import './styles/ItemListContainer.css';
import { arrayProducts } from "../components/baseDatos/datos";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ()=>{
    const {typeProduct} = useParams();

    const [products, setProducts] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arrayProducts);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(result=>{
            if(!typeProduct){
                setProducts(result)
            } else{
                const newList = result.filter(item=>item.collection === typeProduct);
                setProducts(newList)
            }
        })
            // eslint-disable-next-line
    },[typeProduct])


    return(
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={products}/>
        </div>
    )
}
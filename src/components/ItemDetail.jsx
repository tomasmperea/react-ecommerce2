import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount';
import './styles/ItemDetail.css';


export const ItemDetail = ({item})=>{
    const {addProduct} = useContext(CartContext);
        // eslint-disable-next-line
    const [quantity, setQuantity] = useState(0);


    const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }

    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>item detail</p>
            <div className='img-container'>
                <img src={item.imageUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}
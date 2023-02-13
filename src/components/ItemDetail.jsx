import './styles/ItemDetail.css';

export const ItemDetail = ({item})=>{
    return(
        <div className='detail-container'>
            <p style={{width: "100%", fontSize: "50px"}}></p>
            <div className='img-container'>
                <img src={item.imageUrl} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
        
        </div>
    )
}
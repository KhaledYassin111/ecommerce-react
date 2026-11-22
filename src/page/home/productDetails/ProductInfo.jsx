import { useContext } from 'react'
import { FaRegHeart, FaShare, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../../component/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ProductInfo({product}) {

const { cartItems, addToCart, addToFavorites , favorites, removeFromFavorites} = useContext(CartContext)
const isInCart = cartItems.some(i => i.id === product.id);

const navigate = useNavigate()

    const handleAddToCart = () => {
        addToCart(product)

        toast.success(
            <div className="toast-wrapper">
                <img src={product.images[0]} alt="" className='toast-img'></img>

                <div className="toast-content">
                    <strong>{product.title}</strong>
                    added to Cart

                    <div>
                        <button onClick={()=> navigate("/cart")} className="btn">View Cart</button>
                    </div>
                </div>
            </div>
            ,{duration : 1500}
        )
    }

            const isInFav = favorites.some(i => i.id === product.id);
    const handleAddToFav =()=>{
if(isInFav){
removeFromFavorites(product.id)
        toast.error(`${product.title} Removed from favorites`)
}else{
        addToFavorites(product)
        toast.success(`${product.title} added To favorites`)
}




    }

    return (
                <div className="details_item">
                    <h1 className='name'>{product.title}</h1>
                    <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />


                    </div>
                    <p className='price'>$ {product.price}</p>
                    <h5>Availability: <span>{product.brand}</span></h5>
                    <p className='desc'>{product.description}</p>
                    <h5 className='stock'> <span>Hurry Up! Only {product.stock} products left in stock.</span></h5>

                    <button  onClick={handleAddToCart} className={`btn ${isInCart ? 'in-cart' : ''}`} >
                        {isInCart ? "product added" : "Add to cart"}                       <TiShoppingCart /></button>

                    <div className="icons">


                        <span className={`${isInFav ? "in-fav": ""}`} onClick={handleAddToFav}><FaRegHeart /></span>
                        <span><FaShare /></span>



                    </div>

                </div>
    )
}

export default ProductInfo

import { useContext } from 'react'
import { FaStar, FaStarHalfAlt, FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaCheck } from "react-icons/fa6";
import toast from 'react-hot-toast';



function Product({ item }) {

const navigate = useNavigate()

    const { cartItems, addToCart , addToFavorites , favorites, removeFromFavorites} = useContext(CartContext)

    const isInCart = cartItems.some(i => i.id === item.id);

    const handleAddToCart = () => {
        addToCart(item)

        toast.success(
            <div className="toast-wrapper">
                <img src={item.images[0]} alt="" className='toast-img'></img>

                <div className="toast-content">
                    <strong>{item.title}</strong>
                    added to Cart

                    <div>
                        <button onClick={()=> navigate("/cart")} className="btn">View Cart</button>
                    </div>
                </div>
            </div>
            ,{duration : 3500}
        )
    }

        const isInFav = favorites.some(i => i.id === item.id);
    const handleAddToFav =()=>{
if(isInFav){
removeFromFavorites(item.id)
        toast.error(`${item.title} Removed from favorites`)
}else{
        addToFavorites(item)
        toast.success(`${item.title} added To favorites`)
}




    }



    return (



        <div className={`product ${isInCart ? 'in-cart' : ''}`}>

            <Link to={`/products/${item.id}`}>
                <span className="status_cart"><FaCheck />In cart</span>
                <div className="img_product">
                    <img src={item.images[0]} alt="" />
                </div>
                <p className="name_product">
                    {item.title}
                </p>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />


                </div>
                <p className="price">
                    <span>$ {item.price}</span>
                </p>



            </Link>
            <div className="icons">

                <span className='btn_cart' onClick={handleAddToCart}> <FaCartArrowDown /></span>
                <span className={`${isInFav ? "in-fav": ""}`} onClick={handleAddToFav} ><FaRegHeart /></span>
                <span><FaShare /></span>



            </div>

        </div>
    )
}

export default Product

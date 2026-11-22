import { useContext } from 'react'
import { CartContext } from '../../../component/context/CartContext'
import PageTransition from '../../../component/PageTransition'
import Product from '../../../component/slideProducts/Product'





function Favorites() {
    const {favorites}=useContext(CartContext)
    return (
        <PageTransition>
<div className="category_products FavoritesPages">
    <div className="container">
        <div className="top_slide">
            <h2>Your Favorites</h2>
        </div>

{favorites.length === 0? (
    <p>No Favorites Products yet.</p>
) : (
    <div className="products">
        {favorites.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </div>
)}



    </div>
</div>
        </PageTransition>
    )
}

export default Favorites

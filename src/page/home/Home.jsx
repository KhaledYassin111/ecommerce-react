import { useEffect, useState } from "react"
import HeroSlider from "../../component/HeroSlider"
import './home.css'
import SlideProduct from "../../component/slideProducts/SlideProduct"

import SlideProductLoading from "../../component/slideProducts/SlideProductLoading"
import PageTransition from "../../component/PageTransition"
const categories = [
    'smartphones',
    'mobile-accessories',
    'laptops',
    'tablets',
    'sunglasses',
    'sports-accessories',
    'Beauty',
    'Fragrances',
    'Furniture',
    'Groceries',
    'home-decoration',
    'kitchen-accessories',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'Motorcycle',
    'skin-care',
    'Tops',
    'Womens-Bags',
    'Womens-Dresses',
    'Womens-Jewellery',
    'Womens-Shoes',
    'Womens-Watches',
]







function Home() {

    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const results = await Promise.all(
                    categories.map(async (category) => {
                        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
                        const data = await res.json();
                        return { [category]: data.products }
                    })
                )
                const productsData = Object.assign({}, ...results);
                setProducts(productsData)
            }
            catch (error) {
                console.error("Error Fetching", error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])




    return (

        <PageTransition>
            <div>
                <HeroSlider />

                {loading ?
                    (categories.map((category) => (
                        <SlideProductLoading key={category} />
                    ))

                    ) : (
                        categories.map((category) => (
                            <SlideProduct key={category} data={products[category]} title={category.replace("-", " ")} />
                        ))
                    )}








            </div>
        </PageTransition>
    )
}

export default Home

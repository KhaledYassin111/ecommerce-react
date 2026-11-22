import { useEffect, useState } from "react";
import Product from "../../component/slideProducts/Product";
import PageTransition from "../../component/PageTransition";
import "../sitePages.css";

export default function Accessories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://dummyjson.com/products/category/mobile-accessories", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not load products");
        }

        return res.json();
      })
      .then((data) => setProducts(data.products || []))
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(true);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <PageTransition>
      <main className="site-page">
        <section className="container">
          <div className="page-heading">
            <span className="eyebrow">COMPLETE YOUR SETUP</span>
            <h1>
              Mobile <span>Accessories</span>
            </h1>
            <p className="page-intro">
              Discover useful accessories for your everyday tech.
            </p>
          </div>

          {loading ? (
            <div className="products-loading">Loading accessories...</div>
          ) : error ? (
            <p className="empty-state">
              Could not load accessories. Please check your connection and try
              again.
            </p>
          ) : (
            <div className="products accessories-products">
              {products.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </section>
      </main>
    </PageTransition>
  );
}

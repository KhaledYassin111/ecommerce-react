import { Link } from "react-router-dom";
import PageTransition from "../../component/PageTransition";
import "../sitePages.css";

export default function About() {
  return (
    <PageTransition>
      <main className="site-page">
        <section className="container about-hero">
          <div>
            <span className="eyebrow">ABOUT OUR STORE</span>
            <h1>
              Shopping made <span>simple.</span>
            </h1>
            <p className="page-intro">
              We bring everyday essentials and products you love together in
              one convenient place, with a smooth shopping experience from
              browsing to checkout.
            </p>
            <Link className="site-button inline-button" to="/accessories">
              Explore products
            </Link>
          </div>

          <div className="about-art">
            <div className="about-art-inner">
              <span>YOUR</span>
              <strong>STORE</strong>
              <small>Everything you need, in one place.</small>
            </div>
          </div>
        </section>

        <section className="container value-grid">
          <article>
            <b>01</b>
            <h3>Carefully selected</h3>
            <p>A wide range of useful products for your everyday needs.</p>
          </article>

          <article>
            <b>02</b>
            <h3>Easy shopping</h3>
            <p>
              Browse categories, save favorites and manage your cart with ease.
            </p>
          </article>

          <article>
            <b>03</b>
            <h3>Here to help</h3>
            <p>
              Have a question? Our contact page makes it easy to reach us.
            </p>
          </article>
        </section>
      </main>
    </PageTransition>
  );
}

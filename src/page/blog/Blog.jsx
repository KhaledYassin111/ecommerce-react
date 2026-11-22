import PageTransition from "../../component/PageTransition";
import "../sitePages.css";

const posts = [
  {
    category: "SHOPPING TIPS",
    date: "A GUIDE TO SMARTER SHOPPING",
    title: "How to choose the right product for your needs",
    text: "A few simple checks can help you compare products, understand the details and make a confident choice."
  },
  {
    category: "TECH & GADGETS",
    date: "MAKE THE MOST OF YOUR DEVICES",
    title: "Small accessories that make a big difference",
    text: "Explore practical add-ons that can make your everyday devices easier and more comfortable to use."
  },
  {
    category: "LIFESTYLE",
    date: "A MORE ORGANIZED DAY",
    title: "Simple ways to keep your everyday essentials organized",
    text: "Build a simple routine for finding what you need, keeping track of essentials and saving time."
  }
];
export default function Blog() {
  return <PageTransition>
    <main className="site-page">
      <section className="container">
        <div className="page-heading">
          <span className="eyebrow">THE LATEST FROM US</span>
          <h1>Our <span>Blog</span></h1>
          <p className="page-intro">Ideas, helpful guides and inspiration for smarter everyday shopping.</p>
        </div>
        <div className="blog-grid">
          {posts.map((post, i) => <article className="blog-card" key={post.title}>
            <div className={`blog-visual blog-visual-${i + 1}`}>
              <span>0{i + 1}</span>
              <strong>{post.category}</strong>
            </div>
            <div className="blog-content">
              <small>{post.date}</small>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
              <span className="read-more">Read article ·</span>
            </div>
          </article>)}
        </div>
      </section>
    </main>
  </PageTransition>;
}

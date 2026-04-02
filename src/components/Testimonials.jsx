const testimonials = [
  {
    stars: 5,
    text: "This is a very wonderful experience I have had! >",
    name: "Alex Omega",
    role: "Fitness Coach",
    img: "https://images.pexels.com/photos/977418/pexels-photo-977418.jpeg?auto=compress&cs=tinysrgb&h=130"
  },
  {
    stars: 5,
    text: "I went here and I had a delightful and unforgettable experience. >",
    name: "Rhys Myers",
    role: "Blogger",
    img: "https://images.pexels.com/photos/1661861/pexels-photo-1661861.jpeg?auto=compress&cs=tinysrgb&h=130"
  },
  {
    stars: 5,
    text: "Thank you for this nice trip – I would like to experience it again! >",
    name: "Janet Sims",
    role: "Influencer",
    img: "https://images.pexels.com/photos/11776079/pexels-photo-11776079.jpeg?auto=compress&cs=tinysrgb&h=130"
  }
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">&#9733;</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Peoples Encounters</h2>
      <p className="testimonials-subtitle">This is peoples hearts encounter enjoy it all</p>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <Stars count={t.stars} />
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <img src={t.img} alt={t.name} className="testimonial-avatar" />
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

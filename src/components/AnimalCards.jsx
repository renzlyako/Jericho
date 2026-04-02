const animals = [
  {
    img: "https://images.pexels.com/photos/15289296/pexels-photo-15289296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    name: "Tarsier",
    label: "Size: They are incredibly small—about the size of a human fist.",
    desc: "A tarsier is a tiny, unique primate found in the islands of Southeast Asia, particularly in the Philippines, Indonesia, and Malaysia.",
    fact: "This Eeny Thai long ears aren't just for hearing; they also help regulate body temperature by dispersing heat through a network of blood vessels.",
    link: "Learn More >"
  },
  {
    img: "https://images.pexels.com/photos/31778632/pexels-photo-31778632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    name: "Rabbit",
    label: "New",
    desc: "Rabbits are small, fluffy mammals known for their long ears, twitchy noses, and incredible jumping ability. They are found all over the world and are famous for being both gentle pets and clever survivors in the wild.",
    fact: "",
    link: "Now"
  },
  {
    img: "https://images.pexels.com/photos/7195458/pexels-photo-7195458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    name: "Red Panda",
    label: "Oormot said",
    desc: "The red panda is often called the \"Firefox\" or \"Lesser Panda,\" but it is actually in a family all its own. They are native to the high-altitude forests of the Himalayas and southwestern China.",
    fact: "The Tail: Their long, bushy tails (up to 18 inches) aren't just for balance; they can use them like a scarf in blanket to wrap around themselves for warmth in the cold months.",
    link: "Next"
  }
];

export default function AnimalCards() {
  return (
    <section className="animal-cards-section">
      <div className="animal-cards-grid">
        {animals.map((animal, i) => (
          <div key={i} className="animal-card">
            <img src={animal.img} alt={animal.name} className="animal-card-img" />
            <div className="animal-card-body">
              {animal.label && <span className="animal-card-label">{animal.label}</span>}
              <p className="animal-card-desc">{animal.desc}</p>
              {animal.fact && <p className="animal-card-fact">{animal.fact}</p>}
              <a href="#" className="animal-card-link">{animal.link}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

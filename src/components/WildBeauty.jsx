export default function WildBeauty() {
  return (
    <section className="wild-beauty">
      <div className="wild-beauty-header">
        <span className="wild-beauty-label">Vitaly</span>
        <h2 className="wild-beauty-title">View the beauty of the wild</h2>
        <p className="wild-beauty-subtitle">Protect the animals</p>
      </div>

      <div className="wild-beauty-cards">
        <div className="wild-card green-card">
          <h3>Boost the Environment</h3>
          <p>To the lower-sitting beasts of the environment, refresh your mind and get the impulse time.</p>
          <div className="wild-card-buttons">
            <button className="btn-discover">Discover</button>
            <button className="btn-discover">Discover</button>
            <span className="arrow-right">&rsaquo;</span>
          </div>
        </div>

        <div className="wild-card dark-green-card">
          <h3>Improve Your Perspective about the wild.</h3>
          <p>Go on the move away.</p>
          <button className="btn-discover-sm">discover</button>
        </div>

        <div className="wild-card olive-card">
          <p>For the animal shall not be measured by man. In a world older and more complete than ours, they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.</p>
          <button className="btn-discover-sm">Start</button>
        </div>
      </div>
    </section>
  );
}

export default function FlyHorizon() {
  return (
    <section className="fly-horizon">
      <div className="fly-horizon-content">
        <h2 className="fly-horizon-title">Fly to the Horizon</h2>
        <p className="fly-horizon-bold">
          It kills the ego: It challenges the idea that humans are the "top" of the pyramid and suggests animals are "finished and complete" in their own right.
        </p>
        <p className="fly-horizon-text">
          It sparks curiosity: It reminds us that animals experience a world of sound, scent, and sense that we literally cannot imagine.
        </p>
        <div className="fly-horizon-buttons">
          <button className="btn-primary">Learn More</button>
          <button className="btn-primary">Learn More</button>
          <span className="arrow-right">&rsaquo;</span>
        </div>
      </div>
      <div className="fly-horizon-image">
        <img
          src="https://images.pexels.com/photos/15744737/pexels-photo-15744737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Wild bat-eared fox"
        />
      </div>
    </section>
  );
}

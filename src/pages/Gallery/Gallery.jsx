import "./Gallery.css";

function Gallery() {
  const images = [
    "../../assets/images/w1.png",
    "../../assets/images/w2.png",
    "../../assets/images/w3.png",
    "../../assets/images/w4.png",
    "../../assets/images/w5.png",
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1>Media Gallery</h1>
          <p>Explore our work and the impact we've made in the community.</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;

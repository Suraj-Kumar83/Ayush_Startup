function Testimonials() {
  return (
    <div className="container my-5">
      <h2 className="text-center">What Our Users Say</h2>
      <div className="row mt-4">
        <div className="col-md-4" data-aos="fade-up">
          <div className="card p-3" style={{ borderRadius: "20px" }}>
            <p>
              "Super easy to register my startup. Saved me days of paperwork!"
            </p>
            <h5>- Ayesha, Founder @ HealthTech</h5>
          </div>
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-3" style={{ borderRadius: "20px" }}>
            <p>
              "The mentorship opportunities are golden. Highly recommended."
            </p>
            <h5>- Rajiv, CEO @ AgroStart</h5>
          </div>
        </div>
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
          <div className="card p-3" style={{ borderRadius: "20px" }}>
            <p>"This platform made my startup visible to global investors."</p>
            <h5>- Sneha, Co-Founder @ EduNext</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

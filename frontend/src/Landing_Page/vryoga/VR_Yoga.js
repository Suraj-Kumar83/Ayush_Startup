import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'; // ✅ Correct!
import "swiper/css/navigation";
import "swiper/css";
import "./VR_Yoga.css";

const VirtualYogaExperience = () => {
  const navigate = useNavigate();
  const yogaPoses = [
    {
      name: "Tree Pose",
      img: "/Media/Img1.png",
      description:
        "Improves balance, strengthens legs, and enhances focus and posture.",
    },
    {
      name: "Cobra Pose",
      img: "/Media/Img2.png",
      description:
        "Stretches the spine, opens the chest, and relieves stress and fatigue.",
    },
    {
      name: "Anjaneyasana (Crescent Moon Pose)",
      img: "/Media/Img3.png",
      description:
        "Opens the hips, stretches the thighs, and strengthens glutes and core.",
    },
    {
      name: "Ardha Chandrasana (Half Moon Pose)",
      img: "/Media/Img4.png",
      description:
        "Improves coordination, strengthens the legs, and increases flexibility.",
    },
    {
      name: "Setu Bandhasana (Bridge Pose)",
      img: "/Media/Img5.png",
      description:
        "Stretches the neck and spine, calms the brain, and alleviates stress.",
    },
    {
      name: "Utthita Trikonasana (Triangle Pose)",
      img: "/Media/Img6.png",
      description:
        "Strengthens the legs, stretches the hips and hamstrings, and improves digestion.",
    },
    {
      name: "King Pigeon Pose",
      img: "/Media/Img7.png",
      description:
        "Deep hip opener that improves flexibility and helps release emotional tension.",
    },
    {
      name: "Bhujangasana (Cobra Pose)",
      img: "/Media/Img8.png",
      description:
        "Increases spine flexibility, strengthens shoulders, and relieves lower back pain.",
    },
  ];

  return (
    <div className="virtual-yoga-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>🌐 Virtual Reality Yoga Experience</h1>
        <p>
          Step into a serene world of wellness with immersive virtual yoga
          sessions guided by certified AYUSH experts.
        </p>
        <button className="btn btn-primary p-2" onClick={() => navigate("/")}>
          Request a Demo
        </button>
      </section>

      {/* How it Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>
            🧘‍♂️ Choose your yoga level and preferred style (e.g., Ayurveda,
            Naturopathy)
          </li>
          <li>🕶️ Put on your VR headset</li>
          <li>📺 Follow real-time instructor guidance in 3D</li>
          <li>📈 Track your movements and progress with AI feedback</li>
        </ol>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Yoga Experiences We Offer</h2>
        <div className="grid">
          <div className="card">Beginner Yoga Sessions</div>
          <div className="card">Youth Mindfulness & Focus</div>
          <div className="card">Therapeutic Yoga (for Stress, Anxiety)</div>
          <div className="card">AYUSH-based Traditional Yoga</div>
          <div className="card">Yoga for Office Workers</div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <h2>Why Virtual Yoga?</h2>
        <ul>
          <li>🏡 Practice from anywhere, anytime</li>
          <li>🎯 Personalized wellness goals</li>
          <li>🩺 Guided by AYUSH certified professionals</li>
          <li>🧠 Boosts focus, energy & flexibility</li>
        </ul>
      </section>

      {/* Expert Insights */}
      <section className="insights">
        <h2>What AYUSH Practitioners Say</h2>
        <blockquote>
          “Integrating yoga with VR brings ancient practices to the modern world
          in a powerful, accessible way.” – Dr. Meera Sharma, AYUSH Expert
        </blockquote>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Begin Your Journey?</h2>
        <p>
          Experience VR Yoga with AYUSH guidance and modern tech innovation.
        </p>
        <button className="btn btn-success" onClick={() => navigate("/")}>
          Get Started
        </button>
      </section>

      {/* VR-Compatible Yoga Session Video */}
      <section className="vr-video-section">
        <h2>Watch a 360° Virtual Yoga Session</h2>
        <p>
          Experience immersive yoga with a VR headset or your mobile device.
        </p>
        <div className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/--jhKVdZOJM?rel=0"
            title="360 VR Yoga"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* 3D Yoga Studio Preview */}
      <section
        className="three-d-section"
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <h2>Explore Yoga Poses in Image Format</h2>
        <p>Scroll and explore real Yoga postures.</p>
        <div
          className="slider-container"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
          >
            {yogaPoses.map((pose, index) => (
              <SwiperSlide key={index}>
                <div className="image-wrapper">
                  <img
                    src={pose.img}
                    alt={pose.name}
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  />
                  <h3 style={{ marginTop: "10px" }}>{pose.name}</h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      padding: "0 10px",
                    }}
                  >
                    {pose.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default VirtualYogaExperience;

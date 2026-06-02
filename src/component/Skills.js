import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Skills = () => {
  const skills = [
    { title: "Network Engineer", percentage: 80,gradient: ["#00008B", "#56ccf9","#00008B" ] },
    { title: "Python language", percentage: 90,gradient: ["#00008B", "#56ccf9","#00008B" ]},
    { title: "Frontend Development", percentage: 99, gradient:  ["#00008B", "#56ccf9","#00008B" ] },
    { title: "Backend  Development", percentage: 95, gradient:  ["#00008B", "#56ccf9","#00008B" ] },
  ];
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // هذا هو العدد الافتراضي على الشاشات الكبيرة
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // عند الشاشات الصغيرة (أقل من 768px)
        settings: {
          slidesToShow: 2, // عرض مهارتين فقط
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="skill-container">
      <div id="skills" className="skills-section">
        <h2 className="text-center text-light">Skills</h2>
        <p className="text-center">You Can See My Skills Here</p>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-circle">
                <svg width="120" height="120" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={skill.gradient[0]} />
                      <stop offset="50%" stopColor={skill.gradient[1]} />
                      <stop offset="100%" stopColor={skill.gradient[2]} />
                      
                    </linearGradient>
                  </defs>

                  {/* المسار الخلفي */}
                  <circle cx="50" cy="50" r="40" stroke="#333" strokeWidth="10" fill="none" />

                  {/* مسار التقدم مع تدرج لوني */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={`url(#gradient${index})`}
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="251"
                    strokeDashoffset={251 - (251 * skill.percentage) / 100}
                    strokeLinecap="round"
                    className="progress-circle"
                  />
                </svg>
                <p className="skill-percentage">{skill.percentage}%</p>
              </div>
              <h3 className="skill-title">{skill.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
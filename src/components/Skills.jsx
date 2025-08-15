import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql } from "react-icons/si";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
  ];

  const settings = {
    infinite: true,
    speed: 4000, // slow, continuous movement
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // makes it move continuously
    cssEase: "linear", // smooth continuous scroll
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-black px-6 py-2 rounded-full">
            Tech Stack
          </span>
        </h2>

        {/* Carousel */}
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-5xl hover:scale-110 transition-transform duration-500 text-opacity-80">
                  {skill.icon}
                </div>
                <p className="text-sm text-gray-400">{skill.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

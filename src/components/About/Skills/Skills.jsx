import SkillsCss from "./Skills.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {
  FaBootstrap,
  FaSass,
  FaReact,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    dots: false,
    draggable: true,
    lazyLoad: "ondemand",
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="skills" className={SkillsCss.Skills}>
      <h3 className="highlighted">Algumas tecnologias que eu já trabalhei </h3>
      <Slider {...settings}>
        <div className={SkillsCss.box}>
          <div className={SkillsCss.IconBox}>
            <SiJavascript size={64}></SiJavascript>
          </div>
          <span>Javascript</span>
        </div>

        <div className={SkillsCss.box}>
          <div className={SkillsCss.IconBox}>
            <FaReact size={64}></FaReact>
          </div>
          <span>React</span>
        </div>
        <div className={SkillsCss.box}>
          <div className={SkillsCss.IconBox}>
            <FaBootstrap size={64}></FaBootstrap>
          </div>
          <span>Bootstrap</span>
        </div>

        <div className={SkillsCss.box}>
          <div className={SkillsCss.IconBox}>
            <FaSass size={64}></FaSass>
          </div>
          <span>Sass</span>
        </div>

        <div className={SkillsCss.box}>
          <div className={SkillsCss.IconBox}>
            <FaFigma size={64}></FaFigma>
          </div>
          <span>Figma</span>
        </div>
        <div className={SkillsCss.box}>
          <div className={SkillsCss.IconBox}>
            <FaPython size={64}></FaPython>
          </div>
          <span>Python</span>
        </div>
      </Slider>
    </section>
  );
};

export default Skills;

import React from 'react';
import './experience.css'
import Skills from "../skills";
import skills from "../../data/data.json";
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" >
      <h5 className="">Skills I have</h5>
      <h2 className="">My Experience</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="experience--frontend">
            <h3 className="title-skills">Frontend Development</h3>
            <Skills skills={skills.FrontendSkills}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="experience--backend">
            <h3 className="title-skills">Backend Development</h3>
            <Skills skills={skills.BackendSkills}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="experience--softSkills">
            <h3 className="title-skills">Soft Skills</h3>
            <Skills skills={skills.SoftSkills}/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="experience--softSkills">
            <h3 className="title-skills">Language Skills</h3>
            <div className="container experience__container">
              <div className="experience--content languageSkills">
                <article className="experience--details">
                  <BsPatchCheckFill color="white"/>
                  <h4 className="skills-name">Ukrainian-native</h4>
                </article>

                <article className="experience--details">
                  <BsPatchCheckFill color="white"/>
                  <h4 className="skills-name">English — Pre-Intermedia</h4>
                </article>
              </div>
            </div>
          </div>

        </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Experience;

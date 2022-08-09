import React from 'react';
import { IoIosSchool,IoIosCalendar } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import { nanoid } from 'nanoid'

const EducationList = ({educations}) => {
  return (
    <div className="container education__container">
      {educations&&(educations.map(({university, years, profession,study}) => (
        <article className="education--details" key={nanoid()}>
          <h3 className="study">{study}</h3>
          <div className="edu-item">
            <div>
              <FaUniversity color="white" size="20px"/>
            </div>
            <h4 className="item-details">{university}</h4>
          </div>
          <div className="edu-item">
          <IoIosSchool color="white" size="20px"/>
          <h4 className="item-details">{profession}</h4>
          </div>
          <div className="edu-item">
          <IoIosCalendar color="white" size="20px"/>
          <h4 className="item-details">{years}</h4>
          </div>
        </article>
      )))}
    </div>
  );
};

export default EducationList;

import React, {useState} from 'react';
import './nav.css'
import { BsHouseDoor,BsPerson,BsBook } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (<nav>

      <a
         href="!#"
         className={activeNav===`#`?'active':""}
         onClick={()=>setActiveNav('#')}
      >
        <BsHouseDoor size="25px"/>
      </a>

      <a
         href="#about"
         className={activeNav===`#about`?'active':""}
         onClick={()=>setActiveNav('#about')}
      >
        <BsPerson size="25px"/>
      </a>

      <a
         href="#experience"
         className={activeNav===`#experience`?'active':""}
         onClick={()=>setActiveNav('#experience')}
      >
        <BsBook size="25px"/>
      </a>

      <a
        href="#project"
         className={activeNav===`#project`?'active':""}
         onClick={()=>setActiveNav('#project')}
      >
        <AiOutlineProject size="25px"/>
      </a>

      <a
        href="#education"
         className={activeNav===`#education`?'active':""}
         onClick={()=>setActiveNav('#education')}
      >
        <MdCastForEducation size="25px"/>
      </a>

      <a
        href="#contacts"
        className={activeNav===`#contacts`?'active':""}
        onClick={()=>setActiveNav('#contacts')}
      >
        <RiContactsLine size="25px"/>
      </a>

    </nav>
  );
};

export default Nav;

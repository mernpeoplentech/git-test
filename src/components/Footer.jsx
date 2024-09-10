import React from "react";
import Container from "../components/Container";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram, IoMail } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <Container className="w-full lg:w-[90%] text-gray-300 flex flex-col items-center gap-y-5">
      <p className=" text-sm text-center">
        I am a passionate Frontend Web Developer with expertise in the MERN
        stack (MongoDB, Express, React, Node.js) and a solid foundation in HTML,
        CSS, and JavaScript. My hands-on experience includes building
        responsive, user-friendly interfaces and creating dynamic, full-stack
        applications. One of my recent projects is a fully functional To-Do List
        Application, developed using the MERN stack, which allows users to add,
        edit, and delete tasks in real time.
      </p>
      <div className="flex items-center justify-center gap-3 py-3 text-lg">
        <a href="https://github.com/M-Shourav" target="blank" className="title">
          <FiGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100027878711748"
          target="blank"
          className="title"
        >
          <FaFacebookF />
        </a>
        <a href="https://x.com/MasumAh68543" target="blank" className="title">
          <RiTwitterXFill />
        </a>
        <a
          href="mailto:muhammadshourav625@gmail.com"
          target="blank"
          className="title"
        >
          <IoMail />
        </a>
        <a
          href="https://www.instagram.com/masum_shourav/"
          target="blank"
          className="title"
        >
          <IoLogoInstagram />
        </a>
        <a
          href="https://www.youtube.com/@mdmasumbillahshourav9196"
          target="blank"
          className="title"
        >
          <FaYoutube />
        </a>
      </div>
      <Link
        to={pathname === "/" ? "/todo" : "/"}
        className=" underline underline-offset-1"
      >
        {pathname === "/" ? "todo page" : "back to home"}
      </Link>
    </Container>
  );
};

export default Footer;

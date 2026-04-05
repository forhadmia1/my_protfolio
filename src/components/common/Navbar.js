import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [hide, setHide] = useState(false);
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (typeof window !== `undefined`) {
    let prevScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const curScrollPosition = window.pageYOffset;
      const difference = prevScrollPosition - curScrollPosition;
      if (curScrollPosition > 100) {
        setColor(true);
      } else {
        setColor(false);
      }
      if (difference < 0) {
        setHide(true);
      } else {
        setHide(false);
      }
      prevScrollPosition = curScrollPosition;
    });
  }

  const goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const hash = e.target.hash;
    const el = document.querySelector(hash);
    const offsetTop = el.offsetTop;
    if (typeof window !== `undefined`) {
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${color ? 'bg-base-100/95 backdrop-blur-md shadow-lg' : 'bg-transparent'} ${hide ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            onClick={goTop}
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="46"
                viewBox="0 0 43.30127018922193 50"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  fill="#00cf5d"
                  d="M17.32050807568877 2.4999999999999996Q21.650635094610966 0 25.98076211353316 2.4999999999999996L38.97114317029974 10Q43.30127018922193 12.5 43.30127018922193 17.5L43.30127018922193 32.5Q43.30127018922193 37.5 38.97114317029974 40L25.98076211353316 47.5Q21.650635094610966 50 17.32050807568877 47.5L4.330127018922194 40Q0 37.5 0 32.5L0 17.5Q0 12.5 4.330127018922194 10Z"
                ></path>
              </svg>
              <span className="absolute top-2.5 text-white font-bold text-lg left-1/2 transform -translate-x-1/2">
                F
              </span>
            </div>
            <span className="text-xl font-bold text-primary hidden sm:block">
              Forhad<span className="text-secondary">.Mia</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              <li>
                <a
                  onClick={handleScroll}
                  href="#about_me"
                  className="text-neutral hover:text-primary transition-colors duration-300 font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleScroll}
                  href="#my_skills"
                  className="text-neutral hover:text-primary transition-colors duration-300 font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={handleScroll}
                  href="#services"
                  className="text-neutral hover:text-primary transition-colors duration-300 font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleScroll}
                  href="#portfolio"
                  className="text-neutral hover:text-primary transition-colors duration-300 font-medium"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleScroll}
                  href="#contact"
                  className="text-neutral hover:text-primary transition-colors duration-300 font-medium"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-neutral hover:text-primary transition-colors duration-300 font-medium"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1kpp1hjuDqpay1NWYpmAikoSdOwRLiD0C/view?usp=sharing"
              className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              download
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300"
          >
            {isOpen ? (
              <MdClose className="text-xl text-primary" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <a
                onClick={(e) => {
                  handleScroll(e);
                  setIsOpen(false);
                }}
                href="#about_me"
                className="block py-2 px-4 text-neutral hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleScroll(e);
                  setIsOpen(false);
                }}
                href="#my_skills"
                className="block py-2 px-4 text-neutral hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleScroll(e);
                  setIsOpen(false);
                }}
                href="#services"
                className="block py-2 px-4 text-neutral hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleScroll(e);
                  setIsOpen(false);
                }}
                href="#portfolio"
                className="block py-2 px-4 text-neutral hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleScroll(e);
                  setIsOpen(false);
                }}
                href="#contact"
                className="block py-2 px-4 text-neutral hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                to="/blogs"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-neutral hover:text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
            <li className="pt-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1kpp1hjuDqpay1NWYpmAikoSdOwRLiD0C/view?usp=sharing"
                className="block text-center py-2.5 px-6 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300"
                download
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { faFacebook, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-accent w-f
     h-fit"
    >
      <div className="footer-container width text-primary grid grid-cols-4 lg:grid-cols-3 md:grid-cols-1 gap-10 py-10">
        <div className="md:text-center flex flex-col items-start md:items-center">
          <h2 className="text-2xl font-bold hover:scale-110 duration-300 tracking-widest mb-5 w-fit cursor-pointer">
            TAFL
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            corporis?
          </p>

          <div className="socials flex justify-start md:justify-center items-center mt-5 gap-5">
            <FontAwesomeIcon className="text-3xl duration-300 hover:opacity-80 cursor-pointer" icon={faFacebook} />
            <FontAwesomeIcon className="text-3xl duration-300 hover:opacity-80 cursor-pointer" icon={faWhatsapp} />
            <FontAwesomeIcon className="text-3xl duration-300 hover:opacity-80 cursor-pointer" icon={faYoutube} />
            <FontAwesomeIcon className="text-3xl duration-300 hover:opacity-80 cursor-pointer" icon={faInstagram} />
          </div>
        </div>

        <div>
          <h4 className="font-medium text-xl text-center">Coursers</h4>
          <ul className="flex flex-col items-center justify-start gap-6 mt-6">
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-xl text-center">Coursers</h4>
          <ul className="flex flex-col items-center justify-start gap-6 mt-6">
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-xl text-center">Coursers</h4>
          <ul className="flex flex-col items-center justify-start gap-6 mt-6">
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
            <li>
              <Link className="opacity-80" to="">
                Course1
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

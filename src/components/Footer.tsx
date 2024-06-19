import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";
import logo from "../assets/images/logo.svg";
import RequestBtn from "./Button/Request";

export default function Footer() {
  const footNav = [
    {
      id: 1,
      name: "About Us",
      link: "#",
    },
    {
      id: 2,
      name: "Contact",
      link: "#",
    },
    {
      id: 3,
      name: "Blog",
      link: "#",
    },
    {
      id: 4,
      name: "Careers",
      link: "#",
    },
    {
      id: 5,
      name: "Support",
      link: "#",
    },
    {
      id: 6,
      name: "Privacy Policy",
      link: "#",
    },
  ];
  const socialLinks = [
    {
      id: 1,
      image: `${facebookIcon}`,
      link: "#",
    },
    {
      id: 2,
      image: `${youtubeIcon}`,
      link: "#",
    },
    {
      id: 3,
      image: `${twitterIcon}`,
      link: "#",
    },
    {
      id: 4,
      image: `${pinterestIcon}`,
      link: "#",
    },
    {
      id: 5,
      image: `${instagramIcon}`,
      link: "#",
    },
  ];

  return (
    <footer className=" flex flex-col gap-6 bg-DarkBlue p-[2rem] md:flex-row md:justify-between">
      <div className="flex flex-col items-center gap-12  md:items-start">
        <img src={logo} alt="Logo" className="w-[10rem] bg-white p-2" />
        <ul className="flex gap-4 ">
          {socialLinks.map((item) => (
            <li
              className="hover:bg-gradient-to-r from-limeGreen to-brightCyan 
        hover:text-transparent inline-block "
            >
              <a href={item.link} key={item.id}>
                <img src={item.image} alt="facebook-icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        {footNav.map((item) => (
          <li
            className={` list-none hover:bg-gradient-to-r from-limeGreen to-brightCyan 
        hover:text-transparent inline-block  bg-clip-text ${
          item.id <= 3 ? "" : "grid-col-start-2"
        }`}
          >
            <a
              href={item.link}
              key={item.id}
              className="text-lightGrayishBlue hover:text-limeGreen "
            >
              {item.name}
            </a>
          </li>
        ))}
      </nav>
      <div className="flex flex-col items-center gap-4">
        <RequestBtn />
        <div className="text-grayishBlue">
          &#169; Easybank. All rights Reserved
        </div>
      </div>
    </footer>
  );
}

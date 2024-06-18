import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import ReqBtn from "../Button/Request";
import hamburger from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";
import { useState } from "react";
import Modal from "../Modal";
export interface NavItem {
  id: number;
  name: string;
  link: string;
}
export default function Navbar() {
  const nav: NavItem[] = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "About",
      link: "#",
    },
    {
      id: 3,
      name: "Contact",
      link: "#",
    },
    {
      id: 4,
      name: "Blog",
      link: "#",
    },
    {
      id: 5,
      name: "Careers",
      link: "#",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const handleModalChange = () => {
    return () => {
      setShowModal((prevShowModal) => !prevShowModal);
    };
  };
  return (
    <div className="flex justify-between items-center py-4 px-[2rem] ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="hidden sm:block">
        <ul className="flex justify-between items-center space-x-5 ">
          {nav.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>
                <p className="text-md font-medium text-grayishBlue">
                  {item?.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden sm:block">
        <ReqBtn />
      </div>
      <div className="sm:hidden">
        <img
          src={showModal ? iconClose : hamburger}
          alt="menu-icon"
          onClick={handleModalChange()}
          className="cursor-pointer"
        />
      </div>
      {showModal && <Modal nav={nav} />}
    </div>
  );
}

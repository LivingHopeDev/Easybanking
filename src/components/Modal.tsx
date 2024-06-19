import { Link } from "react-router-dom";
import { NavItem } from "./Header/Navbar";
interface ModalProps {
  nav: NavItem[];
}
export default function Modal({ nav }: ModalProps) {
  return (
    <>
      <div className="fixed top-[3rem] left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[99]" />
      <div className="bg-white rounded-lg shadow-md p-4 absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] z-[99]">
        <ul className=" flex flex-col items-center gap-4">
          {nav.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>
                <p
                  className="text-md font-medium text-grayishBlue hover:bg-gradient-to-r from-limeGreen to-brightCyan 
        hover:text-transparent inline-block  bg-clip-text"
                >
                  {item?.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

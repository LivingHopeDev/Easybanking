import Request from "../Button/Request";
import introDesktop from "../../assets/images/bg-intro-desktop.svg";
import introMobile from "../../assets/images/bg-intro-mobile.svg";
import mockups from "../../assets/images/image-mockups.png";

export default function Hero() {
  return (
    <div
      className="bg-white h-[100vh] flex justify-between items-center 
    flex-col-reverse relative py-8 xl:flex-row overflow-hidden"
    >
      <div className="flex flex-col items-center space-y-6 md:pl-[2rem] xl:items-start ">
        <h1 className="text-DarkBlue text-[3rem] md:text-[4rem]">
          Next generation <br /> digital banking
        </h1>
        <p className="text-grayishBlue p-2 lg:p-0">
          Take your financial life onlin. Your Easybank account
          <br /> will be a one-stop-shop for spending. saving,
          <br /> budgeting, investing, and much more.
        </p>
        <Request />
      </div>
      {/* FOR LARGE SCREENS */}
      <div className="hidden md:block ">
        <img
          src={introDesktop}
          alt="background-image"
          className="w-[70rem] absolute -top-[12rem] -right-[20rem] "
        />
        <img
          src={mockups}
          alt="background-image"
          className="w-[40rem] lg:w-[50rem]  absolute -top-[12rem] -right-[8rem] "
        />
      </div>
      {/* FOR MOBILE */}
      <div className="md:hidden absolute top-0 w-full ">
        <img src={introMobile} alt="background-image" className="w-full" />
        <img
          src={mockups}
          alt="background-image"
          className="w-[60rem] absolute -top-[8rem] z-30"
        />
      </div>
    </div>
  );
}

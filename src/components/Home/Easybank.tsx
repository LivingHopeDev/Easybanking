import EasybankCard from "../Card/EasybankCard";
import iconApi from "../../assets/images/icon-api.svg";
import iconBudgeting from "../../assets/images/icon-budgeting.svg";
import iconOnboarding from "../../assets/images/icon-onboarding.svg";
import iconOnline from "../../assets/images/icon-online.svg";
export interface detailItems {
  id: number;
  image: string;
  title: string;
  body: string;
}
export default function Easybank() {
  const detail: detailItems[] = [
    {
      id: 1,
      image: `${iconOnline}`,
      title: "Online Banking",
      body: "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world",
    },
    {
      id: 2,
      image: `${iconBudgeting}`,
      title: "Simple Budgeting",
      body: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
    },
    {
      id: 3,
      image: `${iconOnboarding}`,
      title: "Fast Onboarding",
      body: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      id: 4,
      image: `${iconApi}`,
      title: "Open API",
      body: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <section className="flex flex-col bg-lightGrayishBlue gap-6 py-8 px-[2rem] ">
      <div className="flex flex-col items-center space-y-4 md:w-[45%] md:items-start">
        <h2 className="text-xl font-[600] text-DarkBlue md:text-3xl">
          Why choose Easybank ?
        </h2>
        <p className="text-center text-grayishBlue md:text-start">
          We keverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {detail.map((item) => (
          <div key={item.id}>
            <EasybankCard
              id={item.id}
              title={item.title}
              image={item.image}
              body={item.body}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

import { detailItems } from "../Home/Easybank";

export default function EasybankCard({ title, body, image }: detailItems) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-4  md:text-start md:items-start">
      <img src={image} alt="image" className="w-[5rem]" />
      <h2 className="text-xl text-DarkBlue font-medium">{title}</h2>
      <p className="items-start text-grayishBlue md:w-[16rem]">{body}</p>
    </div>
  );
}

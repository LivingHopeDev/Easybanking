import { articleItem } from "../Home/Article";
export default function ArticleCard({
  title,
  image,
  author,
  body,
}: articleItem) {
  return (
    <div className="flex flex-col rounded-md">
      <img src={image} alt="image" className="rounded-t-lg " />
      <div className="bg-[#FFFF] p-[1rem] space-y-2 rounded-b-lg ">
        <p className="text-grayishBlue">By {author}</p>
        <h3
          className="text-DarkBlue text-xl font-[600] hover:bg-gradient-to-r from-limeGreen to-brightCyan 
        hover:text-transparent inline-block  bg-clip-text cursor-pointer"
        >
          {title}
        </h3>
        <p className="text-grayishBlue">{body} </p>
      </div>
    </div>
  );
}

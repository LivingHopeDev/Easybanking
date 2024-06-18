import ArticleCard from "../Card/ArticleCard";
import imageCurrency from "../../assets/images/image-currency.jpg";
import imageConfetti from "../../assets/images/image-confetti.jpg";
import imageRestaurant from "../../assets/images/image-restaurant.jpg";
import imagePlane from "../../assets/images/image-plane.jpg";

export interface articleItem {
  id: number;
  author: string;
  image: string;
  title: string;
  body: string;
}
const articleInfo: articleItem[] = [
  {
    id: 1,
    author: "Claire Robinson",
    image: `${imageCurrency}`,
    title: "Receive money in any currency with no fees",
    body: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    id: 2,
    author: "Wilson Hutton",
    image: `${imageRestaurant}`,
    title: "Treat yourself without worrying about money",
    body: "Our simple budgeting feature allows you to separate out your spending and set realistic limit each month. That means you ...",
  },
  {
    id: 3,
    author: "Wilson Hutton",
    image: `${imagePlane}`,
    title: "Take your Easyband card wherever you go",
    body: "We want you to enjoy your trvels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
  },
  {
    id: 4,
    author: "Claire Robinson",
    image: `${imageConfetti}`,
    title: "Our invite-only Beta accounts are now live",
    body: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
  },
];
export default function Article() {
  return (
    <article className="p-[2rem] bg-white ">
      <h2 className="p-8 text-3xl font-[600] text-center text-DarkBlue md:text-start">
        Latest Article
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-4">
        {articleInfo.map((item) => (
          <div key={item.id}>
            <ArticleCard
              id={item.id}
              author={item.author}
              image={item.image}
              title={item.title}
              body={item.body}
            />
          </div>
        ))}
      </div>
    </article>
  );
}

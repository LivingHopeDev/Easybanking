import Navbar from "../../components/Header/Navbar";
import Hero from "../../components/Header/Hero";
import Easybank from "../../components/Home/Easybank";
import Article from "../../components/Home/Article";

export default function HomeScreen() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Easybank />
      <Article />
    </div>
  );
}

import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Search from "../../components/search/Search";

export default function Home() {
  return (
    <div className="home">
    <FeaturedInfo/>
    <Search/>
    </div>
  )
}

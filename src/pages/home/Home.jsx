import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Search from "../../components/search/Search";
import Categories from "../../components/categories/Categories";
import Table from "../../components/table/Table";

export default function Home() {
  return (
    <div className="home">
    <FeaturedInfo/>
    <Search/>
    <Categories/>
    <Table/>
    </div>
  )
}

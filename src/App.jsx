import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

export default function App() {
  return (
    <div>
      <Header />
      <SearchBar />

      <div className="p-4 grid gap-4">
        {/* Temporary demo cards */}
        <RecipeCard />
        <RecipeCard />
      </div>

      <Footer />
    </div>
  );
}

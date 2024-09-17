import Navbar from "./component/shared/Navbar";
import Footer from "./component/shared/Footer";
import HeroSection from "./component/HeroSection";
import JobGrid from "./component/JobGrid";
import FilterJob from "./component/FilterJob";

function Home(params) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FilterJob />
      <JobGrid></JobGrid>
      <Footer />
    </>
  );
}
export default Home;

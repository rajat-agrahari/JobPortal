import Navbar from "./component/shared/Navbar";
import Footer from "./component/shared/Footer";
import HeroSection from "./component/HeroSection";
import JobGrid from "./component/JobGrid";

function Home(params) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <JobGrid></JobGrid>

      <Footer />
    </>
  );
}
export default Home;

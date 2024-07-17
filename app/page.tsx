import TimeLine from "./Components/TimeLine";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex rounded items-center justify-center pt-5 pb-12">
        <NavBar />
      </div>
      <div className=" mx-32">
        <TimeLine></TimeLine>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

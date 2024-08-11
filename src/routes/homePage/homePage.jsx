import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Your Gateway to Property Excellence</h1>
          <p>
            Explore our extensive portfolio of properties, tailored to meet your
            needs. Whether you're looking for your first home, investing in real
            estate, or seeking commercial spaces, we've got you covered. Our
            team of experts is dedicated to providing top-notch service and
            ensuring a seamless property search experience.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>1000+</h1>
              <h2>Properties Listed</h2>
            </div>
            <div className="box">
              <h1>5+ Years</h1>
              <h2>Average Market Expertise</h2>
            </div>
            <div className="box">
              <h1>98%</h1>
              <h2>Satisfaction Rate</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Real Estate Background" />
      </div>
    </div>
  );
}

export default HomePage;

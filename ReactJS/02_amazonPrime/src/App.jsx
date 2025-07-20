import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import img1 from "../public/image1.png";
import img2 from "../public/image2.png";
import img3 from "../public/image3.png";

const App = () => {
  return (
    <div className="container text-white">
      <Header />
      <Hero
        title="Welcome to netflix Video"
        subtitle="Join Netflix to watch the latest movies, TV shows and award-winning Amazon Originals"
        buttonTitle="Sign in to Prime"
        image={img1}
      />
      <Hero
        title="Movie rentals on Prime Video"
        subtitle="Early Access to new movies, before digital subscription"
        buttonTitle="Rent Now"
        image={img2}
      />
      <Hero
        title="Your favorite subscriptions all in one place"
        subtitle="Customers can subscribe to get access to a variety of premium and specialty content, easily accessible within the Prime Video app"
        image={img3}
      />
      <Footer />
    </div>
  );
};

export default App;

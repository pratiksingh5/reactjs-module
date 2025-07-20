import React from "react";

const Hero = ({ title, subtitle, buttonTitle, image }) => {
  //  console.log("props", props)
  return (
    <section className="flex bg-black  justify-between">
      <div className="content px-16 py-20 flex flex-col gap-10 w-[45%]">
        <h1 className="text-5xl font-bold"> {title} </h1>
        <h2 className="text-xl font-semibold">{subtitle}</h2>

        {/* {buttonTitle ? (
          <button className="bg-white px-8 py-4 text-xl text-black font-semibold rounded-xl w-[360px]">
            {buttonTitle}
          </button>
        ) : (
          ""
        )} */}

        {buttonTitle && (
          <button className="bg-white px-8 py-4 text-xl text-black font-semibold rounded-xl w-[360px]">
            {buttonTitle}
          </button>
        )}
      </div>
      <div className="image w-[50%] py-10">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Hero;

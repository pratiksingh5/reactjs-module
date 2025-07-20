# Session 2

1. Components:

- Building if any web site/UI


2. Props - Properties

Data which we can pass through from parent component to child

Ek component se dusre component me data pass karna

Syntax:  <App propKaNaam="Jo Data bhejna hai"> // Pass karne ka

Accept Karne ka:

Arrow Function parenthesis:

() => 
destructuring
()

Way 1:
const Hero = (props) => {
 console.log("props", props)
  return (
    <section className="flex bg-black  justify-between">
      <div className="content px-16 py-20 flex flex-col gap-10 w-[45%]">
        <h1 className="text-5xl font-bold"> {props.title} </h1>
        <h2 className="text-xl font-semibold">
         {props.subtitle}
        </h2>
        <button className="bg-white px-8 py-4 text-xl text-black font-semibold rounded-xl w-[360px]">
        {props.buttonTitle}
        </button>
      </div>
      <div className="image w-[50%] py-10">
        <img src="../../public/image1.png" alt="" />
      </div>
    </section>
  );
};
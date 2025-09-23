// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const DashboardLayout = (ComponentJoAyega) => {
//   return function InnerComponent(props) {
//     return (
//     <div className="w-full">
//       <Header />
//       <main className="flex justify-center items-center w-full h-[80vh]">
//         <ComponentJoAyega {...props} />
//       </main>
//       <Footer />
//     </div>
//     )

//   };
// };

// export default DashboardLayout;

import { Outlet } from "react-router"
import Header from "../components/Header";
import Footer from "../components/Footer";



const DashboardLayout = () => {
  return ( 
    <div className="w-full">
      <Header />
      <main className="flex justify-center items-center w-full h-[80vh]">
          <Outlet/>
      </main>
      <Footer />
    </div>
  )
}


export default DashboardLayout
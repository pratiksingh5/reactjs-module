  // import React from 'react'

  // const AuthLayout = (Component) => {
  //   return function InnerComponent() {
  //     return (
  //         <div className='bg-white w-full h-screen flex justify-center items-center'>
  //             <Component/>
  //         </div>
  //     )
  //   }
  // }

  // export default AuthLayout

// import { Outlet } from 'react-router';

// import React from 'react';

// const AuthLayout = ({ children }) => {
//   return (
//     <div className="bg-white w-full h-screen flex justify-center items-center">
//       {children}

//       JAB without outlet use ho rha
//     </div>
//   );
// };

// export default AuthLayout;



import { Outlet } from 'react-router';

import React from 'react';

const AuthLayout = () => {
  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
        <Outlet/>

      {/* JAB outlet use ho rha */}
    </div>
  );
};

export default AuthLayout;
import React, { memo } from "react";

const Child = ({count}) => {
  console.log("Render Child Component");
  return (
    <div className="bg-blue-300 p-20 mt-4">
      <h1 className="text-4xl">Child Component {count}</h1>
    </div>
  );
};

export default Child;

// 1 
// export const MemoizedChild = React.memo(Child);

export const MemoizedChild = React.memo(Child, (prevProps, nextProps) => true)

// 2. 
// export default React.memo(Child); 

// 4 

// export default memo(Child); 

// const Child = React.memo(() => {
//   console.log("Render Child Component");
//   return (
//     <div className="bg-blue-300 p-20 mt-4">
//       <h1 className="text-4xl">Child Component</h1>
//     </div>
//   );
// });

// export default Child;

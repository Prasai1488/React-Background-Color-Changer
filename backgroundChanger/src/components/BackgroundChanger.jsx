// import React, { useState } from "react";

// const BackgroundChanger = () => {
//   const [color, setColor] = useState("red");

//   const whiteColor = () => {
//     setColor("white");
//   };

//   const redColor = () => {
//     setColor("red");
//   };

//   const greenColor = () => {
//     setColor("green");
//   };

//   return (
//     <div
//       style={{ backgroundColor: color }}
//       className="w-full h-screen duration-200"
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <button
//           onClick={whiteColor}
//           class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
//         >
//           White
//         </button>
//         <button
//           onClick={redColor}
//           class="bg-red-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
//         >
//           Red
//         </button>
//         <button
//           onClick={greenColor}
//           class="bg-green-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2"
//         >
//           Green
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BackgroundChanger;



import React, { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("red");

  const colors = [
    { name: "White", value: "white", bgClass: "bg-white"  },
    { name: "Red", value: "red", bgClass: "bg-red-400"  },
    { name: "Green", value: "green", bgClass: "bg-green-500" },
    {name: "Yellow", value:"yellow",bgClass:"bg-yellow-500" },
    {name: "Blue", value:"blue",bgClass:"bg-blue-500"},
    {name: "Black", value:"black",bgClass:"bg-black-500"}
  ];

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className="min-h-screen w-full duration-200 overflow-hidden"
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {colors.map(({ name, value, bgClass,textClass }) => (
          <button
            key={value}
            onClick={() => handleColorChange(value)}
            className={`${bgClass} hover:bg-gray-100 ${textClass} font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundChanger;

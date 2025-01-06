// // import React, { useState, useEffect } from 'react';
// // import { assets } from '../assets/assets';

// // const Offer = () => {

// //   const mdBackgroundImage = 'https://neemans.com/cdn/shop/files/Web_moblie_Banner_750X1100_New_Year.jpg';
// //   const defaultBackgroundImage = assets.offer;


// //   const [timeLeft, setTimeLeft] = useState({
// //     days: 2,
// //     hours: 18,
// //     minutes: 2,
// //     seconds: 0,
// //   });

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       updateTimeLeft();
// //     }, 1000);

// //     return () => clearInterval(interval); // Cleanup on component unmount
// //   }, [timeLeft]);

// //   const updateTimeLeft = () => {
// //     const { days, hours, minutes, seconds } = timeLeft;

// //     if (seconds > 0) {
// //       setTimeLeft((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
// //     } else if (minutes > 0) {
// //       setTimeLeft((prev) => ({
// //         ...prev,
// //         minutes: prev.minutes - 1,
// //         seconds: 59,
// //       }));
// //     } else if (hours > 0) {
// //       setTimeLeft((prev) => ({
// //         ...prev,
// //         hours: prev.hours - 1,
// //         minutes: 59,
// //         seconds: 59,
// //       }));
// //     } else if (days > 0) {
// //       setTimeLeft((prev) => ({
// //         ...prev,
// //         days: prev.days - 1,
// //         hours: 23,
// //         minutes: 59,
// //         seconds: 59,
// //       }));
// //     }
// //   };

// //   const formatTime = (time) => (time < 10 ? `0${time}` : time);

// //   return (
// //     <div
// //       className="h-[100vh] sm:h-[80vh] md:h-[50vh] lg:h-[60vh] bg-cover bg-center"
// //       style={{
// //         backgroundImage: window.innerWidth >= 320 && window.innerWidth < 1024
// //           ? `url(${mdBackgroundImage})`
// //           : `url(${defaultBackgroundImage})`,
// //       }}
// //     >
// //   <div className="flex flex-col items-start justify-center h-full px-3 sm:px-5 md:px-20">
// //     {/* Offer Text */}
// //     <span className="text-white mt-2 sm:mt-5 md:mt-10 text-[10px] sm:text-sm md:text-4xl font-semibold">
// //       Buy One Get One Free
// //     </span>

// //     {/* Countdown Timer */}
// //     <div className="flex flex-col mt-2 sm:mt-5 md:mt-10">
// //       <div className="flex items-center text-white text-[8px] sm:text-xs md:text-3xl">
// //         {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
// //           <React.Fragment key={unit}>
// //             <div className="flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 md:w-16 md:h-16 bg-white text-black rounded-full mr-1 sm:mr-2">
// //               <span>{formatTime(timeLeft[unit])}</span>
// //             </div>
// //             {index < 3 && <span className="mx-1 sm:mx-2">:</span>}
// //           </React.Fragment>
// //         ))}
// //       </div>
// //       <span className="text-xs sm:text-sm md:text-4xl mt-1 sm:mt-2 font-bold animate-pulse">
// //         Time Remaining
// //       </span>
// //     </div>

// //     {/* Call-to-Action Button */}
// //     <a
// //       href="/collection"
// //       className="mt-2 sm:mt-5 md:mt-10 px-2 py-1 sm:px-4 sm:py-2 text-[8px] sm:text-xs md:text-md bg-black text-white rounded-full hover:bg-white hover:text-black transition ease-in-out duration-300"
// //     >
// //       Shop Now <i className="fa-solid fa-arrow-right"></i>
// //     </a>
// //   </div>
// // </div>
// //   );
// // };

// // export default Offer;
// import React, { useState, useEffect } from "react";
// import { assets } from "../assets/assets";

// const Offer = () => {
//   const mdBackgroundImage =
//     "https://neemans.com/cdn/shop/files/Web_moblie_Banner_750X1100_New_Year.jpg";
//   const defaultBackgroundImage = assets.offer;

//   const [timeLeft, setTimeLeft] = useState({
//     days: 2,
//     hours: 18,
//     minutes: 2,
//     seconds: 0,
//   });

//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1082);

//   useEffect(() => {
//     // Update screen size dynamically
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth > 1082);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateTimeLeft();
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [timeLeft]);

//   const updateTimeLeft = () => {
//     const { days, hours, minutes, seconds } = timeLeft;

//     if (seconds > 0) {
//       setTimeLeft((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
//     } else if (minutes > 0) {
//       setTimeLeft((prev) => ({
//         ...prev,
//         minutes: prev.minutes - 1,
//         seconds: 59,
//       }));
//     } else if (hours > 0) {
//       setTimeLeft((prev) => ({
//         ...prev,
//         hours: prev.hours - 1,
//         minutes: 59,
//         seconds: 59,
//       }));
//     } else if (days > 0) {
//       setTimeLeft((prev) => ({
//         ...prev,
//         days: prev.days - 1,
//         hours: 23,
//         minutes: 59,
//         seconds: 59,
//       }));
//     }
//   };

//   const formatTime = (time) => (time < 10 ? `0${time}` : time);

//   return (
//     <div
//       className="h-[100vh] sm:h-[80vh] md:h-[50vh] lg:h-[60vh] bg-cover bg-center"
//       style={{
//         backgroundImage:
//           window.innerWidth >= 320 && window.innerWidth < 1024
//             ? `url(${mdBackgroundImage})`
//             : `url(${defaultBackgroundImage})`,
//       }}
//     >
//       <div className="flex flex-col items-start justify-center h-full px-3 sm:px-5 md:px-20">
//         {/* Offer Text */}
//         <span className="text-white mt-2 sm:mt-5 md:mt-10 text-[10px] sm:text-sm md:text-4xl font-semibold">
//           Buy One Get One Free
//         </span>

//         {/* Countdown Timer - Visible only on large screens */}
//         {isLargeScreen && (
//           <div className="flex flex-col mt-2 sm:mt-5 md:mt-10">
//             <div className="flex items-center text-white text-[8px] sm:text-xs md:text-3xl">
//               {["days", "hours", "minutes", "seconds"].map((unit, index) => (
//                 <React.Fragment key={unit}>
//                   <div className="flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 md:w-16 md:h-16 bg-white text-black rounded-full mr-1 sm:mr-2">
//                     <span>{formatTime(timeLeft[unit])}</span>
//                   </div>
//                   {index < 3 && <span className="mx-1 sm:mx-2">:</span>}
//                 </React.Fragment>
//               ))}
//             </div>
//             <span className="text-xs sm:text-sm md:text-4xl mt-1 sm:mt-2 font-bold animate-pulse">
//               Time Remaining
//             </span>
//           </div>
//         )}

//         {/* Call-to-Action Button */}
//         <a
//           href="/collection"
//           className="mt-2 sm:mt-5 md:mt-10 px-2 py-1 sm:px-4 sm:py-2 text-[8px] sm:text-xs md:text-md bg-black text-white rounded-full hover:bg-white hover:text-black transition ease-in-out duration-300"
//         >
//           Shop Now <i className="fa-solid fa-arrow-right"></i>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Offer;
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Offer = () => {
  const mdBackgroundImage =
    "https://neemans.com/cdn/shop/files/Web_moblie_Banner_750X1100_New_Year.jpg";
  const defaultBackgroundImage = "https://neemans.com/cdn/shop/files/Web_Banner_1920X800_New_Year.jpg?v=1735151299&width=1300";

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 100);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1082);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={'h-[100vh] sm:h-[130vh] md:h-[190vh] lg:h-[50vh] xl:h-[80vh] bg-cover bg-center'}
      style={{
        backgroundImage: `url(${isLargeScreen ? defaultBackgroundImage : mdBackgroundImage})`,
      }}
    ></div>
  );
};

export default Offer;

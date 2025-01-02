import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 18,
    minutes: 2,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimeLeft();
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [timeLeft]);

  const updateTimeLeft = () => {
    const { days, hours, minutes, seconds } = timeLeft;

    if (seconds > 0) {
      setTimeLeft((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
    } else if (minutes > 0) {
      setTimeLeft((prev) => ({
        ...prev,
        minutes: prev.minutes - 1,
        seconds: 59,
      }));
    } else if (hours > 0) {
      setTimeLeft((prev) => ({
        ...prev,
        hours: prev.hours - 1,
        minutes: 59,
        seconds: 59,
      }));
    } else if (days > 0) {
      setTimeLeft((prev) => ({
        ...prev,
        days: prev.days - 1,
        hours: 23,
        minutes: 59,
        seconds: 59,
      }));
    }
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div
      className="mb-20"
      style={{
        backgroundImage: `url(${assets.offer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh', // or any other desired height
      }}
    >
      <div className="flex flex-col">
        <span className="text-white mt-40 ml-40 text-7xl pro-name">Up to 50% off</span>
        <span className="text-white mt-10 ml-40 text-4xl pro-name">Buy One Get One Free</span>
      </div>
<div className="flex flex-row items-center mt-10 ml-40 mb-10 text-white text-3xl pro-name">
  <div className="flex items-center justify-center w-16 h-16 bg-white text-black pro-name p-7 cursor-pointer transition ease-in-out duration-500 rounded-full mr-3">
    <span >{formatTime(timeLeft.days)}d</span>
  </div>
  <span className="mx-2">:</span>
  <div className="flex items-center justify-center w-16 h-16 bg-white text-black pro-name p-7 cursor-pointer transition ease-in-out duration-500 rounded-full mr-3">
    <span >{formatTime(timeLeft.hours)}h</span>
  </div>
  <span className="mx-2">:</span>
  <div className="flex items-center justify-center w-16 h-16 bg-white text-black pro-name p-7 cursor-pointer transition ease-in-out duration-500 rounded-full mr-3">
    <span >{formatTime(timeLeft.minutes)}m</span>
  </div>
  <span className="mx-2">:</span>
  <div className="flex items-center justify-center w-16 h-16 bg-white text-black pro-name p-7 cursor-pointer transition ease-in-out duration-500 rounded-full">
    <span>{formatTime(timeLeft.seconds)}s</span>
  </div>
  <span className="ml-5 text-4xl font-bold text-white animate-pulse pro-name">
  Time Remaining
</span>
</div>

      <div>
        <span>
            <a
              href="/collection"
              className="text-white mt-40 ml-40 pro-name  text-md px-4 py-2 rounded-full bg-black hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              Shop Now <i class="fa-solid fa-arrow-right"></i>
            </a>
  
        </span>
      </div>
    </div>
  );
};

export default Offer;

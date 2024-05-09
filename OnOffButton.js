import React, { useState } from "react";
import { motion } from "framer-motion";

const OnOffButton = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <div
        className="flex justify-center w-screen h-screen items-center"
        style={{
          background: "linear-gradient(250deg, #7b2ff7, #f107a3)", // Use "background" instead of "backgroundColor"
        }}
      >
        <div
          onClick={() => setIsOn(!isOn)}
          className={`${
            isOn ? "justify-end" : "justify-start"
          } w-52 h-28  border-black flex items-center rounded-full p-2`}
          style={{
            background: "rgba(255, 255, 255, 0.4)",
          }}
        >
          <motion.div
            layout
            initial={{
              scale: 1,
            }}
            whileTap={{ scale: 0.9 }} // Scale down on click
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="w-24 h-24 rounded-full cursor-pointer bg-gray-100"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default OnOffButton;

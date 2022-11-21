import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from "react-router-dom";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};
export default function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={animations}
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
    >
        {/* <NavLink to="/GeneralDashboard/settings/todays_rate"> */}
        {/* <div className="overlay"></div> */}
        {/* </NavLink> */}
      {children}
    </motion.div>
  );
}

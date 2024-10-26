// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
// import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
// import useTheam from "../components/ThemProvider";

// function Header() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const { theme, toggleTheme } = useTheam();
//   return (
//     <>
//       <header className="bg-white shadow-md flex justify-between items-center px-6 py-12 sm:px-14 sm:py-6 ">
//         <h1 className="font-bold text-xl">Where in the world?</h1>
//         <button
//           onClick={() => setIsDarkMode((previousMode) => !previousMode)}
//           className="font-medium"
//         >
//           <FontAwesomeIcon
//             icon={isDarkMode ? solidMoon : regularMoon}
//             size="xl"
//           />
//           <span className="ml-3">Dark Mode</span>
//         </button>
//       </header>
//     </>
//   );
// }

// export default Header;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "./ThemeProvider";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } shadow-md flex justify-between items-center px-6 py-12 sm:px-14 sm:py-6`}
    >
      <h1 className="font-bold text-xl">Where in the world?</h1>
      <button
        onClick={toggleTheme}
        className="font-medium flex items-center space-x-3"
      >
        <FontAwesomeIcon
          icon={theme === "dark" ? solidMoon : regularMoon}
          size="xl"
        />
        <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </header>
  );
}

export default Header;

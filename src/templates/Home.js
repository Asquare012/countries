import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../home.scss";
import data from "../data.json";

const homeVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: "0",
    transition: {
      type: "spring",
      stiffness: "50",
    },
  },
};

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="Hero-section">
      <div className="Hero-top">
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <motion.div
        variants={homeVariants}
        initial="initial"
        animate="animate"
        className="Hero-bottom"
      >
        {data
          .filter((info) => {
            return search.toLocaleLowerCase() === ""
              ? info
              : info.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase());
          })
          .map((info, index) => {
            const { name, population, region, capital, flags } = info;

            return (
              <NavLink to={`/country/${population}`}>
                <div className="Container" key={index}>
                  <div className="Image-section">
                    <img
                      src={flags.png}
                      alt={name}
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="Info-section">
                    <ul>
                      <li>{name}</li>
                      <li>
                        <span>Population: </span>
                        {population}
                      </li>
                      <li>
                        <span>Region: </span>
                        {region ? region : <h2>No Region</h2>}
                      </li>
                      <li>
                        <span>Capital: </span>
                        {capital ? capital : <h2>No Capital</h2>}
                      </li>
                    </ul>
                  </div>
                </div>
              </NavLink>
            );
          })}
      </motion.div>
    </div>
  );
};

export default Home;

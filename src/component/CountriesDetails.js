import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Data from "../data.json";
import "./details.scss";
import arrow from "./arrow.png";

const detailsVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: "0",
    transition: {
      type: "spring",
      stiffness: "50",
    },
  },
};

const CountriesDetails = () => {
  const { population } = useParams();
  const country = Data.find((pop) => {
    return String(pop.population) === population;
  });

  return (
    <motion.div
      variants={detailsVariants}
      initial="initial"
      animate="animate"
      className="Details-section"
    >
      <div className="Details-section-top">
        <NavLink to="/">
          <button>
            <img src={arrow} alt="arrow" /> Go back
          </button>
        </NavLink>
      </div>
      <div className="Details-section-bottom">
        <div className="Section-bottom-left">
          <img
            src={country.flags.png}
            alt={country.name}
            height="100%"
            width="100%"
          />
        </div>
        <div className="Section-bottom-right">
          <div className="Top">{country.name}</div>
          <div className="Mid">
            <ul>
              <li>
                <span>Native Name:</span> {country.nativeName}
              </li>
              <li>
                <span>Population:</span> {country.population}
              </li>
              <li>
                <span>Region:</span> {country.region}
              </li>
              <li>
                <span>Calling Code:</span> +{country.callingCodes}
              </li>
              <li>
                <span>Sub Region:</span> {country.subregion}
              </li>
              <li>
                <span>Capital: </span>
                {country.capital ? country.capital : <h2>No Capital</h2>}
              </li>
              <li>
                <span>Top Level Domain: </span>
                {country.topLevelDomain ? (
                  country.topLevelDomain.map((domain) => {
                    return domain;
                  })
                ) : (
                  <h2>No Domain</h2>
                )}
              </li>
              <li>
                <span>Currencies: </span>
                {country.currencies ? (
                  country.currencies.map((currency) => {
                    return currency.name + ", ";
                  })
                ) : (
                  <h2>No currencies</h2>
                )}
              </li>
              <li>
                <span>Languages: </span>
                {country.languages.map((language) => {
                  return language.name + ", ";
                })}
              </li>
            </ul>
          </div>
          <div className="Bottom">
            <span>Border Countries: </span>
            {country.borders ? (
              country.borders.map((border, index) => {
                return <button key={index}>{border}</button>;
              })
            ) : (
              <h2>No border countries</h2>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CountriesDetails;

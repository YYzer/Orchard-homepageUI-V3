import React from "react";
import AllocationTable from "./SproutTable";
import DisplayCoin from "./SproutCard";
import "./SproutCard/style.css";
import tokens from "./SproutCard/data.json";
import Loader from "../../utils/loader";
import useFetch from "../../utils/fetch";
import Footer from '../../components/Footer';

const Sprout = () => {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=";

  for (let i = 0; i < tokens.length; i++) {
    url = url + tokens[i].name;
    if (i !== tokens.length - 1) url = url + "%2C";
  }

  url = url + "&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  console.log(url);

  const { data, loading, error } = useFetch(url);
  console.log(data);

  if (loading) {
    console.log("Loading....");
    return <Loader />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="sprout">
      <div className="container">
        <div className="intro">
          <div>
            <div>
              <h2>Sprout Index Token</h2>
            </div>
            <div className="current_price_container">
              <div className="current_price_inner_container">
                <div className="current_price_div">
                  CURRENT PRICE<br />
                  <h3>$164.07</h3>
                </div>
                <div>
                  CHANGE<br />
                  <h3 className="value">-2.67%</h3>
                </div>
              </div>
              <div>
                <button className="btn">Mint Sprout</button>
              </div>
            </div>
            <div>
              <p>Top 10 Cryptos by Market Cap in One Single Index Fund</p>
              <p>
                The <strong>Sprout Index</strong> is a capitalization-weighted
                index which tracks the performance of decentralized assets
                across the market.
              </p>
            </div>
            <div className="stat_container">
              <div className="stat">MARKET CAP<br /><h3>$776.7M</h3></div>
              <div className="stat">VOLUME<br/><h3>$62.8M</h3></div>
              <div className="stat">CURRENT SUPPLY<br/><h3>2, 992, 222</h3></div>
              <div className="stat">STREAMING FEE<br/><h3>0.95%</h3></div>
            </div>
            <div className="tablecontainer">
              {AllocationTable(data, tokens)}
            </div>
          </div>
        </div>
        <div className="cardwrap">
          {DisplayCoin(data)}
        </div >
      </div>
      <Footer /> 
    </div>
  );
};

export default Sprout;
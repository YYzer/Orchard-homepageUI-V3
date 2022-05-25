import React from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import "./style.css";

const DisplayCoin = (data: any) => {
  let coin_url = "https://www.coingecko.com/en/coins/";

  return (
    <>
      {data?.map((coin: any, index: any)=>(
        <a href={coin_url+coin.id} target="_blank" rel="noreferrer" key={`coin-${index}`}>
          <div className="card">
            <div className="coinwrap" id="{key=coin.id}">
              <img src={coin.image} alt={coin.name} />
            </div>
            <div className="text">
              <h4>{coin.name}</h4>
              <p>${coin.current_price.toLocaleString()}</p>
            </div>
            {coin.price_change_percentage_24h < 0 ? (
              <div className="arrow">
                <FiArrowDown className="downicon" />
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            ) : (
              <div className="arrow">
                <FiArrowUp className="upicon" />
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            )}
          </div>
        </a>
      ))}
    </>
  );
};

export default DisplayCoin;
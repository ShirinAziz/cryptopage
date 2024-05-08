import React from "react";
import CoinItem from "./CoinItem";

const Coins = ({ coins }) => {
  return (
    <div className="max-w-[1140] m-auto">
      <div>
        <div className="heading flex justify-between items-center bg-[#26272b] font-bold">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {coins.map((coins) => {
          return <CoinItem coins={coins} key={coins.id} />;
        })}
      </div>
    </div>
  );
};

export default Coins;

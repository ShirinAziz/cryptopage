import React from "react";

const CoinItem = ({ coins }) => {
  return (
    <div className="coin-row">
      <p>{coins.market_cap_rank}</p>
      <div className="flex items-center">
        <img src={coins.image} alt="" className="h-[40px] mr-[8px] w-auto" />
        <p>{coins.symbol.toUpperCase()}</p>
      </div>
      <p>${coins.current_price.toLocaleString()}</p>
      <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hide-mobile">${coins.total_volume.toLocaleString()}</p>
      <p className="hide-mobile">${coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;

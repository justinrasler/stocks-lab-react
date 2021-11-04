import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const stockData = props.stockData
  return stockData.map((stock) => {
    return (
      <div>
      <Link to={`/stocks/${stock.symbol}`}>
        <h3>{stock.name}</h3>
      </Link>
              </div>
    );
  });
};

export default Dashboard;
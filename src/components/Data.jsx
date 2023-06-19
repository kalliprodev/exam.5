import React, { useState } from "react";
import axios from "axios";
import Search from "./Serach/Search";

const Data = () => {
  const [serach, setSearch] = useState("Chicken");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${setSearch}`)
      .then((res) => {
        setFoods(res.data.Search);
      });
  });

  return (
    <div>
      <Search serach={serach} setSearch={setSearch} />
    </div>
  );
};

export default Data;

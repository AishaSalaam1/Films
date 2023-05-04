/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Sections from "../components/Sections"
import { apiKey } from "../mock/constants";

const Home = () => {
  const [allData, setAllDate] = useState([]);
  const movietypes = ["now_playing", "top_rated"];
  const movietypeSyntax = ["Now Playing", "Top Rated"];
  const getMovieTypeData = async (type) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`
    );
    const data = await res.json();
    return data;
  };
  const fetchData = useCallback(async () => {
    const myPromises = movietypes.map(
      async (item) => await getMovieTypeData(item)
    );
    const res = await Promise.all(myPromises);
    setAllDate(res.map((item, i) => {
      return {
        name: movietypeSyntax[i],
        results: item.results
      };
    }))
  }, []);

  useEffect(() => {
    fetchData().then().catch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavBar />
      <h1 className="collection-name">Latest Movie</h1>
      <Sections allData={allData} />
    </>
  );
};

export default Home;

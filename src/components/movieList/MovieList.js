import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  console.log("la valeur", useParams);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
    console.log("result", type);
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "top_rated"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`,
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">
        {(type ? type : "TOP RATED").toUpperCase()}
      </h2>
      <div className="list__cards">
        {Array.isArray(movieList)
          ? movieList.map((movie) => <Cards movie={movie} />)
          : null}
      </div>
    </div>
  );
};

export default MovieList;

import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="movie-details">
      <div className="movie-details__intro">
        <img
          className="movie-details__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
          alt="Backdrop"
        />
      </div>
      <div className="movie-details__detail">
        <div className="movie-details__detail-left">
          <div className="movie-details__poster-box">
            <img
              className="movie-details__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt="Poster"
            />
          </div>
        </div>
        <div className="movie-details__detail-right">
          <div className="movie-details__detail-right-top">
            <div className="movie-details__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie-details__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie-details__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie-details__vote-count">
                {currentMovieDetail
                  ? `(${currentMovieDetail.vote_count} votes)`
                  : ""}
              </span>
            </div>
            <div className="movie-details__runtime">
              {currentMovieDetail ? `${currentMovieDetail.runtime} mins` : ""}
            </div>
            <div className="movie-details__release-date">
              {currentMovieDetail
                ? `Release date: ${currentMovieDetail.release_date}`
                : ""}
            </div>
            <div className="movie-details__genres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <span
                      className="movie-details__genre"
                      id={genre.id}
                      key={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie-details__detail-right-bottom">
            <div className="synopsis-text">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie-details__links">
        <div className="movie-details__heading">Useful Links</div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie-details__home-button movie-details__button">
                Homepage{" "}
                <i className="new-tab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie-details__imdb-button movie-details__button">
                IMDb <i className="new-tab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="movie-details__heading">Production companies</div>
      <div className="movie-details__production">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <React.Fragment key={company.id}>
              {company.logo_path && (
                <span className="production-company-image">
                  <img
                    className="movie-details__production-company"
                    src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                    alt={company.name}
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default MovieDetail;
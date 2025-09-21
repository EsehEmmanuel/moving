import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import Top from "./../Landing/TopTrending";
import TopTwo from "./../Landing/TopRate";
import Popular from "./../Landing/Pops";
import Movie from "./../Landing/MovieData";
import Series from "./../Landing/SeriesData";

const AllMovies = () => (
  <Wrapper>
    <Carousel autoplay className="carousel">
      <div>
        <img
          src="https://image.tmdb.org/t/p/w300//yvirUYrva23IudARHn3mMGVxWqM.jpg"
          alt="1"
        />
      </div>
      <div>
        <img
          src="https://image.tmdb.org/t/p/original//8Mckh3qJRTzXTQNZtpb133RHmO4.jpg"
          alt="2"
        />
      </div>
      <div>
        <img
          src="https://image.tmdb.org/t/p/w300//yvirUYrva23IudARHn3mMGVxWqM.jpg"
          alt="3"
        />
      </div>
      <div>
        <img
          src="https://image.tmdb.org/t/p/original//jrhXbIOFingzdLjkccjg9vZnqIp.jpg"
          alt="4"
        />
      </div>
      <div>
        <img
          src="https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg"
          alt="5"
        />
      </div>
      <div>
        <img
          src="https://image.tmdb.org/t/p/w300//jMpBQr2aNOFAI6wsC47zsOG6qOh.jpg"
          alt="6"
        />
      </div>
    </Carousel>
    <Top />
    <TopTwo />
    <Popular />
    <Movie />
    <Series />
  </Wrapper>
);

export default AllMovies;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  /* background: black; */

  .carousel {
    width: 100%;
    height: 100%;

    .slick-slide {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;

      img {
        width: 900px;
        height: 500px;
        object-fit: fit;
      }
    }
  }
`;

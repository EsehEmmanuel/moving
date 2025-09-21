import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const Data = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((e) => e.id.toString() === id);

  if (!movie) return <p>Movie not found</p>;

  return (
    <Container>
      <div
        className="details"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), #000), url(${movie.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="image_holder">
          <img src={movie.image} alt={movie.title} />
        </div>

        <div className="right_holder">
          <h1>Title:{movie.title}</h1>
          <h4>Genre:{movie.genre}</h4>
          <h4>Year:{movie.year}</h4>
          <h4>Rating: {movie.rating}</h4>

          <button className="Watch_btn">WATCH NOW</button>
          <button className="exit_btn" onClick={() => navigate(-1)}>
            ❌
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Data;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  display: contents;
  align-items: center;
  justify-content: center;

  .details {
    width: 100%;
    height: 90vh;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    color: white;
    .image_holder {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      img {
        width: 70%;
        height: 70%;
        border-radius: 0.5rem;
      }
    }
    .right_holder {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        margin-bottom: 3rem;
        font-size: 2rem;
        text-align: center;
      }
      h4 {
        padding: 0.3rem;
        font-size: 2rem;
        border-radius: 0.2rem;
        display: block;
      }

      .exit_btn {
        width: fit-content;
        position: absolute;
        border-radius: 2rem;
        top: 0%;
        right: 0%;

        border: none;
        cursor: pointer;
        color: white;
        transition: all 350ms ease-in-out;
        &:hover {
          background-color: darkred;
          transform: scale(1.1);
        }
      }
      .Watch_btn {
        padding: 1rem;
        width: fit-content;
        border-radius: 2rem;
        background-color: orange;
        border: none;
        cursor: pointer;
        color: white;
        transition: all 350ms ease-in-out;
        margin-top: 5rem;
        &:hover {
          background-color: darkorange;
          transform: scale(1.1);
        }
      }
    }
  }
`;

import React from "react";
import { TopRating } from "../../Components/CardObj";
import styled from "styled-components";

const TopRate = ({ onSelect }) => {
  return (
    <Holder>
      <div className="wrapper">
        <h3>Top Rating</h3>
        <section>
          {TopRating.map((items, index) => (
            <div
              className="hold_wrap"
              key={index.id}
              onClick={() => onSelect(items)}
            >
              <img src={items.image} />
              <p>{items.title}</p>
            </div>
          ))}
        </section>
      </div>
    </Holder>
  );
};

export default TopRate;
const Holder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .wrapper {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 2rem;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      .hold_wrap {
        width: 23%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-size: 1.5rem;
        }
        img {
          width: 250px;
          height: 300px;
          cursor: pointer;
        }
      }
    }
  }
`;

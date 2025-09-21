import React from "react";
import { seriesData } from "../../Components/CardObj";
import styled from "styled-components";

const SeriesData = ({ onSelect }) => {
  return (
    <Holder>
      <div className="wrapper">
        <h3>Series Data</h3>
        <section>
          {seriesData.map((items, index) => (
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

export default SeriesData;
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
          font-weight: bold;
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

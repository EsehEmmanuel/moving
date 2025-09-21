import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const App = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img src="https://image.tmdb.org/t/p/w300//yvirUYrva23IudARHn3mMGVxWqM.jpg" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="https://image.tmdb.org/t/p/original//8Mckh3qJRTzXTQNZtpb133RHmO4.jpg" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="https://image.tmdb.org/t/p/w300//yvirUYrva23IudARHn3mMGVxWqM.jpg" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="https://image.tmdb.org/t/p/original//jrhXbIOFingzdLjkccjg9vZnqIp.jpg" />
      </h3>
    </div>
  </Carousel>
);
export default App;

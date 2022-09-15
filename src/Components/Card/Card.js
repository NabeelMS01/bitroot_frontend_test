import React, { useContext, useState } from "react";
import "../Card/Card.css";
import moment from "moment";
import { ComponentContext } from "../../Contexts/contexts";
function Card({ data }) {
  const altImage="https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-landscape.jpg"
  const { cardData, setCardData } = useContext(ComponentContext);
  const { open, setOpen } = useContext(ComponentContext);
  console.log(data);
  return (
    <div
      onClick={() => {
        setCardData(data);
        setOpen(true);
      }}
      className="column"
    >
      <div className="card">
        <div className="image">
          <div className="hover-more">
            <div className="more">
              <h3>Learn More</h3>
            </div>
          </div>

          <img src={ data? data.thumbnail.large:altImage } alt="" srcset="" />
        </div>

        <div className="Card-Body">
          <div className="dot">
            <img width={"30px"} src={require("../../assets/dot.png")} alt="" />
          </div>
          <div className="title">
            <h3>Web Design Trends 2020</h3>
          </div>
          <div className="content">
            <p>{data.content}</p>
          </div>
          <div className="content-footer">
            <div className="name">
              <p>{`${data.author.name} - ${data.author.role}`}</p>
            </div>
            <div className="date">
              <p>{moment(data.date).format("MMM Do YY")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

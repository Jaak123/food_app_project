import React from "react";
import Cards from "./Cards";
import { useFoods } from "../../contexts/FoodsContext";

import { Container, Row } from "react-bootstrap";

export default function SectionComp() {
  const [foodData, setFoodData] = useFoods();
  let categories = [];

  for (let i = 0; i < foodData.length; i++) {
    if (categories.includes(foodData[i].category)) {
    } else {
      categories.push(foodData[i].category);
    }
  }

  const renderSection = (data) => {
    return (
      <div>
        <div className="section-container">
          <h6> {data}</h6>
          <button className="section-button">
            Бүгдийг харах
            <img id="angle-right" src="/images/angle-right2.svg" alt="" />
          </button>
          <button className="section-mobile-button">
            <img
              id="angle-right-mobile"
              src="/images/angle-right1.svg"
              alt=""
              fill="orange"
            />
          </button>
        </div>
        <div className="section-container">
          <Container fluid>
            <Row xs={2} md={2} className="d-flex">
              {foodData
                .filter((item, index) => {
                  return item.category == data;
                })
                .slice(0, 4)
                .map((item, index) => {
                  return <Cards card={item} key={index} />;
                })}
            </Row>
          </Container>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="section-container">
        <h6> Хямдралтай</h6>
        <button className="section-button">
          Бүгдийг харах
          <img id="angle-right" src="/images/angle-right2.svg" alt="" />
        </button>
        <button className="section-mobile-button">
          <img
            id="angle-right-mobile"
            src="/images/angle-right1.svg"
            alt=""
            fill="orange"
          />
        </button>
      </div>
      <div className="section-container">
        <Container fluid>
          <Row xs={2} md={2} className="d-flex">
            {foodData
              .filter((item, index) => {
                return item.discount > 0;
              })
              .map((item, index) => {
                return <Cards card={item} key={index} />;
              })}
          </Row>
        </Container>
      </div>
      {categories.map(renderSection)}
    </div>
  );
}

import React from "react";
import { courses } from "./Course-Data";
import Card from "./Card";
import "./Course.css";
const Course = () => {
  return (
    <div>
      <div className="row px-5 mb-4">
        <div className="col-12 text-center">
        <div className="second-headline pb-3">
              <h2>What will we learn in this course?</h2>
            </div>
          
        </div>
      </div>
      <div className="row px-5">
        {courses.map((item,idx) => (
          <Card
            cardTitle={item.cardTitle}
            cardContent={item.cardContent}
            cardImage={item.cardImage}
            cardUrl={item.cardUrl}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;

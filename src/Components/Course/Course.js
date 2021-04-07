import React from "react";
import { courses } from "./Course-Data";
import Card from "./Card";
const Course = () => {
  return (
    <div>
      <div className="row px-5 mb-4">
        <div className="col-12 text-center">
          <h2 className="second-headline">
            What will we learn in this course?
          </h2>
        </div>
      </div>
      <div className="row px-5">
        {courses.map((item) => (
          <Card
            cardTitle={item.cardTitle}
            cardContent={item.cardContent}
            cardImage={item.cardImage}
            cardUrl={item.cardUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;

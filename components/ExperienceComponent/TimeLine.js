import React from "react";
import { Chrono } from "react-chrono";

export default function TimeLine() {
  const items = [
    {
      title: "October 2021",
      cardTitle: "I8labs",
      cardSubtitle: "Python, Backend and AWS Devloper",
      cardDetailedText: `Men of 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nesciunt doloribus. Laudantium sapiente maiores nobis cupiditate eum! Est accusantium labore, vitae debitis ipsa ducimus laudantium illo atque pariatur perferendis dicta!
      the British Expeditionary Force (BEF) 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nesciunt doloribus. Laudantium sapiente maiores nobis cupiditate eum! Est accusantium labore, vitae debitis ipsa ducimus laudantium illo atque pariatur perferendis dicta!
      wade out to..`,
    },
    {
      title: "July 2021",
      cardTitle: "Unicorn Vision",
      cardSubtitle: "Python and Tkinter Devloper",
      cardDetailedText: `Men of the British 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nesciunt doloribus. Laudantium sapiente maiores nobis cupiditate eum! Est accusantium labore, vitae debitis ipsa ducimus laudantium illo atque pariatur perferendis dicta!
   nesciunt doloribus. Laudantium sapiente maiores nobis cupiditate eum! Est accusantium labore, vitae debitis ipsa ducimus laudantium illo atque pariatur perferendis dicta!
        Expeditionary Force (BEF) wade out to..`,
    },
  ];

  return (
    <div style={{ width: "80%" }}>
      <Chrono
        items={items}
        theme={{
          primary: "black",
          secondary: "cyan",
          cardBgColor: "white",
          cardForeColor: "Black",
          titleColor: "black",
          titleColorActive: "Black",
        }}
        mode="VERTICAL"
        fontSizes={{
          cardSubtitle: "1rem",
          cardText: "1rem",
          cardTitle: "2rem",
          title: "1rem",
        }}
        hideControls={true}
        useReadMore={false}
      />
    </div>
  );
}

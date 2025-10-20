import React from "react";
import Tile from "../components/Tile";

function News() {
  const news = [
    {
      title: "Autumn Regatta Results",
      date: "2025-10-01",
      summary: "Congratulations to all participants of the Autumn Regatta. See the full results and photos in our gallery."
    },
    {
      title: "Clubhouse Renovations",
      date: "2025-09-15",
      summary: "Renovation works start next week. Expect some temporary closures."
    }
  ];

  return (
    <div>
      <h2>News</h2>
      {news.map((n, idx) => (
        <Tile key={idx}>
          <h3>{n.title}</h3>
          <small>{n.date}</small>
          <p>{n.summary}</p>
        </Tile>
      ))}
    </div>
  );
}

export default News;
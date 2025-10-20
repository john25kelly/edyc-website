import React from "react";
import Tile from "../components/Tile";

function Events() {
const events = [
  { title: "Saturday Race", date: "2025-10-25", info: "Club handicap race. Briefing at 09:00." },
  { title: "Members Social", date: "2025-11-10", info: "Evening at the clubhouse. Tickets available online." },
];

return (
  <div>
    <h2>Events</h2>
    {events.map((e, i) => (
      <Tile key={i}>
        <h3>{e.title}</h3>
        <small>{e.date}</small>
        <p>{e.info}</p>
      </Tile>
    ))}
  </div>
);
}

export default Events;
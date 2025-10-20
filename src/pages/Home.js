import React from "react";
import styled from "styled-components";
import Tile from "../components/Tile";
import { Link } from "react-router-dom";

const Hero = styled.section`
  padding: 3rem 0;
  background: linear-gradient(90deg, #e3d0d7 0%, #f6e9f1 100%);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 2rem;
`;

function Home() {
  return (
    <>
      <Hero>
        <Title>Welcome to EDYC</Title>
        <p>The home of sailing, events, and community on the coast.</p>
      </Hero>
      <Grid>
        <Tile>
          <h3>Latest News</h3>
          <p>Stay up to date with our club news and announcements.</p>
          <Link to="/news">Read News</Link>
        </Tile>
        <Tile>
          <h3>Upcoming Events</h3>
          <p>Join us for races, socials, and special occasions.</p>
          <Link to="/events">View Events</Link>
        </Tile>
        <Tile>
          <h3>Gallery</h3>
          <p>See photos from recent club activities and regattas.</p>
          <Link to="/gallery">View Gallery</Link>
        </Tile>
        <Tile>
          <h3>Contact Us</h3>
          <p>Get in touch for membership or general info.</p>
          <Link to="/contact">Contact Form</Link>
        </Tile>
      </Grid>
    </>
  );
}

export default Home;
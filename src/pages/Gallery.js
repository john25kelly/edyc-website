import React from "react";
import styled from "styled-components";
import Tile from "../components/Tile";

const Grid = styled.div`
 display: grid;
 gap: 16px;
 grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const Img = styled.img`
 width: 100%;
 height: 140px;
 object-fit: cover;
 border-radius: 8px;
`;

function Gallery() {
 const pics = [
   'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=60',
   'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=800&q=60',
   'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=60',
   'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=60'
 ];

 return (
   <div>
     <h2>Gallery</h2>
     <Tile>
       <Grid>
         {pics.map((p, i) => (
           <Img key={i} src={p} alt={`Gallery ${i + 1}`} />
         ))}
       </Grid>
     </Tile>
   </div>
 );
}

export default Gallery;
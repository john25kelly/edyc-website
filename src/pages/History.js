import React from "react";
import styled from "styled-components";
import Tile from "../components/Tile";

const TimelineWrap = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 12px;
`;

const YearItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  @media (max-width: 680px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Year = styled.div`
  min-width: 110px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.05rem;
`;

const Content = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.tileBg};
  border-radius: 12px;
  padding: 14px;
  border: 1px solid ${(props) => props.theme.colors.tileBorder};
  line-height: 1.45;
`;

function History() {
  // Summarised timeline entries from the provided Club History page
  const timeline = [
    {
      year: "1967–1968",
      text:
        "Club formed by a group of sailors from Belfast and County Down. Site at Moymore (near Killyleagh) was chosen and East Down Yacht Club was formally established in early 1968 (annual fee set at £10).",
    },
    {
      year: "1969 (Opening Year)",
      text:
        "First sailing season and inaugural regatta (7 Sep 1969). Rapid early growth: membership rose from ~20 families to 572 members (including 220 children). Members built slipway, access routes and the first clubhouse. Wayfarers were adopted to promote family sailing.",
    },
    {
      year: "1970s",
      text:
        "Despite a difficult regional period, EDYC remained a family-focused haven. Regatta entries stayed high, caravans stayed on-site, and club racing in multiple classes flourished.",
    },
    {
      year: "1970s (Cruising & Classes)",
      text:
        "Partnerships and class growth: joined Round-the-Lough cruiser races (1970), Leisure 17 class arrived (1973). Strong GP14 fleet produced national successes (e.g., 1977 Irish Nationals winners).",
    },
    {
      year: "1980s (Building & Facilities)",
      text:
        "Members delivered major self-help building projects: McRobert Room and kitchen (opened 1980), a new two-storey clubhouse (1984), and the pontoon (1985). EDYC hosted major events including the GP14 Irish Championship.",
    },
    {
      year: "1990s (Youth & Training)",
      text:
        "Focused drive on youth training with Mirrors and Optimists; training weeks attracted dozens of juniors and became an important part of club life.",
    },
    {
      year: "2000s–2014 (Events & Training Fleet)",
      text:
        "Topper training in the 2000s and the club hosted international events: Wayfarer International Championships (2001) and GP14 World Championships (2014). The club added modern training boats (RS Fevas) and strengthened RYA training provision.",
    },
    {
      year: "2018 & Today",
      text:
        "50th anniversary celebrations in 2018 ('Year of the Viking') with large sail-pasts and social events. Today EDYC is an RYA Training Centre offering dinghy, powerboat and ladies training, plus kayaking and active cruising — with a strong junior focus for the future.",
    },
  ];

  return (
    <div>
      <h2>History</h2>
      <Tile>
        <p>Below is a concise timeline summarising the club’s history and key milestones.</p>
        <TimelineWrap>
          {timeline.map((e, i) => (
            <YearItem key={i}>
              <Year>{e.year}</Year>
              <Content>
                <div>{e.text}</div>
              </Content>
            </YearItem>
          ))}
        </TimelineWrap>
      </Tile>
    </div>
  );
}

export default History;
import styled from "styled-components";
// import CarouselComp from "../../carousel/CarouselComp";
import border from "/assets/Vector2.png";
import borderIcon from "/assets/Content2.png";
import knight from "/assets/knight.png";
import light from "/assets/light.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthProvider";
import rules from "/rules/Rules.pdf"

import { RegisterButton } from "../../../styled-components/register-button";
import axios from "../../../api/axios";
import { toast } from "react-toastify";


const HomeSecondSection = () => {
  const { token, team } = useContext(AuthContext);

  const [tournamentRegistrations, setTournamentRegistrations] = useState<TournamentRegistration[] | null>(null);

  useEffect(() => {
      async () => {
        const response = await axios.get("/api/tournament-registrations/", {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setTournamentRegistrations(response.data)

    }
  }, []);
  console.log(tournamentRegistrations)

  const teamRegisterHandler = async() =>{
    try{
      const response = await axios.post("/api/tournament-registrations/",
        {
          tournament: 1,
          team: team?.id
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (response.status === 201) {
        toast.success("Team registered succesfully on tournament");
      } 
      else {
        toast.error("Unexpected error occurred while registering");
      }
      console.log(response.status)
    }catch(arr:any){
      console.log(arr)
      if(arr.response.status === 400){
        toast.error("You should have all players");
      }
      else{
        toast.error("Something wrong, try again!");
      }
    }
  }
  return (
    <Section>
      <BorderContainer>
        <img src={border} />
        <img src={borderIcon} />
      </BorderContainer>
      <CarouselCont>
        {/* <CarouselComp /> */}
      </CarouselCont>
      <Announcement>
        <h2>Announcement</h2>
        <section>
          <FirstSide>
            <AnnouncementCompCont $right={true}>
              <AnnouncementComp $bottom={true}>
                <p>Tournament Name</p>
                <h3>Pre tournament (Summer split)</h3>
              </AnnouncementComp>
              <AnnouncementComp $bottom={true}>
                <p>Registration start date</p>
                <h3>5/24/2024</h3>
              </AnnouncementComp>
              <AnnouncementComp $bottom={true}>
                <p>Duration</p>
                <h3>3 Week</h3>
              </AnnouncementComp>
              <AnnouncementComp>
                <p>Team size</p>
                <h3>5 vs 5 + 2 Sub</h3>
              </AnnouncementComp>
            </AnnouncementCompCont>
            <AnnouncementCompCont>
              <AnnouncementComp $bottom={true}>
                <p>Format</p>
                <h3>BO 3 / BO 5</h3>
              </AnnouncementComp>
              <AnnouncementComp $bottom={true}>
                <p>Region</p>
                <h3>Eune</h3>
              </AnnouncementComp>
              <AnnouncementComp $bottom={true}>
                <p>Map</p>
                <h3>Summoner’s Rift</h3>
              </AnnouncementComp>
              <AnnouncementComp>
                <p>Team limit</p>
                <h3>Unlimited</h3>
              </AnnouncementComp>
            </AnnouncementCompCont>
          </FirstSide>
          <RightSide>
            <KnightStyle
              src={knight}
              style={
                (!token && !team) || (token && team) ? { top: "60px" } : {}
              }
              />
            <img src={light} />
            {token !== null && !team ? (
              <Link to="/teamRegister">
                <GroupRegisterButton>Create Team</GroupRegisterButton>
              </Link>
            ) : null}
          </RightSide>
        </section>
      </Announcement>
      <BottomBorder />

      <div className="team_register_container"> 
        <a href={rules} download className="test-button">-- Download Rules --</a>
        {
          token && team &&
            (
              tournamentRegistrations !== null?
                tournamentRegistrations?.map((value, key) => (     
                  value.team === team?.id ? 
                  null
                  :
                  (
                    <RegisterButton 
                      onClick={teamRegisterHandler} 
                      style={{width: "300px", marginLeft: '100px'}}
                      key={key}
                    >
                      Team register
                    </RegisterButton>
                  )
                ))
              :
              <RegisterButton 
                onClick={teamRegisterHandler} 
                style={{width: "300px", marginLeft: '100px'}}
              >
                Team register
              </RegisterButton>
            )
        }
      </div>
      
    </Section>
  );
};

const Section = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${"/assets/mandilosani.jpg"});
  background-position: center;
  background-size: cover;
  position: relative;
  height: 120vh;
  padding-top: 170px;
  color: white;
  .test-button{
    margin-left: 120px;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
  .team_register_container{
    display: flex;
    flex-direction: column;
    
  }
  @media (max-height: 900px) {
    height: 130vh;
  }
`;

const BorderContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
  img:nth-child(1) {
    width: 100%;
    position: absolute;
  }
  img:nth-child(2) {
    width: 7%;
    z-index: 1;
    margin-top: 1%;
  }
`;

const CarouselCont = styled.div`
  margin-top: 50px;
  @media (max-height: 900px) {
    margin-top: 0;
  }
`;

const BottomBorder = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0px;
  top: 110vh;
  background: linear-gradient(
    180deg,
    rgba(1, 6, 0, 0) 0.36%,
    #000000 34.4%,
    rgba(32, 30, 27, 0) 72.05%
  );

  @media (max-height: 900px) {
    top: 118vh;
  }
`;

const Announcement = styled.div`
  margin-top: 50px;
  h2 {
    font-size: 38px;
    width: 12ch;
    margin: 0 auto;
  }
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -80px;
  }
`;

const FirstSide = styled.div`
  font-family: "Roboto Slab", serif;
  display: flex;
  background-color: #29322d2e;
`;

const AnnouncementCompCont = styled.div<{ $right?: boolean }>`
  border-right: ${(props) => (props.$right ? "solid #52463b 1px" : "")};
`;

const AnnouncementComp = styled.div<{ $bottom?: boolean }>`
  border-bottom: ${(props) => (props.$bottom ? "solid #52463b 1px" : "")};
  padding: 15px 170px 15px 15px;
  p {
    font-size: 14px;
    font-weight: 300;
    color: #e5e5e5;
  }
  h3 {
    font-weight: 500;
    font-size: 20px;
    margin-top: 10px;
  }
`;

const RightSide = styled.div`
  position: relative;
`;

const KnightStyle = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const GroupRegisterButton = styled.button`
  position: absolute;
  top: 460px;
  left: 70px;

  background: linear-gradient(90deg, #f08018 29.56%, #f8e47d 106.64%);
  padding: 7px 40px;
  border: none;
  font-family: "Cormorant Unicase", serif;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.05;
    background: linear-gradient(to bottom, #ffbb00, #ffa600);
  }
  &:active {
    scale: 0.95;
  }
`;

export default HomeSecondSection;

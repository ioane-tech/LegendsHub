import { NavLink } from "react-router-dom"
import LoginBg from "../login&registration/LoginBg"
import GoldenButton from "../../styled-components/golden-button"

import styled from "styled-components"

import {GroupRegisterButton} from "../home/second-section/HomeSecondSection"

function Profile() {
  return (
    <div>
      <LoginBg/>

      <NavLink to="/" style={{ position: "absolute", left: "5%", top: "40px" }}>
        <GoldenButton>back</GoldenButton>
      </NavLink>

      <ProfileContainer>
        <GroupRegisterButton>Create Team</GroupRegisterButton>
      </ProfileContainer>
      
    </div>
  )
}

export default Profile

const ProfileContainer = styled.div`
  margin-left:auto;
  margin-right:auto;
  margin-top:144px;

  width:600px;
  height:522px;

  backdrop-filter: blur(8px);
  background-color:rgba(0, 0, 0, 0.5);
`

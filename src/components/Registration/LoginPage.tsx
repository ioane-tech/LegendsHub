
import { useState } from "react";
import styled from "styled-components";

import LoginBg from './LoginBg'




function LoginPage() {
  const [password, setPassword]=useState<string | null>("")
  const [confirmPassword, setConfirmPassword]=useState("")

  const [email, setEmail]=useState("")

  console.log(email)
  return (
    <div>
        <LoginBg/>
        <div style={{height:"100vh", width:"500px", marginLeft:"auto",backgroundColor:"rgba(0, 0, 0, 0.6)"}}>

          <FormContainer >
            <Title>Become a legend</Title>
            <Inputs onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email..."/>
            <Inputs onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter password..."/>
            <Inputs onChange={(e)=>setConfirmPassword(e.target.value)} type="text" placeholder="Confirm password..."/>
            {(confirmPassword != "" && confirmPassword != password) &&
              <Error >Password does not match!</Error>
            }
            <SumbitButton>Sumbit</SumbitButton>
          </FormContainer>

        </div>
    </div>
  );
}

export default LoginPage;


const FormContainer = styled.div`
    padding-top:50%;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const Inputs = styled.input`
  width:300px;
  height:30px;
  margin-bottom:10px;
  padding-left: 5px;
`;

const SumbitButton = styled.button`
  width:300px;
  height:30px;
  background-color: #0f0f29;
  border:1px solid cyan;
  color: white;
  &:hover {
    background-color: transparent;
    transition:0.3s;
  }
  transition:0.3s;
  cursor: pointer;
`;

const Title = styled.h2`
  color: #C89B3C;
  font-size: 50px;
  margin-top:-80px;
  padding-bottom:70px;
`;

const Error = styled.p`
  color:red;
  margin-bottom: 10px;
`;
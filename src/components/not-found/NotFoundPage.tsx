import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <ErrorPageContainer>
      <h1>page not found</h1>
    </ErrorPageContainer>
  );
};

const ErrorPageContainer = styled.div`
  color: white;
  text-transform: capitalize;
  margin: 80px 150px;
`;

export default NotFoundPage;

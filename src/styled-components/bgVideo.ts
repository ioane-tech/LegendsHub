import styled from "styled-components";

const BgVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;

    overflow: hidden;
    z-index: -1; 

    min-width: 100%;
    height: 100vh;
    object-fit: cover;
`;

export default BgVideo;

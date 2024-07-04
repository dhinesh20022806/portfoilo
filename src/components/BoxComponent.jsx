import styled from "styled-components";

const BoxWrapper = styled.div`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor};
  width: 100%;
  padding:20px;

  color:${({ $color }) => $color || "#000"}

  height: 100%;
  ${"" /* background-color: #000; */}
`;

export default BoxWrapper;

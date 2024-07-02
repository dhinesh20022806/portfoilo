import styled from "styled-components";

const BoxWrapper = styled.div`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor};
  border: 1px solid
    ${({ $backgroundColor }) => $backgroundColor};
  width: 100%;

  height: 100%;
  ${"" /* background-color: #000; */}
`;

export default BoxWrapper;

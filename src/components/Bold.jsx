import styled from "styled-components";

const Bold = styled.b`
  color: ${({$color}) => $color || '#000'};
  font-family:inherit;

  font-weight: 900;
`;

export default Bold;

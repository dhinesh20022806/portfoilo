import styled from "styled-components";

const BoxWrapper = styled.div`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor};
  width: 100%;
  padding:20px;
  gap:${({$gap}) => `${$gap}px` || '0px'};
  display:${({$display}) => $display || "block"};
  flex-direction: ${({$flexDirection}) => $flexDirection || "row"};
  justify-content: ${({$justifyContent}) => $justifyContent || "flex-start"};
  align-items:${({$alignItems}) => $alignItems || 'start'};
  color:${({ $color }) => $color || "#000"};
  height: 100%;
  ${"" /* background-color: #000; */}
`;

export default BoxWrapper;

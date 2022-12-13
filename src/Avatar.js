import styled from "styled-components";

const SIZES = {
  large: 175,
  small: 90
};

const Avatar = styled.img`
  display: block;
  object-fit: cover;
  width: ${p => SIZES[p.size]}px;
  height: ${p => SIZES[p.size]}px;
  border-radius: 50%;
`;

export default Avatar;

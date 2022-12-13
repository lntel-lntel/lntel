import React from "react";
import styled from "styled-components";

const Heading = ({ size, ...delegated }) => {
  let HeadingElem;
  if (size === "small") {
    HeadingElem = SmallHeading;
  } else if (size === "medium") {
    HeadingElem = MediumHeading;
  } else if (size === "large") {
    HeadingElem = LargeHeading;
  }

  return <HeadingElem {...delegated} />;
};

// NOTE: All sizes are treated as `h1`, and it is expected that you will
// overwrite it with the `as` property.
const HeadingBase = styled.h1`
  color: var(--color-white);
  text-shadow: var(--triple-shadow);
  font-weight: 600;
  margin-top: 0;
  text-transform: lowercase;
`;

const SmallHeading = styled(HeadingBase)`
  font-size: 16px;
`;
const MediumHeading = styled(HeadingBase)`
  font-size: 21px;
`;
const LargeHeading = styled(HeadingBase)`
  font-size: 48px;
`;

export default Heading;

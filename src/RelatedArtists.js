import React from "react";
import styled from "styled-components";

import Heading from "./Heading";
import Avatar from "./Avatar";

import data from "./data.json";

const RelatedArtists = () => {
  return (
    <Wrapper>
      <Heading size="medium">Related Artists</Heading>
      <Row>
        {data.map(artist => (
          <RelatedArtist
            key={artist.id}
            id={artist.id}
            name={artist.name}
            imageUrl={artist.images[artist.images.length - 1].url}
          />
        ))}
      </Row>
    </Wrapper>
  );
};

const RelatedArtist = ({ id, name, imageUrl }) => {
  const href = `/artist/${id}`;

  return (
    <ItemWrapper>
      <RelatedLink to={href}>
        <Avatar src={imageUrl} alt={`${name} artist photo`} size="small" />
        <Name size="small">{name}</Name>
      </RelatedLink>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  scroll-snap-align: start;
`;

const RelatedLink = styled.a`
  text-decoration: none;
`;

const Name = styled(Heading)`
  margin-top: -16px;
  line-height: 1.2;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.ul`
  display: flex;
  padding: 0 32px;
  margin: 0;
  width: 100vw;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 32px;
`;

export default RelatedArtists;

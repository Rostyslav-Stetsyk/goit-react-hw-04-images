import styled from '@emotion/styled';

export const GalleryList = styled.ul`
  display: grid;
  max-width: 1440px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0 48px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

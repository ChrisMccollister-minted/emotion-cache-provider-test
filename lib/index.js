import React from 'react';
import {css} from '@emotion/core';

const libraryStyle = css`
  color: blue;
`;

const LibraryComponent = ({children}) => (
  <div css={libraryStyle}>
    {children}
  </div>
);

export default LibraryComponent;


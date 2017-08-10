import React from 'react';
import styled from 'styled-components';

const PartNumber = styled.p`
  font-size: .75rem;
  line-height: 1.19;
  margin: 0;
  color: #171717;
`;

export default props => (
  <PartNumber>
      Item {props.partNumber}
  </PartNumber>
  );

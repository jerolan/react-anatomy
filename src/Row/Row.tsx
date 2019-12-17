import styled from 'styled-components';

import FlexBox from '../FlexBox';
import { GridRowColScalesProps } from '../types';

const Row = styled(FlexBox)<GridRowColScalesProps>`
  flex-direction: row;
  flex: ${props => props.xs || 1};

  @media (min-width: 768px) {
    flex: ${props => props.sm};
  }

  @media (min-width: 992px) {
    flex: ${props => props.md};
  }

  @media (min-width: 1200px) {
    flex: ${props => props.lg};
  }
`;

export default Row;

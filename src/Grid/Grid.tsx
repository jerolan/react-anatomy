import styled from 'styled-components';

import FlexBox from '../FlexBox';
import { GridRowColScalesProps } from '../types';

const GridBase = styled(FlexBox)<GridRowColScalesProps>`
  flex: 1;
  flex-direction: ${props => props.xs || 'column'};

  @media (min-width: 768px) {
    flex-direction: ${props => props.sm};
  }

  @media (min-width: 992px) {
    flex-direction: ${props => props.md};
  }

  @media (min-width: 1200px) {
    flex-direction: ${props => props.lg};
  }
`;

export default GridBase;

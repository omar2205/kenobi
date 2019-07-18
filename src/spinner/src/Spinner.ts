import styled from 'styled-components';
import { colors } from '../../theme/styles';

interface Props {
  size: number;
}

const Spinner = styled.div.attrs({ 'data-testid': 'kenobi-spinner' })<Props>`
  position: absolute;
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border: 2px solid #ffff;
  border-top-color: ${colors.palette.neutral.base};
  -webkit-animation: spinner 0.5s linear infinite;
  animation: spinner 0.5s linear infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
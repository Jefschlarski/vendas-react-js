import PropTypes from 'prop-types';
import { StyledAnchor } from './styles';

const Anchor = ({ url, children }) => {
  return (
    <StyledAnchor href={url} rel="noopener noreferrer">
      {children}
    </StyledAnchor>
  );
};

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Anchor;
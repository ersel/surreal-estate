/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemContainer = styled.div`
  width: 97%;
  margin: 30px auto;
  padding: 0 10px;
  background-color: ${(props) => props.theme.fg};
  display: grid;
  grid-template-columns: 8fr 2fr;
`;

const ItemText = styled.h3`
  justify-self: start;
  text-transform: capitalize;
`;
const RemoveButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  background-color: red;
  color: white;
  font-weight: 800;
  justify-self: end;
  align-self: center;
`;

const PropertyListItem = ({ id, title, handleRemoveFavourite }) => {
  return (
    <ItemContainer>
      <ItemText>{title}</ItemText>
      <RemoveButton onClick={() => handleRemoveFavourite(id)}>
        Remove
      </RemoveButton>
    </ItemContainer>
  );
};

PropertyListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleRemoveFavourite: PropTypes.func.isRequired,
};
export default PropertyListItem;

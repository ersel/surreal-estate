/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AlertBox = styled.div`
  width: 97%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-left: 20px;

  ${({ isSuccess }) =>
    isSuccess
      ? `
  border: 1px solid #3997396b;
  background-color: #d4fbd466;
  `
      : `  border: 1px solid red;
  background-color: red;`}
`;

const AlertMessage = styled.p`
  margin: 10px 0;
  font-weight: 500;
  font-size: 1rem;
  text-align: left;
`;

const Alert = ({ message, isSuccess }) => {
  if (!message) return null;

  return (
    <AlertBox isSuccess={isSuccess}>
      <AlertMessage>{message}</AlertMessage>
    </AlertBox>
  );
};

Alert.defaultProps = {
  message: '',
};
Alert.propTypes = {
  message: PropTypes.string,
  isSuccess: PropTypes.bool.isRequired,
};

export default Alert;

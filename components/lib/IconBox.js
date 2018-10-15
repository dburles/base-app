import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text } from 'rebass';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  background: white;

  svg {
    width: 90px;
    height: 90px;
  }
`;

const IconBox = ({ title, subtitle, icon }) => (
  <Box>
    {icon}
    <Heading fontSize={5}>{title}</Heading>
    <Text fontSize={1}>{subtitle}</Text>
  </Box>
);

IconBox.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default IconBox;

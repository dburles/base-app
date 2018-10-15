import React from 'react';
import PropTypes from 'prop-types';

const Global = ({ children }) => (
  <div>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800');
      body {
        font-family: 'Open Sans', sans-serif;
      }
    `}</style>
    {children}
  </div>
);

Global.propTypes = {
  children: PropTypes.node.isRequired
};

export default Global;

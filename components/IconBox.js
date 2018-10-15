import React from 'react';
import PropTypes from 'prop-types';

const IconBox = ({ title, subtitle, icon }) => (
  <div className="root">
    {icon}
    <div className="title">{title}</div>
    <div className="subtitle">{subtitle}</div>
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 200px;
        align-items: center;
        justify-content: center;
        background: white;
      }
      .title {
        font-size: 32px;
        font-weight: bold;
      }
      .subtitle {
        font-size: 13px;
      }
      svg {
        width: 80px;
        height: 80px;
      }
    `}</style>
  </div>
);

IconBox.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default IconBox;

// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const BorderRadiusInput = ({ label, setter }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        defaultValue={0}
        min={0}
        max={300}
        onChange={(e) => setter(e.target.value)}
        className="styled-input"
      />
    </div>
  );
};

BorderRadiusInput.propTypes = {
  label: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
};

export default BorderRadiusInput;

import "react-phone-number-input/style.css";
import "./_phoneNumberStyle.css";
import React from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import PropTypes from "prop-types";

function PhoneNumber({
  international,
  countryCallingCodeEditable,
  defaultCountry,
  value,
  onChange,
  ...restProps
}) {
  return (
    <PhoneInput
      {...restProps}
      international={international}
      countryCallingCodeEditable={countryCallingCodeEditable}
      defaultCountry={defaultCountry}
      value={value}
      onChange={onChange}
      aria-invalid={
        value ? (isValidPhoneNumber(value) ? "false" : "true") : "true"
      }
    />
  );
}

PhoneNumber.propTypes = {
  countryCallingCodeEditable: PropTypes.bool,
  defaultCountry: PropTypes.string,
  international: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

PhoneNumber.defaultProps = {
  countryCallingCodeEditable: false,
  defaultCountry: "ID",
  international: true,
  value: "",
  onChange: () => null,
};

export default PhoneNumber;

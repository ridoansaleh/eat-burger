export default function validateForm(
  fullname,
  phoneNumber,
  gender,
  birthdate,
  address,
  email,
  password,
  retypePassword
) {
  let errors = [];

  if (!/^[A-Za-z\s]+$/.test(fullname)) {
    errors.push("fullname");
  }

  if (phoneNumber.length < 8) {
    errors.push("phoneNumber");
  }

  if (!gender) {
    errors.push("gender");
  }

  if (!birthdate) {
    errors.push("birthdate");
  }

  if (address.length < 10) {
    errors.push("address");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("email");
  }

  if (password.length < 8) {
    errors.push("password");
  }

  if (password.length >= 8 && retypePassword !== password) {
    errors.push("retypePassword");
  }

  return errors.length === 0;
}

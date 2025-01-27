export default function validateForm(
  fullname,
  email,
  password,
  retypePassword
) {
  let errors = [];

  if (!/^[A-Za-z\s]+$/.test(fullname)) {
    errors.push("fullname");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("email");
  }

  if (password.length < 8) {
    errors.push("password");
  }

  if (retypePassword !== password) {
    errors.push("retypePassword");
  }

  return errors.length === 0;
}

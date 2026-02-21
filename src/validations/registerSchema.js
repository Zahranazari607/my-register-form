import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required").min(3, "Minimum 3 characters"),
  email: yup.string().required("Email is required").email("Please enter a valid email"),
  password: yup.string().required("Password is required").min(8, "At least 8 characters").matches(/[0-9]/, "At least 1 number"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Must match Password").required("Confirm Password is required"),
  terms: yup.boolean().oneOf([true], "Must be checked")
});
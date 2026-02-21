import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validations/registerSchema";
import { useState } from "react";

export default function RegisterForm() {
  const [success, setSuccess] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onTouched"
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSuccess("Registration Successful!");
    setTimeout(() => { reset(); setSuccess(""); }, 3000);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Register Form</h2>
      {success && <div className="success">{success}</div>}
      
      <div className="field">
        <label>Full Name</label>
        <input {...register("fullName")} placeholder="Full Name" />
        {errors.fullName && <p className="error">{errors.fullName.message}</p>}
      </div>

      <div className="field">
        <label>Email</label>
        <input type="email" {...register("email")} placeholder="Email" />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="field">
        <label>Password</label>
        <input type="password" {...register("password")} placeholder="Password" />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <div className="field">
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="terms" {...register("terms")} />
        <label htmlFor="terms">I accept Terms & Conditions</label>
      </div>
      {errors.terms && <p className="error">{errors.terms.message}</p>}

      <button className="primary" type="submit">Submit</button>
    </form>
  );
}
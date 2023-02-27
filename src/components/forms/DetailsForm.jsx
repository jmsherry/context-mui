import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";

const initialValues = {
  username: "",
  email: "",
  age: "",
};

const schema = object({
  username: string()
    .min(2, "Needs to be more than 2 characters")
    .max(20, "Needs to be ;ess than 21 characters")
    .lowercase()
    .trim()
    .required(),
  email: string().email().required(),
  age: number("Must be a number")
    .positive("Number must be positive")
    .integer("Must be a whole number")
    .required("Must be a number"),
}).required();

function DetailsForm({ setter }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const submitHandler = (values) => {
    // write to state (the to page)
    console.log(values);
    setter(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-row">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" {...register("username")} />
        {errors.username && (
          <label htmlFor="username" className="validation-message">
            {errors.username.message}
          </label>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" {...register("email")} />
        {errors.email && (
          <label htmlFor="email" className="validation-message">
            {errors.email.message}
          </label>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="age">Age</label>
        <input id="age" type="text" {...register("age")} />
        {errors.age && (
          <label htmlFor="age" className="validation-message">
            {errors.age.message}
          </label>
        )}
      </div>

      <div style={{ marginBlockStart: "3rem" }}>
        <button type="reset" onClick={reset}>
          Reset
        </button>
        <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default DetailsForm;

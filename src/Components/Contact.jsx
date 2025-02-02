import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Contact Form submitted", data);
  }
  // console.log(errors); // Debugging the errors object
  console.dir(errors);
  console.log("Errors:", JSON.stringify(errors, null, 2));
  return (
    <Wrapper>
      <div className="container">
        <h1>Contact</h1>
        <p className="heading">For any Query-Send Us an Email.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name-section">
            <label>Name</label>
            <input
              className={errors.name ? "input-error" : ""}
              {...register("name", {
                required: true,
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Must be alphabetical A to Z",
                },
                minLength: { value: 3, message: "Min length must be 3" },
                maxLength: { value: 20, message: "Max length must be 20" },
              })}
            />
            {errors.name && <p className="err-msg">{errors.name.message}</p>}
          </div>
          <div className="email-section">
            <label>Email</label>
            <input
              className={errors.email ? "input-error" : ""}
              {...register("email", {
                required: true,
                minLength: { value: 5, message: "Min length must be 5" },
              })}
            />
            {errors.email && <p className="err-msg">{errors.email.message}</p>}
          </div>
          <div className="mesg-section">
            <label>Message</label>
            <textarea {...register("message")} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  .input-error {
    border: 1px solid red;
  }

  .err-msg {
    color: red;
  }
  // .container{
  // display:flex;
  // }
  .heading{
    margin:30px;
    }

  .name-section,.email-section,.ph-section,.sub-section,.mesg-section{
  margin:20px;
  justify-content:center;
  align-items:center; 
}

`

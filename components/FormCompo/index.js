import React from "react";

import styles from "./styles.module.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("This is a required field")
    .email()
    .label("Email"),
  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Not valid input ")
    .required("This is a required field")
    .min(5, "Too short"),
  class: Yup.string()
    .matches(/^[A-Za-z0-9 ]+$/, "Not a valid input")
    .required("This is a required field")
    // .matches(/^[_\-\+]{1}.*/, "It cannot start with these charectors")
    .min(5, "Too short"),

  admissionNumber: Yup.number()
    .min(5, "Too short")
    .required("This is a required field"),
  phonenumber: Yup.number()
    .required("This is a required field")
    .min(10, "Too short"),
  address: Yup.string()
    .matches(/^[A-Za-z0-9 ]+$/, "Not valid input ")
    .min(5, "Too short")
    .required("This is a required field"),
  projectname: Yup.string()
    .matches(/^[A-Za-z0-9 ]+$/, "Not valid input ")
    .min(5, "Too short")
    .required("This is a required field"),
});

function FormCompo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTxt}>Project Submission</h1>
      <div className={styles.elementwrap}>
        <Formik
          initialValues={{
            name: "",
            class: "",
            admissionNumber: "",
            email: "",
            phonenumber: "",
            address: "",
            projectname: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            alert("Your response is submited");
          }}
          validationSchema={validationSchema}
        >
          {({ errors }) => (
            <>
              <Form className={styles.forminput}>
                <Field name="name" placeholder="Enter your name" />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                <Field placeholder="Class" name="class" />
                {errors.class && <p style={{ color: "red" }}>{errors.class}</p>}
                <Field placeholder="Admission number" name="admissionNumber" />
                {errors.admissionNumber && (
                  <p style={{ color: "red" }}>{errors.admissionNumber}</p>
                )}
                <Field placeholder="Enter your email" name="email" />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <Field placeholder="Phone number" name="phonenumber" />
                {errors.phonenumber && (
                  <p style={{ color: "red" }}>{errors.phonenumber}</p>
                )}
                <Field placeholder="Address" name="address" />
                {errors.address && (
                  <p style={{ color: "red" }}>{errors.address}</p>
                )}
                <Field placeholder="Project name" name="projectname" />
                {errors.projectname && (
                  <p style={{ color: "red" }}>{errors.projectname}</p>
                )}
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
                <button
                  type="reset"
                  className={styles.submitBtn}
                  style={{ margin: 10 }}
                >
                  Reset
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormCompo;

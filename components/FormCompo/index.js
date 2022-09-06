import React from "react";

import styles from "./styles.module.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string()
    .required()
    .min(5, "Too short")
    .matches(/^[aA-zZ\s]+$/, "Not valid input "),
  class: Yup.string()
    .required()
    .min(5, "Too short")
    .matches(/^[A-Za-z0-9 ]+$/, "Not valid input "),
  admissionNumber: Yup.number().required().min(5, "Too short"),
  phonenumber: Yup.number().required().min(10, "Too short"),
  address: Yup.string()
    .required()
    .min(5, "Too short")
    .matches(/^[A-Za-z0-9 ]+$/, "Not valid input "),
  projectname: Yup.string()
    .required()
    .min(5, "Too short")
    .matches(/^[A-Za-z0-9 ]+$/, "Not valid input "),
});

function FormCompo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTxt}>Project Sumbission</h1>
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
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors }) => (
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
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormCompo;

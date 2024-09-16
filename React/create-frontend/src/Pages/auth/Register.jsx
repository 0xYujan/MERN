import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First Name must be more than two characters")
      .max(15, "First Name must not exceed 15 characters")
      .matches(
        /^[A-Z][a-z]*$/,
        "Name must start with an uppercase letter and contain only letters"
      )
      .required("First name is required"),

    lastName: Yup.string()
      .min(3, "Last Name must be more than two characters")
      .max(15, "Last Name must not exceed 15 characters")
      .matches(
        /^[A-Z][a-z]*$/,
        "Name must start with an uppercase letter and contain only letters"
      )
      .required("Last name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),

    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords doesn't match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="container x">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-3 shadow-lg p-3">
          <h2 className="text-muted">Register Form</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`form-control ${
                      errors.firstName && touched.firstName ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`form-control ${
                      errors.lastName && touched.lastName ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      errors.email && touched.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control ${
                      errors.password && touched.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <Field
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    className={`form-control ${
                      errors.cpassword && touched.cpassword ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="cpassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <button type="submit" className="btn btn-warning">
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  RegisterPageMainBox,
  RegisterPageFirstBox,
  RegisterPageFirstText,
  RegisterPageSecText,
  RegisterPageButton,
  RegisterPageText,
  RegisterPageSecBox,
  RegisterPageTextTitle,
  RegisterPageThirdBox,
  RegisterPageDividerBox,
  RegisterPageTextLine,
  RegisterPageTextSubLine,
  RegisterPageSubTextLine,
  StyledBackgroundBox,
  RegisterForm,
} from "./registerPage.styled";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const userData = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      alert("User data saved!");
      navigate("/login");
    },
  });

  return (
    <>
      <StyledBackgroundBox>
        <RegisterPageMainBox>
          <RegisterPageFirstBox>
            <RegisterForm onSubmit={formik.handleSubmit}>
              <RegisterPageText variant="h5">Sign Up</RegisterPageText>
              <RegisterPageSecBox>
                <RegisterPageTextTitle>
                  Pay attention: this is not the original Netflix sign up. Don't
                  insert your real credentials here!
                </RegisterPageTextTitle>
              </RegisterPageSecBox>

              <RegisterPageThirdBox>
                <RegisterPageFirstText
                  id="name"
                  label="Your name"
                  variant="outlined"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </RegisterPageThirdBox>
              <RegisterPageThirdBox>
                <RegisterPageSecText
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </RegisterPageThirdBox>

              <RegisterPageThirdBox>
                <RegisterPageSecText
                  id="password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </RegisterPageThirdBox>

              <RegisterPageThirdBox>
                <RegisterPageSecText
                  id="confirmPassword"
                  label="Repeat your password"
                  variant="outlined"
                  name="confirmPassword"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </RegisterPageThirdBox>

              <RegisterPageButton type="submit">
                <RegisterPageSubTextLine>Sign up</RegisterPageSubTextLine>
              </RegisterPageButton>

              <RegisterPageDividerBox orientation="horizontal" flexItem />
              <Link href="/" sx={{ textDecoration: "none" }}>
                <RegisterPageTextLine variant="body2">
                  Do you already have an account?{" "}
                  <RegisterPageTextSubLine>Sign In</RegisterPageTextSubLine>
                </RegisterPageTextLine>
              </Link>
            </RegisterForm>
          </RegisterPageFirstBox>
        </RegisterPageMainBox>
      </StyledBackgroundBox>
    </>
  );
};

export default SignUpPage;

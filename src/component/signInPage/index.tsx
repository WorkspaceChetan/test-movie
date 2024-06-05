import { Link } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  SignUPBox,
  SignUPForm,
  SignUPSubDivider,
  SignUPSubSignupSpan,
  SignUPSubSignupText,
  SignUPSubSignupTextTitle,
  SignUPSubTextTitle,
  SignUPTextTitle,
  SignUpButton,
  SignUpFristBox,
  SignUpImg,
  SignUpMainBox,
  SignUpSecBox,
  SignUpSecButton,
  SignUpTextBox,
  StyledBackgroundBox,
} from "./signupPage.styled";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  username: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignInPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        if (
          parsedUserData.email === values.username &&
          parsedUserData.password === values.password
        ) {
          toast.success("User logged in successfully.");
          navigate("/home");
        } else {
          toast.error("Invalid email or password.");
        }
      } else {
        toast.error("No user data found. Please sign up first.");
      }
    },
  });

  const handleClickGoogleSignin = () => {
    const userData = {
      name: "test",
      email: "test@test.com",
      password: "test-password",
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    toast.success("User logged in successfully.");
    navigate("/home");
  };

  return (
    <>
      <StyledBackgroundBox>
        <SignUpMainBox>
          <SignUpFristBox>
            <SignUPForm onSubmit={formik.handleSubmit}>
              <SignUPTextTitle variant="h5">Sign In</SignUPTextTitle>
              <SignUpSecBox>
                <SignUPSubTextTitle variant="button">
                  Pay attention: this is not the original Netflix sign in. Don't
                  insert your real credentials here!
                </SignUPSubTextTitle>
              </SignUpSecBox>

              <SignUPBox>
                <SignUpTextBox
                  label="E-mail"
                  variant="outlined"
                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
              </SignUPBox>

              <SignUPBox>
                <SignUpTextBox
                  label="Password"
                  variant="outlined"
                  id="password"
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
              </SignUPBox>

              <SignUpButton type="submit">
                <SignUPSubSignupText variant="body1">
                  Sign in
                </SignUPSubSignupText>
              </SignUpButton>
              <SignUpSecButton onClick={handleClickGoogleSignin}>
                <SignUpImg src="/images/logo1.png" />

                <SignUPSubSignupText variant="body1">
                  Sign in with Google
                </SignUPSubSignupText>
              </SignUpSecButton>
              <SignUPSubDivider orientation="horizontal" flexItem />
              <Link href="/signup" sx={{ textDecoration: "none" }}>
                <SignUPSubSignupTextTitle variant="body2">
                  Haven't you registered yet?{" "}
                  <SignUPSubSignupSpan>Sign Up</SignUPSubSignupSpan>
                </SignUPSubSignupTextTitle>
              </Link>
            </SignUPForm>
          </SignUpFristBox>
        </SignUpMainBox>
      </StyledBackgroundBox>
    </>
  );
};

export default SignInPage;

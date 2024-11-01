import styles from "./SignUpForm.module.scss";
import { FC, useEffect } from "react";
import logo from "../../assets/logo.png";
import InputPassword from "../../ui/InputPassword/InputPassword";
import Input from "../../ui/Input/Input";
import { useSignupMutation } from "../../services/auth";
import { useNavigate, Link } from "react-router-dom";
import { YourFormElement } from "./signup";
import Loading from "../../ui/Loading/Loading";
const SignUpForm: FC = () => {
  const [signup, { isLoading, data }] = useSignupMutation();
  const navigate = useNavigate();

  const submitForm = async (e: React.FormEvent<YourFormElement>) => {
    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    e.preventDefault();
    await signup({ nickname: name, email, password });
  };

  useEffect(() => {
    if (data?.access) {
      localStorage.setItem("token", data.token);
      navigate("/");
    }
  }, [data, navigate]);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <div className={styles.signUpForm}>
      <form className={styles.login} onSubmit={submitForm}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={logo} alt='' />
          </div>
          <div className={styles.inputEmail}>
            <h3>Name</h3>
            <Input
              id='name'
              variant='Gray'
              border='BorderWhite'
              placeholder='Name'
              style={{ width: "100%" }}
            />
          </div>
          <div className={styles.inputEmail}>
            <h3>Email</h3>
            <Input
              variant='Gray'
              id='email'
              border='BorderWhite'
              placeholder='Email'
              style={{ width: "100%" }}
            />
          </div>

          <div className={styles.inputPassword}>
            <h3>Password</h3>
            <InputPassword
              id='password'
              border='BorderWhite'
              placeholder='Password'
              style={{ width: "100%" }}
            />
          </div>

          <span className={styles.minimum}>Minimum 6 characters</span>
          <button className={styles.formBtn}>Agree & Join </button>
          <p className={styles.signUp}>
            Already on Fluffy's?{" "}
            <Link to={"/signin"}>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;

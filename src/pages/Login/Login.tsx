import styles from "./Login.module.scss";
import { FC, useEffect } from "react";
import { ILogin, YourFormElement } from "./ILogin";
import logo from "../../assets/logo.png";
import InputPassword from "../../ui/InputPassword/InputPassword";
import Input from "../../ui/Input/Input";
import { useNavigate, Link } from "react-router-dom";
import { useSigninMutation } from "../../services/auth";
import Loading from "../../ui/Loading/Loading";
const Login: FC<ILogin> = () => {
  const navigation = useNavigate();
  const [signin, { data, isLoading }] = useSigninMutation();

  const handleSubmit = async (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    await signin({ email, password }).unwrap();
  };

  useEffect(() => {
    if (data?.access) {
      localStorage.setItem("token", data.token);
      navigation("/");
    }
  }, [data, navigation]);

  return (
    <div className={styles.content}>
      {isLoading ? (
        <Loading>loading...</Loading>
      ) : (
        <form
          className={styles.login}
          onSubmit={handleSubmit}
          name='login'
          id='login'
        >
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <img src={logo} alt='' />
            </div>
            <div className={styles.inputEmail}>
              <h3>Email</h3>
              <Input
                type='email'
                required
                id='email'
                variant='Gray'
                border='BorderWhite'
                placeholder='Email'
                style={{ width: "100%" }}
              />
            </div>

            <div className={styles.inputPassword}>
              <h3>Password</h3>
              <InputPassword
                minLength={6}
                min={6}
                required
                id='password'
                border='BorderWhite'
                placeholder='Password'
                style={{ width: "100%" }}
              />
            </div>

            <span className={styles.minimum}>Minimum 6 characters</span>
            <button className={styles.formBtn} type='submit'>
              Agree & Join{" "}
            </button>
            <p className={styles.signUp}>
              Already on Fluffy's?{" "}
              <Link to={"/signup"}>
                <span>Sing up</span>
              </Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;

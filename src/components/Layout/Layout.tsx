import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import { useLazyRefreshQuery } from "../../services/auth";
import LinkBarWrapper from "../LinkbarWrapper/LinkBarWrapper";
const Layout = () => {
  const navigate = useNavigate();
  const [request, { isLoading, data, error, isFetching }] =
    useLazyRefreshQuery();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      request({});
    }
  }, [request]);
  useEffect(() => {
    //@ts-ignore
    if (error || !localStorage.getItem("token")) {
      console.log(error);
      navigate("/signin");
    }
  }, [error, navigate]);
  if (isLoading && isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {data && (
        <div className={styles.layout}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.main}>
                <LinkBarWrapper />
                <div className={styles.outlet}>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;

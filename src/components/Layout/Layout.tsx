import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LinksBar from "../LinksBar/LinksBar";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import { useLazyRefreshQuery } from "../../services/user";
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
                <div>
                  <div className={styles.bar}>
                    <LinksBar />
                  </div>
                </div>
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

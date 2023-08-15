import styles from "./Header.module.scss";
import Nav from "../Nav/Nav";
import FindUser from "../FindUser/FindUser";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Link to='/'>
            <div className={styles.logo}>
              <div className={styles.logoSvg}></div>
            </div>
          </Link>
          <div className={styles.finduserWrapper}>
            <FindUser />
          </div>
          <div className={styles.nav}>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import styles from "./Nav.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { AiFillBell } from "react-icons/ai";
import Avatar from "../../ui/Avatar/Avatar";
import ModalNotifications from "../ModalNotifications/ModalNotifications";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import { addHostName } from "../../helpFunctions/addHostname";
import { SideBar } from "../../store/modal/modalSlice";
import { useDispatch } from "react-redux";
const Nav = () => {
  const { id, avatar_url } = useAppSelector(state => state.auth.user!);
  const { policy, signature } = useAppSelector(state => state.auth);
  const { isSideBar } = useAppSelector(state => state.modal);
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <div
          className={`${styles.linkBorder} ${styles.isShow}`}
          onClick={() => dispatch(SideBar(!isSideBar))}
        >
          <CiMenuBurger className={styles.icon} size={20} />
        </div>
        <div className={styles.linkBorder}>
          <FaTelegramPlane className={styles.icon} size={20} />
        </div>
        <div className={styles.linkBorder}>
          <AiFillBell
            className={styles.icon}
            size={20}
            color={show ? "orange" : "black"}
            onClick={() => setShow(prev => !prev)}
          />
        </div>
        <div className={styles.avatar}>
          <Avatar
            url={addHostName(avatar_url, policy!, signature!)}
            width={40}
            height={40}
            userId={id}
          />
        </div>
      </div>
      <ModalNotifications show={show} />
    </nav>
  );
};

export default Nav;

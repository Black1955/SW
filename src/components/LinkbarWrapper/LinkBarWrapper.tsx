import styles from "./LinkBar.module.scss";
import LinksBar from "../LinksBar/LinksBar";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
const LinkBarWrapper = () => {
  const { isSideBar } = useAppSelector(state => state.modal);

  return (
    <div className={!isSideBar ? styles.barWrapper : styles.active}>
      <div className={styles.bar}>
        <LinksBar />
      </div>
    </div>
  );
};

export default LinkBarWrapper;

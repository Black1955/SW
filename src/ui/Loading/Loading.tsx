import React from "react";
import styles from "./Loading.module.scss";
interface ILoading {
  children?: React.ReactNode;
}
const Loading: React.FC<ILoading> = ({ children }) => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingText}>{children}</div>
    </div>
  );
};

export default Loading;

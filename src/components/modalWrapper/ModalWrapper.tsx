import { AllHTMLAttributes, FC, ReactNode, useEffect } from "react";
import styles from "./modalWrapper.module.scss";
interface IModal extends AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  visible: boolean;
}
const ModalWrapper: FC<IModal> = ({ children, visible, ...rest }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "100%";
    }
  }, [visible]);

  return (
    <div
      {...rest}
      className={`${styles.ModalWrapper} ${!visible && styles.visible}`}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;

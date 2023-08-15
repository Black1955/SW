import styles from "./InputSearch.module.scss";
import { useState } from "react";
import { FC } from "react";
import { IInputSearch } from "./IInputSearch";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
const InputSearch: FC<IInputSearch> = ({ ...rest }) => {
  const [showInput, setShowInput] = useState(
    window.innerWidth < 720 ? false : true
  );

  return (
    <>
      {showInput ? (
        <div className={styles.inputContainer} style={{ display: "flex" }}>
          <input type='text' className={styles.input} {...rest} />
          {showInput && (
            <div
              className={styles.oleg}
              onClick={() => setShowInput(prev => !prev)}
            >
              <RxCross2 />
            </div>
          )}
        </div>
      ) : (
        <button
          className={styles.inputHidden}
          onClick={() => {
            setShowInput(prev => !prev);
          }}
        >
          <BsSearch className={styles.searchIcon} />
        </button>
      )}
    </>
  );
};

export default InputSearch;

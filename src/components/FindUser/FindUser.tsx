import { useEffect, useState } from "react";
import InputSearch from "../../ui/InputSearch/InputSearch";
import SearchProfile from "../../ui/SearchProfile/SearchProfile";
import { useDebounce } from "../../hooks/useDebounce/useDebounce";
import styles from "./findUser.module.scss";
interface Iuser {
  avatar_url: string;

  id: number;

  nickname: string;
}
const FindUser = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<Iuser[]>();
  const debounceValue = useDebounce(value, 300);
  const findUser = async (value: string) => {
    await fetch(`${process.env.REACT_APP_URL}/search?query=${value}`, {
      headers: {
        authorization: localStorage.getItem("token")!,
      },
    })
      .then(res => res.json())
      .then(res => setData(res));
  };
  useEffect(() => {
    findUser(debounceValue);
  }, [debounceValue]);

  return (
    <div className={styles.findUser}>
      <div style={{ position: "relative" }}>
        <InputSearch
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder='search'
        />
        <div className={styles.users}>
          {data &&
            data.map(({ avatar_url, id, nickname }) => (
              <div
                key={id}
                onClick={() => {
                  setData([]);
                  setValue("");
                }}
              >
                <SearchProfile
                  avatar_url={avatar_url}
                  id={id}
                  nickname={nickname}
                  key={id}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FindUser;

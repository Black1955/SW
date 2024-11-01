import { useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import styles from "./EditProfile.module.scss";
import { GrClose } from "react-icons/gr";
import Button from "../../ui/Button/Button";
import ModalWrapper from "../modalWrapper/ModalWrapper";
import { useDispatch } from "react-redux";
import { hideEditModal } from "../../store/modal/modalSlice";
import { useFoto } from "../../hooks/useFoto/useFoto";
import AddBlog from "../AddBlog/AddBlog";
import Avatar from "../../ui/Avatar/Avatar";
import { useUpdateProfileMutation } from "../../services/user";
import Input from "../../ui/Input/Input";
import Loading from "../../ui/Loading/Loading";
const EditProfile = () => {
  const dispatch = useDispatch();
  const { isEditModal } = useAppSelector(state => state.modal);
  const {
    avatar_url,
    back_url,
    description: defaultDesc,
    name: defaultName,
  } = useAppSelector(state => state.auth.user!);
  const [update, { isLoading }] = useUpdateProfileMutation();
  const [name, setName] = useState(defaultName);
  const [description, setDescription] = useState(defaultDesc);
  const [avatar, setAva] = useState<File>();
  const [back, setBack] = useState<File>();

  const [avatarPicture] = useFoto(avatar!);
  const [backPicture] = useFoto(back!);

  const [descShow, setdescShow] = useState(false);
  const [nameShow, setNameShow] = useState(false);

  const Submit = async (e: any) => {
    const form = new FormData();
    avatar && form.append("avatar", avatar!);
    back && form.append("background", back!);
    form.append("name", name!);
    form.append("description", description!);
    e.preventDefault();
    await update({ body: form }).then(() => dispatch(hideEditModal()));
  };

  return (
    <ModalWrapper visible={isEditModal}>
      <div className={styles.wrapper} onClick={() => dispatch(hideEditModal())}>
        <form
          className={styles.modal}
          onSubmit={Submit}
          onClick={e => e.stopPropagation()}
        >
          <div style={{ position: "relative" }}>
            <div className={styles.header}>Edit profile</div>
            <div
              className={styles.icon}
              onClick={() => dispatch(hideEditModal())}
            >
              <GrClose />
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <div>Avatar picture</div>
              <AddBlog
                id='avatar'
                type='file'
                onChange={e => setAva(e.target.files![0])}
              >
                <div>Add</div>
              </AddBlog>
            </div>
            <div className={styles.avatar_picture}>
              <Avatar
                height={168}
                width={168}
                url={avatarPicture ? avatarPicture.toString() : avatar_url}
                userId={10}
              />
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <div>background picture</div>
              <AddBlog
                id='back'
                type='file'
                onChange={e => setBack(e.target.files![0])}
              >
                <div>Add</div>
              </AddBlog>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.back_picture}>
                <img
                  src={backPicture ? backPicture.toString() : back_url}
                  alt='qwe'
                />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <div>description</div>
              <AddBlog
                id='description'
                type='text'
                onClickShow={() => setdescShow(prev => !prev)}
              >
                <div>{descShow ? "Cancel" : "Add"}</div>
              </AddBlog>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {descShow ? (
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rows={3}
                  className={styles.desc_textarea}
                  placeholder={`${
                    defaultDesc ? defaultDesc : "Describe yourself..."
                  } `}
                ></textarea>
              ) : description ? (
                <div>{description}</div>
              ) : (
                <div>Describe yourself…</div>
              )}
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <div>name</div>
              <AddBlog
                id='name'
                type='text'
                onClickShow={() => setNameShow(prev => !prev)}
              >
                <div>{nameShow ? "Cancel" : "Add"}</div>
              </AddBlog>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {nameShow ? (
                <Input
                  border='BorderOrange'
                  variant='Gray'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={`${
                    defaultName ? defaultName : "Describe yourself..."
                  } `}
                />
              ) : name ? (
                <div>{name}</div>
              ) : (
                <div>Describe yourself…</div>
              )}
            </div>
          </div>
          <Button disabled={isLoading} variant='Orange' type='submit'>
            save
          </Button>
        </form>
        {isLoading && <Loading>loading...</Loading>}
      </div>
    </ModalWrapper>
  );
};

export default EditProfile;

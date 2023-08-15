import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModal } from "./types";

const initialState: IModal = {
  isEditModal: false,
  isPhotoModal: false,
  isNotifModal: false,
  isCreatePostModal: false,
  fotoModal: null,
  IsPostModal: false,
  isSideBar: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showEditModal(state) {
      state.isEditModal = true;
    },
    hideEditModal(state) {
      state.isEditModal = false;
    },
    showNotifModal(state) {
      state.isNotifModal = true;
    },
    hideNotifModal(state) {
      state.isNotifModal = false;
    },
    showCreatePostModal(state) {
      state.isCreatePostModal = true;
    },
    hideCreatePostModal(state) {
      state.isCreatePostModal = false;
    },
    showPhotoModal(state) {
      state.isPhotoModal = true;
    },
    hidePhotoModal(state) {
      state.isPhotoModal = false;
    },
    PhotoModal(state, payload: PayloadAction<boolean>) {
      state.IsPostModal = payload.payload;
    },
    SideBar(state, payload: PayloadAction<boolean>) {
      state.isSideBar = payload.payload;
    },
  },
});

export const {
  hideCreatePostModal,
  hideEditModal,
  hideNotifModal,
  showCreatePostModal,
  showEditModal,
  showNotifModal,
  hidePhotoModal,
  showPhotoModal,
  PhotoModal,
  SideBar,
} = ModalSlice.actions;

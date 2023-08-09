interface FotoModal {
  foto: File;
}

export interface IModal {
  isEditModal: boolean;
  isNotifModal: boolean;
  isCreatePostModal: boolean;
  fotoModal: FotoModal | null;
  isPhotoModal: boolean;
  IsPostModal: boolean;
}

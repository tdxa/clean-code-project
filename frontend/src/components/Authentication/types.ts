export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  redirect: () => void;
}

export interface RegisterData {
  email: string;
  firstName: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

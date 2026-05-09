import { toast } from "react-toastify"; import { Dialog } from "../components/Dialog";
;

export class showMessage {

  static success(message?: string) {
    toast.success(message ?? 'Success');
  }

  static warn(message?: string) {
    toast.warn(message ?? 'Warning');
  }

  static warning(message?: string) {
    toast.warning(message ?? 'Warning');
  }

  static error(message?: string) {
    toast.error(message ?? 'Error');
  }

  static info(message?: string) {
    toast.info(message ?? 'Error');
  }

  static dismiss() {
    toast.dismiss();
  }

  static confirm(data: string, onClosing: (confirmation: boolean) => void) {
    toast(Dialog, {
      data: data,
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
      onClose: confirmation => {
        onClosing(confirmation === true);
      }
    }
    );
  }
}
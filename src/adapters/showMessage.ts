import { toast } from "react-toastify";;

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
}
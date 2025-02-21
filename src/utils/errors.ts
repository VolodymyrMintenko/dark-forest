import axios from 'axios';
import { toast } from 'react-toastify';

export default function logError(e: unknown) {
  if (axios.isAxiosError(e) && e?.response?.data?.message) {
    toast.error(e.response?.data?.message);
  } else {
    console.error((e as Error)?.message);
  }
}

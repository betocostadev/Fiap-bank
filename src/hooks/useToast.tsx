import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useToast = () => {
  const options: ToastOptions = {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  }

  const toastSuccess = (message: string) => {
    toast.success(message, options)
  }

  const toastError = (message: string) => {
    toast.error(message, options)
  }

  const toastInfo = (message: string) => {
    toast.info(message, options)
  }

  const toastWarn = (message: string) => {
    toast.warn(message, options)
  }

  return { toastSuccess, toastError, toastInfo, toastWarn }
}

export default useToast

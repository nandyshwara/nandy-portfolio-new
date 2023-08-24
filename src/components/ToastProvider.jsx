import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          borderRadius: "4px",
          fontSize: "14px",
        },
        duration: 700,
        error: {
          duration: 700,
        },
      }}
    />
  );
}

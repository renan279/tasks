import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// import ToastAnimated, { showToast } from "../components/MyToast";
// import Notifications from '../pages/Notifications';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  // const handleClick = () =>
  //   showToast({ type: "success", message: "Mensagem de sucesso" });
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
      {/* <Notifications /> */}
      {/* <button onClick={handleClick}>Exibir alerta</button> */}
    </>
  );

}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Loader from "../components/base/loader";
import ErrorBoundary from "../components/layout/ErrorBoundaries";
import { store } from "../store";

// styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
// you will also need the css that comes with bootstrap-daterangepicker
import "bootstrap-daterangepicker/daterangepicker.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.scss";

let persistor = persistStore(store);
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    const handleStart = () => {
      console.log("set to true");
      setLoading(true);
    };
    const handleComplete = () => {
      console.log("set to false");
      const timer = setTimeout(() => {
        setLoading(false);

        clearTimeout(timer);
      }, 1000);
    };
    setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <ErrorBoundary fallback="Something is wrong">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader />}>
          {loading ? <Loader /> : null}

          {getLayout(<Component {...pageProps} />)}
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
// import "../node_modules\react-modal-video\scss\modal-video.scss";
import "../index.scss";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Seo
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;

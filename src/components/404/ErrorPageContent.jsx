import Link from "next/link";
import { useSelector } from "react-redux";
import Form from "./Form";

const ErrorPageContent = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const errorPage = useSelector(state => state.lang.value.errorPage)

  return (
    <div className="error_page footer_apps_widget">
      <img
        className="img-fluid img-thumb"
        src="/assets/images/resource/error.png"
        alt="error.png"
      />
      <div className="erro_code">
        <h1>{errorPage.heading[lang]}</h1>
      </div>
      <p>{errorPage.text[lang]}</p>

      <Form />
      {/* End form */}

      <Link href="/">
        <a className="btn btn_error btn-thm">{errorPage.search[lang]}</a>
      </Link>
    </div>
  );
};

export default ErrorPageContent;

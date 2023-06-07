import { useSelector } from "react-redux";

const SubscribeForm = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { followUs } = useSelector((state) => state.lang.value.footer);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="footer_mailchimp_form" onClick={handleSubmit}>
      <div className="d-flex align-items-center">
        <div className="col-auto">
          <input
            type="email"
            className="form-control mb-2"
            id="inlineFormInput"
            placeholder={followUs.email[lang]}
          />
        </div>

        <div className="col-auto ms-2">
          <button type="submit" className="btn btn-primary mb-2">
            <i
              className={
                lang == "ar" ? "fa fa-angle-left" : "fa fa-angle-right"
              }
            ></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SubscribeForm;

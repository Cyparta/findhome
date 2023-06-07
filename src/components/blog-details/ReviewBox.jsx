import { useSelector } from "react-redux";

const ReviewBox = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const {reviewTitle, yourRev, submitRev} = useSelector(state => state.lang.value.agentDetail);
  return (
    <form className="comments_form">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder={reviewTitle[lang]}
          required
        />
      </div>
      {/* End .form-group */}

      <div className="form-group">
        <textarea
          className="form-control"
          rows="6"
          placeholder={yourRev[lang]}
          required
        ></textarea>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-thm">
        {submitRev[lang]}
      </button>
      {/* End .btn */}
    </form>
  );
};

export default ReviewBox;

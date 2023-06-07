import Link from "next/link";
import { useSelector } from "react-redux";

const CallToAction = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const callAction = useSelector(state => state.lang.value.callAction)
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="start_partner tac-smd">
          <h2>{callAction.heading[lang]}</h2>
          <p>{callAction.text[lang]}</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="parner_reg_btn text-right tac-smd">
          <Link href="/register">
            <a className="btn btn-thm2">{callAction.button[lang]}</a>
          </Link>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToAction;

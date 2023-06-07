import { useSelector } from "react-redux";
import Social from "../common/footer/Social";

const AddressSidebar = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {contactUs} = useSelector(state => state.lang.value.contact)
  return (
    <div className="contact_localtion">
      <h4>{contactUs.heading[lang]}</h4>
      <p>
        {contactUs.text[lang]}
      </p>
      <div className="content_list">
        <h5>{contactUs.address[lang]}</h5>
        <p>
          {contactUs.addressText[lang]}
        </p>
      </div>
      <div className="content_list">
        <h5>{contactUs.phone[lang]}</h5>
        <p>{contactUs.phoneText[lang]}</p>
      </div>
      <div className="content_list">
        <h5>{contactUs.mail[lang]}</h5>
        <p>{contactUs.mailText[lang]}</p>
      </div>
      <div className="content_list">
        <h5>{contactUs.skype[lang]}</h5>
        <p>{contactUs.skypeText[lang]}</p>
      </div>
      <h5>{contactUs.followUs[lang]}</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;

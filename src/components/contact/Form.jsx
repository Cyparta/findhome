import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Form = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { sendEmail } = useSelector((state) => state.lang.value.contact);
  const [user_name, setusername] = useState("");
  const [user_email, setuseremail] = useState("");
  const [user_phone, setuserphone] = useState("");
  const [user_subject, setusersubject] = useState("");
  const [user_message, setusermessage] = useState("");
  function handlesubmit(e) {
    e.preventDefault();

  }
  return (
    <form className="contact_form" >
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_name"
              name="user_name"
              className="form-control"
              required="required"
              type="text"
              onChange={(e) => setusername(e.target.value)}
              placeholder={sendEmail.name[lang]}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_email"
              name="user_email"
              className="form-control required email"
              required="required"
              type="email"
              onChange={(e) => setuseremail(e.target.value)}
              placeholder={sendEmail.email[lang]}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_phone"
              name="user_phone"
              className="form-control required phone"
              required="required"
              type="phone"
              onChange={(e) => setuserphone(e.target.value)}
              placeholder={sendEmail.phone[lang]}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="form_subject"
              name="user_subject"
              className="form-control required"
              required="required"
              type="text"
              onChange={(e) => setusersubject(e.target.value)}
              placeholder={sendEmail.subject[lang]}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-12">
          <div className="form-group">
            <textarea
              id="form_message"
              name="user_message"
              className="form-control required"
              rows="8"
              required="required"
              placeholder={sendEmail.message[lang]}
              onChange={(e) => setusermessage(e.target.value)}
            ></textarea>
          </div>
          {/* End .col */}

          <div className="form-group mb0">
            <a
              href={`mailto:info@dar-farha.com?subject=${encodeURIComponent(
                user_subject
              )}&body=${encodeURIComponent(
                `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone}\nSubject:${user_subject}\nMessage:${user_message}`
              )}`}
              className="btn btn-lg btn-thm"
             
            >
              {sendEmail.button[lang]}
            </a>
          </div>
          {/* End button submit */}
        </div>
      </div>
    </form>
  );
};

export default Form;

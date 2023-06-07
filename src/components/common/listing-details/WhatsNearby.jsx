import { useSelector } from "react-redux";
import Ratings from "../../blog-details/Ratings";

const WhatsNearby = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const main = useSelector(state => state.lang.value.listingStyle)
  const nearbyContent = [
    {
      id: 1,
      styleClass: "",
      title: {en: " Education", ar: "تعليم"},
      icon: "flaticon-college-graduation",
      singleItem: [
        {
          id: 1,
          name: {en: "Eladia &apos;s Kids", ar: 'اطفال'},
          miles: "3.13",
          totalReview: "8895",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 2,
          name: {en: " Gear Up With ACLS", ar: "الاستعداد مع"},
          miles: "4.66",
          totalReview: "7475",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 3,
          name: {en: " Gear Up With ACLS", ar: "الاستعداد مع"},
          miles: "3.31",
          totalReview: "3579",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      styleClass: "style2",
      title: {en: "Health & Medical", ar: "الصحة والطب"},
      icon: "flaticon-heartbeat",
      singleItem: [
        {
          id: 1,
          name: "Eladia &apos;s Kids",
          miles: "3.13",
          totalReview: "8895",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 2,
          name: {en: " Gear Up With ACLS", ar: "الاستعداد مع"},
          miles: "4.66",
          totalReview: "7475",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 3,
          name: {en: " Gear Up With ACLS", ar: "الاستعداد مع"},
          miles: "3.31",
          totalReview: "3579",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
      ],
    },
    {
      id: 3,
      styleClass: "style3",
      title: {en: " Transportation", ar: "مواصلات"},
      icon: "flaticon-front-of-bus",
      singleItem: [
        {
          id: 1,
          name: "Eladia &apos;s Kids",
          miles: "3.13",
          totalReview: "8895",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 2,
          name: " Gear Up With ACLS",
          miles: "4.66",
          totalReview: "7475",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 3,
          name: "Brooklyn Brainery",
          miles: "3.31",
          totalReview: "3579",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
      ],
    },
  ];

  return (
    <>
      {nearbyContent.map((item) => (
        <div
          className={`education_distance mb15 ${item.styleClass}`}
          key={item.id}
        >
          <h5>
            <span className={`${item.icon}`}></span> {item.title[lang]}
          </h5>

          {item.singleItem.map((val) => (
            <div className="single_line" key={val.id}>
              <p className="para">
                {val.name[lang]} <span>({val.miles} miles)</span>
              </p>
              <ul className="review">
                <Ratings />
                <li className="list-inline-item">
                  <span className="total_rive_count">
                    {val.totalReview} {main.reviews[lang]}
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default WhatsNearby;

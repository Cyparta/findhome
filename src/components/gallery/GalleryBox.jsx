import "photoswipe/dist/photoswipe.css";
import {
  gallerys,
  searchinput,
  search,
  selectresult,
} from "../../data/gallery.js";
import Link from "next/link.js";
import { useSelector } from "react-redux";
import { FaBath, FaBed } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRef } from "react";
import NewGallery from "./NewGallery.jsx";
const GalleryBox = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  let [result, setresult] = useState(gallerys);
  const [name, setname] = useState("");
  const [numberroom, setnumberroom] = useState("");
  const [price, setprice] = useState("");
  const [sort, setsort] = useState("sortbyid");
  const refselect = useRef();
  let filterdata = {
    name: "",
    numberroom: 0,
    price: "",
    sort: "",
  };
  // function filtername(element, e) {
  //   let filterdataclone = { ...filterdata };
  //   filterdataclone[element.name[lang]] = e.target.value;
  //   filterdata = filterdataclone;
  // }

  function submitfilter() {
    if (name) {
      setresult(gallerys.filter((ele) => ele.title[lang].includes(name)));
    }
    if (numberroom) {
      setresult(gallerys.filter((ele) => ele.Beds[lang].includes(numberroom)));
    }
    if (price) {
      setresult(gallerys.filter((ele) => ele.price[lang].includes(price)));
    }
    if (refselect.current.value.startsWith("highest")) {
      let myresult = [...result];
      myresult.sort(function (a, b) {
        return (
          Number(b.price[lang].split(" ")[0]) -
          Number(a.price[lang].split(" ")[0])
        );
      });
      setresult(myresult);
    }
    if (refselect.current.value.startsWith("lowest")) {
      let myresult = [...result];
      myresult.sort(function (a, b) {
        return (
          Number(a.price[lang].split(" ")[0]) -
          Number(b.price[lang].split(" ")[0])
        );
      });
      setresult(myresult);
    }
    if (
      name === "" &&
      numberroom === "" &&
      price === "" &&
      refselect.current.value === "sortbyid"
    ) {
      setresult(gallerys);
    }
  }
  useEffect(() => {
    console.log(result);
    // setresult(gallerys);
    return () => {
      setresult(gallerys);
    };
  }, []);
  return (
    <>
      <div className="row justify-content-evenly mt-4 ">
        {searchinput.map((ele, index) => {
          return (
            <div className="col-lg-3 col-md-6 col-sm-12 my-2" key={index}>
              <div
                id={ele.id[lang]}
                className="form-control d-flex justify-content-start
              align-items-center "
              >
                <label>
                  <BsSearch />
                </label>
                <input
                  type="text"
                  placeholder={ele.placeholder[lang]}
                  className="styleinputsearch"
                  onChange={
                    ele.name[lang] === "name"
                      ? (e) => setname(e.target.value)
                      : ele.name[lang] === "numberroom"
                      ? (e) => setnumberroom(e.target.value)
                      : ele.name[lang] === "price"
                      ? (e) => setprice(e.target.value)
                      : null
                  }
                />
              </div>
            </div>
          );
        })}
        <div className="col-lg-3 col-md-6 col-sm-12 my-2">
          <select
            class="form-control "
            aria-label="Default select example"
            value={sort}
            ref={refselect}
            onChange={() => {
              setsort(refselect.current.value);
            }}
          >
            <option
              value={"sortbyid"}
              // onChange={(e) => setsort(e.target.value)}
            >
              {selectresult[0]?.placeholder[lang]}
            </option>
            <option
              value={selectresult[0]?.valueoption1[lang]}
              // onChange={(e) => setsort(e.target.value)}
            >
              {selectresult[0]?.option1[lang]}
            </option>
            <option
              value={selectresult[0]?.valueoption2[lang]}
              // onChange={(e) => setsort(e.target.value)}
            >
              {selectresult[0]?.option2[lang]}
            </option>
          </select>
        </div>
      </div>
      <div>
        <button
          class="styledivparent  my-2 w-100"
          onClick={(e) => {
            submitfilter(e, filterdata);
            console.log(sort, refselect.current.value);
          }}
        >
          {search[0]?.placeholder[lang]}
        </button>
      </div>

      <NewGallery result={result ? result : gallerys} />
    </>
  );
};

export default GalleryBox;

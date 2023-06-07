import { useSelector } from "react-redux";

const SearchBox = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const search = {en: "search here", ar: "ابحث هنا"}
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={search[lang]}
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          required
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <span className="flaticon-magnifying-glass"></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;

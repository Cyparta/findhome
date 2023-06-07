import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addListen } from "../../../features/agent/agentSlice";

const TopFilterBar = () => {
    const { length, listen } = useSelector((state) => state.agent) || {};
    const lang = useSelector(state => state.lang.value.lang)
    const main = useSelector(state => state.lang.value.agent.topFilter)
    const [getListen, setListen] = useState(listen);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addListen(getListen));
    }, [dispatch, addListen, getListen]);

    // clear filter
    useEffect(() => {
        if (listen == "") {
            setListen("");
        }
    }, [listen, setListen]);

    return (
        <div className="grid_list_search_result style2 d-flex align-items-center flex-wrap">
            <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                <div className="left_area">
                    <p>
                        <span
                            className={length == 0 ? "text-danger" : undefined}
                        >
                            {length}
                        </span>
                        {length !== 0 ? (
                            `${main.search[lang]}`
                        ) : (
                            <span className="text-danger">No result found</span>
                        )}
                    </p>
                </div>
            </div>
            {/* End .col */}

            <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
                <div className="right_area style2 text-end">
                    <ul>
                        <li className="list-inline-item">
                            <span className="shrtby">{main.sortBy[lang]}:</span>
                            <select
                                onChange={(e) => setListen(e.target.value)}
                                className="selectpicker show-tick"
                                value={getListen}
                            >
                                <option value="">{main.select[lang]}</option>
                                <option value="1">{main.opt[lang]}</option>
                                <option value="2">{main.opt2[lang]}</option>
                                <option value="3">{main.opt3[lang]}</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End .col */}
        </div>
    );
};

export default TopFilterBar;

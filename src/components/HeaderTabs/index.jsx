import HeaderTab from "./HeaderTab";
import "./headerTabs.scss";
import {pageURL} from "../../const/page";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useLocation} from "react-router";
import {setSelectedTab} from "../../redux/headerSlice";

const HeaderTabs = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case pageURL.generate:
                dispatch(setSelectedTab("Generate"));
                break;
            case pageURL.templates:
                dispatch(setSelectedTab("Templates"));
                break;
            case pageURL.categories:
                dispatch(setSelectedTab("Categories"));
                break;
        }
    }, []);
    return (
      <div className={"header-tabs"}>
          <HeaderTab label={"Generate"} path={pageURL.generate}/>
          <HeaderTab label={"Templates"} path={pageURL.templates}/>
          <HeaderTab label={"Categories"} path={pageURL.categories}/>
      </div>
    );
};

export default HeaderTabs;
import {CircularProgress} from "@mui/material";
import "./spiner.scss";

const Spinner = () => {
    return (
        <div className={"spinner-wrapper"}>
            <CircularProgress size={50}/>
        </div>
    );
};

export default Spinner;
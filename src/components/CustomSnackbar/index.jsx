import PropTypes from "prop-types";
import {Alert, Snackbar} from "@mui/material";
import {useEffect, useState} from "react";

const CustomSnackbar = ({isOpened, message}) => {
    const [shouldBeOpened, open] = useState(false);
    useEffect(() => {
        open(isOpened);
    }, [isOpened]);
    return (
        <Snackbar
            open={shouldBeOpened}
            autoHideDuration={6000}
            onClose={() => open(false)}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
            <Alert
                severity="success"
                sx={{width: '100%'}}
                onClose={() => open(false)}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

CustomSnackbar.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
};

export default CustomSnackbar;
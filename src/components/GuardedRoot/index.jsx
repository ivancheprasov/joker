import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {Navigate} from "react-router-dom";
import {pageURL} from "../../const/page";
import {useDispatch, useSelector} from "react-redux";
import {loadProfile} from "../../redux/userSlice";

const GuardedRoot = ({element, redirectElement}) => {
    const {isLoaded, isAuthorized, username} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(async () => {
        if (!username) {
            await dispatch(loadProfile());
        }
    }, []);

    return (
        isLoaded && (
            isAuthorized ?
                element
                :
                redirectElement
        )
    );
};

GuardedRoot.propTypes = {
    element: PropTypes.element.isRequired,
    redirectElement: PropTypes.element.isRequired
};

GuardedRoot.defaultProps = {
    redirectElement: <Navigate to={pageURL.auth}/>
};

export default GuardedRoot;
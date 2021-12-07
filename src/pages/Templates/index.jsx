import MainLayout from "../../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import FormLayout from "../../components/FormLayout";
import {useEffect} from "react";
import SuggestForm from "./SuggestForm";
import {isSuggestingCategories, resetAddSuccess} from "../../redux/templatesSlice";

const Templates = () => {
    const {hasSuggestedCategories} = useSelector(state => state.templates);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(isSuggestingCategories(false));
        dispatch(resetAddSuccess());
    }, []);
    return (
        <MainLayout>
            <FormLayout title={"Add a template"}>
                {
                    hasSuggestedCategories ?
                        null
                        :
                        <SuggestForm/>
                }
            </FormLayout>
        </MainLayout>
    );
};

export default Templates;
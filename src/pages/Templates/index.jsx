import MainLayout from "../../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import FormLayout from "../../components/FormLayout";
import {useEffect} from "react";
import SuggestForm from "./SuggestForm";
import {isShowingSuggestedCategories, resetAddSuccess} from "../../redux/templatesSlice";
import AddTemplateForm from "./AddTemplateForm";
import {loadCategories} from "../../redux/categoriesSlice";
import Spinner from "../../components/Spinner";
import CustomSnackbar from "../../components/CustomSnackbar";

const Templates = () => {
    const {
        hasSuggestedCategories,
        isAddSuccessful,
        isLoaded: areSuggestedCategoriesLoaded
    } = useSelector(state => state.templates);
    const {isLoaded: areAllCategoriesLoaded} = useSelector(state => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(isShowingSuggestedCategories(false));
        dispatch(resetAddSuccess());
        dispatch(loadCategories());
    }, []);
    return (
        <MainLayout>
            <FormLayout title={"Add a template"}>
                {
                    hasSuggestedCategories ?
                        areSuggestedCategoriesLoaded && areAllCategoriesLoaded ?
                            <AddTemplateForm/>
                            :
                            <Spinner/>
                        :
                        <SuggestForm/>
                }
            </FormLayout>
            <CustomSnackbar
                isOpened={isAddSuccessful}
                message={"A template has been added!"}
            />
        </MainLayout>
    );
};

export default Templates;
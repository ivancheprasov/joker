import MainLayout from "../../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import FormLayout from "../../components/FormLayout";
import {isShowingResult, setSelectedOption} from "../../redux/generateFormSlice";
import {useEffect} from "react";
import TextAreaForm from "./TextAreaForm";
import TemplateUsageForm from "./TemplateUsageForm";
import {loadCategories} from "../../redux/categoriesSlice";
import GenerateResult from "./GenerateResult";
import Spinner from "../../components/Spinner";

const Generate = () => {
    const dispatch = useDispatch();
    const {selectedOption, isLoaded, isSuccessful, isShowingResult: hasResult} = useSelector(state => state.generateForm);
    useEffect(() => {
        dispatch(isShowingResult(false))
        dispatch(setSelectedOption("use text input"));
        dispatch(loadCategories());
    }, []);
    return (
        <MainLayout>
            {
                hasResult ?
                    <FormLayout title={"Your result"}>
                        {
                            isLoaded && isSuccessful ?
                                <GenerateResult/>
                                :
                                <Spinner/>
                        }
                    </FormLayout>
                    :
                    <FormLayout title={"Generate a joke"}>
                        {
                            selectedOption === "use text input" ?
                                <TextAreaForm/>
                                :
                                <TemplateUsageForm/>
                        }
                    </FormLayout>
            }
        </MainLayout>
    );
};

export default Generate;
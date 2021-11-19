import MainLayout from "../../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import FormLayout from "../../components/FormLayout";
import {setSelectedOption} from "../../redux/generateFormSlice";
import {useEffect} from "react";
import TextAreaForm from "./TextAreaForm";

const Generate = () => {
    const dispatch = useDispatch();
    const {selectedOption} = useSelector(state => state.generateForm);
    useEffect(() => {
        dispatch(setSelectedOption("use text input"));
    }, []);
    return (
        <MainLayout>
            <FormLayout title={"Generate a joke"}>
                {
                    selectedOption === "use text input" ?
                        <TextAreaForm/>
                        :
                        null
                }
            </FormLayout>
        </MainLayout>
    );
};

export default Generate;
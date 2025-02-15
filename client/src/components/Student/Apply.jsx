import { useParams } from "react-router-dom";
import ApplicationForms from "../ApplicationForms/ApplicationForms";

export default function Apply() {
    const params = useParams();
    const { form } = params

    function getFormComponent() {
        return [0, 1, 2].includes(Number(form)) ? <ApplicationForms form={form} /> : <ApplicationForms form={0} />
    }

    return (
        <div className="container h-full overflow-y-auto p-6">
            {getFormComponent()}
        </div>
    )
}
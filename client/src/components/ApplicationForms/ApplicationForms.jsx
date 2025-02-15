import Form_0 from "./Forms/Form0";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";

export default function ApplicationForms({ form }) {

    if (form == 0) {
        return <Form_0 />
    }

    if (form == 1) {
        return <Form1 />
    }

    if (form == 2) {
        return <Form2 />
    }

}
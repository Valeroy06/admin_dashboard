import Images from "../img/Images";
import FormInput from "../components/FormInput";

import Dummy from "./Dummy";
import { useImage } from "../components/ImageContext";
const Home = () => {
    const { values, onChange, swapImage, ref, setValues } = useImage()


    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Full Name",
            errorMessage: "Bitch,too short!",
            label: "Full Name",
            pattern: "^[A-Za-z]{5,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "Email",
            errorMessage: "invalid email",
            label: "Email Address",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Date Of Birth",
        },
        {
            id: 4,
            name: "phoneNumber",
            type: "number",
            placeholder: "Phone Number",
            // errorMessage:"invalid number",
            label: "Phone Number",
            required: true,
        },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(values)
        setValues({
            fullName: "",
            email: "",
            birthday: "",
            phoneNumber: "",
            image: Images.person
        })
    };



    return (
        <div className="home">
            <div className="header">
                <Dummy title="My Profile" notImg={Images.notification} searchImg={Images.search} profileImg={Images.person} text="eshibobo" />
            </div>

            <div className="flex">
                <h4>Edit Profile</h4>
                <div>
                    <label htmlFor="image">
                        <input type="file" id="image" style={{ display: "none" }} onChange={swapImage} accept=".png, .jpg, .jpeg, .svg" />
                        <img src={values.image} ref={ref} className="man" alt="person" />
                        <img src={Images.pencil} className="pencil" alt="pencil" />
                    </label>
                    <form onSubmit={handleSubmit}>
                        {inputs.map((input) => (
                            <FormInput key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}


                        <button type="submit">save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Home;
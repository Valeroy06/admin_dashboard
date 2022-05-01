import Images from "../img/Images";
import FormInput from "../components/FormInput";
import { useState } from "react";




const Home = () => {
const [values, setValues] = useState({
    fullname: "",
    email: "",
    birthday:"",
    phonenumber:"",
})

const inputs = [
    {
    id:1,
    name:"fullName",
    type:"text",
    placeholder:"Full Name",
    errorMessage:"Bitch,too short!",
    label:"Full Name",
},
{
    id:2,
    name:"email",
    type:"text",
    placeholder:"Email",
    errorMessage:"dasds",
    label:"Email Address",
},
{
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    errorMessage:"",
    label:"Date Of Birth",
},
{
    id:4,
    name:"phoneNumber",
    type:"number",
    placeholder:"Phone Number",
    label:"Phone Number",
},
];
const handleSubmit = (e) => {
    e.preventDefault();
};

const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
};

return (
<div className="home">
    <div className="header">
        <h2>My Profile</h2>
        <img src={Images.notification} className="notif" alt="notification" /><br />
        <span>eshibobo <img src={Images.man} className="man" alt="man" /></span>
    </div>

    <div className="flex">
        <h4>Edit Profile</h4>
        <div>
        <img src={Images.man} className="man" alt="man" />
        <img src={Images.pencil} className="pencil" alt="pencil" />
        <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
                <FormInput key={input.id}
                {...input}
                 value={values[input.name]}
                 onChange={onChange} 
                 />
            ))}
            
            
            <button>submit</button>
        </form>
        </div>
    </div>
</div>
);
};
export default Home;
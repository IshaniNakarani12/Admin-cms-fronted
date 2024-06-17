import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import useForm from "../../Hooks/userForm";

const Register = () => {
  const { form, handleOnChange } = useForm({});
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Write your first Name",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Write your last Name",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",

      placeholder: "Write your Phone number",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "Write your email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "**********",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "*******",
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="" style={{ width: "450px" }}>
        <Form className="shadow-lg p-3 rounded" onSubmit={handleOnSubmit}>
          <h3>Admin Registration</h3>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <div className="d-grid">
            <Button type="submit">Register New Admin</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;

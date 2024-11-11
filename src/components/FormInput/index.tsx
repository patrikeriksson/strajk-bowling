import "./index.css";

type FormInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
};

const FormInput = ({
  id,
  label,
  placeholder,
  type = "text",
}: FormInputProps) => (
  <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} placeholder={placeholder} required />
  </div>
);

export { FormInput };

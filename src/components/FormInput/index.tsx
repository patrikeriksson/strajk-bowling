import "./index.css";

type FormInputProps = {
  id: string;
  label: string;
  min?: string;
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  min,
}: FormInputProps) => (
  <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      required
    />
  </div>
);

export { FormInput };

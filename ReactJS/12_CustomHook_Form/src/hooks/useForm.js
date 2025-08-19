import { useState } from "react";

// Custom hook me hum other react hooks use kar sakte hai

function useForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (values.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (values.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if(Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
    }
    else {
        console.log("Form Submited")
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
}

export default useForm;

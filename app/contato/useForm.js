"use client";
import { useState } from "react";
// import Router from "next/router";
import { useRouter } from "next/navigation";

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handlePress = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setLoading(true);

    if (
      (values.name,
      values.email,
      values.phone,
      values.message === null || values.name,
      values.email,
      values.phone,
      values.message === "")
    ) {
      setErrors(validate(values));
      setLoading(false);
    } else {
      await fetch("/contato/send/", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (res) {
          setLoading(false);
          console.log("USE FORM RESPONSE", res);

          // import("react-facebook-pixel")
          //   .then((x) => x.default)
          //   .then((ReactPixel) => {
          //     ReactPixel.init("445479778092008");
          //     ReactPixel.track("Contact");
          //     console.log(ReactPixel);
          //   });

          if (res.ok == true) {
            router.push("/thank-you");
            setSubmitting(true);
            // setShowSuccess(true);
            setValues({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          } else {
            setValues({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
            setShowFail(true);
          }
          // console.log("RES", res);
        })
        .catch(function (err) {
          console.error("ERROR", err);
        })
        .finally((fnly) => {
          // console.log("FINALY", fnly);
        });
    }
  };

  return {
    isSubmitting,
    handleChange,
    values,
    handlePress,
    errors,
    setValues,
    isLoading,
    setSubmitting,
    showSuccess,
    showFail,
  };
};

export default useForm;

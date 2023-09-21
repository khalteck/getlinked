/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const [validationErr, setValidationErr] = useState("");
  const [submitErr, setSubmitErr] = useState("");
  const [buttonLoader, setButtonLoader] = useState(false);

  const [contactData, setContactData] = useState({
    first_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  //   console.log("contactData", contactData);

  const handleContactChange = (e) => {
    setValidationErr("");
    setSubmitErr("");
    const { id, value } = e.target;
    setContactData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const [contactResponse, setContactResponse] = useState("");

  const submitContact = async () => {
    try {
      setButtonLoader(true);
      const response = await axios.post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        contactData
      );
      console.log("response", response);
      if (response?.status === 201) {
        setContactResponse("Message sent successfully!");
        setContactData({
          first_name: "",
          email: "",
          phone_number: "",
          message: "",
        });
        setTimeout(() => {
          setContactResponse("");
        }, 5000);
      }
    } catch (error) {
      setSubmitErr(error?.message);
      console.log("error", error);
    } finally {
      setButtonLoader(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        contactData,
        handleContactChange,
        validationErr,
        setValidationErr,
        buttonLoader,
        submitContact,
        submitErr,
        contactResponse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;

/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  //======================api base url from env
  const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;

  const [validationErr, setValidationErr] = useState("");
  const [submitErr, setSubmitErr] = useState("");
  const [buttonLoader, setButtonLoader] = useState(false);

  //====================================to handle contact us input data
  const [contactData, setContactData] = useState({
    first_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

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

  //===========================to submit contact data
  const submitContact = async () => {
    try {
      setButtonLoader(true);
      setSubmitErr("");
      const response = await axios.post(
        `${baseUrl}/hackathon/contact-form`,
        contactData
      );
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
    } finally {
      setButtonLoader(false);
    }
  };

  //=====================================to get categories
  const [fetching, setFecting] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      setFecting(true);
      const response = await axios.get(`${baseUrl}/hackathon/categories-list`);
      setCategories(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setFecting(false);
    }
  };

  //====================================to handle register input data
  const [registerData, setRegisterData] = useState({
    team_name: "",
    email: "",
    phone_number: "",
    project_topic: "",
    category: 0,
    group_size: 0,
    privacy_poclicy_accepted: false,
  });

  const handleRegisterChange = (e) => {
    setValidationErr("");
    setSubmitErr("");
    const { id, value, checked } = e.target;
    setRegisterData((prev) => {
      return {
        ...prev,
        [id]:
          id === "privacy_poclicy_accepted"
            ? checked
            : id === "group_size" || id === "category"
            ? Number(value)
            : value,
      };
    });
  };

  const [regSuccess, setRegSuccess] = useState(false);

  //===========================to submit register data
  const submitReg = async () => {
    try {
      setButtonLoader(true);
      setSubmitErr("");
      const response = await axios.post(
        `${baseUrl}/hackathon/registration`,
        registerData
      );
      if (response?.status === 201) {
        setRegSuccess(true);
        setRegisterData({
          team_name: "",
          email: "",
          phone_number: "",
          project_topic: "",
          category: 0,
          group_size: 0,
          privacy_poclicy_accepted: false,
        });
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        setSubmitErr(error?.response?.data?.email[0]);
      } else {
        setSubmitErr(error?.message);
      }
    } finally {
      setButtonLoader(false);
    }
  };

  const navigate = useNavigate();

  //=======================================to handle scroll to sections
  function scrollToTimeline(id) {
    if (currentPage !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000);
    } else {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

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
        getCategories,
        fetching,
        categories,
        registerData,
        handleRegisterChange,
        submitReg,
        regSuccess,
        setRegSuccess,
        scrollToTimeline,
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

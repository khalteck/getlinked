/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../components/Header";
import { useAppContext } from "../contexts/AppContext";
import RegisterForm from "../components/RegisterForm";
import { useEffect } from "react";
import Congratulations from "../components/Congratulations";

const Register = () => {
  const {
    registerData,
    handleRegisterChange,
    setValidationErr,
    validationErr,
    submitErr,
    buttonLoader,
    submitReg,
    contactResponse,
    fetching,
    getCategories,
    categories,
    setRegSuccess,
    regSuccess,
  } = useAppContext();

  useEffect(() => {
    getCategories();
  }, []);

  function handleSubmit() {
    if (
      registerData?.team_name &&
      registerData?.email &&
      registerData?.phone_number &&
      registerData?.project_topic &&
      registerData?.category &&
      registerData?.group_size &&
      registerData?.privacy_poclicy_accepted
    ) {
      submitReg();
    } else if (!registerData?.privacy_poclicy_accepted) {
      setValidationErr("Agree with event T&C before proceeding!");
    } else {
      setValidationErr("All fields are required!");
    }
  }
  return (
    <>
      <Header />
      <main className="w-full h-screen bg-[#150E28] text-white font-mont overflow-auto">
        <section className="w-full h-screen flex gap-5 md:flex-row md:justify-between lg:justify-center flex-col absolute top-18 px-10 lg:px-[150px] pt-[40px] md:py-[180px] z-30 overflow-x-hidden">
          <div className="w-full md:w-[45%] flex-col gap-4 font-medium hidden md:flex relative">
            <img className="w-full h-auto" alt="" src="/images/reg-img.png" />

            {/* star decor */}
            <img
              className="w-4 h-4 absolute md:block hidden top-[0px] left-3 blink1"
              alt=""
              src="/images/star1.png"
            />
            <img
              className="w-6 h-6 hidden md:block absolute bottom-[20px] right-[70px] blink2"
              alt=""
              src="/images/star2.png"
            />
            <img
              className="w-6 h-6 hidden md:block absolute bottom-[-100px] left-[20%] blink2"
              alt=""
              src="/images/star4.png"
            />
          </div>

          <div className="w-full md:w-1/2">
            <RegisterForm
              handleSubmit={handleSubmit}
              validationErr={validationErr}
              registerData={registerData}
              handleRegisterChange={handleRegisterChange}
              submitErr={submitErr}
              contactResponse={contactResponse}
              buttonLoader={buttonLoader}
              categories={categories}
              fetching={fetching}
            />
          </div>
        </section>
      </main>

      {/* flare decor */}
      <section className="w-full h-screen absolute top-0 left-0 z-0 overflow-hidden">
        {/* <img
          className="w-6 h-6 hidden md:block absolute top-[130px] right-[250px] blink4"
          alt=""
          src="/images/star4.png"
        /> */}
        <img
          className="w-[400px] md:w-[650px] h-auto absolute top-5 md:top-[80px] left-[-20px] opacity-60"
          alt=""
          src="/images/flare.png"
        />
        <img
          className="w-[400px] lg:w-[650px] h-auto absolute bottom-[0px] right-[0px] opacity-50 hidden md:block"
          alt=""
          src="/images/flare2.png"
        />
      </section>

      {regSuccess && <Congratulations setRegSuccess={setRegSuccess} />}
    </>
  );
};

export default Register;

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="w-full min-h-screen pt-[100px] bg-[#150E28] text-white font-mont">
        <section className="px-10 lg:px-[150px] pt-5 bg-transparent border-white/10 border-b font-medium">
          <div className="text-[1.5rem] font-bold text-end relative">
            <i>Igniting a Revolution in HR Innovation</i>
            <img
              className="w-[180px] h-auto absolute bottom-[-10px] right-0"
              alt=""
              src="/images/line1.png"
            />
          </div>

          <div className="w-full flex items-center">
            <div className="w-full h-fit flex flex-col gap-4">
              <h1 className="text-[2rem] md:text-[3.5rem] font-[800]">
                getlinked Tech
                <br />
                Hackathon <span>1.0</span>
              </h1>
              <p>
                Participate in getlinked tech Hackathon 2023 stand
                <br /> a chance to win a Big prize
              </p>
              <div onClick={() => navigate("/register")} className={`mt-2`}>
                <Button type="normal" title="Register" />
              </div>
              <div className="w-[300px] h-12 border mt-12"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;

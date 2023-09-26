/* eslint-disable react/no-unescaped-entities */
import Header from "../components/Header";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Section1 from "../components/Section1";
import Footer from "../components/Footer";
import Section9 from "../components/Section9";
import Section8 from "../components/Section8";
import Section7 from "../components/Section7";
import Section5 from "../components/Section5";
import Section4 from "../components/Section4";
import Section3 from "../components/Section3";
import Section2 from "../components/Section2";
import Section6 from "../components/Section6";
import ScrollToTop from "../ScrollToTop";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [countdown, setCountdown] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("September 28, 2023");

      // Calculate the time difference between today and the target date
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        setCountdown({
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(interval);
      } else {
        const hours = String(
          Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((timeDiff / 1000 / 60) % 60)
        ).padStart(2, "0");
        const seconds = String(Math.floor((timeDiff / 1000) % 60)).padStart(
          2,
          "0"
        );

        setCountdown({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-[#150E28] text-white font-mont">
        {/* section 1*/}

        <Section1 countdown={countdown} />

        {/* section 2 */}
        <Section2 />

        {/* section 3 */}
        <Section3 />

        {/* section 4 */}
        <Section4 />

        {/* section 5 */}
        <Section5 />

        {/* section 6 */}
        <Section6 />

        {/* section 7 */}
        <Section7 />

        {/* section 8 */}
        <Section8 />

        {/* section 9 */}
        <Section9 />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Homepage;

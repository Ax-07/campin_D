import { HeroBanner } from "../components/HeroBanner.jsx";
import { useState } from "react";
import { getAllData } from "../services/api/logementApi.js";
import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm.jsx";
// import { DropDown } from "../components/DropDown.jsx";

export const About = () => {
  const [valeur, setValeur] = useState([]);
  const heroImg = "./images/vueDuLac/20211011_194517.jpg";

  useEffect(() => {
    getAllData("./db/valeur.json")
      .then((data) => {
        setValeur(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(valeur);

  return (
    <div className="section section__contents">
      <HeroBanner src="about" heroTitle="" heroImg={heroImg} />
      {/* <div className="valeur">
        {valeur &&
          valeur.map((valeur, index) => (
            <DropDown key={index} className="dropDown--lg" title={valeur.title}>
              <p className="dropDown__description">{valeur.description}</p>
            </DropDown>
          ))}
      </div> */}
      <ContactForm />
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11273.355575371896!2d4.385802174333203!3d45.05863599273192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f582c0cead31b1%3A0xa2b406d6fd56610f!2sCamping%20du%20Lac%20de%20Devesset!5e0!3m2!1sfr!2sfr!4v1703929574474!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style={{
            border: "0",
            borderRadius: "10px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

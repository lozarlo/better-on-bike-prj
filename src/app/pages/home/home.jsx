import React from "react";
import { NavLink } from "react-router-dom";
import Slideshow from "../../components/slideshow/sildeshow.jsx";
import BrandSection from "../../components/brandsection/brandSection.jsx";

import imgOne from "/assets/images/home/home-hero.jpg";
import imgTwo from "/assets/images/home/downhill-landscape.jpg";
import imgThree from "/assets/images/home/panning-landscape.jpg";
const homeImageList = [imgOne, imgTwo, imgThree];

import bikeBrandOne from "/assets/icons/brands/bike/focus-logo.png";
import bikeBrandTwo from "/assets/icons/brands/bike/mbm-logo.png";
import bikeBrandThree from "/assets/icons/brands/bike/olmo-logo.png";
import bikeBrandFour from "/assets/icons/brands/bike/parkpre-logo.png";
import bikeBrandFive from "/assets/icons/brands/bike/ridley-logo.png";
import bikeBrandSix from "/assets/icons/brands/bike/wilier-logo.png";

const bikeBrandList = [
  { id: "focus-icon", class:"brand-icon", image: bikeBrandOne, link: "https://www.focus-bikes.com/it_it/" },
  { id: "mbmbike-icon", class:"brand-icon", image: bikeBrandTwo, link: "https://www.mbmbike.it/" },
  { id: "olmo-icon", class:"brand-icon", image: bikeBrandThree, link: "https://www.olmo-bike.it/" },
  { id: "parkpre-icon", class:"brand-icon", image: bikeBrandFour, link: "https://www.parkpre.it/" },
  { id: "ridley-icon", class:"brand-icon", image: bikeBrandFive, link: "https://www.ridley-bikes.com/it_IT" },
  { id: "wilier-icon", class:"brand-icon", image: bikeBrandSix, link: "https://www.wilier.com/it" },
];

import wearBrandImgOne from "/assets/icons/brands/wear/abus-logo.png";
import wearBrandImgTwo from "/assets/icons/brands/wear/giro-logo.png";
import wearBrandImgThree from "/assets/icons/brands/wear/alecycling-logo.png";
import wearBrandImgFour from "/assets/icons/brands/wear/mavic-logo.png";
import wearBrandImgFive from "/assets/icons/brands/wear/oxyburn-logo.png";
import wearBrandImgSix from "/assets/icons/brands/wear/sidi-b-logo.png";
import wearBrandImgSeven from "/assets/icons/brands/wear/sportful-logo.png";

const wearBrandList = [
  { id: "mobil-icon", class:"brand-icon", image: wearBrandImgOne, link: "https://mobil.abus.com/it" },
  { id: "giro-icon", class:"brand-icon", image: wearBrandImgThree, link: "https://www.giro.com/" },
  { id: "alecycling-icon", class:"brand-icon", image: wearBrandImgTwo, link: "https://alecycling.com/it/" },
  { id: "mavic-icon", class:"brand-icon", image: wearBrandImgFour, link: "https://www.mavic.com/it-it" },
  { id: "oxyburn-icon", class:"brand-icon", image: wearBrandImgFive, link: "https://www.oxyburn.it/" },
  { id: "sidi-icon", class:"brand-icon", image: wearBrandImgSix, link: "https://www.sidi.com/it/" },
  { id: "sportful-icon", class:"brand-icon", image: wearBrandImgSeven, link: "https://www.sportful.com/IT/it/" },
];

const bikeDescription = "Offriamo una vasta gamma di bici da corsa, mountain bike, Gravel, e-bike e biciclette per bambini. Ogni modello è pensato per un tipo di ciclismo diverso, dalla velocità alla comodità, dal fuoristrada all'assistenza elettrica. Scopri i nostri marchi e trova la bici perfetta per te."
const wearDescription = "Specializzati nella vendita di abbigliamento tecnico per ciclisti e accessori correlati. Qui troverai una vasta gamma di prodotti pensati per soddisfare le esigenze dei ciclisti di ogni livello, dalle maglie traspiranti alle calze termiche, dagli occhiali da sole alle borse portaoggetti per le tue avventure in bicicletta. Siamo appassionati di ciclismo e ci impegniamo a offrire ai nostri clienti i migliori prodotti sul mercato."

const sectionStyle = "section-content-wrapper";
const sectionStyleRow = sectionStyle + " " + "section-content-row";
const sectionStyleRowReverse = sectionStyle + " " + "section-content-row-reverse";

function Home() {
  return (
    <main className="main-container">
      <div className="hero-wrapper">
        <div className="hero">
          <Slideshow imgArray={homeImageList} />
        </div>
      </div>
      <section className="mid-section">
        <BrandSection
          BrandList={bikeBrandList}
          title={"Le nostre bicilcette"}
          colDescription={bikeDescription}
          css={sectionStyleRow}
        />
        <BrandSection
          BrandList={wearBrandList}
          title={"Il nostro Abbigliamento"}
          colDescription={wearDescription}
          css={sectionStyleRowReverse}
        />

        <div className="services-section">
          <h2>I nostri servizi</h2>
          <p>
            Offriamo un'ampia gamma di servizi per soddisfare le esigenze dei
            nostri clienti. Oltre alla vendita, ci occupiamo con cura delle{" "}
            <span className="enphatized-text">riparazioni</span> e dell'{" "}
            <span className="enphatized-text">assistenza</span> per{" "}
            <span className="enphatized-text">
              biciclette tradizionali, elettriche e monopattini.
            </span>
            Il nostro obiettivo è garantire che i nostri clienti possano godere
            appieno dell'esperienza ciclistica, offrendo soluzioni pratiche e
            affidabili per mantenere in perfetta condizione i loro mezzi di
            trasporto preferiti. Per sapere di più guarda la nostra{" "}
            <NavLink className="inner-element enphatized-text" to="/gallery">
              gallery
            </NavLink>
            , o vieni a{" "}
            <NavLink className="inner-element enphatized-text" to="/about">
              trovarci!
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;

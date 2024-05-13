import Card from "../../components/card/card";

import one from "/assets/images/gallery/1.jpg";
import two from "/assets/images/gallery/2.jpg";
import three from "/assets/images/gallery/3.jpg";
import four from "/assets/images/gallery/4.jpg";
import five from "/assets/images/gallery/5.jpg";
import six from "/assets/images/gallery/6.jpg";
import seven from "/assets/images/gallery/7.jpg";
import eight from "/assets/images/gallery/8.jpg";
import nine from "/assets/images/gallery/9.jpg";

const galleryImgs = [
  { class: "gallery-img", alt: "accessori", title: "accessori", image: one },
  { class: "gallery-img", alt: "vista negozio", title: "vista negozio", image: two },
  { class: "gallery-img", alt: "officina", title: "officina", image: three },
  { class: "gallery-img", alt: "vista negozio", title: "vista negozio", image: four },
  { class: "gallery-img", alt: "accessori", title: "accessori", image: five },
  { class: "gallery-img", alt: "vista negozio", title: "vista negozio", image: six },
  { class: "gallery-img", alt: "vista negozio", title: "vista negozio", image: seven },
  { class: "gallery-img", alt: "accessori", title: "accessori", image: eight },
  { class: "gallery-img", alt: "vista negozio", title: "vista negozio", image: nine }
];

function Gallery() {
  return (
    <main className="about-main-container">
      <section className="mid-section">
      <Card galleryImgs={galleryImgs}/>
      </section>
    </main>
  );
}

export default Gallery;

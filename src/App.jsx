import "./App.css";
import Slider from "./components/Slider/index";

const App = () => {
  const arrayImages = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      alt: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg",
      alt: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      alt: "React",
      link: "https://react.dev/",
    },
  ];

  return <Slider images={arrayImages} />;
};

export default App;

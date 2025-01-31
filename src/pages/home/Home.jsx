import { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Netflix from "./components/netflix/Netflix";

// https://newsapi.org/v2/everything?q=tesla&from=2024-12-28&sortBy=publishedAt&apiKey=b6eeff707a1444cbbf11b12871b528de

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    getNewsData();
  }, []);
  const getNewsData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-12-29&sortBy=publishedAt&apiKey=b6eeff707a1444cbbf11b12871b528de"
    );
    const jsonResponse = await response.json();
    setNewsData(jsonResponse?.articles);
  };
  console.log(newsData);

  return (
    <>
      <Welcome />
      <Netflix />

      <h1>Riya</h1>
      <div className="container">
        {newsData?.map((item, index) => (
          <div className="card" key={index}>
            <img src={item?.urlToImage} alt="image" />
            <div className="author">
              <h1>{item?.author}</h1>
            </div>
            <div className="title">
              <h3>{item?.title}</h3>
            </div>
            <Link to={item?.url}>
              <button>Read Full</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

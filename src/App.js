import React, { useEffect, useState } from "react";
import axios from "axios";
import { TwitterShareButton, TwitterIcon } from "react-share";
import "./App.css";

function App() {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=bceecf84217244119ff3f819b2fdd08f"
      )
      .then((res) => {
        setArticle(res.data.articles);
      });

    return () => {};
  }, []);
  return (
    <div>
      <div className="card-log">
        {article.splice(0, 3).map((article) => {
          return (
            <div key={article.id} className="card">
              <h3>{article.title}</h3>
              <img src={article.urlToImage} alt="print" />
              <p>{article.author}</p>
              <TwitterShareButton title={article.title} url={article.url}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <i class="fas fa-share"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

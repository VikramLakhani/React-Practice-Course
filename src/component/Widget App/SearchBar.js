import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [term, setTerm] = useState("programming");
  //   console.log("I run with every render");
  const [results, setResult] = useState([]);
  //   console.log(result);

  useEffect(() => {
    // console.log("I RUN AFTER EVERY RENDER AND AT INITIAL RENDER");
    const Search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };

    if (term && !results.length) {
      Search();
    } else {
      const timeOutId = setTimeout(() => {
        if (term) {
          Search();
        }
      }, 500);
      return () => {
        clearTimeout(timeOutId);
      };
    }

    // if (term) {
    //   Search();
    // }
    // Search();
  }, [term]);

  const renderResult = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https:en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderResult}</div>
    </div>
  );
};

export default SearchBar;

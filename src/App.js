import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";
import logo from "../src/images/photosnap.svg";

function App() {
  const [filter, setFilter] = useState([]);
  const [value, setValue] = useState(false);

  const handleFilter = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setValue(value);
  };

  const filteredValue = (inputValue) => {
    const filteredValueTwo = data
      .map((data) => data)
      .filter(
        (data) =>
          data.role === inputValue ||
          data.level === inputValue ||
          data.languages[0] === inputValue ||
          data.languages[1] === inputValue ||
          data.languages[2] === inputValue ||
          // data.tools[0] === inputValue ||
          data.tools === inputValue
          
      );
    setFilter(filteredValueTwo);
  };

  useEffect(() => {
    filteredValue(value);
  }, [value]);

  const filteredResult = (data) => {
    return (
      <>
        <div className="App">
          <header className="header-div"></header>

          <div className="container">
            {data.map((data) => {
              return (
                <div key={data.id} className="container-div">
                  <div className="left-div">
                    {data.new && data.featured ? (
                      <div className="colour-div" />
                    ) : null}
                    <img className="img" src={logo} alt="logo" />

                    <div className="middle-div">
                      <div className="photo-div">
                        <p className="photosnap space">{data.company}</p>
                        {data.new ? <p className="new space">NEW!</p> : ""}
                        {data.featured ? (
                          <p className="featured">FEATURED</p>
                        ) : (
                          ""
                        )}
                      </div>

                      <h3 className="role">{data.position}</h3>

                      <div className="time-div">
                        <p className="para">{data.postedAt}</p>
                        <span className="mid-span"></span>
                        <p className="para">{data.contract}</p>
                        <span className="mid-span"></span>
                        <p className="para">{data.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="right-div">
                    <button
                      onClick={handleFilter}
                      value={data.role}
                      className="one"
                    >
                      {data.role}
                    </button>

                    <button
                      onClick={handleFilter}
                      value={data.level}
                      className="two"
                    >
                      {data.level}
                    </button>

                    {data.tools
                      ? data.tools.map((data) => (
                          <button
                            onClick={handleFilter}
                            value={data}
                            className="two"
                          >
                            {data}
                          </button>
                        ))
                      : ""}

                    {data.languages.map((data) => (
                      <button
                        onClick={handleFilter}
                        value={data}
                        className="inner-para"
                      >
                        {data}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  if (value) {
    return filteredResult(filter);
  }

  return (
    <>
      <div className="App">
        <header className="header-div"></header>

        <div className="container">
          {data.map((data) => {
            // const {logo} = data;
            return (
              <div key={data.id} className="container-div">
                <div className="left-div">
                  {data.new && data.featured ? (
                    <div className="colour-div" />
                  ) : null}
                  <img className="img" src={logo} alt="logo" />

                  <div className="middle-div">
                    <div className="photo-div">
                      <p className="photosnap space">{data.company}</p>
                      {data.new ? <p className="new space">NEW!</p> : ""}
                      {data.featured ? (
                        <p className="featured">FEATURED</p>
                      ) : (
                        ""
                      )}
                    </div>

                    <h3 className="role">{data.position}</h3>

                    <div className="time-div">
                      <p className="para">{data.postedAt}</p>
                      <span className="mid-span"></span>
                      <p className="para">{data.contract}</p>
                      <span className="mid-span"></span>
                      <p className="para">{data.location}</p>
                    </div>
                  </div>
                </div>

                <div className="right-div">
                  <button
                    onClick={handleFilter}
                    value={data.role}
                    className="one"
                  >
                    {data.role}
                  </button>
                  <button
                    onClick={handleFilter}
                    value={data.level}
                    className="two"
                  >
                    {data.level}
                  </button>
                  {data.tools ? (
                    <button
                      onClick={handleFilter}
                      value={data.tools}
                      className="two"
                    >
                      {data.tools}
                    </button>
                  ) : (
                    ""
                  )}
                  {data.languages.map((data) => (
                    <button
                      onClick={handleFilter}
                      value={data}
                      className="inner-para"
                    >
                      {data}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

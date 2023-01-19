import React, { useEffect, useState } from "react";

const DayNews = ({ news, day }) => {
  const [newsArr, setNewsArr] = useState([]);
  const dayNews=JSON.parse(localStorage.getItem("SEG_NEWS"));
  useEffect(() => {
    let temp_day = [];
    for (var i = 1; i <= day; i++) {
      temp_day.push(i);
    }
    setNewsArr(temp_day);
  }, [news]);
  return (
  <>
  {newsArr.map((elem)=>
      <div
      className="accordion-item m-0 border mb-1"
      style={{ borderRadius: "5px" }}
    >
      <h2
        className="accordion-header"
        id={`panelsStayOpen-heading${elem}`}
      >
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse${elem}`}
          aria-expanded="false"
          data-parent="#accordionFlushExample"
          aria-controls={`#panelsStayOpen-collapse${elem}`}
          style={{ fontSize: "14px" }}
        >
          Day {elem}
        </button>
      </h2>
      <div
        id={`collapseOne`}
        className="accordion-collapse collapse show"
        aria-labelledby={`heading${elem}`}
        data-bs-parent="#accordionExample"
      >
       {dayNews[`day${elem}`].map((el)=>
         <div
         id={`panelsStayOpen-collapse${elem}`}
         className="accordion-collapse collapse"
         aria-labelledby={`panelsStayOpen-heading${elem}`}
         data-bs-parent="#accordionFlushExample"
       >
         <div className="accordion-body">
              <div className="mt-3">
              <div className="d-flex align-items-center justify-content-start">
                <div>
                  <img
                    src={`../assets/${el.company_ticker}.png`}
                    width="40px"
                    height="40px"
                    style={{
                      borderRadius: "50%",
                      border: "1px solid #828282",
                    }}
                  />
                </div>
                <div
                  className="ps-2"
                  style={{ fontSize: "13px" }}
                >
                  {el.news}
                </div>
              </div>
            </div>
         </div>
       </div>
       )}
      </div>
    </div>
    )}
    </>
  );
};

export default DayNews;

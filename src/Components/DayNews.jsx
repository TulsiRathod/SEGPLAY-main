import React, { useEffect, useState } from "react";

const DayNews = ({ day, news }) => {
  const [days, setDays] = useState([]);
  useEffect(() => {
    let temp_day = [];
    for (var i = 1; i <= day; i++) {
      temp_day.push(i);
    }
    setDays(temp_day);
  }, [day]);
  return (
    <>
      {days &&
        days.map((elems) => (
          <div className="accordion-item">
            <h2
              className="accordion-header"
              id={`panelsStayOpen-heading${elems}`}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapse${elems}`}
                aria-expanded="false"
                data-parent="#accordionFlushExample"
                aria-controls={`#panelsStayOpen-collapse${elems}`}
                style={{ fontSize: "14px" }}
              >
                Day {elems}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              {/* {news &&
                news.map((elem) => (
                  <div
                    id={`panelsStayOpen-collapse${elems}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`panelsStayOpen-heading${elems}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      {elem.map((elem_news) =>
                        elem_news.day === elems ? (
                          <div className="mt-3">
                            <div className="d-flex align-items-center justify-content-start">
                              <div>
                                <img
                                  src="../assets/profile.png"
                                  alt=""
                                  width="50px"
                                  height="50px"
                                />
                              </div>
                              <div
                                className="ps-2"
                                style={{ fontSize: "13px" }}
                              >
                                {elem_news.news}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                ))} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              omnis eum quibusdam dicta rerum odio sed esse consequatur commodi
              eligendi voluptas incidunt assumenda numquam quos consequuntur?
              Quisquam deleniti vel, saepe quas eum, hic non perferendis
              possimus, vitae assumenda quia sequi.
            </div>
          </div>
        ))}
    </>
  );
};

export default DayNews;

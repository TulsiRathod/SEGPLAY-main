import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";

const DayNews = ({ news, day }) => {
  const [newsArr, setNewsArr] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const dayNews = JSON.parse(localStorage.getItem("SEG_NEWS"));
  useEffect(() => {
    let temp_day = [];
    for (var i = 1; i <= day; i++) {
      temp_day.push(i);
    }
    setNewsArr(temp_day);
  }, [news]);
  return (
    <>
      {newsArr.length > 0 ? (
        newsArr.map((elem, i) => (
          // <div
          //   className="accordion-item m-0 border mb-1"
          //   style={{ borderRadius: "5px" }}
          // >
          //   <h2
          //     className="accordion-header"
          //     id={`panelsStayOpen-heading${elem}`}
          //   >
          //     <button
          //       className="accordion-button collapsed"
          //       type="button"
          //       data-bs-toggle="collapse"
          //       data-bs-target={`#panelsStayOpen-collapse${elem}`}
          //       aria-expanded="false"
          //       data-parent="#accordionFlushExample"
          //       aria-controls={`#panelsStayOpen-collapse${elem}`}
          //       style={{ fontSize: "14px" }}
          //     >
          //       Day {elem}
          //     </button>
          //   </h2>
          //   <div
          //     id={`collapseOne`}
          //     className="accordion-collapse collapse show"
          //     aria-labelledby={`heading${elem}`}
          //     data-bs-parent="#accordionExample"
          //   >
          //     {dayNews[`day${elem}`].map((el) => (
          //       <div
          //         id={`panelsStayOpen-collapse${elem}`}
          //         className="accordion-collapse collapse"
          //         aria-labelledby={`panelsStayOpen-heading${elem}`}
          //         data-bs-parent="#accordionFlushExample"
          //       >
          //         <div className="accordion-body">
          //           <div className="mt-3">
          //             <div className="d-flex align-items-center justify-content-start">
          //               <div>
          //                 <img
          //                   src={`../assets/${el.company_ticker}.png`}
          //                   width="40px"
          //                   height="40px"
          //                   style={{
          //                     borderRadius: "50%",
          //                     border: "1px solid #828282",
          //                   }}
          //                 />
          //               </div>
          //               <div
          //                 className="ps-2"
          //                 style={{
          //                   fontSize: "13px",
          //                   textTransform: "lowercase",
          //                 }}
          //               >
          //                 {el.news}
          //               </div>
          //             </div>
          //           </div>
          //         </div>
          //       </div>
          //     ))}
          //   </div>
          // </div>
          <Accordion
            // expanded={}
            expanded={
              Number(localStorage.getItem("SEG_CURRENT_DAY")) === elem
                ? true
                : expanded === `panel${i}`
            }
            onChange={handleChange(`panel${i}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ minHeight: "40px !important", height: "10px !important" }}
            >
              <Typography sx={{ width: "100%", flexShrink: 0 }}>
                <b> Day {elem}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {dayNews[`day${elem}`].map((el) => (
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
                      style={{
                        fontSize: "13px",
                        textTransform: "lowercase",
                      }}
                    >
                      {el.news}
                    </div>
                  </div>
                </div>
              ))}
              {/* <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography> */}
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <div className="d-flex justify-content-center p-4">
          <p className="text-secondary my-auto"> No News yet</p>
        </div>
      )}
    </>
  );
};

export default DayNews;

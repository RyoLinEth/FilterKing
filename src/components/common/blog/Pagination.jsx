import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../features/properties/propertiesSlice";
const Pagination = () => {

  const { length, dataPerPage } = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  const last = (length / dataPerPage).toFixed(0);

  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  const setPage = (action) => {
    if (action === "Left") {
      if (activePage !== 1) {
        setActivePage(activePage => activePage - 1)
        handlePageChange(activePage - 1);
      }
      else
        console.log("No more pages")
    }
    else if (action === "Right") {
      if (activePage !== last) {
        setActivePage(activePage => activePage + 1)
        handlePageChange(activePage + 1)
      }
      else
        console.log("No more pages")
    }

    else {
      setActivePage(action)
      handlePageChange(action)
    }
  }

  return (
    <ul className="page_navigation d-flex justify-content-center">
      <li className="page-item disabled" onClick={() => setPage("Left")}>
        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
          {" "}
          <span className="flaticon-left-arrow"></span>
        </a>
      </li>

      <div>
        {/* Render pagination buttons */}
        {Array.from({ length: Math.ceil(length / dataPerPage) }, (_, index) => {
          return (
            <li
              key={index + 1}
              onClick={() => setPage(index + 1)}
              className={`page-item ${index + 1 === activePage ? "active" : ""}`}
            >
              <a className="page-link" href="#">
                {index + 1}<span className="sr-only"></span>
              </a>
            </li>
          )
        })}
      </div>

      <li className="page-item" onClick={() => setPage("Right")}>
        <a className="page-link" href="#">
          <span className="flaticon-right-arrow"></span>
        </a>
      </li>
    </ul >
  );
};

export default Pagination;

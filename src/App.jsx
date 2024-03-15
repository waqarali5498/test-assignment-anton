import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import PageBar from "./components/PageBar";

const pagesDetail = [
  { id: 1, title: "Page 01", isChecked: false },
  { id: 2, title: "Page 02", isChecked: false },
  { id: 3, title: "Page 03", isChecked: false },
  { id: 4, title: "Page 04", isChecked: false },
  { id: 5, title: "Page 05", isChecked: false },
  // { id: 6, title: "Page 06", isChecked: false },
  // { id: 7, title: "Page 07", isChecked: false },
  // { id: 8, title: "Page 08", isChecked: false },
  // { id: 9, title: "Page 09", isChecked: false },
  // { id: 10, title: "Page 10", isChecked: false },
  // { id: 11, title: "Page 11", isChecked: false },
  // { id: 12, title: "Page 12", isChecked: false },
];

function App() {
  const [pages, setPages] = useState(pagesDetail);

  const selectedPages = pages.filter((page) => page.isChecked === true).length;
  const totalPages = pages.length;

  function toggleAll() {
    const allSelected = pages.every((page) => page.isChecked);
    setPages(pages.map((page) => ({ ...page, isChecked: !allSelected })));
  }

  function handleToggle(id) {
    setPages((page) =>
      page.map((page) =>
        page.id === id ? { ...page, isChecked: !page.isChecked } : page
      )
    );
  }

  return (
    <div className="app">
      <div className="container">
        <PageBar
          type="main-bar" ////sub-bar to pass onchange function as handletoggle and handle it in pagebar component
          onChange={toggleAll}
          totalPages={totalPages}
          selectedPages={selectedPages}
          pageTitle="All Pages"
        />
        <hr className="line-bar" />
        {pages &&
          pages.map((page) => (
            <PageBar
              type="sub-bar" //sub-bar to pass onchange function as handletoggle and handle it in pagebar component
              onChange={handleToggle}
              key={page.id}
              pageTitle={page.title}
              isChecked={page.isChecked}
              pageId={page.id}
            ></PageBar>
          ))}
        <hr className="line-bar" />
        <Button />
      </div>
    </div>
  );
}

export default App;

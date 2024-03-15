import style from "./pagebar.module.css";
function PageBar({
  pageTitle,
  onChange,
  isChecked,
  pageId,
  totalPages,
  selectedPages,
  type,
}) {
  return (
    <div className={style.pagebar}>
      <p className={style.title}>{pageTitle}</p>

      {type === "main-bar" && ( //main-bar so that it cal run toggleAll function
        <input
          className={style.checkbox}
          type="checkbox"
          checked={selectedPages == totalPages ? true : isChecked}
          name=""
          id=""
          onChange={() => onChange()}
        />
      )}

      {type === "sub-bar" && ( //sub-bar so that it can run handleToggle function
        <input
          className={style.checkbox}
          type="checkbox"
          checked={isChecked}
          name=""
          id=""
          onChange={() => onChange(pageId)}
        />
      )}
    </div>
  );
}

export default PageBar;

function EditorHeader({ title, children = <></> }) {
  return (
    <div className="edit-header-container  ">
      <div className=" justify-content-between align-items-center edit-header-sub-container">
        <div className="link-secondary cursor-pointer ">{title}</div>
        {children}
      </div>
    </div>
  );
}

export default EditorHeader;

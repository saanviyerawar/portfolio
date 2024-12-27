function Page({ children, paddingX, paddingY, background }) {
  return (
    <div
      style={{ backgroundColor: background }}
      className={`${paddingX ? "px-[10vw]" : ""} ${paddingY ? "py-[100px]" : ""}`}
    >
      {children}
    </div>
  );
}

export default Page;

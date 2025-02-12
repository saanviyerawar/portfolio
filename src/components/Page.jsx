function Page({ children, paddingX, paddingY, background }) {
  return (
    <div
      style={{ backgroundColor: background }}
      className={`
        ${paddingX ? "px-[4vw] sm:px-[6vw] md:px-[8vw] lg:px-[10vw]" : ""}
        ${paddingY ? "py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]" : ""}
      `}
    >
      {children}
    </div>
  );
}

export default Page;

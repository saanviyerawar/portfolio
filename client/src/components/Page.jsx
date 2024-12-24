import { useContext } from "react";
import { ModeContext } from "../contexts/ModeProvider";

function Page({ children, paddingX, paddingY, background }) {
  // const { mode } = useContext(ModeContext); // might use on other pages use ${mode}-page

  return (
    <div className={`${paddingX ? "px-[10vw]" : ""} ${paddingY ? "py-[100px]" : ""} ${background !== undefined ? `bg-[#${background}]` : ``}`}>
      {children}
    </div>
  )
}

export default Page;
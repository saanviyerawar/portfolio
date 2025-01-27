import { useContext } from "react";
import { ModeContext } from "../contexts/ModeProvider";
import Page from "./Page";

function SectionOne({ children }) {
  const { mode } = useContext(ModeContext);

  return (
    <Page paddingX={true} paddingY={true} background={mode === "light" ? "#C3D3A6" : "#000034"}>
      {children}
    </Page>
  );
}

export default SectionOne;

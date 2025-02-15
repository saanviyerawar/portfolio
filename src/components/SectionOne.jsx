import { useContext } from "react";
import { ModeContext } from "../contexts/ModeProvider";
import Page from "./Page";

function SectionOne({ children, id }) {
  const { mode } = useContext(ModeContext);

  return (
    <Page id={id} paddingX={true} paddingY={true} background={mode === "light" ? "#F9F5F1" : "#000034"}>
      {children}
    </Page>
  );
}

export default SectionOne;

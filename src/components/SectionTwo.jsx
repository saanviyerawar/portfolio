import { useContext } from "react";
import { ModeContext } from "../contexts/ModeProvider";
import Page from "./Page";

function SectionTwo ({ children, id }) {
  const { mode } = useContext(ModeContext);

  return (
    <Page id={id} paddingX={true} paddingY={true} background={mode === "light" ? "#F9F5F1" : "#632E42"}>
      {children}
    </Page>
  );
}

export default SectionTwo;
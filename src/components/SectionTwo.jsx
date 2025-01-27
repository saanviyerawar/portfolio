import { useContext } from "react";
import { ModeContext } from "../contexts/ModeProvider";
import Page from "./Page";

function SectionTwo ({children}) {
  const { mode } = useContext(ModeContext);

  return (
    <Page paddingX={true} paddingY={true} background={mode === "light" ? "#7092B2" : "#632E42"}>
      {children}
    </Page>
  );
}

export default SectionTwo;
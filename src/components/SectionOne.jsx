import Page from "./Page";

function SectionOne({ children, id }) {

  return (
    <Page id={id} paddingX={true} paddingY={true}>
      {children}
    </Page>
  );
}

export default SectionOne;

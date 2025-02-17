import Page from "./Page";

function SectionTwo ({ children, id }) {

  return (
    <Page id={id} paddingX={true} paddingY={true}>
      {children}
    </Page>
  );
}

export default SectionTwo;
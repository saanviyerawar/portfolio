import { useContext } from "react";
import { ModeContext } from "../contexts/ModeProvider";

function DescriptionCard({ description, borderColour }) {
  const { mode } = useContext(ModeContext);

  // Turn into bionic text
  const splitWords = description.split(" ").map((word, index) => {
    const boldPart = word.slice(0, Math.ceil(word.length / 2));
    const regularPart = word.slice(Math.ceil(word.length / 2));
    
    return (
      <span key={index}>
        <span className="font-bold">{boldPart}</span>
        {regularPart}
        {index < description.split(" ").length - 1 && " "}
      </span>
    );
  });

  return (
    <div 
      className="flex justify-center items-center text-center rounded-xl p-2 w-[100%]"
      style={{
        borderColor: borderColour ?  borderColour : (mode === "dark" ? "#9F3B47" : "#476687"),
        borderWidth: "2px",
        borderStyle: "solid"
      }}
    >
      <span>{splitWords}</span>
    </div>
  );
}

export default DescriptionCard;

import HeaderThree from "./HeaderThree";

function WorkExperienceDescription ({ workExperience }) {
  return (
    <div className="w-[100%] h-[100%] p-6 flex flex-col content-between gap-7">
      <div className="flex items-center gap-11">
        <img
          className="h-[80px] aspect-auto"
          src={`${workExperience.company}-Logo.png`}
          alt={`${workExperience.company} logo`}
        />
        <HeaderThree>{workExperience.title}</HeaderThree>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-[100%]">
        {workExperience.description.map((description, index) => (
          <div className="border border-black" key={index}>{description}</div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperienceDescription;
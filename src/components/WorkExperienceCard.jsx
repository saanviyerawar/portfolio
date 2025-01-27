import HeaderThree from "./HeaderThree";

function WorkExperienceCard({ workExperience, colour, rotate, top, onMouseEnter, onMouseLeave, onClick, selected }) {
  return (
    <div
      className={`work-experience-card flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center 
        w-[90%] md:w-[550px] h-auto md:h-[100px] p-4 md:p-5 rounded-lg 
        transform sticky self-start shadow-2xl border transition-transform duration-300 
        hover:shadow-[rgba(0,0,0,0.8)] hover:-translate-y-2 clickable ${selected ? 'border-4' : 'border border-gray-300 border-opacity-50'}`
      }
      style={{
        backgroundColor: colour,
        transform: `rotate(${rotate})`,
        top: `${top}`,
        zIndex: selected ? 10 : 1,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <img
        className="h-[80px] md:h-[100%] aspect-auto"
        src={`${workExperience.company}-Logo.png`}
        alt={`${workExperience.company} logo`}
      />
      <HeaderThree>
        {workExperience.title}
      </HeaderThree>
    </div>
  );
}

export default WorkExperienceCard;

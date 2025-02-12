function WorkExperienceCard({ workExperience, colour, rotate, top, onMouseEnter, onMouseLeave, onClick, selected }) {
  function getTopValue(topObj) {
    const width = window.innerWidth;
    if (width >= 1280) return topObj.lg || topObj.default;
    if (width >= 960) return topObj.md || topObj.default;
    if (width >= 640) return topObj.sm || topObj.default;
    return topObj.default;
  }

  const topValue = getTopValue(top);

  return (
    <div
      className={`flex flex-col md:flex-row gap-4 md:gap-10 items-center 
        2xl:w-[550px] md:w-[300px] w-full h-auto md:h-[100px] p-4 md:p-5 rounded-lg 
        transform sticky self-start shadow-2xl border transition-transform duration-300 
        hover:shadow-[rgba(0,0,0,0.8)] hover:-translate-y-2 clickable ${selected ? 'border-4' : 'border border-gray-300 border-opacity-50'}`
      }
      style={{
        backgroundColor: colour,
        transform: `rotate(${rotate})`,
        top: topValue,
        zIndex: selected ? 10 : 1,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <img
        className="h-[80px] md:h-[100%] aspect-auto"
        src={`${process.env.PUBLIC_URL}/${workExperience.company}-Logo.png`}
        alt={`${workExperience.company} logo`}
      />
      <p className="2xl:text-2xl xl:text-xl font-semibold text-center">
        {workExperience.title}
      </p>
    </div>
  );
}

export default WorkExperienceCard;

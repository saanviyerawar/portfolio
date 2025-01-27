import SkillItem from "./SkillItem";

function ProjectsSkillsSlider({ skillsList }) {
  const animationDuration = `${skillsList.length + 8}s`;

  // Double it to make it loop around
  const doubledSkillsList = [...skillsList, ...skillsList];

  return (
    <div
      className="slider"
      style={{
        "--width": "125px",
        "--height": "50px",
        "--quantity": doubledSkillsList.length,
        "--duration": animationDuration,
      }}
    >
      <div className="list">
        {doubledSkillsList.map((skill, index) => (
          <div className="item flex justify-center items-center" style={{ "--position": index + 1 }} key={index}>
            <SkillItem skillName={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSkillsSlider;

function SkillItem({ skillName }) {
  return (
    <div className="flex gap-2 w-48 h-auto items-center">
      <img src={`${process.env.PUBLIC_URL}/${skillName}-Logo.png`} alt={`${skillName} logo/icon`} className="w-[30px] h-[30px] object-contain" />
      <span>{skillName}</span>
    </div>
  );
}

export default SkillItem;
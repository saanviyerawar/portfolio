import HeaderThree from "../../../components/HeaderThree";
import SectionTwo from "../../../components/SectionTwo";

function Contact() {
  const contactPlatformList = [
    { "name": "LinkedIn", "link": "https://www.linkedin.com/in/ce-min/" },
    { "name": "Gmail", "link": "mailto:cm.pang25@gmail.com" },
    { "name": "GitHub", "link": "https://github.com/ceminpangastur" }
  ];

  return (
    <SectionTwo>
      <div className="flex flex-col items-center gap-11">
        <HeaderThree>Feel free to contact me! :)</HeaderThree>
        <div className="flex items-center justify-center gap-[100px]">
          {contactPlatformList.map((contactPlatform, index) => (
            <a href={contactPlatform.link} key={index} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[75px] h-[75px] aspect-square filter grayscale hover:grayscale-0 transition-all duration-300 
                shadow-lg hover:shadow-2xl transform hover:-translate-y-2 rounded-lg"
                src={`${process.env.PUBLIC_URL}/${contactPlatform.name}-Logo.png`}
                alt={`${contactPlatform.name} logo`}
              />
            </a>
          ))}
        </div>
      </div>
    </SectionTwo>
  );
}

export default Contact;

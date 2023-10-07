
// import the Skill component as Skill for use in this component
import Tools from "./Skill-tool"

function SkillIcon() {
    return (
        <div className="flex ">
            <div className="grid h-auto grid-cols-3 gap-10 mx-auto text-white w-80 place-content-center">
    
                <Tools source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Tools  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Tools  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Tools  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
                <Tools  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
                <Tools  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <Tools  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                <Tools  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg " alt="The logo icon for NodeJS" title="Node JS"/>
                <Tools  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg " alt="The logo icon for NodeJS" title="Node JS"/>
                <Tools  source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg " alt="The logo icon for NodeJS" title="Node JS"/>
                <Tools  source="https://cdn.icon-icons.com/icons2/2415/PNG/512/cplusplus_original_logo_icon_146581.png " alt="The logo icon for NodeJS" title="Node JS"/>
                <Tools  source="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png " alt="The logo icon for NodeJS" title="Node JS"/>
            </div>            
        </div>
    )
}
export default SkillIcon;

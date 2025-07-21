import { useState } from "react";
import { Technologies } from "../Data/skills";
import CategoryButton from "./small-components/CategoryButton";
import SkillCard from "./small-components/SkillCard";

export default function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(0);

    return (
        <div className="flex flex-col items-center w-full min-[1250px]:w-[45%] justify-center">
            <div className="flex flex-wrap gap-3 mb-6">
                {
                    Technologies.map((e, i) => (
                        <CategoryButton
                            title={e.name}
                            key={i}
                            isSelected={i === selectedSkill}
                            onClick={() => setSelectedSkill(i)}
                        />
                    ))
                }
            </div>
            <div className="grid grid-cols-4 gap-4 mb-[10%]">
                {
                    Technologies[selectedSkill].skills.map((e, i) => (
                        <SkillCard
                            title={e.title}
                            logo={e.logo}
                            key={i}
                        />
                    ))
                }
            </div>
        </div>
    );
}

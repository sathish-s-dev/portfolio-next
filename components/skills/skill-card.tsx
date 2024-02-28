import Image from "next/image";
import MotionChild from "../motion/motion-child";
import { variants } from "../motion/variants";

export function SkillCard({
  skill: { name, image, invert },
}: {
  skill: Skill;
}) {
  return (
    <MotionChild variants={variants} className="w-fit">
      <figure className="shadow-md hover:shadow-lg p-6 rounded-lg w-32 bg-slate-50/10 bg-gradient-to-r hover:scale-105 transition-all duration-200 grid place-items-center gap-2">
        <Image
          src={image}
          alt={name}
          width={45}
          height={45}
          className={invert ? "dark:invert" : ""}
        />
        <figcaption className="text-xs text-slate-700 dark:text-slate-100 font-semibold">
          {name}
        </figcaption>
      </figure>
    </MotionChild>
  );
}

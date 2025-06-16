import TiltedCard from '@/components/third-party/TiltedCard';
import { type Skills } from '@/data/skills';

interface SkillsListProps {
  skills: Skills[];
}

export default function SkillsContainer({ skills }: SkillsListProps) {
  return (
    <div className='font-inter grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-14 w-fit'>
      {skills.map((skill) => (
        <TiltedCard
          imageSrc={skill.image}
          altText={skill.title}
          captionText={skill.title}
          containerHeight='150px'
          containerWidth='150px'
          imageHeight='150px'
          imageWidth='150px'
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className='text-text-dark tracking-[-0.5px] bg-black/40 rounded-2xl m-2 px-2 py-1 font-extrabold shadow-[0_5px_30px_#06001059]'>
              {skill.title}
            </p>
          }
        />
      ))}
    </div>
  );
}

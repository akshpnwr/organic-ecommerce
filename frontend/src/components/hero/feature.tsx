interface FeatureProps {
  icon: JSX.Element;
  alt: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex group px-8 py-5 flex-col w-3/12 max-md:ml-0 max-md:w-full hover:bg-green-600 hover:text-white">
    <div className="flex grow gap-4 justify-center whitespace-nowrap">
      {icon}
      <div className="flex flex-col grow shrink-0 justify-center basis-0 w-fit">
        <div className="text-sm font-semibold  group-hover:text-white leading-3 text-zinc-900">
          {title}
        </div>
        <div className="mt-2 group-hover:text-white text-xs text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  </div>
);

export default Feature;

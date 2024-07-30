type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col gap-6 text-center">
      <h1 className="  text-[#333333] font-bold text-4xl md:text-5xl">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;

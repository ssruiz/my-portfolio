interface Props {
  title: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="mb-4 sticky top-0 z-20 bg-background/80 backdrop-blur p-6 lg:-mt-6">
      <h2 className="text-2xl font-medium -mx-6 text-teal-500">{title}</h2>
    </div>
  );
};

export default SectionHeader;

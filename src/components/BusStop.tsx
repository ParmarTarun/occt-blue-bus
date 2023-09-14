interface BusStopProps {
  title: string;
}

const BusStop = ({ title }: BusStopProps) => {
  return (
    <div className="border border-primary rounded-2xl p-4 bg-primary ">
      <div className="text-dark font-normal text-2xl">
        {title.toUpperCase()}
      </div>
    </div>
  );
};

export default BusStop;

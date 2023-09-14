interface BusStopProps {
  title: string;
}

const BusStop = ({ title }: BusStopProps) => {
  return (
    <div className="text-dark font-normal text-2xl">{title.toUpperCase()}</div>
  );
};

export default BusStop;

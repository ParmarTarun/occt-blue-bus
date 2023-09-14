interface BusStopProps {
  title: string;
}

const BusStop = ({ title }: BusStopProps) => {
  return (
    <div className="text-dark font-normal text-lg">{title.toUpperCase()}</div>
  );
};

export default BusStop;

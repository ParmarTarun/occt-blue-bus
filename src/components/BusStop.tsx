interface BusStopProps {
  title: string;
}

const BusStop = ({ title }: BusStopProps) => {
  return (
    <div className="text-light flex items-center gap-2 font-normal text-lg">
      <h3>{title.toUpperCase()}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 inline-block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default BusStop;

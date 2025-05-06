import { LogRunInterface } from "../types/LogRunTypes";

type LogRunProps = {
  data: LogRunInterface;
};

export default function LogRun({ data }: LogRunProps) {
  return (
    <div>
      <p>Miles: {data.miles}</p>
      <p>Duration: {Number(data.duration)}</p>
      <p>
        Pace:{" "}
        {parseFloat((Number(data.duration) / Number(data.miles)).toFixed(2))}
      </p>
    </div>
  );
}

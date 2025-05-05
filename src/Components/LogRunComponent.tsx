import { LogRunInterface } from "../types/LogRunTypes";

type LogRunProps = {
  data: LogRunInterface;
};

export default function LogRun({ data }: LogRunProps) {
  return (
    <div>
      <p>Miles: {data.miles}</p>
      <p>Duration: {data.duration}</p>
      <p>Pace: {data.pace}</p>
    </div>
  );
}

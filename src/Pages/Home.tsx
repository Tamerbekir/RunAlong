import { LogRunInterface } from "../types/LogRunTypes";
import { useState, useEffect } from "react";
import LogRunButton from "../Components/LogRunButton";
import DeleteLogDataButton from "../Components/DeleteLogDataButton";
import LogRunComponent from "../Components/LogRunComponent";

export default function Home() {
  const [runData, setRunData] = useState<LogRunInterface>({
    miles: "",
    duration: "",
    pace: "",
  });
  const [totalMiles, setTotalMiles] = useState(0);
  const [allRunData, setAllRunData] = useState<LogRunInterface[]>(() => {
    const storeData = localStorage.getItem("allRunData");
    return storeData ? JSON.parse(storeData) : [];
  });

  // const handleRunDataChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setRunData({ ...runData, [name]: value });
  // };

  const handleSubmitRun = () => {
    const updateRunData = [...allRunData, runData];
    const addRun = Number(runData.miles);

    if (addRun) {
      setTotalMiles((prevState) => prevState + addRun);
    }
    setAllRunData(updateRunData);
    // console.log(updateRunData);
  };

  const handleDeleteRunData = (index: number) => {
    const updateRunData = [...allRunData];
    const removeRun = updateRunData[index];
    const removeMiles = Number(removeRun.miles);

    if (removeMiles) {
      setTotalMiles((prevState) => prevState - removeMiles);
    }

    updateRunData.splice(index, 1);
    setAllRunData(updateRunData);
    console.log(index);
  };

  useEffect(() => {
    localStorage.setItem("allRunData", JSON.stringify(allRunData));
  }, [allRunData]);

  return (
    <div>
      <h1>Log Run</h1>
      <form>
        <p>Miles</p>
        <input
          type="text"
          placeholder="Miles"
          value={runData.miles}
          onChange={(event) =>
            setRunData({ ...runData, miles: event.target.value })
          }
        />
        <p>Duration</p>
        <input
          type="text"
          placeholder="Duration"
          value={runData.duration}
          onChange={(event) =>
            setRunData({ ...runData, duration: event.target.value })
          }
        />
        <p>Pace</p>
        <input
          type="text"
          placeholder="Pace"
          value={runData.pace}
          onChange={(event) =>
            setRunData({ ...runData, pace: event.target.value })
          }
        />
      </form>
      <LogRunButton type="button" text="Submit Run" onClick={handleSubmitRun} />

      {allRunData.map((data, index) => (
        <div key={index}>
          <LogRunComponent data={data} />
          <DeleteLogDataButton
            type="button"
            text="Delete Run"
            onClick={() => handleDeleteRunData(index)}
          />
        </div>
      ))}
      <h2>Total Miles</h2>
      <p>{totalMiles}</p>
    </div>
  );
}

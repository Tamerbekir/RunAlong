import { LogRunInterface } from "../types/LogRunTypes"

type TotalRunDataProp = {
    data: LogRunInterface
}

export default function TotalRunData({data}:TotalRunDataProp) {
    return (
        <div>
            <p>{data.miles}</p>
        </div>
    )
}
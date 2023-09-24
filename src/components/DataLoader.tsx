import { useState } from "react";
import { sleep } from "./AlwaysSuspend";

async function fetchData1(): Promise<string> {
  await sleep(1000);
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
}



export const DataLoader = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null)
  console.log(data)

  if (loading && data === null) {
    sleep(500).then(() => setData("boom!"));
    throw fetchData1().then(() => setData('aaa'))
  }
  return (
    <>
    <div>Data is {data}</div>
    <button className="border p-1" onClick={() => setLoading(true)}>
        load
      </button>
      </>
  )
}

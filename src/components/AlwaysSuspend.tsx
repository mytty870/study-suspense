export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const AlwaysSuspend = () => {
  console.log("AlwaysSuspend is rendered")
  throw sleep(1000)

  // return (
  //   <>
  //    <p>aaaa</p>
  //   </>
  // )
}

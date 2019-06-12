export default function (ms: number = 500): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

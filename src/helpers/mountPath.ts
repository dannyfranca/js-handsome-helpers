export default function (...args: (string | number)[]): string {
  return (
    '/' +
    args.map(val => String(val).replace(/[^a-zA-Z/\d:]+/g, '')).join('/')
  ).replace(/\/{2,}/g, '/')
}

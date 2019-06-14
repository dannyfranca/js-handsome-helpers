export default function (...args: (string | number)[]): string {
  let str = (
    '/' +
    args.map(val => String(val).replace(/[^a-zA-Z/\d:]+/g, '')).join('/')
  ).replace(/\/{2,}/g, '/')
  if (str.endsWith('/')) str = str.slice(0, -1)
  return str
}

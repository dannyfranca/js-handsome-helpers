export default function stripTags(str: string): string {
  return str.replace(/(<([^>]+)>)/ig, "")
}

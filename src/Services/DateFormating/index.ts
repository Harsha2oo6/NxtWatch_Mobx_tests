import { formatDistanceToNow } from "date-fns";

export function DurationFinder(prop: string): string {
  const date = new Date(prop);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const duration = formatDistanceToNow(date);
  const cleaned = duration.replace(/about |over |almost /g, "");

  return cleaned + " ago";
}

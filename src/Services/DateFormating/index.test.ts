import { describe, expect, test } from "vitest"; 
import { DurationFinder } from ".";

describe("DurationFinder", () => {
  test("should return '1 hour ago' for a date 1 hour ago", () => {
    const present = new Date();
    const check = new Date(present.getTime() - 1000 * 60 * 60).toISOString();

    const result = DurationFinder(check);

    expect(result).toBe("1 hour ago"); 
  });
  test("should return Invalid Date for a wrong input", () => {

    const check = "NaN"

    const result = DurationFinder(check);

    expect(result).toBe("Invalid Date"); 
  });
});

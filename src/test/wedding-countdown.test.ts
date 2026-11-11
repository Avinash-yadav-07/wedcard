import { describe, expect, it } from "vitest";
import { getCountdownParts, wedding } from "@/lib/wedding-config";

describe("wedding countdown", () => {
  it("counts down to midnight on 9 December 2026 in Prayagraj", () => {
    const target = new Date(wedding.dates.countdownTarget);
    const oneSecondBefore = new Date("2026-12-08T23:59:59+05:30");

    expect(getCountdownParts(oneSecondBefore, target)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 1 });
  });

  it("stays at zero after the wedding date has passed", () => {
    const target = new Date(wedding.dates.countdownTarget);

    expect(getCountdownParts(new Date(target.getTime() + 1000), target)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });
});
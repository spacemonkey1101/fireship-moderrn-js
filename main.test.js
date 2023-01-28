import { expect, test } from "vitest";
import { cumSum } from "./cumSum";
import { binarySearch } from "./binarySearch"

test("Cumulative sum of an array", () => {
    expect(cumSum([1,3,4])).toBe(8);
    expect(cumSum([-1,-9,-1,-2])).toBe(-13);
});

test("Binary Search", () => {
    expect(binarySearch([1,9,11],12)).toBe(-1);
    expect(binarySearch([1,9,11],11)).toBe(2);
    expect(binarySearch([1,9,11,12],12)).toBe(3);
    expect(binarySearch([1,9,11,12],0)).toBe(-1);
});

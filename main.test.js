//import supertest from "supertest";
//import app from "../app.js";
import { test, expect } from "@jest/globals";
//👉 Write your tests below here:

import { sequence } from "./main.js";

test("Testing Fibonacci 17", () => {
  const actual = sequence(17);
  const expected = 1597;
  expect(actual).toBe(expected);
});

  test("Testing Fibonacci 8", () => {
    const actual = sequence(8);
    const expected = 21;
  
    expect(actual).toBe(expected);
  });

  test("Testing Fibonacci 43", () => {
    const actual = sequence(43);
    const expected = 433494437;
  
    expect(actual).toBe(expected);
  });

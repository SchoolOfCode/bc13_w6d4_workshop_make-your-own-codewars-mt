//import supertest from "supertest";
//import app from "../app.js";
import { test, expect } from "@jest/globals";
//👉 Write your tests below here:

import { sequence } from "./main.js";

test("Testing Fibonacci 17", () => {
  const actual = sequence(num);
  const expected = 1597;

  expect(actual).toBe(expected);
});


//Test.assertEquals(fib(17), 1597, "Should have returned 1597");
//Test.assertEquals(fib(20), 6765, "Should have returned 6765");
//Test.assertEquals(fib(0), 0, "Should have returned 0");
//Test.assertEquals(fib(4), 3, "Should have returned 3");

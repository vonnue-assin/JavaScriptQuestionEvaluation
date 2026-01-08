import {
  sortStringAlphabetically,
  sortStringAlphabeticallyLocale,
} from "../links/question50";

type TestCase = { input: string; expected: string };

const testCases: TestCase[] = [
  {
    input: "JavaScript",
    expected: "JSaaipvcrt",
  },
  {
    input: "Hello world",
    expected: " Hdeellloorw",
  },
  {
    input: "",
    expected: "",
  },
  {
    input: "AAAaaa",
    expected: "AAAAaa",
  },
];

function runTests() {
  testCases.forEach((testCase, index) => {
    const { input, expected } = testCase;

    const result1 = sortStringAlphabetically(input);
    const result2 = sortStringAlphabeticallyLocale(input);

    const pass1 = result1 === expected;
    const pass2 = result2 === expected;

    console.log(
      `Test ${index + 1} (sortStringAlphabetically): ${
        pass1 ? "passed" : "failed"
      }`
    );

    console.log(
      `Test ${index + 1} (sortStringAlphabeticallyLocale): ${
        pass2 ? "passed" : "failed"
      }`
    );

    if (!pass1) {
      console.log(`  Expected: "${expected}", got: "${result1}"`);
    }
    if (!pass2) {
      console.log(`  Expected: "${expected}", got: "${result2}"`);
    }
  });
}

runTests();

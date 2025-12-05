import { expect } from "chai";
import { shuffle } from "../src/js/Shuffle.js";
describe("shuffle", () => {
  it("shuffles", () => {
    const a = [1, 2, 3];
    const b = shuffle([...a]);
    expect(b.join()).not.equal(a.join());
  });
});

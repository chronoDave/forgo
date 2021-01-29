import { JSDOM } from "jsdom";
import htmlFile from "../htmlFile";
import { run } from "./script";
import * as should from "should";

export default function componentUnmount() {
  it("renders component returning a fragment", async () => {
    const dom = new JSDOM(htmlFile(), {
      runScripts: "outside-only",
      resources: "usable",
    });
    const window = dom.window;

    run(dom);

    await new Promise<void>((resolve) => {
      window.addEventListener("load", () => {
        resolve();
      });
    });

    
  });
}

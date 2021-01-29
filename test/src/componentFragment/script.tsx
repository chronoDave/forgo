import { DOMWindow, JSDOM } from "jsdom";
import { ForgoRenderArgs, mount, rerender, setCustomEnv } from "../../../dist";

let window: DOMWindow;
let document: HTMLDocument;

function Component() {
  return {
    render(props: any, args: ForgoRenderArgs) {
      return (
        <>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </>
      );
    },
  };
}

export function run(dom: JSDOM) {
  window = dom.window;
  document = window.document;
  setCustomEnv({ window, document });

  window.addEventListener("load", () => {
    mount(<Component />, window.document.getElementById("root"));
  });
}

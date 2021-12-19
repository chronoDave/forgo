import * as forgo from "../../index.js";
import { DOMWindow, JSDOM } from "jsdom";
import { ForgoRenderArgs, mount, setCustomEnv } from "../../index.js";

let window: DOMWindow;
let document: Document;

export let mountedOn: Element;

function Component() {
  return {
    render(props: any, args: ForgoRenderArgs) {
      return <div id="hello">Hello world</div>;
    },
    mount(props: any, args: ForgoRenderArgs) {
      mountedOn = args.element.node as Element;
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

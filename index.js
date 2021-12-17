import bpmnHoverScroll from "./bpmn-hover-scroll.js";

const xml = await fetch("./complex.bpmn");

const viewer = new BpmnJS({
  container: "#diagram-container",
  additionalModules: [bpmnHoverScroll],
});
await viewer.importXML(await xml.text());

viewer.get("canvas").zoom("fit-viewport");

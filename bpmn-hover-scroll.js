function HoverScroll(canvas) {
  const container = canvas._container;

  container.addEventListener("mousemove", (evt) => {
    const viewbox = canvas.viewbox();

    const viewboxWidth = viewbox.inner.width;
    const viewboxHeight = viewbox.inner.height;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const xOffset = evt.offsetX / containerWidth;
    const yOffset = evt.offsetY / containerHeight;

    canvas.viewbox({
      x:
        viewbox.inner.x +
        xOffset * viewboxWidth -
        xOffset * (viewbox.outer.width - 50) -
        25,
      y:
        viewbox.inner.y +
        yOffset * viewboxHeight -
        yOffset * (viewbox.outer.height - 50) -
        25,
      width: viewbox.outer.width,
      height: viewbox.outer.height,
    });
  });

  container.addEventListener("mouseenter", () => {
    container.querySelector(".viewport").style.transition = "transform 0.2s";
  });

  container.addEventListener("mouseleave", () => {
    canvas.zoom("fit-viewport");
  });
}

HoverScroll.$inject = ["canvas"];

export default {
  __init__: ["hoverScroll"],
  hoverScroll: ["type", HoverScroll],
};

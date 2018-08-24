(() => {
  if (!("OffscreenCanvas" in window)) {
    return (document.body.innerText =
      "Your browser does not support OffscreenCanvas.");
  }
  const worker = new Worker("./worker.js");
  const offscreen = document
    .querySelector("canvas")
    .transferControlToOffscreen();
  worker.postMessage({ msg: "start", canvas: offscreen }, [offscreen]);
})();

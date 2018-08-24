let time = 0;
let gl;

self.onmessage = e => {
  switch (e.data.msg) {
    case "start":
      gl = e.data.canvas.getContext("webgl");
      if (gl) {
        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        loop();
      }
      break;
  }
};

function loop() {
  render();
  requestAnimationFrame(loop);
}

function render() {
  time += 1.0 / 60.0;
  const f = (Math.sin(time) + 1);
  gl.clearColor(f, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

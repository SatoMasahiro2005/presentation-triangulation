//後でちゃんとリファクタリングします！！！！！！！
import p5 from "p5";
//
const widthHeight = document.getElementById("widthHeight");

let safeArea = {
  width() {
    let w = widthHeight?.clientWidth ?? 0;
    return (w * 95) / 100;
  },
  height() {
    let h = widthHeight?.clientHeight ?? 0;
    return (h * 75) / 100;
  },
};

let graphic1 = (p: p5) => {
  let height = () => (safeArea.height() * 3) / 4;
  let width = () => (safeArea.width() * 3) / 4;
  const result =
    document.getElementById("graphic1") ?? document.createElement("div");

  p.windowResized = () => {
    p.resizeCanvas(safeArea.width(), safeArea.height());
  };

  p.setup = () => {
    let canvas = p.createCanvas(safeArea.width(), safeArea.height());
    canvas.parent(result);
    p.noFill();
  };

  p.draw = () => {
    p.background(255);
    let horizontalLine = p.line(0, height(), width(), height());
    let verticalLine = p.line(width(), height(), width(), 0);
    let diagonalLine = p.line(0, height(), width(), 0);
    let theta = p.atan2(height(), width());
    p.circle(10, 10, 10);
    p.text("theta", 10, 10);
    p.text(theta, 10, 10);
  };
};
new p5(graphic1);

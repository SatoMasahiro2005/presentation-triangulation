import p5 from "p5";

const sketch = (p: p5) => {
  // 描画色1・2
  const color1 = p.color("#fffbe3");
  const color2 = p.color("#24495c");
  // 描画色1の強さ
  let color1amount = 1;

  /** 初期化処理 */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
    p.background("#eeeeee"); // 背景色を設定
  };

  /** フレームごとの描画処理 */
  p.draw = () => {};
};

new p5(sketch);

let pageIndex = 0; //ページ番号
let getPage = (index: number) => document.getElementById(`page${index}`); //現在のページを取得
let numberOfPages: number; //多分よくないグローバル変数の使い方
let presentation =
  document.getElementById("presentation") ?? document.createElement("div"); //プレゼンテーション全体を含む要素を取得

window.onload = () => {
  numberOfPages = document.getElementById("body")?.childElementCount ?? 0; //ページ数を取得
  console.info(`number of pages: ${numberOfPages}`);
  for (let i = 0; i <= numberOfPages - 1; i++) {
    getPage(i)?.setAttribute("style", "display: none"); //全てのページを非表示にする
  }
  if (location.search == "?lastPage") pageIndex = numberOfPages - 1; //最後のページを表示する
  getPage(pageIndex)?.setAttribute("style", "display: block"); //最初のページを表示する
};

//キーボードによるページ変遷
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") transition(Direction.next);
  if (event.key === "ArrowLeft") transition(Direction.previous);
});
//クリックによるページ変遷
document.addEventListener("click", () => {
  if (document.fullscreenElement != null) {
    transition(Direction.next);
  } else {
    document.body.requestFullscreen();
  }
});
//ページ変遷本体
function transition(direction: Direction) {
  if (direction == Direction.next && pageIndex < numberOfPages - 1) {
    getPage(pageIndex)?.setAttribute("style", "display: none"); //現在のページを非表示にする
    getPage(pageIndex + 1)?.setAttribute("style", "display: block"); //次のページを表示する
    pageIndex++;
  } else if (direction == Direction.previous && 0 < pageIndex) {
    getPage(pageIndex)?.setAttribute("style", "display: none"); //現在のページを非表示にする
    getPage(pageIndex - 1)?.setAttribute("style", "display: block"); //次のページを表示する
    pageIndex--;
  }
}
//ページ変遷の方向を列挙
enum Direction {
  next,
  previous,
}

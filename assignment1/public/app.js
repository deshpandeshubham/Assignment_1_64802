const element = React.createElement("div", {
  id: "mainDiv"
}, React.createElement("div", {
  id: "nameDiv"
}, React.createElement("h1", null, "SHUBHAM DESHPANDE")), React.createElement("div", {
  id: "imgDiv"
}, React.createElement("img", {
  id: "imgID",
  src: "img01.jpg",
  alt: "My Photo",
  width: "300",
  height: "300"
}), React.createElement("br", null), React.createElement("br", null)), React.createElement("div", {
  id: "introDiv"
}, "Always Smiling :), honest and helpful ! ", React.createElement("br", null), "Well that is an informal introduction, let us talk about something technical, ", React.createElement("br", null), "Have 2 years of experience in software development, ", React.createElement("br", null), "Slightly biased towards using Java, but always ready to work on any new technology ", React.createElement("br", null), "Passionate about web development. ", React.createElement("br", null), "And yes playing video games and cricket are some of the many hobbies.", React.createElement("br", null), React.createElement("br", null)), React.createElement("div", {
  id: "gitDiv"
}, React.createElement("a", {
  id: "gitLinkID",
  href: "https://github.com/deshpandeshubham"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(element, document.getElementById('section1'));
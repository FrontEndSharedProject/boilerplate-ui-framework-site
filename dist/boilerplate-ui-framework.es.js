var index = "";
(function() {
  console.log("run in global");
})();
function handleCard(el, msg) {
  el.addEventListener("click", (ev) => {
    const target = ev.target;
    target.classList.add("text-gray-200");
    if (target.tagName.toLocaleLowerCase() === "button") {
      alert(target.innerHTML);
    }
  });
}
export { handleCard };
//# sourceMappingURL=boilerplate-ui-framework.es.js.map

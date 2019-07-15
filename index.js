function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
  console.log(deepestChild().innerHTML)
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list')
  
  for (let i = 0; i < ranks.length; i++) {
    let children = ranks[i].children; {
      for(let j = 0; j < children.length; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n;
      }
    }
  
  }
}
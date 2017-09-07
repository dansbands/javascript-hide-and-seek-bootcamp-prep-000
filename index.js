function getFirstSelector(selector) {
  let element = document.querySelector(selector)

  return element
}

function nestedTarget() {
  let element = document.getElementById('nested').querySelector('.target')

  return element
}

function increaseRankBy(n) {
  let rank = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}

function deepestChild() {
  const children = document.getElementById('grand-node').querySelectorAll('div')
  let childs = []

  for (let i = 0; i < children.length; i++) {
    let child = children[i]
    childs.push(child)
  }

  return childs.pop()



}

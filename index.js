function getFirstSelector(selector) {
  const element = document.querySelector(selector)

  return element
}

function nestedTarget() {
  const a = document.querySelector('#nested .target')

  return a
}

//Define a function increaseRankBy(n) that increases
//the ranks in all of the .ranked-lists by n.
//(You might need to make use of parseInt()


function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
  }

  return lis
}

function deepestChild() {
  const b = document.querySelectorAll('#grand-node div')

  for (let i = 0; i < b.length; i++) {
    if (i === b.length-1) {
        return b[i]
    }
  }
}

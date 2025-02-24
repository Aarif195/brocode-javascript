// Count Program
const decreasebtn = document.getElementById('decreaseBtn');
const resetbtn = document.getElementById('resetBtn');
const increasebtn = document.getElementById('increaseBtn');
const countlabel = document.getElementById('countlabel');
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countlabel.textContent = count;
}

decreaseBtn.onclick = function () {
  // console.log(decreaseBtn)
  if (count > 0) {
    count--;
    countlabel.textContent = count;

  }
  // count--;
}

resetBtn.onclick = function () {
  count = 0;
  countlabel.textContent = count;
}
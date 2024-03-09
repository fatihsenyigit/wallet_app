const salary = document.querySelector("#income");
const ekle = document.querySelector(".btn-green");
const kaydet = document.querySelector(".btn");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const expense = document.querySelector("#expense");
const remaining = document.querySelector(".remaining");
const deleteBtn = document.querySelector(".fa-trash");
ekle.addEventListener("click", () => {
  document.querySelector(".salary").textContent = salary.value;
});
kaydet.addEventListener("click", () => {
    document.querySelector(".container-4-2").style.visibility = "visible"
  document.querySelector(".date").textContent = date.value;
  document.querySelector(".harcama").textContent = expense.value;
  document.querySelector(".amount").textContent = amount.value;
  document.querySelector(".container-4-2").style.backgroundColor =
    "rgba(128, 128, 128, 0.901)";
  document.querySelector(".expenses").textContent = amount.value;
  remaining.textContent = salary.value - amount.value;
  if (salary.value > amount.value) {
    remaining.style.color = "green";
  } else if (salary.value === amount.value) {
    remaining.style.color = "orange";
    remaining.style.fontWeight = "bolder";
  } else {
    remaining.style.color = "red";
  }
});
deleteBtn.addEventListener("click", () => {
  document.querySelector(".container-4-2").style.visibility = "hidden"
});




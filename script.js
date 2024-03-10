// selectors
const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");
const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

// variables
let gelirler = 0;
let harcamaListesi = [];

// ekle formu

window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || [];
  harcamaListesi.forEach((element) => {
    harcamayiDomaYaz(element);
  });
  gelirinizTd.textContent = gelirler;
  hesaplaVeGuncelle();
  tarihInput.valueAsDate = new Date();
});

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler += Number(gelirInput.value);
  console.log(gelirler);
  ekleFormu.reset();
  localStorage.setItem("gelirler", gelirler);
  hesaplaVeGuncelle();
  // gelirinizTd.textContent = gelirler;
});

// harcama formu
const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("date");
const miktarInput = document.getElementById("amount");
const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  const yeniHarcama = {
    tarih: tarihInput.value,
    miktar: miktarInput.value,
    alan: harcamaAlaniInput.value,
    id: new Date().getTime(),
  };
  harcamaListesi.push(yeniHarcama);
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));
  harcamayiDomaYaz(yeniHarcama);
  harcamaFormu.reset();
  tarihInput.valueAsDate = new Date();
  hesaplaVeGuncelle();
});

const harcamayiDomaYaz = ({ id, miktar, alan, tarih }) => {
  const tr = document.createElement("tr");

  const createTd = (content) => {
    const td = document.createElement("td");
    td.textContent = content;
    return td;
  };

  const createLastTd = () => {
    const td = document.createElement("td");
    const iElement = document.createElement("i");
    iElement.id = id;
    iElement.className = "fa-solid fa-trash-can text-danger";
    iElement.type = "button";
    td.appendChild(iElement);
    return td;
  };

  tr.append(createTd(tarih), createTd(alan), createTd(miktar), createLastTd());

  harcamaBody.append(tr);
};

const hesaplaVeGuncelle = () => {
  const giderler = harcamaListesi.reduce((toplam, harcama) => toplam + Number(harcama.miktar), 0);
  giderinizTd.textContent = giderler;
  gelirinizTd.textContent = gelirler;
  kalanTd.textContent = gelirler - giderler
}
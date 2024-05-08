// generate 16 digits unique Id
let digits = "0123456789abcdef";
let uuid = "";
for (let item of digits) {
  uuid += digits[Math.floor(Math.random() * digits.length)];
}
// console.log(uuid);

// store data in userData object
let userData = {
  name: "",
  date: "",
  address: "",
  contact: "",
};

let nameEl = document.getElementById("name");
nameEl.addEventListener("change", function (event) {
  userData.name = event.target.value;
});

let dateEl = document.getElementById("date");
dateEl.addEventListener("change", function (event) {
  userData.date = event.target.value;
});

let addressEl = document.getElementById("address");
addressEl.addEventListener("change", function (event) {
  userData.address = event.target.value;
});

let contactEl = document.getElementById("contact");
contactEl.addEventListener("change", function (event) {
  userData.contact = event.target.value;
});

let myFormEl = document.getElementById("myForm");
myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    nameEl.value === "" ||
    dateEl.value === "" ||
    addressEl.value === "" ||
    contactEl.value === ""
  ) {
    alert("Please fill all required fields");
  } else if (contactEl.value.length < 10 || contactEl.length > 10) {
    alert("contact no. should be 10 digits");
  } else {
    let formContainerEl = document.getElementById("formContainer");
    formContainerEl.style.opacity = "0.2";
    let cardContainerEl = document.getElementById("cardContainer");
    cardContainerEl.style.display = "block";
    let { name, date, address, contact } = userData;
    cardContainerEl.innerHTML = `  
    <div class="card">
        <div class="img-wrap">
        <img src="./Img/lion.png" class="lion-img" alt="img" />
        <img src="./Img/gov.png" class="gov-img" alt="img" />
        <img src="./Img/adhar.png" class="adhar-img" alt="img" />
        </div>
        <div class="inner-wrap">
        <img src="./Img/images.png" class="profile-img" />
        <div class="details-section">
            <p>Name: ${name.toUpperCase()}</p>
            <p>DOB: ${date}</p>
            <p>Address: ${address.toUpperCase()}</p>
            <p>Contact No: ${contact}</p>
            <p>UID: ${uuid.toUpperCase()}</p>
        </div>
        <img src="./Img/qr.png" class="qr-img" />
        </div>
    </div>
`;
  }
});

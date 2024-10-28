const form = document.getElementById("form");

let api = "https://671b161cacf9aa94f6ac880d.mockapi.io/telegram/users";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    naem: form.name.value,
    phone_number: form.phone_number.value,
    password: form.password.value,
  };
  postUser(data);
});

function postUser(data) {
  fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      localStorage.setItem("token", "has be token jenereted");
      localStorage.setItem("password", "has be token password");
      setTimeout(() => {
        window.location.href = "/src/index.html";
      }, 500);
    })
    .catch((error) => console.log(error));
}
document
  .getElementById("sign")
  .addEventListener(
    "click",
    () => (window.location.href = "/src/authorization_login.html")
  );

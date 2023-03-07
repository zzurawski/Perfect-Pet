// signs up and logs on
const loginHandler = async function (event) {
  event.preventDefault();

  const em = document.querySelector("#inputEmail");
  const pass = document.querySelector("#inputPassword");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: em.value,
      password: pass.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (response.ok) {
    console.log(data);
    document.location.replace("/profile");
  } else {
    console.log(data);
    alert(data.message);
  }
};

const signupHandler = async function (event) {
  event.preventDefault();
  const user = document.querySelector("#inputUser");
  const em = document.querySelector("#inputEmail2");
  const pass = document.querySelector("#inputPassword2");
  console.log(user);

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      username: user.value,
      email: em.value,
      password: pass.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (response.ok) {
    console.log(data);
    document.location.replace("/profile");
  } else {
    console.log(data);
    alert(data.message);
  }
};
document
  .querySelector("#login-section")
  .addEventListener("submit", loginHandler);

document.querySelector("#signupnow").addEventListener("submit", signupHandler);

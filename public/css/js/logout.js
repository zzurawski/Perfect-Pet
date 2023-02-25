const logoutFunc = async function () {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("logout failure");
  }
};

document.querySelector("logouttime").addEventListener("click", logoutFunc);

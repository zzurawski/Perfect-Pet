const newpethandler = async function (event) {
  event.preventDeafult();
  const name = document.getElementById("petnameinput").value;
  const age = document.getElementById("petageinput").value;
  const gender = document.getElementById("pet-gender").value;

  await fetch(`/api/pet`, {
    method: "POST",
    body: JSON.stringify({
      name,
      age,
      gender,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (response.ok) {
    console.log(data);
    document.location.replace("/profile");
  } else {
    alert(data.message);
  }
};

document
  .querySelector("#petcreation")
  .addEventListener("submit", newpethandler);

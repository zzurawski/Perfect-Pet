// creates new pet as form data, img must be read as form data
const newpethandler = async function (event) {
  event.preventDefault();
  const name = document.getElementById("petnameinput").value;
  const age = document.getElementById("petageinput").value;
  const gender = document.getElementById("pet-gender").value;
  const description = document.getElementById("petdesc").value;
  const image = document.getElementById("formFile");

  const formData = new FormData();

  formData.append("name", name);
  formData.append("age", age);
  formData.append("gender", gender);
  formData.append("description", description);
  formData.append("file", image.files[0]);

  console.log("click");

  const response = await fetch(`/api/pet`, {
    method: "POST",
    body: formData,
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

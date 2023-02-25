const id = document.getElementById("petone").value;

console.log(id);

const deleteHandle = async function () {
  await fetch(`/api/pet/${id}`, {
    method: "DELETE",
  });
  document.location.replace;
};

document.querySelector("#deleteme").addEventListener("click", deleteHandle);

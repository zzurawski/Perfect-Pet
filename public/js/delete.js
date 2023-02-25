const id = document.getElementById("petone").value;

console.log(id);

const deleteHandle = async function () {

  console.log(id);
  
  await fetch(`/api/pet/${id}`, {
    method: "DELETE",
  });
  document.location.replace('/profile');
};

document.querySelector("#deleteme").addEventListener("click", deleteHandle);

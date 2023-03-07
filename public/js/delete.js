// deletes pet and adds listener to buttons 
const deletebutton = document.querySelectorAll(".deleteme");
deletebutton.forEach((button) => {
  button.addEventListener("click", async function (event) {
    console.log("click");
    const id = event.target.dataset.id;
    await fetch(`/api/pet/${id}`, {
      method: "DELETE",
    });
    document.location.replace("/profile");
  });
});

// console.log(id);

// const deleteHandle = async function () {

//   console.log(id);

//   await fetch(`/api/pet/${id}`, {
//     method: "DELETE",
//   });
//   document.location.replace('/profile');
// };

// document.querySelector("#deleteme").addEventListener("click", deleteHandle);

// handles comments, unused left for possible future use
const commentHandler = async function (event) {
  event.preventDeafult();
  const petId = document.querySelector().value;
  const body = document.querySelector().value;

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        petId,
        body,
      }),
      headers: {
        "Content-Type": "application/jason",
      },
    });
    document.location.reload();
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentHandler);


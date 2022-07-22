fetch("/currentuser")
  .then((response) => response.json())
  .then((data) => {
   document.getElementById("usuario").innerHTML = data.username;
  });
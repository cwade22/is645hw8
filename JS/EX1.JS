/*
Display list of paintings
*/
//get json list from website
//fetch
fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
//get the content from json
  .then(response => response.json()) 
  //get and return content
  .then(paintings => {
    const paintingsElement = document.getElementById("paintings");
    paintings.forEach(painting => {
      const paintingElement = document.createElement("tr");
      paintingElement.innerHTML = `<td>
        ${painting.name}
        </td>
        <td>
        ${painting.year}
        </td>
        <td>
        ${painting.artist}
        </td>`;
      paintingsElement.appendChild(paintingElement);
    });
  });
 
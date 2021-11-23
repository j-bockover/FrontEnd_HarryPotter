//javascript for the spells tab
//using the fedeperin API

let variable = document.getElementsByTagName
console.log(variable)
$(document).ready(() => {
  const url = "https://fedeperin-harry-potter-api-en.herokuapp.com/spells";

  const addSpellToDOM = (item) => {
    $("#card").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          paddingTop: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingBottom: "30px",
          color: "black",
        })

        // .append($(`<img src='${item.imageUrl}'>`))
        //.append($(`<div id = '${item.id}'> `))
        .append($("<h3>").text(item.spell))
        .append($("<p>").text(item.use))
        .on("mouseover", function () {
          $(this).css({
            backgroundColor: "#004170",
            color: "white",
          });
        })
        .on("mouseout", function () {
          $(this).css({
            backgroundColor: "#17a2b8",
            color: "black",
          });
        })
    );
    

  };

  // Fetch all characters using the Promise Implementation
  const fetchAllSpells = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.group("Fetching All HP Spells w/ Promise Implementation");
        console.log("Data", data);
        data.forEach((item) => {
          addSpellToDOM(item);
        });

let val = Object.keys.splice(0,1);
console.log(val);




        console.groupEnd();
      })
      .catch((error) =>
        console.error("An error occurred please try again", error)
      );
  };
  fetchAllSpells(url);
});



// Here's the initial data. Again: don't worry about persistence :)
data = [
  { name: "Mark-Paul Gosselaar", photo_url: "" },
  { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
  { name: "Alf", photo_url: "img/avatars/alf.png" },
  { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
  { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
  { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
  { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
  { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
];

function addCelebCards() {
  var celebCards = "";
  for (var i = 0, length = data.length; i < length; i++) {
    currentCeleb = data[i];
    // If card has no image, set to default image
    if (currentCeleb.photo_url == ""){
      currentCeleb.photo_url = "img/default.png";
    }
    celebCards += "<div class='card'><img src='"+currentCeleb.photo_url+"'></img><h3>"+
                    currentCeleb.name+"</h3></div>";
  }
  $('#celeb-content').html(celebCards);
};

$(document).ready(function(){
  addCelebCards();
});

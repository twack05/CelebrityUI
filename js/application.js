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

// List celebs in order shown in mockup
data = data.reverse();

// Generate Celeb Cards from data
function addCelebCards() {
  var celebCards = "";
  for (var i = 0, length = data.length; i < length; i++) {
    currentCeleb = data[i];
    // If card has no image, set to default image
    if (currentCeleb.photo_url == ""){
      currentCeleb.photo_url = "img/default.png";
    }
    celebCards += "<div class='card'><img src='"+currentCeleb.photo_url+"' class='photo'></img><h3>"+
                    currentCeleb.name+"</h3><img src='img/close.png' id='"+i+"' class='close'></img></div>";
  }
  $('#celeb-content').html(celebCards);
};

function addNewCeleb(name, photo_url){
  data.unshift({name: name, photo_url: photo_url});
};

function removeCeleb(id){
  data.splice(id, 1);
};

// Set up unique jQuery for each close button so it only deletes the card that is clicked
function setJquery(){
  for (var i = 0, length = data.length; i < length; i++) {
    $("#"+i+"").on('click', function(e){
      e.preventDefault();
      removeCeleb(this.id);
      addCelebCards();
      setJquery();
    });
  }
};

$(document).on('submit', 'form', function(e){
  e.preventDefault();
  var name = $("input[name='name']").val();
  var photo_url = $("input[name='photo_url']").val();
  addNewCeleb(name, photo_url);
  addCelebCards();
  setJquery();
  // Clear input values after submit
  $("input[name='name']").val('');
  $("input[name='photo_url']").val('');
});


$(document).ready(function(){
  addCelebCards();
  setJquery();
});

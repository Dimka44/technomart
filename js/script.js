var link = document.querySelector(".link");
var modal = document.querySelector(".modal");
var name = modal.querySelector("[name=nam]");
var closeModal = modal.querySelector(".close");
var modal2 = document.querySelector(".modal-catalog");

window.onload = function() {
  alert( document.getElementById('name') != null );
}

function openModal(e) {
  e.preventDefault();
  modal.classList.toggle("open");
  nam.focus();
}

function openModal2(e) {
  e.preventDefault();
  modal-catalog.classList.toggle("open")
}

link.addEventListener("click", function(e) {
  openModal(e);
  openModal2(e);
});

closeModal.addEventListener('click', function(){
  modal.classList.remove('open');
});









var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 57.789126, lng: 40.941464},
          zoom: 16
        });

        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  		var beachMarker = new google.maps.Marker({
    	position: {lat: 57.789126, lng: 40.941464},
   		map: map,
    	icon: image
  });
      }
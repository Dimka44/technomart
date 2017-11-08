var link = document.querySelector('.link');
var modal = document.querySelector(".modal");
var name = modal.querySelector("[name=nam]");
var closeModal = modal.querySelector('.close');


function openModal(e) {
  e.preventDefault();
  modal.classList.add("open");
  }

window.onload = function(e){
if(document.getElementsByTagName('modal').name) alert('форма есть')
}


link.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.toggle("open");
  nam.focus();
});

closeModal.addEventListener('click', function(){
  modal.classList.remove('open');
});




//вторая модалка//
var link2 = document.querySelector('.link');
var modal2 = document.querySelector(".modal-catalog");


function openModal(e) {
  e.preventDefault();
  modal-catalog.classList.add("open");
  }


link.addEventListener("click", function(e) {
  e.preventDefault();
  modal2.classList.toggle("open");
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
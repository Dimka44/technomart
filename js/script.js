link.addEventListener("click", function(e) {
  OpenModal('.link', '.modal')
});

(function OpenModal(link, modal) {
var link = document.querySelector('.link');
var modal = document.querySelector(".modal");
var name = modal.querySelector("[name=nam]")
var closeModal = modal.querySelector('.close');

link.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.toggle("open");
  nam.focus();
});

closeModal.addEventListener('click', function(){
  modal.classList.remove('open');
});
})



var link2 = document.querySelector('.link2');
var modal2 = document.querySelector(".modal-catalog");
var closeModal2 = modal2.querySelector('.close2');

link2.addEventListener("click", function(e) {
	e.preventDefault();
	modal2.classList.toggle("open2");
});

closeModal2.addEventListener('click', function(){
	modal2.classList.remove('open2');
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
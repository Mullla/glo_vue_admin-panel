$(document).ready(() => {
    let show = true;
	let countbox = ".benefits";
	$(window).on("scroll load resize", () => {
		if (!show) return false;   
		let w_top = $(window).scrollTop();     
		let e_top = $(countbox).offset().top; 
		let w_height = $(window).height();        
		let d_height = $(document).height();      
		let e_height = $(countbox).outerHeight(); 
		if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
			$(".benefits__number").spincrement({
				thousandSeparator: "",
				duration: 4000
			});
			show = false;
		}
    });
/*
    let address = "Vitaliya Shymanovs'koho St, 2, Kyiv, Ukraine";
    $(".google-map").gMap({
        address: address,
        zoom: 12,
        maptype: "ROADMAP",
        markers: [{
            address: address,
            maptype: "ROADMAP",
            icon: {
                image: "img/map-marker.png",
                iconsize: [36, 50],
                iconanchor: [18, 50]
            }
        }],
        controls: {
            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false
        }
    });*/

    $("#header-button").click(() => {
        $("html, body").stop().animate({
            scrollTop: $(".form").offset().top - ($(window).height() / 5)
        }, 777);
    });

    $("#button, #modal-callme__button").click(() => {
        $.LoadingOverlay("show");
        setTimeout(() => {
            $.LoadingOverlay("hide");
            $("#modal-done").modal();
        }, 1000);
        return false;
    });
});
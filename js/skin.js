// JavaScript Document

$(function(){

var selector = '.nav li a';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

	obj.dd.on('click', function(event){
		$(this).toggleClass('active');
		return false;
	});

	//...

	$(function() {

		var dd = new DropDown( $('#dd') );

		$(document).click(function() {
			// all dropdowns
			$('.wrapper-dropdown-1').removeClass('active');
		});

	});

function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text('Gender: ' + obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}
(function(window, document, $) {
    'use strict';	
	$(document).ready(function() {
		var $sidebar = $('.app-sidebar'),
		$sidebar_content = $('.sidebar-content'),
		$wrapper = $('.wrapper');
        var sidebar_content = document.querySelector('.sidebar-content');
        var ps = new PerfectScrollbar(sidebar_content, {
		  	wheelSpeed: 10,
		  	wheelPropagation: true,
		  	minScrollbarLength: 5
		});

		$sidebar_content.on('click', '.navigation-main .nav-item a',function(){
            var $this = $(this),
            listItem = $this.parent('.nav-item');
            if(listItem.hasClass('has-sub') && listItem.hasClass('open')){
                collapse(listItem);
            }
            else{
                if(listItem.hasClass('has-sub')){
                    expand(listItem);
                }
                if ($sidebar_content.data('collapsible')) {
                    return false;
                }
                else {
                    var openListItems = listItem.siblings('.open');
                    collapse(openListItems);
                    listItem.siblings('.open').find('.nav-item.open').removeClass('open');
                }
            }
        });

		function collapse($listItem, callback) {
            var $subList = $listItem.children('.submenu-content');
            $subList.show().slideUp(200, function() {
                $(this).css('display', '');
                $(this).find('.menu-item').removeClass('is-shown');
                $listItem.removeClass('open');
                if (callback) {
                    callback();
                }
            });
        }
        function expand($listItem, callback) {
            var $subList = $listItem.children('.submenu-content');
            var $children = $subList.children('.menu-item').addClass('is-hidden');
            $listItem.addClass('open');
            $subList.hide().slideDown(200, function() {
                $(this).css('display', '');
                if (callback) {
                    callback();
                }
            });
            setTimeout(function() {
                $children.addClass('is-shown');
                $children.removeClass('is-hidden');
            }, 0);
        }
        $('.nav-toggle').on('click',function(){
            var $this = $(this),
            toggle_icon= $this.find('.toggle-icon'),
            toggle = toggle_icon.attr('data-toggle');
            if(toggle === 'expanded'){
                $wrapper.addClass('nav-collapsed');
                $('.nav-toggle').find('.toggle-icon').removeClass('ik-more-vertical').addClass('ik-list');
                toggle_icon.attr('data-toggle', 'collapsed');
            }
            else{
                $wrapper.removeClass('nav-collapsed menu-collapsed');
                $('.nav-toggle').find('.toggle-icon').removeClass('ik-list').addClass('ik-more-vertical');
                toggle_icon.attr('data-toggle', 'expanded');
            }
        });


		$sidebar.on('mouseenter', function() {
            if($wrapper.hasClass('nav-collapsed')){
                $wrapper.removeClass('menu-collapsed');
                var $listItem = $('.navigation-main .nav-item.nav-collapsed-open'),
                $subList = $listItem.children('.submenu-content');

                $subList.hide().slideDown(300, function() {
                    $(this).css('display', '');
                });
                $sidebar_content.find('.nav-item.active').parents('.nav-item').addClass('open');
                $listItem.addClass('open').removeClass('nav-collapsed-open');
            }
        }).on('mouseleave', function(event) {
            if($wrapper.hasClass('nav-collapsed')){
                $wrapper.addClass('menu-collapsed');
                var $listItem = $('.navigation-main .nav-item.open'),
                $subList = $listItem.children('.submenu-content');
                $listItem.addClass('nav-collapsed-open');
                $subList.show().slideUp(300, function() {
                    $(this).css('display', '');
                });
                $listItem.removeClass('open');
            }
        });

        if ($(window).width() < 992) {
            $sidebar.addClass('hide-sidebar');
            $wrapper.removeClass('nav-collapsed menu-collapsed');
        }
        $( window ).resize(function() {
            if ($(window).width() < 992) {
                $sidebar.addClass('hide-sidebar');
                $wrapper.removeClass('nav-collapsed menu-collapsed');
            }
            if ($(window).width() > 992) {
                $sidebar.removeClass('hide-sidebar');
                if( $('.toggle-icon').attr('data-toggle') === 'collapsed' &&  $wrapper.not('.nav-collapsed menu-collapsed')){
                    $wrapper.addClass('nav-collapsed menu-collapsed');
                }
            }
        });

        $(document).on('click', '.navigation li:not(.has-sub)', function(){
            if( $(window).width() < 992 ){
                $sidebar.addClass('hide-sidebar');
            }
        });

        $(document).on('click', '.logo-text', function(){
            if( $(window).width() < 992 ){
                $sidebar.addClass('hide-sidebar');
            }
        });


        $('.mobile-nav-toggle').on('click',function(e){
            e.stopPropagation();
            $sidebar.toggleClass('hide-sidebar');
        });

        $('html').on('click', function (e) {
            if ($(window).width() < 992) {
                if (!$sidebar.hasClass('hide-sidebar') && $sidebar.has(e.target).length === 0) {
                    $sidebar.addClass('hide-sidebar');
                }
            }
        });

        $('#sidebarClose').on('click', function(){
            $sidebar.addClass('hide-sidebar');
        });

		$('[data-toggle="tooltip"]').tooltip();
		$("#checkbox_select_all").on('click', function() {
			var items=document.getElementsByName('item_checkbox');
			for(var i=0; i<items.length; i++){
				if(items[i].type=='checkbox')
					items[i].checked=true;
				$(items).parent().parent().addClass('selected');
			}
		});
		$("#checkbox_deselect_all").on('click', function() {
			var items=document.getElementsByName('item_checkbox');
			for(var i=0; i<items.length; i++){
				if(items[i].type=='checkbox')
					items[i].checked=false;
				$(items).parent().parent().removeClass('selected');
			}
		});

		$("#quick-search").keyup(function () {
	        var srch = $(this).val().trim().toLowerCase();
	        $(".app-item").hide().filter(function () {
	            return $(this).html().trim().toLowerCase().indexOf(srch) != -1;
	        }).show();
	    });

	    $('.list-item input:checkbox').change(function(){
		    if($(this).is(":checked")) {
		        $(this).parent().parent().addClass('selected');
		    } else {
		        $(this).parent().parent().removeClass('selected');
		    }
		});

		$('#navbar-fullscreen').on('click', function(e) {
	        if (typeof screenfull != 'undefined'){
	            if (screenfull.enabled) {
	                screenfull.toggle();
	            }
	        }
	    });

        $('#selectall').click(function() {
            if ($(this).is(':checked')) {
                $('.select_all_child:checkbox').attr('checked', true);
            } else {
                $('.select_all_child:checkbox').attr('checked', false);
            }
        });


        $(".list-item-wrap .list-item .list-title a").on('click', function(e) {
            $('.list-item.quick-view-opened').not(this).removeClass('quick-view-opened');    
            $(this).parents().parent('.list-item').toggleClass('quick-view-opened');
        });

        $(document).on('click', function(event) {
            if (!$(event.target).closest('.list-item').length)  {
                $(".list-item").removeClass("quick-view-opened");
            }
        });


	    if (typeof screenfull != 'undefined'){
	        if (screenfull.enabled) {
	            $(document).on(screenfull.raw.fullscreenchange, function(){
	                if(screenfull.isFullscreen){
	                    $('#navbar-fullscreen').find('i').toggleClass('ik-minimize ik-maximize');
	                }
	                else{
	                    $('#navbar-fullscreen').find('i').toggleClass('ik-maximize ik-minimize');
	                }
	            });
	        }
	    }

        $(".minimize-widget").on('click', function() {
            var $this = $(this);
            var port = $($this.parents('.widget'));
            var card = $(port).children('.widget-body').slideToggle();
            $(this).toggleClass("ik-minus").fadeIn('slow');
            $(this).toggleClass("ik-plus").fadeIn('slow');
        });
        $(".remove-widget").on('click', function() {
            var $this = $(this);
            $this.parents('.widget').animate({
                'opacity': '0',
                '-webkit-transform': 'scale3d(.3, .3, .3)',
                'transform': 'scale3d(.3, .3, .3)'
            });
            setTimeout(function() {
                $this.parents('.widget').remove();
            }, 800);
        });

        $(".card-header-right .card-option .action-toggle").on('click', function() {
            var $this = $(this);
            if ($this.hasClass('ik-chevron-right')) {
                $this.parents('.card-option').animate({
                    'width': '28px',
                });
            } else {
                $this.parents('.card-option').animate({
                    'width': '90px',
                });
            }
            $(this).toggleClass("ik-chevron-right").fadeIn('slow');
        });
        $(".card-header-right .close-card").on('click', function() {
            var $this = $(this);
            $this.parents('.card').animate({
                'opacity': '0',
                '-webkit-transform': 'scale3d(.3, .3, .3)',
                'transform': 'scale3d(.3, .3, .3)'
            });
            setTimeout(function() {
                $this.parents('.card').remove();
            }, 800);
        });
        $(".card-header-right .minimize-card").on('click', function() {
            var $this = $(this);
            var port = $($this.parents('.card'));
            var card = $(port).children('.card-body').slideToggle();
            $(this).toggleClass("ik-minus").fadeIn('slow');
            $(this).toggleClass("ik-plus").fadeIn('slow');
        });

        $('.task-list').on('click', 'li.list', function() {
            $(this).toggleClass('completed');
        });
        

	 //    $(".list-item input:checkbox").change(function () {
		//     $(this).parent().parent().toggleClass('selected', this.checked);
		// });
	});
})(window, document, jQuery);
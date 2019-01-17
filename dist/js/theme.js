! function(e, s, i) {
    "use strict";
    i(s).ready(function() {
        function a(e, s) {
            e.children(".submenu-content").show().slideUp(200, function() {
                i(this).css("display", ""), i(this).find(".menu-item").removeClass("is-shown"), e.removeClass("open"), s && s()
            })
        }
        var n = i(".app-sidebar"),
            t = i(".sidebar-content"),
            l = i(".wrapper"),
            o = s.querySelector(".sidebar-content");
        new PerfectScrollbar(o, {
            wheelSpeed: 10,
            wheelPropagation: !0,
            minScrollbarLength: 5
        });
        t.on("click", ".navigation-main .nav-item a", function() {
            var e = i(this).parent(".nav-item");
            if (e.hasClass("has-sub") && e.hasClass("open")) a(e);
            else {
                if (e.hasClass("has-sub") && function(e, s) {
                        var a = e.children(".submenu-content"),
                            n = a.children(".menu-item").addClass("is-hidden");
                        e.addClass("open"), a.hide().slideDown(200, function() {
                            i(this).css("display", ""), s && s()
                        }), setTimeout(function() {
                            n.addClass("is-shown"), n.removeClass("is-hidden")
                        }, 0)
                    }(e), t.data("collapsible")) return !1;
                a(e.siblings(".open")), e.siblings(".open").find(".nav-item.open").removeClass("open")
            }
        }), i(".nav-toggle").on("click", function() {
            var e = i(this).find(".toggle-icon");
            "expanded" === e.attr("data-toggle") ? (l.addClass("nav-collapsed"), i(".nav-toggle").find(".toggle-icon").removeClass("ik-toggle-right").addClass("ik-toggle-left"), e.attr("data-toggle", "collapsed")) : (l.removeClass("nav-collapsed menu-collapsed"), i(".nav-toggle").find(".toggle-icon").removeClass("ik-toggle-left").addClass("ik-toggle-right"), e.attr("data-toggle", "expanded"))
        }), n.on("mouseenter", function() {
            if (l.hasClass("nav-collapsed")) {
                l.removeClass("menu-collapsed");
                var e = i(".navigation-main .nav-item.nav-collapsed-open");
                e.children(".submenu-content").hide().slideDown(300, function() {
                    i(this).css("display", "")
                }), t.find(".nav-item.active").parents(".nav-item").addClass("open"), e.addClass("open").removeClass("nav-collapsed-open")
            }
        }).on("mouseleave", function(e) {
            if (l.hasClass("nav-collapsed")) {
                l.addClass("menu-collapsed");
                var s = i(".navigation-main .nav-item.open"),
                    a = s.children(".submenu-content");
                s.addClass("nav-collapsed-open"), a.show().slideUp(300, function() {
                    i(this).css("display", "")
                }), s.removeClass("open")
            }
        }), i(e).width() < 992 && (n.addClass("hide-sidebar"), l.removeClass("nav-collapsed menu-collapsed")), i(e).resize(function() {
            i(e).width() < 992 && (n.addClass("hide-sidebar"), l.removeClass("nav-collapsed menu-collapsed")), i(e).width() > 992 && (n.removeClass("hide-sidebar"), "collapsed" === i(".toggle-icon").attr("data-toggle") && l.not(".nav-collapsed menu-collapsed") && l.addClass("nav-collapsed menu-collapsed"))
        }), i(s).on("click", ".navigation li:not(.has-sub)", function() {
            i(e).width() < 992 && n.addClass("hide-sidebar")
        }), i(s).on("click", ".logo-text", function() {
            i(e).width() < 992 && n.addClass("hide-sidebar")
        }), i(".mobile-nav-toggle").on("click", function(e) {
            e.stopPropagation(), n.toggleClass("hide-sidebar")
        }), i("html").on("click", function(s) {
            i(e).width() < 992 && (n.hasClass("hide-sidebar") || 0 !== n.has(s.target).length || n.addClass("hide-sidebar"))
        }), i("#sidebarClose").on("click", function() {
            n.addClass("hide-sidebar")
        }), i('[data-toggle="tooltip"]').tooltip(), i("#checkbox_select_all").on("click", function() {
            for (var e = s.getElementsByName("item_checkbox"), a = 0; a < e.length; a++) "checkbox" == e[a].type && (e[a].checked = !0), i(e).parent().parent().addClass("selected")
        }), i("#checkbox_deselect_all").on("click", function() {
            for (var e = s.getElementsByName("item_checkbox"), a = 0; a < e.length; a++) "checkbox" == e[a].type && (e[a].checked = !1), i(e).parent().parent().removeClass("selected")
        }), i("#quick-search").keyup(function() {
            var e = i(this).val().trim().toLowerCase();
            i(".app-item").hide().filter(function() {
                return -1 != i(this).html().trim().toLowerCase().indexOf(e)
            }).show()
        }), i(".list-item input:checkbox").change(function() {
            i(this).is(":checked") ? i(this).parent().parent().addClass("selected") : i(this).parent().parent().removeClass("selected")
        }), i("#navbar-fullscreen").on("click", function(e) {
            "undefined" != typeof screenfull && screenfull.enabled && screenfull.toggle()
        }), i("#selectall").click(function() {
            i(this).is(":checked") ? i(".select_all_child:checkbox").attr("checked", !0) : i(".select_all_child:checkbox").attr("checked", !1)
        }), i(".list-item-wrap .list-item .list-title a").on("click", function(e) {
            i(".list-item.quick-view-opened").not(this).removeClass("quick-view-opened"), i(this).parents().parent(".list-item").toggleClass("quick-view-opened")
        }), i(s).on("click", function(e) {
            i(e.target).closest(".list-item").length || i(".list-item").removeClass("quick-view-opened")
        }), "undefined" != typeof screenfull && screenfull.enabled && i(s).on(screenfull.raw.fullscreenchange, function() {
            screenfull.isFullscreen ? i("#navbar-fullscreen").find("i").toggleClass("ik-minimize ik-maximize") : i("#navbar-fullscreen").find("i").toggleClass("ik-maximize ik-minimize")
        }), i(".minimize-widget").on("click", function() {
            var e = i(this),
                s = i(e.parents(".widget"));
            i(s).children(".widget-body").slideToggle();
            i(this).toggleClass("ik-minus").fadeIn("slow"), i(this).toggleClass("ik-plus").fadeIn("slow")
        }), i(".remove-widget").on("click", function() {
            var e = i(this);
            e.parents(".widget").animate({
                opacity: "0",
                "-webkit-transform": "scale3d(.3, .3, .3)",
                transform: "scale3d(.3, .3, .3)"
            }), setTimeout(function() {
                e.parents(".widget").remove()
            }, 800)
        }), i(".card-header-right .card-option .action-toggle").on("click", function() {
            var e = i(this);
            e.hasClass("ik-chevron-right") ? e.parents(".card-option").animate({
                width: "28px"
            }) : e.parents(".card-option").animate({
                width: "90px"
            }), i(this).toggleClass("ik-chevron-right").fadeIn("slow")
        }), i(".card-header-right .close-card").on("click", function() {
            var e = i(this);
            e.parents(".card").animate({
                opacity: "0",
                "-webkit-transform": "scale3d(.3, .3, .3)",
                transform: "scale3d(.3, .3, .3)"
            }), setTimeout(function() {
                e.parents(".card").remove()
            }, 800)
        }), i(".card-header-right .minimize-card").on("click", function() {
            var e = i(this),
                s = i(e.parents(".card"));
            i(s).children(".card-body").slideToggle();
            i(this).toggleClass("ik-minus").fadeIn("slow"), i(this).toggleClass("ik-plus").fadeIn("slow")
        }), i(".task-list").on("click", "li.list", function() {
            i(this).toggleClass("completed")
        }), i(".search-btn").on('click', function() {
            i(".header-search").addClass('open');
            i('.header-search .form-control').animate({
            'width': '200px',
            });
        }), i(".search-close").on('click', function() {
            i('.header-search .form-control').animate({
                'width': '0',
            });
            setTimeout(function() {
                i(".header-search").removeClass('open');
            }, 300);
        });
        var ps = new PerfectScrollbar(".right-sidebar", {
            wheelSpeed: 10,
            wheelPropagation: true,
            minScrollbarLength: 5
        });
        var ps = new PerfectScrollbar(".messages", {
            wheelSpeed: 10,
            wheelPropagation: true,
            minScrollbarLength: 5
        });
        $(".right-sidebar-toggle").on("click",function(e) {
            this.classList.toggle('active');
            $('.wrapper').toggleClass('right-sidebar-expand');
            return false;
        });

        document.addEventListener('click', function(event) {
            var $rightSidebar = document.getElementsByClassName('right-sidebar')[0],
                $chatPanel = document.getElementsByClassName('chat-panel')[0];
            var isInsideContainer = $rightSidebar.contains( event.target ) || $chatPanel.contains(event.target);
            if( !isInsideContainer ) {
              document.body.classList.remove('right-sidebar-expand');
              var toggle = document.getElementsByClassName('right-sidebar-toggle');
              for( var i = 0; i < toggle.length; i++ ) {
                toggle[i].classList.remove('active');
              }
              $chatPanel.hidden = 'hidden';
            }
        });

        var el = $('[data-plugin="chat-sidebar"]');
        if( !el.length ) return;
        var chatList = el.find('.chat-list');
        chatList.each(function(index) {
            var $this = $(this);
            $(this).find('.list-group a').on('click', function() {
                $this.find('.list-group a.active').removeClass('active');
                $(this).addClass('active');
                var el = $('.chat-panel');
                if(!el.length) return;
                el.removeAttr('hidden');

                var messages = el.find('.messages');
                messages[0].scrollTop = messages[0].scrollHeight;
                if( messages[0].classList.contains('scrollbar-enabled') ) {
                    messages.perfectScrollbar('update');
                }
                el.find('.user-name').html( $(this).data('chat-user'));
            });
        });

        var el = $('.chat-panel');
        if(!el.length) return;
        el.find('.close').on('click', function(){
            el.attr('hidden', true);
            el.find('.panel-body').removeClass('hide');
        });

        el.find('.minimize').on('click', function(){
            el.find('.card-block').attr('hidden', !el.find('.card-block').attr('hidden') );
            if( el.find('.card-block').attr('hidden') === 'hidden' )
                $(this).find('.material-icons').html('expand_less');
            else
            $(this).find('.material-icons').html('expand_more');
        });

        var gridButton = $('a.view-grid'),
            thumbButton = $('a.view-thumb'),
            listButton = $('a.view-list'),
            items = $('ul.view-as'),
            displayButtons = $('.dispaly-option-buttons a');

        gridButton.click(function() {
            $('#layout-wrap .list-item').attr('class', 'col-xl-3 col-lg-4 col-12 col-sm-6 mb-4 list-item list-item-grid');
        });
        listButton.click(function() {
            $('#layout-wrap .list-item').attr('class', 'col-12 list-item');
        });
        thumbButton.click(function() {
            $('#layout-wrap .list-item').attr('class', 'col-12 list-item list-item-thumb');
        });

        $(displayButtons).on('click', function(){
            $(displayButtons).removeClass('active');
            $(this).addClass('active');
        });
    })
}(window, document, jQuery);
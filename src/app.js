// Imports
import * as bootstrap from 'bootstrap';
import $ from "jquery";
import "metismenu";

// Stylesheets

import "./assets/base.scss";

$(document).ready(() => {
  // Sidebar Menu

  setTimeout(function () {
    $(".vertical-nav-menu").metisMenu();
  }, 100);

  // Search wrapper trigger

  $(".search-icon").click(function () {
    $(this).parent().parent().addClass("active");
  });

  $(".search-wrapper .btn-close").click(function () {
    $(this).parent().removeClass("active");
  });

  // BS5 Popover

  var popoverTriggerList1 = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover-custom-content"]'));
  var popoverList = popoverTriggerList1.map(function (popoverTriggerEl1) {
    return new bootstrap.Popover(popoverTriggerEl1,
      {
        html: true,
      placement: "auto",
      template:
        '<div class="popover popover-custom" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      content: function () {
        var id = $(this).attr("popover-id");
        return $("#popover-content-" + id).html();
      },
      });
  });

  // Stop Bootstrap 5 Dropdown for closing on click inside

  $(".dropdown-menu").on("click", function (event) {
    var events = $._data(document, "events") || {};
    events = events.click || [];
    for (var i = 0; i < events.length; i++) {
      if (events[i].selector) {
        if ($(event.target).is(events[i].selector)) {
          events[i].handler.call(event.target, event);
        }

        $(event.target)
          .parents(events[i].selector)
          .each(function () {
            events[i].handler.call(this, event);
          });
      }
    }
    event.stopPropagation(); //Always stop propagation
  });

  var popoverTriggerList2 = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover-custom-bg"]'));
  var popoverList = $('[data-bs-toggle="popover-custom-bg"]').each(function (popoverTriggerEl2) {
    var popClass = $(this).attr('data-bg-class');
    return new bootstrap.Popover($(this), {
      trigger: "focus",
      placement: "top",
      template:
        '<div class="popover popover-bg ' +
        popClass +
        '" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    });
  });

  // BS5 Popover

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  $('[data-bs-toggle="popover-custom"]').each(function (i, obj) {
    return new bootstrap.Popover($(this), {
      html: true,
      container: $(this).parent().find(".rm-max-width"),
      content: function () {
        return $(this)
          .next(".rm-max-width")
          .find(".popover-custom-content")
          .html();
      },
    });
  });


  // BS5 Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  var tooltipTriggerList1 = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip-light"]'));
  var tooltipList = tooltipTriggerList1.map(function (tooltipTriggerEl1) {
    return new bootstrap.Tooltip(tooltipTriggerEl1, {
      template:
      '<div class="tooltip tooltip-light"><div class="tooltip-inner"></div></div>'
    }
      );
  });

  // Drawer

  $(".open-right-drawer").click(function () {
    $(this).addClass("is-active");
    $(".app-drawer-wrapper").addClass("drawer-open");
    $(".app-drawer-overlay").removeClass("d-none");
  });

  $(".drawer-nav-btn").click(function () {
    $(".app-drawer-wrapper").removeClass("drawer-open");
    $(".app-drawer-overlay").addClass("d-none");
    $(".open-right-drawer").removeClass("is-active");
  });

  $(".app-drawer-overlay").click(function () {
    $(this).addClass("d-none");
    $(".app-drawer-wrapper").removeClass("drawer-open");
    $(".open-right-drawer").removeClass("is-active");
  });

  $(".mobile-toggle-nav").click(function () {
    $(this).toggleClass("is-active");
    $(".app-container").toggleClass("sidebar-mobile-open");
  });

  $(".mobile-toggle-header-nav").click(function () {
    $(this).toggleClass("active");
    $(".app-header__content").toggleClass("header-mobile-open");
  });

  $(".mobile-app-menu-btn").click(function () {
    $(".hamburger", this).toggleClass("is-active");
    $(".app-inner-layout").toggleClass("open-mobile-menu");
  });

  // Responsive

  var resizeClass = function () {
    var win = document.body.clientWidth;
    if (win < 1250) {
      $(".app-container").addClass("closed-sidebar-mobile closed-sidebar");
    } else {
      $(".app-container").removeClass("closed-sidebar-mobile closed-sidebar");
    }
  };

  $(window).on("resize", function () {
    resizeClass();
  });

  resizeClass();
});

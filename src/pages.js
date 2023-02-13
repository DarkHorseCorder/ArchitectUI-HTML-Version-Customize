const pages = [
  // Dashboards

  {
    output: "./index.html",
    content: {
      title: "Analytics Dashboard",
      description:
        "This is an example dashboard created using build-in elements and components.",
      heading_icon: "pe-7s-car icon-gradient bg-mean-fruit",
    },
    template: "./src/DemoPages/dashboards/analytics.hbs",
  },
  {
    output: "./analytics-variation.html",
    content: {
      title: "Analytics Dashboard",
      description:
        "This is an example dashboard created using build-in elements and components.",
      heading_icon: "pe-7s-car icon-gradient bg-mean-fruit",
    },
    template: "./src/DemoPages/dashboards/analytics-variation.hbs",
  },
  {
    output: "./dashboards-commerce.html",
    content: {
      title: "Commerce Dashboard",
      description:
        "This dashboard was created as an example of the flexibility that Architect offers.",
      heading_icon: "pe-7s-graph icon-gradient bg-ripe-malin",
    },
    template: "./src/DemoPages/dashboards/commerce.hbs",
  },
  {
    output: "./dashboards-commerce-variation.html",
    content: {
      title: "Commerce Dashboard",
      description:
        "This dashboard was created as an example of the flexibility that Architect offers.",
      heading_icon: "pe-7s-graph icon-gradient bg-ripe-malin",
    },
    template: "./src/DemoPages/dashboards/commerce-variation.hbs",
  },
  {
    output: "./dashboards-sales.html",
    content: {
      title: "Sales Dashboard",
      description: "Example of a Dashboard page built with Architect.",
      heading_icon: "pe-7s-umbrella icon-gradient bg-sunny-morning",
    },
    template: "./src/DemoPages/dashboards/sales.hbs",
  },
  {
    output: "./dashboards-minimal-1.html",
    content: {
      title: "Minimal Dashboard",
      description: "Examples of just how powerful ArchitectUI really is!",
      heading_icon: "lnr-apartment opacity-6",
    },
    template: "./src/DemoPages/dashboards/minimal-1.hbs",
  },
  {
    output: "./dashboards-minimal-2.html",
    content: {
      title: "Minimal Dashboard II",
      description: "Examples of just how powerful ArchitectUI really is!",
      heading_icon: "lnr-apartment icon-gradient bg-mean-fruit",
    },
    template: "./src/DemoPages/dashboards/minimal-2.hbs",
  },
  {
    output: "./dashboards-crm.html",
    content: {
      title: "CRM Dashboard",
      description: "Examples of just how powerful ArchitectUI really is!",
      heading_icon: "pe-7s-graph icon-gradient bg-ripe-malin",
    },
    template: "./src/DemoPages/dashboards/crm.hbs",
  },
  {
    output: "./dashboards-crm-variation.html",
    content: {
      title: "CRM Dashboard",
      description: "Examples of just how powerful ArchitectUI really is!",
      heading_icon: "pe-7s-graph icon-gradient bg-ripe-malin",
    },
    template: "./src/DemoPages/dashboards/crm-variation.hbs",
  },
  // Pages

  {
    output: "./pages-login.html",
    content: {
      title: "Login",
      description: "ArchitectUI HTML Bootstrap 5 Dashboard Template",
      heading_icon: "",
    },
    template: "./src/DemoPages/pages/login.hbs",
  },
  {
    output: "./pages-login-boxed.html",
    content: {
      title: "Login Boxed",
      description: "ArchitectUI HTML Bootstrap 5 Dashboard Template",
      heading_icon: "",
    },
    template: "./src/DemoPages/pages/login-boxed.hbs",
  },
  {
    output: "./pages-register.html",
    content: {
      title: "Register",
      description: "ArchitectUI HTML Bootstrap 5 Dashboard Template",
      heading_icon: "",
    },
    template: "./src/DemoPages/pages/register.hbs",
  },
  {
    output: "./pages-register-boxed.html",
    content: {
      title: "Register Boxed",
      description: "ArchitectUI HTML Bootstrap 5 Dashboard Template",
      heading_icon: "",
    },
    template: "./src/DemoPages/pages/register-boxed.hbs",
  },
  {
    output: "./pages-forgot-password.html",
    content: {
      title: "Forgot Password",
      description: "ArchitectUI HTML Bootstrap 5 Dashboard Template",
      heading_icon: "",
    },
    template: "./src/DemoPages/pages/forgot-password.hbs",
  },
  {
    output: "./pages-forgot-password-boxed.html",
    content: {
      title: "Forgot Password Boxed",
      description: "ArchitectUI HTML Bootstrap 5 Dashboard Template",
      heading_icon: "",
    },
    template: "./src/DemoPages/pages/forgot-password-boxed.hbs",
  },

  // Applications

  {
    output: "./apps-mailbox.html",
    content: {
      title: "Mailbox",
      description:
        "Create stunning UIs for your pages with these layout components.",
      heading_icon: "pe-7s-power icon-gradient bg-mixed-hopes",
    },
    template: "./src/DemoPages/applications/mailbox.hbs",
  },
  {
    output: "./apps-chat.html",
    content: {
      title: "Chat",
      description: "ArchitectUI HTML Bootstrap 5 Dashboard Template",
      heading_icon: "",
    },
    template: "./src/DemoPages/applications/chat.hbs",
  },
  {
    output: "./apps-faq-section.html",
    content: {
      title: "FAQ Section",
      description: "ArchitectUI HTML Bootstrap 5 Dashboard Template",
      heading_icon: "",
    },
    template: "./src/DemoPages/applications/faq-section.hbs",
  },
  {
    output: "./apps-forum-list.html",
    content: {
      title: "Forum Listing",
      description: "Example layout page for forum listing",
      heading_icon: "pe-7s-power icon-gradient bg-mixed-hopes",
    },
    template: "./src/DemoPages/applications/forum-list.hbs",
  },
  {
    output: "./apps-forum-threads.html",
    content: {
      title: "Forum Threads",
      description: "Example layout page for forum threads",
      heading_icon: "pe-7s-hourglass icon-gradient bg-ripe-malin",
    },
    template: "./src/DemoPages/applications/forum-threads.hbs",
  },
  {
    output: "./apps-forum-discussion.html",
    content: {
      title: "Forum Discussion",
      description: "Example layout page for forum discussion",
      heading_icon: "pe-7s-bluetooth icon-gradient bg-deep-blue",
    },
    template: "./src/DemoPages/applications/forum-discussion.hbs",
  },

  // UI Elements
  {
    output: "./elements-buttons-standard.html",
    content: {
      title: "Standard Buttons",
      description:
        "Wide selection of buttons that feature different styles for backgrounds, borders and hover options!",
      heading_icon: "pe-7s-plane icon-gradient bg-tempting-azure",
    },
    template: "./src/DemoPages/elements/buttons/standard.hbs",
  },
  {
    output: "./elements-buttons-pills.html",
    content: {
      title: "Pills Buttons",
      description:
        "The pills buttons from Architect Framework have 100% rounded corners.",
      heading_icon: "pe-7s-bluetooth icon-gradient bg-deep-blue",
    },
    template: "./src/DemoPages/elements/buttons/pills.hbs",
  },
  {
    output: "./elements-buttons-square.html",
    content: {
      title: "Square Buttons",
      description:
        "Wide selection of buttons with square corners. Their styling can be added to any button combination.",
      heading_icon: "pe-7s-car icon-gradient bg-mean-fruit",
    },
    template: "./src/DemoPages/elements/buttons/square.hbs",
  },
  {
    output: "./elements-buttons-shadow.html",
    content: {
      title: "Shadow Buttons",
      description:
        "These buttons are examples of buttons with drop shadows attached.",
      heading_icon: "pe-7s-monitor icon-gradient bg-malibu-beach",
    },
    template: "./src/DemoPages/elements/buttons/shadow.hbs",
  },
  {
    output: "./elements-buttons-icons.html",
    content: {
      title: "Buttons with Icons",
      description:
        "These buttons examples contain icons with or without labels attached.",
      heading_icon: "pe-7s-hourglass icon-gradient bg-ripe-malin",
    },
    template: "./src/DemoPages/elements/buttons/icons.hbs",
  },

  {
    output: "./elements-badges-labels.html",
    content: {
      title: "Badges & Labels",
      description:
        "Badges and labels are used to offer extra small pieces of info for your content.",
      heading_icon: "pe-7s-voicemail icon-gradient bg-arielle-smile",
    },
    template: "./src/DemoPages/elements/badges-labels.hbs",
  },
  {
    output: "./elements-dropdowns.html",
    content: {
      title: "Dropdowns",
      description:
        "Multiple styles, actions and effects are available for the Archited Framework dropdown buttons.",
      heading_icon: "pe-7s-umbrella icon-gradient bg-sunny-morning",
    },
    template: "./src/DemoPages/elements/dropdowns.hbs",
  },
  {
    output: "./elements-icons.html",
    content: {
      title: "Icons",
      description:
        "Wide icons selection including from flag icons to FontAwesome and other icons libraries.",
      heading_icon: "pe-7s-phone icon-gradient bg-night-fade",
    },
    template: "./src/DemoPages/elements/icons.hbs",
  },
  {
    output: "./elements-cards.html",
    content: {
      title: "Cards",
      description:
        "Wide selection of cards with multiple styles, borders, actions and hover effects.",
      heading_icon: "pe-7s-stopwatch icon-gradient bg-amy-crisp",
    },
    template: "./src/DemoPages/elements/cards.hbs",
  },
  {
    output: "./elements-loaders.html",
    content: {
      title: "Loading Indicators",
      description:
        "Use these loading indicators in combination with other elements to show current app status to users.",
      heading_icon: "pe-7s-moon icon-gradient bg-amy-crisp",
    },
    template: "./src/DemoPages/elements/loaders.hbs",
  },
  {
    output: "./elements-list-group.html",
    content: {
      title: "List Groups",
      description:
        "These can be used with other components and elements to create stunning and unique new elements for your UIs.",
      heading_icon: "pe-7s-paint icon-gradient bg-sunny-morning",
    },
    template: "./src/DemoPages/elements/list-group.hbs",
  },
  {
    output: "./elements-navigation.html",
    content: {
      title: "Navigation Menus",
      description:
        "Navigation menus are one of the basic building blocks for any web or mobile app.",
      heading_icon: "pe-7s-photo-gallery icon-gradient bg-mean-fruit",
    },
    template: "./src/DemoPages/elements/navigation.hbs",
  },
  {
    output: "./elements-timelines.html",
    content: {
      title: "Timelines",
      description:
        "Timelines are used to show lists of notifications, tasks or actions in a beautiful way.",
      heading_icon: "pe-7s-light icon-gradient bg-malibu-beach",
    },
    template: "./src/DemoPages/elements/timelines.hbs",
  },
  {
    output: "./elements-utilities.html",
    content: {
      title: "Utilities",
      description:
        "These are helpers that speed up the dev time for various components and effects.",
      heading_icon: "pe-7s-wristwatch icon-gradient bg-deep-blue",
    },
    template: "./src/DemoPages/elements/utilities.hbs",
  },

  // UI Components

  {
    output: "./components-tabs.html",
    content: {
      title: "Tabs",
      description:
        "Tabs are used to split content between multiple sections. Wide variety available.",
      heading_icon: "pe-7s-drawer icon-gradient bg-happy-itmeo",
    },
    template: "./src/DemoPages/components/tabs.hbs",
  },
  {
    output: "./components-accordions.html",
    content: {
      title: "Accordions",
      description:
        "Accordions represent collapsable component with extended functionality.",
      heading_icon: "pe-7s-diamond icon-gradient bg-warm-flame",
    },
    template: "./src/DemoPages/components/accordions.hbs",
  },
  {
    output: "./components-notifications.html",
    content: {
      title: "Notifications",
      description:
        "Notifications represent one of the best ways to give feedback for various users actions.",
      heading_icon: "pe-7s-glasses icon-gradient bg-love-kiss",
    },
    template: "./src/DemoPages/components/notifications.hbs",
  },
  {
    output: "./components-modals.html",
    content: {
      title: "Modals",
      description:
        "Wide selection of modal dialogs styles and animations available.",
      heading_icon: "pe-7s-phone icon-gradient bg-premium-dark",
    },
    template: "./src/DemoPages/components/modals.hbs",
  },
  {
    output: "./components-loading-blocks.html",
    content: {
      title: "Loading Blocks",
      description:
        "Sometimes we need to show a loading indicator for some elements, like cards or tables.",
      heading_icon: "pe-7s-door-lock icon-gradient bg-night-fade",
    },
    template: "./src/DemoPages/components/loading-blocks.hbs",
  },
  {
    output: "./components-progress-bar.html",
    content: {
      title: "Progress Bar",
      description:
        "You can use the progress bars on their own or in combination with other widgets.",
      heading_icon: "pe-7s-filter icon-gradient bg-grow-early",
    },
    template: "./src/DemoPages/components/progress-bar.hbs",
  },
  {
    output: "./components-tooltips-popovers.html",
    content: {
      title: "Tooltips & Popovers",
      description:
        "These React components are used to add interaction or extra information for your app's content.",
      heading_icon: "pe-7s-note2 icon-gradient bg-happy-fisher",
    },
    template: "./src/DemoPages/components/tooltips-popovers.hbs",
  },
  {
    output: "./components-carousel.html",
    content: {
      title: "Carousels & Slideshows",
      description:
        "Create easy and beautiful slideshows with these React components.",
      heading_icon: "pe-7s-album icon-gradient bg-sunny-morning",
    },
    template: "./src/DemoPages/components/carousel.hbs",
  },
  {
    output: "./components-calendar.html",
    content: {
      title: "Calendar",
      description:
        "Calendars are used in a lot of apps. We thought to include one for React.",
      heading_icon: "pe-7s-car icon-gradient bg-warm-flame",
    },
    template: "./src/DemoPages/components/calendar.hbs",
  },
  {
    output: "./components-pagination.html",
    content: {
      title: "Pagination",
      description:
        "Basic and dynamic pagination for use in your next awesome application.",
      heading_icon: "pe-7s-notebook icon-gradient bg-mixed-hopes",
    },
    template: "./src/DemoPages/components/pagination.hbs",
  },
  {
    output: "./components-count-up.html",
    content: {
      title: "Count Up",
      description:
        "Add animations to your numbers. It'll make your next Architect app more user friendly.",
      heading_icon: "pe-7s-signal icon-gradient bg-malibu-beach",
    },
    template: "./src/DemoPages/components/count-up.hbs",
  },
  {
    output: "./components-scrollable-elements.html",
    content: {
      title: "Scrollable Elements",
      description:
        "Add scrolling areas to any elements with custom scrollbars or default browser ones.",
      heading_icon: "pe-7s-radio icon-gradient bg-strong-bliss",
    },
    template: "./src/DemoPages/components/scrollable-elements.hbs",
  },
  {
    output: "./components-tree-view.html",
    content: {
      title: "Tree View",
      description:
        "Create stunning tree like views with this awesome React plugin.",
      heading_icon: "pe-7s-switch icon-gradient bg-plum-plate",
    },
    template: "./src/DemoPages/components/tree-view.hbs",
  },
  {
    output: "./components-maps.html",
    content: {
      title: "Maps",
      description: "Implement in your applications Google or vector maps.",
      heading_icon: "pe-7s-map icon-gradient bg-premium-dark",
    },
    template: "./src/DemoPages/components/maps.hbs",
  },
  {
    output: "./components-ratings.html",
    content: {
      title: "Ratings",
      description:
        "Display beautiful ratings with custom icons, stars and colors.",
      heading_icon: "pe-7s-diamond icon-gradient bg-warm-flame",
    },
    template: "./src/DemoPages/components/ratings.hbs",
  },
  {
    output: "./components-image-crop.html",
    content: {
      title: "Image Crop",
      description:
        "You can easily crop and edit images with this React plugin.",
      heading_icon: "pe-7s-signal icon-gradient bg-malibu-beach",
    },
    template: "./src/DemoPages/components/image-crop.hbs",
  },
  {
    output: "./components-guided-tours.html",
    content: {
      title: "Guided Tours",
      description:
        "These can be used with other components and elements to create stunning and unique new elements for your UIs.",
      heading_icon: "pe-7s-paint icon-gradient bg-sunny-morning",
    },
    template: "./src/DemoPages/components/guided-tours.hbs",
  },

  // UI Tables

  {
    output: "./tables-data-tables.html",
    content: {
      title: "Data Tables",
      description:
        "Choose between regular React Bootstrap tables or advanced dynamic ones.",
      heading_icon: "pe-7s-medal icon-gradient bg-tempting-azure",
    },
    template: "./src/DemoPages/tables/data-tables.hbs",
  },
  {
    output: "./tables-regular.html",
    content: {
      title: "Regular Tables",
      description: "Tables are the backbone of almost all web applications.",
      heading_icon: "pe-7s-drawer icon-gradient bg-happy-itmeo",
    },
    template: "./src/DemoPages/tables/regular.hbs",
  },
  {
    output: "./tables-grid.html",
    content: {
      title: "Grid Tables",
      description:
        "Basic example of a Bootstrap 5 table with sort, search and filter functionality.",
      heading_icon: "pe-7s-notebook icon-gradient bg-mixed-hopes",
    },
    template: "./src/DemoPages/tables/grid.hbs",
  },

  // Dashboard Widgets

  {
    output: "./widgets-chart-boxes.html",
    content: {
      title: "Chart Boxes",
      description:
        "These boxes can be used to show numbers and data in a breautiful user friendly way.",
      heading_icon: "pe-7s-star icon-gradient bg-ripe-malin",
    },
    template: "./src/DemoPages/dashboard-widgets/chart-boxes.hbs",
  },
  {
    output: "./widgets-chart-boxes-2.html",
    content: {
      title: "Chart Boxes II",
      description:
        "Unlimited styles are available for our chart boxes. Check out our dashboard examples for more.",
      heading_icon: "pe-7s-plug icon-gradient bg-arielle-smile",
    },
    template: "./src/DemoPages/dashboard-widgets/chart-boxes-2.hbs",
  },
  {
    output: "./widgets-chart-boxes-3.html",
    content: {
      title: "Chart Boxes III",
      description:
        "Highly configurable boxes best used for showing numbers in an user friendly way.",
      heading_icon: "pe-7s-wallet icon-gradient bg-plum-plate",
    },
    template: "./src/DemoPages/dashboard-widgets/chart-boxes-3.hbs",
  },
  {
    output: "./widgets-profile-boxes.html",
    content: {
      title: "Profile Boxes",
      description:
        "These boxes are usually for dashboard elements centered around users and profiles.",
      heading_icon: "pe-7s-science icon-gradient bg-happy-itmeo",
    },
    template: "./src/DemoPages/dashboard-widgets/profile-boxes.hbs",
  },

  // Forms Elements

  {
    output: "./forms-controls.html",
    content: {
      title: "Form Controls",
      description:
        "Wide selection of forms controls, using the Bootstrap 5 code base, but built with React.",
      heading_icon: "pe-7s-display1 icon-gradient bg-premium-dark",
    },
    template: "./src/DemoPages/forms/elements/controls.hbs",
  },
  {
    output: "./forms-layouts.html",
    content: {
      title: "Form Layouts",
      description:
        "Build whatever layout you need with our Architect framework.",
      heading_icon: "pe-7s-graph text-success",
    },
    template: "./src/DemoPages/forms/elements/layouts.hbs",
  },
  {
    output: "./forms-validation.html",
    content: {
      title: "Form Validation",
      description:
        "Inline validation is very easy to implement using the Architect Framework.",
      heading_icon: "lnr-picture text-danger",
    },
    template: "./src/DemoPages/forms/elements/validation.hbs",
  },
  {
    output: "./forms-wizard.html",
    content: {
      title: "Forms Wizard",
      description: "Easily create beautiful form multi step wizards!",
      heading_icon: "lnr-map text-info",
    },
    template: "./src/DemoPages/forms/elements/wizard.hbs",
  },

  // Forms Widgets

  {
    output: "./forms-datepicker.html",
    content: {
      title: "Datepicker",
      description:
        "Build beautiful datepickers perfectly integrated in the general style of the application.",
      heading_icon: "pe-7s-battery icon-gradient bg-plum-plate",
    },
    template: "./src/DemoPages/forms/widgets/datepicker.hbs",
  },
  {
    output: "./forms-range-slider.html",
    content: {
      title: "Range Slider",
      description:
        "Create sliders and range sliders with these React form widgets.",
      heading_icon: "pe-7s-battery icon-gradient bg-plum-plate",
    },
    template: "./src/DemoPages/forms/widgets/range-slider.hbs",
  },
  {
    output: "./forms-input-selects.html",
    content: {
      title: "Multi Select",
      description:
        "Create fancy multi select dropdown menus for a better user experience.",
      heading_icon: "pe-7s-gift icon-gradient bg-mixed-hopes",
    },
    template: "./src/DemoPages/forms/widgets/input-selects.hbs",
  },
  {
    output: "./forms-toggle-switch.html",
    content: {
      title: "Toggle Switch",
      description:
        "Instead of regular checkboxes, use these toggle widgets for a better UX.",
      heading_icon: "pe-7s-news-paper icon-gradient bg-grow-early",
    },
    template: "./src/DemoPages/forms/widgets/toggle-switch.hbs",
  },
  {
    output: "./forms-wysiwyg-editor.html",
    content: {
      title: "WYSIWYG Editor",
      description: "Simple ckEditor implementation below.",
      heading_icon: "pe-7s-like icon-gradient bg-love-kiss",
    },
    template: "./src/DemoPages/forms/widgets/wysiwyg-editor.hbs",
  },
  {
    output: "./forms-input-mask.html",
    content: {
      title: "Input Mask",
      description:
        "Add all kind of input masks for inputs for a better user experience.",
      heading_icon: "pe-7s-global icon-gradient bg-happy-itmeo",
    },
    template: "./src/DemoPages/forms/widgets/input-mask.hbs",
  },
  {
    output: "./forms-clipboard.html",
    content: {
      title: "Clipboard",
      description: "You can copy/paste text with this React form widget.",
      heading_icon: "pe-7s-phone icon-gradient bg-premium-dark",
    },
    template: "./src/DemoPages/forms/widgets/clipboard.hbs",
  },
  {
    output: "./forms-textarea-autosize.html",
    content: {
      title: "Textarea Autosize",
      description:
        "Create textareas that grow in height based on their content.",
      heading_icon: "pe-7s-switch icon-gradient bg-plum-plate",
    },
    template: "./src/DemoPages/forms/widgets/textarea-autosize.hbs",
  },

  // Charts

  {
    output: "./charts-chartjs.html",
    content: {
      title: "ChartJS",
      description:
        "Huge selection of charts created with the React ChartJS Plugin",
      heading_icon: "pe-7s-bandaid icon-gradient bg-amy-crisp",
    },
    template: "./src/DemoPages/charts/chartjs.hbs",
  },
  {
    output: "./charts-apexcharts.html",
    content: {
      title: "Apex Charts",
      description: "Wonderful animated charts built as a jQuery component.",
      heading_icon: "pe-7s-graph2 icon-gradient bg-happy-green",
    },
    template: "./src/DemoPages/charts/apexcharts.hbs",
  },
  {
    output: "./charts-sparklines.html",
    content: {
      title: "Sparklines",
      description:
        "Use these Sparklines charts inside other components or on their own.",
      heading_icon: "pe-7s-pendrive icon-gradient bg-mean-fruit",
    },
    template: "./src/DemoPages/charts/sparklines.hbs",
  },
];

module.exports = pages;

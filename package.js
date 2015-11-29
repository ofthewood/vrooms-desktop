Package.describe({
  name: 'ofthewood:vrooms-desktop',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  /* Add our packages that we depend on on both mobile/desktop sides */

  api.use([
    'ofthewood:vrooms-base',
    'iron:router',
    'meteor-platform',
    'templating',
    'handlebars',
    'session',
    'underscore',
      'less'
  ],['client','server']);

  /*  iron router in a pacakge :
   https://github.com/iron-meteor/iron-router/issues/1383
   */

  /* Add each of our files that are a part of this package */
  api.add_files([
  'client/views/commonHelpers.js',

  'client/views/roomsList.html',
  'client/views/roomsList.js',

  'client/views/meetingsList.html',
  'client/views/meetingsList.js',

  'client/views/lastFreeMeetings.html',
  'client/views/lastFreeMeetings.js',

  'client/views/timeslots.html',
  'client/views/timeslots.js',

  'client/views/navbar.html',
  'client/views/navbar.js',
  
  'client/views/loading.html',
  'client/views/layout.html',

  'client/views/routes.js',

  'client/_boot/jsonIE8.js',
  'client/_boot/bootstrap/js/dropdown.js',
  'client/_boot/bootstrap/js/affix.js',
  'client/_boot/bootstrap/js/modal.js',
  'client/_boot/bootstrap/js/_tooltip.js',
  'client/_boot/bootstrap/js/alert.js',
  'client/_boot/bootstrap/js/button.js',
  'client/_boot/bootstrap/js/scrollspy.js',
  'client/_boot/bootstrap/js/carousel.js',
  'client/_boot/bootstrap/js/tab.js',
  'client/_boot/bootstrap/js/collapse.js',
  'client/_boot/bootstrap/js/transition.js',
  'client/_boot/bootstrap/js/popover.js',
  'client/_boot/bootstrap/less/thumbnails.import.less',
  'client/_boot/bootstrap/less/code.import.less',
  'client/_boot/bootstrap/less/variables.import.less',
  'client/_boot/bootstrap/less/labels.import.less',
  'client/_boot/bootstrap/less/button-groups.import.less',
  'client/_boot/bootstrap/less/wells.import.less',
  'client/_boot/bootstrap/less/mixins.import.less',
  'client/_boot/bootstrap/less/navbar.import.less',
  'client/_boot/bootstrap/less/utilities.import.less',
  'client/_boot/bootstrap/less/pager.import.less',
  'client/_boot/bootstrap/less/grid.import.less',
  'client/_boot/bootstrap/less/jumbotron.import.less',
  'client/_boot/bootstrap/less/responsive-utilities.import.less',
  'client/_boot/bootstrap/less/modals.import.less',

  'client/_boot/bootstrap/less/mixins/center-block.import.less',
  'client/_boot/bootstrap/less/mixins/tab-focus.import.less',
  'client/_boot/bootstrap/less/mixins/labels.import.less',
  'client/_boot/bootstrap/less/mixins/clearfix.import.less',
  'client/_boot/bootstrap/less/mixins/grid.import.less',
  'client/_boot/bootstrap/less/mixins/opacity.import.less',
  'client/_boot/bootstrap/less/mixins/progress-bar.import.less',
  'client/_boot/bootstrap/less/mixins/nav-vertical-align.import.less',
  'client/_boot/bootstrap/less/mixins/panels.import.less',
  'client/_boot/bootstrap/less/mixins/background-variant.import.less',
  'client/_boot/bootstrap/less/mixins/list-group.import.less',
  'client/_boot/bootstrap/less/mixins/grid-framework.import.less',
  'client/_boot/bootstrap/less/mixins/text-overflow.import.less',
  'client/_boot/bootstrap/less/mixins/image.import.less',
  'client/_boot/bootstrap/less/mixins/vendor-prefixes.import.less',
  'client/_boot/bootstrap/less/mixins/buttons.import.less',
  'client/_boot/bootstrap/less/mixins/resize.import.less',
  'client/_boot/bootstrap/less/mixins/reset-filter.import.less',
  'client/_boot/bootstrap/less/mixins/size.import.less',
  'client/_boot/bootstrap/less/mixins/nav-divider.import.less',
  'client/_boot/bootstrap/less/mixins/pagination.import.less',
  'client/_boot/bootstrap/less/mixins/hide-text.import.less',
  'client/_boot/bootstrap/less/mixins/responsive-visibility.import.less',
  'client/_boot/bootstrap/less/mixins/text-emphasis.import.less',
  'client/_boot/bootstrap/less/mixins/border-radius.import.less',
  'client/_boot/bootstrap/less/mixins/table-row.import.less',
  'client/_boot/bootstrap/less/mixins/forms.import.less',
  'client/_boot/bootstrap/less/mixins/gradients.import.less',
  'client/_boot/bootstrap/less/mixins/alerts.import.less',

  'client/_boot/bootstrap/less/theme.import.less',
  'client/_boot/bootstrap/less/bootstrap.import.less',
  'client/_boot/bootstrap/less/panels.import.less',
  'client/_boot/bootstrap/less/dropdowns.import.less',
  'client/_boot/bootstrap/less/list-group.import.less',
  'client/_boot/bootstrap/less/breadcrumbs.import.less',
  'client/_boot/bootstrap/less/close.import.less',
  'client/_boot/bootstrap/less/input-groups.import.less',
  'client/_boot/bootstrap/less/buttons.import.less',
  'client/_boot/bootstrap/less/glyphicons.import.less',
  'client/_boot/bootstrap/less/responsive-embed.import.less',
  'client/_boot/bootstrap/less/print.import.less',
  'client/_boot/bootstrap/less/carousel.import.less',
  'client/_boot/bootstrap/less/tables.import.less',
  'client/_boot/bootstrap/less/popovers.import.less',
  'client/_boot/bootstrap/less/pagination.import.less',
  'client/_boot/bootstrap/less/component-animations.import.less',
  'client/_boot/bootstrap/less/type.import.less',
  'client/_boot/bootstrap/less/tooltip.import.less',
  'client/_boot/bootstrap/less/forms.import.less',
  'client/_boot/bootstrap/less/progress-bars.import.less',
  'client/_boot/bootstrap/less/media.import.less',
  'client/_boot/bootstrap/less/badges.import.less',
  'client/_boot/bootstrap/less/scaffolding.import.less',
  'client/_boot/bootstrap/less/normalize.import.less',
  'client/_boot/bootstrap/less/alerts.import.less',
  'client/_boot/bootstrap/less/navs.import.less',
  'client/_boot/jquery.backgroundSize.js',


  'client/_boot/bootstrap/variables.less',
  'client/_boot/bootstrap/bootstrap.less',

  'client/views/inspinia.html',
  'client/views/inspinia.css',
  'client/views/animate.css'
  ],['web.browser']);
 // ],['web.cordova','web.browser']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vrooms-desktop');
  api.addFiles('vrooms-desktop-tests.js');
});

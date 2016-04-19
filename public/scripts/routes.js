<<<<<<< HEAD
page('/', indexController.index);
page('/index', indexController.index);
page('/about', aboutController.index);
page('/results', resultsController.index);
=======

page('/about', about);

function about() {
  console.log('this is the about function working');
  $('section.homepage').hide();
  $('section.about').show();
}

>>>>>>> 87d4a7ab7e6305d60fc9193a76f3c272c43e1a33
page();


page('/about', about);

function about() {
  console.log('this is the about function working');
  $('section.homepage').hide();
  $('section.about').show();
}

page();

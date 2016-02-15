FlowRouter.route('/terms', {
  action: function () {
    BlazeLayout.render('applicationLayout', {
      header: 'headerTemplate',
      sidebar: 'sidebarTemplate',
      main: 'termsOfService',
      footer: 'footerTemplate'
    });
  },
  name: 'termsOfService'
});

var documents = FlowRouter.group({
  prefix: '/documents'
});

documents.route('/', {
  action: function (){
    console.log('We are viewing list of documents')
  }
});

documents.route('/:_id', {
  action: function () {
    console.log('We are viewing a single document')
  }
});

documents.route('/:_id/edit', {
  action: function () {
    console.log('we are editing a document')
  }
});


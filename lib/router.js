FlowRouter.route('/terms', {
  triggersEnter: [function () {
    console.log('we have entered')
  }, function () {
    console.log('can we do more than 1?')
  }],
  action: function () {
    BlazeLayout.render('applicationLayout', {
      header: 'headerTemplate',
      sidebar: 'sidebarTemplate',
      main: 'termsOfService',
      footer: 'footerTemplate'
    });
  },
  name: 'termsOfService',
  triggersExit: function () {
    console.log('does this have to be an array')
  }
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
  action: function (params, queryParams) {
    console.log(queryParams)
    console.log(params._id);
    BlazeLayout.render('applicationLayout', {
      header: 'headerTemplate',
      sidebar: 'sidebarTemplate',
      main: 'termsOfService',
      footer: 'footerTemplate'
    });
  },
  name: 'singleDoc'
});

documents.route('/:_id/edit', {
  action: function () {
    console.log('we are editing a document')
  }
});


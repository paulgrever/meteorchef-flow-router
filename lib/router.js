FlowRouter.route('/terms', {
  action: function () {
    console.log('Okay we are on terms page');
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


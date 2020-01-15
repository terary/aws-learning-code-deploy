

exports.index = function(req, res){
    res.render('index', { name: 'John' });
};

exports.whoami =  function(req, res){
  res.render('whoami', { name: 'John' });
};
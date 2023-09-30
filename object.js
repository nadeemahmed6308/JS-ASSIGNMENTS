var children = [
  {name: 'pappu', parents: ['p1', 'p2']},
  {name: 'Aslam', parents: ['p3', 'p4']},
  {name: 'nattu', parents: ['p1', 'p5']},
  ];
  var parents = [
    {_id: 'p1', name: 'Chotu'},
    {_id: 'p1', name: 'Chotu'},
    {_id: 'p1', name: 'Chotu'} ,
    {_id: 'p1', name: 'Chotu'},
    {_id: 'p1', name: 'Chotu'}
    ]
    
    for(var i = 0; i < parents.length; i++){
      var parents1 = parents[i];
      parents1.children[i];
      for(var j = 0; j < children.length; i++){
        var children1 = children[j]
        if(parents1.children[i].includes(children.name))
      document.write()
      }
    }
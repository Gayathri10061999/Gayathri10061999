class animal{
  constructor(name){
    this.name=name;
    console.log(name);
  }
  run(name1){
  console.log(name1);
  }
  static stop(name2){
    console.log(name2);
  }
  }
  let obj=new animal('dog')
  obj.run('2km/hr');
  animal.stop('dogg');
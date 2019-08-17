// 1. Copy and paste your prototype in here and refactor into class syntax.

console.log(`\n ----Classes Section----`);
class CuboidMaker1{
    constructor(dims){
        this.length = dims.length;
        this.height = dims.height;
        this.width = dims.width;
    }
    volume() {return this.height * this.length * this.width;}
    surfaceArea() {return (2*(this.length*this.width+this.length*this.height+this.width*this.height));}
}
 
  const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height: 5
  });
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid1.volume()); // 100
  console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(`\n-Stretch Goal Section for Classes-`);

class CubeMaker extends CuboidMaker{
  constructor(attrs){
    super(attrs);
  }
}

const cuboid2 = new CubeMaker({
  length: 15,
  width: 3,
  height: 20
});

console.log(cuboid2.volume());
console.log(cuboid2.surfaceArea());
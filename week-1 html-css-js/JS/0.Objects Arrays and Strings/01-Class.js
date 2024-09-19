
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  static callMe(){
    console.log("This is a static function of Animal Class\n");
  }
}
Animal.callMe();  




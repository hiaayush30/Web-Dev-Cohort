// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);//returns an array of the keys present in obj
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);//returns an array of the values present in obj
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);//returms an array of arrays  of the keys along with values present in obj
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");//To check if a property belongs to the object itself
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });//Add new properties to obj
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);

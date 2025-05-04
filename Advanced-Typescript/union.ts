// Union and Intersection

export type Name = {
  name: string;
};

export type Age = {
  age: number;
};

type Union = Name | Age;

type Intersection = Name & Age;

let union: Union;

union = {
  name: "shubham",
};

union = {
  age: 19,
};

union = {
  name: "Shubham",
  age: 19,
};

//Union Redux


if ("name" in union && "age" in union) {
    
}

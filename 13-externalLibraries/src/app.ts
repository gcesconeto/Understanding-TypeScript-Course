import lodash from 'lodash';

declare var GLOBAL: any; // tells TS that this variable exists no matter what, and prevents errors

console.log(lodash.shuffle([1, 2, 3, 4, 5, 6]));

console.log(GLOBAL);

// Class-transformer

import { Product } from './product.model';

const p1 = new Product('book', 1.99);

console.log(p1.getInformation());

const products = [  // example of remote data recovered
  { title: 'A carpet', price: 15.99 },
  { title: 'A brush', price: 12.50 }
];

const loadedProducts = products.map((prod) => { // manually transforming remote data to class structure
  return new Product(prod.title, prod.price);
})

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

import 'reflect-metadata'
import { plainToInstance } from 'class-transformer'

const transformedLoadedProducts = plainToInstance(Product, products) // automating previous map.

for (const prod of transformedLoadedProducts) {
  console.log(prod.getInformation());
}

// Class-validator

import { validate } from 'class-validator';

const newProd = new Product('', -1);

validate(newProd).then((err) => { // call the validation method
  if (err.length > 0) {
  console.log('validation error');
  console.log(err);
  } else console.log(newProd.getInformation());
})

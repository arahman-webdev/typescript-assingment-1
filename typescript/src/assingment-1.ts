{
  // 


  function formatString(write: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return write.toLowerCase()
    } else {
      return write.toUpperCase()
    }
  }

  //    console.log(formatString(''))


  // type Product = {
  //     name: string;
  //     price: number
  // }

  // const products: Product[] = [
  //     { name: "Phone", price: 900 },
  //     { name: "Laptop", price: 1500 },
  //     { name: "Tablet", price: 1100 },
  //   ];


  //   function getExpensiveProducts(): Product[]{
  //     return products.filter(item => item.price >= 1000)
  //   }

  //   console.log(getExpensiveProducts())



  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4)
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];


  // console.log(filterByRating(books))


  // type GenericArray<param> = Array<param>



  function concatenateArrays<T>(...elements: T[][]): T[] {
    return ([] as T[]).concat(...elements)
  }


  // console.log(concatenateArrays([1, 2], [3, 4], [5]))
  // console.log(concatenateArrays(concatenateArrays(["a", "b"], ["c"])))
  // console.log(concatenateArrays([false], [true]))

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make,
        this.year = year
    }

    getInfo() {
      console.log(`"Make: ${this.make}, Year: ${this.year}"`)
    }
  }

  class Car extends Vehicle {
    model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year)
      this.model = model
    }

    getModel() {
      console.log(`"Model: ${this.model}"`)
    }
  }


  const myCar = new Car("Toyota", 2020, "Corolla")

  // myCar.getInfo()
  // myCar.getModel()


  function processValue(a: string | number) {
    if (typeof a === 'string') {
      return console.log(a.length)
    } else {
      return console.log(a * 2)
    }
  }

  // processValue('Abdurrahman')
  // processValue(25)



  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null; 
    }
  
    const maxPrice = Math.max(...products.map(product => product.price));
    const highest_price = products.find(product => product.price === maxPrice);
  
    return highest_price ;
  }
  
  const products = [
    { name: "Pen", price: 1 },
    { name: "Notebook", price: 205 },
    { name: "Bag", price: 50 }
  ];
  
  const result = getMostExpensiveProduct(products);
  console.log(result);
  


}





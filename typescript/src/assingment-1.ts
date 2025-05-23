
{

  function formatString(write: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return write.toLowerCase()
    } else {
      return write.toUpperCase()
    }
  }








  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4)
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];









  function concatenateArrays<T>(...elements: T[][]): T[] {
    return ([] as T[]).concat(...elements)
  }

  const result1 = concatenateArrays(["a", "b"], ["c"])
  const result2 = concatenateArrays(["a", "b"], ["c"])







  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make,
        this.year = year
    }

    getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`)
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year)
      this.model = model
    }

    getModel() {
      console.log(`Model: ${this.model}`)
    }
  }


  const myCar = new Car("Toyota", 2020, "Corolla")








  function processValue(a: string | number) {
    if (typeof a === 'string') {
      return console.log(a.length)
    } else {
      return console.log(a * 2)
    }
  }





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
    return highest_price ?? null;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];




  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  function getDayType(day: Day): string {
    if (day === Day.Sunday || day === Day.Saturday) {
      return "Weekend"
    } else {
      return "Weekday"
    }
  }







  function delay() {
    return new Promise((done) => {
      setTimeout(() => {
        done("done");
      }, 1000);
    });
  }



  async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
      throw new Error('Error: Negative number not allowed')
    }
    await delay();

    return n * n
  }





}






interface Car{
    id: number,
    brand: string,
    color: string,
    distanceUsed: number,
    showCar(): string,
    use(distance: number): number,
    
  
}

const EuropeCar : Car = {
    id : 123,
    brand: "Somchai",
    color: "Red",
    distanceUsed: 500,
    showCar: function() :string{
        return "Crawling";
    },
    use: () => 0,
}
console.log(EuropeCar.use()+distanceUsed);

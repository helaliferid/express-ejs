const Car=require('../datalayer/car.model');

const getAllCars = async ()=>{
    let cars = await Car.find();
    return cars;
}

const saveCar = async(car)=>{
    let result = await Car.create(car);
    return result;
}

module.exports={
    getAllCars,
    saveCar
}
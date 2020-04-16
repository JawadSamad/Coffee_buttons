import {makeAmericano, makeBlackTea, makeCappuccino, makeChoco, makeEarlGray, makeWienerMelange} from "./Mock";
import DataContext from "./Context/DataContext";
import React from "react";

it('should output true for makeAmericano', () => {
    const dataContext = React.useContext(DataContext);
    const makeAmericanoDrink = new makeAmericano(DataContext.sugar, dataContext.milk);
    expect(true).toHaveBeenCalledWith(makeAmericanoDrink)
});
it('should output true for makeBlackTea', () => {
    const dataContext = React.useContext(DataContext);
    const makeBlackTeaDrink = new makeBlackTea(DataContext.sugar, dataContext.milk);
    expect(true).toHaveBeenCalledWith(makeBlackTeaDrink)
});
it('should output true for makeCappuccino', () => {
    const dataContext = React.useContext(DataContext);
    const makeCappuccinoDrink = new makeCappuccino(DataContext.sugar, dataContext.milk);
    expect(true).toHaveBeenCalledWith(makeCappuccinoDrink)
});
it('should output true for makeChoco', () => {
    const dataContext = React.useContext(DataContext);
    const makeChocoDrink = new makeChoco(DataContext.sugar, dataContext.milk);
    expect(true).toHaveBeenCalledWith(makeChocoDrink)
});
it('should output true for makeEarlGray', () => {
    const dataContext = React.useContext(DataContext);
    const makeEarlGrayDrink = new makeEarlGray(DataContext.sugar, dataContext.milk);
    expect(true).toHaveBeenCalledWith(makeEarlGrayDrink)
});
it('should output true for makeWienerMelange', () => {
    const dataContext = React.useContext(DataContext);
    const makeWienerMelangeDrink = new makeWienerMelange(DataContext.sugar, dataContext.milk);
    expect(true).toHaveBeenCalledWith(makeWienerMelangeDrink)
});
let _cbError = {};
let _cbReady = {};


    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
     export const makeAmericano = (sugar, milk) => {
        return true;
    };

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
     export const makeCappuccino = (sugar, milk) => {
        return true;
    };

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
     export const makeWienerMelange = (sugar, milk) => {
        return true;
    };

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
     export const makeChoco = (sugar, milk) => {
        return true;
    };

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
     export const makeBlackTea = (sugar, milk) => {
        return true;
    };

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
     export const makeEarlGray = (sugar, milk) => {
        return true;
    };

    /**
     * Callback for retrieving error messages, takes callback function as parameter. Setting the callback
     * tiggers a response in a minute
     */
    export const errorCallback = (callback) => {
        _cbError = callback;

        setTimeout(function () {
            // _cbError(Math.round(Math.random() * 4));
            _cbError(0);
        }, Math.random() * 2000);
    };

    /**
     * Callback for retrieving ready messages, takes callback function as parameter.  Setting the callback
     * tiggers a response in a minute
     */
    export const readyCallback = (callback) => {
        _cbReady = callback;

        setTimeout(_cbReady(), 7000);
    };
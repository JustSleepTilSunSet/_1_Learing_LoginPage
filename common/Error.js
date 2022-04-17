let _ = require('lodash');

module.exports = class Exception extends Error{
    /**
     * 
     * @param {Boolean} fnState - Is the function success?
     * @param {JSON} payLoad - specific datas.
     * @param {Error} error - System error object.
     */
    constructor(fnState, payLoad, error){
        super(error.message);
        this.fnState = fnState;
        this.payLoad = payLoad;
    }

}
define(function () {
    // constructor
    function modelBase(title) {
        this.title = title;
    }

    modelBase.prototype = {
        getTitle: function () {
            return this.title;
        }
    };

    return modelBase;   // exports the model "class" as "./Base"
});

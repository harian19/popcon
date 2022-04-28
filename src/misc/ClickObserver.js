// source
// https://www.dofactory.com/javascript/design-patterns/observer#:~:text=The%20Observer%20pattern%20offers%20a,design%20and%20promotes%20loose%20coupling.

// Observer pattern implemented below
// Observable is ClickObserver 
// and Observers in ClickHandlers

function ClickObserver() {
    this.handlers = [];  // observers
}

ClickObserver.prototype = {

    subscribe: function (fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(
            function (item) {
                if (item !== fn) {
                    return item;
                }
                else 
                    return null;
            }
        );
    },

    fire: function (o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
}

export default ClickObserver;
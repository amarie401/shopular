'use strict';

(function () {
    'use strict';

    var app = angular.module('shopular', []);

    app.controller('ShopularController', function (allInventories, $q) {
        var _this = this;

        this.allInventory = {};
        this.tax = .0575; // 5.75 to sales tax percentage
        console.log('in');

        $q.when(allInventories.get('./src/js/data/inventory.json')).then(function (response) {
            console.log(response.data);
            _this.allInventory = response.data;
        }).catch(function (error) {
            console.log(error);
        });

        this.getPrice = function (price, discount) {
            var totalPrice = price - discount; // two decimal places
            var adjustedPrice = totalPrice * this.tax;
            totalPrice += adjustedPrice;
            return totalPrice.toFixed(2);
        };

        this.getDiscount = function (discount) {
            if (discount > 0) {
                return true;
            } else {
                return false;
            }
        };
    });
})();
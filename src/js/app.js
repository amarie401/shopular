(function() {
    'use strict';

    const app = angular.module('shopular', []);

    app.controller('ShopularController', function(allInventories, $q) {
        this.allInventory = {};
        this.tax = .0575; // 5.75 to sales tax percentage
        console.log('in');


        $q.when(allInventories.get('./src/js/data/inventory.json')).then((response) => {
            console.log(response.data);
            this.allInventory = response.data;
        }).catch((error) => {
            console.log(error);
        });

        this.getPrice = function(price, discount) {
            let totalPrice = (price - discount); // two decimal places
            let adjustedPrice = totalPrice * this.tax;
            totalPrice += adjustedPrice;
            return totalPrice.toFixed(2);
        };

        this.getDiscount = function(discount) {
            if (discount > 0) {
                return true;
            } else {
                return false;
            }
        };
    });


})();

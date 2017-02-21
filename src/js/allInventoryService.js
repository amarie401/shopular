angular.module('shopular').service('allInventories', AllInventoryService);

function AllInventoryService($http) {
    function getInventory(url) {
        return $http({
            method: 'GET',
            url: url
        });
    }

    return {
        get: getInventory
    };
}

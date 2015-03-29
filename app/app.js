angular.module("ProtractorExploration", [])
.controller("Ctrl", function($timeout, $http) {
        var vm = this;
        vm.button1_click = function() {
            vm.text1 = "Success";
        };
        vm.button2_click = function() {
            $timeout(function() {
                vm.text2 = "Success";
            }, 2000);
        };
        vm.button3_click = function() {
            $http.get("data.json").success(function(data) {
                vm.text3 = data.result;
            })
        }
    });
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('filterModule', []);

app.controller('filterController', [function ()
    {
        var self = this;
        self.persons = [
            {name: 'Hans', gender: 'male', age: 8}, {name: 'Grethe', gender: 'female', age: 7},
            {name: 'Frederik', gender: 'male', age: 61}, {name: 'Hassan', gender: 'male', age: 13},
            {name: 'Karen', gender: 'female', age: 31}];
    }]);


app.filter('ageFiltter', function ()
{

    return function (input)
    {

        var out = [];
        angular.forEach(input, function (persons)
        {
            if (persons.age > 5 && persons.age < 16)
            {
                out.push(persons);
            }

        });
        return out;
    };
});

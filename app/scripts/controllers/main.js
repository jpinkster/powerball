'use strict';

app.controller('MainCtrl',
    function (_, $log) {
        var vm = this;

        vm.indexMapper = [
            "A","B","C",
            "D","E","F","G"
        ];

        vm.numbers = new Array(5);
        vm.powerball = '';

        vm.cards = [
            {
                name: 'Card 1 - Speedway',
                numbers: [
                    {
                        firstFive: [12,23,31,36,56],
                        powerball: 15
                    },
                    {
                        firstFive: [20,21,35,36,51],
                        powerball: 21
                    },
                    {
                        firstFive: [16,21,33,43,65],
                        powerball: 26
                    },
                    {
                        firstFive: [10,15,26,33,59],
                        powerball: 12
                    },
                    {
                        firstFive: [3,20,33,48,49],
                        powerball: 19
                    },
                    {
                        firstFive: [27,40,57,61,65],
                        powerball: 1
                    },
                    {
                        firstFive: [3,24,32,42,50],
                        powerball: 19
                    }
                ]
            },
            {
                name: 'Card 2 - Speedway',
                numbers: [
                    {
                        firstFive: [11,13,17,24,64],
                        powerball: 18
                    },
                    {
                        firstFive: [4,17,19,28,55],
                        powerball: 24
                    },
                    {
                        firstFive: [9,25,28,45,67],
                        powerball: 21
                    },
                    {
                        firstFive: [14,40,49,68,69],
                        powerball: 2
                    },
                    {
                        firstFive: [6,14,37,57,60],
                        powerball: 5
                    },
                    {
                        firstFive: [5,9,45,53,56],
                        powerball: 22
                    },
                    {
                        firstFive: [8,11,17,25,36],
                        powerball: 5
                    }
                ]
            },
            {
                name: 'Card 3 - Speedway',
                numbers: [
                    {
                        firstFive: [12,30,37,51,53],
                        powerball: 19
                    },
                    {
                        firstFive: [13,20,45,57,62],
                        powerball: 12
                    },
                    {
                        firstFive: [31,39,53,63,68],
                        powerball: 26
                    },
                    {
                        firstFive: [18,30,34,41,69],
                        powerball: 11
                    },
                    {
                        firstFive: [4,23,42,66,68],
                        powerball: 12
                    },
                    {
                        firstFive: [13,44,45,59,61],
                        powerball: 20
                    },
                    {
                        firstFive: [2,19,22,27,51],
                        powerball: 4
                    }
                ]
            },
            {
                name: 'Card 4 - Speedway',
                numbers: [
                    {
                        firstFive: [1,4,16,38,47],
                        powerball: 12
                    },
                    {
                        firstFive: [11,15,43,60,67],
                        powerball: 21
                    },
                    {
                        firstFive: [23,52,55,63,68],
                        powerball: 23
                    },
                    {
                        firstFive: [24,25,30,53,65],
                        powerball: 13
                    },
                    {
                        firstFive: [9,28,32,47,48],
                        powerball: 25
                    },
                    {
                        firstFive: [10,27,38,60,67],
                        powerball: 18
                    },
                    {
                        firstFive: [2,4,26,27,43],
                        powerball: 17
                    }
                ]
            },
            {
                name: 'Card 5 - Speedway',
                numbers: [
                    {
                        firstFive: [6,16,22,33,42],
                        powerball: 11
                    },
                    {
                        firstFive: [12,23,27,41,43],
                        powerball: 12
                    },
                    {
                        firstFive: [17,29,46,55,69],
                        powerball: 24
                    },
                    {
                        firstFive: [3,10,11,18,50],
                        powerball: 15
                    },
                    {
                        firstFive: [4,7,23,32,65],
                        powerball: 10
                    },
                    {
                        firstFive: [4,11,30,42,44],
                        powerball: 20
                    },
                    {
                        firstFive: [1,41,46,54,60],
                        powerball: 24
                    }
                ]
            },
            {
                name: 'Card 6 - Shell',
                numbers: [
                    {   firstFive: [5,31,36,63,66],
                        powerball: 11
                    },
                    {   firstFive: [2,7,12,29,39],
                        powerball: 17
                    },
                    {   firstFive: [20,28,36,55,67],
                        powerball: 8
                    },
                    {   firstFive: [20,30,46,52,66],
                        powerball: 5
                    },
                    {   firstFive: [7,14,19,21,29],
                        powerball: 9
                    },
                    {   firstFive: [17,25,60,64,66],
                        powerball: 6
                    },
                    {   firstFive: [4,22,35,64,67],
                        powerball: 4
                    }
                ]
            },
            {
                name: 'Card 7 - Shell',
                numbers: [
                    {   firstFive: [7,9,24,32,36],
                        powerball: 7
                    },
                    {   firstFive: [31,36,46,48,59],
                        powerball: 17
                    },
                    {   firstFive: [7,10,30,32,67],
                        powerball: 13
                    },
                    {   firstFive: [27,30,36,49,69],
                        powerball: 25
                    },
                    {   firstFive: [31,51,54,58,69],
                        powerball: 23
                    },
                    {   firstFive: [18,30,33,42,44],
                        powerball: 7
                    },
                    {   firstFive: [7,15,35,63,69],
                        powerball: 11
                    }
                ]
            },
            {
                name: 'Card 8 - Shell',
                numbers: [
                    {   firstFive: [8,13,22,31,40],
                        powerball: 14
                    },
                    {   firstFive: [4,16,30,52,53],
                        powerball: 9
                    },
                    {   firstFive: [2,14,20,40,64],
                        powerball: 9
                    },
                    {   firstFive: [31,37,43,57,62],
                        powerball: 20
                    },
                    {   firstFive: [3,45,53,65,69],
                        powerball: 2
                    },
                    {   firstFive: [22,28,30,35,57],
                        powerball: 19
                    },
                    {   firstFive: [38,47,53,54,61],
                        powerball: 16
                    }
                ]
            },
            {
                name: 'Card 9 - Shell',
                numbers: [
                    {   firstFive: [26,32,44,46,56],
                        powerball: 1
                    },
                    {   firstFive: [11,23,59,65,69],
                        powerball: 2
                    },
                    {   firstFive: [17,33,35,42,48],
                        powerball: 15
                    },
                    {   firstFive: [12,27,34,48,59],
                        powerball: 11
                    },
                    {   firstFive: [2,15,16,42,69],
                        powerball: 5
                    },
                    {   firstFive: [12,20,28,48,57],
                        powerball: 24
                    },
                    {   firstFive: [1,22,27,50,54],
                        powerball: 15
                    }
                ]
            }
        ]

        vm.matches = function(theNumber) {
            if(vm.numbers.indexOf(theNumber) != -1) {
                return true;
            }
            return false;
        }

        vm.matchesPowerball = function(theNumber) {
            if(vm.powerball == theNumber) {
                return true;
            }
            return false;
        }


        vm.filteredTickets = function() {
            angular.forEach(vm.cards, function(card) {
                card.isVisible = false;
                angular.forEach(card.numbers, function(ticket, index) {
                    ticket.isVisible = false;

                    if(_.intersection(ticket.firstFive, vm.numbers).length > 0) {
                        ticket.isVisible = true;
                        card.isVisible = true;
                        $log.info('**Have a match!', card.name + ': ' + vm.indexMapper[index]);
                    }

                    if(ticket.powerball == vm.powerball) {
                        ticket.isVisible = true;
                        card.isVisible = true;
                        $log.info('**Have a match on Powerball!', card.name + ': ' + vm.indexMapper[index]);
                    }
                })
            })
        };
    });

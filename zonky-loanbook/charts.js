
google.charts.load('current', {'packages':['bar', 'line', 'corechart']});
    function drawBAR3Chart0() {
        var data = google.visualization.arrayToDataTable([
                ['Účel', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Auto-moto (154 z 10968)',
                    0, 0.01, 0, 0.12, 0, 0.14, 0, 0.22, 0.34, 0.37, 0.21
                    ], 
                   ['Cestování (12 z 646)',
                    0, 0, 0, 0.15, 0, 0.15, 0, 0.31, 0.93, 0.15, 0.15
                    ], 
                   ['Domácnost (247 z 11649)',
                    0, 0.01, 0.03, 0.15, 0, 0.26, 0, 0.47, 0.43, 0.39, 0.39
                    ], 
                   ['Elektronika (11 z 765)',
                    0, 0, 0, 0.13, 0, 0.13, 0, 0.39, 0, 0.39, 0.39
                    ], 
                   ['Jiné (164 z 8866)',
                    0, 0.01, 0.01, 0.09, 0, 0.3, 0, 0.45, 0.37, 0.35, 0.26
                    ], 
                   ['Refinancování půjček (249 z 12275)',
                    0, 0.02, 0.04, 0.12, 0, 0.31, 0, 0.34, 0.36, 0.39, 0.44
                    ], 
                   ['Vlastní projekt (59 z 2894)',
                    0, 0, 0.07, 0.07, 0, 0.21, 0, 0.55, 0.41, 0.55, 0.17
                    ], 
                   ['Vzdělání (8 z 563)',
                    0, 0, 0, 0.18, 0, 0.18, 0, 0.18, 0.18, 0.71, 0
                    ], 
                   ['Zdraví (12 z 704)',
                    0, 0, 0.14, 0.14, 0, 0.28, 0, 0.28, 0.14, 0.28, 0.43
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle účelu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            bars: 'horizontal',
            axes: {
                x: {
                  0: {label: 'Zesplatněno z celku [%]'}
                },
            },
                        series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }
,
            isStacked: true
        };
        var chart_div = document.getElementById('chart-BAR-0-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawBAR3Chart0);
    function drawBAR3Chart1() {
        var data = google.visualization.arrayToDataTable([
                ['Kraj', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Hlavní město Praha (92 z 6157)',
                    0, 0, 0.05, 0.15, 0, 0.15, 0, 0.29, 0.36, 0.34, 0.16
                    ], 
                   ['Jihomoravský kraj (58 z 5063)',
                    0, 0.02, 0.04, 0.08, 0, 0.14, 0, 0.22, 0.22, 0.26, 0.18
                    ], 
                   ['Jihočeský kraj (61 z 2372)',
                    0, 0, 0.08, 0.08, 0, 0.42, 0, 0.55, 0.51, 0.46, 0.46
                    ], 
                   ['Karlovarský kraj (26 z 1453)',
                    0, 0, 0, 0, 0, 0.21, 0, 0.41, 0.55, 0.34, 0.28
                    ], 
                   ['Kraj Vysočina (36 z 1812)',
                    0, 0, 0, 0.17, 0, 0.28, 0, 0.39, 0.5, 0.22, 0.44
                    ], 
                   ['Královéhradecký kraj (49 z 2260)',
                    0, 0, 0, 0.09, 0, 0.35, 0, 0.58, 0.27, 0.53, 0.35
                    ], 
                   ['Liberecký kraj (54 z 2393)',
                    0, 0, 0, 0.04, 0, 0.29, 0, 0.5, 0.59, 0.5, 0.33
                    ], 
                   ['Moravskoslezský kraj (129 z 6257)',
                    0, 0.02, 0.03, 0.13, 0, 0.37, 0, 0.4, 0.32, 0.42, 0.38
                    ], 
                   ['Olomoucký kraj (46 z 2810)',
                    0, 0, 0, 0.11, 0, 0.11, 0, 0.25, 0.25, 0.53, 0.39
                    ], 
                   ['Pardubický kraj (47 z 2245)',
                    0, 0.04, 0, 0.13, 0, 0.27, 0, 0.49, 0.4, 0.4, 0.36
                    ], 
                   ['Plzeňský kraj (56 z 2455)',
                    0, 0.04, 0, 0.16, 0, 0.2, 0, 0.49, 0.53, 0.45, 0.41
                    ], 
                   ['Středočeský kraj (115 z 7236)',
                    0, 0.01, 0, 0.07, 0, 0.19, 0, 0.37, 0.3, 0.28, 0.36
                    ], 
                   ['Zlínský kraj (36 z 2344)',
                    0, 0.04, 0.09, 0.26, 0, 0.26, 0, 0.13, 0.3, 0.21, 0.26
                    ], 
                   ['Ústecký kraj (111 z 4473)',
                    0, 0, 0.02, 0.2, 0, 0.34, 0, 0.45, 0.54, 0.6, 0.34
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle kraje žadatele',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            bars: 'horizontal',
            axes: {
                x: {
                  0: {label: 'Zesplatněno z celku [%]'}
                },
            },
                        series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }
,
            isStacked: true
        };
        var chart_div = document.getElementById('chart-BAR-1-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawBAR3Chart1);
    function drawBAR3Chart2() {
        var data = google.visualization.arrayToDataTable([
                ['Zdroj příjmu', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Důchod (64 z 2463)',
                    0, 0.08, 0.08, 0.16, 0, 0.49, 0, 0.53, 0.37, 0.49, 0.41
                    ], 
                   ['Jiné (7 z 376)',
                    0, 0, 0, 0.27, 0, 0, 0, 0.27, 0.27, 0.53, 0.53
                    ], 
                   ['OSVČ (86 z 5896)',
                    0, 0, 0.03, 0.12, 0, 0.15, 0, 0.42, 0.29, 0.34, 0.1
                    ], 
                   ['Podnikatel (16 z 885)',
                    0, 0, 0, 0.34, 0, 0.11, 0, 0.34, 0.23, 0.79, 0
                    ], 
                   ['Rodičovská dovolená (31 z 1310)',
                    0, 0, 0, 0.08, 0, 0.08, 0, 0.31, 0.69, 0.53, 0.69
                    ], 
                   ['Student (5 z 135)',
                    0, 0, 0, 0, 0, 0, 0, 0.74, 0.74, 0.74, 1.48
                    ], 
                   ['Svobodné povolání (9 z 155)',
                    0, 0, 0, 0, 0, 0, 0, 1.29, 2.58, 0.65, 1.29
                    ], 
                   ['Zaměstnanec (696 z 38103)',
                    0, 0.01, 0.02, 0.11, 0, 0.26, 0, 0.36, 0.37, 0.37, 0.33
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle zdroje příjmu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            bars: 'horizontal',
            axes: {
                x: {
                  0: {label: 'Zesplatněno z celku [%]'}
                },
            },
                        series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }
,
            isStacked: true
        };
        var chart_div = document.getElementById('chart-BAR-2-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawBAR3Chart2);
    function drawBAR3Chart3() {
        var data = google.visualization.arrayToDataTable([
                ['Výše úvěru [tis. Kč]', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   [' do 50 (326 z 13760)',
                    0, 0, 0.02, 0.05, 0, 0.22, 0, 0.35, 0.42, 0.63, 0.68
                    ], 
                   ['od 50 do 100 (263 z 11263)',
                    0, 0, 0.01, 0.11, 0, 0.28, 0, 0.48, 0.59, 0.43, 0.45
                    ], 
                   ['od 100 do 150 (137 z 6768)',
                    0, 0.04, 0.01, 0.18, 0, 0.21, 0, 0.55, 0.5, 0.46, 0.07
                    ], 
                   ['od 150 do 200 (92 z 6195)',
                    0, 0, 0.02, 0.11, 0, 0.34, 0, 0.42, 0.16, 0.31, 0.13
                    ], 
                   ['od 200 do 250 (31 z 3202)',
                    0, 0.03, 0.06, 0.16, 0, 0.31, 0, 0.22, 0.12, 0.06, 0
                    ], 
                   ['od 250 do 300 (34 z 3155)',
                    0, 0.03, 0.03, 0.29, 0, 0.16, 0, 0.22, 0.22, 0.1, 0.03
                    ], 
                   ['od 300 do 350 (10 z 1384)',
                    0, 0.07, 0, 0.07, 0, 0.22, 0, 0.07, 0.22, 0.07, 0
                    ], 
                   ['od 350 do 400 (8 z 1316)',
                    0, 0, 0, 0.08, 0, 0.15, 0, 0.23, 0.15, 0, 0
                    ], 
                   ['od 400 do 450 (8 z 600)',
                    0, 0, 0.33, 0.17, 0, 0.67, 0, 0.17, 0, 0, 0
                    ], 
                   ['od 450 do 500 (7 z 1274)',
                    0, 0, 0.08, 0.31, 0, 0.08, 0, 0.08, 0, 0, 0
                    ], 
                   ['od 500 do 550 (0 z 89)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 550 do 600 (0 z 120)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 600 do 650 (0 z 54)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 650 do 700 (0 z 52)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   [' od 700 (0 z 98)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle výše úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            bars: 'horizontal',
            axes: {
                x: {
                  0: {label: 'Zesplatněno z celku [%]'}
                },
            },
                        series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }
,
            isStacked: true
        };
        var chart_div = document.getElementById('chart-BAR-3-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawBAR3Chart3);
    function drawBAR3Chart4() {
        var data = google.visualization.arrayToDataTable([
                ['Délka úvěru [měs.]', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   [' do 12 (39 z 1697)',
                    0, 0, 0, 0, 0, 0.12, 0, 0.12, 0.35, 0.53, 1.18
                    ], 
                   ['od 12 do 24 (104 z 5272)',
                    0, 0, 0.02, 0.06, 0, 0.17, 0, 0.34, 0.51, 0.63, 0.25
                    ], 
                   ['od 24 do 36 (130 z 5379)',
                    0, 0, 0, 0.15, 0, 0.19, 0, 0.52, 0.3, 0.54, 0.73
                    ], 
                   ['od 36 do 48 (131 z 7547)',
                    0, 0, 0.01, 0.11, 0, 0.27, 0, 0.38, 0.42, 0.37, 0.17
                    ], 
                   ['od 48 do 60 (114 z 6125)',
                    0, 0.03, 0.07, 0.15, 0, 0.11, 0, 0.33, 0.38, 0.49, 0.31
                    ], 
                   ['od 60 do 72 (88 z 5260)',
                    0, 0.02, 0.02, 0.21, 0, 0.23, 0, 0.3, 0.25, 0.25, 0.4
                    ], 
                   [' od 72 (310 z 18050)',
                    0, 0.02, 0.03, 0.11, 0, 0.34, 0, 0.4, 0.37, 0.27, 0.18
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle délky úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            bars: 'horizontal',
            axes: {
                x: {
                  0: {label: 'Zesplatněno z celku [%]'}
                },
            },
                        series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }
,
            isStacked: true
        };
        var chart_div = document.getElementById('chart-BAR-4-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawBAR3Chart4);
    function drawBAR3Chart5() {
        var data = google.visualization.arrayToDataTable([
                ['Má příběh?', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Ne (51 z 7600)',
                    0, 0, 0.03, 0.01, 0, 0.09, 0, 0.18, 0.12, 0.11, 0.13
                    ], 
                   ['Ano (865 z 41730)',
                    0, 0.01, 0.02, 0.14, 0, 0.27, 0, 0.41, 0.42, 0.44, 0.35
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle příběhu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            bars: 'horizontal',
            axes: {
                x: {
                  0: {label: 'Zesplatněno z celku [%]'}
                },
            },
                        series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }
,
            isStacked: true
        };
        var chart_div = document.getElementById('chart-BAR-5-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawBAR3Chart5);
    function drawBAR3Chart6() {
        var data = google.visualization.arrayToDataTable([
                ['Má pojištění?', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Ne (84 z 19547)',
                    0, 0, 0.02, 0.04, 0, 0.05, 0, 0.11, 0.08, 0.06, 0.08
                    ], 
                   ['Ano (61 z 8913)',
                    0, 0, 0, 0.04, 0, 0.07, 0, 0.13, 0.16, 0.12, 0.16
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle pojištění, od jeho zavedení',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            bars: 'horizontal',
            axes: {
                x: {
                  0: {label: 'Zesplatněno z celku [%]'}
                },
            },
                        series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }
,
            isStacked: true
        };
        var chart_div = document.getElementById('chart-BAR-6-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawBAR3Chart6);
    function drawBAR3Chart7() {
        var data = google.visualization.arrayToDataTable([
                ['Byl při originaci investorem?', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Ne (909 z 47330)',
                    0, 0.01, 0.03, 0.12, 0, 0.25, 0, 0.38, 0.39, 0.4, 0.33
                    ], 
                   ['Ano (7 z 2000)',
                    0, 0, 0, 0, 0, 0.05, 0, 0.2, 0, 0.05, 0.05
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle statusu investora',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            bars: 'horizontal',
            axes: {
                x: {
                  0: {label: 'Zesplatněno z celku [%]'}
                },
            },
                        series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }
,
            isStacked: true
        };
        var chart_div = document.getElementById('chart-BAR-7-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawBAR3Chart7);
    function drawBAR3Chart8() {
        var data = google.visualization.arrayToDataTable([
                ['Počet předchozích půjček', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['0 (848 z 39898)',
                    0, 0.02, 0.03, 0.13, 0, 0.27, 0, 0.42, 0.42, 0.46, 0.39
                    ], 
                   ['1 (63 z 7463)',
                    0, 0, 0, 0.11, 0, 0.2, 0, 0.17, 0.21, 0.11, 0.04
                    ], 
                   ['2 (5 z 1504)',
                    0, 0, 0, 0.07, 0, 0, 0, 0.2, 0.07, 0, 0
                    ], 
                   ['3 (0 z 339)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['4 (0 z 85)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['5 (0 z 25)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['6 (0 z 10)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['7 (0 z 5)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['8 (0 z 1)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle počtu předchozích půjček',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            bars: 'horizontal',
            axes: {
                x: {
                  0: {label: 'Zesplatněno z celku [%]'}
                },
            },
                        series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }
,
            isStacked: true
        };
        var chart_div = document.getElementById('chart-BAR-8-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawBAR3Chart8);
    function drawLINE3Chart9() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['2016-02',
                    0, 0, 0, 0.92, 0, 1.47, 0, 2.27, 0, 6.67, 0
                    ], 
                   ['2016-03',
                    0, 0, 0, 0, 0, 1.89, 0, 1.56, 3.33, 11.43, 28.57
                    ], 
                   ['2016-04',
                    0, 0, 0, 3.23, 0, 0, 0, 3.45, 4.76, 25, 21.43
                    ], 
                   ['2016-05',
                    0, 0, 0, 1.22, 0, 1.92, 0, 7.69, 2.63, 6.45, 10.71
                    ], 
                   ['2016-06',
                    0, 0, 3.85, 0, 0, 2.33, 0, 5.13, 0, 5.71, 12.5
                    ], 
                   ['2016-07',
                    0, 0, 0, 0, 0, 6.06, 0, 9.09, 4.55, 5.88, 25
                    ], 
                   ['2016-08',
                    0, 0, 0, 1.75, 0, 0, 0, 5.13, 5.41, 13.64, 7.41
                    ], 
                   ['2016-09',
                    0, 0, 0, 0, 0, 2.44, 0, 9.09, 0, 6.67, 16.67
                    ], 
                   ['2016-10',
                    0, 0, 0, 0, 0, 2.5, 0, 6.25, 5.26, 11.54, 8
                    ], 
                   ['2016-11',
                    0, 0, 0, 0.98, 0, 1.27, 0, 5.26, 3.64, 15.69, 20
                    ], 
                   ['2016-12',
                    0, 0, 0, 0, 0, 4.71, 0, 8.2, 8.7, 18.33, 21.88
                    ], 
                   ['2017-01',
                    0, 0, 0, 1.18, 0, 1.52, 0, 3.12, 7.14, 15.22, 11.11
                    ], 
                   ['2017-02',
                    0, 0, 0, 0, 0, 0, 0, 1.92, 5.71, 11.11, 19.05
                    ], 
                   ['2017-03',
                    0, 0, 0, 0.98, 0, 3.77, 0, 2.17, 2.08, 8.7, 23.33
                    ], 
                   ['2017-04',
                    0, 0, 0, 1.16, 0, 1.18, 0, 11.86, 28.57, 8.7, 21.05
                    ], 
                   ['2017-05',
                    0, 0, 0, 2.67, 0, 6.62, 0, 2.88, 7.79, 10.94, 17.39
                    ], 
                   ['2017-06',
                    0, 1.3, 0, 1.08, 0, 2.87, 0, 6.62, 17.05, 16.13, 20.59
                    ], 
                   ['2017-07',
                    0, 1.54, 0, 1.79, 0, 4.6, 0, 8.57, 13.51, 11.32, 6.45
                    ], 
                   ['2017-08',
                    0, 0, 1.24, 1.48, 0, 3.03, 0, 5.71, 9.09, 20.9, 13.33
                    ], 
                   ['2017-09',
                    0, 0, 0.57, 1.13, 0, 3.56, 0, 6.63, 4.24, 10.34, 24.32
                    ], 
                   ['2017-10',
                    0, 0, 1.06, 0, 0, 3.05, 0, 6.48, 7.86, 12.73, 20
                    ], 
                   ['2017-11',
                    0, 1.41, 0, 0.42, 0, 3.49, 0, 2.8, 6.59, 9.52, 15
                    ], 
                   ['2017-12',
                    0, 0.98, 0, 0.88, 0, 3.35, 0, 4.19, 9.66, 8.05, 15.79
                    ], 
                   ['2018-01',
                    0, 1.08, 0.56, 1.12, 0, 1.64, 0, 5.09, 7.35, 9.33, 12.77
                    ], 
                   ['2018-02',
                    0, 0, 0.52, 0.57, 0, 1.9, 0, 3.23, 6.94, 5.88, 15.22
                    ], 
                   ['2018-03',
                    0, 0, 0.45, 0.45, 0, 3.24, 0, 4.1, 4.09, 7.19, 8.11
                    ], 
                   ['2018-04',
                    0, 0, 0, 0.48, 0, 1.29, 0, 3.46, 5.03, 9.9, 12.68
                    ], 
                   ['2018-05',
                    0, 0, 0.41, 0.65, 0, 1.61, 0, 2.14, 6.44, 4.51, 10
                    ], 
                   ['2018-06',
                    0, 0, 0.32, 0.21, 0, 0.57, 0, 2.55, 2.94, 4.1, 6.56
                    ], 
                   ['2018-07',
                    0, 0, 0, 0.63, 0, 0.66, 0, 2.59, 3.08, 1.83, 3.17
                    ], 
                   ['2018-08',
                    0, 0, 0, 0.45, 0, 0.99, 0, 0.86, 0.59, 2.26, 2.02
                    ], 
                   ['2018-09',
                    0, 0, 0, 0, 0, 0, 0, 0, 1.39, 3.12, 7.95
                    ], 
                   ['2018-10',
                    0, 0, 0, 0.52, 0, 0.52, 0, 1.95, 0.57, 1.48, 2.3
                    ], 
                   ['2018-11',
                    0, 0, 0.22, 0, 0, 0.18, 0, 0.59, 1.18, 0, 1.56
                    ], 
                   ['2018-12',
                    0, 0, 0, 0, 0, 0.26, 0, 0.3, 0, 0.85, 3.28
                    ], 
                   ['2019-01',
                    0, 0, 0, 0, 0, 0, 0, 0.26, 0, 0, 1.92
                    ], 
                   ['2019-02',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-03',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-04',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-05',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění podle data originace a ratingu [%]',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            axes: {
                y: {
                  0: {label: 'Zesplatněno z originovaných [%]'}
                },
            }
            ,            series: {
                0: { color: '#c0498b'},
                1: { color: '#8b59be'},
                2: { color: '#596abe'},
                3: { color: '#599ebe'},
                4: { color: '#5abfa0'},
                5: { color: '#67cd75'},
                6: { color: '#91c95a'},
                7: { color: '#cebe5a'},
                8: { color: '#d7954b'},
                9: { color: '#e75637'},
                10: { color: '#d12f2f'}
            }

        };
        var chart_div = document.getElementById('chart-LINE-9-interactive');
        var chart = new google.charts.Line(chart_div);

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
        // nothing
  google.charts.setOnLoadCallback(drawLINE3Chart9);
    function drawLINE3Chart10() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', 'Zesplatněno [%]', 'S pojištěním [%]', 'S příběhem [%]'],
                   ['2016-02',
                    2.18, 0, 99.07000000000001
                    ], 
                   ['2016-03',
                    3.8600000000000003, 0, 100
                    ], 
                   ['2016-04',
                    5.4399999999999995, 0, 99.58
                    ], 
                   ['2016-05',
                    3.5700000000000003, 0, 99.03
                    ], 
                   ['2016-06',
                    3.05, 0, 99.24
                    ], 
                   ['2016-07',
                    5.38, 0, 99.1
                    ], 
                   ['2016-08',
                    3.75, 0, 97
                    ], 
                   ['2016-09',
                    3.42, 0, 98.72
                    ], 
                   ['2016-10',
                    3.6900000000000004, 0, 98.15
                    ], 
                   ['2016-11',
                    4.96, 0, 99.05000000000001
                    ], 
                   ['2016-12',
                    7.249999999999999, 0, 99.33999999999999
                    ], 
                   ['2017-01',
                    4.29, 0, 99.49
                    ], 
                   ['2017-02',
                    2.63, 0, 99.21
                    ], 
                   ['2017-03',
                    4.04, 0, 98.48
                    ], 
                   ['2017-04',
                    6.38, 0, 98.98
                    ], 
                   ['2017-05',
                    4.38, 0, 98.75
                    ], 
                   ['2017-06',
                    5.140000000000001, 0, 98.89
                    ], 
                   ['2017-07',
                    4.5600000000000005, 0, 98.55000000000001
                    ], 
                   ['2017-08',
                    4.43, 0, 97.31
                    ], 
                   ['2017-09',
                    3.82, 0, 97.8
                    ], 
                   ['2017-10',
                    3.85, 0, 97.39
                    ], 
                   ['2017-11',
                    2.92, 0, 97.58
                    ], 
                   ['2017-12',
                    3.5700000000000003, 0, 97.39999999999999
                    ], 
                   ['2018-01',
                    3.27, 0, 96.8
                    ], 
                   ['2018-02',
                    2.67, 0, 97.26
                    ], 
                   ['2018-03',
                    2.7, 0, 96.81
                    ], 
                   ['2018-04',
                    2.56, 17.22, 96.67999999999999
                    ], 
                   ['2018-05',
                    2.18, 29.160000000000004, 95.47
                    ], 
                   ['2018-06',
                    1.3599999999999999, 25.259999999999998, 94.58
                    ], 
                   ['2018-07',
                    0.98, 28.07, 94.67
                    ], 
                   ['2018-08',
                    0.6799999999999999, 26.229999999999997, 93.91000000000001
                    ], 
                   ['2018-09',
                    0.73, 26.19, 90.99000000000001
                    ], 
                   ['2018-10',
                    0.7000000000000001, 25.990000000000002, 77.79
                    ], 
                   ['2018-11',
                    0.35, 28.58, 67.27
                    ], 
                   ['2018-12',
                    0.29, 31.14, 62.99
                    ], 
                   ['2019-01',
                    0.15, 32.37, 64
                    ], 
                   ['2019-02',
                    0, 35.410000000000004, 64.59
                    ], 
                   ['2019-03',
                    0, 36.13, 64.03
                    ], 
                   ['2019-04',
                    0, 35.22, 62.86000000000001
                    ], 
                   ['2019-05',
                    0, 40.71, 61.739999999999995
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění, příběhy a pojištění podle data originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 14. 6. 2019 ze Zonky loanbooku k 6/2019.'
            },
            axes: {
                y: {
                  0: {label: ''}
                },
            }
            
        };
        var chart_div = document.getElementById('chart-LINE-10-interactive');
        var chart = new google.charts.Line(chart_div);

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
        // nothing
  google.charts.setOnLoadCallback(drawLINE3Chart10);

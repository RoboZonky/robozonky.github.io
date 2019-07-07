
google.charts.load('current', {'packages':['bar', 'line', 'corechart']});
    function drawBAR3Chart0() {
        var data = google.visualization.arrayToDataTable([
                ['Účel', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Auto-moto (170 z 11549)',
                    0, 0.01, 0.01, 0.12, 0, 0.16, 0, 0.23, 0.36, 0.38, 0.22
                    ], 
                   ['Cestování (12 z 737)',
                    0, 0, 0, 0.14, 0, 0.14, 0, 0.27, 0.81, 0.14, 0.14
                    ], 
                   ['Domácnost (261 z 12349)',
                    0, 0.01, 0.02, 0.15, 0, 0.26, 0, 0.47, 0.42, 0.39, 0.39
                    ], 
                   ['Elektronika (14 z 797)',
                    0, 0, 0.13, 0.13, 0, 0.25, 0, 0.38, 0, 0.5, 0.38
                    ], 
                   ['Jiné (178 z 9375)',
                    0, 0.01, 0.01, 0.09, 0, 0.3, 0, 0.46, 0.41, 0.36, 0.27
                    ], 
                   ['Refinancování půjček (261 z 12695)',
                    0, 0.02, 0.05, 0.13, 0, 0.31, 0, 0.35, 0.36, 0.39, 0.45
                    ], 
                   ['Vlastní projekt (62 z 3040)',
                    0, 0, 0.07, 0.07, 0, 0.2, 0, 0.56, 0.46, 0.53, 0.16
                    ], 
                   ['Vzdělání (10 z 601)',
                    0, 0, 0, 0.17, 0, 0.5, 0, 0.17, 0.17, 0.67, 0
                    ], 
                   ['Zdraví (13 z 748)',
                    0, 0, 0.13, 0.13, 0, 0.27, 0, 0.27, 0.13, 0.27, 0.53
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle účelu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
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
                   ['Hlavní město Praha (98 z 6433)',
                    0, 0, 0.05, 0.16, 0, 0.16, 0, 0.3, 0.39, 0.33, 0.16
                    ], 
                   ['Jihomoravský kraj (68 z 5326)',
                    0, 0.02, 0.06, 0.09, 0, 0.21, 0, 0.23, 0.21, 0.26, 0.21
                    ], 
                   ['Jihočeský kraj (62 z 2480)',
                    0, 0, 0.08, 0.08, 0, 0.4, 0, 0.56, 0.48, 0.44, 0.44
                    ], 
                   ['Karlovarský kraj (30 z 1540)',
                    0, 0, 0, 0, 0, 0.26, 0, 0.52, 0.52, 0.39, 0.26
                    ], 
                   ['Kraj Vysočina (36 z 1908)',
                    0, 0, 0, 0.16, 0, 0.26, 0, 0.37, 0.47, 0.21, 0.42
                    ], 
                   ['Královéhradecký kraj (53 z 2383)',
                    0, 0, 0, 0.08, 0, 0.38, 0, 0.59, 0.25, 0.5, 0.42
                    ], 
                   ['Liberecký kraj (55 z 2531)',
                    0, 0, 0, 0.04, 0, 0.28, 0, 0.47, 0.55, 0.51, 0.32
                    ], 
                   ['Moravskoslezský kraj (138 z 6596)',
                    0, 0.02, 0.05, 0.12, 0, 0.35, 0, 0.39, 0.36, 0.41, 0.39
                    ], 
                   ['Olomoucký kraj (48 z 2950)',
                    0, 0, 0, 0.14, 0, 0.1, 0, 0.24, 0.24, 0.54, 0.37
                    ], 
                   ['Pardubický kraj (50 z 2366)',
                    0, 0.04, 0, 0.17, 0, 0.25, 0, 0.46, 0.42, 0.42, 0.34
                    ], 
                   ['Plzeňský kraj (61 z 2579)',
                    0, 0.04, 0, 0.16, 0, 0.23, 0, 0.5, 0.58, 0.47, 0.39
                    ], 
                   ['Středočeský kraj (125 z 7609)',
                    0, 0.01, 0, 0.07, 0, 0.2, 0, 0.38, 0.33, 0.3, 0.35
                    ], 
                   ['Zlínský kraj (39 z 2468)',
                    0, 0.04, 0.12, 0.24, 0, 0.28, 0, 0.12, 0.32, 0.2, 0.24
                    ], 
                   ['Ústecký kraj (118 z 4722)',
                    0, 0, 0.02, 0.19, 0, 0.32, 0, 0.44, 0.53, 0.61, 0.38
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle kraje žadatele',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
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
                   ['Důchod (71 z 2600)',
                    0, 0.08, 0.08, 0.23, 0, 0.54, 0, 0.58, 0.35, 0.5, 0.38
                    ], 
                   ['Jiné (8 z 395)',
                    0, 0, 0, 0.25, 0, 0, 0, 0.25, 0.51, 0.51, 0.51
                    ], 
                   ['OSVČ (93 z 6121)',
                    0, 0, 0.05, 0.11, 0, 0.15, 0, 0.46, 0.29, 0.33, 0.13
                    ], 
                   ['Podnikatel (16 z 912)',
                    0, 0, 0, 0.33, 0, 0.11, 0, 0.33, 0.22, 0.77, 0
                    ], 
                   ['Rodičovská dovolená (35 z 1387)',
                    0, 0, 0, 0.07, 0, 0.07, 0, 0.29, 0.79, 0.5, 0.79
                    ], 
                   ['Student (5 z 139)',
                    0, 0, 0, 0, 0, 0, 0, 0.72, 0.72, 0.72, 1.44
                    ], 
                   ['Svobodné povolání (9 z 158)',
                    0, 0, 0, 0, 0, 0, 0, 1.27, 2.53, 0.63, 1.27
                    ], 
                   ['Zaměstnanec (742 z 40172)',
                    0, 0.01, 0.02, 0.11, 0, 0.26, 0, 0.35, 0.38, 0.38, 0.33
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle zdroje příjmu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
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
                   [' do 50 (357 z 14612)',
                    0, 0, 0.02, 0.05, 0, 0.25, 0, 0.36, 0.43, 0.65, 0.68
                    ], 
                   ['od 50 do 100 (281 z 11844)',
                    0, 0, 0.02, 0.1, 0, 0.28, 0, 0.47, 0.62, 0.42, 0.46
                    ], 
                   ['od 100 do 150 (141 z 7054)',
                    0, 0.04, 0.01, 0.18, 0, 0.2, 0, 0.54, 0.48, 0.47, 0.07
                    ], 
                   ['od 150 do 200 (95 z 6460)',
                    0, 0, 0.02, 0.11, 0, 0.33, 0, 0.43, 0.17, 0.29, 0.12
                    ], 
                   ['od 200 do 250 (36 z 3350)',
                    0, 0.03, 0.09, 0.21, 0, 0.3, 0, 0.24, 0.15, 0.06, 0
                    ], 
                   ['od 250 do 300 (36 z 3297)',
                    0, 0.03, 0.03, 0.3, 0, 0.18, 0, 0.21, 0.21, 0.09, 0.03
                    ], 
                   ['od 300 do 350 (11 z 1459)',
                    0, 0.07, 0, 0.07, 0, 0.21, 0, 0.14, 0.21, 0.07, 0
                    ], 
                   ['od 350 do 400 (9 z 1382)',
                    0, 0, 0.07, 0.07, 0, 0.14, 0, 0.22, 0.14, 0, 0
                    ], 
                   ['od 400 do 450 (8 z 632)',
                    0, 0, 0.32, 0.16, 0, 0.63, 0, 0.16, 0, 0, 0
                    ], 
                   ['od 450 do 500 (7 z 1317)',
                    0, 0, 0.08, 0.3, 0, 0.08, 0, 0.08, 0, 0, 0
                    ], 
                   ['od 500 do 550 (0 z 110)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 550 do 600 (0 z 133)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 600 do 650 (0 z 66)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 650 do 700 (0 z 65)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   [' od 700 (0 z 110)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle výše úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
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
                   [' do 12 (40 z 1794)',
                    0, 0, 0, 0, 0, 0.11, 0, 0.11, 0.33, 0.5, 1.17
                    ], 
                   ['od 12 do 24 (110 z 5589)',
                    0, 0, 0.02, 0.05, 0, 0.16, 0, 0.34, 0.5, 0.63, 0.27
                    ], 
                   ['od 24 do 36 (139 z 5624)',
                    0, 0, 0, 0.14, 0, 0.18, 0, 0.53, 0.34, 0.53, 0.75
                    ], 
                   ['od 36 do 48 (145 z 7938)',
                    0, 0, 0.01, 0.11, 0, 0.3, 0, 0.37, 0.47, 0.4, 0.16
                    ], 
                   ['od 48 do 60 (119 z 6381)',
                    0, 0.03, 0.06, 0.14, 0, 0.13, 0, 0.31, 0.38, 0.5, 0.31
                    ], 
                   ['od 60 do 72 (92 z 5489)',
                    0, 0.02, 0.02, 0.2, 0, 0.26, 0, 0.29, 0.26, 0.24, 0.4
                    ], 
                   [' od 72 (336 z 19076)',
                    0, 0.02, 0.04, 0.12, 0, 0.34, 0, 0.42, 0.37, 0.27, 0.18
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle délky úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
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
                   ['Ne (62 z 8526)',
                    0, 0, 0.04, 0.01, 0, 0.11, 0, 0.18, 0.14, 0.12, 0.14
                    ], 
                   ['Ano (919 z 43365)',
                    0, 0.01, 0.03, 0.14, 0, 0.28, 0, 0.42, 0.43, 0.45, 0.36
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle příběhu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
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
                   ['Ne (103 z 21166)',
                    0, 0, 0.02, 0.04, 0, 0.06, 0, 0.1, 0.09, 0.09, 0.09
                    ], 
                   ['Ano (75 z 9855)',
                    0, 0, 0, 0.04, 0, 0.07, 0, 0.16, 0.19, 0.14, 0.15
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle pojištění, od jeho zavedení',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
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
                   ['Ne (973 z 49795)',
                    0, 0.01, 0.03, 0.13, 0, 0.26, 0, 0.38, 0.4, 0.41, 0.34
                    ], 
                   ['Ano (8 z 2096)',
                    0, 0, 0, 0, 0, 0.05, 0, 0.24, 0, 0.05, 0.05
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle statusu investora',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
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
                   ['0 (905 z 41720)',
                    0, 0.01, 0.03, 0.13, 0, 0.27, 0, 0.43, 0.43, 0.47, 0.4
                    ], 
                   ['1 (69 z 7975)',
                    0, 0, 0.01, 0.1, 0, 0.21, 0, 0.18, 0.21, 0.11, 0.04
                    ], 
                   ['2 (7 z 1666)',
                    0, 0, 0.06, 0.06, 0, 0, 0, 0.18, 0.12, 0, 0
                    ], 
                   ['3 (0 z 385)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['4 (0 z 101)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['5 (0 z 27)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['6 (0 z 11)',
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
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
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
                    0, 0, 0, 0, 0, 6.06, 0, 9.09, 9.09, 5.88, 25
                    ], 
                   ['2016-08',
                    0, 0, 0, 1.75, 0, 0, 0, 5.13, 5.41, 13.64, 7.41
                    ], 
                   ['2016-09',
                    0, 0, 0, 0, 0, 2.44, 0, 9.09, 0, 6.67, 25
                    ], 
                   ['2016-10',
                    0, 0, 0, 0, 0, 2.5, 0, 6.25, 5.26, 11.54, 8
                    ], 
                   ['2016-11',
                    0, 0, 0, 0.98, 0, 1.27, 0, 7.02, 3.64, 15.69, 20
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
                    0, 0, 0.89, 2.67, 0, 6.62, 0, 2.88, 7.79, 10.94, 17.39
                    ], 
                   ['2017-06',
                    0, 1.3, 0, 1.08, 0, 2.87, 0, 7.28, 17.05, 16.13, 23.53
                    ], 
                   ['2017-07',
                    0, 1.54, 0, 1.79, 0, 5.17, 0, 9.29, 13.51, 11.32, 6.45
                    ], 
                   ['2017-08',
                    0, 0, 1.24, 1.78, 0, 3.54, 0, 5.71, 10, 20.9, 13.33
                    ], 
                   ['2017-09',
                    0, 0, 0.57, 1.13, 0, 3.56, 0, 6.63, 4.24, 10.34, 24.32
                    ], 
                   ['2017-10',
                    0, 0, 1.06, 0, 0, 3.05, 0, 6.94, 7.86, 12.73, 23.33
                    ], 
                   ['2017-11',
                    0, 1.41, 0, 0.63, 0, 3.49, 0, 2.8, 6.59, 9.52, 15
                    ], 
                   ['2017-12',
                    0, 0.98, 0, 0.88, 0, 3.35, 0, 5.12, 10.34, 8.05, 15.79
                    ], 
                   ['2018-01',
                    0, 1.08, 0.56, 1.12, 0, 2.05, 0, 5.09, 8.09, 9.33, 12.77
                    ], 
                   ['2018-02',
                    0, 0, 0.52, 0.57, 0, 2.28, 0, 3.23, 6.94, 5.88, 15.22
                    ], 
                   ['2018-03',
                    0, 0, 0.45, 0.45, 0, 3.83, 0, 4.1, 5, 7.19, 10.81
                    ], 
                   ['2018-04',
                    0, 0, 0.44, 0.72, 0, 1.29, 0, 3.46, 6.03, 11.88, 12.68
                    ], 
                   ['2018-05',
                    0, 0, 0.41, 0.65, 0, 2.26, 0, 2.49, 6.44, 6.77, 10
                    ], 
                   ['2018-06',
                    0, 0, 0.32, 0.21, 0, 0.57, 0, 2.55, 3.43, 4.92, 8.2
                    ], 
                   ['2018-07',
                    0, 0, 0, 0.63, 0, 0.99, 0, 3.02, 3.08, 2.75, 3.17
                    ], 
                   ['2018-08',
                    0, 0, 0, 0.45, 0, 0.99, 0, 1.29, 0.59, 2.26, 2.02
                    ], 
                   ['2018-09',
                    0, 0, 0, 0, 0, 0, 0, 0.54, 1.39, 3.12, 10.23
                    ], 
                   ['2018-10',
                    0, 0, 0, 0.52, 0, 0.52, 0, 1.95, 0.57, 2.22, 2.3
                    ], 
                   ['2018-11',
                    0, 0, 0.22, 0, 0, 0.18, 0, 0.59, 1.18, 0.63, 2.34
                    ], 
                   ['2018-12',
                    0, 0, 0.47, 0.29, 0, 0.26, 0, 0.59, 0.56, 1.71, 3.28
                    ], 
                   ['2019-01',
                    0, 0, 0, 0, 0, 0.23, 0, 0.26, 1.03, 0, 2.88
                    ], 
                   ['2019-02',
                    0, 0, 0, 0, 0, 0, 0, 0, 1.4, 1.36, 0
                    ], 
                   ['2019-03',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-04',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-05',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-06',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění podle data originace a ratingu [%]',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
            },
            axes: {
                y: {
                  0: {label: 'Zesplatněno z originovaných [%]'}
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
            isStacked: false
        };
        var chart_div = document.getElementById('chart-LINE-9-interactive');
        var chart = new google.charts.Line(chart_div);

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
        // nothing
  google.charts.setOnLoadCallback(drawLINE3Chart9);
    function drawLINE3Chart10() {
        var data = google.visualization.arrayToDataTable([
                ['Počet měsíců života půjčky', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['0',
                    0, 0.18, 0.2, 0.53, 0, 1.43, 0, 2.55, 4.14, 6.12, 8.26
                    ], 
                   ['1',
                    0, 0.18, 0.2, 0.54, 0, 1.45, 0, 2.57, 4.17, 6.18, 8.31
                    ], 
                   ['2',
                    0, 0.19, 0.22, 0.58, 0, 1.57, 0, 2.8, 4.48, 6.61, 8.87
                    ], 
                   ['3',
                    0, 0.21, 0.24, 0.61, 0, 1.7, 0, 3.07, 4.81, 7.1, 9.76
                    ], 
                   ['4',
                    0, 0.22, 0.26, 0.66, 0, 1.84, 0, 3.37, 5.2, 7.64, 10.63
                    ], 
                   ['5',
                    0, 0.23, 0.28, 0.71, 0, 2.04, 0, 3.76, 5.65, 8.4, 11.92
                    ], 
                   ['6',
                    0, 0.25, 0.3, 0.77, 0, 2.22, 0, 4.16, 6.13, 9.17, 13.38
                    ], 
                   ['7',
                    0, 0.26, 0.3, 0.82, 0, 2.45, 0, 4.59, 6.78, 9.93, 14.7
                    ], 
                   ['8',
                    0, 0.27, 0.3, 0.87, 0, 2.66, 0, 4.99, 7.34, 10.92, 15.82
                    ], 
                   ['9',
                    0, 0.3, 0.34, 0.92, 0, 2.96, 0, 5.52, 8.18, 11.99, 17.81
                    ], 
                   ['10',
                    0, 0.33, 0.38, 1, 0, 3.26, 0, 6.04, 8.85, 12.88, 18.55
                    ], 
                   ['11',
                    0, 0.3, 0.42, 1.06, 0, 3.43, 0, 6.51, 9.63, 13.91, 20.73
                    ], 
                   ['12',
                    0, 0.34, 0.47, 1.06, 0, 3.72, 0, 6.98, 10.4, 15.01, 22.64
                    ], 
                   ['13',
                    0, 0.41, 0.49, 1.16, 0, 4.05, 0, 7.4, 11.02, 16.26, 24.28
                    ], 
                   ['14',
                    0, 0.46, 0.51, 1.22, 0, 4.31, 0, 8.01, 11.61, 16.99, 25.3
                    ], 
                   ['15',
                    0, 0.52, 0.51, 1.28, 0, 4.62, 0, 8.45, 12.3, 17.63, 27.31
                    ], 
                   ['16',
                    0, 0.59, 0.53, 1.35, 0, 4.56, 0, 8.83, 13.01, 18.25, 28.79
                    ], 
                   ['17',
                    0, 0.72, 0.53, 1.46, 0, 4.91, 0, 9.63, 13.8, 19.91, 30.88
                    ], 
                   ['18',
                    0, 0.64, 0.51, 1.48, 0, 5.25, 0, 10.01, 14.51, 21.02, 31.83
                    ], 
                   ['19',
                    0, 0.57, 0.57, 1.54, 0, 5.43, 0, 10.46, 14.83, 21.53, 32.98
                    ], 
                   ['20',
                    0, 0.22, 0.65, 1.65, 0, 5.31, 0, 11.23, 15.47, 22.66, 33.73
                    ], 
                   ['21',
                    0, 0.28, 0.56, 1.97, 0, 5.59, 0, 11.11, 15.98, 23.23, 34.82
                    ], 
                   ['22',
                    0, 0.35, 0.53, 2.12, 0, 5.73, 0, 11.28, 17.85, 24.28, 35.15
                    ], 
                   ['23',
                    0, 0.42, 0.32, 2.02, 0, 5.88, 0, 11.52, 17.73, 24.77, 37.02
                    ], 
                   ['24',
                    0, 0, 0.38, 1.94, 0, 5.26, 0, 11.44, 18.25, 26.6, 38.92
                    ], 
                   ['25',
                    0, 0, 0.47, 1.94, 0, 5.15, 0, 10.95, 15.79, 26.58, 39.44
                    ], 
                   ['26',
                    0, 0, 0.28, 1.44, 0, 4.02, 0, 11.93, 16.67, 26.44, 41.6
                    ], 
                   ['27',
                    0, 0, 0.37, 1.62, 0, 4.13, 0, 11.34, 13.29, 29.28, 41.38
                    ], 
                   ['28',
                    0, 0, 0.44, 1.61, 0, 4.14, 0, 12.21, 14.01, 29.34, 39.62
                    ], 
                   ['29',
                    0, 0, 0.49, 1.94, 0, 4.89, 0, 13.37, 14.29, 31.51, 42.39
                    ], 
                   ['30',
                    0, 0, 0, 1.93, 0, 5.35, 0, 14.56, 13.71, 30.95, 43.02
                    ], 
                   ['31',
                    0, 0, 0, 2.28, 0, 5.66, 0, 13.53, 11.46, 29.59, 43.48
                    ], 
                   ['32',
                    0, 0, 0, 2.22, 0, 6.3, 0, 13.76, 12.35, 27.38, 40
                    ], 
                   ['33',
                    0, 0, 0, 2.6, 0, 7.14, 0, 14.29, 12.31, 27.4, 40
                    ], 
                   ['34',
                    0, 0, 0, 3.18, 0, 6.9, 0, 13.33, 15.09, 28.36, 43.18
                    ], 
                   ['35',
                    0, 0, 0, 3.12, 0, 6.67, 0, 11.67, 13.95, 27.59, 47.22
                    ], 
                   ['36',
                    0, 0, 0, 2.86, 0, 4.69, 0, 12.5, 11.43, 30.61, 44.44
                    ], 
                   ['37',
                    0, 0, 0, 3.66, 0, 4.08, 0, 13.51, 15.38, 31.82, 45.45
                    ], 
                   ['38',
                    0, 0, 0, 1.64, 0, 5.71, 0, 12.5, 15.79, 30.77, 46.67
                    ], 
                   ['39',
                    0, 0, 0, 0, 0, 11.76, 0, 12.5, 9.09, 29.17, 57.14
                    ], 
                   ['40',
                    0, 0, 0, 0, 0, 7.69, 0, 12.5, 0, 23.08, 0
                    ], 
                   ['41',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění v průběhu života půjčky, podle ratingu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
            },
            axes: {
                y: {
                  0: {label: 'Zesplatněno z doživších se [%]'}
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
            isStacked: false
        };
        var chart_div = document.getElementById('chart-LINE-10-interactive');
        var chart = new google.charts.Line(chart_div);

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
        // nothing
  google.charts.setOnLoadCallback(drawLINE3Chart10);
    function drawLINE3Chart11() {
        var data = google.visualization.arrayToDataTable([
                ['Počet měsíců života půjčky', '2016', '2017', '2018', '2019'],
                   ['0',
                    4.47, 4.13, 1.59, 0.08
                    ], 
                   ['1',
                    4.54, 4.15, 1.6, 0.08
                    ], 
                   ['2',
                    4.64, 4.28, 1.65, 0.1
                    ], 
                   ['3',
                    4.74, 4.39, 1.7, 0.14
                    ], 
                   ['4',
                    4.87, 4.51, 1.76, 0.21
                    ], 
                   ['5',
                    4.97, 4.64, 1.83, 0.18
                    ], 
                   ['6',
                    5.13, 4.76, 1.91, 0
                    ], 
                   ['7',
                    5.3, 4.9, 1.95, 0
                    ], 
                   ['8',
                    5.44, 5.02, 2.12, 0
                    ], 
                   ['9',
                    5.62, 5.17, 2.41, 0
                    ], 
                   ['10',
                    5.79, 5.31, 2.69, 0
                    ], 
                   ['11',
                    6, 5.44, 2.98, 0
                    ], 
                   ['12',
                    6.23, 5.59, 3.32, 0
                    ], 
                   ['13',
                    6.45, 5.8, 3.68, 0
                    ], 
                   ['14',
                    6.74, 5.97, 3.83, 0
                    ], 
                   ['15',
                    7.02, 6.12, 3.86, 0
                    ], 
                   ['16',
                    7.18, 6.3, 3.39, 0
                    ], 
                   ['17',
                    7.46, 6.54, 3.44, 0
                    ], 
                   ['18',
                    7.74, 6.87, 0, 0
                    ], 
                   ['19',
                    7.97, 6.5, 0, 0
                    ], 
                   ['20',
                    8.22, 6.72, 0, 0
                    ], 
                   ['21',
                    8.41, 7.15, 0, 0
                    ], 
                   ['22',
                    8.81, 7.59, 0, 0
                    ], 
                   ['23',
                    9.16, 7.7, 0, 0
                    ], 
                   ['24',
                    9.51, 7.89, 0, 0
                    ], 
                   ['25',
                    9.87, 7.04, 0, 0
                    ], 
                   ['26',
                    10.11, 6.81, 0, 0
                    ], 
                   ['27',
                    10.27, 7.01, 0, 0
                    ], 
                   ['28',
                    10.59, 6.65, 0, 0
                    ], 
                   ['29',
                    11.3, 7.11, 0, 0
                    ], 
                   ['30',
                    11.91, 0, 0, 0
                    ], 
                   ['31',
                    10.31, 0, 0, 0
                    ], 
                   ['32',
                    10.07, 0, 0, 0
                    ], 
                   ['33',
                    10.59, 0, 0, 0
                    ], 
                   ['34',
                    11.34, 0, 0, 0
                    ], 
                   ['35',
                    11.22, 0, 0, 0
                    ], 
                   ['36',
                    10.97, 0, 0, 0
                    ], 
                   ['37',
                    12.54, 0, 0, 0
                    ], 
                   ['38',
                    12.67, 0, 0, 0
                    ], 
                   ['39',
                    12.4, 0, 0, 0
                    ], 
                   ['40',
                    7.25, 0, 0, 0
                    ], 
                   ['41',
                    0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění v průběhu života půjčky, podle roku originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
            },
            axes: {
                y: {
                  0: {label: 'Zesplatněno z doživších se [%]'}
                },
            },
            
            isStacked: false
        };
        var chart_div = document.getElementById('chart-LINE-11-interactive');
        var chart = new google.charts.Line(chart_div);

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
        // nothing
  google.charts.setOnLoadCallback(drawLINE3Chart11);
    function drawLINE3Chart12() {
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
                    5.83, 0, 99.1
                    ], 
                   ['2016-08',
                    3.75, 0, 97
                    ], 
                   ['2016-09',
                    3.85, 0, 98.72
                    ], 
                   ['2016-10',
                    3.6900000000000004, 0, 98.15
                    ], 
                   ['2016-11',
                    5.2, 0, 99.05000000000001
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
                    4.51, 0, 98.75
                    ], 
                   ['2017-06',
                    5.34, 0, 98.89
                    ], 
                   ['2017-07',
                    4.77, 0, 98.55000000000001
                    ], 
                   ['2017-08',
                    4.6899999999999995, 0, 97.31
                    ], 
                   ['2017-09',
                    3.82, 0, 97.8
                    ], 
                   ['2017-10',
                    3.9800000000000004, 0, 97.39
                    ], 
                   ['2017-11',
                    2.98, 0, 97.58
                    ], 
                   ['2017-12',
                    3.7900000000000005, 0, 97.39999999999999
                    ], 
                   ['2018-01',
                    3.42, 0, 96.8
                    ], 
                   ['2018-02',
                    2.74, 0, 97.26
                    ], 
                   ['2018-03',
                    3.0300000000000002, 0, 96.81
                    ], 
                   ['2018-04',
                    2.91, 17.22, 96.67999999999999
                    ], 
                   ['2018-05',
                    2.5100000000000002, 29.160000000000004, 95.47
                    ], 
                   ['2018-06',
                    1.51, 25.259999999999998, 94.58
                    ], 
                   ['2018-07',
                    1.1400000000000001, 28.07, 94.67
                    ], 
                   ['2018-08',
                    0.73, 26.229999999999997, 93.91000000000001
                    ], 
                   ['2018-09',
                    0.91, 26.19, 90.99000000000001
                    ], 
                   ['2018-10',
                    0.75, 25.990000000000002, 77.79
                    ], 
                   ['2018-11',
                    0.42, 28.58, 67.27
                    ], 
                   ['2018-12',
                    0.58, 31.14, 62.99
                    ], 
                   ['2019-01',
                    0.34, 32.37, 64
                    ], 
                   ['2019-02',
                    0.23, 35.410000000000004, 64.59
                    ], 
                   ['2019-03',
                    0, 36.13, 64.03
                    ], 
                   ['2019-04',
                    0, 35.22, 62.86000000000001
                    ], 
                   ['2019-05',
                    0, 40.71, 61.739999999999995
                    ], 
                   ['2019-06',
                    0, 36.78, 63.839999999999996
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění, příběhy a pojištění podle data originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
            },
            axes: {
                y: {
                  0: {label: ''}
                },
            },
            
            isStacked: false
        };
        var chart_div = document.getElementById('chart-LINE-12-interactive');
        var chart = new google.charts.Line(chart_div);

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
        // nothing
  google.charts.setOnLoadCallback(drawLINE3Chart12);
    function drawCOLUMN3Chart13() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['2016-02',
                    0, 0, 0, 33.96, 0, 21.18, 0, 13.71, 12.46, 18.69, 0
                    ], 
                   ['2016-03',
                    0, 1.05, 6.32, 23.86, 0, 18.6, 0, 22.46, 10.53, 12.28, 4.91
                    ], 
                   ['2016-04',
                    0, 0.42, 13.81, 25.94, 0, 15.9, 0, 12.13, 17.57, 8.37, 5.86
                    ], 
                   ['2016-05',
                    0, 0.97, 11.36, 26.62, 0, 16.88, 0, 12.66, 12.34, 10.06, 9.09
                    ], 
                   ['2016-06',
                    0, 4.58, 9.92, 21.37, 0, 16.41, 0, 14.89, 13.36, 13.36, 6.11
                    ], 
                   ['2016-07',
                    0, 3.14, 15.7, 25.11, 0, 14.8, 0, 14.8, 9.87, 7.62, 8.97
                    ], 
                   ['2016-08',
                    0, 4.12, 12.36, 21.35, 0, 15.36, 0, 14.61, 13.86, 8.24, 10.11
                    ], 
                   ['2016-09',
                    0, 3.85, 12.82, 24.36, 0, 17.52, 0, 18.8, 11.11, 6.41, 5.13
                    ], 
                   ['2016-10',
                    0, 2.21, 15.5, 22.88, 0, 14.76, 0, 11.81, 14.02, 9.59, 9.23
                    ], 
                   ['2016-11',
                    0, 1.89, 9.69, 24.11, 0, 18.68, 0, 13.48, 13, 12.06, 7.09
                    ], 
                   ['2016-12',
                    0, 1.54, 9.45, 21.54, 0, 18.68, 0, 13.41, 15.16, 13.19, 7.03
                    ], 
                   ['2017-01',
                    0, 2.02, 14.65, 21.46, 0, 16.67, 0, 16.16, 10.61, 11.62, 6.82
                    ], 
                   ['2017-02',
                    0, 3.42, 13.95, 29.21, 0, 17.89, 0, 13.68, 9.21, 7.11, 5.53
                    ], 
                   ['2017-03',
                    0, 3.54, 14.39, 25.76, 0, 13.38, 0, 11.62, 12.12, 11.62, 7.58
                    ], 
                   ['2017-04',
                    0, 5.87, 15.82, 21.94, 0, 21.68, 0, 15.05, 8.93, 5.87, 4.85
                    ], 
                   ['2017-05',
                    0, 7.26, 14.02, 28.16, 0, 17.02, 0, 13.02, 9.64, 8.01, 2.88
                    ], 
                   ['2017-06',
                    0, 7.76, 12.8, 28.12, 0, 17.54, 0, 15.22, 8.87, 6.25, 3.43
                    ], 
                   ['2017-07',
                    0, 6.74, 15.44, 28.91, 0, 18.03, 0, 14.51, 7.67, 5.49, 3.21
                    ], 
                   ['2017-08',
                    0, 6.34, 13.99, 29.28, 0, 17.2, 0, 15.2, 9.56, 5.82, 2.61
                    ], 
                   ['2017-09',
                    0, 5.53, 14.15, 28.86, 0, 18.29, 0, 13.5, 9.59, 7.07, 3.01
                    ], 
                   ['2017-10',
                    0, 6.66, 12.98, 26.03, 0, 20.26, 0, 14.84, 9.62, 7.55, 2.06
                    ], 
                   ['2017-11',
                    0, 7.99, 14.9, 26.66, 0, 17.72, 0, 14.06, 9.39, 5.91, 3.37
                    ], 
                   ['2017-12',
                    0, 7.58, 13.3, 25.33, 0, 17.76, 0, 15.97, 10.77, 6.46, 2.82
                    ], 
                   ['2018-01',
                    0, 6.91, 13.23, 26.47, 0, 18.14, 0, 16.06, 10.11, 5.58, 3.49
                    ], 
                   ['2018-02',
                    0, 6.34, 13.83, 25.43, 0, 18.95, 0, 15.63, 10.37, 6.12, 3.31
                    ], 
                   ['2018-03',
                    0, 7.84, 12.11, 23.8, 0, 18.33, 0, 14.49, 11.9, 7.52, 4
                    ], 
                   ['2018-04',
                    0, 7.68, 13.32, 24.32, 0, 17.98, 0, 15.13, 11.58, 5.88, 4.13
                    ], 
                   ['2018-05',
                    0, 7.37, 13.44, 25.34, 0, 16.93, 0, 15.35, 11.03, 7.26, 3.28
                    ], 
                   ['2018-06',
                    0, 7.48, 15.72, 24.01, 0, 17.58, 0, 15.77, 10.25, 6.13, 3.06
                    ], 
                   ['2018-07',
                    0, 13.62, 18.49, 24.6, 0, 15.64, 0, 12.01, 6.73, 5.64, 3.26
                    ], 
                   ['2018-08',
                    0, 9.6, 18.1, 23.08, 0, 15.95, 0, 12.17, 8.92, 6.98, 5.19
                    ], 
                   ['2018-09',
                    0, 10.47, 17.91, 24.62, 0, 16.03, 0, 11.13, 8.71, 5.81, 5.32
                    ], 
                   ['2018-10',
                    0, 8.3, 18.61, 25.15, 0, 17.03, 0, 13.48, 7.68, 5.93, 3.82
                    ], 
                   ['2018-11',
                    0, 5.39, 16.26, 21.75, 0, 19.57, 0, 17.95, 8.98, 5.6, 4.51
                    ], 
                   ['2018-12',
                    0, 4.76, 12.49, 20.05, 0, 22.49, 0, 19.58, 10.28, 6.8, 3.54
                    ], 
                   ['2019-01',
                    0, 4.51, 14.42, 19.52, 0, 21.58, 0, 19.08, 9.51, 6.28, 5.1
                    ], 
                   ['2019-02',
                    0, 4.15, 13.42, 20.88, 0, 19.99, 0, 19.15, 9.97, 6.85, 5.59
                    ], 
                   ['2019-03',
                    0, 4.47, 13.36, 19.63, 1.18, 19.87, 1.72, 17.16, 10.07, 7.13, 5.41
                    ], 
                   ['2019-04',
                    1.66, 5.52, 15.09, 16.16, 12.73, 13.62, 11.23, 10.97, 6.48, 3.9, 2.65
                    ], 
                   ['2019-05',
                    1.86, 6.06, 14.4, 13.63, 14.19, 14.12, 12.09, 12.09, 5.47, 3.71, 2.38
                    ], 
                   ['2019-06',
                    1.09, 6.17, 12.96, 14.72, 14.53, 14.21, 12.3, 12.61, 5.78, 3.71, 1.91
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba úrokových měr v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 7. 7. 2019 ze Zonky loanbooku k 7/2019.'
            },
            
            axes: {
                y: {
                  0: {label: 'Podíl počtu na celku [%]'}
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
        var chart_div = document.getElementById('chart-COLUMN-13-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawCOLUMN3Chart13);

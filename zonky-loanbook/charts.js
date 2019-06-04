
google.charts.load('current', {'packages':['bar', 'line', 'corechart']});
    function drawBAR3Chart0() {
        var data = google.visualization.arrayToDataTable([
                ['Účel', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Auto-moto (142 z 10325)',
                    0, 0.01, 0, 0.1, 0, 0.13, 0, 0.22, 0.33, 0.4, 0.19
                    ], 
                   ['Cestování (10 z 595)',
                    0, 0, 0, 0.17, 0, 0.17, 0, 0.34, 0.84, 0, 0.17
                    ], 
                   ['Domácnost (225 z 10911)',
                    0, 0.01, 0.03, 0.15, 0, 0.25, 0, 0.46, 0.4, 0.39, 0.38
                    ], 
                   ['Elektronika (10 z 713)',
                    0, 0, 0, 0, 0, 0.14, 0, 0.42, 0, 0.42, 0.42
                    ], 
                   ['Jiné (150 z 8306)',
                    0, 0.01, 0.01, 0.08, 0, 0.28, 0, 0.42, 0.37, 0.36, 0.26
                    ], 
                   ['Refinancování půjček (234 z 11727)',
                    0, 0.03, 0.03, 0.13, 0, 0.32, 0, 0.32, 0.35, 0.38, 0.45
                    ], 
                   ['Vlastní projekt (56 z 2713)',
                    0, 0, 0.04, 0.07, 0, 0.22, 0, 0.59, 0.41, 0.59, 0.15
                    ], 
                   ['Vzdělání (8 z 529)',
                    0, 0, 0, 0.19, 0, 0.19, 0, 0.19, 0.19, 0.76, 0
                    ], 
                   ['Zdraví (10 z 650)',
                    0, 0, 0.15, 0.15, 0, 0.15, 0, 0.31, 0.15, 0.31, 0.31
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle účelu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 6. 2019 ze Zonky loanbooku ke konci 4/2019.'
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
                   ['Hlavní město Praha (84 z 5829)',
                    0, 0, 0.03, 0.12, 0, 0.14, 0, 0.29, 0.34, 0.34, 0.17
                    ], 
                   ['Jihomoravský kraj (55 z 4789)',
                    0, 0.02, 0.02, 0.08, 0, 0.13, 0, 0.21, 0.23, 0.27, 0.19
                    ], 
                   ['Jihočeský kraj (58 z 2221)',
                    0, 0, 0.09, 0.09, 0, 0.41, 0, 0.5, 0.54, 0.5, 0.5
                    ], 
                   ['Karlovarský kraj (22 z 1365)',
                    0, 0, 0, 0, 0, 0.22, 0, 0.37, 0.44, 0.37, 0.22
                    ], 
                   ['Kraj Vysočina (34 z 1697)',
                    0, 0, 0, 0.12, 0, 0.29, 0, 0.41, 0.47, 0.24, 0.47
                    ], 
                   ['Královéhradecký kraj (43 z 2137)',
                    0, 0, 0, 0.05, 0, 0.33, 0, 0.56, 0.23, 0.56, 0.28
                    ], 
                   ['Liberecký kraj (48 z 2239)',
                    0, 0, 0, 0.04, 0, 0.27, 0, 0.4, 0.58, 0.54, 0.31
                    ], 
                   ['Moravskoslezský kraj (122 z 5929)',
                    0, 0.02, 0.03, 0.13, 0, 0.3, 0, 0.42, 0.3, 0.44, 0.4
                    ], 
                   ['Olomoucký kraj (43 z 2631)',
                    0, 0, 0, 0.11, 0, 0.11, 0, 0.23, 0.27, 0.53, 0.38
                    ], 
                   ['Pardubický kraj (45 z 2119)',
                    0, 0.05, 0, 0.14, 0, 0.28, 0, 0.52, 0.38, 0.42, 0.33
                    ], 
                   ['Plzeňský kraj (50 z 2284)',
                    0, 0.04, 0, 0.13, 0, 0.22, 0, 0.39, 0.53, 0.44, 0.44
                    ], 
                   ['Středočeský kraj (110 z 6817)',
                    0, 0.01, 0, 0.07, 0, 0.21, 0, 0.4, 0.29, 0.28, 0.35
                    ], 
                   ['Zlínský kraj (32 z 2214)',
                    0, 0.05, 0.09, 0.23, 0, 0.27, 0, 0.14, 0.23, 0.18, 0.27
                    ], 
                   ['Ústecký kraj (99 z 4198)',
                    0, 0, 0.02, 0.21, 0, 0.33, 0, 0.4, 0.55, 0.57, 0.26
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle kraje',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 6. 2019 ze Zonky loanbooku ke konci 4/2019.'
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
                   ['Důchod (60 z 2311)',
                    0, 0.09, 0.09, 0.17, 0, 0.52, 0, 0.48, 0.39, 0.48, 0.39
                    ], 
                   ['Jiné (7 z 363)',
                    0, 0, 0, 0.28, 0, 0, 0, 0.28, 0.28, 0.55, 0.55
                    ], 
                   ['OSVČ (78 z 5621)',
                    0, 0, 0.04, 0.11, 0, 0.14, 0, 0.37, 0.28, 0.36, 0.09
                    ], 
                   ['Podnikatel (14 z 849)',
                    0, 0, 0, 0.35, 0, 0.12, 0, 0.24, 0.12, 0.82, 0
                    ], 
                   ['Rodičovská dovolená (30 z 1219)',
                    0, 0, 0, 0.08, 0, 0.08, 0, 0.33, 0.74, 0.57, 0.66
                    ], 
                   ['Student (5 z 134)',
                    0, 0, 0, 0, 0, 0, 0, 0.75, 0.75, 0.75, 1.49
                    ], 
                   ['Svobodné povolání (9 z 147)',
                    0, 0, 0, 0, 0, 0, 0, 1.36, 2.72, 0.68, 1.36
                    ], 
                   ['Zaměstnanec (642 z 35825)',
                    0, 0.01, 0.02, 0.11, 0, 0.25, 0, 0.35, 0.35, 0.37, 0.33
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle zdroje příjmu žadatele',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 6. 2019 ze Zonky loanbooku ke konci 4/2019.'
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
                   [' do 50 (298 z 12899)',
                    0, 0, 0.02, 0.05, 0, 0.21, 0, 0.35, 0.41, 0.64, 0.64
                    ], 
                   ['od 50 do 100 (245 z 10647)',
                    0, 0, 0.01, 0.11, 0, 0.26, 0, 0.45, 0.55, 0.44, 0.47
                    ], 
                   ['od 100 do 150 (132 z 6412)',
                    0, 0.05, 0.02, 0.16, 0, 0.22, 0, 0.56, 0.51, 0.47, 0.08
                    ], 
                   ['od 150 do 200 (79 z 5858)',
                    0, 0, 0, 0.1, 0, 0.29, 0, 0.36, 0.15, 0.31, 0.14
                    ], 
                   ['od 200 do 250 (29 z 3040)',
                    0, 0.03, 0.07, 0.1, 0, 0.33, 0, 0.23, 0.13, 0.07, 0
                    ], 
                   ['od 250 do 300 (31 z 3006)',
                    0, 0.03, 0.03, 0.3, 0, 0.13, 0, 0.2, 0.2, 0.1, 0.03
                    ], 
                   ['od 300 do 350 (9 z 1286)',
                    0, 0.08, 0, 0.08, 0, 0.23, 0, 0.08, 0.16, 0.08, 0
                    ], 
                   ['od 350 do 400 (8 z 1229)',
                    0, 0, 0, 0.08, 0, 0.16, 0, 0.24, 0.16, 0, 0
                    ], 
                   ['od 400 do 450 (7 z 565)',
                    0, 0, 0.18, 0.18, 0, 0.71, 0, 0.18, 0, 0, 0
                    ], 
                   ['od 450 do 500 (7 z 1204)',
                    0, 0, 0.08, 0.33, 0, 0.08, 0, 0.08, 0, 0, 0
                    ], 
                   ['od 500 do 550 (0 z 68)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 550 do 600 (0 z 95)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 600 do 650 (0 z 42)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 650 do 700 (0 z 39)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   [' od 700 (0 z 79)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle výše úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 6. 2019 ze Zonky loanbooku ke konci 4/2019.'
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
                   [' do 12 (36 z 1575)',
                    0, 0, 0, 0, 0, 0.13, 0, 0.13, 0.38, 0.51, 1.14
                    ], 
                   ['od 12 do 24 (92 z 4953)',
                    0, 0, 0.02, 0.04, 0, 0.18, 0, 0.3, 0.48, 0.65, 0.18
                    ], 
                   ['od 24 do 36 (124 z 5088)',
                    0, 0, 0, 0.14, 0, 0.2, 0, 0.55, 0.29, 0.57, 0.69
                    ], 
                   ['od 36 do 48 (115 z 7116)',
                    0, 0, 0, 0.08, 0, 0.24, 0, 0.37, 0.39, 0.37, 0.17
                    ], 
                   ['od 48 do 60 (105 z 5795)',
                    0, 0.03, 0.07, 0.14, 0, 0.12, 0, 0.33, 0.35, 0.47, 0.31
                    ], 
                   ['od 60 do 72 (82 z 4979)',
                    0, 0.02, 0.02, 0.22, 0, 0.2, 0, 0.28, 0.24, 0.24, 0.42
                    ], 
                   [' od 72 (291 z 16963)',
                    0, 0.02, 0.02, 0.11, 0, 0.32, 0, 0.38, 0.37, 0.29, 0.19
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle délky splácení',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 6. 2019 ze Zonky loanbooku ke konci 4/2019.'
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
    function drawCOLUMN3Chart5() {
        var data = google.visualization.arrayToDataTable([
                ['Má příběh?', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Nemá (46 z 6508)',
                    0, 0, 0.02, 0.02, 0, 0.09, 0, 0.2, 0.14, 0.11, 0.14
                    ], 
                   ['Má (799 z 39961)',
                    0, 0.02, 0.02, 0.13, 0, 0.26, 0, 0.39, 0.4, 0.44, 0.34
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle příběhu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 6. 2019 ze Zonky loanbooku ke konci 4/2019.'
            },
            
            axes: {
                y: {
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
        var chart_div = document.getElementById('chart-COLUMN-5-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawCOLUMN3Chart5);
    function drawCOLUMN3Chart6() {
        var data = google.visualization.arrayToDataTable([
                ['Má pojištění?', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Nemá (65 z 17852)',
                    0, 0, 0.01, 0.04, 0, 0.04, 0, 0.09, 0.06, 0.06, 0.06
                    ], 
                   ['Má (50 z 7751)',
                    0, 0, 0, 0.04, 0, 0.05, 0, 0.13, 0.17, 0.1, 0.15
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle pojištění, od jeho zavedení',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 6. 2019 ze Zonky loanbooku ke konci 4/2019.'
            },
            
            axes: {
                y: {
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
        var chart_div = document.getElementById('chart-COLUMN-6-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawCOLUMN3Chart6);
    function drawLINE3Chart7() {
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
                    0, 0, 0, 0, 0, 4.71, 0, 6.56, 8.7, 18.33, 21.88
                    ], 
                   ['2017-01',
                    0, 0, 0, 1.18, 0, 0, 0, 3.12, 7.14, 13.04, 11.11
                    ], 
                   ['2017-02',
                    0, 0, 0, 0, 0, 0, 0, 1.92, 5.71, 7.41, 19.05
                    ], 
                   ['2017-03',
                    0, 0, 0, 0.98, 0, 3.77, 0, 2.17, 2.08, 8.7, 23.33
                    ], 
                   ['2017-04',
                    0, 0, 0, 1.16, 0, 1.18, 0, 10.17, 25.71, 8.7, 21.05
                    ], 
                   ['2017-05',
                    0, 0, 0, 2.67, 0, 6.62, 0, 2.88, 7.79, 10.94, 13.04
                    ], 
                   ['2017-06',
                    0, 1.3, 0, 1.08, 0, 2.87, 0, 6.62, 17.05, 16.13, 20.59
                    ], 
                   ['2017-07',
                    0, 1.54, 0, 1.79, 0, 4.02, 0, 8.57, 13.51, 11.32, 6.45
                    ], 
                   ['2017-08',
                    0, 0, 1.24, 1.48, 0, 3.03, 0, 5.71, 7.27, 20.9, 10
                    ], 
                   ['2017-09',
                    0, 0, 0.57, 1.13, 0, 3.11, 0, 6.63, 4.24, 10.34, 24.32
                    ], 
                   ['2017-10',
                    0, 0, 1.06, 0, 0, 2.71, 0, 5.56, 7.14, 12.73, 20
                    ], 
                   ['2017-11',
                    0, 1.41, 0, 0.42, 0, 3.49, 0, 2.8, 5.99, 9.52, 13.33
                    ], 
                   ['2017-12',
                    0, 0.98, 0, 0.59, 0, 2.93, 0, 4.19, 8.97, 8.05, 15.79
                    ], 
                   ['2018-01',
                    0, 1.08, 0.56, 0.56, 0, 1.23, 0, 4.63, 6.67, 9.33, 10.87
                    ], 
                   ['2018-02',
                    0, 0, 0.52, 0.57, 0, 1.52, 0, 2.76, 5.56, 5.88, 15.22
                    ], 
                   ['2018-03',
                    0, 0, 0, 0.23, 0, 3.24, 0, 3.36, 4.11, 6.47, 8.11
                    ], 
                   ['2018-04',
                    0, 0, 0, 0.24, 0, 1.29, 0, 3.08, 4.52, 8.91, 11.27
                    ], 
                   ['2018-05',
                    0, 0, 0.41, 0.43, 0, 0.97, 0, 2.14, 4.46, 4.51, 6.67
                    ], 
                   ['2018-06',
                    0, 0, 0.32, 0.21, 0, 0.57, 0, 2.23, 2.45, 3.28, 4.92
                    ], 
                   ['2018-07',
                    0, 0, 0, 0.63, 0, 0.66, 0, 1.72, 3.08, 0.92, 3.17
                    ], 
                   ['2018-08',
                    0, 0, 0, 0.45, 0, 0.66, 0, 0.86, 0.59, 2.26, 2.02
                    ], 
                   ['2018-09',
                    0, 0, 0, 0, 0, 0, 0, 0, 1.39, 3.12, 7.95
                    ], 
                   ['2018-10',
                    0, 0, 0, 0.52, 0, 0.26, 0, 0.98, 0.57, 0.74, 1.15
                    ], 
                   ['2018-11',
                    0, 0, 0, 0, 0, 0.18, 0, 0.59, 0.78, 0, 1.56
                    ], 
                   ['2018-12',
                    0, 0, 0, 0, 0, 0.26, 0, 0, 0, 0, 1.64
                    ], 
                   ['2019-01',
                    0, 0, 0, 0, 0, 0, 0, 0.26, 0, 0, 0
                    ], 
                   ['2019-02',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-03',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-04',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění podle data originace a ratingu [%]',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 6. 2019 ze Zonky loanbooku ke konci 4/2019.'
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
        var chart_div = document.getElementById('chart-LINE-7-interactive');
        var chart = new google.charts.Line(chart_div);

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
        // nothing
  google.charts.setOnLoadCallback(drawLINE3Chart7);
    function drawLINE3Chart8() {
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
                    7.03, 0, 99.33999999999999
                    ], 
                   ['2017-01',
                    3.7900000000000005, 0, 99.49
                    ], 
                   ['2017-02',
                    2.37, 0, 99.21
                    ], 
                   ['2017-03',
                    4.04, 0, 98.48
                    ], 
                   ['2017-04',
                    5.87, 0, 98.98
                    ], 
                   ['2017-05',
                    4.26, 0, 98.75
                    ], 
                   ['2017-06',
                    5.140000000000001, 0, 98.89
                    ], 
                   ['2017-07',
                    4.46, 0, 98.55000000000001
                    ], 
                   ['2017-08',
                    4.17, 0, 97.31
                    ], 
                   ['2017-09',
                    3.74, 0, 97.8
                    ], 
                   ['2017-10',
                    3.5700000000000003, 0, 97.39
                    ], 
                   ['2017-11',
                    2.81, 0, 97.58
                    ], 
                   ['2017-12',
                    3.34, 0, 97.39999999999999
                    ], 
                   ['2018-01',
                    2.83, 0, 96.8
                    ], 
                   ['2018-02',
                    2.3800000000000003, 0, 97.26
                    ], 
                   ['2018-03',
                    2.44, 0, 96.81
                    ], 
                   ['2018-04',
                    2.27, 17.22, 96.67999999999999
                    ], 
                   ['2018-05',
                    1.69, 29.160000000000004, 95.47
                    ], 
                   ['2018-06',
                    1.16, 25.259999999999998, 94.58
                    ], 
                   ['2018-07',
                    0.83, 28.07, 94.67
                    ], 
                   ['2018-08',
                    0.63, 26.25, 93.91000000000001
                    ], 
                   ['2018-09',
                    0.73, 26.19, 90.99000000000001
                    ], 
                   ['2018-10',
                    0.44, 25.990000000000002, 77.79
                    ], 
                   ['2018-11',
                    0.28, 28.58, 67.27
                    ], 
                   ['2018-12',
                    0.12, 31.16, 62.970000000000006
                    ], 
                   ['2019-01',
                    0.05, 32.37, 64
                    ], 
                   ['2019-02',
                    0, 35.410000000000004, 64.59
                    ], 
                   ['2019-03',
                    0, 36.14, 64.01
                    ], 
                   ['2019-04',
                    0, 35.22, 62.86000000000001
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění, příběhy a pojištění podle data originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 6. 2019 ze Zonky loanbooku ke konci 4/2019.'
            },
            axes: {
                y: {
                  0: {label: ''}
                },
            }
            
        };
        var chart_div = document.getElementById('chart-LINE-8-interactive');
        var chart = new google.charts.Line(chart_div);

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
        // nothing
  google.charts.setOnLoadCallback(drawLINE3Chart8);

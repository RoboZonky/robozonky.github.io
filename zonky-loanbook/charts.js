
google.charts.load('current', {'packages':['bar', 'line', 'corechart']});
    function drawBAR3Chart0() {
        var data = google.visualization.arrayToDataTable([
                ['Účel', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   ['Auto-moto (224 z 14367)',
                    0, 0.01, 0.01, 0.1, 0, 0.15, 0.01, 0.25, 0.4, 0.42, 0.22
                    ], 
                   ['Cestování (14 z 1012)',
                    0, 0, 0, 0.1, 0, 0.1, 0, 0.4, 0.59, 0.1, 0.1
                    ], 
                   ['Domácnost (353 z 15778)',
                    0, 0.01, 0.03, 0.15, 0.01, 0.29, 0, 0.51, 0.43, 0.43, 0.39
                    ], 
                   ['Elektronika (19 z 1002)',
                    0, 0, 0.1, 0.1, 0, 0.2, 0, 0.5, 0.1, 0.5, 0.4
                    ], 
                   ['Jiné (243 z 11238)',
                    0, 0.02, 0.04, 0.13, 0.01, 0.31, 0, 0.49, 0.43, 0.41, 0.33
                    ], 
                   ['Refinancování půjček (317 z 14972)',
                    0, 0.02, 0.04, 0.14, 0.01, 0.33, 0.01, 0.37, 0.38, 0.4, 0.43
                    ], 
                   ['Vlastní projekt (79 z 3649)',
                    0, 0, 0.08, 0.11, 0, 0.19, 0, 0.55, 0.47, 0.55, 0.22
                    ], 
                   ['Vzdělání (13 z 776)',
                    0, 0, 0, 0.13, 0, 0.39, 0, 0.26, 0.13, 0.77, 0
                    ], 
                   ['Zdraví (18 z 951)',
                    0, 0, 0.11, 0.11, 0, 0.32, 0, 0.21, 0.42, 0.21, 0.53
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle účelu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Kraj', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   ['Hlavní město Praha (124 z 7590)',
                    0, 0, 0.05, 0.14, 0, 0.21, 0.01, 0.34, 0.34, 0.37, 0.16
                    ], 
                   ['Jihomoravský kraj (99 z 6472)',
                    0, 0.02, 0.08, 0.09, 0.02, 0.23, 0, 0.28, 0.2, 0.36, 0.26
                    ], 
                   ['Jihočeský kraj (74 z 3066)',
                    0, 0, 0.07, 0.1, 0, 0.36, 0.03, 0.65, 0.42, 0.39, 0.39
                    ], 
                   ['Karlovarský kraj (44 z 1944)',
                    0, 0, 0, 0, 0, 0.21, 0, 0.67, 0.51, 0.57, 0.31
                    ], 
                   ['Kraj Vysočina (44 z 2379)',
                    0, 0, 0, 0.17, 0, 0.25, 0, 0.29, 0.5, 0.21, 0.42
                    ], 
                   ['Královéhradecký kraj (60 z 2914)',
                    0, 0, 0, 0.1, 0, 0.31, 0, 0.55, 0.31, 0.45, 0.34
                    ], 
                   ['Liberecký kraj (69 z 3115)',
                    0, 0, 0, 0.03, 0, 0.35, 0, 0.42, 0.58, 0.48, 0.35
                    ], 
                   ['Moravskoslezský kraj (186 z 8072)',
                    0, 0.01, 0.05, 0.12, 0, 0.33, 0, 0.48, 0.46, 0.42, 0.42
                    ], 
                   ['Olomoucký kraj (69 z 3709)',
                    0, 0, 0, 0.16, 0, 0.08, 0, 0.24, 0.4, 0.59, 0.38
                    ], 
                   ['Pardubický kraj (60 z 2907)',
                    0, 0.03, 0, 0.17, 0, 0.21, 0, 0.55, 0.38, 0.41, 0.31
                    ], 
                   ['Plzeňský kraj (76 z 3235)',
                    0, 0.06, 0, 0.12, 0, 0.22, 0, 0.46, 0.62, 0.56, 0.31
                    ], 
                   ['Středočeský kraj (171 z 9430)',
                    0, 0.01, 0.02, 0.11, 0, 0.21, 0, 0.41, 0.37, 0.32, 0.36
                    ], 
                   ['Zlínský kraj (55 z 3064)',
                    0, 0.03, 0.1, 0.23, 0, 0.29, 0, 0.2, 0.36, 0.26, 0.33
                    ], 
                   ['Ústecký kraj (149 z 5848)',
                    0, 0, 0.02, 0.19, 0.03, 0.38, 0, 0.39, 0.5, 0.65, 0.39
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle kraje žadatele',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Zdroj příjmu', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   ['Důchod (98 z 3235)',
                    0, 0.06, 0.09, 0.25, 0.03, 0.49, 0, 0.62, 0.37, 0.71, 0.4
                    ], 
                   ['Jiné (11 z 458)',
                    0, 0, 0, 0.22, 0, 0, 0, 0.66, 0.44, 0.44, 0.66
                    ], 
                   ['OSVČ (118 z 7176)',
                    0, 0, 0.06, 0.11, 0.01, 0.18, 0.01, 0.45, 0.35, 0.33, 0.14
                    ], 
                   ['Podnikatel (18 z 1039)',
                    0, 0, 0, 0.29, 0, 0.1, 0, 0.29, 0.38, 0.67, 0
                    ], 
                   ['Rodičovská dovolená (49 z 1712)',
                    0, 0, 0, 0.12, 0, 0.29, 0, 0.29, 0.7, 0.53, 0.93
                    ], 
                   ['Student (7 z 167)',
                    0, 0, 0, 0, 0, 0, 0, 0.6, 0.6, 1.8, 1.2
                    ], 
                   ['Svobodné povolání (9 z 177)',
                    0, 0, 0, 0, 0, 0, 0, 1.13, 2.26, 0.56, 1.13
                    ], 
                   ['Zaměstnanec (968 z 49772)',
                    0, 0.01, 0.03, 0.12, 0, 0.26, 0, 0.39, 0.4, 0.4, 0.33
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle zdroje příjmu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Výše úvěru [tis. Kč]', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   [' do 50 (467 z 18449)',
                    0, 0, 0.02, 0.06, 0, 0.22, 0.01, 0.41, 0.43, 0.69, 0.69
                    ], 
                   ['od 50 do 100 (362 z 14493)',
                    0, 0, 0.03, 0.09, 0.01, 0.3, 0, 0.53, 0.61, 0.51, 0.43
                    ], 
                   ['od 100 do 150 (184 z 8558)',
                    0, 0.04, 0.01, 0.2, 0, 0.22, 0, 0.54, 0.55, 0.44, 0.15
                    ], 
                   ['od 150 do 200 (124 z 7742)',
                    0, 0, 0.03, 0.14, 0.01, 0.34, 0, 0.41, 0.27, 0.3, 0.1
                    ], 
                   ['od 200 do 250 (46 z 4024)',
                    0, 0.02, 0.1, 0.2, 0.02, 0.32, 0, 0.22, 0.2, 0.05, 0
                    ], 
                   ['od 250 do 300 (46 z 3942)',
                    0, 0.03, 0.03, 0.3, 0, 0.2, 0, 0.3, 0.2, 0.08, 0.03
                    ], 
                   ['od 300 do 350 (16 z 1792)',
                    0, 0.06, 0, 0.06, 0, 0.33, 0.06, 0.11, 0.22, 0.06, 0
                    ], 
                   ['od 350 do 400 (15 z 1683)',
                    0, 0.06, 0.12, 0.12, 0, 0.24, 0, 0.18, 0.12, 0.06, 0
                    ], 
                   ['od 400 do 450 (8 z 769)',
                    0, 0, 0.26, 0.13, 0, 0.52, 0, 0.13, 0, 0, 0
                    ], 
                   ['od 450 do 500 (12 z 1519)',
                    0, 0, 0.07, 0.33, 0, 0.13, 0, 0.2, 0.07, 0, 0
                    ], 
                   ['od 500 do 550 (0 z 172)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 550 do 600 (0 z 220)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 600 do 650 (0 z 99)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 650 do 700 (0 z 111)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   [' od 700 (0 z 172)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle výše úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Délka úvěru [měs.]', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   [' do 12 (51 z 2261)',
                    0, 0, 0, 0, 0, 0.09, 0, 0.13, 0.31, 0.57, 1.15
                    ], 
                   ['od 12 do 24 (145 z 6988)',
                    0, 0, 0.01, 0.04, 0, 0.14, 0, 0.4, 0.49, 0.67, 0.31
                    ], 
                   ['od 24 do 36 (168 z 6895)',
                    0, 0, 0, 0.12, 0, 0.15, 0, 0.52, 0.33, 0.54, 0.78
                    ], 
                   ['od 36 do 48 (186 z 9640)',
                    0, 0, 0.02, 0.11, 0.01, 0.32, 0.01, 0.38, 0.47, 0.43, 0.18
                    ], 
                   ['od 48 do 60 (148 z 7634)',
                    0, 0.03, 0.07, 0.14, 0, 0.14, 0.01, 0.34, 0.39, 0.5, 0.31
                    ], 
                   ['od 60 do 72 (125 z 6605)',
                    0, 0.02, 0.03, 0.23, 0.02, 0.29, 0, 0.38, 0.29, 0.24, 0.41
                    ], 
                   [' od 72 (457 z 23722)',
                    0, 0.02, 0.05, 0.14, 0, 0.35, 0, 0.44, 0.43, 0.32, 0.18
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle délky úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Má příběh?', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   ['Ne (117 z 12762)',
                    0, 0, 0.02, 0.02, 0.02, 0.09, 0.01, 0.2, 0.21, 0.15, 0.19
                    ], 
                   ['Ano (1163 z 50983)',
                    0, 0.01, 0.04, 0.15, 0, 0.3, 0, 0.46, 0.46, 0.49, 0.37
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle příběhu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Má pojištění?', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   ['Ne (186 z 28960)',
                    0, 0, 0.03, 0.04, 0, 0.07, 0, 0.14, 0.1, 0.12, 0.13
                    ], 
                   ['Ano (154 z 13915)',
                    0, 0, 0.01, 0.06, 0.01, 0.07, 0.01, 0.25, 0.24, 0.23, 0.22
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle pojištění, od jeho zavedení',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Byl při originaci investorem?', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   ['Ne (1270 z 61157)',
                    0, 0.01, 0.03, 0.13, 0, 0.27, 0, 0.42, 0.42, 0.44, 0.35
                    ], 
                   ['Ano (10 z 2588)',
                    0, 0, 0, 0, 0, 0.04, 0, 0.23, 0, 0.08, 0.04
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle statusu investora',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Počet předchozích půjček', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   ['0 (1158 z 49862)',
                    0, 0.01, 0.04, 0.13, 0.01, 0.29, 0, 0.46, 0.47, 0.5, 0.41
                    ], 
                   ['1 (109 z 10473)',
                    0, 0, 0.02, 0.11, 0, 0.2, 0, 0.24, 0.22, 0.17, 0.08
                    ], 
                   ['2 (13 z 2499)',
                    0, 0, 0.04, 0.08, 0, 0, 0, 0.2, 0.12, 0.08, 0
                    ], 
                   ['3 (0 z 637)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['4 (0 z 187)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['5 (0 z 59)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['6 (0 z 18)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['7 (0 z 6)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['8 (0 z 2)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['9 (0 z 1)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['10 (0 z 1)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle počtu předchozích půjček',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Datum originace', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   ['2016-02',
                    0, 0, 0, 0.92, 0, 1.47, 0, 2.27, 0, 6.67, 0
                    ], 
                   ['2016-03',
                    0, 0, 0, 0, 0, 1.89, 0, 1.56, 3.33, 11.43, 28.57
                    ], 
                   ['2016-04',
                    0, 0, 0, 3.23, 0, 0, 0, 3.45, 9.52, 25, 28.57
                    ], 
                   ['2016-05',
                    0, 0, 0, 1.22, 0, 1.92, 0, 7.69, 2.63, 6.45, 14.29
                    ], 
                   ['2016-06',
                    0, 0, 3.85, 0, 0, 2.33, 0, 7.69, 2.86, 5.71, 12.5
                    ], 
                   ['2016-07',
                    0, 0, 0, 0, 0, 6.06, 0, 9.09, 9.09, 5.88, 25
                    ], 
                   ['2016-08',
                    0, 0, 0, 1.75, 0, 0, 0, 5.13, 8.11, 18.18, 7.41
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
                    0, 0, 0, 0, 0, 4.71, 0, 11.48, 11.59, 20, 21.88
                    ], 
                   ['2017-01',
                    0, 0, 0, 1.18, 0, 1.52, 0, 3.12, 7.14, 15.22, 11.11
                    ], 
                   ['2017-02',
                    0, 0, 0, 0, 0, 0, 0, 1.92, 5.71, 11.11, 23.81
                    ], 
                   ['2017-03',
                    0, 0, 0, 0.98, 0, 3.77, 0, 2.17, 2.08, 8.7, 23.33
                    ], 
                   ['2017-04',
                    0, 0, 0, 1.16, 0, 1.18, 0, 13.56, 31.43, 8.7, 21.05
                    ], 
                   ['2017-05',
                    0, 0, 0.89, 3.11, 0, 6.62, 0, 3.85, 9.09, 10.94, 17.39
                    ], 
                   ['2017-06',
                    0, 1.3, 0, 1.43, 0, 3.45, 0, 7.95, 17.05, 16.13, 23.53
                    ], 
                   ['2017-07',
                    0, 1.54, 0, 2.15, 0, 6.9, 0, 9.29, 13.51, 15.09, 9.68
                    ], 
                   ['2017-08',
                    0, 0, 1.24, 2.08, 0, 5.05, 0, 6.29, 10, 20.9, 13.33
                    ], 
                   ['2017-09',
                    0, 1.47, 0.57, 1.41, 0, 3.56, 0, 7.23, 8.47, 11.49, 24.32
                    ], 
                   ['2017-10',
                    0, 0, 1.06, 0, 0, 3.73, 0, 8.8, 9.29, 14.55, 23.33
                    ], 
                   ['2017-11',
                    0, 1.41, 0, 0.63, 0, 4.13, 0, 3.6, 7.78, 14.29, 16.67
                    ], 
                   ['2017-12',
                    0, 0.98, 0, 0.88, 0, 5.02, 0, 6.05, 11.72, 13.79, 15.79
                    ], 
                   ['2018-01',
                    0, 1.08, 0.56, 1.12, 0, 2.05, 0, 6.02, 8.82, 10.67, 14.89
                    ], 
                   ['2018-02',
                    0, 0, 0.52, 0.85, 0, 3.8, 0, 4.61, 7.64, 9.41, 15.22
                    ], 
                   ['2018-03',
                    0, 0, 0.89, 1.14, 0, 4.72, 0, 4.85, 8.64, 11.51, 13.51
                    ], 
                   ['2018-04',
                    0, 0, 0.44, 0.96, 0, 2.59, 0, 4.62, 8.54, 14.85, 14.08
                    ], 
                   ['2018-05',
                    0, 0, 0.81, 0.65, 0, 2.9, 0, 4.63, 7.92, 9.77, 13.33
                    ], 
                   ['2018-06',
                    0, 0, 0.32, 0.42, 0, 1.43, 0, 4.46, 4.41, 5.74, 11.48
                    ], 
                   ['2018-07',
                    0, 0, 0, 1.68, 0, 1.32, 0, 4.31, 3.85, 4.59, 7.94
                    ], 
                   ['2018-08',
                    0, 0, 0.29, 0.45, 0, 0.99, 0, 1.72, 2.35, 4.51, 4.04
                    ], 
                   ['2018-09',
                    0, 0, 0.34, 0, 0, 0.38, 0, 2.17, 2.08, 7.29, 12.5
                    ], 
                   ['2018-10',
                    0, 0, 0.24, 0.52, 0, 0.52, 0, 2.93, 1.14, 4.44, 10.34
                    ], 
                   ['2018-11',
                    0, 0, 0.43, 0, 0, 0.18, 0, 1.18, 2.75, 3.14, 7.03
                    ], 
                   ['2018-12',
                    0, 0, 0.47, 0.87, 0, 0.26, 0, 1.48, 1.69, 3.42, 3.28
                    ], 
                   ['2019-01',
                    0, 0, 0, 0, 0, 0.68, 0, 0.77, 2.58, 1.56, 7.69
                    ], 
                   ['2019-02',
                    0, 0, 0, 0, 0, 0, 0, 0.73, 3.74, 2.04, 2.5
                    ], 
                   ['2019-03',
                    0, 0, 0, 0, 0, 0, 0, 0.46, 0, 2.75, 1.45
                    ], 
                   ['2019-04',
                    0, 0, 0, 0, 0.29, 0, 0.66, 0.67, 0.57, 0.94, 0
                    ], 
                   ['2019-05',
                    0, 0, 0, 0, 0.49, 0, 0, 0, 0, 2.83, 1.47
                    ], 
                   ['2019-06',
                    0, 0, 0, 0, 0, 0, 0, 0.31, 0, 0, 0
                    ], 
                   ['2019-07',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-08',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0.74, 0
                    ], 
                   ['2019-09',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-10',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění podle data originace a ratingu [%]',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Počet měsíců života půjčky', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
                   ['0',
                    0, 0.18, 0.23, 0.6, 0.11, 1.53, 0.08, 2.84, 4.64, 7.06, 9.24
                    ], 
                   ['1',
                    0, 0.18, 0.23, 0.61, 0.11, 1.55, 0.08, 2.87, 4.69, 7.14, 9.31
                    ], 
                   ['2',
                    0, 0.19, 0.25, 0.65, 0.13, 1.67, 0.1, 3.1, 5.05, 7.67, 9.96
                    ], 
                   ['3',
                    0, 0.2, 0.27, 0.68, 0.16, 1.8, 0.13, 3.38, 5.44, 8.22, 10.85
                    ], 
                   ['4',
                    0, 0.21, 0.29, 0.73, 0.22, 1.95, 0.18, 3.7, 5.86, 8.83, 11.7
                    ], 
                   ['5',
                    0, 0.22, 0.31, 0.79, 0.32, 2.12, 0.26, 4.02, 6.33, 9.54, 12.67
                    ], 
                   ['6',
                    0, 0.24, 0.33, 0.84, 0.16, 2.3, 0.4, 4.39, 6.8, 10.05, 13.65
                    ], 
                   ['7',
                    0, 0.26, 0.36, 0.89, 0, 2.51, 0, 4.78, 7.42, 10.8, 14.9
                    ], 
                   ['8',
                    0, 0.28, 0.4, 0.96, 0, 2.73, 0, 5.18, 8.13, 11.67, 15.93
                    ], 
                   ['9',
                    0, 0.29, 0.43, 1.04, 0, 2.98, 0, 5.67, 8.78, 12.78, 17.71
                    ], 
                   ['10',
                    0, 0.31, 0.46, 1.12, 0, 3.23, 0, 6.2, 9.45, 13.9, 19.14
                    ], 
                   ['11',
                    0, 0.28, 0.48, 1.16, 0, 3.52, 0, 6.76, 10.2, 14.9, 20.94
                    ], 
                   ['12',
                    0, 0.3, 0.46, 1.2, 0, 3.87, 0, 7.36, 10.88, 16, 22.05
                    ], 
                   ['13',
                    0, 0.32, 0.49, 1.28, 0, 4.29, 0, 8.07, 11.92, 17.21, 23.72
                    ], 
                   ['14',
                    0, 0.36, 0.52, 1.41, 0, 4.73, 0, 8.78, 12.98, 17.96, 24.32
                    ], 
                   ['15',
                    0, 0.4, 0.54, 1.5, 0, 5.06, 0, 9.3, 13.96, 19.2, 27.13
                    ], 
                   ['16',
                    0, 0.45, 0.61, 1.47, 0, 5.38, 0, 9.77, 14.8, 20.61, 28.96
                    ], 
                   ['17',
                    0, 0.55, 0.64, 1.57, 0, 5.75, 0, 10.22, 15.37, 22.26, 30.63
                    ], 
                   ['18',
                    0, 0.61, 0.62, 1.65, 0, 6.05, 0, 10.82, 16.19, 23.29, 32.28
                    ], 
                   ['19',
                    0, 0.69, 0.63, 1.75, 0, 6.3, 0, 11.35, 17.08, 23.49, 33.69
                    ], 
                   ['20',
                    0, 0.8, 0.59, 1.77, 0, 6.2, 0, 11.72, 17.62, 24.26, 35.45
                    ], 
                   ['21',
                    0, 0.96, 0.59, 1.87, 0, 6.51, 0, 12.16, 18.53, 25.54, 38.06
                    ], 
                   ['22',
                    0, 0.91, 0.58, 1.91, 0, 7, 0, 12.42, 19.45, 26.76, 38.72
                    ], 
                   ['23',
                    0, 0.86, 0.65, 2.04, 0, 7.17, 0, 12.62, 19.51, 27.47, 40.66
                    ], 
                   ['24',
                    0, 0.5, 0.74, 2.22, 0, 7.01, 0, 13.79, 20.92, 27.82, 41.01
                    ], 
                   ['25',
                    0, 0.63, 0.64, 2.65, 0, 7.27, 0, 13.64, 22.08, 28.46, 42.63
                    ], 
                   ['26',
                    0, 0.39, 0.61, 2.82, 0, 7.62, 0, 13.95, 23.17, 29.65, 43.79
                    ], 
                   ['27',
                    0, 0.47, 0.37, 2.65, 0, 7.33, 0, 14.12, 23.37, 29.14, 45.45
                    ], 
                   ['28',
                    0, 0, 0.45, 2.5, 0, 6.15, 0, 14.33, 23.79, 29.75, 46.53
                    ], 
                   ['29',
                    0, 0, 0.57, 2.47, 0, 5.68, 0, 13.67, 21.1, 29.67, 46.83
                    ], 
                   ['30',
                    0, 0, 0, 1.73, 0, 4.58, 0, 15.04, 21.28, 30.39, 47.83
                    ], 
                   ['31',
                    0, 0, 0, 1.98, 0, 4.92, 0, 14.71, 18.59, 33.33, 49.5
                    ], 
                   ['32',
                    0, 0, 0, 1.95, 0, 4.93, 0, 15.76, 19.72, 34.72, 47.87
                    ], 
                   ['33',
                    0, 0, 0, 1.9, 0, 5.91, 0, 17.72, 20.97, 34.81, 48.81
                    ], 
                   ['34',
                    0, 0, 0, 2.27, 0, 6.1, 0, 18.57, 22.12, 33.61, 52
                    ], 
                   ['35',
                    0, 0, 0, 2.65, 0, 5.84, 0, 15.52, 17.44, 31.58, 52.46
                    ], 
                   ['36',
                    0, 0, 0, 2.13, 0, 6.31, 0, 15.96, 18.67, 30.38, 49.06
                    ], 
                   ['37',
                    0, 0, 0, 2.58, 0, 7.06, 0, 16.67, 19.05, 31.34, 52.17
                    ], 
                   ['38',
                    0, 0, 0, 2.42, 0, 6.85, 0, 15.38, 23.08, 31.75, 52.5
                    ], 
                   ['39',
                    0, 0, 0, 2.11, 0, 8.33, 0, 15.69, 23.08, 31.37, 57.58
                    ], 
                   ['40',
                    0, 0, 0, 2.63, 0, 6.52, 0, 18.42, 23.33, 36.59, 58.33
                    ], 
                   ['41',
                    0, 0, 0, 3.39, 0, 5.41, 0, 17.86, 25, 38.89, 63.16
                    ], 
                   ['42',
                    0, 0, 0, 2.08, 0, 7.69, 0, 15.79, 33.33, 41.38, 66.67
                    ], 
                   ['43',
                    0, 0, 0, 0, 0, 12.5, 0, 15.38, 12.5, 36.84, 57.14
                    ], 
                   ['44',
                    0, 0, 0, 0, 0, 6.67, 0, 12.5, 0, 30, 0
                    ], 
                   ['45',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění v průběhu života půjčky, podle ratingu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                    4.87, 4.71, 2.35, 0.23
                    ], 
                   ['1',
                    4.94, 4.73, 2.37, 0.24
                    ], 
                   ['2',
                    5.05, 4.88, 2.44, 0.28
                    ], 
                   ['3',
                    5.16, 5, 2.51, 0.32
                    ], 
                   ['4',
                    5.3, 5.14, 2.59, 0.39
                    ], 
                   ['5',
                    5.41, 5.29, 2.68, 0.48
                    ], 
                   ['6',
                    5.58, 5.42, 2.79, 0.54
                    ], 
                   ['7',
                    5.77, 5.58, 2.9, 0.64
                    ], 
                   ['8',
                    5.91, 5.71, 3.03, 0.8
                    ], 
                   ['9',
                    6.11, 5.88, 3.15, 0.7
                    ], 
                   ['10',
                    6.3, 6.04, 3.28, 0
                    ], 
                   ['11',
                    6.53, 6.18, 3.31, 0
                    ], 
                   ['12',
                    6.77, 6.36, 3.5, 0
                    ], 
                   ['13',
                    7.01, 6.58, 3.88, 0
                    ], 
                   ['14',
                    7.33, 6.76, 4.29, 0
                    ], 
                   ['15',
                    7.63, 6.93, 4.74, 0
                    ], 
                   ['16',
                    7.81, 7.12, 5.16, 0
                    ], 
                   ['17',
                    8.11, 7.34, 5.62, 0
                    ], 
                   ['18',
                    8.41, 7.65, 5.75, 0
                    ], 
                   ['19',
                    8.66, 7.87, 5.75, 0
                    ], 
                   ['20',
                    8.93, 8.16, 4.66, 0
                    ], 
                   ['21',
                    9.14, 8.45, 4.12, 0
                    ], 
                   ['22',
                    9.56, 8.78, 0, 0
                    ], 
                   ['23',
                    9.92, 8.29, 0, 0
                    ], 
                   ['24',
                    10.28, 8.52, 0, 0
                    ], 
                   ['25',
                    10.66, 8.95, 0, 0
                    ], 
                   ['26',
                    10.91, 9.48, 0, 0
                    ], 
                   ['27',
                    11.07, 9.58, 0, 0
                    ], 
                   ['28',
                    11.38, 9.68, 0, 0
                    ], 
                   ['29',
                    12.07, 8.76, 0, 0
                    ], 
                   ['30',
                    12.53, 8.43, 0, 0
                    ], 
                   ['31',
                    12.98, 8.41, 0, 0
                    ], 
                   ['32',
                    13.42, 8.05, 0, 0
                    ], 
                   ['33',
                    13.97, 7.65, 0, 0
                    ], 
                   ['34',
                    14.8, 0, 0, 0
                    ], 
                   ['35',
                    12.41, 0, 0, 0
                    ], 
                   ['36',
                    12.3, 0, 0, 0
                    ], 
                   ['37',
                    13.42, 0, 0, 0
                    ], 
                   ['38',
                    14.17, 0, 0, 0
                    ], 
                   ['39',
                    14.86, 0, 0, 0
                    ], 
                   ['40',
                    15.95, 0, 0, 0
                    ], 
                   ['41',
                    17.02, 0, 0, 0
                    ], 
                   ['42',
                    18.02, 0, 0, 0
                    ], 
                   ['43',
                    15.24, 0, 0, 0
                    ], 
                   ['44',
                    8.2, 0, 0, 0
                    ], 
                   ['45',
                    0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění v průběhu života půjčky, podle roku originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
                ['Měsíc', 'Objemem vážený průměrný úrok [% p.a.]', 'Počtem vážený průměrný úrok [% p.a.]', 'Ztraceno [% objemu]', 'Zesplatněno [% půjček]', 'S pojištěním [% půjček]', 'Bez příběhu [% půjček]'],
                   ['2016-02',
                    9.49158258028822, 9.925233644859812, 0, 2.1999999999999997, 0, 0.8999999999999999
                    ], 
                   ['2016-03',
                    9.517338250083808, 10.044270833333334, 0.1, 3.1, 0, 0.5
                    ], 
                   ['2016-04',
                    9.407446355112478, 9.959309494451293, 0.2, 4.2, 0, 0.5
                    ], 
                   ['2016-05',
                    9.32118460232555, 9.987387387387388, 0.2, 4.1000000000000005, 0, 0.6
                    ], 
                   ['2016-06',
                    9.217182025562384, 9.982300884955752, 0.1, 4.1000000000000005, 0, 0.7000000000000001
                    ], 
                   ['2016-07',
                    9.137489940673367, 9.920331421287445, 0.1, 4.3999999999999995, 0, 0.7000000000000001
                    ], 
                   ['2016-08',
                    9.120183915529061, 9.964835164835165, 0.1, 4.3999999999999995, 0, 1
                    ], 
                   ['2016-09',
                    9.042353283960818, 9.876494023904383, 0.1, 4.5, 0, 1.0999999999999999
                    ], 
                   ['2016-10',
                    9.029944356462487, 9.890848214285715, 0.1, 4.5, 0, 1.2
                    ], 
                   ['2016-11',
                    9.021734147670893, 9.93571700266261, 0.1, 4.6, 0, 1.0999999999999999
                    ], 
                   ['2016-12',
                    9.019857794498453, 9.996398166339228, 0.1, 5.2, 0, 1.0999999999999999
                    ], 
                   ['2017-01',
                    8.937109445982491, 9.963991769547325, 0.1, 5.2, 0, 1
                    ], 
                   ['2017-02',
                    8.81785068357286, 9.8637339055794, 0, 5, 0, 1
                    ], 
                   ['2017-03',
                    8.782715891923353, 9.851824457593688, 0, 5, 0, 1
                    ], 
                   ['2017-04',
                    8.669677213284114, 9.748507119889757, 0, 5.3, 0, 1
                    ], 
                   ['2017-05',
                    8.443559196771801, 9.563833992094862, 0, 5.3, 0, 1
                    ], 
                   ['2017-06',
                    8.27639149891328, 9.401465386558868, 0.1, 5.5, 0, 1
                    ], 
                   ['2017-07',
                    8.13985993068735, 9.257765346680406, 0.1, 5.6000000000000005, 0, 1.0999999999999999
                    ], 
                   ['2017-08',
                    8.041712420530425, 9.135138587303615, 0.1, 5.6000000000000005, 0, 1.3
                    ], 
                   ['2017-09',
                    7.937677087770593, 9.055549314760729, 0.1, 5.6000000000000005, 0, 1.5
                    ], 
                   ['2017-10',
                    7.875682451548923, 8.9925679640133, 0.1, 5.5, 0, 1.6
                    ], 
                   ['2017-11',
                    7.776697189031557, 8.907234440010189, 0.1, 5.3, 0, 1.7000000000000002
                    ], 
                   ['2017-12',
                    7.740692240551537, 8.881466521671587, 0.1, 5.4, 0, 1.7999999999999998
                    ], 
                   ['2018-01',
                    7.739733542021845, 8.860983981693364, 0.1, 5.3, 0, 2
                    ], 
                   ['2018-02',
                    7.737861656676984, 8.84543170699458, 0.1, 5.2, 0, 2
                    ], 
                   ['2018-03',
                    7.75065798435242, 8.85685206250374, 0.1, 5.2, 0, 2.1
                    ], 
                   ['2018-04',
                    7.736036140479374, 8.8519092418373, 0.1, 5.2, 1.6, 2.1999999999999997
                    ], 
                   ['2018-05',
                    7.732359235000748, 8.841647034722934, 0.1, 5.1, 4.2, 2.4
                    ], 
                   ['2018-06',
                    7.702501598828086, 8.812888382904037, 0, 4.9, 6.3, 2.7
                    ], 
                   ['2018-07',
                    7.615663151072013, 8.728707815275312, 0, 4.8, 8.200000000000001, 2.9000000000000004
                    ], 
                   ['2018-08',
                    7.58225061664269, 8.718000583892897, 0, 4.6, 9.8, 3.2
                    ], 
                   ['2018-09',
                    7.542511387533077, 8.697392032539778, 0, 4.3999999999999995, 10.9, 3.5999999999999996
                    ], 
                   ['2018-10',
                    7.490300610473837, 8.66316829468347, 0, 4.3, 12.2, 5.2
                    ], 
                   ['2018-11',
                    7.479617036269997, 8.672756842797329, 0, 4, 13.900000000000002, 7.9
                    ], 
                   ['2018-12',
                    7.482553178896041, 8.68898968934119, 0, 4, 14.899999999999999, 9.6
                    ], 
                   ['2019-01',
                    7.493066654953752, 8.714221910291585, 0, 3.8, 16.1, 11.3
                    ], 
                   ['2019-02',
                    7.518923692985673, 8.75059382422803, 0, 3.6999999999999997, 17.299999999999997, 12.9
                    ], 
                   ['2019-03',
                    7.537800831451617, 8.784402340807695, 0, 3.5000000000000004, 18.8, 14.6
                    ], 
                   ['2019-04',
                    7.498827475399957, 8.73187510298237, 0, 3.3000000000000003, 20, 16.400000000000002
                    ], 
                   ['2019-05',
                    7.466122043199563, 8.690631921824105, 0, 3.2, 21.6, 18
                    ], 
                   ['2019-06',
                    7.439856604678536, 8.651048722966532, 0, 3, 22.6, 19.3
                    ], 
                   ['2019-07',
                    7.413376785244365, 8.608541264507519, 0, 2.9000000000000004, 23.599999999999998, 20.5
                    ], 
                   ['2019-08',
                    7.388617846096588, 8.57654559945349, 0, 2.7, 24.5, 21.6
                    ], 
                   ['2019-09',
                    7.378042483669791, 8.561435616438356, 0, 2.6, 25, 22.400000000000002
                    ], 
                   ['2019-10',
                    7.363831857249641, 8.534780307040762, 0, 2.5, 25.5, 23.200000000000003
                    ]
        ]);
        var options = {
            chart: {
                title: 'Souhrnné statistiky platformy',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
    function drawLINE3Chart13() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', 'Objemem vážený průměrný úrok [% p.a.]', 'Počtem vážený průměrný úrok [% p.a.]', 'Ztraceno [% objemu]', 'Zesplatněno [% půjček]', 'S pojištěním [% půjček]', 'Bez příběhu [% půjček]'],
                   ['2016-02',
                    9.49158258028822, 9.925233644859812, 0, 2.1999999999999997, 0, 0.8999999999999999
                    ], 
                   ['2016-03',
                    9.595444120100083, 10.147368421052631, 0.3, 3.9, 0, 0
                    ], 
                   ['2016-04',
                    9.173282829789137, 9.790794979079498, 0.4, 6.7, 0, 0.4
                    ], 
                   ['2016-05',
                    9.092614146116729, 10.076298701298702, 0, 3.9, 0, 1
                    ], 
                   ['2016-06',
                    8.976992604765819, 10.08969465648855, 0, 3.8, 0, 0.8
                    ], 
                   ['2016-07',
                    8.72180547954026, 9.609865470852018, 0, 5.800000000000001, 0, 0.8999999999999999
                    ], 
                   ['2016-08',
                    8.994324748836796, 10.146067415730336, 0, 4.5, 0, 3
                    ], 
                   ['2016-09',
                    8.475082508250825, 9.333333333333332, 0, 3.8, 0, 1.3
                    ], 
                   ['2016-10',
                    8.95977320287314, 10.014760147601477, 0, 3.6999999999999997, 0, 1.7999999999999998
                    ], 
                   ['2016-11',
                    8.965806209612794, 10.119385342789599, 0, 5.2, 0, 1
                    ], 
                   ['2016-12',
                    9.067868008424995, 10.386813186813187, 0, 8.4, 0, 0.7000000000000001
                    ], 
                   ['2017-01',
                    8.505928138293058, 9.891414141414142, 0, 4.3, 0, 0.5
                    ], 
                   ['2017-02',
                    7.857122826696579, 9.063157894736843, 0, 2.9000000000000004, 0, 0.8
                    ], 
                   ['2017-03',
                    8.44317281014665, 9.7739898989899, 0, 4, 0, 1.5
                    ], 
                   ['2017-04',
                    7.7558307720122945, 8.924744897959183, 0, 6.9, 0, 1
                    ], 
                   ['2017-05',
                    7.427096114519427, 8.677722152690864, 0, 4.9, 0, 1.2
                    ], 
                   ['2017-06',
                    7.5553340665383555, 8.655241935483872, 0.1, 5.6000000000000005, 0, 1.0999999999999999
                    ], 
                   ['2017-07',
                    7.369513154132113, 8.433678756476684, 0.2, 5.5, 0, 1.4000000000000001
                    ], 
                   ['2017-08',
                    7.565856039762137, 8.558210251954822, 0.1, 5.1, 0, 2.7
                    ], 
                   ['2017-09',
                    7.42962586580376, 8.692682926829269, 0.1, 4.6, 0, 2.1999999999999997
                    ], 
                   ['2017-10',
                    7.591390338143159, 8.712568681318682, 0, 4.7, 0, 2.6
                    ], 
                   ['2017-11',
                    7.368334806304317, 8.575084364454444, 0.1, 3.6999999999999997, 0, 2.4
                    ], 
                   ['2017-12',
                    7.559312861817267, 8.775260029717682, 0.1, 4.8, 0, 2.6
                    ], 
                   ['2018-01',
                    7.837964382592287, 8.763197026022304, 0, 3.8, 0, 3.2
                    ], 
                   ['2018-02',
                    7.814064544265156, 8.814121037463977, 0, 3.5999999999999996, 0, 2.7
                    ], 
                   ['2018-03',
                    7.956755418832432, 9.071930773391022, 0, 4.3999999999999995, 0, 3.2
                    ], 
                   ['2018-04',
                    7.760774111184185, 8.923502036067482, 0, 3.9, 17.2, 3.3000000000000003
                    ], 
                   ['2018-05',
                    7.777990782696255, 8.885035499726925, 0, 3.5000000000000004, 29.2, 4.5
                    ], 
                   ['2018-06',
                    7.566124475794425, 8.700652938222, 0, 2.3, 25.3, 5.4
                    ], 
                   ['2018-07',
                    6.865983288827634, 8.032366649404453, 0, 1.9, 28.1, 5.3
                    ], 
                   ['2018-08',
                    7.273500630472233, 8.693336831059812, 0, 1.3, 26.200000000000003, 6.1
                    ], 
                   ['2018-09',
                    7.119913487698421, 8.519358741681792, 0, 1.6, 26.200000000000003, 9
                    ], 
                   ['2018-10',
                    7.06173854601613, 8.421422300263389, 0, 1.4000000000000001, 26, 22.2
                    ], 
                   ['2018-11',
                    7.53380972432071, 8.95212953185498, 0, 1.0999999999999999, 28.599999999999998, 32.7
                    ], 
                   ['2018-12',
                    7.8702666367913965, 9.23445671121441, 0, 1.0999999999999999, 31.1, 37
                    ], 
                   ['2019-01',
                    7.852695897037853, 9.282981853849925, 0, 1, 32.4, 36
                    ], 
                   ['2019-02',
                    8.081726483309671, 9.421714818266542, 0, 0.8, 35.4, 35.4
                    ], 
                   ['2019-03',
                    8.000097559615893, 9.393808777429467, 0, 0.4, 36.1, 36
                    ], 
                   ['2019-04',
                    7.199517796185338, 8.325542878174458, 0, 0.3, 35.199999999999996, 37.1
                    ], 
                   ['2019-05',
                    7.167471910748029, 8.297827610371408, 0, 0.2, 40.699999999999996, 38.3
                    ], 
                   ['2019-06',
                    7.257352543290044, 8.330078125, 0, 0, 36.8, 36.199999999999996
                    ], 
                   ['2019-07',
                    7.355318743626809, 8.39932562620424, 0, 0, 35.199999999999996, 35.8
                    ], 
                   ['2019-08',
                    7.255446437408585, 8.405562742561449, 0, 0, 35.6, 35.4
                    ], 
                   ['2019-09',
                    7.455739826069647, 8.62291888062345, 0, 0, 33, 35.699999999999996
                    ], 
                   ['2019-10',
                    7.321783116095787, 8.426928520877565, 0, 0, 33, 36
                    ]
        ]);
        var options = {
            chart: {
                title: 'Souhrnné statistiky podle data originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
            },
            axes: {
                y: {
                  0: {label: ''}
                },
            },
            
            isStacked: false
        };
        var chart_div = document.getElementById('chart-LINE-13-interactive');
        var chart = new google.charts.Line(chart_div);

        chart.draw(data, google.charts.Line.convertOptions(options));
    }
        // nothing
  google.charts.setOnLoadCallback(drawLINE3Chart13);
    function drawCOLUMN3Chart14() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', '3 % p.a.', '4 % p.a.', '5 % p.a.', '6 % p.a.', '7 % p.a.', '8.5 % p.a.', '9.5 % p.a.', '11 % p.a.', '13.5 % p.a.', '15.5 % p.a.', '20 % p.a.'],
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
                    1.09, 6.17, 12.97, 14.73, 14.49, 14.22, 12.3, 12.62, 5.78, 3.71, 1.91
                    ], 
                   ['2019-07',
                    1.22, 3.92, 13.46, 15.29, 14.48, 15.41, 12.36, 12.2, 6.13, 3.5, 2.02
                    ], 
                   ['2019-08',
                    1.55, 6.44, 13.1, 14.52, 13.42, 13.97, 11.45, 12.84, 6.11, 4.37, 2.23
                    ], 
                   ['2019-09',
                    1.17, 4.43, 13.43, 13.32, 13.74, 14.03, 12.79, 13.28, 7.16, 4.18, 2.48
                    ], 
                   ['2019-10',
                    1.63, 3.29, 15.85, 13.52, 15.5, 14.51, 10.93, 11.39, 6.65, 4.67, 2.05
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba úrokových měr v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
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
        var chart_div = document.getElementById('chart-COLUMN-14-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawCOLUMN3Chart14);
    function drawCOLUMN3Chart15() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', 'Auto-moto', 'Cestování', 'Domácnost', 'Elektronika', 'Jiné', 'Refinancování půjček', 'Vlastní projekt', 'Vzdělání', 'Zdraví'],
                   ['2016-02',
                    13.08, 0.93, 7.48, 4.67, 9.03, 46.42, 13.08, 2.18, 3.12
                    ], 
                   ['2016-03',
                    18.6, 0.35, 14.39, 2.11, 14.39, 38.6, 10.18, 0.7, 0.7
                    ], 
                   ['2016-04',
                    22.59, 0.42, 10.04, 2.51, 9.21, 46.44, 5.86, 1.67, 1.26
                    ], 
                   ['2016-05',
                    21.43, 0.97, 12.66, 1.62, 11.69, 41.56, 7.79, 0.97, 1.3
                    ], 
                   ['2016-06',
                    22.14, 1.53, 17.18, 0.76, 11.83, 35.5, 8.78, 1.15, 1.15
                    ], 
                   ['2016-07',
                    24.66, 0, 16.59, 2.24, 8.07, 37.67, 8.52, 0.9, 1.35
                    ], 
                   ['2016-08',
                    18.35, 0.37, 16.1, 1.5, 11.61, 44.19, 7.12, 0.37, 0.37
                    ], 
                   ['2016-09',
                    23.08, 0.85, 13.68, 1.71, 11.54, 36.32, 8.55, 1.28, 2.99
                    ], 
                   ['2016-10',
                    23.25, 1.11, 17.71, 4.06, 8.49, 37.64, 4.8, 1.48, 1.48
                    ], 
                   ['2016-11',
                    17.26, 0.24, 14.42, 3.31, 9.46, 46.1, 8.04, 0.47, 0.71
                    ], 
                   ['2016-12',
                    15.6, 0.44, 16.04, 1.1, 12.09, 46.15, 6.59, 1.1, 0.88
                    ], 
                   ['2017-01',
                    19.95, 0.51, 19.7, 2.02, 14.39, 34.85, 6.57, 0.76, 1.26
                    ], 
                   ['2017-02',
                    20.26, 1.05, 17.37, 1.84, 8.16, 41.32, 7.37, 1.58, 1.05
                    ], 
                   ['2017-03',
                    24.24, 0.76, 21.72, 2.02, 11.11, 35.1, 3.54, 0.51, 1.01
                    ], 
                   ['2017-04',
                    21.17, 1.02, 19.13, 3.32, 10.46, 40.05, 3.32, 0.77, 0.77
                    ], 
                   ['2017-05',
                    24.66, 1, 17.4, 1.5, 10.39, 38.05, 5.13, 0.38, 1.5
                    ], 
                   ['2017-06',
                    22.38, 1.71, 20.16, 1.92, 10.38, 34.98, 4.94, 2.12, 1.41
                    ], 
                   ['2017-07',
                    21.87, 2.59, 24.66, 1.14, 13.99, 26.01, 6.63, 1.35, 1.76
                    ], 
                   ['2017-08',
                    22.76, 1.48, 21.55, 2.17, 14.25, 27.63, 7.21, 1.39, 1.56
                    ], 
                   ['2017-09',
                    22.76, 1.06, 26.02, 0.73, 14.39, 25.61, 7.15, 1.38, 0.89
                    ], 
                   ['2017-10',
                    21.98, 0.62, 25.69, 1.72, 13.39, 28.43, 5.98, 0.69, 1.51
                    ], 
                   ['2017-11',
                    20.87, 0.51, 22.38, 1.63, 19.52, 27.62, 5.01, 1.12, 1.35
                    ], 
                   ['2017-12',
                    4.09, 0.15, 4.83, 0.22, 63.67, 25.19, 1.26, 0.07, 0.52
                    ], 
                   ['2018-01',
                    14.42, 0.59, 15.09, 0.89, 38.07, 24.91, 3.94, 1.04, 1.04
                    ], 
                   ['2018-02',
                    24.35, 0.94, 24.78, 1.44, 13.4, 26.95, 6.41, 0.72, 1.01
                    ], 
                   ['2018-03',
                    25.47, 0.81, 26.07, 1.41, 13.52, 24.55, 5.52, 1.14, 1.51
                    ], 
                   ['2018-04',
                    26.35, 1.45, 25.19, 1.63, 13.21, 21.99, 7.68, 0.99, 1.51
                    ], 
                   ['2018-05',
                    25.56, 2.24, 26.6, 1.37, 13.44, 21.85, 6.83, 0.82, 1.31
                    ], 
                   ['2018-06',
                    24.06, 2.06, 26.07, 1.05, 16.17, 21.45, 5.88, 1.31, 1.96
                    ], 
                   ['2018-07',
                    25.95, 2.59, 26.83, 0.88, 14.45, 20.97, 5.49, 1.14, 1.71
                    ], 
                   ['2018-08',
                    23.71, 2.31, 25.76, 1.26, 14.85, 23.61, 5.4, 1.52, 1.57
                    ], 
                   ['2018-09',
                    21.66, 1.09, 26.56, 1.57, 16.27, 25.35, 4.48, 1.51, 1.51
                    ], 
                   ['2018-10',
                    21.73, 1.27, 24.76, 2.15, 17.43, 24.32, 5.4, 1.4, 1.54
                    ], 
                   ['2018-11',
                    20.94, 0.53, 27.63, 1.58, 19.08, 22.63, 5.28, 1.02, 1.3
                    ], 
                   ['2018-12',
                    20.16, 1.1, 27.54, 2.44, 21.73, 18.54, 6.1, 1.1, 1.28
                    ], 
                   ['2019-01',
                    22.41, 2.26, 26.48, 1.62, 18.24, 20.11, 6.03, 1.47, 1.37
                    ], 
                   ['2019-02',
                    23.67, 1.58, 26.05, 1.3, 19.06, 19.66, 5.87, 1.4, 1.4
                    ], 
                   ['2019-03',
                    25.86, 0.71, 26.1, 1.53, 19.24, 18.5, 5.8, 1.02, 1.25
                    ], 
                   ['2019-04',
                    24.29, 1.66, 24.11, 1.18, 20.65, 18.84, 6.29, 1.21, 1.77
                    ], 
                   ['2019-05',
                    22.46, 1.79, 25.79, 1.82, 19.59, 19.13, 6.34, 1.19, 1.89
                    ], 
                   ['2019-06',
                    22.66, 3.55, 27.34, 1.25, 19.88, 16.41, 5.7, 1.48, 1.72
                    ], 
                   ['2019-07',
                    24.05, 3.85, 28.07, 1.48, 15.64, 18.3, 5.36, 1.32, 1.93
                    ], 
                   ['2019-08',
                    23.97, 2.52, 28.14, 1.36, 17.04, 18.89, 4.98, 1.52, 1.58
                    ], 
                   ['2019-09',
                    24.8, 1.38, 28.69, 2.16, 15.23, 18.63, 5.6, 1.74, 1.77
                    ], 
                   ['2019-10',
                    22.26, 1.34, 30.96, 1.98, 14.83, 21.13, 4.6, 1.34, 1.56
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba účelu ǘvěrů v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
            },
            
            axes: {
                y: {
                  0: {label: 'Podíl počtu na celku [%]'}
                },
            },
            
            isStacked: true
        };
        var chart_div = document.getElementById('chart-COLUMN-15-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawCOLUMN3Chart15);
    function drawCOLUMN3Chart16() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', 'Hlavní město Praha', 'Jihomoravský kraj', 'Jihočeský kraj', 'Karlovarský kraj', 'Kraj Vysočina', 'Královéhradecký kraj', 'Liberecký kraj', 'Moravskoslezský kraj', 'Olomoucký kraj', 'Pardubický kraj', 'Plzeňský kraj', 'Středočeský kraj', 'Zlínský kraj', 'Ústecký kraj'],
                   ['2016-02',
                    29.28, 9.66, 5.3, 2.18, 2.8, 2.18, 4.36, 10.9, 3.74, 2.8, 3.12, 12.46, 4.67, 6.54
                    ], 
                   ['2016-03',
                    21.05, 10.18, 5.96, 2.46, 3.16, 5.61, 4.91, 7.37, 4.21, 4.21, 4.21, 17.54, 3.86, 5.26
                    ], 
                   ['2016-04',
                    21.34, 8.79, 5.44, 1.26, 3.35, 4.6, 6.69, 11.3, 4.18, 4.18, 7.95, 11.72, 4.18, 5.02
                    ], 
                   ['2016-05',
                    18.18, 13.31, 4.87, 0.97, 1.3, 5.52, 3.9, 13.31, 6.17, 4.55, 5.52, 11.04, 6.49, 4.87
                    ], 
                   ['2016-06',
                    15.65, 13.74, 4.58, 1.91, 2.67, 1.91, 4.96, 12.98, 4.2, 5.73, 4.96, 14.12, 4.2, 8.4
                    ], 
                   ['2016-07',
                    18.39, 5.38, 4.04, 2.69, 2.24, 4.04, 3.59, 13.9, 6.73, 2.69, 4.04, 13.9, 5.38, 13
                    ], 
                   ['2016-08',
                    16.85, 8.61, 5.62, 2.62, 4.49, 6.37, 5.99, 6.74, 6.37, 4.12, 3.37, 16.48, 3, 9.36
                    ], 
                   ['2016-09',
                    15.38, 11.11, 8.12, 1.71, 2.99, 3.85, 5.13, 9.83, 5.98, 5.13, 2.99, 17.09, 5.13, 5.56
                    ], 
                   ['2016-10',
                    15.13, 11.81, 3.69, 2.58, 2.95, 2.58, 6.64, 12.92, 6.64, 7.01, 4.06, 14.39, 4.06, 5.54
                    ], 
                   ['2016-11',
                    14.89, 8.75, 4.73, 2.84, 3.31, 4.02, 4.73, 16.08, 4.49, 6.15, 4.96, 11.58, 4.73, 8.75
                    ], 
                   ['2016-12',
                    13.85, 12.09, 4.4, 3.08, 2.64, 4.4, 4.62, 12.53, 5.93, 4.18, 4.62, 13.19, 4.18, 10.33
                    ], 
                   ['2017-01',
                    15.91, 12.63, 3.03, 2.78, 2.78, 5.81, 4.55, 12.12, 5.3, 3.79, 4.8, 13.64, 3.79, 9.09
                    ], 
                   ['2017-02',
                    13.16, 11.84, 3.95, 3.16, 4.21, 3.16, 6.32, 11.84, 3.42, 4.47, 5, 14.47, 5, 10
                    ], 
                   ['2017-03',
                    12.63, 12.63, 5.05, 2.02, 5.81, 4.55, 4.8, 11.87, 4.8, 4.8, 4.29, 13.89, 4.29, 8.59
                    ], 
                   ['2017-04',
                    19.13, 7.91, 5.1, 3.83, 3.83, 5.36, 4.85, 9.95, 5.1, 4.59, 5.87, 11.48, 3.57, 9.44
                    ], 
                   ['2017-05',
                    15.02, 10.76, 5.13, 3.25, 3, 5.01, 5.38, 12.52, 4.38, 4.38, 5.26, 12.89, 4.51, 8.51
                    ], 
                   ['2017-06',
                    16.23, 9.68, 3.83, 3.43, 3.43, 4.44, 3.93, 12.9, 5.75, 4.84, 4.33, 13.61, 4.64, 8.97
                    ], 
                   ['2017-07',
                    11.61, 10.05, 6.22, 2.9, 4.15, 4.87, 5.28, 14.2, 5.7, 4.77, 4.25, 11.71, 5.39, 8.91
                    ], 
                   ['2017-08',
                    14.07, 10.51, 4, 3.56, 3.13, 4.26, 5.04, 14.51, 5.47, 4.17, 4.78, 13.99, 4.69, 7.82
                    ], 
                   ['2017-09',
                    12.44, 9.84, 4.47, 2.93, 3.82, 4.8, 3.82, 13.25, 6.42, 5.04, 4.47, 15.04, 4.63, 9.02
                    ], 
                   ['2017-10',
                    11.68, 11.26, 5.15, 3.09, 3.91, 4.6, 3.71, 12.29, 5.01, 4.12, 5.56, 15.38, 4.95, 9.27
                    ], 
                   ['2017-11',
                    11.81, 10.01, 5.06, 2.92, 3.26, 5.91, 4.89, 13.67, 5.74, 4.84, 4.61, 13.67, 4.33, 9.28
                    ], 
                   ['2017-12',
                    11.44, 10.1, 4.16, 3.19, 4.01, 4.61, 4.01, 13.97, 5.57, 4.61, 5.5, 14.93, 5.42, 8.47
                    ], 
                   ['2018-01',
                    13.75, 10.86, 4.54, 2.01, 3.27, 4.98, 4.46, 11.08, 6.62, 4.61, 5.13, 14.57, 4.68, 9.44
                    ], 
                   ['2018-02',
                    11.38, 10.3, 4.83, 2.67, 3.6, 4.47, 5.55, 14.41, 5.62, 3.96, 5.55, 13.76, 4.68, 9.22
                    ], 
                   ['2018-03',
                    12.6, 10.44, 4.43, 2.49, 4, 3.84, 4.87, 13.52, 5.79, 5.41, 5.19, 13.79, 4.6, 9.03
                    ], 
                   ['2018-04',
                    12.33, 11.58, 4.65, 3.32, 2.79, 3.61, 5.06, 12.74, 6.34, 5.24, 4.48, 15.13, 4.13, 8.61
                    ], 
                   ['2018-05',
                    12.18, 10.81, 4.42, 3.22, 3.5, 4.7, 4.7, 13.44, 5.73, 4.86, 4.42, 14.15, 4.97, 8.9
                    ], 
                   ['2018-06',
                    12.1, 9.74, 4.52, 3.62, 3.16, 4.42, 4.32, 13.16, 5.42, 4.32, 5.52, 16.32, 3.52, 9.84
                    ], 
                   ['2018-07',
                    10.51, 8.34, 4.3, 2.43, 4.04, 4.45, 4.97, 13.15, 6.58, 3.99, 5.39, 14.91, 6.11, 10.82
                    ], 
                   ['2018-08',
                    12.49, 9.34, 4.41, 3.2, 3.83, 4.88, 5.51, 13.17, 5.14, 5.3, 4.51, 13.9, 4.2, 10.13
                    ], 
                   ['2018-09',
                    11.07, 10.28, 4.6, 2.72, 3.09, 4.66, 5.57, 13.19, 6.84, 4.72, 4.78, 15.06, 5.2, 8.23
                    ], 
                   ['2018-10',
                    12.25, 10.23, 4.3, 2.5, 3.42, 4.96, 5.53, 11.76, 6.23, 4.3, 4.52, 15.72, 5.22, 9.04
                    ], 
                   ['2018-11',
                    10.42, 10.88, 4.54, 3.38, 4.22, 4.61, 4.29, 13.2, 5.03, 4.29, 5.21, 16.05, 5.39, 8.48
                    ], 
                   ['2018-12',
                    12.26, 10.34, 6.16, 2.73, 4.94, 5.87, 4.82, 12.14, 5.69, 4.07, 5.29, 13.65, 4.42, 7.61
                    ], 
                   ['2019-01',
                    11.18, 10.54, 5.79, 2.4, 3.43, 4.61, 4.76, 11.38, 6.57, 4.81, 4.76, 15.6, 4.76, 9.42
                    ], 
                   ['2019-02',
                    11.98, 10.25, 4.43, 2.94, 3.36, 3.87, 4.15, 12.4, 6.01, 4.52, 5.64, 16.12, 4.85, 9.51
                    ], 
                   ['2019-03',
                    11.56, 10.93, 5.37, 3.33, 3.88, 4.66, 4.74, 12.3, 5.53, 4.19, 4.23, 15.13, 4.78, 9.37
                    ], 
                   ['2019-04',
                    11.74, 9.39, 4.97, 3.42, 4.34, 4.49, 5.37, 12.59, 4.64, 4.45, 5.15, 14.91, 4.86, 9.68
                    ], 
                   ['2019-05',
                    11.39, 9.6, 5.26, 3.08, 4.06, 4.31, 5.4, 11.49, 6.24, 4.38, 5.96, 14.65, 4.56, 9.64
                    ], 
                   ['2019-06',
                    10.78, 10.27, 4.18, 3.4, 3.71, 4.8, 5.39, 13.2, 5.47, 4.73, 4.92, 14.57, 4.84, 9.73
                    ], 
                   ['2019-07',
                    9.41, 9.96, 5.14, 3.6, 3.69, 5.07, 5.2, 12.17, 6.65, 4.56, 5.62, 14.55, 5.39, 8.99
                    ], 
                   ['2019-08',
                    9.64, 9.18, 5.4, 3.14, 4.27, 4.27, 5.14, 12.42, 6.05, 4.3, 5.79, 16.14, 4.33, 9.93
                    ], 
                   ['2019-09',
                    10.95, 10.02, 4.39, 3.4, 3.9, 3.75, 4.5, 12.26, 6.23, 4.61, 5.6, 15.37, 4.75, 10.27
                    ], 
                   ['2019-10',
                    9.09, 9.52, 4.99, 3.43, 4.03, 4.78, 4.78, 13.02, 6.65, 4.81, 4.95, 15.39, 5.7, 8.85
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba krajů v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
            },
            
            axes: {
                y: {
                  0: {label: 'Podíl počtu na celku [%]'}
                },
            },
            
            isStacked: true
        };
        var chart_div = document.getElementById('chart-COLUMN-16-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawCOLUMN3Chart16);
    function drawCOLUMN3Chart17() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', 'Důchod', 'Jiné', 'Nezaměstnaný', 'OSVČ', 'Podnikatel', 'Rodičovská dovolená', 'Student', 'Svobodné povolání', 'Zaměstnanec'],
                   ['2016-02',
                    1.56, 1.87, 0, 33.96, 7.79, 0.31, 0.62, 0.62, 53.27
                    ], 
                   ['2016-03',
                    0.7, 2.11, 0, 25.26, 5.26, 2.11, 0, 1.05, 63.51
                    ], 
                   ['2016-04',
                    2.51, 1.26, 0, 13.39, 4.6, 0.42, 0.84, 0.42, 76.57
                    ], 
                   ['2016-05',
                    3.25, 0.97, 0, 17.21, 3.9, 1.62, 0.32, 1.62, 71.1
                    ], 
                   ['2016-06',
                    1.91, 0.38, 0, 17.94, 5.73, 2.29, 0.76, 1.15, 69.85
                    ], 
                   ['2016-07',
                    3.14, 1.35, 0, 17.04, 6.73, 0.9, 0.45, 0.45, 69.96
                    ], 
                   ['2016-08',
                    3.75, 0.37, 0, 15.73, 4.49, 0.75, 0, 0.75, 74.16
                    ], 
                   ['2016-09',
                    2.14, 0.85, 0, 15.81, 3.42, 1.28, 0, 0.43, 76.07
                    ], 
                   ['2016-10',
                    3.32, 1.11, 0, 14.76, 3.32, 2.21, 1.48, 0.37, 73.43
                    ], 
                   ['2016-11',
                    4.26, 1.18, 0, 18.68, 3.55, 2.13, 0.24, 0.24, 69.74
                    ], 
                   ['2016-12',
                    5.05, 1.1, 0, 17.14, 4.4, 1.32, 0.22, 0, 70.77
                    ], 
                   ['2017-01',
                    3.28, 2.02, 0, 16.92, 2.02, 1.77, 0.25, 0.25, 73.48
                    ], 
                   ['2017-02',
                    5, 0.26, 0, 12.63, 2.37, 2.63, 0.53, 0.79, 75.79
                    ], 
                   ['2017-03',
                    3.79, 1.01, 0, 11.62, 1.52, 2.02, 0, 0, 80.05
                    ], 
                   ['2017-04',
                    5.36, 1.02, 0, 12.5, 2.81, 0.51, 0.26, 0, 77.55
                    ], 
                   ['2017-05',
                    3.75, 0.63, 0, 11.76, 2.13, 1.5, 0.38, 0.25, 79.6
                    ], 
                   ['2017-06',
                    3.83, 0.91, 0, 12.6, 2.22, 1.81, 0.5, 0.2, 77.92
                    ], 
                   ['2017-07',
                    4.35, 0.52, 0, 10.67, 2.69, 1.45, 0.1, 0.62, 79.59
                    ], 
                   ['2017-08',
                    4, 1.22, 0, 12.86, 2.35, 1.48, 0.26, 0.43, 77.41
                    ], 
                   ['2017-09',
                    3.5, 0.73, 0, 12.2, 2.2, 0.89, 0.33, 0.33, 79.84
                    ], 
                   ['2017-10',
                    6.11, 0.82, 0, 12.71, 1.79, 1.1, 0.48, 0.48, 76.51
                    ], 
                   ['2017-11',
                    5.79, 1.24, 0, 10.74, 1.91, 1.41, 0.28, 0.39, 78.23
                    ], 
                   ['2017-12',
                    7.8, 1.26, 0, 11.66, 1.56, 2.08, 0.22, 0.59, 74.81
                    ], 
                   ['2018-01',
                    5.43, 0.37, 0.22, 13.68, 1.86, 2.68, 0.3, 0.3, 75.17
                    ], 
                   ['2018-02',
                    5.26, 0.86, 0, 13.18, 1.37, 3.24, 0.29, 0.22, 75.58
                    ], 
                   ['2018-03',
                    4.38, 0.65, 0.05, 12.6, 1.78, 3.79, 0.49, 0.22, 76.04
                    ], 
                   ['2018-04',
                    4.71, 1.75, 0, 12.86, 2.27, 2.91, 0.52, 0.41, 74.58
                    ], 
                   ['2018-05',
                    4.53, 0.49, 0, 10.6, 1.26, 2.84, 0.38, 0.44, 79.46
                    ], 
                   ['2018-06',
                    4.12, 0.3, 0, 10.85, 1.56, 4.72, 0.05, 0.5, 77.9
                    ], 
                   ['2018-07',
                    4.97, 0.73, 0, 10.46, 1.66, 2.64, 0.16, 0.36, 79.03
                    ], 
                   ['2018-08',
                    5.61, 0.42, 0.05, 11.44, 1.36, 3.78, 0.31, 0.16, 76.86
                    ], 
                   ['2018-09',
                    5.32, 0.85, 0, 10.53, 1.21, 2.36, 0.24, 0.06, 79.43
                    ], 
                   ['2018-10',
                    5.88, 0.7, 0, 11.24, 1.05, 2.63, 0.35, 0.22, 77.92
                    ], 
                   ['2018-11',
                    5.98, 0.67, 0, 10.91, 1.27, 3.59, 0.28, 0.11, 77.19
                    ], 
                   ['2018-12',
                    4.76, 0.41, 0.06, 12.09, 1.92, 2.85, 0.17, 0.17, 77.57
                    ], 
                   ['2019-01',
                    4.07, 0.69, 0, 10.69, 1.37, 2.65, 0.1, 0.25, 80.19
                    ], 
                   ['2019-02',
                    5.55, 0.65, 0, 11.32, 1.35, 3.12, 0.42, 0.19, 77.4
                    ], 
                   ['2019-03',
                    5.53, 0.74, 0.04, 10.54, 1.1, 3.53, 0.12, 0.24, 78.17
                    ], 
                   ['2019-04',
                    5.67, 0.55, 0, 11.12, 1.18, 2.69, 0.18, 0.33, 78.28
                    ], 
                   ['2019-05',
                    5.33, 0.46, 0, 9.64, 1.26, 3.19, 0.04, 0.28, 79.82
                    ], 
                   ['2019-06',
                    5.35, 0.74, 0, 8.79, 1.05, 3.01, 0.16, 0.12, 80.78
                    ], 
                   ['2019-07',
                    4.88, 0.64, 0, 9.18, 1.38, 2.28, 0.13, 0.26, 81.25
                    ], 
                   ['2019-08',
                    5.56, 0.55, 0, 8.93, 0.94, 3.1, 0.1, 0.03, 80.79
                    ], 
                   ['2019-09',
                    5.35, 0.6, 0.07, 9.07, 1.13, 2.73, 0.35, 0.25, 80.45
                    ], 
                   ['2019-10',
                    5.66, 0.35, 0, 8.39, 0.81, 2.87, 0.39, 0.11, 81.42
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba zdrojů příjmu v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
            },
            
            axes: {
                y: {
                  0: {label: 'Podíl počtu na celku [%]'}
                },
            },
            
            isStacked: true
        };
        var chart_div = document.getElementById('chart-COLUMN-17-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawCOLUMN3Chart17);
    function drawCOLUMN3Chart18() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', ' do 50', 'od 50 do 100', 'od 100 do 150', 'od 150 do 200', 'od 200 do 250', 'od 250 do 300', 'od 300 do 350', 'od 350 do 400', 'od 400 do 450', 'od 450 do 500', 'od 500 do 550', 'od 550 do 600', 'od 600 do 650', 'od 650 do 700', ' od 700'],
                   ['2016-02',
                    26.79, 23.36, 15.26, 26.79, 5.3, 2.49, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2016-03',
                    21.75, 23.86, 20, 15.44, 7.72, 11.23, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2016-04',
                    17.57, 25.94, 20.5, 14.23, 9.62, 12.13, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2016-05',
                    22.73, 24.35, 17.53, 16.23, 7.79, 11.36, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2016-06',
                    22.9, 19.85, 18.32, 15.27, 10.69, 12.98, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2016-07',
                    18.39, 24.66, 17.49, 20.63, 8.07, 10.76, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2016-08',
                    25.09, 26.59, 15.36, 15.73, 8.61, 8.61, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2016-09',
                    24.79, 26.5, 14.53, 16.67, 7.69, 9.83, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2016-10',
                    25.46, 20.3, 20.66, 17.34, 6.27, 9.23, 0, 0.74, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2016-11',
                    19.15, 29.31, 15.84, 15.84, 7.57, 8.51, 1.42, 1.18, 0.24, 0.95, 0, 0, 0, 0, 0
                    ], 
                   ['2016-12',
                    24.4, 24.18, 14.51, 15.38, 6.81, 10.11, 1.54, 1.32, 0.44, 1.32, 0, 0, 0, 0, 0
                    ], 
                   ['2017-01',
                    20.96, 26.01, 15.91, 15.91, 7.83, 10.1, 1.01, 0.51, 0.76, 1.01, 0, 0, 0, 0, 0
                    ], 
                   ['2017-02',
                    20.79, 25.53, 16.32, 16.58, 8.42, 8.42, 1.32, 1.05, 0.53, 1.05, 0, 0, 0, 0, 0
                    ], 
                   ['2017-03',
                    23.99, 27.53, 17.93, 15.66, 4.8, 7.07, 1.52, 1.01, 0, 0.51, 0, 0, 0, 0, 0
                    ], 
                   ['2017-04',
                    24.23, 21.17, 19.13, 13.01, 8.42, 9.18, 1.28, 1.28, 1.02, 1.28, 0, 0, 0, 0, 0
                    ], 
                   ['2017-05',
                    22.78, 22.9, 14.77, 14.27, 7.51, 9.39, 2.63, 1.75, 1, 3, 0, 0, 0, 0, 0
                    ], 
                   ['2017-06',
                    23.89, 24.29, 14.62, 15.12, 6.65, 7.06, 2.62, 2.02, 1.01, 2.72, 0, 0, 0, 0, 0
                    ], 
                   ['2017-07',
                    26.11, 22.49, 15.03, 13.37, 7.25, 7.15, 2.28, 2.9, 1.14, 2.28, 0, 0, 0, 0, 0
                    ], 
                   ['2017-08',
                    25.37, 23.37, 15.38, 12.86, 7.12, 6.52, 3.13, 2.17, 1.04, 3.04, 0, 0, 0, 0, 0
                    ], 
                   ['2017-09',
                    26.34, 22.68, 13.33, 13.25, 6.91, 6.26, 2.76, 2.93, 2.03, 3.5, 0, 0, 0, 0, 0
                    ], 
                   ['2017-10',
                    26.03, 20.47, 13.12, 14.15, 8.04, 6.18, 3.23, 2.61, 1.44, 4.74, 0, 0, 0, 0, 0
                    ], 
                   ['2017-11',
                    27.39, 21.26, 13.95, 12.15, 7.03, 6.13, 3.71, 2.81, 1.35, 4.22, 0, 0, 0, 0, 0
                    ], 
                   ['2017-12',
                    26.82, 24.59, 12.63, 12.11, 6.09, 7.13, 3.27, 2.23, 1.93, 3.19, 0, 0, 0, 0, 0
                    ], 
                   ['2018-01',
                    25.5, 21.19, 14.42, 12.34, 6.47, 6.99, 4.39, 2.6, 1.78, 4.31, 0, 0, 0, 0, 0
                    ], 
                   ['2018-02',
                    22.98, 22.55, 13.9, 11.74, 6.7, 7.56, 3.39, 3.53, 2.31, 5.33, 0, 0, 0, 0, 0
                    ], 
                   ['2018-03',
                    24.82, 22.55, 14.76, 14.12, 6.33, 5.68, 2.97, 3.3, 1.73, 3.73, 0, 0, 0, 0, 0
                    ], 
                   ['2018-04',
                    26.47, 20.94, 15.13, 13.15, 7.1, 6.17, 2.97, 2.97, 1.4, 3.72, 0, 0, 0, 0, 0
                    ], 
                   ['2018-05',
                    27.36, 24.69, 14.15, 12.45, 5.9, 6.12, 2.84, 3, 0.98, 2.51, 0, 0, 0, 0, 0
                    ], 
                   ['2018-06',
                    28.33, 22.8, 14.47, 11.3, 7.13, 6.58, 3.01, 2.91, 1.05, 2.41, 0, 0, 0, 0, 0
                    ], 
                   ['2018-07',
                    25.38, 24.24, 13.15, 13.36, 6.89, 6.11, 3, 3.26, 0.93, 3.68, 0, 0, 0, 0, 0
                    ], 
                   ['2018-08',
                    28.38, 22.67, 13.12, 12.01, 6.77, 6.35, 3.04, 3.25, 1.1, 2.41, 0.26, 0.37, 0, 0.1, 0.16
                    ], 
                   ['2018-09',
                    27.59, 22.5, 13.07, 11.74, 6.05, 7.2, 3.02, 3.09, 1.27, 3.02, 0.42, 0.6, 0.12, 0.06, 0.24
                    ], 
                   ['2018-10',
                    29.5, 22.7, 11.81, 10.54, 6.89, 5.79, 3.29, 3.56, 1.49, 2.41, 0.53, 0.57, 0.18, 0.18, 0.57
                    ], 
                   ['2018-11',
                    33.02, 21.54, 12.71, 10.77, 5.39, 5.32, 3.31, 3.45, 1.23, 1.76, 0.18, 0.32, 0.46, 0.07, 0.49
                    ], 
                   ['2018-12',
                    36.9, 22.08, 11.85, 9.59, 5.64, 5.17, 2.38, 2.21, 1.05, 1.98, 0.17, 0.41, 0.23, 0.12, 0.23
                    ], 
                   ['2019-01',
                    32.07, 24.42, 12.51, 11.53, 5.1, 5.39, 2.89, 2.16, 0.98, 1.72, 0.15, 0.39, 0.05, 0.2, 0.44
                    ], 
                   ['2019-02',
                    30.71, 24.74, 12.26, 11.7, 5.68, 5.17, 2.14, 2.98, 0.93, 1.96, 0.47, 0.51, 0.19, 0.28, 0.28
                    ], 
                   ['2019-03',
                    31.19, 23.35, 12.23, 12.23, 5.76, 5.05, 2.98, 2.78, 1.49, 1.57, 0.2, 0.39, 0.16, 0.31, 0.31
                    ], 
                   ['2019-04',
                    29.78, 20.79, 13.69, 11.26, 6.4, 5.93, 2.8, 2.91, 1.47, 2.17, 0.66, 0.74, 0.37, 0.37, 0.66
                    ], 
                   ['2019-05',
                    29.99, 21.51, 12.47, 11.81, 5.68, 5.22, 3.43, 3.05, 1.23, 2.45, 0.74, 0.88, 0.42, 0.46, 0.67
                    ], 
                   ['2019-06',
                    33.24, 22.7, 11.17, 10.35, 5.78, 5.55, 2.93, 2.58, 1.25, 1.68, 0.82, 0.51, 0.47, 0.51, 0.47
                    ], 
                   ['2019-07',
                    32.85, 21.58, 13.26, 10.34, 5.72, 5.68, 2.95, 2.06, 1.22, 1.7, 0.45, 1, 0.42, 0.39, 0.39
                    ], 
                   ['2019-08',
                    31.89, 21.41, 12.39, 11.64, 5.5, 5.66, 3.14, 2.78, 1.42, 1.62, 0.81, 0.78, 0.13, 0.45, 0.39
                    ], 
                   ['2019-09',
                    32.48, 23.38, 12.86, 10.02, 4.99, 5.42, 2.69, 2.76, 1.03, 1.81, 0.35, 0.78, 0.28, 0.46, 0.67
                    ], 
                   ['2019-10',
                    32.27, 23.18, 12.21, 11.22, 6.55, 4.95, 2.41, 2.58, 0.92, 1.7, 0.46, 0.35, 0.28, 0.25, 0.67
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba výší úvěru v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
            },
            
            axes: {
                y: {
                  0: {label: 'Podíl počtu na celku [%]'}
                },
            },
            
            isStacked: true
        };
        var chart_div = document.getElementById('chart-COLUMN-18-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawCOLUMN3Chart18);
    function drawCOLUMN3Chart19() {
        var data = google.visualization.arrayToDataTable([
                ['Datum originace', ' do 12', 'od 12 do 24', 'od 24 do 36', 'od 36 do 48', 'od 48 do 60', 'od 60 do 72', ' od 72'],
                   ['2016-02',
                    9.35, 19.94, 19.63, 16.82, 9.97, 10.59, 13.71
                    ], 
                   ['2016-03',
                    3.16, 10.88, 20, 18.95, 12.28, 10.53, 24.21
                    ], 
                   ['2016-04',
                    2.51, 12.97, 14.64, 19.25, 16.32, 16.74, 17.57
                    ], 
                   ['2016-05',
                    3.57, 12.99, 17.86, 18.18, 13.64, 9.09, 24.68
                    ], 
                   ['2016-06',
                    1.15, 14.89, 12.98, 15.27, 15.27, 14.5, 25.95
                    ], 
                   ['2016-07',
                    3.14, 8.97, 15.7, 16.59, 20.18, 15.25, 20.18
                    ], 
                   ['2016-08',
                    2.25, 10.11, 16.1, 17.98, 17.6, 9.36, 26.59
                    ], 
                   ['2016-09',
                    2.56, 13.68, 9.83, 15.38, 16.24, 16.24, 26.07
                    ], 
                   ['2016-10',
                    2.95, 11.44, 11.44, 18.08, 18.45, 13.28, 24.35
                    ], 
                   ['2016-11',
                    1.18, 10.17, 12.77, 17.73, 13.24, 10.64, 34.28
                    ], 
                   ['2016-12',
                    2.2, 9.89, 11.43, 15.16, 14.95, 8.57, 37.8
                    ], 
                   ['2017-01',
                    3.28, 8.84, 14.9, 14.14, 16.16, 12.88, 29.8
                    ], 
                   ['2017-02',
                    1.32, 9.21, 11.84, 18.95, 16.32, 14.47, 27.89
                    ], 
                   ['2017-03',
                    4.04, 11.62, 10.1, 17.68, 17.93, 11.36, 27.27
                    ], 
                   ['2017-04',
                    2.55, 9.44, 15.05, 14.03, 14.54, 14.03, 30.36
                    ], 
                   ['2017-05',
                    2.5, 9.01, 10.89, 14.27, 13.02, 12.77, 37.55
                    ], 
                   ['2017-06',
                    2.32, 9.48, 11.09, 15.12, 14.82, 11.79, 35.38
                    ], 
                   ['2017-07',
                    1.97, 10.78, 11.19, 15.75, 14.61, 10.78, 34.92
                    ], 
                   ['2017-08',
                    2.26, 11.21, 11.38, 16.16, 11.47, 11.12, 36.4
                    ], 
                   ['2017-09',
                    3.58, 9.51, 10.57, 16.42, 12.68, 12.44, 34.8
                    ], 
                   ['2017-10',
                    2.34, 10.03, 11.74, 13.74, 12.43, 10.71, 39.01
                    ], 
                   ['2017-11',
                    2.98, 9.73, 10.8, 16.48, 11.75, 11.92, 36.33
                    ], 
                   ['2017-12',
                    3.86, 10.62, 10.33, 17.38, 11.89, 11.14, 34.77
                    ], 
                   ['2018-01',
                    3.57, 9, 11.67, 14.35, 12.12, 12.12, 37.17
                    ], 
                   ['2018-02',
                    3.31, 9.37, 9.58, 15.35, 12.25, 11.02, 39.12
                    ], 
                   ['2018-03',
                    2.87, 9.46, 10.6, 13.95, 12.66, 10.98, 39.48
                    ], 
                   ['2018-04',
                    3.14, 9.71, 8.61, 16.06, 13.15, 10.65, 38.69
                    ], 
                   ['2018-05',
                    2.35, 10.43, 10.98, 15.46, 12.78, 10.54, 37.47
                    ], 
                   ['2018-06',
                    2.56, 9.94, 11.4, 15.72, 10.65, 10.65, 39.08
                    ], 
                   ['2018-07',
                    3.11, 9.53, 10.1, 14.71, 12.84, 9.99, 39.72
                    ], 
                   ['2018-08',
                    3.36, 10.76, 9.92, 15.53, 12.17, 10.55, 37.72
                    ], 
                   ['2018-09',
                    3.27, 10.28, 10.53, 13.91, 11.86, 11.55, 38.6
                    ], 
                   ['2018-10',
                    4.26, 9.75, 10.62, 15.5, 11.59, 10.93, 37.36
                    ], 
                   ['2018-11',
                    3.27, 12.85, 10.98, 15.59, 10.17, 9.71, 37.42
                    ], 
                   ['2018-12',
                    5.75, 12.55, 11.1, 15.69, 10.58, 7.79, 36.55
                    ], 
                   ['2019-01',
                    5.64, 10.99, 11.18, 13.88, 11.92, 9.76, 36.64
                    ], 
                   ['2019-02',
                    3.96, 11.09, 10.21, 14.35, 12.3, 9.74, 38.35
                    ], 
                   ['2019-03',
                    3.61, 12.11, 9.48, 14.54, 13.71, 9.17, 37.38
                    ], 
                   ['2019-04',
                    3.86, 11.26, 10.38, 14.61, 11.48, 10.01, 38.39
                    ], 
                   ['2019-05',
                    4.27, 11.11, 10.16, 15, 11.56, 9.81, 38.09
                    ], 
                   ['2019-06',
                    3.79, 12.38, 9.57, 15.27, 9.96, 8.95, 40.08
                    ], 
                   ['2019-07',
                    4.59, 12.2, 10.73, 14.58, 11.01, 8.64, 38.25
                    ], 
                   ['2019-08',
                    3.75, 11.77, 10.16, 13.87, 10.61, 9.99, 39.84
                    ], 
                   ['2019-09',
                    3.75, 11.97, 11.34, 14.42, 10.8, 9.32, 38.4
                    ], 
                   ['2019-10',
                    3.61, 11.22, 10.72, 14.58, 9.84, 9.73, 40.3
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba délek úvěru v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 5. 11. 2019 ze Zonky loanbooku k 11/2019.'
            },
            
            axes: {
                y: {
                  0: {label: 'Podíl počtu na celku [%]'}
                },
            },
            
            isStacked: true
        };
        var chart_div = document.getElementById('chart-COLUMN-19-interactive');
        var chart = new google.charts.Bar(chart_div);

        chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  google.charts.setOnLoadCallback(drawCOLUMN3Chart19);


google.charts.load('current', {'packages':['bar', 'line', 'corechart']});
    function drawBAR3Chart0() {
        var data = google.visualization.arrayToDataTable([
                ['Účel', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Auto-moto (210 z 13738)',
                    0, 0.01, 0.01, 0.1, 0, 0.15, 0.01, 0.25, 0.38, 0.39, 0.23
                    ], 
                   ['Cestování (14 z 974)',
                    0, 0, 0, 0.1, 0, 0.1, 0, 0.41, 0.62, 0.1, 0.1
                    ], 
                   ['Domácnost (333 z 14903)',
                    0, 0.01, 0.03, 0.15, 0, 0.27, 0, 0.5, 0.44, 0.44, 0.4
                    ], 
                   ['Elektronika (19 z 946)',
                    0, 0, 0.11, 0.11, 0, 0.21, 0, 0.53, 0.11, 0.53, 0.42
                    ], 
                   ['Jiné (232 z 10819)',
                    0, 0.02, 0.03, 0.13, 0.01, 0.31, 0, 0.5, 0.43, 0.41, 0.31
                    ], 
                   ['Refinancování půjček (306 z 14375)',
                    0, 0.02, 0.04, 0.13, 0, 0.33, 0.01, 0.38, 0.37, 0.42, 0.42
                    ], 
                   ['Vlastní projekt (77 z 3519)',
                    0, 0, 0.06, 0.11, 0, 0.2, 0, 0.57, 0.48, 0.54, 0.23
                    ], 
                   ['Vzdělání (12 z 738)',
                    0, 0, 0, 0.14, 0, 0.41, 0, 0.27, 0.14, 0.68, 0
                    ], 
                   ['Zdraví (17 z 907)',
                    0, 0, 0.11, 0.11, 0, 0.33, 0, 0.22, 0.33, 0.22, 0.55
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle účelu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                   ['Hlavní město Praha (117 z 7333)',
                    0, 0, 0.04, 0.15, 0, 0.2, 0.01, 0.35, 0.34, 0.34, 0.15
                    ], 
                   ['Jihomoravský kraj (93 z 6203)',
                    0, 0.02, 0.08, 0.1, 0, 0.21, 0, 0.29, 0.21, 0.35, 0.24
                    ], 
                   ['Jihočeský kraj (72 z 2925)',
                    0, 0, 0.07, 0.07, 0, 0.34, 0.03, 0.68, 0.44, 0.41, 0.41
                    ], 
                   ['Karlovarský kraj (44 z 1847)',
                    0, 0, 0, 0, 0, 0.22, 0, 0.7, 0.54, 0.6, 0.32
                    ], 
                   ['Kraj Vysočina (44 z 2265)',
                    0, 0, 0, 0.18, 0, 0.26, 0, 0.31, 0.53, 0.22, 0.44
                    ], 
                   ['Královéhradecký kraj (59 z 2779)',
                    0, 0, 0, 0.11, 0, 0.32, 0, 0.58, 0.29, 0.47, 0.36
                    ], 
                   ['Liberecký kraj (66 z 2980)',
                    0, 0, 0, 0.03, 0, 0.37, 0, 0.4, 0.57, 0.5, 0.34
                    ], 
                   ['Moravskoslezský kraj (179 z 7704)',
                    0, 0.01, 0.05, 0.13, 0, 0.34, 0, 0.49, 0.45, 0.42, 0.43
                    ], 
                   ['Olomoucký kraj (59 z 3521)',
                    0, 0, 0, 0.17, 0, 0.09, 0, 0.23, 0.31, 0.54, 0.34
                    ], 
                   ['Pardubický kraj (56 z 2771)',
                    0, 0.04, 0, 0.14, 0, 0.22, 0, 0.51, 0.4, 0.4, 0.32
                    ], 
                   ['Plzeňský kraj (74 z 3095)',
                    0, 0.06, 0, 0.13, 0, 0.23, 0, 0.48, 0.58, 0.58, 0.32
                    ], 
                   ['Středočeský kraj (161 z 8995)',
                    0, 0.01, 0.01, 0.11, 0, 0.2, 0, 0.41, 0.34, 0.33, 0.37
                    ], 
                   ['Zlínský kraj (54 z 2903)',
                    0, 0.03, 0.1, 0.24, 0, 0.31, 0, 0.21, 0.38, 0.24, 0.34
                    ], 
                   ['Ústecký kraj (142 z 5598)',
                    0, 0, 0.02, 0.18, 0.02, 0.38, 0, 0.39, 0.52, 0.64, 0.39
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle kraje žadatele',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                   ['Důchod (94 z 3075)',
                    0, 0.07, 0.1, 0.23, 0, 0.52, 0, 0.65, 0.36, 0.72, 0.42
                    ], 
                   ['Jiné (10 z 448)',
                    0, 0, 0, 0.22, 0, 0, 0, 0.45, 0.45, 0.45, 0.67
                    ], 
                   ['OSVČ (116 z 6939)',
                    0, 0, 0.06, 0.12, 0.01, 0.19, 0.01, 0.46, 0.33, 0.35, 0.14
                    ], 
                   ['Podnikatel (17 z 1016)',
                    0, 0, 0, 0.3, 0, 0.1, 0, 0.3, 0.3, 0.69, 0
                    ], 
                   ['Rodičovská dovolená (44 z 1631)',
                    0, 0, 0, 0.12, 0, 0.18, 0, 0.25, 0.74, 0.49, 0.92
                    ], 
                   ['Student (6 z 156)',
                    0, 0, 0, 0, 0, 0, 0, 0.64, 0.64, 1.28, 1.28
                    ], 
                   ['Svobodné povolání (9 z 174)',
                    0, 0, 0, 0, 0, 0, 0, 1.15, 2.3, 0.57, 1.15
                    ], 
                   ['Zaměstnanec (922 z 47471)',
                    0, 0.01, 0.03, 0.12, 0, 0.26, 0, 0.4, 0.39, 0.4, 0.33
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle zdroje příjmu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                   [' do 50 (442 z 17537)',
                    0, 0, 0.02, 0.06, 0, 0.22, 0.01, 0.4, 0.44, 0.67, 0.7
                    ], 
                   ['od 50 do 100 (346 z 13838)',
                    0, 0, 0.01, 0.09, 0, 0.3, 0, 0.54, 0.6, 0.51, 0.43
                    ], 
                   ['od 100 do 150 (177 z 8213)',
                    0, 0.04, 0.01, 0.19, 0, 0.23, 0, 0.56, 0.54, 0.45, 0.13
                    ], 
                   ['od 150 do 200 (119 z 7425)',
                    0, 0, 0.03, 0.13, 0, 0.34, 0, 0.43, 0.26, 0.31, 0.11
                    ], 
                   ['od 200 do 250 (44 z 3839)',
                    0, 0.03, 0.1, 0.21, 0.03, 0.31, 0, 0.23, 0.18, 0.05, 0
                    ], 
                   ['od 250 do 300 (43 z 3802)',
                    0, 0.03, 0.03, 0.32, 0, 0.18, 0, 0.29, 0.18, 0.08, 0.03
                    ], 
                   ['od 300 do 350 (14 z 1724)',
                    0, 0.06, 0, 0.06, 0, 0.23, 0.06, 0.12, 0.23, 0.06, 0
                    ], 
                   ['od 350 do 400 (15 z 1610)',
                    0, 0.06, 0.12, 0.12, 0, 0.25, 0, 0.19, 0.12, 0.06, 0
                    ], 
                   ['od 400 do 450 (8 z 743)',
                    0, 0, 0.27, 0.13, 0, 0.54, 0, 0.13, 0, 0, 0
                    ], 
                   ['od 450 do 500 (12 z 1471)',
                    0, 0, 0.07, 0.34, 0, 0.14, 0, 0.2, 0.07, 0, 0
                    ], 
                   ['od 500 do 550 (0 z 159)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 550 do 600 (0 z 210)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 600 do 650 (0 z 91)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 650 do 700 (0 z 104)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   [' od 700 (0 z 153)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle výše úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                   [' do 12 (48 z 2159)',
                    0, 0, 0, 0, 0, 0.09, 0, 0.09, 0.32, 0.56, 1.16
                    ], 
                   ['od 12 do 24 (139 z 6671)',
                    0, 0, 0.01, 0.04, 0, 0.15, 0, 0.42, 0.48, 0.66, 0.31
                    ], 
                   ['od 24 do 36 (162 z 6592)',
                    0, 0, 0, 0.12, 0, 0.15, 0, 0.55, 0.33, 0.53, 0.77
                    ], 
                   ['od 36 do 48 (177 z 9228)',
                    0, 0, 0.01, 0.11, 0, 0.33, 0.01, 0.39, 0.47, 0.42, 0.18
                    ], 
                   ['od 48 do 60 (140 z 7356)',
                    0, 0.03, 0.07, 0.14, 0, 0.15, 0.01, 0.31, 0.38, 0.52, 0.3
                    ], 
                   ['od 60 do 72 (120 z 6330)',
                    0, 0.02, 0.03, 0.24, 0, 0.25, 0, 0.39, 0.3, 0.25, 0.41
                    ], 
                   [' od 72 (434 z 22583)',
                    0, 0.02, 0.04, 0.14, 0, 0.35, 0, 0.45, 0.41, 0.32, 0.18
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle délky úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                   ['Ne (104 z 11744)',
                    0, 0, 0.03, 0.03, 0.01, 0.09, 0.01, 0.2, 0.19, 0.14, 0.19
                    ], 
                   ['Ano (1116 z 49175)',
                    0, 0.01, 0.03, 0.15, 0, 0.3, 0, 0.46, 0.45, 0.49, 0.37
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle příběhu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                   ['Ne (168 z 27073)',
                    0, 0, 0.03, 0.04, 0, 0.07, 0, 0.13, 0.1, 0.13, 0.13
                    ], 
                   ['Ano (138 z 12976)',
                    0, 0, 0, 0.06, 0.01, 0.08, 0.02, 0.26, 0.23, 0.2, 0.21
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle pojištění, od jeho zavedení',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                   ['Ne (1210 z 58463)',
                    0, 0.01, 0.03, 0.13, 0, 0.27, 0, 0.42, 0.42, 0.43, 0.35
                    ], 
                   ['Ano (10 z 2456)',
                    0, 0, 0, 0, 0, 0.04, 0, 0.24, 0, 0.08, 0.04
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle statusu investora',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                   ['0 (1110 z 47976)',
                    0, 0.01, 0.03, 0.14, 0, 0.29, 0, 0.47, 0.46, 0.5, 0.41
                    ], 
                   ['1 (98 z 9866)',
                    0, 0, 0.02, 0.11, 0, 0.19, 0, 0.23, 0.23, 0.15, 0.05
                    ], 
                   ['2 (12 z 2263)',
                    0, 0, 0.04, 0.09, 0, 0, 0, 0.22, 0.09, 0.09, 0
                    ], 
                   ['3 (0 z 575)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['4 (0 z 161)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['5 (0 z 52)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['6 (0 z 16)',
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
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                    0, 0, 0, 3.23, 0, 0, 0, 3.45, 9.52, 25, 28.57
                    ], 
                   ['2016-05',
                    0, 0, 0, 1.22, 0, 1.92, 0, 7.69, 2.63, 6.45, 10.71
                    ], 
                   ['2016-06',
                    0, 0, 3.85, 0, 0, 2.33, 0, 7.69, 0, 5.71, 12.5
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
                    0, 0, 0.89, 2.67, 0, 6.62, 0, 3.85, 9.09, 10.94, 17.39
                    ], 
                   ['2017-06',
                    0, 1.3, 0, 1.43, 0, 2.87, 0, 7.95, 17.05, 16.13, 23.53
                    ], 
                   ['2017-07',
                    0, 1.54, 0, 2.15, 0, 6.9, 0, 9.29, 13.51, 13.21, 9.68
                    ], 
                   ['2017-08',
                    0, 0, 1.24, 2.08, 0, 4.55, 0, 6.29, 10, 20.9, 13.33
                    ], 
                   ['2017-09',
                    0, 1.47, 0.57, 1.41, 0, 3.56, 0, 6.63, 6.78, 10.34, 24.32
                    ], 
                   ['2017-10',
                    0, 0, 1.06, 0, 0, 3.39, 0, 8.33, 8.57, 14.55, 23.33
                    ], 
                   ['2017-11',
                    0, 1.41, 0, 0.63, 0, 4.13, 0, 3.6, 7.19, 12.38, 16.67
                    ], 
                   ['2017-12',
                    0, 0.98, 0, 0.88, 0, 4.6, 0, 6.05, 11.03, 13.79, 15.79
                    ], 
                   ['2018-01',
                    0, 1.08, 0.56, 1.12, 0, 2.05, 0, 6.02, 8.82, 10.67, 14.89
                    ], 
                   ['2018-02',
                    0, 0, 0.52, 0.85, 0, 2.66, 0, 4.61, 7.64, 9.41, 15.22
                    ], 
                   ['2018-03',
                    0, 0, 0.89, 1.14, 0, 4.72, 0, 4.85, 8.18, 11.51, 13.51
                    ], 
                   ['2018-04',
                    0, 0, 0.44, 0.72, 0, 2.27, 0, 4.62, 8.04, 13.86, 14.08
                    ], 
                   ['2018-05',
                    0, 0, 0.81, 0.65, 0, 2.9, 0, 4.63, 6.93, 9.77, 11.67
                    ], 
                   ['2018-06',
                    0, 0, 0.32, 0.42, 0, 1.43, 0, 4.46, 4.41, 5.74, 9.84
                    ], 
                   ['2018-07',
                    0, 0, 0, 1.47, 0, 1.32, 0, 4.31, 3.85, 4.59, 7.94
                    ], 
                   ['2018-08',
                    0, 0, 0.29, 0.45, 0, 0.99, 0, 1.72, 1.18, 3.76, 4.04
                    ], 
                   ['2018-09',
                    0, 0, 0, 0, 0, 0.38, 0, 1.09, 2.08, 7.29, 12.5
                    ], 
                   ['2018-10',
                    0, 0, 0, 0.52, 0, 0.52, 0, 2.61, 1.14, 2.96, 9.2
                    ], 
                   ['2018-11',
                    0, 0, 0.43, 0, 0, 0.18, 0, 0.98, 2.75, 2.52, 5.47
                    ], 
                   ['2018-12',
                    0, 0, 0.47, 0.87, 0, 0.26, 0, 1.48, 1.13, 2.56, 3.28
                    ], 
                   ['2019-01',
                    0, 0, 0, 0, 0, 0.68, 0, 0.77, 2.58, 1.56, 5.77
                    ], 
                   ['2019-02',
                    0, 0, 0, 0, 0, 0, 0, 0.73, 2.8, 1.36, 2.5
                    ], 
                   ['2019-03',
                    0, 0, 0, 0, 0, 0, 0, 0.23, 0, 2.2, 1.45
                    ], 
                   ['2019-04',
                    0, 0, 0, 0, 0.29, 0, 0.66, 0.67, 0.57, 0.94, 0
                    ], 
                   ['2019-05',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 1.89, 0
                    ], 
                   ['2019-06',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-07',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-08',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0.74, 0
                    ], 
                   ['2019-09',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění podle data originace a ratingu [%]',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                    0, 0.18, 0.22, 0.6, 0.04, 1.51, 0.09, 2.85, 4.52, 6.96, 9.08
                    ], 
                   ['1',
                    0, 0.18, 0.22, 0.6, 0.04, 1.53, 0.1, 2.88, 4.57, 7.03, 9.15
                    ], 
                   ['2',
                    0, 0.2, 0.24, 0.64, 0.05, 1.65, 0.12, 3.14, 4.95, 7.54, 9.83
                    ], 
                   ['3',
                    0, 0.21, 0.25, 0.68, 0.07, 1.79, 0.17, 3.44, 5.31, 8.14, 10.71
                    ], 
                   ['4',
                    0, 0.22, 0.27, 0.73, 0.1, 1.95, 0.24, 3.76, 5.74, 8.71, 11.58
                    ], 
                   ['5',
                    0, 0.24, 0.29, 0.78, 0.16, 2.1, 0.38, 4.08, 6.16, 9.26, 12.51
                    ], 
                   ['6',
                    0, 0.25, 0.32, 0.83, 0, 2.28, 0, 4.46, 6.59, 9.89, 13.65
                    ], 
                   ['7',
                    0, 0.27, 0.35, 0.9, 0, 2.5, 0, 4.85, 7.3, 10.56, 14.71
                    ], 
                   ['8',
                    0, 0.29, 0.38, 0.97, 0, 2.76, 0, 5.31, 7.92, 11.76, 16.14
                    ], 
                   ['9',
                    0, 0.3, 0.41, 1.04, 0, 2.97, 0, 5.81, 8.59, 12.82, 17.96
                    ], 
                   ['10',
                    0, 0.32, 0.42, 1.08, 0, 3.24, 0, 6.33, 9.28, 13.89, 19.5
                    ], 
                   ['11',
                    0, 0.29, 0.4, 1.15, 0, 3.51, 0, 6.88, 9.87, 14.84, 20.44
                    ], 
                   ['12',
                    0, 0.31, 0.45, 1.18, 0, 3.94, 0, 7.66, 10.9, 16.08, 22.21
                    ], 
                   ['13',
                    0, 0.35, 0.51, 1.31, 0, 4.3, 0, 8.34, 11.79, 17.05, 23.2
                    ], 
                   ['14',
                    0, 0.39, 0.52, 1.38, 0, 4.64, 0, 8.93, 12.77, 18.17, 25
                    ], 
                   ['15',
                    0, 0.44, 0.59, 1.39, 0, 4.97, 0, 9.3, 13.75, 19.43, 27.46
                    ], 
                   ['16',
                    0, 0.54, 0.62, 1.47, 0, 5.28, 0, 9.67, 14.31, 20.86, 28.9
                    ], 
                   ['17',
                    0, 0.6, 0.61, 1.56, 0, 5.52, 0, 10.37, 14.95, 21.8, 30.48
                    ], 
                   ['18',
                    0, 0.67, 0.62, 1.66, 0, 5.76, 0, 10.87, 15.76, 22.74, 32.38
                    ], 
                   ['19',
                    0, 0.77, 0.57, 1.68, 0, 5.62, 0, 11.25, 16.25, 22.62, 34.32
                    ], 
                   ['20',
                    0, 0.93, 0.57, 1.78, 0, 6.02, 0, 11.8, 17.27, 24.39, 36.91
                    ], 
                   ['21',
                    0, 0.87, 0.56, 1.8, 0, 6.56, 0, 11.92, 17.73, 25.4, 37.45
                    ], 
                   ['22',
                    0, 0.83, 0.63, 1.9, 0, 6.53, 0, 12.22, 18.23, 25.63, 39.11
                    ], 
                   ['23',
                    0, 0.5, 0.72, 2.07, 0, 6.51, 0, 12.95, 18.71, 26.15, 39.46
                    ], 
                   ['24',
                    0, 0.62, 0.62, 2.49, 0, 6.78, 0, 12.82, 20.72, 27.06, 41.12
                    ], 
                   ['25',
                    0, 0.39, 0.58, 2.63, 0, 7.29, 0, 13.48, 22.22, 28.31, 41.48
                    ], 
                   ['26',
                    0, 0.45, 0.36, 2.45, 0, 7.02, 0, 13.81, 22.9, 28.72, 43.67
                    ], 
                   ['27',
                    0, 0, 0.43, 2.28, 0, 5.73, 0, 14.01, 22.83, 28.97, 45.21
                    ], 
                   ['28',
                    0, 0, 0.54, 2.18, 0, 5.51, 0, 13.27, 20.36, 28.18, 44.96
                    ], 
                   ['29',
                    0, 0, 0.34, 1.67, 0, 4.33, 0, 14.18, 20.53, 28.8, 46.55
                    ], 
                   ['30',
                    0, 0, 0, 1.88, 0, 4.78, 0, 14.49, 17.07, 32.73, 46.3
                    ], 
                   ['31',
                    0, 0, 0, 1.9, 0, 4.82, 0, 15.34, 19.15, 33.33, 46.81
                    ], 
                   ['32',
                    0, 0, 0, 2.17, 0, 5.79, 0, 16.77, 19.23, 34.56, 47.06
                    ], 
                   ['33',
                    0, 0, 0, 2.09, 0, 6.06, 0, 17.81, 19.47, 33.61, 48.72
                    ], 
                   ['34',
                    0, 0, 0, 2.52, 0, 6.34, 0, 15.83, 16.09, 29.7, 48.44
                    ], 
                   ['35',
                    0, 0, 0, 2.55, 0, 6.14, 0, 15.31, 17.57, 28.92, 47.17
                    ], 
                   ['36',
                    0, 0, 0, 2.44, 0, 6.52, 0, 15.29, 17.74, 29.58, 48.94
                    ], 
                   ['37',
                    0, 0, 0, 2.88, 0, 6.41, 0, 14.93, 20.75, 31.75, 51.28
                    ], 
                   ['38',
                    0, 0, 0, 1.89, 0, 7.46, 0, 15.09, 19.51, 28.07, 51.43
                    ], 
                   ['39',
                    0, 0, 0, 2.44, 0, 5.88, 0, 16.67, 19.35, 31.91, 54.17
                    ], 
                   ['40',
                    0, 0, 0, 3.17, 0, 5.13, 0, 16.67, 27.27, 36.84, 52.38
                    ], 
                   ['41',
                    0, 0, 0, 1.96, 0, 7.14, 0, 15.79, 35.71, 37.5, 66.67
                    ], 
                   ['42',
                    0, 0, 0, 0, 0, 13.33, 0, 15.38, 11.11, 35, 57.14
                    ], 
                   ['43',
                    0, 0, 0, 0, 0, 7.14, 0, 11.11, 0, 27.27, 0
                    ], 
                   ['44',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění v průběhu života půjčky, podle ratingu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                    4.81, 4.57, 2.21, 0.21
                    ], 
                   ['1',
                    4.88, 4.59, 2.23, 0.21
                    ], 
                   ['2',
                    4.99, 4.73, 2.3, 0.25
                    ], 
                   ['3',
                    5.1, 4.85, 2.37, 0.3
                    ], 
                   ['4',
                    5.23, 4.98, 2.45, 0.38
                    ], 
                   ['5',
                    5.34, 5.13, 2.53, 0.45
                    ], 
                   ['6',
                    5.51, 5.25, 2.63, 0.53
                    ], 
                   ['7',
                    5.7, 5.41, 2.75, 0.66
                    ], 
                   ['8',
                    5.84, 5.54, 2.86, 0.63
                    ], 
                   ['9',
                    6.04, 5.71, 2.99, 0
                    ], 
                   ['10',
                    6.22, 5.86, 3.02, 0
                    ], 
                   ['11',
                    6.45, 5.99, 3.2, 0
                    ], 
                   ['12',
                    6.69, 6.17, 3.59, 0
                    ], 
                   ['13',
                    6.93, 6.38, 4, 0
                    ], 
                   ['14',
                    7.24, 6.56, 4.41, 0
                    ], 
                   ['15',
                    7.53, 6.73, 4.83, 0
                    ], 
                   ['16',
                    7.72, 6.91, 5.27, 0
                    ], 
                   ['17',
                    8.01, 7.13, 5.49, 0
                    ], 
                   ['18',
                    8.31, 7.43, 5.45, 0
                    ], 
                   ['19',
                    8.56, 7.66, 4.37, 0
                    ], 
                   ['20',
                    8.83, 7.96, 4.1, 0
                    ], 
                   ['21',
                    9.03, 8.26, 0, 0
                    ], 
                   ['22',
                    9.44, 7.74, 0, 0
                    ], 
                   ['23',
                    9.8, 7.95, 0, 0
                    ], 
                   ['24',
                    10.16, 8.47, 0, 0
                    ], 
                   ['25',
                    10.54, 9.02, 0, 0
                    ], 
                   ['26',
                    10.79, 9.12, 0, 0
                    ], 
                   ['27',
                    10.95, 9.18, 0, 0
                    ], 
                   ['28',
                    11.26, 8.4, 0, 0
                    ], 
                   ['29',
                    11.95, 8.1, 0, 0
                    ], 
                   ['30',
                    12.43, 8.23, 0, 0
                    ], 
                   ['31',
                    12.92, 7.93, 0, 0
                    ], 
                   ['32',
                    13.37, 8.04, 0, 0
                    ], 
                   ['33',
                    13.95, 0, 0, 0
                    ], 
                   ['34',
                    11.9, 0, 0, 0
                    ], 
                   ['35',
                    11.74, 0, 0, 0
                    ], 
                   ['36',
                    12.26, 0, 0, 0
                    ], 
                   ['37',
                    13.33, 0, 0, 0
                    ], 
                   ['38',
                    13.26, 0, 0, 0
                    ], 
                   ['39',
                    13.98, 0, 0, 0
                    ], 
                   ['40',
                    16.06, 0, 0, 0
                    ], 
                   ['41',
                    17.22, 0, 0, 0
                    ], 
                   ['42',
                    14.68, 0, 0, 0
                    ], 
                   ['43',
                    8.06, 0, 0, 0
                    ], 
                   ['44',
                    0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění v průběhu života půjčky, podle roku originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                    9.48158258028822, 9.915233644859812, 0, 2.18, 0, 0.9299999999999999
                    ], 
                   ['2016-03',
                    9.507338250083809, 10.034270833333334, 0.1340931947703654, 3.1199999999999997, 0, 0.52
                    ], 
                   ['2016-04',
                    9.397446355112478, 9.949309494451295, 0.2316273209057555, 4.19, 0, 0.49
                    ], 
                   ['2016-05',
                    9.31118460232555, 9.977387387387388, 0.1684204853204705, 4.05, 0, 0.63
                    ], 
                   ['2016-06',
                    9.207182025562384, 9.972300884955752, 0.1364345823464565, 3.9800000000000004, 0, 0.66
                    ], 
                   ['2016-07',
                    9.127489940673367, 9.910331421287443, 0.1169689143413247, 4.2700000000000005, 0, 0.7000000000000001
                    ], 
                   ['2016-08',
                    9.110183915529062, 9.954835164835165, 0.1017231908530507, 4.34, 0, 1.04
                    ], 
                   ['2016-09',
                    9.032353283960816, 9.866494023904382, 0.0922046500649121, 4.38, 0, 1.0999999999999999
                    ], 
                   ['2016-10',
                    9.019944356462485, 9.880848214285713, 0.0826552844829581, 4.38, 0, 1.16
                    ], 
                   ['2016-11',
                    9.011734147670893, 9.925717002662608, 0.0698802252938463, 4.5600000000000005, 0, 1.1400000000000001
                    ], 
                   ['2016-12',
                    9.009857794498451, 9.986398166339228, 0.0598306553132015, 5.17, 0, 1.08
                    ], 
                   ['2017-01',
                    8.927109445982492, 9.953991769547324, 0.0534456404391094, 5.140000000000001, 0, 1
                    ], 
                   ['2017-02',
                    8.807850683572859, 9.8537339055794, 0.0486182688006845, 4.99, 0, 0.97
                    ], 
                   ['2017-03',
                    8.772715891923353, 9.841824457593688, 0.0485019194185518, 4.9799999999999995, 0, 1.01
                    ], 
                   ['2017-04',
                    8.659677213284112, 9.738507119889757, 0.0449169784514955, 5.26, 0, 1.01
                    ], 
                   ['2017-05',
                    8.433559196771801, 9.553833992094862, 0.037935840658229, 5.28, 0, 1.05
                    ], 
                   ['2017-06',
                    8.266391498913281, 9.391465386558869, 0.0575391740933724, 5.42, 0, 1.04
                    ], 
                   ['2017-07',
                    8.129859930687351, 9.247765346680406, 0.0747792722171796, 5.510000000000001, 0, 1.1199999999999999
                    ], 
                   ['2017-08',
                    8.031712420530425, 9.125138587303615, 0.0821792698571769, 5.52, 0, 1.34
                    ], 
                   ['2017-09',
                    7.927677087770594, 9.045549314760729, 0.0807887455479216, 5.4399999999999995, 0, 1.46
                    ], 
                   ['2017-10',
                    7.865682451548923, 8.982567964013299, 0.0762330530608565, 5.36, 0, 1.6
                    ], 
                   ['2017-11',
                    7.766697189031557, 8.89723444001019, 0.0772369355576051, 5.17, 0, 1.73
                    ], 
                   ['2017-12',
                    7.730692240551537, 8.871466521671586, 0.0795846202981354, 5.21, 0, 1.83
                    ], 
                   ['2018-01',
                    7.7297335420218465, 8.850983981693364, 0.0726988670380486, 5.16, 0, 1.96
                    ], 
                   ['2018-02',
                    7.727861656676985, 8.835431706994578, 0.0664097953145936, 5.08, 0, 2.03
                    ], 
                   ['2018-03',
                    7.74065798435242, 8.846852062503741, 0.0616493370054157, 5.07, 0, 2.1399999999999997
                    ], 
                   ['2018-04',
                    7.7260361404793745, 8.8419092418373, 0.0568825748628859, 5.0200000000000005, 1.6400000000000001, 2.2399999999999998
                    ], 
                   ['2018-05',
                    7.722359235000748, 8.831647034722934, 0.0528101363272713, 4.9399999999999995, 4.24, 2.45
                    ], 
                   ['2018-06',
                    7.692501598828086, 8.802888382904037, 0.0489437169008403, 4.77, 6.29, 2.73
                    ], 
                   ['2018-07',
                    7.6056631510720125, 8.71870781527531, 0.0462349395844131, 4.61, 8.25, 2.94
                    ], 
                   ['2018-08',
                    7.57225061664269, 8.708000583892897, 0.0433757481976629, 4.41, 9.77, 3.19
                    ], 
                   ['2018-09',
                    7.532511387533076, 8.687392032539778, 0.0412563662841076, 4.3, 10.92, 3.5999999999999996
                    ], 
                   ['2018-10',
                    7.480300610473837, 8.65316829468347, 0.039638028893593, 4.12, 12.25, 5.16
                    ], 
                   ['2018-11',
                    7.469617036269997, 8.662756842797329, 0.037342731590538, 3.8899999999999997, 13.919999999999998, 7.88
                    ], 
                   ['2018-12',
                    7.4725531788960415, 8.678989689341188, 0.0362312612025863, 3.82, 14.92, 9.55
                    ], 
                   ['2019-01',
                    7.483066654953751, 8.704221910291585, 0.0346599597736299, 3.6799999999999997, 16.07, 11.32
                    ], 
                   ['2019-02',
                    7.508923692985673, 8.740593824228029, 0.0330753916305155, 3.53, 17.34, 12.93
                    ], 
                   ['2019-03',
                    7.527800831451616, 8.774402340807695, 0.0314643152146121, 3.36, 18.77, 14.649999999999999
                    ], 
                   ['2019-04',
                    7.488827475399956, 8.72187510298237, 0.0296514802410728, 3.19, 20.02, 16.38
                    ], 
                   ['2019-05',
                    7.456122043199563, 8.680631921824103, 0.0280175724868448, 3.02, 21.62, 18.04
                    ], 
                   ['2019-06',
                    7.429856604678536, 8.64104872296653, 0.0269424494715801, 2.8899999999999997, 22.61, 19.259999999999998
                    ], 
                   ['2019-07',
                    7.403376785244365, 8.598541264507519, 0.0255632591635456, 2.73, 23.580000000000002, 20.51
                    ], 
                   ['2019-08',
                    7.3786178460965886, 8.56654559945349, 0.0243580091913814, 2.6, 24.51, 21.57
                    ], 
                   ['2019-09',
                    7.368042483669791, 8.551435616438356, 0.0234379651960998, 2.5, 25.040000000000003, 22.439999999999998
                    ]
        ]);
        var options = {
            chart: {
                title: 'Souhrnné statistiky platformy',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                    9.48158258028822, 9.915233644859812, 0, 2.18, 0, 0.9299999999999999
                    ], 
                   ['2016-03',
                    9.585444120100084, 10.137368421052631, 0.2606338615512927, 3.8600000000000003, 0, 0
                    ], 
                   ['2016-04',
                    9.163282829789138, 9.780794979079499, 0.4473739151182559, 6.69, 0, 0.42
                    ], 
                   ['2016-05',
                    9.082614146116729, 10.0662987012987, 0, 3.5700000000000003, 0, 0.97
                    ], 
                   ['2016-06',
                    8.966992604765817, 10.079694656488549, 0, 3.44, 0, 0.76
                    ], 
                   ['2016-07',
                    8.71180547954026, 9.599865470852018, 0, 5.83, 0, 0.8999999999999999
                    ], 
                   ['2016-08',
                    8.984324748836796, 10.136067415730336, 0, 4.49, 0, 3
                    ], 
                   ['2016-09',
                    8.465082508250827, 9.323333333333332, 0, 3.85, 0, 1.28
                    ], 
                   ['2016-10',
                    8.949773202873141, 10.004760147601477, 0, 3.6900000000000004, 0, 1.8499999999999999
                    ], 
                   ['2016-11',
                    8.955806209612794, 10.109385342789597, 0, 5.2, 0, 0.95
                    ], 
                   ['2016-12',
                    9.057868008424995, 10.376813186813187, 0, 8.35, 0, 0.66
                    ], 
                   ['2017-01',
                    8.495928138293058, 9.881414141414142, 0, 4.29, 0, 0.51
                    ], 
                   ['2017-02',
                    7.8471228266965785, 9.053157894736842, 0, 2.8899999999999997, 0, 0.79
                    ], 
                   ['2017-03',
                    8.433172810146651, 9.7639898989899, 0.0396353547364249, 4.04, 0, 1.52
                    ], 
                   ['2017-04',
                    7.745830772012294, 8.914744897959183, 0, 6.890000000000001, 0, 1.02
                    ], 
                   ['2017-05',
                    7.417096114519428, 8.667722152690864, 0, 4.760000000000001, 0, 1.25
                    ], 
                   ['2017-06',
                    7.545334066538356, 8.64524193548387, 0.1477866373384658, 5.54, 0, 1.11
                    ], 
                   ['2017-07',
                    7.359513154132113, 8.423678756476683, 0.1715756362596511, 5.390000000000001, 0, 1.4500000000000002
                    ], 
                   ['2017-08',
                    7.555856039762137, 8.548210251954822, 0.1183396940918908, 5.04, 0, 2.69
                    ], 
                   ['2017-09',
                    7.41962586580376, 8.682682926829267, 0.0641831358810473, 4.2299999999999995, 0, 2.1999999999999997
                    ], 
                   ['2017-10',
                    7.5813903381431595, 8.70256868131868, 0.0458425200288153, 4.46, 0, 2.6100000000000003
                    ], 
                   ['2017-11',
                    7.358334806304316, 8.565084364454442, 0.0754897628516718, 3.49, 0, 2.42
                    ], 
                   ['2017-12',
                    7.549312861817267, 8.765260029717682, 0.0880946388119809, 4.61, 0, 2.6
                    ], 
                   ['2018-01',
                    7.827964382592286, 8.753197026022304, 0, 3.7900000000000005, 0, 3.2
                    ], 
                   ['2018-02',
                    7.804064544265155, 8.804121037463977, 0, 3.39, 0, 2.74
                    ], 
                   ['2018-03',
                    7.946755418832431, 9.061930773391023, 0.0159117428662353, 4.33, 0, 3.19
                    ], 
                   ['2018-04',
                    7.750774111184185, 8.91350203606748, 0, 3.66, 17.22, 3.32
                    ], 
                   ['2018-05',
                    7.7679907826962555, 8.875035499726925, 0, 3.3300000000000005, 29.160000000000004, 4.53
                    ], 
                   ['2018-06',
                    7.556124475794424, 8.690652938221998, 0, 2.21, 25.259999999999998, 5.42
                    ], 
                   ['2018-07',
                    6.855983288827634, 8.022366649404454, 0.0068912050994918, 1.8599999999999999, 28.07, 5.33
                    ], 
                   ['2018-08',
                    7.263500630472232, 8.683336831059812, 0, 1.0999999999999999, 26.229999999999997, 6.09
                    ], 
                   ['2018-09',
                    7.109913487698421, 8.50935874168179, 0, 1.4500000000000002, 26.19, 9.01
                    ], 
                   ['2018-10',
                    7.05173854601613, 8.41142230026339, 0.0142996053308929, 1.1900000000000002, 25.990000000000002, 22.21
                    ], 
                   ['2018-11',
                    7.523809724320709, 8.942129531854981, 0.0049538057612761, 0.9199999999999999, 28.58, 32.73
                    ], 
                   ['2018-12',
                    7.860266636791396, 9.22445671121441, 0, 0.9900000000000001, 31.14, 37.01
                    ], 
                   ['2019-01',
                    7.842695897037852, 9.272981853849926, 0, 0.9299999999999999, 32.37, 36
                    ], 
                   ['2019-02',
                    8.071726483309671, 9.411714818266542, 0, 0.65, 35.410000000000004, 35.410000000000004
                    ], 
                   ['2019-03',
                    7.990097559615894, 9.383808777429467, 0, 0.27, 36.13, 35.97
                    ], 
                   ['2019-04',
                    7.1895177961853385, 8.315542878174456, 0, 0.26, 35.22, 37.14
                    ], 
                   ['2019-05',
                    7.157471910748028, 8.287827610371409, 0, 0.07, 40.71, 38.26
                    ], 
                   ['2019-06',
                    7.247352543290043, 8.320078125, 0, 0, 36.76, 36.17
                    ], 
                   ['2019-07',
                    7.345318743626808, 8.389325626204238, 0, 0, 35.160000000000004, 35.839999999999996
                    ], 
                   ['2019-08',
                    7.245446437408584, 8.395562742561449, 0, 0.03, 35.61, 35.410000000000004
                    ], 
                   ['2019-09',
                    7.445739826069648, 8.61291888062345, 0, 0, 32.800000000000004, 35.67
                    ]
        ]);
        var options = {
            chart: {
                title: 'Souhrnné statistiky podle data originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba úrokových měr v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba účelu ǘvěrů v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba krajů v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba zdrojů příjmu v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 3. 10. 2019 ze Zonky loanbooku k 10/2019.'
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

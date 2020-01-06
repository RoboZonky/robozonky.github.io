
google.charts.load('current', {'packages':['bar', 'line', 'corechart']});
    function drawBAR3Chart0() {
        var data = google.visualization.arrayToDataTable([
                ['Účel', '2.99 % p.a.', '3.99 % p.a.', '4.99 % p.a.', '5.99 % p.a.', '6.99 % p.a.', '8.49 % p.a.', '9.49 % p.a.', '10.99 % p.a.', '13.49 % p.a.', '15.49 % p.a.', '19.99 % p.a.'],
                   ['Auto-moto (233 z 14988)',
                    0, 0.0067, 0.0133, 0.1068, 0, 0.1535, 0.0067, 0.2469, 0.387, 0.4137, 0.2202
                    ], 
                   ['Cestování (14 z 1039)',
                    0, 0, 0, 0.0962, 0, 0.0962, 0, 0.385, 0.5775, 0.0962, 0.0962
                    ], 
                   ['Domácnost (382 z 16658)',
                    0, 0.006, 0.03, 0.1441, 0.006, 0.2942, 0, 0.5163, 0.4682, 0.4442, 0.3842
                    ], 
                   ['Elektronika (19 z 1079)',
                    0, 0, 0.0927, 0.0927, 0, 0.1854, 0, 0.4634, 0.0927, 0.4634, 0.3707
                    ], 
                   ['Jiné (258 z 11726)',
                    0, 0.0171, 0.0341, 0.145, 0.0171, 0.3155, 0, 0.5202, 0.4179, 0.4093, 0.3241
                    ], 
                   ['Refinancování půjček (346 z 15658)',
                    0, 0.0192, 0.0383, 0.1597, 0.0064, 0.3385, 0.0064, 0.4151, 0.396, 0.4087, 0.4215
                    ], 
                   ['Vlastní projekt (86 z 3785)',
                    0, 0.0264, 0.0793, 0.1057, 0.0264, 0.2378, 0, 0.5548, 0.502, 0.5284, 0.2114
                    ], 
                   ['Vzdělání (13 z 828)',
                    0, 0, 0, 0.1208, 0, 0.3623, 0, 0.2415, 0.1208, 0.7246, 0
                    ], 
                   ['Zdraví (18 z 1006)',
                    0, 0, 0.0994, 0.0994, 0, 0.2982, 0, 0.1988, 0.3976, 0.1988, 0.497
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle účelu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                   ['Hlavní město Praha (135 z 7920)',
                    0, 0, 0.0505, 0.1515, 0.0126, 0.2146, 0.0126, 0.3914, 0.3535, 0.3662, 0.1515
                    ], 
                   ['Jihomoravský kraj (109 z 6780)',
                    0, 0.0147, 0.0885, 0.1032, 0.0147, 0.2507, 0, 0.3245, 0.2065, 0.354, 0.2507
                    ], 
                   ['Jihočeský kraj (78 z 3223)',
                    0, 0, 0.0621, 0.1241, 0, 0.3413, 0.031, 0.6516, 0.4034, 0.4034, 0.4034
                    ], 
                   ['Karlovarský kraj (46 z 2037)',
                    0, 0, 0, 0, 0, 0.2455, 0, 0.6382, 0.54, 0.54, 0.2946
                    ], 
                   ['Kraj Vysočina (46 z 2506)',
                    0, 0, 0, 0.1596, 0, 0.2394, 0, 0.2793, 0.5188, 0.1995, 0.4389
                    ], 
                   ['Královéhradecký kraj (64 z 3066)',
                    0, 0, 0, 0.0978, 0, 0.2935, 0, 0.5871, 0.3262, 0.424, 0.3588
                    ], 
                   ['Liberecký kraj (77 z 3256)',
                    0, 0.0307, 0, 0.0307, 0, 0.3993, 0, 0.43, 0.6143, 0.4914, 0.3686
                    ], 
                   ['Moravskoslezský kraj (200 z 8460)',
                    0, 0.0118, 0.0473, 0.1537, 0, 0.3546, 0, 0.4965, 0.461, 0.4255, 0.4137
                    ], 
                   ['Olomoucký kraj (76 z 3885)',
                    0, 0, 0, 0.1802, 0, 0.1544, 0, 0.2574, 0.4118, 0.592, 0.3604
                    ], 
                   ['Pardubický kraj (64 z 3029)',
                    0, 0.033, 0, 0.2311, 0, 0.1981, 0, 0.5612, 0.3632, 0.4292, 0.2971
                    ], 
                   ['Plzeňský kraj (83 z 3398)',
                    0, 0.0589, 0, 0.1177, 0, 0.2354, 0, 0.4414, 0.7357, 0.5592, 0.2943
                    ], 
                   ['Středočeský kraj (182 z 9881)',
                    0, 0.0101, 0.0202, 0.1012, 0.0101, 0.2125, 0, 0.4251, 0.3745, 0.3239, 0.3643
                    ], 
                   ['Zlínský kraj (58 z 3211)',
                    0, 0.0311, 0.0934, 0.218, 0, 0.2803, 0, 0.218, 0.3737, 0.2803, 0.3114
                    ], 
                   ['Ústecký kraj (151 z 6115)',
                    0, 0, 0.0164, 0.1799, 0.0327, 0.3598, 0, 0.3925, 0.4742, 0.6378, 0.3761
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle kraje žadatele',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                   ['Důchod (103 z 3403)',
                    0, 0.0588, 0.0882, 0.2351, 0.0294, 0.4702, 0, 0.6465, 0.3526, 0.7053, 0.4408
                    ], 
                   ['Jiné (11 z 483)',
                    0, 0, 0, 0.207, 0, 0, 0, 0.6211, 0.4141, 0.4141, 0.6211
                    ], 
                   ['OSVČ (130 z 7470)',
                    0, 0, 0.0535, 0.1473, 0.0268, 0.174, 0.0134, 0.5221, 0.3481, 0.3213, 0.1339
                    ], 
                   ['Podnikatel (18 z 1077)',
                    0, 0, 0, 0.2786, 0, 0.0929, 0, 0.2786, 0.3714, 0.65, 0
                    ], 
                   ['Rodičovská dovolená (50 z 1788)',
                    0, 0, 0, 0.1119, 0, 0.2796, 0, 0.2796, 0.7271, 0.5034, 0.8949
                    ], 
                   ['Student (7 z 170)',
                    0, 0, 0, 0, 0, 0, 0, 0.5882, 0.5882, 1.7647, 1.1765
                    ], 
                   ['Svobodné povolání (9 z 186)',
                    0, 0, 0, 0, 0, 0, 0, 1.0753, 2.1505, 0.5376, 1.0753
                    ], 
                   ['Zaměstnanec (1039 z 52179)',
                    0, 0.0115, 0.0287, 0.1246, 0.0038, 0.2779, 0.0019, 0.3986, 0.412, 0.4063, 0.3258
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle zdroje příjmu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                   ['do 50 (490 z 19450)',
                    0, 0, 0.0206, 0.0668, 0, 0.2211, 0.0051, 0.4062, 0.4422, 0.6735, 0.6838
                    ], 
                   ['od 50 do 100 (388 z 15106)',
                    0, 0.0066, 0.0331, 0.0861, 0.0199, 0.3111, 0, 0.5561, 0.6156, 0.5164, 0.4237
                    ], 
                   ['od 100 do 150 (197 z 8904)',
                    0, 0.0337, 0.0112, 0.2134, 0, 0.2583, 0, 0.5615, 0.5503, 0.438, 0.146
                    ], 
                   ['od 150 do 200 (132 z 8051)',
                    0, 0, 0.0248, 0.149, 0.0124, 0.3354, 0, 0.4099, 0.2857, 0.3229, 0.0994
                    ], 
                   ['od 200 do 250 (51 z 4172)',
                    0, 0.024, 0.0959, 0.1918, 0.024, 0.3356, 0, 0.2876, 0.2157, 0.0479, 0
                    ], 
                   ['od 250 do 300 (54 z 4158)',
                    0, 0.0241, 0.0241, 0.3367, 0, 0.2165, 0, 0.3367, 0.2405, 0.0962, 0.0241
                    ], 
                   ['od 300 do 350 (19 z 1899)',
                    0, 0.0527, 0, 0.1053, 0, 0.316, 0.0527, 0.158, 0.2633, 0.0527, 0
                    ], 
                   ['od 350 do 400 (15 z 1774)',
                    0, 0.0564, 0.1127, 0.1127, 0, 0.2255, 0, 0.1691, 0.1127, 0.0564, 0
                    ], 
                   ['od 400 do 450 (8 z 819)',
                    0, 0, 0.2442, 0.1221, 0, 0.4884, 0, 0.1221, 0, 0, 0
                    ], 
                   ['od 450 do 500 (14 z 1571)',
                    0, 0, 0.0637, 0.3819, 0, 0.1273, 0, 0.2546, 0.0637, 0, 0
                    ], 
                   ['od 500 do 550 (0 z 188)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 550 do 600 (0 z 248)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 600 do 650 (1 z 111)',
                    0, 0, 0, 0, 0, 0.9009, 0, 0, 0, 0, 0
                    ], 
                   ['od 650 do 700 (0 z 120)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['od 700 (0 z 196)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle výše úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                   ['do 12 (53 z 2390)',
                    0, 0, 0, 0, 0, 0.0837, 0, 0.1255, 0.3347, 0.5439, 1.1297
                    ], 
                   ['od 12 do 24 (151 z 7325)',
                    0, 0, 0.0137, 0.0546, 0, 0.1502, 0, 0.4096, 0.4642, 0.6689, 0.3003
                    ], 
                   ['od 24 do 36 (171 z 7173)',
                    0, 0, 0, 0.1115, 0, 0.1394, 0, 0.5158, 0.3346, 0.5158, 0.7668
                    ], 
                   ['od 36 do 48 (196 z 10076)',
                    0, 0, 0.0198, 0.129, 0.0198, 0.3176, 0.0099, 0.3871, 0.4764, 0.4168, 0.1687
                    ], 
                   ['od 48 do 60 (155 z 7958)',
                    0, 0.0251, 0.0754, 0.1382, 0.0126, 0.1382, 0.0126, 0.3393, 0.4021, 0.4901, 0.3141
                    ], 
                   ['od 60 do 72 (132 z 6908)',
                    0, 0.0145, 0.029, 0.2316, 0.0145, 0.2895, 0, 0.3764, 0.304, 0.2461, 0.4053
                    ], 
                   ['od 72 (511 z 24937)',
                    0, 0.0201, 0.0441, 0.1524, 0.004, 0.3769, 0, 0.4852, 0.4451, 0.3409, 0.1805
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle délky úvěru',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                   ['Ne (128 z 13889)',
                    0, 0, 0.0216, 0.036, 0.0216, 0.0792, 0.0072, 0.2088, 0.2232, 0.1512, 0.1728
                    ], 
                   ['Ano (1241 z 52878)',
                    0, 0.0151, 0.0359, 0.1607, 0.0038, 0.3196, 0.0019, 0.4804, 0.4671, 0.4936, 0.3688
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle příběhu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                   ['Ne (213 z 30953)',
                    0, 0, 0.0258, 0.0485, 0.0065, 0.0808, 0, 0.1551, 0.1098, 0.126, 0.1357
                    ], 
                   ['Ano (177 z 14944)',
                    0, 0, 0.0067, 0.0669, 0.0201, 0.0937, 0.0134, 0.2476, 0.2877, 0.2342, 0.2141
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle pojištění, od jeho zavedení',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                   ['Ne (1358 z 64002)',
                    0, 0.0125, 0.0344, 0.1406, 0.0078, 0.2797, 0.0031, 0.4328, 0.4328, 0.4375, 0.3406
                    ], 
                   ['Ano (11 z 2765)',
                    0, 0, 0, 0, 0, 0.0362, 0, 0.217, 0.0362, 0.0723, 0.0362
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatněné půjčky podle statusu investora',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                   ['0 (1236 z 51858)',
                    0, 0.0154, 0.0366, 0.1388, 0.0096, 0.3027, 0.0039, 0.4821, 0.4821, 0.5052, 0.4069
                    ], 
                   ['1 (118 z 11122)',
                    0, 0, 0.018, 0.1439, 0, 0.1978, 0, 0.2428, 0.2248, 0.1618, 0.0719
                    ], 
                   ['2 (15 z 2745)',
                    0, 0, 0.0364, 0.0729, 0, 0.0364, 0, 0.2186, 0.1093, 0.0729, 0
                    ], 
                   ['3 (0 z 719)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['4 (0 z 220)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['5 (0 z 72)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['6 (0 z 20)',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['7 (0 z 7)',
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
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                    0, 0, 0, 0.9174, 0, 1.4706, 0, 2.2727, 0, 6.6667, 0
                    ], 
                   ['2016-03',
                    0, 0, 0, 0, 0, 1.8868, 0, 1.5625, 3.3333, 11.4286, 28.5714
                    ], 
                   ['2016-04',
                    0, 0, 0, 3.2258, 0, 0, 0, 3.4483, 9.5238, 25, 28.5714
                    ], 
                   ['2016-05',
                    0, 0, 0, 2.439, 0, 1.9231, 0, 7.6923, 2.6316, 6.4516, 14.2857
                    ], 
                   ['2016-06',
                    0, 0, 3.8462, 0, 0, 2.3256, 0, 7.6923, 2.8571, 5.7143, 12.5
                    ], 
                   ['2016-07',
                    0, 0, 0, 0, 0, 6.0606, 0, 9.0909, 9.0909, 5.8824, 25
                    ], 
                   ['2016-08',
                    0, 0, 0, 1.7544, 0, 0, 0, 5.1282, 8.1081, 18.1818, 11.1111
                    ], 
                   ['2016-09',
                    0, 0, 0, 0, 0, 2.439, 0, 9.0909, 0, 6.6667, 25
                    ], 
                   ['2016-10',
                    0, 0, 0, 0, 0, 2.5, 0, 6.25, 5.2632, 11.5385, 8
                    ], 
                   ['2016-11',
                    0, 0, 0, 0.9804, 0, 1.2658, 0, 8.7719, 3.6364, 15.6863, 20
                    ], 
                   ['2016-12',
                    0, 0, 0, 0, 0, 4.7059, 0, 11.4754, 11.5942, 21.6667, 21.875
                    ], 
                   ['2017-01',
                    0, 0, 0, 1.1765, 0, 1.5152, 0, 3.125, 7.1429, 15.2174, 11.1111
                    ], 
                   ['2017-02',
                    0, 0, 0, 0, 0, 0, 0, 3.8462, 5.7143, 11.1111, 23.8095
                    ], 
                   ['2017-03',
                    0, 0, 0, 0.9804, 0, 3.7736, 0, 2.1739, 2.0833, 8.6957, 23.3333
                    ], 
                   ['2017-04',
                    0, 0, 0, 1.1628, 0, 1.1765, 0, 15.2542, 31.4286, 8.6957, 21.0526
                    ], 
                   ['2017-05',
                    0, 0, 0.8929, 3.5556, 0, 6.6176, 0, 3.8462, 9.0909, 10.9375, 17.3913
                    ], 
                   ['2017-06',
                    0, 1.2987, 0.7874, 1.4337, 0, 3.4483, 0, 7.947, 19.3182, 16.129, 23.5294
                    ], 
                   ['2017-07',
                    0, 1.5385, 0, 2.1505, 0, 7.4713, 0, 10, 13.5135, 15.0943, 9.6774
                    ], 
                   ['2017-08',
                    0, 0, 1.2422, 2.0772, 0, 5.5556, 0, 6.2857, 10, 23.8806, 13.3333
                    ], 
                   ['2017-09',
                    0, 1.4706, 0.5747, 1.4085, 0, 3.5556, 0, 7.8313, 8.4746, 11.4943, 24.3243
                    ], 
                   ['2017-10',
                    0, 0, 1.0582, 0.2639, 0, 4.0678, 0, 9.2593, 9.2857, 15.4545, 23.3333
                    ], 
                   ['2017-11',
                    0, 1.4085, 0, 0.6329, 0, 4.127, 0, 4.4, 7.7844, 15.2381, 16.6667
                    ], 
                   ['2017-12',
                    0, 0.9804, 0, 0.8798, 0, 5.0209, 0, 6.5116, 11.7241, 14.9425, 15.7895
                    ], 
                   ['2018-01',
                    0, 1.0753, 0.5618, 1.1236, 0, 2.0492, 0, 6.0185, 9.5588, 10.6667, 14.8936
                    ], 
                   ['2018-02',
                    0, 0, 0.5208, 0.8499, 0, 3.8023, 0, 5.0691, 8.3333, 9.4118, 17.3913
                    ], 
                   ['2018-03',
                    0, 0.6897, 0.8929, 1.3636, 0, 4.7198, 0, 5.597, 8.6364, 11.5108, 13.5135
                    ], 
                   ['2018-04',
                    0, 0, 0.4367, 1.1962, 0, 2.9126, 0, 5.3846, 9.0452, 15.8416, 14.0845
                    ], 
                   ['2018-05',
                    0, 0, 0.813, 0.6466, 0, 3.871, 0, 4.9822, 7.9208, 9.7744, 13.3333
                    ], 
                   ['2018-06',
                    0, 0, 0.3195, 0.6276, 0, 2.2857, 0, 4.4586, 5.3922, 7.377, 13.1148
                    ], 
                   ['2018-07',
                    0, 0, 0, 1.6842, 0, 1.6556, 0, 4.7414, 3.8462, 4.5872, 7.9365
                    ], 
                   ['2018-08',
                    0, 0, 0.2899, 0.4545, 0, 0.9868, 0, 1.7241, 3.5294, 5.2632, 4.0404
                    ], 
                   ['2018-09',
                    0, 0, 0.3378, 0.2457, 0, 0.3774, 0, 2.1739, 2.7778, 7.2917, 12.5
                    ], 
                   ['2018-10',
                    0, 0, 0.2358, 0.6981, 0, 0.5155, 0, 2.9316, 1.7143, 5.1852, 10.3448
                    ], 
                   ['2018-11',
                    0, 0, 0.4329, 0.1618, 0, 0.1799, 0, 1.5686, 2.7451, 3.1447, 7.0312
                    ], 
                   ['2018-12',
                    0, 0, 0.4651, 0.8696, 0, 0.2584, 0, 1.7804, 1.6949, 4.2735, 3.2787
                    ], 
                   ['2019-01',
                    0, 0, 0, 0, 0, 1.1364, 0, 1.0283, 4.1237, 2.3438, 7.6923
                    ], 
                   ['2019-02',
                    0, 0, 0, 0, 0, 0, 0, 0.7299, 4.2056, 2.0408, 5
                    ], 
                   ['2019-03',
                    0, 0, 0, 0, 0, 0.1972, 0, 0.4566, 0.7782, 2.7473, 1.4493
                    ], 
                   ['2019-04',
                    0, 0, 0, 0, 0.8671, 0, 0.6557, 0.6711, 0.5682, 0.9434, 1.3889
                    ], 
                   ['2019-05',
                    0, 0, 0, 0, 0.4938, 0, 0, 0, 0.641, 2.8302, 1.4706
                    ], 
                   ['2019-06',
                    0, 0, 0, 0, 0, 0, 0, 0.3096, 0, 0, 0
                    ], 
                   ['2019-07',
                    0, 0, 0, 0, 0, 0, 0, 0, 0.5236, 0, 0
                    ], 
                   ['2019-08',
                    0, 0, 0, 0, 0, 0, 0, 0.7557, 0, 0.7407, 0
                    ], 
                   ['2019-09',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-10',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ], 
                   ['2019-11',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění podle data originace a ratingu [%]',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                    0, 0.2, 0.22, 0.65, 0.15, 1.6, 0.07, 2.98, 4.86, 7.24, 9.34
                    ], 
                   ['1',
                    0, 0.2, 0.23, 0.66, 0.15, 1.62, 0.07, 3.01, 4.91, 7.32, 9.42
                    ], 
                   ['2',
                    0, 0.21, 0.25, 0.7, 0.19, 1.74, 0.09, 3.26, 5.24, 7.76, 10.03
                    ], 
                   ['3',
                    0, 0.22, 0.27, 0.74, 0.23, 1.88, 0.11, 3.52, 5.62, 8.37, 10.84
                    ], 
                   ['4',
                    0, 0.23, 0.29, 0.79, 0.29, 2.03, 0.14, 3.8, 6.07, 8.91, 11.71
                    ], 
                   ['5',
                    0, 0.25, 0.31, 0.84, 0.38, 2.2, 0.19, 4.15, 6.51, 9.67, 12.67
                    ], 
                   ['6',
                    0, 0.26, 0.33, 0.9, 0.56, 2.39, 0.27, 4.52, 7.06, 10.36, 13.76
                    ], 
                   ['7',
                    0, 0.28, 0.36, 0.96, 0.52, 2.61, 0.41, 4.93, 7.66, 10.98, 14.78
                    ], 
                   ['8',
                    0, 0.3, 0.39, 1.02, 0, 2.83, 0, 5.38, 8.27, 11.94, 15.84
                    ], 
                   ['9',
                    0, 0.32, 0.43, 1.1, 0, 3.03, 0, 5.82, 9, 12.75, 17.14
                    ], 
                   ['10',
                    0, 0.34, 0.46, 1.18, 0, 3.33, 0, 6.38, 9.59, 13.97, 18.45
                    ], 
                   ['11',
                    0, 0.31, 0.5, 1.28, 0, 3.56, 0, 6.96, 10.23, 14.99, 20.27
                    ], 
                   ['12',
                    0, 0.33, 0.52, 1.29, 0, 3.93, 0, 7.61, 11.05, 16.2, 22.11
                    ], 
                   ['13',
                    0, 0.35, 0.5, 1.37, 0, 4.27, 0, 8.15, 11.76, 17.4, 23.29
                    ], 
                   ['14',
                    0, 0.38, 0.53, 1.45, 0, 4.79, 0, 9.02, 12.89, 18.34, 24.51
                    ], 
                   ['15',
                    0, 0.43, 0.57, 1.58, 0, 5.25, 0, 9.69, 14.03, 19.27, 26
                    ], 
                   ['16',
                    0, 0.48, 0.59, 1.67, 0, 5.61, 0, 10.37, 14.76, 20.5, 28.36
                    ], 
                   ['17',
                    0, 0.54, 0.62, 1.66, 0, 5.94, 0, 10.92, 15.62, 22.26, 30.55
                    ], 
                   ['18',
                    0, 0.65, 0.71, 1.74, 0, 6.22, 0, 11.38, 16.38, 23.91, 32.35
                    ], 
                   ['19',
                    0, 0.73, 0.69, 1.85, 0, 6.45, 0, 12.04, 17.36, 24.36, 33.5
                    ], 
                   ['20',
                    0, 0.83, 0.72, 1.9, 0, 6.65, 0, 12.54, 18.16, 25.38, 35.57
                    ], 
                   ['21',
                    0, 0.82, 0.67, 1.93, 0, 6.65, 0, 12.68, 18.58, 25.76, 37.46
                    ], 
                   ['22',
                    0, 1, 0.69, 2.07, 0, 6.91, 0, 13.32, 19.75, 27.47, 39.29
                    ], 
                   ['23',
                    0, 0.94, 0.69, 2.15, 0, 7.69, 0, 13.67, 20.25, 29.22, 40.31
                    ], 
                   ['24',
                    0, 0.87, 0.76, 2.29, 0, 7.76, 0, 14.23, 21.23, 29.87, 42.13
                    ], 
                   ['25',
                    0, 0.52, 0.88, 2.49, 0, 7.68, 0, 15.42, 22.32, 29.78, 42.38
                    ], 
                   ['26',
                    0, 0.65, 0.8, 2.91, 0, 7.73, 0, 14.92, 23.45, 29.86, 45.05
                    ], 
                   ['27',
                    0, 0.4, 0.79, 3.13, 0, 8.24, 0, 14.97, 24.32, 30.55, 44.58
                    ], 
                   ['28',
                    0, 0.48, 0.59, 2.98, 0, 7.93, 0, 15.57, 24.91, 29.85, 46.41
                    ], 
                   ['29',
                    0, 0, 0.72, 2.89, 0, 6.48, 0, 15.43, 25.21, 31.33, 48.23
                    ], 
                   ['30',
                    0, 0, 0.3, 2.86, 0, 5.99, 0, 15.55, 21.9, 31.66, 47.62
                    ], 
                   ['31',
                    0, 0, 0, 2.02, 0, 4.81, 0, 16.46, 22.6, 31.25, 50
                    ], 
                   ['32',
                    0, 0, 0, 2.28, 0, 5.12, 0, 16.49, 18.83, 35.06, 50.5
                    ], 
                   ['33',
                    0, 0, 0, 1.98, 0, 5.16, 0, 18.02, 20.61, 35.66, 49.46
                    ], 
                   ['34',
                    0, 0, 0, 2.37, 0, 6.15, 0, 19.33, 23.01, 35.82, 52.5
                    ], 
                   ['35',
                    0, 0, 0, 2.76, 0, 5.84, 0, 19.4, 22.77, 35.96, 56.34
                    ], 
                   ['36',
                    0, 0, 0, 2.74, 0, 6.11, 0, 17.12, 17.86, 33.33, 55
                    ], 
                   ['37',
                    0, 0, 0, 2.76, 0, 6.67, 0, 17.05, 19.44, 31.58, 52.94
                    ], 
                   ['38',
                    0, 0, 0, 2.86, 0, 7.5, 0, 15.79, 19.67, 30.88, 54.35
                    ], 
                   ['39',
                    0, 0, 0, 3.51, 0, 7.58, 0, 16.13, 24.49, 34.48, 57.89
                    ], 
                   ['40',
                    0, 0, 0, 3.3, 0, 8.93, 0, 18.18, 25, 34.78, 57.58
                    ], 
                   ['41',
                    0, 0, 0, 4.17, 0, 6.98, 0, 20, 22.22, 38.46, 63.64
                    ], 
                   ['42',
                    0, 0, 0, 5.17, 0, 5.56, 0, 17.24, 25, 42.42, 66.67
                    ], 
                   ['43',
                    0, 0, 0, 0, 0, 7.14, 0, 15, 38.46, 41.38, 66.67
                    ], 
                   ['44',
                    0, 0, 0, 0, 0, 12.5, 0, 14.29, 14.29, 36.84, 57.14
                    ], 
                   ['45',
                    0, 0, 0, 0, 0, 8.33, 0, 12.5, 0, 33.33, 0
                    ], 
                   ['46',
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění v průběhu života půjčky, podle ratingu',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                    4.99, 4.89, 2.53, 0.28
                    ], 
                   ['1',
                    5.07, 4.92, 2.56, 0.29
                    ], 
                   ['2',
                    5.18, 5.07, 2.63, 0.33
                    ], 
                   ['3',
                    5.29, 5.2, 2.71, 0.39
                    ], 
                   ['4',
                    5.43, 5.34, 2.8, 0.44
                    ], 
                   ['5',
                    5.54, 5.5, 2.9, 0.52
                    ], 
                   ['6',
                    5.72, 5.63, 3, 0.65
                    ], 
                   ['7',
                    5.91, 5.79, 3.13, 0.74
                    ], 
                   ['8',
                    6.06, 5.94, 3.25, 0.88
                    ], 
                   ['9',
                    6.27, 6.12, 3.38, 1.06
                    ], 
                   ['10',
                    6.45, 6.28, 3.51, 0.99
                    ], 
                   ['11',
                    6.69, 6.42, 3.64, 0
                    ], 
                   ['12',
                    6.94, 6.61, 3.7, 0
                    ], 
                   ['13',
                    7.19, 6.83, 3.9, 0
                    ], 
                   ['14',
                    7.51, 7.03, 4.31, 0
                    ], 
                   ['15',
                    7.82, 7.2, 4.79, 0
                    ], 
                   ['16',
                    8.01, 7.4, 5.25, 0
                    ], 
                   ['17',
                    8.32, 7.63, 5.7, 0
                    ], 
                   ['18',
                    8.62, 7.94, 6.07, 0
                    ], 
                   ['19',
                    8.88, 8.16, 6.29, 0
                    ], 
                   ['20',
                    9.16, 8.46, 6.17, 0
                    ], 
                   ['21',
                    9.37, 8.75, 4.98, 0
                    ], 
                   ['22',
                    9.8, 9.08, 4.38, 0
                    ], 
                   ['23',
                    10.17, 9.52, 0, 0
                    ], 
                   ['24',
                    10.54, 9.03, 0, 0
                    ], 
                   ['25',
                    10.93, 9.21, 0, 0
                    ], 
                   ['26',
                    11.19, 9.63, 0, 0
                    ], 
                   ['27',
                    11.36, 10.22, 0, 0
                    ], 
                   ['28',
                    11.67, 10.38, 0, 0
                    ], 
                   ['29',
                    12.38, 10.35, 0, 0
                    ], 
                   ['30',
                    12.86, 9.36, 0, 0
                    ], 
                   ['31',
                    13.32, 8.88, 0, 0
                    ], 
                   ['32',
                    13.77, 8.79, 0, 0
                    ], 
                   ['33',
                    14.31, 7.96, 0, 0
                    ], 
                   ['34',
                    15.1, 8.15, 0, 0
                    ], 
                   ['35',
                    15.7, 0, 0, 0
                    ], 
                   ['36',
                    13.15, 0, 0, 0
                    ], 
                   ['37',
                    13.31, 0, 0, 0
                    ], 
                   ['38',
                    14.01, 0, 0, 0
                    ], 
                   ['39',
                    15.6, 0, 0, 0
                    ], 
                   ['40',
                    16.26, 0, 0, 0
                    ], 
                   ['41',
                    16.84, 0, 0, 0
                    ], 
                   ['42',
                    17.9, 0, 0, 0
                    ], 
                   ['43',
                    17.54, 0, 0, 0
                    ], 
                   ['44',
                    15.24, 0, 0, 0
                    ], 
                   ['45',
                    9.09, 0, 0, 0
                    ], 
                   ['46',
                    0, 0, 0, 0
                    ]
        ]);
        var options = {
            chart: {
                title: 'Zesplatnění v průběhu života půjčky, podle roku originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                    9.507338250083809, 10.034270833333334, 0.13, 3.1199999999999997, 0, 0.52
                    ], 
                   ['2016-04',
                    9.397446355112478, 9.949309494451295, 0.23, 4.19, 0, 0.49
                    ], 
                   ['2016-05',
                    9.31118460232555, 9.977387387387388, 0.17, 4.2299999999999995, 0, 0.63
                    ], 
                   ['2016-06',
                    9.207182025562384, 9.972300884955752, 0.14, 4.2, 0, 0.66
                    ], 
                   ['2016-07',
                    9.127489940673367, 9.910331421287443, 0.12, 4.46, 0, 0.7000000000000001
                    ], 
                   ['2016-08',
                    9.110183915529062, 9.954835164835165, 0.1, 4.5600000000000005, 0, 1.04
                    ], 
                   ['2016-09',
                    9.032353283960816, 9.866494023904382, 0.09, 4.58, 0, 1.0999999999999999
                    ], 
                   ['2016-10',
                    9.019944356462485, 9.880848214285713, 0.08, 4.55, 0, 1.16
                    ], 
                   ['2016-11',
                    9.011734147670893, 9.925717002662608, 0.07, 4.75, 0, 1.1400000000000001
                    ], 
                   ['2016-12',
                    9.009857794498451, 9.986398166339228, 0.06, 5.37, 0, 1.08
                    ], 
                   ['2017-01',
                    8.927109445982492, 9.953991769547324, 0.05, 5.319999999999999, 0, 1
                    ], 
                   ['2017-02',
                    8.807850683572859, 9.8537339055794, 0.06, 5.18, 0, 0.97
                    ], 
                   ['2017-03',
                    8.772715891923353, 9.841824457593688, 0.06, 5.1499999999999995, 0, 1.01
                    ], 
                   ['2017-04',
                    8.659677213284112, 9.738507119889757, 0.06, 5.4399999999999995, 0, 1.01
                    ], 
                   ['2017-05',
                    8.433559196771801, 9.553833992094862, 0.05, 5.47, 0, 1.05
                    ], 
                   ['2017-06',
                    8.266391498913281, 9.391465386558869, 0.07, 5.66, 0, 1.04
                    ], 
                   ['2017-07',
                    8.129859930687351, 9.247765346680406, 0.08, 5.76, 0, 1.1199999999999999
                    ], 
                   ['2017-08',
                    8.031712420530425, 9.125138587303615, 0.09, 5.79, 0, 1.34
                    ], 
                   ['2017-09',
                    7.927677087770594, 9.045549314760729, 0.09, 5.7299999999999995, 0, 1.46
                    ], 
                   ['2017-10',
                    7.865682451548923, 8.982567964013299, 0.08, 5.680000000000001, 0, 1.6
                    ], 
                   ['2017-11',
                    7.766697189031557, 8.89723444001019, 0.1, 5.5, 0, 1.73
                    ], 
                   ['2017-12',
                    7.730692240551537, 8.871466521671586, 0.1, 5.55, 0, 1.83
                    ], 
                   ['2018-01',
                    7.7297335420218465, 8.850983981693364, 0.09, 5.48, 0, 1.96
                    ], 
                   ['2018-02',
                    7.727861656676985, 8.835431706994578, 0.08, 5.41, 0, 2.03
                    ], 
                   ['2018-03',
                    7.74065798435242, 8.846852062503741, 0.07, 5.4, 0, 2.1399999999999997
                    ], 
                   ['2018-04',
                    7.7260361404793745, 8.8419092418373, 0.08, 5.38, 1.6400000000000001, 2.2399999999999998
                    ], 
                   ['2018-05',
                    7.722359235000748, 8.831647034722934, 0.07, 5.3100000000000005, 4.24, 2.45
                    ], 
                   ['2018-06',
                    7.692501598828086, 8.802888382904037, 0.07, 5.16, 6.29, 2.73
                    ], 
                   ['2018-07',
                    7.6056631510720125, 8.71870781527531, 0.06, 4.99, 8.25, 2.94
                    ], 
                   ['2018-08',
                    7.57225061664269, 8.708000583892897, 0.06, 4.79, 9.77, 3.19
                    ], 
                   ['2018-09',
                    7.532511387533076, 8.687392032539778, 0.06, 4.6899999999999995, 10.92, 3.5999999999999996
                    ], 
                   ['2018-10',
                    7.480300610473837, 8.65316829468347, 0.05, 4.5, 12.25, 5.16
                    ], 
                   ['2018-11',
                    7.469617036269997, 8.662756842797329, 0.05, 4.279999999999999, 13.919999999999998, 7.88
                    ], 
                   ['2018-12',
                    7.4725531788960415, 8.678989689341188, 0.05, 4.2, 14.92, 9.55
                    ], 
                   ['2019-01',
                    7.483066654953751, 8.704221910291585, 0.05, 4.07, 16.07, 11.32
                    ], 
                   ['2019-02',
                    7.508923692985673, 8.740593824228029, 0.04, 3.93, 17.34, 12.93
                    ], 
                   ['2019-03',
                    7.527800831451616, 8.774402340807695, 0.04, 3.75, 18.77, 14.649999999999999
                    ], 
                   ['2019-04',
                    7.488827475399956, 8.72187510298237, 0.04, 3.5700000000000003, 20.02, 16.38
                    ], 
                   ['2019-05',
                    7.456122043199563, 8.680631921824103, 0.04, 3.4000000000000004, 21.62, 18.04
                    ], 
                   ['2019-06',
                    7.429856604678536, 8.64104872296653, 0.04, 3.25, 22.61, 19.259999999999998
                    ], 
                   ['2019-07',
                    7.403376785244365, 8.598541264507519, 0.03, 3.0700000000000003, 23.580000000000002, 20.51
                    ], 
                   ['2019-08',
                    7.3786178460965886, 8.56654559945349, 0.03, 2.94, 24.51, 21.57
                    ], 
                   ['2019-09',
                    7.368042483669791, 8.551435616438356, 0.03, 2.83, 25.05, 22.439999999999998
                    ], 
                   ['2019-10',
                    7.3538318572496415, 8.524780307040762, 0.03, 2.71, 25.53, 23.22
                    ], 
                   ['2019-11',
                    7.296185808881532, 8.467691333823408, 0.03, 2.59, 26.08, 24.09
                    ]
        ]);
        var options = {
            chart: {
                title: 'Souhrnné statistiky platformy',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                    9.585444120100084, 10.137368421052631, 0.26, 3.8600000000000003, 0, 0
                    ], 
                   ['2016-04',
                    9.163282829789138, 9.780794979079499, 0.45, 6.69, 0, 0.42
                    ], 
                   ['2016-05',
                    9.082614146116729, 10.0662987012987, 0, 4.22, 0, 0.97
                    ], 
                   ['2016-06',
                    8.966992604765817, 10.079694656488549, 0, 3.82, 0, 0.76
                    ], 
                   ['2016-07',
                    8.71180547954026, 9.599865470852018, 0, 5.83, 0, 0.8999999999999999
                    ], 
                   ['2016-08',
                    8.984324748836796, 10.136067415730336, 0, 4.87, 0, 3
                    ], 
                   ['2016-09',
                    8.465082508250827, 9.323333333333332, 0, 3.85, 0, 1.28
                    ], 
                   ['2016-10',
                    8.949773202873141, 10.004760147601477, 0, 3.6900000000000004, 0, 1.8499999999999999
                    ], 
                   ['2016-11',
                    8.955806209612794, 10.109385342789597, 0, 5.4399999999999995, 0, 0.95
                    ], 
                   ['2016-12',
                    9.057868008424995, 10.376813186813187, 0, 8.57, 0, 0.66
                    ], 
                   ['2017-01',
                    8.495928138293058, 9.881414141414142, 0, 4.29, 0, 0.51
                    ], 
                   ['2017-02',
                    7.8471228266965785, 9.053157894736842, 0.14, 3.16, 0, 0.79
                    ], 
                   ['2017-03',
                    8.433172810146651, 9.7639898989899, 0.04, 4.04, 0, 1.52
                    ], 
                   ['2017-04',
                    7.745830772012294, 8.914744897959183, 0, 7.140000000000001, 0, 1.02
                    ], 
                   ['2017-05',
                    7.417096114519428, 8.667722152690864, 0, 5.01, 0, 1.25
                    ], 
                   ['2017-06',
                    7.545334066538356, 8.64524193548387, 0.15, 5.949999999999999, 0, 1.11
                    ], 
                   ['2017-07',
                    7.359513154132113, 8.423678756476683, 0.17, 5.7, 0, 1.4500000000000002
                    ], 
                   ['2017-08',
                    7.555856039762137, 8.548210251954822, 0.12, 5.390000000000001, 0, 2.69
                    ], 
                   ['2017-09',
                    7.41962586580376, 8.682682926829267, 0.06, 4.63, 0, 2.1999999999999997
                    ], 
                   ['2017-10',
                    7.5813903381431595, 8.70256868131868, 0.06, 4.95, 0, 2.6100000000000003
                    ], 
                   ['2017-11',
                    7.358334806304316, 8.565084364454442, 0.15, 3.82, 0, 2.42
                    ], 
                   ['2017-12',
                    7.549312861817267, 8.765260029717682, 0.09, 4.9, 0, 2.6
                    ], 
                   ['2018-01',
                    7.827964382592286, 8.753197026022304, 0, 3.8699999999999997, 0, 3.2
                    ], 
                   ['2018-02',
                    7.804064544265155, 8.804121037463977, 0, 3.82, 0, 2.74
                    ], 
                   ['2018-03',
                    7.946755418832431, 9.061930773391023, 0.02, 4.6, 0, 3.19
                    ], 
                   ['2018-04',
                    7.750774111184185, 8.91350203606748, 0.08, 4.25, 17.22, 3.32
                    ], 
                   ['2018-05',
                    7.7679907826962555, 8.875035499726925, 0, 3.71, 29.160000000000004, 4.53
                    ], 
                   ['2018-06',
                    7.556124475794424, 8.690652938221998, 0, 2.71, 25.259999999999998, 5.42
                    ], 
                   ['2018-07',
                    6.855983288827634, 8.022366649404454, 0.01, 2.02, 28.07, 5.33
                    ], 
                   ['2018-08',
                    7.263500630472232, 8.683336831059812, 0, 1.4200000000000002, 26.229999999999997, 6.09
                    ], 
                   ['2018-09',
                    7.109913487698421, 8.50935874168179, 0, 1.7500000000000002, 26.19, 9.01
                    ], 
                   ['2018-10',
                    7.05173854601613, 8.41142230026339, 0.01, 1.54, 25.990000000000002, 22.21
                    ], 
                   ['2018-11',
                    7.523809724320709, 8.942129531854981, 0, 1.16, 28.58, 32.73
                    ], 
                   ['2018-12',
                    7.860266636791396, 9.22445671121441, 0, 1.22, 31.14, 37.01
                    ], 
                   ['2019-01',
                    7.842695897037852, 9.272981853849926, 0, 1.37, 32.37, 36
                    ], 
                   ['2019-02',
                    8.071726483309671, 9.411714818266542, 0, 0.98, 35.410000000000004, 35.410000000000004
                    ], 
                   ['2019-03',
                    7.990097559615894, 9.383808777429467, 0, 0.47, 36.13, 35.97
                    ], 
                   ['2019-04',
                    7.1895177961853385, 8.315542878174456, 0, 0.37, 35.22, 37.14
                    ], 
                   ['2019-05',
                    7.157471910748028, 8.287827610371409, 0, 0.25, 40.71, 38.26
                    ], 
                   ['2019-06',
                    7.247352543290043, 8.320078125, 0, 0.04, 36.76, 36.17
                    ], 
                   ['2019-07',
                    7.345318743626808, 8.389325626204238, 0, 0.03, 35.160000000000004, 35.839999999999996
                    ], 
                   ['2019-08',
                    7.245446437408584, 8.395562742561449, 0, 0.13, 35.61, 35.410000000000004
                    ], 
                   ['2019-09',
                    7.445739826069648, 8.61291888062345, 0, 0, 33.050000000000004, 35.67
                    ], 
                   ['2019-10',
                    7.3117831160957865, 8.416928520877565, 0, 0, 33.26, 36.02
                    ], 
                   ['2019-11',
                    6.610016995870875, 7.891058901389808, 0, 0, 33.79, 37.29
                    ]
        ]);
        var options = {
            chart: {
                title: 'Souhrnné statistiky podle data originace',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                    ], 
                   ['2019-10',
                    1.63, 3.29, 15.85, 13.52, 15.5, 14.51, 10.93, 11.39, 6.65, 4.67, 2.05
                    ], 
                   ['2019-11',
                    2.08, 3.04, 23.23, 12.87, 14.16, 13.63, 10.85, 11.05, 4.7, 2.71, 1.65
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba úrokových měr v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                    ], 
                   ['2019-11',
                    20.55, 0.89, 29.12, 2.55, 16.15, 22.7, 4.5, 1.72, 1.82
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba účelu ǘvěrů v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                    9.09, 9.52, 4.99, 3.43, 4.03, 4.78, 4.78, 12.99, 6.65, 4.81, 4.95, 15.39, 5.7, 8.88
                    ], 
                   ['2019-11',
                    10.92, 10.19, 5.2, 3.08, 4.2, 5.03, 4.67, 12.87, 5.82, 4.04, 5.39, 14.92, 4.86, 8.8
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba krajů v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                    ], 
                   ['2019-11',
                    5.56, 0.83, 0.07, 9.73, 1.26, 2.51, 0.1, 0.3, 79.65
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba zdrojů příjmu v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                ['Datum originace', 'do 50 tis. Kč', 'od 50 do 100 tis. Kč', 'od 100 do 150 tis. Kč', 'od 150 do 200 tis. Kč', 'od 200 do 250 tis. Kč', 'od 250 do 300 tis. Kč', 'od 300 do 350 tis. Kč', 'od 350 do 400 tis. Kč', 'od 400 do 450 tis. Kč', 'od 450 do 500 tis. Kč', 'od 500 do 550 tis. Kč', 'od 550 do 600 tis. Kč', 'od 600 do 650 tis. Kč', 'od 650 do 700 tis. Kč', 'od 700 tis. Kč'],
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
                    ], 
                   ['2019-11',
                    33.12, 20.28, 11.45, 10.23, 4.9, 7.15, 3.54, 3.01, 1.65, 1.72, 0.53, 0.93, 0.4, 0.3, 0.79
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba výší úvěru v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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
                ['Datum originace', 'do 12 měs.', 'od 12 do 24 měs.', 'od 24 do 36 měs.', 'od 36 do 48 měs.', 'od 48 do 60 měs.', 'od 60 do 72 měs.', 'od 72 měs.'],
                   ['2016-02',
                    9.3458, 19.9377, 19.6262, 16.8224, 9.9688, 10.5919, 13.7072
                    ], 
                   ['2016-03',
                    3.1579, 10.8772, 20, 18.9474, 12.2807, 10.5263, 24.2105
                    ], 
                   ['2016-04',
                    2.5105, 12.9707, 14.6444, 19.2469, 16.318, 16.7364, 17.5732
                    ], 
                   ['2016-05',
                    3.5714, 12.987, 17.8571, 18.1818, 13.6364, 9.0909, 24.6753
                    ], 
                   ['2016-06',
                    1.145, 14.8855, 12.9771, 15.2672, 15.2672, 14.5038, 25.9542
                    ], 
                   ['2016-07',
                    3.139, 8.9686, 15.6951, 16.5919, 20.1794, 15.2466, 20.1794
                    ], 
                   ['2016-08',
                    2.2472, 10.1124, 16.1049, 17.9775, 17.603, 9.3633, 26.5918
                    ], 
                   ['2016-09',
                    2.5641, 13.6752, 9.8291, 15.3846, 16.2393, 16.2393, 26.0684
                    ], 
                   ['2016-10',
                    2.952, 11.4391, 11.4391, 18.0812, 18.4502, 13.2841, 24.3542
                    ], 
                   ['2016-11',
                    1.182, 10.1655, 12.766, 17.7305, 13.2388, 10.6383, 34.279
                    ], 
                   ['2016-12',
                    2.1978, 9.8901, 11.4286, 15.1648, 14.9451, 8.5714, 37.8022
                    ], 
                   ['2017-01',
                    3.2828, 8.8384, 14.899, 14.1414, 16.1616, 12.8788, 29.798
                    ], 
                   ['2017-02',
                    1.3158, 9.2105, 11.8421, 18.9474, 16.3158, 14.4737, 27.8947
                    ], 
                   ['2017-03',
                    4.0404, 11.6162, 10.101, 17.6768, 17.9293, 11.3636, 27.2727
                    ], 
                   ['2017-04',
                    2.551, 9.4388, 15.051, 14.0306, 14.5408, 14.0306, 30.3571
                    ], 
                   ['2017-05',
                    2.5031, 9.0113, 10.8886, 14.2678, 13.0163, 12.766, 37.5469
                    ], 
                   ['2017-06',
                    2.3185, 9.4758, 11.0887, 15.121, 14.8185, 11.7944, 35.3831
                    ], 
                   ['2017-07',
                    1.9689, 10.7772, 11.1917, 15.7513, 14.6114, 10.7772, 34.9223
                    ], 
                   ['2017-08',
                    2.2589, 11.2076, 11.3814, 16.1599, 11.4683, 11.1208, 36.4031
                    ], 
                   ['2017-09',
                    3.5772, 9.5122, 10.5691, 16.4228, 12.6829, 12.439, 34.7967
                    ], 
                   ['2017-10',
                    2.3352, 10.0275, 11.7445, 13.7363, 12.4313, 10.7143, 39.011
                    ], 
                   ['2017-11',
                    2.9809, 9.73, 10.7987, 16.4792, 11.7548, 11.9235, 36.333
                    ], 
                   ['2017-12',
                    3.8633, 10.6241, 10.3269, 17.3848, 11.8871, 11.1441, 34.7697
                    ], 
                   ['2018-01',
                    3.5688, 8.9963, 11.6729, 14.3494, 12.119, 12.119, 37.1747
                    ], 
                   ['2018-02',
                    3.3141, 9.366, 9.5821, 15.3458, 12.2478, 11.0231, 39.121
                    ], 
                   ['2018-03',
                    2.8664, 9.4646, 10.6003, 13.9535, 12.6555, 10.9789, 39.4808
                    ], 
                   ['2018-04',
                    3.1414, 9.715, 8.6097, 16.0558, 13.1472, 10.6457, 38.6853
                    ], 
                   ['2018-05',
                    2.3484, 10.4315, 10.9776, 15.456, 12.7799, 10.5407, 37.4659
                    ], 
                   ['2018-06',
                    2.5615, 9.9448, 11.4013, 15.7207, 10.6479, 10.6479, 39.0758
                    ], 
                   ['2018-07',
                    3.1072, 9.5287, 10.0984, 14.7074, 12.8431, 9.9948, 39.7204
                    ], 
                   ['2018-08',
                    3.3578, 10.7555, 9.9161, 15.5299, 12.1721, 10.5456, 37.723
                    ], 
                   ['2018-09',
                    3.2668, 10.2843, 10.5263, 13.9141, 11.8572, 11.5547, 38.5965
                    ], 
                   ['2018-10',
                    4.2581, 9.7454, 10.6234, 15.496, 11.5891, 10.9306, 37.3573
                    ], 
                   ['2018-11',
                    3.2735, 12.8476, 10.982, 15.5931, 10.1725, 9.7149, 37.4164
                    ], 
                   ['2018-12',
                    5.7525, 12.5508, 11.0982, 15.6886, 10.5752, 7.7862, 36.5485
                    ], 
                   ['2019-01',
                    5.64, 10.9858, 11.182, 13.8794, 11.9176, 9.7597, 36.6356
                    ], 
                   ['2019-02',
                    3.9609, 11.0904, 10.205, 14.3523, 12.302, 9.739, 38.3504
                    ], 
                   ['2019-03',
                    3.605, 12.1082, 9.4828, 14.5376, 13.7147, 9.1693, 37.3824
                    ], 
                   ['2019-04',
                    3.8646, 11.2624, 10.3791, 14.6117, 11.4833, 10.011, 38.3879
                    ], 
                   ['2019-05',
                    4.2747, 11.1072, 10.1612, 14.9965, 11.5627, 9.8108, 38.0869
                    ], 
                   ['2019-06',
                    3.7891, 12.3828, 9.5703, 15.2734, 9.9609, 8.9453, 40.0781
                    ], 
                   ['2019-07',
                    4.5922, 12.203, 10.7258, 14.5793, 11.0148, 8.6384, 38.2466
                    ], 
                   ['2019-08',
                    3.7516, 11.7723, 10.1552, 13.8745, 10.608, 9.9935, 39.8448
                    ], 
                   ['2019-09',
                    3.7549, 11.9731, 11.3355, 14.4173, 10.8041, 9.3163, 38.3989
                    ], 
                   ['2019-10',
                    3.6093, 11.2173, 10.7219, 14.5789, 9.8372, 9.7311, 40.3043
                    ], 
                   ['2019-11',
                    4.2687, 11.1516, 9.1992, 14.4275, 10.7214, 10.0265, 40.2052
                    ]
        ]);
        var options = {
            chart: {
                title: 'Skladba délek úvěru v čase',
                subtitle: 'Vygeneroval Lukáš Petrovický dne 4. 12. 2019 ze Zonky loanbooku k 12/2019.'
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

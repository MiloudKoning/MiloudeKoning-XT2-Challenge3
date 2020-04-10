//hij moet weten wat voor steden je wilt laten zien
//in array met 6 objectjes met dezelfde keys
//coordinates is array met 2 cijfers erin (let op volgorde!)

/*
var countries = [
  {
    name: 'Nederland',
    coordinates: [5.291266, 52.132633]
  },

  {
    name: 'Duitsland',
    coordinates: [10.451526, 51.165691]
  },

  {
    name: 'Zwitserland',
    coordinates: [8.227512, 46.818188]
  },

  {
    name: 'Italie',
    coordinates: [12.56738, 41.87194]
  },

  {
    name: 'Mexico',
    coordinates: [-102.552784, 23.634501]
  },

  {
    name: 'GrootBrittannie',
    coordinates: [ -3.435973, 55.378051]
  },
];
*/
//dit was vet veel werkt 
//er is vast een andere manier maar kon niks vinden op internet

var countries = [
  {
    name: 'AD',
    coordinates: [1.601554, 42.546245]
  },
  {
    name: 'AE',
    coordinates: [53.847818,  23.424076]
  },
  {
    name: 'AF',
    coordinates: [67.709953 , 33.93911]
  },
  {
    name: 'AG',
    coordinates: [-61.796428, 17.060816  ]
  },
  {
    name: 'AI',
    coordinates: [-63.068615 , 18.220554]
  },
  {
    name: 'AL',
    coordinates: [20.168331  , 41.153332]
  },
  {
    name: 'AM',
    coordinates: [45.038189, 40.069099 ]
  },
  {
    name: 'AN',
    coordinates: [-69.060087 , 12.226079]
  },
  {
    name: 'AO',
    coordinates: [17.873887  , -11.202692  ]
  },
  {
    name: 'AQ',
    coordinates: [-0.071389  , -75.250973  ]
  },
  {
    name: 'AR',
    coordinates: [-63.616672 , -38.416097  ]
  },
  {
    name: 'AS',
    coordinates: [-170.132217  , -14.270972  ]
  },
  {
    name: 'AT',
    coordinates: [14.550072, 47.516231 ]
  },
  {
    name: 'AU',
    coordinates: [133.775136 , -25.274398   ]
  },
  {
    name: 'AW',
    coordinates: [-69.968338   , 12.52111 ]
  },
  {
    name: 'AZ',
    coordinates: [47.576927  , 40.143105]
  },
  {
    name: 'BA',
    coordinates: [17.679076  , 43.915886]
  },
  {
    name: 'BB',
    coordinates: [-59.543198 , 13.193887]
  },
  {
    name: 'BD',
    coordinates: [90.356331 , 23.684994]
  },
  {
    name: 'BE',
    coordinates: [ 4.469936, 50.503887]
  },
  {
    name: 'BF',
    coordinates: [-1.561593  , 12.238333  ]
  },
  {
    name: 'BG',
    coordinates: [ 25.48583, 42.733883  ]
  },
  {
    name: 'BH',
    coordinates: [ 50.637772  ,25.930414 ]
  },
  {
    name: 'BI',
    coordinates: [29.918886  , -3.373056  ]
  },
  {
    name: 'BJ',
    coordinates: [ 2.315834 , 9.30769]
  },
  {
    name: 'BM',
    coordinates: [ -64.75737  , 32.321384 ]
  },
  {
    name: 'BN',
    coordinates: [ 114.727669 , 4.535277  ]
  },
  {
    name: 'BO',
    coordinates: [ -63.588653 , -16.290154  ]
  },
  {
    name: 'BR',
    coordinates: [ -51.92528  , -14.235004  ]
  },
  {
    name: 'BS',
    coordinates: [ -77.39628  , 25.03428]
  },
  {
    name: 'BT',
    coordinates: [ 90.433601, 27.514162]
  },
  {
    name: 'BV',
    coordinates: [3.413194   , -54.423199 ]
  },
  {
    name: 'BW',
    coordinates: [ 24.684866, -22.328474  ]
  },
  {
    name: 'BY',
    coordinates: [ 27.953389  , 53.709807 ]
  },
  {
    name: 'BZ',
    coordinates: [ -88.49765  , 17.189877]
  },
  {
    name: 'CA',
    coordinates: [ -106.346771, 56.130366]
  },
  {
    name: 'CC',
    coordinates: [ 96.870956, -12.164165  ]
  },
  {
    name: 'CD',
    coordinates: [ 21.758664  , -4.038333 ]
  },
  {
    name: 'CF',
    coordinates: [ 20.939444  , 6.611111]
  },
  {
    name: 'CG',
    coordinates: [ 15.827659, -0.228021 ]
  },
  {
    name: 'CH',
    coordinates: [ 8.227512, 46.818188]
  },
  {
    name: 'CI',
    coordinates: [ -5.54708 , 7.539989]
  },
  {
    name: 'CK',
    coordinates: [ -159.777671  , -21.236736  ]
  },
  {
    name: 'CL',
    coordinates: [ -71.542969 , -35.675147  ]
  },
  {
    name: 'CM',
    coordinates: [ 12.354722, 7.369722  ]
  },
  {
    name: 'CN',
    coordinates: [ 104.195397, 35.86166 ]
  },
  {
    name: 'CO',
    coordinates: [ -74.297333 , 4.570868  ]
  },
  {
    name: 'CR',
    coordinates: [ -83.753428 , 9.748917  ]
  },
  {
    name: 'CU',
    coordinates: [ -77.781167 , 21.521757 ]
  },
  {
    name: 'CV',
    coordinates: [ -24.013197 , 16.002082]
  },
  {
    name: 'CX',
    coordinates: [ 105.690449 , -10.447525  ]
  },
  {
    name: 'CY',
    coordinates: [ 33.429859  , 35.126413]
  },
  {
    name: 'CZ',
    coordinates: [ 15.472962  , 49.817492]
  },
  {
    name: 'DE',
    coordinates: [ 10.451526, 51.165691]
  },
  {
    name: 'DJ',
    coordinates: [ 42.590275, 11.825138 ]
  },
  {
    name: 'DK',
    coordinates: [ 9.501785 , 56.26392    ]
  },
  {
    name: 'DM',
    coordinates: [ -61.370976 , 15.414999]
  },
  {
    name: 'DO',
    coordinates: [ -70.162651 , 18.735693 ]
  },
  {
    name: 'DZ',
    coordinates: [ 1.659626, 28.033886]
  },
  {
    name: 'EC',
    coordinates: [ -78.183406, -1.831239  ]
  },
  {
    name: 'EE',
    coordinates: [ 25.013607  , 58.595272 ]
  },
  {
    name: 'EG',
    coordinates: [30.802498  , 26.820553]
  },
  {
    name: 'EH',
    coordinates: [ -12.885834 ,24.215527 ]
  },
  {
    name: 'ER',
    coordinates: [ 39.782334  ,15.179384 ]
  },
  {
    name: 'ES',
    coordinates: [ -3.74922 ,40.463667   ]
  },
  {
    name: 'ET',
    coordinates: [ 40.489673, 9.145 ]
  },
  {
    name: 'FI',
    coordinates: [25.748151 , 61.92411  ]
  },
  {
    name: 'FJ',
    coordinates: [ 179.414413 , -16.578193  ]
  },
  {
    name: 'FK',
    coordinates: [ -59.523613 , -51.796253  ]
  },
  {
    name: 'FM',
    coordinates: [ 150.550812 , 7.425554  ]
  },
  {
    name: 'FO',
    coordinates: [ -6.911806  , 61.892635]
  },
  {
    name: 'FR',
    coordinates: [ 2.213749 , 46.227638 ]
  },
  {
    name: 'GA',
    coordinates: [ 11.609444, -0.803689 ]
  },
  {
    name: 'GB',
    coordinates: [ -3.435973  , 55.378051 ]
  },
  {
    name: 'GD',
    coordinates: [ -61.604171 , 12.262776 ]
  },
  {
    name: 'GE',
    coordinates: [43.356892  , 42.315407  ]
  },
  {
    name: 'GF',
    coordinates: [ -53.125782 , 3.933889  ]
  },
  {
    name: 'GG',
    coordinates: [-2.585278  , 49.465691  ]
  },
  {
    name: 'GH',
    coordinates: [-1.023194  , 7.946527 ]
  },
  {
    name: 'GI',
    coordinates: [ -5.345374  , 36.137741 ]
  },
  {
    name: 'GL',
    coordinates: [ -42.604303 ,71.706936   ]
  },
  {
    name: 'GM',
    coordinates: [ -15.310139 , 13.443182 ]
  },
  {
    name: 'GN',
    coordinates: [-9.696645  , 9.945587 ]
  },
  {
    name: 'GP',
    coordinates: [-62.067641   , 16.995971]
  },
  {
    name: 'GQ',
    coordinates: [ 10.267895  , 1.650801  ]
  },
  {
    name: 'GR',
    coordinates: [ 21.824312, 39.074208]
  },
  {
    name: 'GS',
    coordinates: [ -36.587909 , -54.429579  ]
  },
  {
    name: 'GT',
    coordinates: [ -90.230759 ,15.783471   ]
  },{
    name: 'GU',
    coordinates: [144.793731   , 13.444304  ]
  },
  {
    name: 'GW',
    coordinates: [-15.180413   , 11.803749  ]
  },
  {
    name: 'GY',
    coordinates: [-58.93018  , 4.860416 ]
  },
  {
    name: 'GZ',
    coordinates: [ 34.308825  , 31.354676 ]
  },
  {
    name: 'HK',
    coordinates: [114.109497   , 22.396428]
  },
  {
    name: 'HM',
    coordinates: [73.504158  , -53.08181  ]
  },
  {
    name: 'HN',
    coordinates: [-86.241905   ,15.199999  ]
  },
  {
    name: 'HR',
    coordinates: [15.2 , 45.1]
  },
  {
    name: 'HT',
    coordinates: [-72.285215   ,18.971187  ]
  },
  {
    name: 'HU',
    coordinates: [19.503304  , 47.162494  ]
  },
  {
    name: 'ID',
    coordinates: [ 113.921327 , -0.789275 ]
  },
  {
    name: 'IE',
    coordinates: [ -8.24389 ,53.41291 ]
  },
  {
    name: 'IL',
    coordinates: [34.851612  , 31.046051  ]
  },
  {
    name: 'IM',
    coordinates: [-4.548056  , 54.236107  ]
  },
  {
    name: 'IN',
    coordinates: [ 78.96288 , 20.593684 ]
  },
  {
    name: 'IO',
    coordinates: [ 71.876519  ,-6.343194   ]
  },
  {
    name: 'IQ',
    coordinates: [43.679291  , 33.223191  ]
  },
  {
    name: 'IR',
    coordinates: [53.688046  , 32.427908  ]
  },
  {
    name: 'IS',
    coordinates: [ -19.020835 , 64.963051]
  },
  {
    name: 'IT',
    coordinates: [ 12.56738,41.87194   ]
  },
  {
    name: 'JE',
    coordinates: [ -2.13125 , 49.214439 ]
  },
  {
    name: 'JM',
    coordinates: [-77.297508   , 18.109581]
  },
  {
    name: 'JO',
    coordinates: [36.238414  , 30.585164]
  },
  {
    name: 'JP',
    coordinates: [ 138.252924 ,36.204824 ]
  },
  {
    name: 'KE',
    coordinates: [37.906193  , -0.023559  ]
  },
  {
    name: 'KG',
    coordinates: [ 74.766098  , 41.20438]
  },
  {
    name: 'KH',
    coordinates: [104.990963   , 12.565679  ]
  },
  {
    name: 'KI',
    coordinates: [-168.734039    , -3.370417   ]
  },
  {
    name: 'KM',
    coordinates: [   43.872219  ,  -11.875001 ]
  },
  {
    name: 'KN',
    coordinates: [  -62.782998   , 17.357822 ]
  },
  {
    name: 'KP',
    coordinates: [ 127.510093  , 40.339852   ]
  },
  {
    name: 'KR',
    coordinates: [ 127.766922   ,  35.907757]
  },
  {
    name: 'KW',
    coordinates: [  47.481766  , 29.31166  ]
  },
  {
    name: 'KY',
    coordinates: [   -80.566956 ,  19.513469  ]
  },
  {
    name: 'KZ',
    coordinates: [  66.923684  , 48.019573 ]
  },
  {
    name: 'LA',
    coordinates: [ 102.495496   , 19.85627 ]
  },
  {
    name: 'LB',
    coordinates: [  35.862285  ,  33.854721]
  },
  {
    name: 'LC',
    coordinates: [  -60.978893   ,  13.909444 ]
  },
  {
    name: 'LI',
    coordinates: [9.555373    , 47.166   ]
  },
  {
    name: 'LK',
    coordinates: [  80.771797  ,  7.873054  ]
  },
  {
    name: 'LR',
    coordinates: [ -9.429499    , 6.428055   ]
  },
  {
    name: 'LS',
    coordinates: [ 28.233608    , -29.609988   ]
  },
  {
    name: 'LT',
    coordinates: [ 23.881275    , 55.169438  ]
  },
  {
    name: 'LU',
    coordinates: [ 6.129583  , 49.815273   ]
  },
  {
    name: 'LV',
    coordinates: [ 24.603189  , 56.879635 ]
  },
  {
    name: 'LY',
    coordinates: [17.228331 ,26.3351]
  },
  {
    name: 'MA',
    coordinates: [  -7.09262   , 31.791702   ]
  },
  {
    name: 'MC',
    coordinates: [ 7.412841   ,  43.750298]
  },
  {
    name: 'MD',
    coordinates: [ 28.369885  , 47.411631 ]
  },
  {
    name: 'ME',
    coordinates: [19.37439,  42.708678]
  },
  {
    name: 'MG',
    coordinates: [  46.869107 , -18.766947   ]
  },
  {
    name: 'MH',
    coordinates: [ 171.184478   , 7.131474 ]
  },
  {
    name: 'MK',
    coordinates: [  21.745275 ,41.608635]
  },
  {
    name: 'ML',
    coordinates: [  -3.996166  ,  17.570692]
  },
  {
    name: 'MM',
    coordinates: [  95.956223 , 21.913965 ]
  },
  {
    name: 'MN',
    coordinates: [  103.846656 , 46.862496 ]
  },
  {
    name: 'MO',
    coordinates: [   113.543873 ,  22.198745]
  },
  {
    name: 'MP',
    coordinates: [  145.38469 , 17.33083 ]
  },
  {
    name: 'MQ',
    coordinates: [  -61.024174   ,14.641528]
  },
  {
    name: 'MR',
    coordinates: [  -10.940835   , 21.00789 ]
  },
  {
    name: 'MS',
    coordinates: [  -62.187366   ,  16.742498 ]
  },
  {
    name: 'MT',
    coordinates: [  14.375416 ,35.937496  ]
  },
  {
    name: 'MU',
    coordinates: [  57.552152 , -20.348404   ]
  },
  {
    name: 'MV',
    coordinates: [  73.22068 , 3.202778  ]
  },
  {
    name: 'MW',
    coordinates: [  34.301525  ,  -13.254308  ]
  },
  {
    name: 'MX',
    coordinates: [  -102.552784  , 23.634501   ]
  },
  {
    name: 'MY',
    coordinates: [ 101.975766   , 4.210484   ]
  },
  {
    name: 'MZ',
    coordinates: [ 35.529562    ,-18.665695   ]
  },
  {
    name: 'NA',
    coordinates: [  18.49041 , -22.95764   ]
  },
  {
    name: 'NC',
    coordinates: [ 165.618042   , -20.904305   ]
  },
  {
    name: 'NE',
    coordinates: [   8.081666 ,  17.607789]
  },
  {
    name: 'NF',
    coordinates: [167.954712, -29.040835   ]
  },
  {
    name: 'NG',
    coordinates: [  8.675277   , 9.081999 ]
  },
  {
    name: 'NI',
    coordinates: [ -85.207229   , 12.865416 ]
  },
  {
    name: 'NL',
    coordinates: [  5.291266   , 52.132633 ]
  },
  {
    name: 'NO',
    coordinates: [  8.468946   , 60.472024   ]
  },
  {
    name: 'NP',
    coordinates: [ 84.124008    ,  28.394857]
  },
  {
    name: 'NR',
    coordinates: [ 166.931503  ,  -0.522778 ]
  },
  {
    name: 'NU',
    coordinates: [   -169.867233  , -19.054445   ]
  },
  {
    name: 'NZ',
    coordinates: [   174.885971 , -40.900557   ]
  },
  {
    name: 'OM',
    coordinates: [  55.923255  , 21.512583 ]
  },
  {
    name: 'PA',
    coordinates: [ -80.782127   , 8.537981 ]
  },
  {
    name: 'PE',
    coordinates: [  -75.015152   , -9.189967   ]
  },
  {
    name: 'PF',
    coordinates: [  -149.406843  ,  -17.679742  ]
  },
  {
    name: 'PG',
    coordinates: [   143.95555, -6.314993  ]
  },
  {
    name: 'PH',
    coordinates: [121.774017  , 12.879721 ]
  },
  {
    name: 'PK',
    coordinates: [  69.345116 ,  30.375321]
  },
  {
    name: 'PL',
    coordinates: [ 19.145136    , 51.919438  ]
  },
  {
    name: 'PM',
    coordinates: [-56.27111 ,  46.941936]
  },
  {
    name: 'PN',
    coordinates: [  -127.439308  ,  -24.703615  ]
  },
  {
    name: 'PR',
    coordinates: [  -66.590149   , 18.220833 ]
  },
  {
    name: 'PS',
    coordinates: [  35.233154  ,31.952162   ]
  },
  {
    name: 'PT',
    coordinates: [  -8.224454  , 39.399872   ]
  },
  {
    name: 'PW',
    coordinates: [   134.58252  , 7.51498 ]
  },
  {
    name: 'PY',
    coordinates: [ -58.443832   , -23.442503   ]
  },
  {
    name: 'QA',
    coordinates: [  51.183884 ,25.354826  ]
  },
  {
    name: 'RE',
    coordinates: [  55.536384 ,-21.115141   ]
  },
  {
    name: 'RO',
    coordinates: [  24.96676   ,  45.943161 ]
  },
  {
    name: 'RS',
    coordinates: [ 21.005859  , 44.016521 ]
  },
  {
    name: 'RU',
    coordinates: [  105.318756   , 61.52401 ]
  },
  {
    name: 'RW',
    coordinates: [  29.873888 , -1.940278  ]
  },
  {
    name: 'SA',
    coordinates: [   45.079162,23.885942  ]
  },
  {
    name: 'SB',
    coordinates: [  160.156194   , -9.64571  ]
  },
  {
    name: 'SC',
    coordinates: [ 55.491977  , -4.679574  ]
  },
  {
    name: 'SD',
    coordinates: [ 30.217636    , 12.862807  ]
  },
  {
    name: 'SE',
    coordinates: [   18.643501,  60.128161  ]
  },
  {
    name: 'SG',
    coordinates: [  103.819836 , 1.352083  ]
  },
  {
    name: 'SH',
    coordinates: [  -10.030696   , -24.143474  ]
  },
  {
    name: 'SI',
    coordinates: [ 14.995463    , 46.151241 ]
  },
  {
    name: 'SJ',
    coordinates: [   23.670272  ,77.553604    ]
  },
  {
    name: 'SK',
    coordinates: [ 19.699024  , 48.669026 ]
  },
  {
    name: 'SL',
    coordinates: [ -11.779889   , 8.460555 ]
  },
  {
    name: 'SM',
    coordinates: [ 12.457777  , 43.94236   ]
  },
  {
    name: 'SN',
    coordinates: [  -14.452362   ,  14.497401 ]
  },
  {
    name: 'SO',
    coordinates: [ 46.199616  , 5.152149 ]
  },
  {
    name: 'SR',
    coordinates: [   -56.027783 ,3.919305  ]
  },
  {
    name: 'ST',
    coordinates: [ 6.613081   ,  0.18636]
  },
  {
    name: 'SV',
    coordinates: [-88.89653    , 13.794185 ]
  },
  {
    name: 'SY',
    coordinates: [38.996815    , 34.802075 ]
  },
  {
    name: 'SZ',
    coordinates: [ 31.465866    ,  -26.522503 ]
  },
  {
    name: 'TC',
    coordinates: [  -71.797928   , 21.694025 ]
  },

  {
    name: 'TD',
    coordinates: [  18.732207  , 15.454166 ]
  },
  {
    name: 'TF',
    coordinates: [  69.348557 ,  -49.280366 ]
  },
  {
    name: 'TG',
    coordinates: [ 0.824782   , 8.619543   ]
  },
  {
    name: 'TH',
    coordinates: [ 100.992541  ,15.870032   ]
  },
  {
    name: 'TJ',
    coordinates: [ 71.276093    , 38.861034 ]
  },
  {
    name: 'TK',
    coordinates: [  -171.855881  ,  -8.967363 ]
  },

  {
    name: 'TL',
    coordinates: [  125.727539   , -8.874217   ]
  },
  {
    name: 'TM',
    coordinates: [ 59.556278    , 38.969719  ]
  },
  {
    name: 'TN',
    coordinates: [ 9.537499   , 33.886917 ]
  },
  {
    name: 'TO',
    coordinates: [  -175.198242  ,-21.178986    ]
  },
  {
    name: 'TTR',
    coordinates: [35.243322    , 38.963745 ]
  },
  {
    name: 'TT',
    coordinates: [-61.222503     ,  10.691803]
  },

  {
    name: 'TV',
    coordinates: [ 177.64933    , -7.109535  ]
  },
  {
    name: 'TW',
    coordinates: [   120.960515 , 23.69781 ]
  },
  {
    name: 'TZ',
    coordinates: [34.888822 ,  -6.369028  ]
  },

  {
    name: 'UA',
    coordinates: [  31.16558 , 48.379433 ]
  },
  {
    name: 'UG',
    coordinates: [ 32.290275    ,  1.373333]
  },
  /*
  {
    name: 'UM',
    coordinates: [   ,  ]
  },
  */
  {
    name: 'US',
    coordinates: [  -95.712891   , 37.09024  ]
  },
  {
    name: 'UY',
    coordinates: [  -55.765835   ,  -32.522779  ]
  },
  {
    name: 'UZ',
    coordinates: [ 64.585262  , 41.377491 ]
  },
  {
    name: 'VA',
    coordinates: [ 12.453389    , 41.902916  ]
  },
  {
    name: 'VC',
    coordinates: [-61.287228  , 12.984305 ]
  },
  {
    name: 'VE',
    coordinates: [-66.58973    ,  6.42375]
  },
  {
    name: 'VG',
    coordinates: [  -64.639968   , 18.420695 ]
  },
  {
    name: 'VI',
    coordinates: [  -64.896335   , 18.335765   ]
  },
  {
    name: 'VN',
    coordinates: [108.277199     , 14.058324   ]
  },
  {
    name: 'VU',
    coordinates: [  166.959158 , -15.376706  ]
  },
  {
    name: 'WF',
    coordinates: [ -177.156097    , -13.768752   ]
  },
  {
    name: 'WS',
    coordinates: [ -172.104629    , -13.759029   ]
  },
  {
    name: 'XK',
    coordinates: [   20.902977  , 42.602636  ]
  },
  {
    name: 'YE',
    coordinates: [  48.516388  ,  15.552727]
  },
  {
    name: 'YT',
    coordinates: [  45.166244 , -12.8275   ]
  },
  {
    name: 'ZA',
    coordinates: [ 22.937506  , -30.559482   ]
  },
  {
    name: 'ZM',
    coordinates: [ 27.849332  , -13.133897   ]
  },
  {
    name: 'ZW',
    coordinates: [  29.154857 ,  -19.015438 ]
  },
];

console.log(countries);
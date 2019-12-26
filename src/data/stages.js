export const LAYOUTS = {
    simple: 'simple',
    manyInputs: 'manyInputs',
    dragAndDrop: 'dragAndDrop',
    sortable: 'sortable',
    choice: 'choice',
    speech: 'speech',
    quiz: 'quiz',
    table: 'table',
    graph: 'graph',
    editCorrect: 'editCorrect',
    between: 'between'
};

const titles = {}

export default [
    {layout: LAYOUTS.quiz},
    {
        id: 1,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '50 + 10 - 30 = {{30}}'
            },
            {
                question: '90 - 40 + 10 = {{60}}'
            },
            {
                question: '30 + 40 - 50 = {{40}}'
            },
            {
                question: '90 - 40 - 50 = {{0}}'
            },
        ],
    },
    {
        id: 2,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '70 + 30 - 40 = {{60}}'
            },
            {
                question: '20 + 60 - 70 = {{10}}'
            },
            {
                question: '50 + 30 - 40 = {{40}}'
            },
            {
                question: '60 + 10 + 30 = {{100}}'
            },
            {
                question: '70 - 50 + 60 = {{80}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Ukucaj tačan odgovor u aktivno polje! Ako nešto ne znaš, klikni na „Pomoć“.`,
            },
        ]
    },
    {
        id: 3,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [

            {
                question: '20 + 60 - 30 - 10 = {{40}}'
            },
            {
                question: '70 - 40 + 20 + 10 = {{60}}'
            },
            {
                question: '40 + 60 - 20 - 40 = {{40}}'
            },
            {
                question: '70 + 20 - 30 - 60 = {{0}}'
            },
        ],
    },
    {
        id: 4,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Od razlike brojeva 90 i 30 oduzmi 40.`,
        question: "{{input}}",
        answer: 20,
    },
    {
        id: 5,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koji broj je za 30 manji od zbira brojeva 80 i 20?`,
        question: "{{input}}",
        answer: 70,
    },
    {
        id: 6,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Saša ima 50 KM,
         a Nevena 20 KM manje od njega.
          Koliko KM imaju zajedno? `,
        question: "{{input}} KM",
        answer: 80,
    },
    {layout: LAYOUTS.quiz},
    {
        id: 7,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '37 + 2 = {{39}}'
            },
            {
                question: '62 + 5 = {{67}}'
            },
            {
                question: '58 - 6 = {{52}}'
            },
            {
                question: '29 - 7 = {{22}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Sada radimo sabiranje i oduzimanje brojeva unutar desetica,
                 sabiranje dvocifrenih brojeva kad je zbir jedinica datih sabiraka manji ili jednak 10.`,
            },
        ]
    },
    {
        id: 8,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '23 + 6 = {{29}}'
            },
            {
                question: '76 + 3 = {{79}}'
            },
            {
                question: '45 - 4 = {{41}}'
            },
            {
                question: '88 - 6 = {{82}}'
            },
        ],
    },
    {
        id: 9,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '54 + 5 = {{59}}'
            },
            {
                question: '81 + 8 = {{89}}'
            },
            {
                question: '76 - 5 = {{71}}'
            },
            {
                question: '27 - 4 = {{23}}'
            },
        ],
    },
    {
        id: 10,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Broj 97 umanji za 6, a to što dobiješ uvećaj za 8.`,
        question: "{{input}}",
        answer: 99,
    },
    {
        id: 11,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Goran je zasadio u voćnjaku 12 šljiva i 5 jabuka manje nego šljiva.
         Koliko je jabuka i šljiva zasadio ukupno?`,
        question: "{{input}}",
        answer: 19,
    },
    {
        id: 12,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '43 + 15 = {{58}}'
            },
            {
                question: '42 + 27 = {{69}}'
            },
            {
                question: '17 + 22 = {{39}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Sabrali smo jedinice sa jedinicama, desetice sa deseticama`,
            },
        ]
    }, {
        id: 13,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '26 + 32 = {{58}}'
            },
            {
                question: '65 + 34 = {{99}}'
            },
            {
                question: '34 + 26 = {{60}}'
            },
        ],
    },
    {
        id: 13, //todo
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-12.png'),
        questions: [
            {
                question: '7 * {{6}} = 42'
            },
            {
                question: '8 * {{8}} = 64'
            },
            {
                question: '{{9}} * 7 = 63'
            },
            {
                question: '{{9}} * 8 = 72'
            },
            {
                question: '5 * {{9}} = 45'
            },
            {
                question: '8 * {{4}} = 32'
            },
        ],
    }, {
        id: 14,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '45 + 33 = {{78}}'
            },
            {
                question: '52 + 46 = {{98}}'
            },
            {
                question: '19 + 31 = {{50}}'
            },
        ],
    },
    {
        id: 15,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        example: [
            [21, 16, 37],
            [42, 20, 62],
            [63, 36, 99]
        ],
        question: [
            ['52!', 24, '76!'],
            [11, '12!', '23!'],
            [63, 36, 99]
        ],
    },
    {layout: LAYOUTS.quiz},
    {
        id: 16,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        example: [
            [21, 16, 37],
            [42, 20, 62],
            [63, 36, 99]
        ],
        question: [
            ['47!', 21, '76!'],
            [11, '9!', '20!'],
            [58, 30, 88]
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Oduzimanje dvocifrenih brojeva kad su jedinice umanjenika veće ili jednake jedinicama umanjitelja i sabiranje dvocifrenih brojeva kad je zbir jedinica datih sabiraka jednak 10 i odgovarajuća oduzimanja.`,
            },
            {
                layout: LAYOUTS.speech,
                phrase: `Oduzimamo jedinice od jedinica, desetice od desetica.`,
            },
        ]
    },
    {
        id: 17,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '56 - 23 = {{33}}'
            },
            {
                question: '87 - 42 = {{45}}'
            },
            {
                question: '49 - 17 = {{32}}'
            },
        ],
    },
    {
        id: 18,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '98 - 45 = {{53}}'
            },
            {
                question: '39 - 26 = {{13}}'
            },
            {
                question: '77 - 35 = {{42}}'
            },
        ],
    },
    {
        id: 19,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '27 + 33 = {{60}}'
            },
            {
                question: '51 + 19 = {{70}}'
            },
            {
                question: '66 + 34 = {{100}}'
            },
        ],
    },
    {
        id: 20,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '38 + 42 = {{80}}'
            },
            {
                question: '74 + 26 = {{100}}'
            },
            {
                question: '52 + 18 = {{70}}'
            },
        ],
    },
    {
        id: 21,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Ana ima 70 KM. Potrošila je 19 KM. Koliko joj je novca ostalo? `,
        question: "{{input}}",
        answer: 51,
    },
    {
        id: 22,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U rezervoaru automobila je bilo 24 ℓ benzina, naliveno je još 36 ℓ. Koliko litara benzina ima u rezervoaru automobila? `,
        question: "{{input}}",
        answer: 60,
    },
    {
        id: 23,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Hrvoje je naučio recitovati pjesmu od 30 stihova, a Jasmina pjesmu 13 stihova kraću. Koliko stihova ima Jasminina pjesma? `,
        question: "{{input}}",
        answer: 17,
    },

    {
        id: 24,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        example: [
            [21, 16, 37],
            [42, 20, 62],
            [63, 36, 99]
        ],
        question: [
            ['-!', '23!', '45!', '34!'],
            ['58!', 35, 13, 24],
            ['89!', 66, 44, 55]
        ],
    },
    {
        id: 25,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        example: [
            [21, 16, 37],
            [42, 20, 62],
            [63, 36, 99]
        ],
        question: [
            ['+!', '26!', '13', '27!'],
            ['72!', 98, 86, 99],
            ['33!', 59, 47, 60]
        ],
    },
    {
        id: 26,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '87 - {{35}} = 52'
            },
            {
                question: '65 - {{42}} = 23'
            },
        ],
    },
    {layout: LAYOUTS.quiz},
    {
        id: 27,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '78 - {{46}} = 32'
            },
            {
                question: '90 - {{64}} = 26'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Sabiranje dvocifrenih brojeva kad je zbir jedinica datih sabiraka veći od 10`,
            },
        ]
    },
    {
        id: 28,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '27 + {{48}} = 72'
            },
            {
                question: '43 + {{28}} = 62'
            },
            {
                question: '48 + {{39}} = 87'
            },
        ],
    },
    {
        id: 29,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '19 + 58 = {{77}}'
            },
            {
                question: '27 + 45 = {{72}}'
            },
            {
                question: '44 + 29 = {{73}}'
            },
        ],
    },
    {
        id: 30,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '39 + 27 = {{66}}'
            },
            {
                question: '43 + 38 = {{81}}'
            },
            {
                question: '56 + 28 = {{84}}'
            },
        ],
    },
    {
        id: 31,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `.Prošlo je 39 radnih dana od početka školske godine. Do zimskog raspusta je
ostalo 48 radnih dana. Koliko ima radnih dana u prvom polugodištu? `,
        question: "{{input}}",
        answer: '87 dana',
    },
    {
        id: 32,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Ema je pročitala 28 stranica jedne knjige, a ostalo je još 35 stranica da pročita cijelu knjigu. Koliko stranica ima knjiga koju čita Ema? `,
        question: "{{input}}",
        answer: '63 stranice',
    },

    {
        id: 33,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Uvećaj broj 47 za 25`,
        question: "{{input}}",
        answer: 72,
    },
    {
        id: 34,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        question: [
            ['+!', '19!', '28!', '37!'],
            ['56!', 75, 84, 93],
            [43, 62, 71, 80],
            ['25!', 66, 44, 55]
        ],
    },
    {
        id: 35,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U jednoj košari ima 29 jabuka. Ako prebacimo 9 jabuka u drugu košaru, u obje
košare imat ćemo jednak broj jabuka. Koliko je jabuka bilo u drugoj košari?
Koliko jabuka ima u obje košare zajedno?
`,
        question: "{{input}}",
        answer: '11 i 40',
    },
    {layout: LAYOUTS.quiz},
    {
        id: 36,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '53 - 28 = {{25}}'
            },
            {
                question: '36 + 19 = {{17}}'
            },
            {
                question: '74 - 46 = {{27}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Oduzimanje dvocifrenih brojeva kad su jedinice umanjenika manje od jedinica umanjitelja`,
            },
        ]
    },
    {
        id: 37,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '82 - 48 = {{34}}'
            },
            {
                question: '65 - 29 = {{36}}'
            },
            {
                question: '93 - 66 = {{27}}'
            },
        ],
    },
    {
        id: 38,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '92 - 47 = {{45}}'
            },
            {
                question: '51 - 26 = {{25}}'
            },
            {
                question: '42 - 27 = {{15}}'
            },
        ],
    },
    {
        id: 39,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        question: [
            ['umanjenik!', '69!', '37!', '73!', '47!', '63!', '42!', '81'],
            ['umanjitelj!', '18!', '21!', '26', '29!', '37!', '26', '37'],
            ['razlika!', 51, 16, 47, 19, 26, 16, 44],
        ],
    },
    {
        id: 40,
        layout: LAYOUTS.graph,
        tree: {
            elem: '31',
            children: [
                {
                    elem: '+!',
                    children: [
                        {
                            elem: '57!',
                        },
                        {
                            elem: '26!',
                        }
                    ]
                },
            ]
        }
    },
    {
        id: 41,
        layout: LAYOUTS.graph,
        tree: {
            elem: '17!',
            children: [
                {
                    elem: '-!',
                    children: [
                        {
                            elem: '43!',
                        },
                        {
                            elem: '26',
                        }
                    ]
                },
            ]
        }
    },
    {
        id: 42,
        layout: LAYOUTS.graph,
        tree: {
            elem: '83!',
            children: [
                {
                    elem: '+!',
                    children: [
                        {
                            elem: '27!',
                        },
                        {
                            elem: '56',
                        }
                    ]
                },
            ]
        }
    },
    {
        id: 43,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Za koliko je broj 82 veći od broja 38? 
`,
        question: "{{input}}",
        answer: 44,
    },
    {
        id: 44,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Trgovac je imao 100 kg jabuka. Prodao je 57 kg. Koliko mu je kilograma jabuka ostalo? 
`,
        question: "{{input}}",
        answer: 43,
    },
    {layout: LAYOUTS.quiz},
    {
        id: 45,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '28 + 36 + 24 + 12 = {{100}}'
            },
            {
                question: '45+ 29 + 11 + 15 = {{100}}'
            },
            {
                question: '86- 42 + 36 - 27 = {{53}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Brojni izrazi sa sabiranjem i oduzimanjem više brojeva bez zagrada i sa zagradama`,
            },
            {
                layout: LAYOUTS.speech,
                phrase: `Grupisanje sabiraka zovemo zakon asocijacije.
Grupišući sabirke brzo ćemo izračunati ove zbirove. Ovo su brojni izrazi.`,
            },
        ]
    },
    {
        id: 46,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '14 + 38 + 36 = {{88}}'
            },
            {
                question: '45 + 33 + 15 = {{93}}'
            },
            {
                question: '97 - 28 - 59 = {{10}}'
            },
        ],
    },
    {
        id: 47,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Od broja 92 oduzmi zbir brojeva 36 i 25 
`,
        question: "{{input}}",
        answer: 31,
    },
    {
        id: 48,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Broju 56 dodaj razliku brojeva 65 i 37`,
        question: "{{input}}",
        answer: 84,
    },
    {
        id: 49,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '75 - (49 - 24) = {{50}}'
            },
            {
                question: '57 + (38 - 24) = {{71}}'
            },
            {
                question: '98 - (56 - 27 ) = {{69}}'
            },
        ],
    },
    {
        id: 50,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-01.png'),
        questions: [
            {
                question: '77 - (35 + 8) = {{34}}'
            },
            {
                question: '82 - (26 + 14) = {{69}}'
            },
            {
                question: '(52 + 24) - 46 = {{30}}'
            },
        ],
    },
    {
        id: 51,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U prvi razred upisano je 28 učenika, u drugi razred 36 učenika a u treći razred 12 učenika manje nego u drugi razred. Koliko je upisano učenika u prva tri razreda?`,
        question: "{{input}}",
        answer: 88,
    },
    {
        id: 52,
        layout: LAYOUTS.editCorrect,
        text: `Upotrijebi zagrade tako da izraz:
93-(42+19)
bude jednak 32.
`,
        question: "93-42+19",
        answer: '93-(42+19)'
    },
    {layout: LAYOUTS.quiz},
    {
        id: 53,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `x+23=65 
`,
        question: "{{input}}",
        answer: 'x=42',
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Rješavanje jednostavnijih jednačina i tekstualni zadaci`,
            },
        ]
    },
    {
        id: 54,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `72+x=100 
`,
        question: "{{input}}",
        answer: 'x=42',
    },
    {
        id: 55,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `29+n=56 
`,
        question: "{{input}}",
        answer: 'n=27',
    },
    {
        id: 56,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `n-42=26 
`,
        question: "{{input}}",
        answer: 'n=68',
    },
    {
        id: 57,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `n-36=48
`,
        question: "{{input}}",
        answer: 'n=84',
    },
    {
        id: 58,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `x-31=56
`,
        question: "{{input}}",
        answer: 'x=87',
    },
    {
        id: 59,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `70-x=25
`,
        question: "{{input}}",
        answer: 'x=45',
    },
    {
        id: 60,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `69-n=27
`,
        question: "{{input}}",
        answer: 'n=42',
    },
    {
        id: 61,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `100-n=45`,
        question: "{{input}}",
        answer: 'n=55',
    },
    {
        id: 62,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Umanjitelj je 27 i razlika je 54. Koliki je umanjenik? `,
        question: "{{input}}",
        answer: 81,
    },
    {
        id: 63,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koji broj možeš oduzeti od broja 72 i dobiti broj 43? `,
        question: "{{input}}",
        answer: 29,
    },
    {
        id: 64,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U autobusu ima 45 putnika. Među putnicima je 36 djece. Koliko ima odraslih?`,
        question: "{{input}}",
        answer: 9,
    },
    {
        id: 65,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Krojač u jednoj kutiji ima 68 dugmadi a u drugoj 24.
         Za jedno odijelo je potrošio 12 dugmadi iz jedne kutije i 14 dugmadi iz druge kutije.
          Koliko mu je ukupno dugmadi ostalo?`,
        question: "{{input}}",
        answer: 66,
    },
    {
        id: 66,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U jednoj korpi ima 37 kg grožđa a u drugoj 9 kg manje.
         Koliko ima grožđa u obje korpe zajedno? `,
        question: "{{input}}",
        answer: 65,
    },
    {
        id: 67,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U horu pjeva 28 dječaka i 14 djevojčica više nego dječaka.
         Izračunaj koliko u horu pjeva dječaka i djevojčica zajedno`,
        question: "{{input}}",
        answer: 70,
    },
    {layout: LAYOUTS.quiz},
    {
        id: 68,
        layout: LAYOUTS.manyInputs,
        direction: 'row',
        title: require('../assets/image/headline/headline-09.png'),
        text: `Rimskim znakovima napiši mjesece jeseni.`,
        questions: [
            {
                question: '{{IX}}'
            },
            {
                question: '{{X}}'
            },
            {
                question: '{{XI}}'
            }
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Rimski, redni brojevi i stotice prve hiljade
`,
            },
        ]
    },
    {
        id: 69,
        layout: LAYOUTS.manyInputs,
        direction: 'row',
        title: require('../assets/image/headline/headline-09.png'),
        text: `Ispiši rimskim znakovima date brojeve:`,
        questions: [
            {
                question: '12 {{XII}}'
            },
            {
                question: '8 {{XIII}}'
            },
            {
                question: '15 {{XV}}'
            },
            {
                question: '17 {{XVII}}'
            },
            {
                question: '19 {{XIX}}'
            }
        ],
    },
    {
        id: 70,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Rimskim znakovima ispiši datum nezavisnosti Bosne i Hercegovine.`,
        question: "{{input}}",
        answer: 'III',
    },
    {
        id: 71,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Broj 54 napiši riječima.`,
        question: "{{input}}",
        answer: 'pedeset četvrti',
    },
    {
        id: 71,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Broj 54 napiši riječima.`,
        question: "{{input}}",
        answer: 'pedeset četvrti',
    },
    {
        id: 72,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Broj 2 napiši riječima.`,
        question: "{{input}}",
        answer: 'drugi',
    },
    {
        id: 73,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koliko stotica ima broj 800?`,
        question: "{{input}}",
        answer: 8,
    },
    {
        id: 74,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koliko desetica ima broj 300?`,
        question: "{{input}}",
        answer: 30,
    },
    {
        id: 75,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Ispiši stotice n tako da je 300< n <500.`,
        question: "{{input}}",
        answer: 'n=400',
    },
    {
        id: 76,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Napiši najmanji trocifreni (troznamenkasti) broj.`,
        question: "{{input}}",
        answer: 100,
    },
    {
        id: 77,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Napiši najveći dvocifreni (dvoznamenkast) broj.`,
        question: "{{input}}",
        answer: 99,
    },

    {layout: LAYOUTS.quiz}, //kviz 9
    {
        id: 78,
        title: require('../assets/image/headline/headline-11.png'),
        layout: LAYOUTS.between,
        text: 'Pored svakog tijela zaokruži tačan odgovor:',
        question: {
            text: 'Tijelo je',
            img: require('../assets/image/elements/09-01.png'),
            answers: [
                {
                    text: 'Uglasto',
                    right: false,
                },
                {
                    text: 'Oblo',
                    right: true
                }
            ]
        },
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Ravne i zakrivljene plohe (površine), likovi i linije`,
            },
        ]
    },
    {
        id: 79,
        layout: LAYOUTS.choice,
        title: require('../assets/image/headline/headline-11.png'),
        text: `Kakve su ivice uglastih tijela?`,
        items: [
            {
                placeholder: 'prave linije',
                right: true,
            },
            {
                placeholder: `zakrivljene linije?`,
                right: false
            },
        ],
    },
    {
        id: 80,
        layout: LAYOUTS.choice,
        title: require('../assets/image/headline/headline-11.png'),
        text: `Kakve su ivice uglastih tijela?`,
        items: [
            {
                placeholder: 'prave linije',
                right: false,
            },
            {
                placeholder: `zakrivljene linije?`,
                right: true
            },
        ],
    },
    // todo
    {
        layout: LAYOUTS.quiz //kviz 10
    },
    {
        id: 81,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Kako se zovu brojevi koji se množe?`,
        question: "{{input}}",
        answer: 'faktori (činioci)',
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Množenje faktorima (činiocima) 2 i 3 `,
            },
        ]
    },
    {
        id: 82,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Kako se zove rezultat množenja?`,
        question: "{{input}}",
        answer: 'proizvod (produkt)',
    },
    {
        id: 83,
        layout: LAYOUTS.manyInputs,
        direction: 'row',
        title: require('../assets/image/headline/headline-09.png'),
        text: `Rimskim znakovima napiši mjesece jeseni.`,
        questions: [
            {
                question: '5 x 2 = {{10}}'
            },
            {
                question: '7 * 2 = {{14}}'
            },
            {
                question: '9 * 2 = {{18}}'
            }
        ],
    },

    {
        id: 84,
        layout: LAYOUTS.manyInputs,
        direction: 'row',
        title: require('../assets/image/headline/headline-09.png'),
        text: `Rimskim znakovima napiši mjesece jeseni.`,
        questions: [
            {
                question: '6 x 3 = {{18}}'
            },
            {
                question: '9 * 3 = {{27}}'
            },
            {
                question: '10 * 3 = {{30}}'
            }
        ],
    },
    {
        id: 85,
        layout: LAYOUTS.manyInputs,
        direction: 'row',
        title: require('../assets/image/headline/headline-09.png'),
        text: `Rimskim znakovima napiši mjesece jeseni.`,
        questions: [
            {
                question: '6 x 2 = {{12}}'
            },
            {
                question: '7 * 3 = {{21}}'
            },
            {
                question: '8 * 2 = {{16}}'
            }
        ],
    },
    {
        id: 86,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U voćnjaku ima 7 redova stabala šljive.
         U svakom redu ima po 3 stabla.
         Koliko ima stabala šljive u tom voćnjaku?`,
        question: "{{input}}",
        answer: 21,
    },
    {
        id: 87,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: ` Na jednom parkiralištu ima 8 redova automobila.
         U 5 redova su po 3 automobila, a u 3 reda su po dva automobila.
          Koliko je automobila na tom parkiralištu?`,
        question: "{{input}}",
        answer: 21,
    },
    {
        id: 88,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `U jednakost upiši nedostajuće brojeve:`,
        questions: [
            {
                question: '2 x 10 = {{20}}'
            },
            {
                question: '4 * 3 = {{12}}'
            },
            {
                question: '7 * 2 = {{14}}'
            }
        ],
    },
    {
        id: 89,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `U jednakost upiši nedostajuće brojeve:`,
        questions: [
            {
                question: '3 x 7 = {{21}}'
            },
            {
                question: '2 * 9 = {{18}}'
            },
            {
                question: '3 * 8 = {{24}}'
            }
        ],
    },
    {layout: LAYOUTS.quiz}, // kviz 11
    {
        id: 90,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `U jednakost upiši nedostajuće brojeve:`,
        questions: [
            {
                question: '3 x 4 = {{12}}'
            },
            {
                question: '5 * 4 = {{20}}'
            },
            {
                question: '7 * 4= {{20}}'
            }
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Množenje faktorima (činiocima) 2, 3, 4 i 5`,
            },
        ]
    },
    {
        id: 91,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `U jednakost upiši nedostajuće brojeve:`,
        questions: [
            {
                question: '8 x 4 = {{20}}'
            },
            {
                question: '9 * 4 = {{36}}'
            },
            {
                question: '10 * 4 = {{40}}'
            }
        ],
    },
    {
        id: 92,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `U jednakost upiši nedostajuće brojeve:`,
        questions: [
            {
                question: '3 x 5 = {{15}}'
            },
            {
                question: '5 * 5 = {{25}}'
            },
            {
                question: '7 * 5 = {{35}}'
            }
        ],
    },
    {
        id: 93,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `U jednakost upiši nedostajuće brojeve:`,
        questions: [
            {
                question: '8 x 5 = {{40}}'
            },
            {
                question: '9 * 5 = {{45}}'
            },
            {
                question: '10 * 5 = {{50}}'
            }
        ],
    },
    {
        id: 94,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '4 x 9 = {{36}}'
            },
            {
                question: '3 * 8 = {{24}}'
            },
            {
                question: '4 * 7 = {{28}}'
            }
        ],
    },
    {
        id: 95,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '4 x 5 = {{20}}'
            },
            {
                question: '7 * 3 = {{21}}'
            },
            {
                question: '8 * 4 = {{32}}'
            }
        ],
    },
    {
        id: 96,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '5 x 7 = {{35}}'
            },
            {
                question: '5 * 6 = {{30}}'
            },
            {
                question: '3 * 9 = {{27}}'
            }
        ],
    },
    {
        id: 97,
        layout: LAYOUTS.manyInputs,
        title: 'Napiši broj!',
        direction: 'row',
        questions: [
            {
                question: `4 puta veći 
                od broja 7 {{28}}`,
                separator: {
                    src: require('../assets/image/11-08.png'),
                    width: '1rem'
                }
            },
            {
                question: `za 4 veći
                 od broja  7 {{11}}`,
                separator: {
                    src: require('../assets/image/11-08.png'),
                    width: '1rem'
                }
            },
        ],
    },
    {
        id: 98,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U učionici ima tri reda klupa,
         u svakom redu je 5 klupa,
         a u svakoj klupi sjede po dva učenika.
         Koliko ima učenika u toj učionici?`,
        question: "{{input}}",
        answer: 30,
    },
    {
        id: 99,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Radnik radi dnevno 8 sati.
         Koliko sati radnik radi za 5 dana?`,
        question: "{{input}}",
        answer: 40,
    },
    {
        id: 100,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Mama je kupila 2 kg malina po 5 KM,
         3 kg jagoda po 4 KM i 3kg limuna po 5 KM.
         Koliko je novca potrošila mama?`,
        question: "{{input}}",
        answer: '37 KM',
    },
    {layout: LAYOUTS.quiz},
    {
        id: 101,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '4 x 6 = {{24}}'
            },
            {
                question: '7 * 6 = {{42}}'
            },
            {
                question: '9 * 6 = {{54}}'
            },
            {
                question: '10 * 6 = {{60}}'
            }
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Množenje faktorima (činiocima) 6, 7 i 8`,
            },
        ]
    },
    {
        id: 102,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '5 x 7 = {{35}}'
            },
            {
                question: '9 * 7 = {{63}}'
            },
            {
                question: '8 * 7 = {{56}}'
            },
            {
                question: '7 * 7 = {{49}}'
            }
        ],
    },
    {
        id: 103,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '8 x 8 = {{64}}'
            },
            {
                question: '9 * 8 = {{72}}'
            },
            {
                question: '5 * 8 = {{40}}'
            },
            {
                question: '6 * 8 = {{48}}'
            }
        ],
    },
    {
        id: 104,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koliko puta sabiremo broj 7 da dobijemo 42?`,
        question: "{{input}}",
        answer: '6 puta',
    },
    {
        id: 105,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U jednu prodavnicu dnevno dolazi 3 puta po 3 gajbe hljeba.
         U svakoj gajbi je 8 hljebova.
          Koliko dnevno dolazi hljebova u tu prodavnicu?`,
        question: "{{input}}",
        answer: 72,
    },
    {
        id: 106,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        question: [
            ['*!', '4!', '5!', '6!', '7!', '8!'],
            ['5!', 20, 25, 30, 45, 40],
            ['7!', 28, 35, 42, 49, 56],
            ['8!', 32, 40, 48, 56, 64],
            ['6!', 24, 30, 36, 42, 48],
            ['4!', 16, 20, 24, 28, 32],
        ],
    },
    {
        id: 107,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '7 * {{6}} = 42'
            },
            {
                question: '8 * {{8}} = 64'
            },
            {
                question: '{{9}} * 7 = 63'
            },
            {
                question: '{{9}} * 8 = 72'
            },
            {
                question: '5 * {{9}} = 45'
            },
            {
                question: '8 * {{4}} = 32'
            }
        ],
    },
    {
        id: 108,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koji broj je 8 puta veći od 9?`,
        question: "{{input}}",
        answer: 72,
    },
    {layout: LAYOUTS.quiz}, // kviz
    {
        id: 109,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '4 * 9 = {{36}}'
            },
            {
                question: '7 * 9 = {{63}}'
            },
            {
                question: '9 * 9 = {{81}}'
            },
            {
                question: '10 * 9 = {{90}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Množenje faktorima (činiocima) 9, 10, 1 i 0`,
            },
        ]
    },
    {
        id: 110,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '5 * 9 = {{45}}'
            },
            {
                question: '10 * 0 = {{0}}'
            },
            {
                question: '8 * 0 = {{0}}'
            },
            {
                question: '7 * 1 = {{1}}'
            },
        ],
    },
    {
        id: 111,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '8 * 9 = {{72}}'
            },
            {
                question: '0 * 8 = {{0}}'
            },
            {
                question: '1 * 10 = {{10}}'
            },
            {
                question: '6 * 10 = {{60}}'
            },
        ],
    },
    {
        id: 112,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        question: [
            ['*!', '4!', '6!', '7!', '9!'],
            [3, 12, 18, 21, 27],
            [6, 24, 36, 42, 54],
            [7, 28, 42, 49, 63],
            [9, 36, 54, 63, 81],
        ],
    },
    {
        id: 113,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        question: [
            ['*!', '5!', '7!', '3!', '4!'],
            [8, 40, 56, 24, 32],
            [2, 10, 14, 6, 8],
            [9, 45, 63, 27, 36],
            [6, 30, 42, 18, 24],
        ],
    },
    {
        id: 114,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '36 * {{1}} = 36'
            },
            {
                question: '18 * {{0}} = 0'
            },
            {
                question: '{{89}} * 1 = 89'
            },
            {
                question: '{{1}} * 1 = 1'
            },
        ],
    },
    {
        id: 108,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Trgovac je prodao 8 kartona po 10 litara ulja,
         ostalo mu je još 7 litara.
          Koliko je litara ulja imao trgovac?`,
        question: "{{input}}",
        answer: '87 litara',
    },
    {
        id: 115,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '4 * {{7}} = 28'
            },
            {
                question: '7 * {{8}} = 56'
            },
            {
                question: '9 * {{0}} = 0'
            },
            {
                question: '{{9}} * 6 = 54'
            },
            {
                question: '{{10}} * 1 = 10'
            },
            {
                question: '{{1}} * 19 = 19'
            },
        ],
    },
    {layout: LAYOUTS.quiz}, // kviz 14
    {
        id: 116,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '8 : 2 = {{28}}'
            },
            {
                question: '14 : 2 = {{56}}'
            },
            {
                question: '20 : 2 = {{10}}'
            },
            {
                question: '16 : 2 = {{8}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Dijeljenje brojevima 2, 3 i 4
`,
            },{
                layout: LAYOUTS.speech,
                phrase: `Dijeljenje je suprotna računska radnja množenju.
18:2=9 jer je 9•2=18
`,
            },
        ]
    },
    {
        id: 117,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '21 : 3 = {{7}}'
            },
            {
                question: '18 : 3 = {{6}}'
            },
            {
                question: '15 : 3 = {{5}}'
            },
            {
                question: '27 : 3 = {{9}}'
            },
        ],
    },
    {
        id: 118,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '20 : 4 = {{5}}'
            },
            {
                question: '24 : 4 = {{6}}'
            },
            {
                question: '32 : 4 = {{8}}'
            },
            {
                question: '28 : 4 = {{7}}'
            },
        ],
    },
    {
        id: 119,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Dijeljenik je 36, djelitelj (djelilac) je 4.
         Odrediti količnik (kvocijent)`,
        question: "{{input}}",
        answer: 9,
    },
    {
        id: 120,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U jatu ima 16 gusaka.
         Lete u parovima. Koliko ima parova?`,
        question: "{{input}}",
        answer: 8,
    },
    {
        id: 121,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koliko je puta broj 36 veći od broja 4?`,
        question: "{{input}}",
        answer: '9 puta',
    },
    {
        id: 122,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Mljekarica sipa 20 l mlijeka u flaše od 2 l.
         Koliko treba flaša?`,
        question: "{{input}}",
        answer: 10,
    },
    {
        id: 123,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Učiteljica je podijelila 27 učenika u grupe po 3 učenika.
         Koliko je bilo grupa?`,
        question: "{{input}}",
        answer: 9,
    },
    {layout: LAYOUTS.quiz}, // kviz 15
    {
        id: 124,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '10 : 5 = {{2}}'
            },
            {
                question: '25 : 5 = {{5}}'
            },
            {
                question: '40 : 5 = {{8}}'
            },
            {
                question: '35 : 5 = {{7}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Dijeljenje brojevima 4, 5 i 10`,
            },
        ]
    },
    {
        id: 125,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '30 : 10 = {{3}}'
            },
            {
                question: '28 : 4 = {{7}}'
            },
            {
                question: '40 : 4 = {{10}}'
            },
            {
                question: '40 : 10 = {{4}}'
            },
        ],
    },
    {
        id: 126,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '20 : 10 = {{2}}'
            },
            {
                question: '60 : 10 = {{6}}'
            },
            {
                question: '32 : 4 = {{8}}'
            },
            {
                question: '80 : 10 = {{8}}'
            },
        ],
    },
    {
        id: 127,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Imaš 35 ruža. Napravi 5 jednakih buketa. Koliko će ruža biti u jednom buketu?`,
        question: "{{input}}",
        answer: '7 ruža',
    },
    {
        id: 128,
        layout: LAYOUTS.graph,
        tree: {
            elem: '5',
            children: [
                {
                    elem: ':!',
                    children: [
                        {
                            elem: '25!',
                        },
                        {
                            elem: '5',
                        }
                    ]
                },
            ]
        }
    },
    {
        id: 129,
        layout: LAYOUTS.graph,
        tree: {
            elem: '9',
            children: [
                {
                    elem: ':!',
                    children: [
                        {
                            elem: '45!',
                        },
                        {
                            elem: '5',
                        }
                    ]
                },
            ]
        }
    },
    {
        id: 130,
        layout: LAYOUTS.graph,
        tree: {
            elem: '8',
            children: [
                {
                    elem: ':!',
                    children: [
                        {
                            elem: '10!',
                        },
                        {
                            elem: '80',
                        }
                    ]
                },
            ]
        }
    },
    {
        id: 131,
        layout: LAYOUTS.graph,
        tree: {
            elem: '7',
            children: [
                {
                    elem: ':!',
                    children: [
                        {
                            elem: 28,
                        },
                        {
                            elem: '4!',
                        }
                    ]
                },
            ]
        }
    },
    {
        id: 132,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koliko je puta broj 5 manji od broja 45?`,
        question: "{{input}}",
        answer: '9 puta',
    },
    {
        id: 133,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '32 : 4 = {{8}}'
            },
            {
                question: '45 : 5 = {{9}}'
            },
            {
                question: '60 : 10 = {{6}}'
            },
        ],
    },
    {
        id: 134,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '32 : 4 = {{8}}'
            },
            {
                question: '30 : 5 = {{6}}'
            },
            {
                question: '80 : 10 = {{8}}'
            },
        ],
    },
    {
        id: 135,
        layout: LAYOUTS.dragAndDrop,
        question: "30:5{{drop(<)}}28:4",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 136,
        layout: LAYOUTS.dragAndDrop,
        question: "60:10{{drop(=)}}24:4",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 137,
        layout: LAYOUTS.dragAndDrop,
        question: "36:4{{drop(=)}}45:5",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 138,
        layout: LAYOUTS.dragAndDrop,
        question: "40:5{{drop(<)}}35:5",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 139,
        layout: LAYOUTS.dragAndDrop,
        question: "70:10{{drop(=)}}28:4",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 140,
        layout: LAYOUTS.dragAndDrop,
        question: "20:4{{drop(=)}}25:5",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {layout: LAYOUTS.quiz},
    {
        id: 141,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '18 : 6 = {{3}}'
            },
            {
                question: '30 : 6 = {{5}}'
            },
            {
                question: '42 : 6 = {{7}}'
            },
            {
                question: '54 : 6 = {{9}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Dijeljenje brojevima 6, 7 i 8`,
            },
        ]
    },
    {
        id: 142,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '21 : 7 = {{3}}'
            },
            {
                question: '35 : 7 = {{5}}'
            },
            {
                question: '49 : 7 = {{7}}'
            },
            {
                question: '63 : 7 = {{9}}'
            },
        ],
    },
    {
        id: 143,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '24 : 8 = {{3}}'
            },
            {
                question: '40 : 8 = {{5}}'
            },
            {
                question: '48 : 8 = {{6}}'
            },
            {
                question: '72 : 8 = {{9}}'
            },
        ],
    },
    {
        id: 144,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koji je broj 8 puta manji od broja 64?`,
        question: "{{input}}",
        answer: 8,
    },
    {
        id: 145,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Baštovan sadi 54 tulipana u 6 redova tako da u svakom redu ima isti broj tulipana.
         Koliko je tulipana u redu?`,
        question: "{{input}}",
        answer: 9,
    },
    {
        id: 146,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '48 : 6 = {{8}}'
            },
            {
                question: '63 : 7 = {{9}}'
            },
            {
                question: '56 : 8 = {{7}}'
            },
        ],
    },
    {
        id: 147,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '48 : 6 = {{8}}'
            },
            {
                question: '63 : 7 = {{9}}'
            },
            {
                question: '56 : 8 = {{7}}'
            },
        ],
    },
    {
        id: 148,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '72 : 8 = {{9}}'
            },
            {
                question: '56 : 7 = {{8}}'
            },
            {
                question: '63 : 9 = {{7}}'
            },
        ],
    },
    {
        id: 149,
        layout: LAYOUTS.dragAndDrop,
        question: "24:6{{drop(<)}}42:7",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 150,
        layout: LAYOUTS.dragAndDrop,
        question: "48:8{{drop(<)}}54:6",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 151,
        layout: LAYOUTS.dragAndDrop,
        question: "42:6{{drop(=)}}49:7",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 152,
        layout: LAYOUTS.dragAndDrop,
        question: "42:6{{drop(=)}}49:7",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 153,
        layout: LAYOUTS.dragAndDrop,
        question: "72:8{{drop(=)}}45=6",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 154,
        layout: LAYOUTS.dragAndDrop,
        question: "36:6{{drop(>)}}32:8",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 155,
        layout: LAYOUTS.dragAndDrop,
        question: "64:8{{drop(>)}}48:6",
        items: [
            {
                placeholder: '<',
                id: 1,
            },
            {
                placeholder: '=',
                id: 2
            },
            {
                placeholder: '>',
                id: 3
            }
        ],
    },
    {
        id: 156,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Radnik je radio 7 dana. Svaki dan je radio isti broj sati i odradio je 63 sata.
         Koliko je sati radio dnevno?`,
        question: "{{input}}",
        answer: 9,
    },
    {layout: LAYOUTS.quiz},
    {
        id: 157,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '18 : 9 = {{2}}'
            },
            {
                question: '27 : 9 = {{3}}'
            },
            {
                question: '36 : 9 = {{4}}'
            },
            {
                question: '54 : 9 = {{6}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Dijeljenje brojem 9 i tablica dijeljenja`,
            },
        ]
    },
    {
        id: 158,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '81 : 9 = {{9}}'
            },
            {
                question: '72 : 9 = {{8}}'
            },
            {
                question: '63 : 9 = {{7}}'
            },
            {
                question: '90 : 9 = {{10}}'
            },
        ],
    },
    {
        id: 159,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        question: [
            ['*!', '6!', '7!', '9!', '5!', '4!'],
            [7, 42, 49, 63, 35, 28],
            [8, 48, 56, 72, 40, 32],
            [9, 54, 63, 81, 45, 36],
            [4, 24, 28, 36, 20, 16],
            [6, 36, 42, 54, 30, 20],
        ],
    },
    {
        id: 160,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koliko ćeš buketa dobiti od 54 ruže ako u svakom buketu imaš 9 ruža?`,
        question: "{{input}}",
        answer: 6,
    },
    {
        id: 161,
        layout: LAYOUTS.graph,
        tree: {
            elem: '27',
            children: [
                {
                    elem: '+!',
                    children: [
                        {
                            elem: '18!',
                        },
                        {
                            elem: 9,
                            children: [
                                {
                                    elem: ':!',
                                    children: [
                                        {
                                            elem: '54!',
                                        },
                                        {
                                            elem: '6',
                                        }
                                    ]
                                }
                            ],
                        }
                    ]
                },
            ]
        }
    },

    {
        id: 161,
        layout: LAYOUTS.graph,
        tree: {
            elem: 42,
            children: [
                {
                    elem: '+!',
                    children: [
                        {
                            elem: '35!',
                        },
                        {
                            elem: 7,
                            children: [
                                {
                                    elem: ':!',
                                    children: [
                                        {
                                            elem: '49!',
                                        },
                                        {
                                            elem: '7',
                                        }
                                    ]
                                }
                            ]

                        }
                    ]
                },
            ]
        }
    },
    {
        id: 162,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        question: [
            ['a!', '21!', '14!', '35!', '56!', '63!', '42!', '0', '7'],
            ['a:7!', 3, 2, 5, 8, 9, 6, 0, 49],
        ],
    },
    {
        id: 163,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        question: [
            ['x!', '18!', '36!', '42!', '54!', '30!', '48!', '60!', '6!'],
            ['a:7!', 3, 6, 7, 9, 5, 8, 10, 1],
        ],
    },
    {layout: LAYOUTS.quiz},
    {
        id: 164,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `9 • x = 63`,
        question: "{{input}}",
        answer: 'x=7',
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Jednačine sa množenjem i dijeljenjem`,
            },
        ]
    },
    {
        id: 165,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `8 • n = 40`,
        question: "{{input}}",
        answer: 'n=5',
    },
    {
        id: 166,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `6 • a = 42`,
        question: "{{input}}",
        answer: 'a=7',
    },
    {
        id: 167,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `4 • b = 28`,
        question: "{{input}}",
        answer: 'b=7',
    },
    {
        id: 168,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `a : 8 = 9`,
        question: "{{input}}",
        answer: 'a=72',
    },
    {
        id: 169,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `x : 5 = 7`,
        question: "{{input}}",
        answer: 'x=35',
    },
    {
        id: 170,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `n : 3 = 8`,
        question: "{{input}}",
        answer: 'b=24',
    },
    {
        id: 171,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `b : 7 = 6`,
        question: "{{input}}",
        answer: 'b=42',
    },
    {
        id: 172,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `32 : x = 4`,
        question: "{{input}}",
        answer: 'b=42',
    },
    {
        id: 173,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `48 : a = 7`,
        question: "{{input}}",
        answer: 'a=7',
    },
    {
        id: 174,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `24 : x = 4`,
        question: "{{input}}",
        answer: 'x=6',
    },
    {
        id: 175,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `81 : b = 9`,
        question: "{{input}}",
        answer: 'b=9',
    },
    {
        id: 176,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Na sajmu knjiga Mia je kupila 8 knjiga za 56 KM.
        Kolika je cijena jedne knjige ako su sve imale istu cijenu?`,
        question: "{{input}}",
        answer: '7 KM',
    },
    {
        id: 177,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Proizvod dva broja je 45.
         Jedan faktor je 9, koliki je drugi faktor?`,
        question: "{{input}}",
        answer: 5,
    },
    {
        id: 178,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koji broj podijeljen sa 8 daje količnik (kvocijent) 6?`,
        question: "{{input}}",
        answer: 48,
    },
    {
        id: 179,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Kenan je imao 55 KM. Kupio je tri jednake bombonjere i ostalo mu je 28 KM.
         Kolika je bila cijena bombonjera?`,
        question: "{{input}}",
        answer: '9 KM',
    },
    {
        id: 180,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Kenan je imao 55 KM. Kupio je tri jednake bombonjere i ostalo mu je 28 KM.
         Kolika je bila cijena bombonjera?`,
        question: "{{input}}",
        answer: '9 KM',
    },
    {
        id: 181, //todo
        layout: LAYOUTS.manyInputs,
        direction: 'row',
        text: `Zec može živjeti 10 godina, vuk 5 godina
         više od zeca, medvjed 5 puta više od zeca
          i konj dva puta više od vuka.
           Koliko mogu živjeti vuk, medvjed i konj?`,
        questions: [
            {
                img: {
                    src: require('../assets/questionsImages/animal-figure-1.png'),
                    width: '10rem'
                },
                question: '{{28}}'
            },
            {
                img: {
                    src: require('../assets/questionsImages/animal-figure-2.png'),
                    width: '16rem'
                },
                question: '{{11}}'
            },
        ],
    },
    {layout: LAYOUTS.quiz},
    {
        id: 182,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '(4 + 5) • 8 = {{72}}'
            },
            {
                question: '(7 + 3) • 4 = {{40}}'
            },
            {
                question: '(4 + 8) • 7 = {{84}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Množenje i dijeljenje zbira i razlike. Računske operacije prvog i drugog reda. Upotreba zagrada.
`,
            },
        ]
    },
    {
        id: 183,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '(48 + 24) : 8= {{9}}'
            },
            {
                question: '(15 + 35) : 5 = {{10}}'
            },
            {
                question: '(11 + 13) : 6 = {{4}}'
            },
        ],
    },
    {
        id: 184,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '7 • 3 + 8 • 4 = {{53}}'
            },
            {
                question: '4 • 8 + 5 • 6 = {{62}}'
            },
            {
                question: '9 • 2 + 8 • 5 = {{58}}'
            },
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Množenje i dijeljenje su računske radnje drugog reda,
                 a sabiranje i oduzimanje računske radnje prvaog reda.
                  Ako imamo više računskih operacija, a nema zagrada,
                   prvo radimo računske operacije drugog reda (množenje i dijeljenje)
`
            },
        ]
    },
    {
        id: 185,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Upiši nedostajući broj u jednakost:`,
        questions: [
            {
                question: '7 • 8 – 6 • 3 = {{38}}'
            },
            {
                question: '9 • 9 – 8 • 6 = {{33}}'
            },
            {
                question: '7 • 6 – 4 • 7 = {{14}}'
            },
        ],
    },
    {
        id: 186,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Trgovac je složio na 6 polica 24 litra maslinovog ulja i 36 litara suncokretovog ulja.
         Ako je na svakoj polici jednak broj litara ulja,
          koliko ima na jednoj polici?`,
        question: "{{input}}",
        answer: 10,
    },
    {
        id: 187,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Tri druga dijele klikere. Imaju dvije kese klikera.
         U jednoj kesi je 18 a u drugoj 12 klikera.
          Koliko će klikera svaki dobiti ako ih dijele jednako?`,
        questions: [
            {
                question: '18 : 3 + 12 : 3 = {{10}}'
            },
            {
                question: '(18 + 12) : 3 = {{10}}'
            },
        ],
    },
    {
        id: 187,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Računaj`,
        questions: [
            {
                question: '98 - 4 • 8 = {{66}}'
            },
            {
                question: '8 • 5 + 32 = {{72}}'
            },
            {
                question: '43 + 7 * 4 = {{71}}'
            },
        ],
    },
    {
        id: 188,
        layout: LAYOUTS.manyInputs,
        title: require('../assets/image/headline/headline-09.png'),
        text: `Računaj`,
        questions: [
            {
                question: '28 - 56 : 7 = {{36}}'
            },
            {
                question: '72 : 8 + 45 = {{54}}'
            },
            {
                question: '87 - 32 : 4 = {{79}}'
            },
        ],
    },
    {
        id: 189,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U školskom ptičarniku ima 60 ptica, i to dvije vrste: papige i kanarinci.
         Ima ih isti broj u svakom kavezu.
          Papige su u 9 kaveza a kanarinci u 6.
          Koliko je papiga a koliko kanarinaca?`,
        question: "{{input}}",
        answer: '36 papiga i 24 kanarinca',
    },
    {layout: LAYOUTS.quiz},
    {
        id: 190,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Od jednog kilograma riže potrošeno je 54 dag. Koliko je riže ostalo?`,
        question: "{{input}}",
        answer: 'Ostalo je 46 dag',
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Mjerenje i mjere
`
            },
        ]
    },
    {
        id: 191,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Od jednog kilograma riže potrošeno je 54 dag. Koliko je riže ostalo?`,
        question: "{{input}}",
        answer: '1 m i 6 dm',
    },
    {
        id: 192,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `.Koliko ima litara vode u 6 flaša od 5 dl?`,
        question: "{{input}}",
        answer: '3 litra',
    },
    {
        id: 193,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Ako sunce iziđe u 4 sata i 35 minuta a zađe u 19 sati i 25 minuta, koliko traje obdanica?
Računaj: 
`,
        question: "Odgovori: {{input}}",
        answer: '14 sati i 50 minuta',
    },
    {
        id: 194,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koliko ima sedmica u 56 dana?`,
        question: "{{input}}",
        answer: '8 sedmica',
    },
    {
        id: 195,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Imaš 20 KM. Kupit ćeš 1 kg mandarina za 2 KM,
         1 kg banana za 1 KM 50 KF, 1 kg krompira za 80 KF i 1 kg mrkve za 1 KM 50 KF.
         Koliko ćeš platiti i koliko će ti KM ostati? 5 KM i 80 KF, 14 KM i 20 KF.`,
        question: "{{input}}",
        answer: '5 KM i 80 KF, 14 KM i 20 KF.',
    },
    {layout: LAYOUTS.quiz},
    {
        id: 196,
        title: require('../assets/image/headline/headline-03.png'),
        layout: LAYOUTS.table,
        question: [
            ['24!', '29!', '22!'],
            ['23!', 25, 27],
            [28, 21, 26]
        ],
        speech: [
            {
                layout: LAYOUTS.speech,
                phrase: `Zadaci za nadarene

`
            },
        ]
    },
    {
        id: 197,
        layout: LAYOUTS.dragAndDrop,
        text: `Stavi u kružić odgovarajuće računske operacije: +, -, ., : tako da jednakost bude tačna`,
        question: "52=7{{drop(*)}}8{{drop(-)}}4",
        items: [
            {
                placeholder: '+',
                id: 1,
            },
            {
                placeholder: '-',
                id: 2
            },
            {
                placeholder: '*',
                id: 3
            },
            {
                placeholder: ':',
                id: 4
            }
        ],
    },
    {
        id: 198,
        layout: LAYOUTS.dragAndDrop,
        text: `Stavi u kružić odgovarajuće računske operacije: +, -, ., : tako da jednakost bude tačna`,
        question: "69=9{{drop(*)}}8{{drop(-)}}3",
        items: [
            {
                placeholder: '+',
                id: 1,
            },
            {
                placeholder: '-',
                id: 2
            },
            {
                placeholder: '*',
                id: 3
            },
            {
                placeholder: ':',
                id: 4
            }
        ],
    },
    {
        id: 199,
        layout: LAYOUTS.dragAndDrop,
        text: `Stavi u kružić odgovarajuće računske operacije: +, -, ., : tako da jednakost bude tačna`,
        question: "48{{drop(:)}}6 = 32{{drop(:)}}4",
        items: [
            {
                placeholder: '+',
                id: 1,
            },
            {
                placeholder: '-',
                id: 2
            },
            {
                placeholder: '*',
                id: 3
            },
            {
                placeholder: ':',
                id: 4
            }
        ],
    },
    {
        id: 200,
        layout: LAYOUTS.dragAndDrop,
        text: `Stavi u kružić odgovarajuće računske operacije: +, -, ., : tako da jednakost bude tačna`,
        question: "10{{drop(*)}}4 = 5{{drop(*)}}8",
        items: [
            {
                placeholder: '+',
                id: 1,
            },
            {
                placeholder: '-',
                id: 2
            },
            {
                placeholder: '*',
                id: 3
            },
            {
                placeholder: ':',
                id: 4
            }
        ],
    },
    {
        id: 201,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Na 4 grane stajala su 42 vrapca.
         Odletjelo je 14 vrabaca pa je na svakoj grani ostao isti broj vrabaca.
          Koliko je ostalo vrabaca na jednoj grani?`,
        question: "{{input}}",
        answer: 7,
    },
    {
        id: 202,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U jednom voćnjaku su stabla jabuka i krušaka.
         Stabla su poredana u 8 redova po 8 voćki.
         Jabuka ima 24 stabla a ostalo su kruške. Koliko ima stabala krušaka?
          Koliko ima stabala jabuka i krušaka zajedno? `,
        question: "{{input}}",
        answer: '40 stabala krušaka, 64 stabla jabuka i krušaka zajedno',
    },
    {
        id: 203,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Koliko se puta uveća neki broj ako mu dodamo broj koji je od njega dva puta veći?`,
        question: "{{input}}",
        answer: 'tri puta',
    },
    {
        id: 204,
        layout: LAYOUTS.editCorrect,
        text: `U izraz 5 • 6 + 12 : 3 – 2 stavi zagrade tako da vrijednost izraza bude 48.`,
        question: "5 • 6 + 12 : 3 – 2 = 47",
        answer: '5 •( 6 + 12 : 3) – 2 = 48'
    },
    {
        id: 205,
        layout: LAYOUTS.editCorrect,
        text: `Upotrijebi zagrade tako da izraz: 56 – 19 – 25 – 11 bude jednak 23`,
        question: "5 • 6 + 12 : 3 – 2 = 48",
        answer: '5 • ( 6 + 12 : 3) – 2 = 48'
    },
    {
        id: 210,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Zidni sat svakog punog sata otkucava onoliko puta koliko sati pokazuje,
         ali i svako pola sata otkuca jedanput.
 Haris je ušao u sobu i čuo da je sat otkucao
jedanput.
 Poslije pola sata čuo je još jedan otkucaj, a poslije pola sata još jedan.
Koje je vrijeme pokazivao sat kad je Haris ušao u sobu?
`,
        question: "{{input}}",
        answer: '12 h i 30 min',
    },
    {
        id: 211,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Preko rijeke treba da se preveze 46 putnika u 10 čamaca.
         Neki čamci imaju po 4 a neki po 6 mjesta.
          Koliko je bilo čamaca od svake vrste ako su svi putnici odjednom prevezeni?`,
        question: "{{input}}",
        answer: '7 čamaca sa 4 sjedišta i 3 čamca sa 6 sjedišta',
    },
    {
        id: 212,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Teretni voz je došao u stanicu sa 9 vagona, a u svakom vagonu je bilo po 7 sanduka tereta.
         Istovarena su iz 3 vagona po 4 sanduka a iz 5 vagona po 6 sanduka. Koliko je sanduka tereta ostalo u vozu?`,
        question: "{{input}}",
        answer: 21,
    },
    {
        id: 213,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `U tri korpe ima 75 kg jabuka.
         U drugoj korpi ima 7 kg više jabuka nego u prvoj korpi, u trećoj korpi ima 2 kg manje nego u drugoj korpi.
          Koliko je jabuka u svakoj korpi?`,
        question: "{{input}}",
        answer: 'U prvoj korpi je 21 jabuka, u drugoj 28 i u trećoj 26 jabuka',
    },
    {
        id: 214,
        layout: LAYOUTS.simple,
        title: require('../assets/image/headline/headline-10.png'),
        text: `Majka i sin imaju zajedno 45 godina.
         Koliko je godina majci, a koliko sinu ako je majka imala 25 godina kad je rodila sina?`,
        question: "{{input}}",
        answer: 'Majci je 35 godina a sinu 10',
    },
];
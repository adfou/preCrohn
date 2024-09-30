// Home
const cardHomeDataLeft = 
    {
        text: "Participanst: Take yout PRE-Crohn's study questionnaire",
        buttonText: "GET STARTED",
        buttonLink: "/General-Information"
    }
   
const cardHomeDataRight = 
    {
        text: "Not yet a participant? Have Crohn's disease in your family",
        buttonText: "learn more about the study",
        buttonLink: "/1"
    }
   

const AboutTheStudy = [
    {
        H2: "Study structure",
        H3: "Participants will be randomly assigned to one of two groups: an intervention group and a control group.",
        Text: "Participants assigned to the intervention group will receive a personalized estimate for their risk of developing Crohn’s disease, as well as Web-based counseling about their risk factors for Crohn’s disease. Participants assigned to the control group will receive standard, but not personalized, education about Crohn’s disease. At the end of the study, participants who were assigned to the control group can receive a personalized estimate for their risk of developing Crohn’s disease, as well as counseling about their risk factors for Crohn’s disease."
    },
    {
        H2: "Study goals",
        H3: "The study explores whether participants who receive personalized education about their risk of Crohn’s disease are more likely to change their diet or behaviors when compared with participants who receive standard Crohn’s disease education.",
        Text:[ "We will also examine whether those in the group receiving personalized education have a change in their stool or blood markers for Crohn’s disease when compared to the group receiving standard education. ","The results of this study will help clarify the role lifestyle and dietary factors play in Crohn's disease development in high-risk individuals. Our hope is to gain insight into how to prevent Crohn’s disease in this population."]

    },
    {
        H2: "Eligibility",
        H3: "To be eligible for this study, you must:",
        LIST: [
            "Be able to give informed consent",
            "Be at least 14 years old (those 14-17 must have a parent or guardian consent)",
            "Be able to comply with all study visits and study-related procedures (at least three in-person visits conducted at Massachusetts General Hospital in Boston; participants will be compensated for each visit completed)",
            "Be able to understand and complete study questionnaires (most can be completed from home)",
            "Have at least one first-degree relative (parent, siblings child) with Crohn’s disease",
            "NOT have been diagnosed with inflammatory bowel disease (ulcerative colitis, Crohn’s disease, or inflammatory bowel disease-unclassified) NOR have any clinical signs or symptoms of inflammatory bowel disease"
        ]
    },
    {
        H2: "Study sites",
        H3: "This study is being conducted at the Massachusetts General Hospital (MGH) in the Division of Gastroenterology. The two main study sites are:",
        CARD:[
                    {
                    Title:"MGH Main Campus",
                    underTitlte:"55 Fruit Street, Boston, MA, 02114",
                    text:"This location is approximately a 4-minute walk from the Charles/MGH Station on the Red line. "
                },
                {
                    Title:"MGH Crohn’s and Colitis Center",
                    underTitlte:"165 Cambridge Street, 9th Floor, Boston, MA, 02114",
                    text:"This location is approximately a 7-minute walk from the Charles/MGH Station on the Red line and approximately a 6-minute walk from the main MGH campus. "
                }
            ],
        HTMLTEXT:"Most of the study questionnaires can be completed from home on a smartphone, tablet, or computer. However, participants will also need to attend three in-person visits at one of the MGH study sites above over the course of the study. Participants will receive passes to cover the cost of parking for these in-person visits. Participants will be compensated for each visit completed. Questions? <a href='/contact'>Contact us</a> for more details."
    },

];
const DiseaseInformation = [
    {
        H2: "What is Crohn’s disease?  ",
        H3: "Crohn’s disease is a type of inflammatory bowel disease, where the gut (also called the gastrointestinal tract) can become inflamed.  ",
        Text: "In Crohn’s disease, inflammation usually affects the intestines, such as the small intestine (like the ileum) or large intestine (called the colon). However, sometimes other gastrointestinal organs (like the stomach, esophagus, or anus), or even other parts of the body (such as the joints, skin, or eyes) can be affected. Crohn’s disease can sometimes result in narrowing of the intestine, which can lead to blockages or abscesses (infections) around the anus.  "
    },
    {Text:"Crohn’s disease is different from another type of inflammatory bowel disease called ulcerative colitis. In ulcerative colitis, only the colon (large intestine) is involved, while Crohn’s can affect any part of the gastrointestinal tract from the mouth to the anus. "}
    ,
    {H2:"How common is Crohn’s disease?  ",
        Text:"In the U.S., about 1 in every 200 adults has Crohn’s disease. This number can vary depending on characteristics such as age, education, income, race, and ethnicity. "
    },
    {
        H2:"What are the signs and symptoms of Crohn’s disease? ",
        Text:"Signs and symptoms of Crohn’s disease may include: ",
        LIST: [
            "Diarrhea ",
            "Bleeding from the rectum",
            "Abdominal pain",
            "Weight loss",
            "Fatigue",
            "Nausea or vomiting",
            "Mouth sores"
                    ]
    },
    {
        H2:"Who gets Crohn’s disease?  ",
        Text:"Crohn’s is most often diagnosed between 20-30 years of age but can occur at any age. It affects males and females about equally. People who have a family member with inflammatory bowel disease, such as Crohn’s disease or ulcerative colitis, are at higher risk for Crohn’s disease.  "
    },
    {
        H2:"What causes Crohn’s disease?  ",
        Text:"No one knows the exact cause(s) of Crohn’s disease. Most experts think there is a “multifactorial” reason for Crohn’s. This means that it takes a combination of factors together to cause Crohn’s disease.  "
    },
    {
        Text:"More than 200 genes have been linked to inflammatory bowel disease. It is likely that a person receives from their parents one or more genes that make them susceptible to Crohn’s disease. Then, in people who are susceptible to Crohn’s disease, certain environmental factors (like bacteria in the gut), diet, and behaviors (like smoking) may trigger the immune system, resulting in inflammation in the gastrointestinal system.  "
    },
    {
        Text:"Again, it is likely a combination of several factors that causes Crohn’s disease in someone who is susceptible to disease. It is important to remember that nothing a person did made them get Crohn’s disease, and they are not to blame. "
    },
    {
        H2:"How is Crohn’s diagnosed?  ",
        Text:"In people who have symptoms of disease, their doctor may do several medical tests to rule out other potential causes and diagnose Crohn’s disease. These tests may include blood tests, stool tests, images of the abdomen (such as a CAT scan or MRI), or a colonoscopy (a tube with a camera on the end used to look at the colon).  "

    },
    {
        H2:"Will it ever go away?",
        Text:"Once it is diagnosed, no one can predict how the disease will affect a particular person. Some people go for years without having any symptoms, while others have more frequent flare-ups, or attacks. However, one thing is certain: Crohn’s disease is a chronic condition, meaning it is life-long. Studies show that people with Crohn’s disease usually have the same life expectancy as people without Crohn’s disease. Most people who have Crohn’s disease lead full, happy, and productive lives. "
        
    },
    {
        H2:"How is Crohn’s disease treated? ",
        Text:"Crohn’s disease cannot be cured, but there are very effective treatments available. The goals of treatment are to reduce symptoms and control inflammation in the gut. This is called “remission.” Treatment can also prevent disease progression or complications. ",
        
    },
    {H3:'Medications ',
        HTMLTEXT:"Most of the medications used to treat Crohn’s disease act on the immune system, which is responsible for the inflammation of this disease. ",
        LIST: [
            "Steroids: These can be given as pills or intravenously (through the vein). Steroids suppress the entire immune system.",
            "Immunomodulator: These are non-steroid medications, given as pills or injections, that suppress the immune system. Immunomodulators can be combined with biologic therapies (see below) to help control inflammation.",
            "Biologic therapies: These are non-steroid, intravenous or injectable medications. These medications are antibodies, which are proteins, that block one specific part of the immune system. These can be used alone or in combination with an immunomodulator (see above).",
            "Antibiotics: These may be needed if infections, like abscesses, are present.",
            "Future therapies: There are many therapies currently under investigation."
                    ]
    },
    {
        HTMLTEXT:"For a complete list of approved medications for Crohn’s, visit the Crohn’s and Colitis Foundation’s IBD Medication guide.  "
    }
];


const CrohnRiskData = [
    {
        H2: "Biomarker results",
        H3: "Your blood test showed that you do have a specific biomarker for Crohn’s disease.",
        Text: "A biomarker is an indicator in the blood or other tissue that’s present in people who have a certain disease or people who are at risk for a certain disease. The biomarker that you were tested for is an antibody, or a protein in the blood, that appears in people with Crohn’s disease, or people who have family members with Crohn’s disease, and who are at risk for getting the disease themselves."
    },
    {
        H2:"Your risk levels"
    }]

const GeneralInformationData = [
    {   Text: "The following questionnaire asks for some general information related to you and your health, as well as about certain behaviors like your diet and exercise.",
        H2: "General information",
        
        radio: [
            "What is your sex assigned at birth?",
            "Male",
            "Female"],
        input:'How old are you?'
    
    },

    {   
        radio: [
            "What is your ethnicity? ",
            "Hispanic or Latino",
            "Not Hispanic or Latino"
            ],
        checkbox:[
            'What is your race',
            'American Indian or Alaska Native',
            'Asian',
            'Black or African American',
            'Native Hawaiian or other Pacific Islander',
            'White',
            'Other'


        ]
    
    },
    {
        radio:[
            'What is your highest level of education?',
            'Less than high school ',
            'High school or high school equivalent (GED)',
            'Associate’s degree',
            'Bachelor’s degree',
            'Master’s degree',
            'Professional or doctorate degree'
        ]
    }

];

const YourmedicalhistoryData = [

    {
        Text: "Please use your height reported on a valid I.D., such as a driver’s license.",
        input: 'What is your height?'
    },
    {
        Text: "Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.",
        input: 'What is your weight (in pounds)?'
    },
    {
        radio: [
            "Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified?",
            "Yes",
            "No"
        ]
    },
    {
        checkbox: [
            "Have you ever been diagnosed with any of the following conditions? (Select all that apply.)",
            "Psoriasis",
            "Type 1 diabetes mellitus",
            "Guillain-Barre syndrome",
            "Multiple sclerosis (MS)",
            "Rheumatoid arthritis (RA)",
            "Systemic lupus erythematosus (SLE, Lupus)",
            "Rosacea"
        ]
    },
    {
        radio: [
            "How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?",
            "Never",
            "Once a week",
            "2 or more times per week"
        ]
    },
    {
        radio: [
            "Have you had your appendix removed for any reason?",
            "Yes",
            "No"
        ]
    },
    {
        radio: [
            "Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)",
            "Yes",
            "No"
        ]
    },
    {
        checkbox: [
            "What age(s) did you take antibiotics? (Select all that apply.)",
            "0–10 years old",
            "11–18 years old",
            "18–40 years old",
            "40–60 years old",
            "> 60 years old"
        ]
    },
    {
        radio: [
            "Have you ever taken birth control pills?",
            "I've never taken birth control pills.",
            "I took birth control pills in the past but not currently.",
            "I am currently taking birth control pills."
        ]
    },
    {
        radio: [
            "Were you breast-fed when you were a baby?",
            "Yes",
            "No",
            "I don’t know"
        ]
    },
    {
        radio: [
            "When you were a child or young adult, did you have pets in your home?",
            "Yes",
            "No",
            "I don’t know"
        ]
    }
]

const FamilyHistoryData = [
    {
        // Number of relatives diagnosed with the conditions
        inputKey: [
            { label: 'Number of Parents diagnosed:', key: 'parents' },
            { label: 'Number of Siblings diagnosed:', key: 'siblings' },
            { label: 'Number of Children diagnosed:', key: 'children' }
        ]
    },
    {
        // Family members' specific conditions and age at diagnosis
        checkboxKey: [
            'Which family members have been diagnosed with Crohn’s disease, ulcerative colitis, or IBD-unclassified?',
            {
                label: 'Parent',
                options: [
                    'Crohn’s disease',
                    'Ulcerative colitis',
                    'IBD-unclassified'
                ]
               
            },
            {
                label: 'Parent Age at diagnosis',
                options: [
                    'Age 0-17 years',
                    'Age 18-59 years',
                    'Age 60 or'
                ]
               
            },
            {
                label: 'Sibling',
                options: [
                    'Crohn’s disease',
                    'Ulcerative colitis',
                    'IBD-unclassified'
                ]
            },
            {
                label: 'Sibling Age at diagnosis',
                options: [
                    'Age 0-17 years',
                    'Age 18-59 years',
                    'Age 60 or'
                ]
               
            },
            {
                label: 'Child',
                options: [
                    'Crohn’s disease',
                    'Ulcerative colitis',
                    'IBD-unclassified'
                ]
            },
            {
                label: 'Child Age at diagnosis',
                options: [
                    'Age 0-17 years',
                    'Age 18-59 years',
                    'Age 60 or'
                ]
               
            },
            
        ],
        
    }
    
];
const Yourdiet = [
    {
        
        dairyFoodsTable: {
            foods: [
                'Milk (8 oz. glass) Skim milk',
                'Milk (8 oz. glass) 1 or 2% milk',
                'Milk (8 oz. glass) Whole milk',
                'Milk (8 oz. glass) Soy milk',
                'Cream (e.g., coffee, sour); exclude fat-free (1 Tbs)',
                'Non-dairy coffee whitener; exclude fat-free (1 Tbs)',
                'Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)',
                'Regular ice cream (1 cup)',
                'Spreads added to food or bread; exclude use in cooking - Pure butter',
                'Spreads added to food or bread; exclude use in cooking - Margarine (e.g., Country Crock)',
                'Spreads added to food or bread; exclude use in cooking - Spreadable butter or butter/oil blend (e.g., Olivio spread butter)',
                'Yogurt (4-6 oz.) - Plain',
                'Yogurt (4-6 oz.) - Artificially sweetened (e.g., light peach)',
                'Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)',
                'Cottage or ricotta cheese (1/2 cup)',
                'Cream cheese (1 oz.)',
                'Other cheese (e.g., American, cheddar, etc.); plain or as part of a dish (1 slice or 1 oz. serving)',
            ],
            timeRangesFood: [
                'Never, or less than once per month',
                '1-3 per month',
                '1 per week',
                '2-4 per week',
                '5-6 per week',
                '1 per day',
                '2-3 per day',
                '4-5 per day',
                '6+ per day'
            ],
            title:'DAIRY FOODS',
        }
    },
    {
        
        radio:[
            'What type of cheese do you usually eat?',
            'Regular',
            'Low-fat or lite',
            'Fat-free',
            'None',
        ],
        HTMLTEXT: `
            <strong style={margin-button:'25px'}>
                For each food listed, fill in the circle indicating how often on average you have used the amount specified during the past month.
            </strong>
            <br/><br/>
            <strong>How motivated are you to follow a healthy diet?</strong> 
            (Use the ladder below to indicate your motivation to follow a healthier diet, with 0 being “I have not considered changing my diet” and 10 being “I am taking action to follow a healthy diet.” You can choose any value from 0 to 10.)
            <br/><br/>
        `,

        ladderRadio: [
            'How would you rate your health on the following scale?',
            [
                '0 - I am taking action to follow a healthy diet.',
                '1',
                '2 - I am starting to think about how I can change to a healthier diet.',
                '3',
                '4',
                '5 - I think I should change to a healthier diet, but I am not quite ready.',
                '6',
                '7',
                '8 - I think I need to consider changing to a healthier diet someday.',
                '9',
                '10 - I have not considered changing my diet.'
            ]
        ],

    
},
];

const Yourdietcheese=[
 
    {
        dairyFoodsTable: {
            foods: [
                'Raisins (1 oz. or small pack) or grapes (1/2 cup)',
                'Prunes or dried plums (¼ cup or 6 dried)',
                'Prune juice (small glass)',
                'Bananas (1)',
                'Cantaloupe (1/4 melon)',
                'Avocado (1/2 fruit or 1/2 cup)',
                'Fresh apples or pears (1)',
                'Apple juice or cider (small glass)',
                'Oranges (1)',
                'Orange juice (small glass)',
                'Orange juice - Calcium- or Vit. D-fortified',
                'Orange juice - Regular (not calcium-fortified)',
                'Grapefruit (1/2) or grapefruit juice (small glass)',
                'Other fruit juices (e.g., cranberry, grape) (small glass)',
                'Strawberries, fresh, frozen, or canned (1/2 cup)',
                'Blueberries, fresh, frozen, or canned (1/2 cup)',
                'Peaches or plums (1 fresh or 1/2 cup canned)',
                'Apricots (1 fresh, 1/2 cup canned, or 5 dried)'
            ],
            timeRangesFood: [
                'Never, or less than once per month',
                '1-3 per month',
                '1 per week',
                '2-4 per week',
                '5-6 per week',
                '1 per day',
                '2-3 per day',
                '4-5 per day',
                '6+ per day'
            ]
            ,    title:"FRUIT"
        },
    
    }
]

const YourdietVEGETABLES=[
  
     {
         dairyFoodsTable: {
             foods: [
                'Tomatoes (2 slices)',
                'Tomato or V-8 juice (small glass)',
                'Tomato sauce (e.g., spaghetti sauce) (1/2 cup)',
                'Salsa, picante, or taco sauce (1/4 cup)',
                'String beans (1/2 cup)',
                'Beans or lentils (baked, dried, or soup) (1/2 cup)',
                'Tofu, soy burger, soybeans, miso, or other soy protein',
                'Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)',
                'Broccoli (1/2 cup)',
                'Cauliflower (1/2 cup)',
                'Cabbage or coleslaw (1/2 cup)',
                'Brussels sprouts (1/2 cup)',
                'Carrots (raw); (1/2 carrot or 2-4 sticks)',
                'Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)',
                'Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)',
                'Mixed vegetables (stir-fry or soup); (1/2 cup)',
                'Yams or sweet potatoes (1/2 cup)',
                'Dark orange (winter) squash (1/2 cup)',
                'Eggplant, zucchini, or other summer squash (1/2 cup)',
                'Kale, arugula, mustard greens, or chard (1/2 cup)',
                'Spinach (cooked); (1/2 cup)',
                'Spinach (raw); (1 cup)',
                'Iceberg or head lettuce (1 serving)',
                'Romaine or leaf lettuce (1 serving)',
                'Celery (2-3 sticks)',
                'Green, yellow or red peppers (2 rings or 1/4 small)',
                'Onions (raw, as a garnish or in salad); (1 slice)',
                'Onions, cooked (e.g., rings or soup); (1/2 cup)'
             ],
             timeRangesFood: [
                 'Never, or less than once per month',
                 '1-3 per month',
                 '1 per week',
                 '2-4 per week',
                 '5-6 per week',
                 '1 per day',
                 '2-3 per day',
                 '4-5 per day',
                 '6+ per day'
             ]
             ,
            title:'VEGETABLES',
         }
     }
 ]
 

 const YourdietMEAT=[

     {
         dairyFoodsTable: {
             foods: [
                'Eggs (1) - Omega-3 fortified, including yolk',
                'Eggs (1) - Regular eggs, including yolk',
                'Beef or pork hot dogs (1)',
                'Chicken or turkey hot dogs or sausage (1)',
                'Chicken/turkey sandwich or frozen dinner',
                'Other chicken or turkey (including ground), with skin (3 oz)',
                'Other chicken or turkey, without skin (3 oz)',
                'Bacon (2 slices)',
                'Salami, bologna, or other processed meat sandwiches',
                'Other processed meats (e.g., sausage, kielbasa, etc.); (2 oz. or 2 small links)',
                'Hamburger (1 patty) - Lean or extra lean',
                'Hamburger (1 patty) - Regular',
                'Beef, pork, or lamb as a sandwich or mixed dish (e.g., stew, casserole, lasagna, frozen dinners, etc.); (1 serving)',
                'Pork as a main dish (e.g., ham or chops); (4-6 oz.)',
                'Beef or lamb as a main dish (e.g., steak, roast); (4-6 oz.)',
                'Canned tuna fish (3-4 oz.)',
                'Breaded fish cakes, pieces, or fish sticks (store bought)',
                'Shrimp, lobster, or scallops as a main dish',
                'Dark-meat fish (e.g., tuna steak, mackerel, salmon, sardines, bluefish, or swordfish); (3-5 oz.)',
                'Other fish (e.g., cod, haddock, halibut); (3-5 oz.)'
             ],
             timeRangesFood: [
                 'Never, or less than once per month',
                 '1-3 per month',
                 '1 per week',
                 '2-4 per week',
                 '5-6 per week',
                 '1 per day',
                 '2-3 per day',
                 '4-5 per day',
                 '6+ per day'
             ]
             ,
            title:'EGGS, MEAT, ETC.',
         }
     }
 ]


const YoutdietBREADS=[
    
        {
            dairyFoodsTable: {
                foods: [
                    'Cold breakfast cereal (1 serving)',
                    'Cooked oatmeal/cooked oat bran (including instant) (1 cup)',
                    'Other cooked breakfast cereal (1 cup)',
                    'Bread (1 slice) - White bread (including pita)',
                    'Bread (1 slice) - Rye/Pumpernickel',
                    'Bread (1 slice) - Whole wheat, oatmeal, other whole grain',
                    'Crackers (6) - Whole grain/whole wheat',
                    'Crackers (6) - Other crackers',
                    'Bagels, English muffins, or rolls (1)',
                    'Muffins or biscuits (1)',
                    'Pancakes or waffles (2 small pieces)',
                    'Brown rice (1 cup)',
                    'White rice (1 cup)',
                    'Pasta (e.g., spaghetti, noodles, couscous, etc.); (1 cup)',
                    'Tortillas, corn or flour (2)',
                    'French fries (6 oz. or 1 serving)',
                    'Potatoes, baked, boiled, or mashed (1 cup)',
                    'Potato chips or corn/tortilla chips (small bag or 1 oz.)',
                    'Pizza (2 slices)'
                ],
                timeRangesFood: [
                    'Never, or less than once per month',
                    '1-3 per month',
                    '1 per week',
                    '2-4 per week',
                    '5-6 per week',
                    '1 per day',
                    '2-3 per day',
                    '4-5 per day',
                    '6+ per day'
                ],
                title:'BREADS, CEREALS, STARCHES',
            }
        }
]

const YoutdietBEVERAGES = [
    {
        FoodsTableTwo: {
            foodsTwo: [
                ['CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types', 'Low-calorie beverage with caffeine (e.g., Diet Coke)'],
                ['', 'Other low-calorie beverage without caffeine (e.g., Diet 7-Up)'],
                ['CARBONATED BEVERAGES Regular types (not sugar-free)', 'Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)'],
                ['','Other sugared beverages (e.g., punch, lemonade, sports drinks)', 'Regular beer (1 glass, bottle, can)'],

                ['OTHER BEVERAGES','Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)'],
                ['','Regular beer (1 glass, bottle, can)'],
                ['','Light beer (e.g., Bud Light); (1 glass, bottle, or can)'],
                ['','Red wine (5 oz. glass)'],
                ['','White wine (5 oz. glass)'],
                ['','Liquor (e.g., vodka, gin, etc.); (1 drink or shot)'],
               [' ','Plain water (bottled, sparkling, or tap); (8 oz. cup)'],
               [' ','Decaffeinated tea (exclude herbal); (8 oz. cup)'],
               [' ','Tea with caffeine (including green tea); (8 oz. cup)'],
                ['','Decaffeinated coffee (8 oz. cup)'],
               [' ','Coffee with caffeine (8 oz. cup)'],
               [' ','Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)']
            ],
            TwotimeRangesFood: [
                'Never, or less than once per month',
                '1-3 per month',
                '1 per week',
                '2-4 per week',
                '5-6 per week',
                '1 per day',
                '2-3 per day',
                '4-5 per day',
                '6+ per day'
            ],
            titleTwo: 'CARBONATED BEVERAGES & OTHER BEVERAGES',
        }
    }
];

const YourdietSWEETS=[

    {
        dairyFoodsTable: {
            foods: [
                'Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)',
                'Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)',
                'Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)',
                'Candy without chocolate (1 oz.)',
                'Cookies (1) or brownie (1)',
                'Fat-free or reduced-fat',
                'Other ready-made, mix, or dough',
                'Home-baked, from scratch',
                'Doughnut (1)',
                'Cake (home-baked or ready made); (slice)',
                'Pie (home-baked or ready made); (slice)',
                'Jams, jellies, preserves, syrup, or honey (1 Tbs)',
                'Peanut butter (1 Tbs)',
                'Popcorn (2-3 cups)',
                'Fat-free or light',
                'Regular',
                'Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)',
                'Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)',
                'Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)',
                'High-protein bar (e.g., Atkins, Zone, South Beach); (1)',
                'Slimfast shake (1)',
                'Ensure, Boost, or other meal-replacement drink (1)',
                'Pretzels (1 small bag or serving)',
                'Peanuts (1 small packet or 1 oz.)',
                'Walnuts (1 oz.)',
                'Other nuts (1 small packet or 1 oz.)',
                'Mixed dried fruit (1/4 cup)',
                'Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)',
                'Wheat germ (1 Tbs)',
                'Chowder or cream soup (1 cup)',
                'Tomato soup (1 cup)',
                'Ketchup or red chili sauce (1 Tbs)',
                'Flaxseed (1 Tbs)',
                'Garlic (fresh, or powdered); (1 clove or 4 shakes)',
                'Olive oil added to food or bread (1 Tbs)',
                'Low-fat or fat-free mayonnaise (1 Tbs)',
                'Regular mayonnaise (1 Tbs)',
                'Salad dressing (1-2 Tbs)',
                'Artificial sweeteners (1 packet)'
            ],
            timeRangesFood: [
                'Never, or less than once per month',
                '1-3 per month',
                '1 per week',
                '2-4 per week',
                '5-6 per week',
                '1 per day',
                '2-3 per day',
                '4-5 per day',
                '6+ per day'
            ]
            ,
           title:'SWEETS, BAKED GOODS, MISCELLANEOUS',
        }
    }
    ,
    {
        
        radio:[
            'Type of salad dressing :',
            'Fat-free',
            'Low-fat ',
            'Olive-oil',
            'Other vegetable oil',
        ]}

        ,
    {
        
        radio:[
            'Type of artificial sweetener :',
            'Splenda',
            'Equal ',
            'NutraSweet',
            'Sweet’N Low',
            'Saccharin'
        ]}
]

const Yourphysicalactivity = [
    {   
        HTMLTEXT: `
            <strong>During the past month, what was your average time per week spent in each of the following recreational activities?</strong>
            <br/><br/>
            <strong>How motivated are you to exercise regularly?</strong> 
            (Use the ladder below to indicate your motivation to exercise regularly, with 0 being “I have not considered exercising regularly” and 10 being “I am taking action to exercise regularly.” You can choose any value from 0 to 10.)
            <br/><br/>
        `,


        ladderRadio: [
            'How motivated are you to exercise regularly?',
            [
                '0 - I have not considered exercising regularly.',
                '1',
                '2',
                '3',
                '4',
                '5 - I think I should exercise regularly, but I am not quite ready.',
                '6',
                '7',
                '8',
                '9',
                '10 - I am taking action to exercise regularly.'
            ]
        ]
        ,
        recreationalActivityTable: {
            activities: [
                'Walking for exercise or walking for transportation/errands',
                'Jogging (>10 min/mi)',
                'Running (<10 min/mi)',
                'Bicycling (include stationary machine)',
                'Tennis, squash, racquetball',
                'Lap swimming',
                'Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.)',
                'Lower-intensity exercise (e.g., yoga, stretching, toning)',
                'Other vigorous activities (e.g., lawn mowing)'
            ],
            weightTrainingActivities: ['Arm weights', 'Leg weights'],
            timeRanges: [
                'Zero',
                '1-4 min.',
                '5-19 min.',
                '20-59 min.',
                '1 hr',
                '1-1.5 hrs',
                '2-3 hrs',
                '4-6 hrs',
                '7-10 hrs',
                '11+ hrs'
            ]
        },
    },
    {
        
            radio:[
                'What is your usual walking pace outdoors?',
                'Unable to walk',
                'Easy, casual (less than 2 mph)',
                'Normal, average (2-2.9 mph)',
                'Brisk pace (3-3.9 mph)',
                'Very brisk/striding (4 mph or faster)',
            ]
        
    },
    {
        
        radio:[
            'How many total flights of stairs (not individual steps) do you climb daily?',
            'None',
            '2 flights or fewer',
            '3-4 flights',
            '5-9 flights',
            '10-14 flights',
            '15 or more flights'
        ]
    
}
];


const Yoursmokinghistory= [
    {          

        HTMLTEXT:"<strong style={margin-button:'25px'}>How motivated are you to quit smoking?</strong> (Use the ladder below to indicate your motivation to quit smoking, with 0 being “I have not considered quitting” and 10 being “I am taking action to quit [ex: cutting down, enrolling in a program].” You can choose any value from 0 to 10.)  </br></br>",
    
        ladderRadio: [
            'How would you rate your health on the following scale?',
            [
                '0 - I am taking action to quit (ex: cutting down, enrolling in a program). ',
                '1',
                '2 - I am starting to think about how to change my smoking patterns.',
                '3',
                '4',
                '5 - I think I should quit, but I am not quite ready',
                '6',
                '7',
                '8 - I think I need to consider quitting someday.',
                '9',
                '10 - I have not considered quitting.',
            ]
        ],
        
       
    },
    {
        "radioButtonWithData": [
          "Do you smoke cigarettes?",
          [
            "Yes",
            {
                "input" :'How old are you?'
              },
              {
                  "input" :'Since starting smoking, how many cigarettes have you smoked per day, on average? '
              },
              {
                  "input" :"In the last month only, how many cigarettes have you smoked per day, on average? "
              },
          ],
          [
            "No–Quit",
            {
              "input" :'How old are you?'
            },
            {
                "input" :'How old were you when you quit smoking'
            },
            {
                "input" :'How many cigarettes did you used to smoke per day, on average?'
            },
          ],
          [
            "No–Never smoked",
           
          ]
        ]
      },
      {Text:"We have an optional short (7 questions) multiple-choice survey that will help further our research. We greatly appreciate you taking the survey, if you can."}
      ,{
        button:["Optional Crohn’s survey","/knowledge-and-attitudes-survey"]
      }
];


const KnowledgEandAttitudes = [
    {
        Text:'The questions below are designed to gather your thoughts on your risk of Crohn’s disease. Don’t worry about choosing the right answer; just answer each question to the best of your ability. You can skip any questions you wish.'
    },
    {
        radio: [
            "What is the average person’s lifetime risk of getting Crohn’s disease?  ",
            "0.01% or 1 in 10,000 people will get Crohn’s disease. ",
            "0.5% or 1 in 200 people will get Crohn’s disease.",
            "30% or 30 in 100 people will get Crohn’s disease.",
            "I don’t know"
        ],
    },
    {
        radio: [
            "People who have a family member with Crohn’s disease have a(n)   ",
            "increased",
           "decreased",
           "similar"
        ],
    }
    ,
    {
        radio: [
            "Crohn’s disease is not curable, but there are many effective treatments available.   ",
            "True",
           "False",
           "I don’t know"
        ],
    }
    ,
    {
        radio: [
            "There are markers in the blood, called biomarkers, that can be detected in some people at risk for Crohn’s disease, such as relatives of people with Crohn’s disease. ",
            "True",
           "False",
           "I don’t know"
        ],
    },
    {
        radio: [
            "How do you compare your risk of Crohn’s disease to someone who does NOT have a family member with Crohn’s disease?  ",
            "Much lower",
            "Same",
           "Somewhat higher",
           "Much higher"
        ],
    },
    {
        checkbox:[
            'What do you consider to be the cause(s) of Crohn’s disease? (Select all that apply.)',
            "Infections",
            "A dysfunction in the immune system",
            "Genetics",
            "Unhealthy diet",
            "Unhealthy lifestyle",
            "Stress",
            "Drugs/medications",
            "External/environmental factors",
            "Don’t know/prefer not to answer"


        ]
    },
    {
        radio: [
            "I feel that I can make changes to my diet and lifestyle that will lower my risk of getting Crohn’s disease.  ",
            "Strongly agree",
            "Somewhat agree",
            "Neutral (neither agree nor disagree)",
            "Somewhat disagree",
            "Strongly disagree"
        ],
    },
]

//foodsTwo, timeRangesFood, titleTwo  beverageFoodsTable

//------------------------------Design----------------------------------------

const riskLevels = ["VERY LOW", "LOW", "SIMILAR", "HIGH", "VERY HIGH"];
const riskColors = {
  "VERY LOW": "#FCE7A0",
  "LOW": "#FFD990",
  "SIMILAR": "#FFC077",
  "HIGH": "#FA9B5F",
  "VERY HIGH": "#ED7837",
};
const InfoModalData={
    title:"Lower your sucrose (sugar) intake",
    content:`
    <p>
    Several studies have suggested an association between sucrose, or table sugar, and an increased risk of Crohn’s disease2,12. Too much sugar also increases your risk of obesity, diabetes, heart disease, and more13. In a typical American diet, sugar primarily comes from sugar-containing beverages (like Coca-Cola, Pepsi, Mountain Dew, Dr. Pepper, punch, and sugar-sweetened iced tea) and desserts and pastries (like cakes, cookies, pies, donuts, muffins, and ice cream). Most guidelines recommend limiting your sugar intake to less than 10% of your total calories—that’s about 45 grams per day of sugar for women and 55 grams per day of sugar for men4. However, some guidelines, like the American Heart Association, recommend even less—no more than 25 grams per day for women and no more than 36 grams per day for men14.
    </p>
  
    <p>
    Try cutting down on your sugar intake. Here are some tips:
    </p>
    <ul>
        <li>Pay attention to nutrition labels and ingredients. Choose foods that have the lowest amount of “added sugars” or foods that have no added sugars.</li>
        <li>Many beverages are loaded with added sugars. Use these recipes to replace sugary drinks with fruit-infused water  for a boost of flavor, or try seltzer or sparkling water instead.</li>
        <li>For dessert, choose fruit salad instead of sugary desserts.</li>
        
        <li>When baking cookies or cakes, try cutting the sugar in half—you often won’t notice the difference.</li>
    </ul>
  `
}


export {cardHomeDataLeft,cardHomeDataRight,AboutTheStudy,GeneralInformationData,YourmedicalhistoryData,
    FamilyHistoryData,CrohnRiskData,riskLevels,riskColors,InfoModalData,Yourdiet,Yourphysicalactivity,
    Yoursmokinghistory,Yourdietcheese,YourdietVEGETABLES,YourdietMEAT,YoutdietBREADS,YoutdietBEVERAGES,YourdietSWEETS,KnowledgEandAttitudes,DiseaseInformation} ;
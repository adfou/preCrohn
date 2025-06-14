// Home
const cardHomeDataLeft = 
    {
        text: "Participants: Take your PRE-Crohn's study questionnaire",
        buttonText: "GET STARTED",
        buttonLink: "/profile"
    }
   
const cardHomeDataRight = 
    {
        text: "Not yet a participant? Have Crohn's disease in your family?",
        buttonText: "learn more about the study",
        buttonLink: "/about"
    }
   

const AboutTheStudy = [
    {
        Text:"The Personal Risk Estimation for Crohn’s Disease (PRE-Crohn’s) study looks at how education about a person’s Crohn's risk impacts their diet, behaviors, and biomarkers (a disease or pre-disease marker in blood or other tissue) for this disease. Participants will complete questionnaires about their diet and lifestyle, and have blood and stool samples collected. The study focuses on unaffected first-degree relatives (parents, siblings, children) of people with inflammatory bowel disease, such as Crohn’s disease, ulcerative colitis, or indeterminate colitis (IBD-unclassified)."
    },

    {
        H2: "Study structure",
        H3: "Participants will be randomly assigned to one of two groups: an intervention group or a control group.",
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
            "Have at least one first-degree relative (parent, sibling, or child) with inflammatory bowel disease (Crohn’s disease, ulcerative colitis, or inflammatory bowel disease-unclassified)",
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
        HTMLTEXT:"Most of the study questionnaires can be completed from home on a smartphone, tablet, or computer. However, participants will also need to attend three in-person visits at one of the MGH study sites above over the course of the study. Participants will receive passes to cover the cost of parking for these in-person visits. Participants will be compensated for each visit completed. <a href='/contact'>Contact us</a> for more details."
    },
    {
        
        CARDGREEN:[
                    {
                    Title:"Participants: Take your PRE-Crohn’s study questionnaire.",
                    link:"/profile",
                    button:"Get started"
                },
                {
                    Title:"Not yet a participant? Have Crohn’s disease in your family?",
                    link:"/contact",
                    button:"Learn more"
                },
              
            ],
         },

];
const ContactPageContent = [
    {HTMLTEXT:'<p> If you would like to learn more about the study, email us at <a href="mailto:mghprecrohns@mgb.org?subject=Inquiry%20About%20the%20Study">mghprecrohns@mgb.org</a>  or call us at 617-643-5280. </p>',
        
       
    },
    {
        H2: "PRE-Crohn’s study sites",
        H3: "This study is being conducted at the Massachusetts General Hospital (MGH) in the Division of Gastroenterology. The two main study sites are:",
        CARD: [
            {
                Title: "MGH Main Campus",
                underTitlte: "55 Fruit Street, Boston, MA, 02114",
                text: "This location is approximately a 4-minute walk from the Charles/MGH Station on the Red line."
            },
            {
                Title: "MGH Crohn’s and Colitis Center",
                underTitlte: "165 Cambridge Street, 9th Floor, Boston, MA, 02114",
                text: "This location is approximately a 7-minute walk from the Charles/MGH Station on the Red line and approximately a 6-minute walk from the main MGH campus."
            }
        ]
    }
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
        Text:"More than 200 genes have been linked to inflammatory bowel disease. It is likely that a person receives from their parents one or more genes that make them susceptible to Crohn’s disease. Then, in people who are susceptible to Crohn’s disease, certain environmental factors like bacteria in the gut, diet, and behaviors (like smoking) may trigger the immune system, resulting in inflammation in the gastrointestinal system.  "
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
        LISTHtml: [
            "<span style='font-weight:600;'>Steroids:</span> These can be given as pills or intravenously (through the vein). Steroids suppress the entire immune system.",
            "<span style='font-weight:600;'>Immunomodulator:</span> These are non-steroid medications, given as pills or injections, that suppress the immune system. Immunomodulators can be combined with biologic therapies (see below) to help control inflammation.",
            "<span style='font-weight:600;'>Biologic therapies:</span> These are non-steroid, intravenous or injectable medications. These medications are antibodies, which are proteins, that block one specific part of the immune system. These can be used alone or in combination with an immunomodulator (see above).",
            "<span style='font-weight:600;'>Small molecule medications:</span> These are newer, non-steroid medications that are given in pill form, and act on specific parts of the immune system to combat inflammation.",
            "<span style='font-weight:600;'>Antibiotics:</span> These may be needed if infections, like abscesses, are present.",
            "<span style='font-weight:600;'>Future therapies:</span> There are many therapies currently under investigation."
                    ]
    },
    {
        HTMLTEXT:"For a complete list of approved medications for Crohn’s, visit the <a target='_blank' href='https://www.crohnscolitisfoundation.org/patientsandcaregivers/ibd-medication-guide'>Crohn’s and Colitis Foundation’s IBD Medication guide</a>.  "
    },
    {H3:'Diet and nutrition',
        LIST: [
            "Therapy with special liquid diets called “enteral nutrition” can help treat Crohn’s disease, especially in children.",
            "Many solid-food diets have been studied for Crohn’s disease. While no single solid-food diet or eating plan will work for everyone with Crohn’s disease, special diets may work for some people based on their individual needs and symptoms.",
                    ]
    },
    {   
        H3:'Surgery',
        LIST: [
            " In some cases, surgery may be needed to remove damaged parts of the intestine.",
                    ],
        HTMLTEXT:"The above information is provided by the Crohn’s and Colitis Foundation (CCF). For more information on Crohn’s disease, visit the CCF webpage. <a href='https://www.crohnscolitisfoundation.org/what-is-crohns-disease' target='_blank'>https://www.crohnscolitisfoundation.org/what-is-crohns-disease</a>",
            
    },
    {
        H2:"References",
        HTMLTEXT:'What Is Crohn’s Disease? Crohn’s & Colitis Foundation. Accessed March 12, 2023. <a href="https://www.crohnscolitisfoundation.org/patientsandcaregivers/what-is-crohns-disease" target="_blank">https://www.crohnscolitisfoun…at-is-crohns-disease</a>.',
        Text:'Dahlhamer JM, Zammitti EP, Ward BW, Wheaton AG, Croft JB. Prevalence of Inflammatory Bowel Disease Among Adults Aged ≥18 Years — United States, 2015. Vol 65. Centers for Disease Control MMWR Office; 2016. doi:10.15585/mmwr.mm6542a3'
    },
    {
        HTMLTEXT:'Crohn’s Disease. American College of Gastroenterology. Accessed March 12, 2023. <a target="_blank" href="https://gi.org/topics/crohns-disease/">https://gi.org/topics/crohns-disease/</a>.',
       },
];

const ThankYouData = [
    {
        Text:"Thank you for your participation and for what you are making possible: Helping us find out if Crohn’s is a preventable disease in people, like you, who are at risk for it. We couldn’t do it without you!"

    },
     {Text:"We appreciate your participation in our study."

     },
    {
        H3: "Next steps",
        Text:"As a reminder, as part of your PRE-C study participation, you will be completing our questionnaire three times: ",
        LISTBold: [
            "When you join",
            "8 weeks later",
            "6 months after joining"]
    },
    {
        Text:"In between questionnaires, feel free to return as often as you’d like to review information about Crohn’s disease. "
    },
    {
        H2:"References",
        LISTNumber: [
            "Lopes EW, Lochhead P, Burke KE, et al. Risk factors for incident inflammatory bowel disease according to disease phenotype. Clinical Gastroenterology and Hepatology. 2022;20(10):2347-2357.e14. doi:10.1016/j.cgh.2022.01.003",
            "Piovani D, Danese S, Peyrin-Biroulet L, Nikolopoulos GK, Lytras T, Bonovas S. Environmental risk factors for inflammatory bowel diseases: an umbrella review of meta-analyses. Gastroenterology. 2019;157(3):647-659.e4. doi:10.1053/j.gastro.2019.04.016",
            "Ananthakrishnan AN, Khalili H, Konijeti GG, et al. A prospective study of long-term intake of dietary fiber and risk of Crohn’s disease and ulcerative colitis. Gastroenterology. 2013;145(5):970-977. doi:10.1053/j.gastro.2013.07.050",
            "U.S. Department of Agriculture, US Department of Health and Human Services. 2020-2025 Dietary guidelines for Americans. Accessed August 6, 2023. <a href='https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials' target='_blank'>https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials<a/>",
            "Khalili H, Ananthakrishnan AN, Konijeti GG, et al. Physical activity and risk of inflammatory bowel disease: Prospective study from the Nurses’ Health Study cohorts. BMJ (Online). 2013;347. doi:10.1136/bmj.f6633",
            "Lloyd-Jones DM, Hong Y, Labarthe D, et al. Defining and setting national goals for cardiovascular health promotion and disease reduction: the American Heart Association’s strategic impact goal through 2020 and beyond. Circulation. 2010;121(4):586-613. doi:10.1161/CIRCULATIONAHA.109.192703",
            "Piercy KL, Troiano RP, Ballard RM, et al. The physical activity guidelines for Americans. JAMA - Journal of the American Medical Association. 2018;320(19):2020-2028. doi:10.1001/jama.2018.14854",
            "American Heart Association. Recommendations for physical activity in adults and kids. Published 2023. Accessed August 13, 2023. <a target='_blank' href='https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults'>https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults<a/>",
            "CDC. Smoking and Cancer | Overviews of Diseases/Conditions | Tips From Former Smokers. Accessed August 13, 2023. <a target='_blank' href='https://www.cdc.gov/tobacco/campaign/tips/diseases/cancer.html'>https://www.cdc.gov/tobacco/campaign/tips/diseases/cancer.html<a/>",
            "Mahid SS, Minor KS, Soto RE, Hornung CA, Galandiuk S. Smoking and inflammatory bowel disease: a meta-analysis. Mayo Clin Proc. 2006;81(11):1462-1471. www.mayoclinicproceedings.com1462",
            "Nirmala Prasadi VP, Joye IJ. Dietary fibre from whole grains and their benefits on metabolic health. Nutrients. 2020;12(10):1-20. doi:10.3390/nu12103045",
            "Fu T, Chen H, Chen X, et al. Sugar-sweetened beverages, artificially sweetened beverages and natural juices and risk of inflammatory bowel disease: a cohort study of 121,490 participants. Aliment Pharmacol Ther. 2022;56(6):1018-1029. doi:10.1111/apt.17149",
            "American Heart Association. How too much added sugar affects your health (infographic). Accessed August 13, 2023. <a target='_blank' href='https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar/how-too-much-added-sugar-affects-your-health-infographic'>https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar/how-too-much-added-sugar-affects-your-health-infographic<a/>",
            "American Heart Association. Added sugars. Accessed August 13, 2023. <a target='_blank' href='https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar/added-sugars'>https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar/added-sugars<a/>"
        ]
    },
    
]

const CrohnRiskData = [
    {
        H2: "Biomarker results",
        H3: "Your blood test showed that you do have a specific biomarker for Crohn’s disease.",
        Text: "A biomarker is an indicator in the blood or other tissue that’s present in people who have a certain disease or people who are at risk for a certain disease. The biomarker that you were tested for is an antibody, or a protein in the blood, that appears in people with Crohn’s disease, or people who have family members with Crohn’s disease, and who are at risk for getting the disease themselves."
    },
    {
        H3: "Because we detected a biomarker in your blood, your risk of Crohn’s disease is higher compared to people who do not have this biomarker.",
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
            "Not Hispanic or Latino",
            "Prefer not to answer"
            ],
            checkboxNone:[
            'What is your race (Select all that apply.)',
            'American Indian or Alaska Native',
            'Asian',
            'Black or African American',
            'Native Hawaiian or other Pacific Islander',
            'White',
            'Other',
            "Prefer not to answer"


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
   
    {H2: "Your medical history",
        inputHeight:'What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) ',
        //input: 'What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) '
    },
    {
        input: 'What is your weight (in pounds)? (Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)'
    },
    {
        radio: [
            "Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified? ",
            "Yes",
            "No"
        ]
    },
    {
        checkboxNoneAlt: [
            "Have you ever been diagnosed with any of the following conditions? (Select all that apply.)",
            "Psoriasis",
            "Type 1 diabetes mellitus",
            "Guillain-Barre syndrome",
            "Multiple sclerosis (MS)",
            "Rheumatoid arthritis (RA)",
            "Systemic lupus erythematosus (SLE, Lupus)",
            "Rosacea",
            "None"
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
        "radioButtonWithData": [
          "Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)",
            
          [
            "Yes",
            {
                checkbox: [
                    "What age(s) did you take antibiotics? (Select all that apply.)",
                    "0–10 years old",
                    "11-17 years old",
                    "18-39 years old",
                    "40-59 years old",
                    "> 60 years old"
                ]
            },
              
              
          ],
         
          [
            "No",
           
          ]
        ]
      },
      {   
        radioFemale: [ 
            "Have you ever taken birth control pills?",
            "I've never taken birth control pills.",
            "I took birth control pills in the past but not currently.  ",
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
            "When you were a child or young adult, did you have pets in your home? ",
            "Yes",
            "No",
           
        ]
    }
]


const FamilyHistoryData = [

    {H2:"Your family history ",
        p:"How many of your first-degree relatives (parents, siblings, or children) have ever been diagnosed with Crohn’s disease, ulcerative colitis, or IBD-unclassified?"}
    ,{
        "RecuresiveQuestion": {
          "inpute": {
            "label": "Parents diagnosed:",
            "key": "parents",
            "max": 2
          },
          "title": "",
          "recursiveContent": [
            {
              "label": "Parent index",
              "options": [
                "Crohn’s disease",
                "Ulcerative colitis",
                "IBD-unclassified"
              ]
            },
            {
              "label": "Parent index: Age at diagnosis",
              "options": [
                "Age 0-17 years",
                "Age 18-59 years",
                "Age 60 or above"
              ]
            }
          ]
        }
      }
            ,      
            {
                "RecuresiveQuestion": {
                "inpute": {
                    "label": "Sibling diagnosed:",
                    "key": "sibling",
                    "max": 20
                },
                "title": "",
                "recursiveContent": [
                    {
                    "label": "Sibling index",
                    "options": [
                        "Crohn’s disease",
                        "Ulcerative colitis",
                        "IBD-unclassified"
                    ]
                    },
                    {
                    "label": "Sibling index: Age at diagnosis",
                    "options": [
                        "Age 0-17 years",
                        "Age 18-59 years",
                        "Age 60 or above"
                    ]
                    },
                    
                ]
                }
            },
              
            {
                "RecuresiveQuestion": {
                "inpute": {
                    "label": "Child diagnosed:",
                    "key": "Child",
                    "max": 20
                },
                "title": "",
                "recursiveContent": [
                    {
                    "label": "Child index",
                    "options": [
                        "Crohn’s disease",
                        "Ulcerative colitis",
                        "IBD-unclassified"
                    ]
                    },
                    {
                    "label": "Child index: Age at diagnosis",
                    "options": [
                        "Age 0-17 years",
                        "Age 18-59 years",
                        "Age 60 or above"
                    ]
                    },
                    
                ]
                }
            },
    
];
const Yourdiet = [
    {H2:"Your diet"},
    {
        HTMLTEXT: `
            <p style={margin-button:'15px'}>
                For each food listed, fill in the circle indicating how often, on average, you have consumed (eaten) the amount specified during the past month.
            </p>
          
        `,
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
                'Pure butter added to food or bread; exclude use in cooking',
                'Margarine (e.g., Country Crock) added to food or bread; exclude use in cooking',
                'Spreadable butter or butter/oil blend (e.g., Olivio spread butter) added to food or bread; exclude use in cooking',
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
       

       

    
},
];

const Yourdietcheese=[
    {H2:"Your diet"},
    {
        HTMLTEXT: `
            <p style={margin-button:'15px'}>
                For each food listed, fill in the circle indicating how often, on average, you have consumed (eaten) the amount specified during the past month.
            </p>
          
        `,
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
    {H2:"Your diet "},
     {
        HTMLTEXT: `
            <p style={margin-button:'15px'}>
                For each food listed, fill in the circle indicating how often, on average, you have consumed (eaten) the amount specified during the past month.
            </p>
          
        `,
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
    {H2:"Your diet"},
     {
        HTMLTEXT: `
            <p style={margin-button:'15px'}>
                For each food listed, fill in the circle indicating how often, on average, you have consumed (eaten) the amount specified during the past month.
            </p>
          
        `,
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
    {H2:"Your diet "},
        {
            HTMLTEXT: `
            <p style={margin-button:'15px'}>
                For each food listed, fill in the circle indicating how often, on average, you have consumed (eaten) the amount specified during the past month.
            </p>
          
        `,
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
const YoutdietBEVERAGES=[
    {H2:"Your diet "},
        {
            HTMLTEXT: `
             <p style={margin-button:'15px'}>
                For each food listed, fill in the circle indicating how often, on average, you have consumed (eaten) the amount specified during the past month.
            </p>
          
        `,
            dairyFoodsTable: {
                foods: [
                    'Low-calorie beverage with caffeine (e.g., Diet Coke); (1 glass, bottle, or can)',
                    'Other low-calorie beverage without caffeine (e.g., Diet 7-Up); (1 glass, bottle, or can)',
                    'Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper); (1 glass, bottle, or can)',
                    'Other carbonated beverage with sugar (e.g., 7-Up, root beer, ginger ale, caffeine-free Coke); (1 glass, bottle, or can)',
                    'Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)',
                    'Regular beer (1 glass, bottle, can)',
                    'Light beer (e.g., Bud Light); (1 glass, bottle, or can)',
                    'Red wine (5 oz. glass)',
                    'White wine (5 oz. glass)',
                    'Liquor (e.g., vodka, gin, etc.); (1 drink or shot)',
                    'Plain water (bottled, sparkling, or tap); (8 oz. cup)',
                    'Decaffeinated tea (exclude herbal); (8 oz. cup)',
                    'Tea with caffeine (including green tea); (8 oz. cup)',
                    'Decaffeinated coffee (8 oz. cup)',
                    'Coffee with caffeine (8 oz. cup)',
                    'Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)'
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
                title:'CARBONATED BEVERAGES & OTHER BEVERAGES',
            }
        }
]


/*   const YoutdietBEVERAGES = [
    {H2: 'Your diet',},
    {   HTMLTEXT: `
        <p style={margin-button:'15px'}>
          For each food listed, fill in the circle indicating how often, on average, you have used <b>consumed </b>(eaten) the amount specified during the past month.
        </p>
      
    `,
        FoodsTableTwo: {
            foodsTwo: [
                ['CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types', 'Low-calorie beverage with caffeine (e.g., Diet Coke)'],
                ['', 'Other carbonated beverage with sugar (e.g., 7-Up, root beer, ginger ale, caffeinefree Coke)'],
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
];*/  



const YourdietSWEETS=[
  {H2: 'Your diet  ',},
    {
        HTMLTEXT: `
            <p style={margin-button:'15px'}>
                For each food listed, fill in the circle indicating how often, on average, you have consumed (eaten) the amount specified during the past month.
            </p>
          
        `,
        dairyFoodsTable: {
            foods: [
                'Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)',
                'Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)',
                'Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)',
                'Candy without chocolate (1 oz.)',
                'Cookies (1) or brownie (1) Fat-free or reduced-fat',
                'Cookies (1) or brownie (1) Other ready-made, mix, or dough',
                'Cookies (1) or brownie (1) Home-baked, from scratch',
                'Doughnut (1)',
                'Cake (home-baked or ready made); (slice)',
                'Pie (home-baked or ready made); (slice)',
                'Jams, jellies, preserves, syrup, or honey (1 Tbs)',
                'Peanut butter (1 Tbs)',
                'Popcorn (2-3 cups) Fat-free or light',
                'Popcorn (2-3 cups) Regular',
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
            'Type of salad dressing:',
            'Fat-free',
            'Low-fat ',
            'Olive-oil',
            'Other vegetable oil',
            'N/A'
        ]}

        ,
    {
        
        radio:[
            'Type of artificial sweetener:',
            'Splenda',
            'Equal ',
            'NutraSweet',
            'Sweet’N Low',
            'Saccharin',
            'N/A'
        ]},
        {
              
            "LadderFood":[
             {picturePath:"/LadderFood.png"}
             
            ]}
]

const Yourphysicalactivity = [
    {   H2:"Your physical activity ",
        HTMLTEXT: `
            <strong>During the past month, what was your average time per week spent in each of the following recreational activities?</strong>
            <br/><br/>
       
        `
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
    
},

{
   
    "LadderDiet":[
        {picturePath:"/LadderDiet.png"}
        
       ]
}
];


const Yoursmokinghistory= [
    
    {
        H2:"Your smoking history ", 

        "radioButtonWithData": [
          "Do you smoke cigarettes?",
          [
            "Yes",
            {
                "input" :'How old were you when you started smoking? '
              },
              {
                  "input" :'Since starting smoking, how many cigarettes have you smoked per day, on average? '
              },
              {
                  "input" :"In the last month only, how many cigarettes have you smoked per day, on average? "
              },
            {
              
       "LadderSmoking":[
        {picturePath:"/LadderSmoking.png"}
        
       ]}
          ],
          [
            "No–Quit",
            {
              "input" :'How old were you when you started smoking? '
            },
            {
                "input" :'How old were you when you quit smoking?'
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
      {         

        
       
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
        p:"… risk of Crohn’s disease compared to those who do not.  "
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
            "Somewhat lower",
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


const Prefill = {"general-information":{"What is your sex assigned at birth?":"0","How old are you?":"28","What is your ethnicity? ":"0","What is your race (Select all that apply.)":["American Indian or Alaska Native","Black or African American"],"What is your highest level of education?":"0"},"medical-history":{"What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) ":"22","What is your weight (in pounds)? Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified? ":"0","Have you ever been diagnosed with any of the following conditions? (Select all that apply.)":["Type 1 diabetes mellitus","Psoriasis","Systemic lupus erythematosus (SLE, Lupus)"],"How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?":"0","Have you had your appendix removed for any reason?":"1","Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)":"No","Were you breast-fed when you were a baby?":"1","When you were a child or young adult, did you have pets in your home? ":"0"},"family-history":{},"your-diet":{"Milk (8 oz. glass) Skim milk":"2","Milk (8 oz. glass) 1 or 2% milk":"2","Milk (8 oz. glass) Whole milk":"2","Milk (8 oz. glass) Soy milk":"2","Cream (e.g., coffee, sour); exclude fat-free (1 Tbs)":"2","Non-dairy coffee whitener; exclude fat-free (1 Tbs)":"2","Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":"2","Regular ice cream (1 cup)":"2","Spreads added to food or bread; exclude use in cooking - Pure butter":"2","Spreads added to food or bread; exclude use in cooking - Margarine (e.g., Country Crock)":"2","Spreads added to food or bread; exclude use in cooking - Spreadable butter or butter/oil blend (e.g., Olivio spread butter)":"2","Yogurt (4-6 oz.) - Plain":"2","Yogurt (4-6 oz.) - Artificially sweetened (e.g., light peach)":"2","Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":"2","Cottage or ricotta cheese (1/2 cup)":"2","Cream cheese (1 oz.)":"2","Other cheese (e.g., American, cheddar, etc.); plain or as part of a dish (1 slice or 1 oz. serving)":"2","What type of cheese do you usually eat?":"0"},"your-diet-2":{"Raisins (1 oz. or small pack) or grapes (1/2 cup)":"2","Prunes or dried plums (¼ cup or 6 dried)":"2","Prune juice (small glass)":"2","Bananas (1)":"2","Cantaloupe (1/4 melon)":"2","Avocado (1/2 fruit or 1/2 cup)":"2","Fresh apples or pears (1)":"2","Apple juice or cider (small glass)":"2","Oranges (1)":"2","Orange juice (small glass)":"2","Orange juice - Calcium- or Vit. D-fortified":"2","Orange juice - Regular (not calcium-fortified)":"2","Grapefruit (1/2) or grapefruit juice (small glass)":"2","Other fruit juices (e.g., cranberry, grape) (small glass)":"2","Strawberries, fresh, frozen, or canned (1/2 cup)":"2","Blueberries, fresh, frozen, or canned (1/2 cup)":"2","Peaches or plums (1 fresh or 1/2 cup canned)":"2","Apricots (1 fresh, 1/2 cup canned, or 5 dried)":"2"},"your-diet-3":{"Tomatoes (2 slices)":"2","Tomato or V-8 juice (small glass)":"2","Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":"2","Salsa, picante, or taco sauce (1/4 cup)":"2","String beans (1/2 cup)":"2","Beans or lentils (baked, dried, or soup) (1/2 cup)":"2","Tofu, soy burger, soybeans, miso, or other soy protein":"2","Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":"2","Broccoli (1/2 cup)":"2","Cauliflower (1/2 cup)":"2","Cabbage or coleslaw (1/2 cup)":"2","Brussels sprouts (1/2 cup)":"2","Carrots (raw); (1/2 carrot or 2-4 sticks)":"2","Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":"2","Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":"2","Mixed vegetables (stir-fry or soup); (1/2 cup)":"2","Yams or sweet potatoes (1/2 cup)":"2","Dark orange (winter) squash (1/2 cup)":"2","Eggplant, zucchini, or other summer squash (1/2 cup)":"2","Kale, arugula, mustard greens, or chard (1/2 cup)":"2","Spinach (cooked); (1/2 cup)":"2","Spinach (raw); (1 cup)":"2","Iceberg or head lettuce (1 serving)":"2","Romaine or leaf lettuce (1 serving)":"2","Celery (2-3 sticks)":"2","Green, yellow or red peppers (2 rings or 1/4 small)":"2","Onions (raw, as a garnish or in salad); (1 slice)":"2","Onions, cooked (e.g., rings or soup); (1/2 cup)":"2"},"your-diet-4":{"Eggs (1) - Omega-3 fortified, including yolk":"2","Eggs (1) - Regular eggs, including yolk":"2","Beef or pork hot dogs (1)":"2","Chicken or turkey hot dogs or sausage (1)":"2","Chicken/turkey sandwich or frozen dinner":"2","Other chicken or turkey (including ground), with skin (3 oz)":"2","Other chicken or turkey, without skin (3 oz)":"2","Bacon (2 slices)":"2","Salami, bologna, or other processed meat sandwiches":"2","Other processed meats (e.g., sausage, kielbasa, etc.); (2 oz. or 2 small links)":"2","Hamburger (1 patty) - Lean or extra lean":"2","Hamburger (1 patty) - Regular":"2","Beef, pork, or lamb as a sandwich or mixed dish (e.g., stew, casserole, lasagna, frozen dinners, etc.); (1 serving)":"2","Pork as a main dish (e.g., ham or chops); (4-6 oz.)":"2","Beef or lamb as a main dish (e.g., steak, roast); (4-6 oz.)":"2","Canned tuna fish (3-4 oz.)":"2","Breaded fish cakes, pieces, or fish sticks (store bought)":"2","Shrimp, lobster, or scallops as a main dish":"2","Dark-meat fish (e.g., tuna steak, mackerel, salmon, sardines, bluefish, or swordfish); (3-5 oz.)":"2","Other fish (e.g., cod, haddock, halibut); (3-5 oz.)":"2"},"your-diet-5":{"Cold breakfast cereal (1 serving)":"2","Cooked oatmeal/cooked oat bran (including instant) (1 cup)":"2","Other cooked breakfast cereal (1 cup)":"2","Bread (1 slice) - White bread (including pita)":"2","Bread (1 slice) - Rye/Pumpernickel":"2","Bread (1 slice) - Whole wheat, oatmeal, other whole grain":"2","Crackers (6) - Whole grain/whole wheat":"2","Crackers (6) - Other crackers":"2","Bagels, English muffins, or rolls (1)":"2","Muffins or biscuits (1)":"2","Pancakes or waffles (2 small pieces)":"2","Brown rice (1 cup)":"2","White rice (1 cup)":"2","Pasta (e.g., spaghetti, noodles, couscous, etc.); (1 cup)":"2","Tortillas, corn or flour (2)":"2","French fries (6 oz. or 1 serving)":"2","Potatoes, baked, boiled, or mashed (1 cup)":"2","Potato chips or corn/tortilla chips (small bag or 1 oz.)":"2","Pizza (2 slices)":"2"},"your-diet-6":{"CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types_Low-calorie beverage with caffeine (e.g., Diet Coke)":"2","_Other low-calorie beverage without caffeine (e.g., Diet 7-Up)":"2","CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":"2","_Other sugared beverages (e.g., punch, lemonade, sports drinks)":"2","OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":"2","_Regular beer (1 glass, bottle, can)":"2","_Light beer (e.g., Bud Light); (1 glass, bottle, or can)":"2","_Red wine (5 oz. glass)":"2","_White wine (5 oz. glass)":"2","_Liquor (e.g., vodka, gin, etc.); (1 drink or shot)":"2"," _Plain water (bottled, sparkling, or tap); (8 oz. cup)":"2"," _Decaffeinated tea (exclude herbal); (8 oz. cup)":"2"," _Tea with caffeine (including green tea); (8 oz. cup)":"2","_Decaffeinated coffee (8 oz. cup)":"2"," _Coffee with caffeine (8 oz. cup)":"2"," _Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)":"2"},"your-diet-7":{"Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":"2","Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":"2","Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":"2","Candy without chocolate (1 oz.)":"2","Cookies (1) or brownie (1) Fat-free or reduced-fat":"2","Cookies (1) or brownie (1) Other ready-made, mix, or dough":"2","Cookies (1) or brownie (1) Home-baked, from scratch":"2","Doughnut (1)":"2","Cake (home-baked or ready made); (slice)":"2","Pie (home-baked or ready made); (slice)":"2","Jams, jellies, preserves, syrup, or honey (1 Tbs)":"2","Peanut butter (1 Tbs)":"2","Popcorn (2-3 cups) Fat-free or light":"2","Popcorn (2-3 cups) Regular":"2","Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":"2","Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":"2","Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":"2","High-protein bar (e.g., Atkins, Zone, South Beach); (1)":"2","Slimfast shake (1)":"2","Ensure, Boost, or other meal-replacement drink (1)":"2","Pretzels (1 small bag or serving)":"2","Peanuts (1 small packet or 1 oz.)":"2","Walnuts (1 oz.)":"2","Other nuts (1 small packet or 1 oz.)":"2","Mixed dried fruit (1/4 cup)":"2","Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":"2","Wheat germ (1 Tbs)":"2","Chowder or cream soup (1 cup)":"2","Tomato soup (1 cup)":"2","Ketchup or red chili sauce (1 Tbs)":"2","Flaxseed (1 Tbs)":"2","Garlic (fresh, or powdered); (1 clove or 4 shakes)":"2","Olive oil added to food or bread (1 Tbs)":"2","Low-fat or fat-free mayonnaise (1 Tbs)":"2","Regular mayonnaise (1 Tbs)":"2","Salad dressing (1-2 Tbs)":"2","Artificial sweeteners (1 packet)":"2","Type of salad dressing :":"1","Type of artificial sweetener :":"0","":"8"},"your-physical-activity":{"Walking for exercise or walking for transportation/errands":"2","Jogging (>10 min/mi)":"2","Running (<10 min/mi)":"2","Bicycling (include stationary machine)":"2","Tennis, squash, racquetball":"2","Lap swimming":"2","Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.)":"2","Lower-intensity exercise (e.g., yoga, stretching, toning)":"2","Other vigorous activities (e.g., lawn mowing)":"2","Arm weights":"2","Leg weights":"2","How many total flights of stairs (not individual steps) do you climb daily?":"2","What is your usual walking pace outdoors?":"3","":"5"},"your-smoking-history":{"Do you smoke cigarettes?":"No–Never smoked"}}
const PrefillJaneCaseOne={"general-information":{"What is your sex assigned at birth?":"1","How old are you?":"28","What is your ethnicity? ":"0","What is your race (Select all that apply.)":["American Indian or Alaska Native","Black or African American"],"What is your highest level of education?":"5"},"medical-history":{"What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) ":"22","What is your weight (in pounds)? Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified? ":"0","Have you ever been diagnosed with any of the following conditions? (Select all that apply.)":["Type 1 diabetes mellitus","Psoriasis","Systemic lupus erythematosus (SLE, Lupus)"],"How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?":"2","Have you had your appendix removed for any reason?":"1","Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)":"Yes","Were you breast-fed when you were a baby?":"0","When you were a child or young adult, did you have pets in your home? ":"1","What age(s) did you take antibiotics? (Select all that apply.)":["0–10 years old"],"What is your weight (in pounds)? (Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever taken birth control pills?":"1"},"family-history":{"parents":"1","parents_0_Parent index":"0","parents_0_Parent index: Age at diagnosis":"1"},"your-diet":{"Milk (8 oz. glass) Skim milk":"0","Milk (8 oz. glass) 1 or 2% milk":"0","Milk (8 oz. glass) Whole milk":"0","Milk (8 oz. glass) Soy milk":"0","Cream (e.g., coffee, sour); exclude fat-free (1 Tbs)":"0","Non-dairy coffee whitener; exclude fat-free (1 Tbs)":"5","Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":"0","Regular ice cream (1 cup)":"0","Spreads added to food or bread; exclude use in cooking - Pure butter":"0","Spreads added to food or bread; exclude use in cooking - Margarine (e.g., Country Crock)":"0","Spreads added to food or bread; exclude use in cooking - Spreadable butter or butter/oil blend (e.g., Olivio spread butter)":"0","Yogurt (4-6 oz.) - Plain":"0","Yogurt (4-6 oz.) - Artificially sweetened (e.g., light peach)":"0","Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":"0","Cottage or ricotta cheese (1/2 cup)":"0","Cream cheese (1 oz.)":"0","Other cheese (e.g., American, cheddar, etc.); plain or as part of a dish (1 slice or 1 oz. serving)":"0","What type of cheese do you usually eat?":"0"},"your-diet-2":{"Raisins (1 oz. or small pack) or grapes (1/2 cup)":"0","Prunes or dried plums (¼ cup or 6 dried)":"1","Prune juice (small glass)":"2","Bananas (1)":"3","Cantaloupe (1/4 melon)":"4","Avocado (1/2 fruit or 1/2 cup)":"5","Fresh apples or pears (1)":"6","Apple juice or cider (small glass)":"6","Oranges (1)":"0","Orange juice (small glass)":"0","Orange juice - Calcium- or Vit. D-fortified":"0","Orange juice - Regular (not calcium-fortified)":"0","Grapefruit (1/2) or grapefruit juice (small glass)":"0","Other fruit juices (e.g., cranberry, grape) (small glass)":"0","Strawberries, fresh, frozen, or canned (1/2 cup)":"0","Blueberries, fresh, frozen, or canned (1/2 cup)":"0","Peaches or plums (1 fresh or 1/2 cup canned)":"0","Apricots (1 fresh, 1/2 cup canned, or 5 dried)":"0"},"your-diet-3":{"Tomatoes (2 slices)":"2","Tomato or V-8 juice (small glass)":"2","Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":"2","Salsa, picante, or taco sauce (1/4 cup)":"2","String beans (1/2 cup)":"2","Beans or lentils (baked, dried, or soup) (1/2 cup)":"2","Tofu, soy burger, soybeans, miso, or other soy protein":"2","Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":"4","Broccoli (1/2 cup)":"2","Cauliflower (1/2 cup)":"2","Cabbage or coleslaw (1/2 cup)":"2","Brussels sprouts (1/2 cup)":"2","Carrots (raw); (1/2 carrot or 2-4 sticks)":"2","Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":"2","Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":"2","Mixed vegetables (stir-fry or soup); (1/2 cup)":"2","Yams or sweet potatoes (1/2 cup)":"2","Dark orange (winter) squash (1/2 cup)":"2","Eggplant, zucchini, or other summer squash (1/2 cup)":"2","Kale, arugula, mustard greens, or chard (1/2 cup)":"2","Spinach (cooked); (1/2 cup)":"5","Spinach (raw); (1 cup)":"2","Iceberg or head lettuce (1 serving)":"2","Romaine or leaf lettuce (1 serving)":"2","Celery (2-3 sticks)":"2","Green, yellow or red peppers (2 rings or 1/4 small)":"2","Onions (raw, as a garnish or in salad); (1 slice)":"2","Onions, cooked (e.g., rings or soup); (1/2 cup)":"2"},"your-diet-4":{"Eggs (1) - Omega-3 fortified, including yolk":"0","Eggs (1) - Regular eggs, including yolk":"0","Beef or pork hot dogs (1)":"0","Chicken or turkey hot dogs or sausage (1)":"0","Chicken/turkey sandwich or frozen dinner":"0","Other chicken or turkey (including ground), with skin (3 oz)":"0","Other chicken or turkey, without skin (3 oz)":"0","Bacon (2 slices)":"0","Salami, bologna, or other processed meat sandwiches":"0","Other processed meats (e.g., sausage, kielbasa, etc.); (2 oz. or 2 small links)":"0","Hamburger (1 patty) - Lean or extra lean":"0","Hamburger (1 patty) - Regular":"0","Beef, pork, or lamb as a sandwich or mixed dish (e.g., stew, casserole, lasagna, frozen dinners, etc.); (1 serving)":"0","Pork as a main dish (e.g., ham or chops); (4-6 oz.)":"0","Beef or lamb as a main dish (e.g., steak, roast); (4-6 oz.)":"0","Canned tuna fish (3-4 oz.)":"0","Breaded fish cakes, pieces, or fish sticks (store bought)":"0","Shrimp, lobster, or scallops as a main dish":"0","Dark-meat fish (e.g., tuna steak, mackerel, salmon, sardines, bluefish, or swordfish); (3-5 oz.)":"0","Other fish (e.g., cod, haddock, halibut); (3-5 oz.)":"0"},"your-diet-5":{"Cold breakfast cereal (1 serving)":"5","Cooked oatmeal/cooked oat bran (including instant) (1 cup)":"2","Other cooked breakfast cereal (1 cup)":"2","Bread (1 slice) - White bread (including pita)":"0","Bread (1 slice) - Rye/Pumpernickel":"0","Bread (1 slice) - Whole wheat, oatmeal, other whole grain":"6","Crackers (6) - Whole grain/whole wheat":"5","Crackers (6) - Other crackers":"0","Bagels, English muffins, or rolls (1)":"0","Muffins or biscuits (1)":"2","Pancakes or waffles (2 small pieces)":"0","Brown rice (1 cup)":"0","White rice (1 cup)":"0","Pasta (e.g., spaghetti, noodles, couscous, etc.); (1 cup)":"0","Tortillas, corn or flour (2)":"0","French fries (6 oz. or 1 serving)":"0","Potatoes, baked, boiled, or mashed (1 cup)":"0","Potato chips or corn/tortilla chips (small bag or 1 oz.)":"0","Pizza (2 slices)":"0"},"your-diet-6":{"CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types_Low-calorie beverage with caffeine (e.g., Diet Coke)":"0","_Other low-calorie beverage without caffeine (e.g., Diet 7-Up)":"0","CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":"0","_Other sugared beverages (e.g., punch, lemonade, sports drinks)":"0","OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":"5","_Regular beer (1 glass, bottle, can)":"0","_Light beer (e.g., Bud Light); (1 glass, bottle, or can)":"0","_Red wine (5 oz. glass)":"0","_White wine (5 oz. glass)":"0","_Liquor (e.g., vodka, gin, etc.); (1 drink or shot)":"0"," _Plain water (bottled, sparkling, or tap); (8 oz. cup)":"0"," _Decaffeinated tea (exclude herbal); (8 oz. cup)":"0"," _Tea with caffeine (including green tea); (8 oz. cup)":"0","_Decaffeinated coffee (8 oz. cup)":"0"," _Coffee with caffeine (8 oz. cup)":"0"," _Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)":"0"},"your-diet-7":{"Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":"0","Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":"0","Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":"0","Candy without chocolate (1 oz.)":"0","Cookies (1) or brownie (1) Fat-free or reduced-fat":"0","Cookies (1) or brownie (1) Other ready-made, mix, or dough":"0","Cookies (1) or brownie (1) Home-baked, from scratch":"0","Doughnut (1)":"2","Cake (home-baked or ready made); (slice)":"0","Pie (home-baked or ready made); (slice)":"0","Jams, jellies, preserves, syrup, or honey (1 Tbs)":"3","Peanut butter (1 Tbs)":"0","Popcorn (2-3 cups) Fat-free or light":"0","Popcorn (2-3 cups) Regular":"0","Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":"0","Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":"5","Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":"5","High-protein bar (e.g., Atkins, Zone, South Beach); (1)":"0","Slimfast shake (1)":"0","Ensure, Boost, or other meal-replacement drink (1)":"0","Pretzels (1 small bag or serving)":"0","Peanuts (1 small packet or 1 oz.)":"0","Walnuts (1 oz.)":"0","Other nuts (1 small packet or 1 oz.)":"0","Mixed dried fruit (1/4 cup)":"0","Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":"0","Wheat germ (1 Tbs)":"0","Chowder or cream soup (1 cup)":"0","Tomato soup (1 cup)":"0","Ketchup or red chili sauce (1 Tbs)":"0","Flaxseed (1 Tbs)":"0","Garlic (fresh, or powdered); (1 clove or 4 shakes)":"0","Olive oil added to food or bread (1 Tbs)":"0","Low-fat or fat-free mayonnaise (1 Tbs)":"0","Regular mayonnaise (1 Tbs)":"0","Salad dressing (1-2 Tbs)":"0","Artificial sweeteners (1 packet)":"0","Type of salad dressing :":"1","Type of artificial sweetener :":"0","":"8","Type of salad dressing:":"3","Type of artificial sweetener:":"1"},"your-physical-activity":{"Walking for exercise or walking for transportation/errands":"3","Jogging (>10 min/mi)":"0","Running (<10 min/mi)":"4","Bicycling (include stationary machine)":"0","Tennis, squash, racquetball":"6","Lap swimming":"0","Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.)":"0","Lower-intensity exercise (e.g., yoga, stretching, toning)":"0","Other vigorous activities (e.g., lawn mowing)":"0","Arm weights":"0","Leg weights":"0","How many total flights of stairs (not individual steps) do you climb daily?":"5","What is your usual walking pace outdoors?":"3","":"5"},"your-smoking-history":{"Do you smoke cigarettes?":"No–Quit","How old were you when you started smoking? ":"16","How old were you when you quit smoking?":"20","How many cigarettes did you used to smoke per day, on average?":"5"}}
const PrefillJeoCaseOne={"general-information":{"What is your sex assigned at birth?":"0","How old are you?":"28","What is your ethnicity? ":"0","What is your race (Select all that apply.)":["American Indian or Alaska Native","Black or African American"],"What is your highest level of education?":"5"},"medical-history":{"What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) ":"22","What is your weight (in pounds)? Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified? ":"0","Have you ever been diagnosed with any of the following conditions? (Select all that apply.)":["Type 1 diabetes mellitus","Psoriasis","Systemic lupus erythematosus (SLE, Lupus)"],"How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?":"2","Have you had your appendix removed for any reason?":"1","Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)":"Yes","Were you breast-fed when you were a baby?":"0","When you were a child or young adult, did you have pets in your home? ":"0","What age(s) did you take antibiotics? (Select all that apply.)":["0–10 years old"],"What is your weight (in pounds)? (Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever taken birth control pills?":"1"},"family-history":{"parents":"1","parents_0_Parent index":"0","parents_0_Parent index: Age at diagnosis":"1"},"your-diet":{"Milk (8 oz. glass) Skim milk":"0","Milk (8 oz. glass) 1 or 2% milk":"0","Milk (8 oz. glass) Whole milk":"0","Milk (8 oz. glass) Soy milk":"0","Cream (e.g., coffee, sour); exclude fat-free (1 Tbs)":"0","Non-dairy coffee whitener; exclude fat-free (1 Tbs)":"5","Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":"0","Regular ice cream (1 cup)":"0","Spreads added to food or bread; exclude use in cooking - Pure butter":"0","Spreads added to food or bread; exclude use in cooking - Margarine (e.g., Country Crock)":"0","Spreads added to food or bread; exclude use in cooking - Spreadable butter or butter/oil blend (e.g., Olivio spread butter)":"0","Yogurt (4-6 oz.) - Plain":"0","Yogurt (4-6 oz.) - Artificially sweetened (e.g., light peach)":"0","Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":"0","Cottage or ricotta cheese (1/2 cup)":"0","Cream cheese (1 oz.)":"0","Other cheese (e.g., American, cheddar, etc.); plain or as part of a dish (1 slice or 1 oz. serving)":"0","What type of cheese do you usually eat?":"0"},"your-diet-2":{"Raisins (1 oz. or small pack) or grapes (1/2 cup)":"0","Prunes or dried plums (¼ cup or 6 dried)":"1","Prune juice (small glass)":"2","Bananas (1)":"3","Cantaloupe (1/4 melon)":"4","Avocado (1/2 fruit or 1/2 cup)":"5","Fresh apples or pears (1)":"6","Apple juice or cider (small glass)":"6","Oranges (1)":"0","Orange juice (small glass)":"0","Orange juice - Calcium- or Vit. D-fortified":"0","Orange juice - Regular (not calcium-fortified)":"0","Grapefruit (1/2) or grapefruit juice (small glass)":"0","Other fruit juices (e.g., cranberry, grape) (small glass)":"0","Strawberries, fresh, frozen, or canned (1/2 cup)":"0","Blueberries, fresh, frozen, or canned (1/2 cup)":"0","Peaches or plums (1 fresh or 1/2 cup canned)":"0","Apricots (1 fresh, 1/2 cup canned, or 5 dried)":"0"},"your-diet-3":{"Tomatoes (2 slices)":"2","Tomato or V-8 juice (small glass)":"2","Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":"2","Salsa, picante, or taco sauce (1/4 cup)":"2","String beans (1/2 cup)":"2","Beans or lentils (baked, dried, or soup) (1/2 cup)":"2","Tofu, soy burger, soybeans, miso, or other soy protein":"2","Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":"4","Broccoli (1/2 cup)":"2","Cauliflower (1/2 cup)":"2","Cabbage or coleslaw (1/2 cup)":"2","Brussels sprouts (1/2 cup)":"2","Carrots (raw); (1/2 carrot or 2-4 sticks)":"2","Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":"2","Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":"2","Mixed vegetables (stir-fry or soup); (1/2 cup)":"2","Yams or sweet potatoes (1/2 cup)":"2","Dark orange (winter) squash (1/2 cup)":"2","Eggplant, zucchini, or other summer squash (1/2 cup)":"2","Kale, arugula, mustard greens, or chard (1/2 cup)":"2","Spinach (cooked); (1/2 cup)":"5","Spinach (raw); (1 cup)":"2","Iceberg or head lettuce (1 serving)":"2","Romaine or leaf lettuce (1 serving)":"2","Celery (2-3 sticks)":"2","Green, yellow or red peppers (2 rings or 1/4 small)":"2","Onions (raw, as a garnish or in salad); (1 slice)":"2","Onions, cooked (e.g., rings or soup); (1/2 cup)":"2"},"your-diet-4":{"Eggs (1) - Omega-3 fortified, including yolk":"0","Eggs (1) - Regular eggs, including yolk":"0","Beef or pork hot dogs (1)":"0","Chicken or turkey hot dogs or sausage (1)":"0","Chicken/turkey sandwich or frozen dinner":"0","Other chicken or turkey (including ground), with skin (3 oz)":"0","Other chicken or turkey, without skin (3 oz)":"0","Bacon (2 slices)":"0","Salami, bologna, or other processed meat sandwiches":"0","Other processed meats (e.g., sausage, kielbasa, etc.); (2 oz. or 2 small links)":"0","Hamburger (1 patty) - Lean or extra lean":"0","Hamburger (1 patty) - Regular":"0","Beef, pork, or lamb as a sandwich or mixed dish (e.g., stew, casserole, lasagna, frozen dinners, etc.); (1 serving)":"0","Pork as a main dish (e.g., ham or chops); (4-6 oz.)":"0","Beef or lamb as a main dish (e.g., steak, roast); (4-6 oz.)":"0","Canned tuna fish (3-4 oz.)":"0","Breaded fish cakes, pieces, or fish sticks (store bought)":"0","Shrimp, lobster, or scallops as a main dish":"0","Dark-meat fish (e.g., tuna steak, mackerel, salmon, sardines, bluefish, or swordfish); (3-5 oz.)":"0","Other fish (e.g., cod, haddock, halibut); (3-5 oz.)":"0"},"your-diet-5":{"Cold breakfast cereal (1 serving)":"5","Cooked oatmeal/cooked oat bran (including instant) (1 cup)":"2","Other cooked breakfast cereal (1 cup)":"2","Bread (1 slice) - White bread (including pita)":"0","Bread (1 slice) - Rye/Pumpernickel":"0","Bread (1 slice) - Whole wheat, oatmeal, other whole grain":"6","Crackers (6) - Whole grain/whole wheat":"5","Crackers (6) - Other crackers":"0","Bagels, English muffins, or rolls (1)":"0","Muffins or biscuits (1)":"2","Pancakes or waffles (2 small pieces)":"0","Brown rice (1 cup)":"0","White rice (1 cup)":"0","Pasta (e.g., spaghetti, noodles, couscous, etc.); (1 cup)":"0","Tortillas, corn or flour (2)":"0","French fries (6 oz. or 1 serving)":"0","Potatoes, baked, boiled, or mashed (1 cup)":"0","Potato chips or corn/tortilla chips (small bag or 1 oz.)":"0","Pizza (2 slices)":"0"},"your-diet-6":{"CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types_Low-calorie beverage with caffeine (e.g., Diet Coke)":"0","_Other low-calorie beverage without caffeine (e.g., Diet 7-Up)":"0","CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":"0","_Other sugared beverages (e.g., punch, lemonade, sports drinks)":"0","OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":"5","_Regular beer (1 glass, bottle, can)":"0","_Light beer (e.g., Bud Light); (1 glass, bottle, or can)":"0","_Red wine (5 oz. glass)":"0","_White wine (5 oz. glass)":"0","_Liquor (e.g., vodka, gin, etc.); (1 drink or shot)":"0"," _Plain water (bottled, sparkling, or tap); (8 oz. cup)":"0"," _Decaffeinated tea (exclude herbal); (8 oz. cup)":"0"," _Tea with caffeine (including green tea); (8 oz. cup)":"0","_Decaffeinated coffee (8 oz. cup)":"0"," _Coffee with caffeine (8 oz. cup)":"0"," _Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)":"0"},"your-diet-7":{"Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":"0","Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":"0","Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":"0","Candy without chocolate (1 oz.)":"0","Cookies (1) or brownie (1) Fat-free or reduced-fat":"0","Cookies (1) or brownie (1) Other ready-made, mix, or dough":"0","Cookies (1) or brownie (1) Home-baked, from scratch":"0","Doughnut (1)":"2","Cake (home-baked or ready made); (slice)":"0","Pie (home-baked or ready made); (slice)":"0","Jams, jellies, preserves, syrup, or honey (1 Tbs)":"3","Peanut butter (1 Tbs)":"0","Popcorn (2-3 cups) Fat-free or light":"0","Popcorn (2-3 cups) Regular":"0","Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":"0","Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":"5","Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":"5","High-protein bar (e.g., Atkins, Zone, South Beach); (1)":"0","Slimfast shake (1)":"0","Ensure, Boost, or other meal-replacement drink (1)":"0","Pretzels (1 small bag or serving)":"0","Peanuts (1 small packet or 1 oz.)":"0","Walnuts (1 oz.)":"0","Other nuts (1 small packet or 1 oz.)":"0","Mixed dried fruit (1/4 cup)":"0","Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":"0","Wheat germ (1 Tbs)":"0","Chowder or cream soup (1 cup)":"0","Tomato soup (1 cup)":"0","Ketchup or red chili sauce (1 Tbs)":"0","Flaxseed (1 Tbs)":"0","Garlic (fresh, or powdered); (1 clove or 4 shakes)":"0","Olive oil added to food or bread (1 Tbs)":"0","Low-fat or fat-free mayonnaise (1 Tbs)":"0","Regular mayonnaise (1 Tbs)":"0","Salad dressing (1-2 Tbs)":"0","Artificial sweeteners (1 packet)":"0","Type of salad dressing :":"1","Type of artificial sweetener :":"0","":"8","Type of salad dressing:":"3","Type of artificial sweetener:":"1"},"your-physical-activity":{"Walking for exercise or walking for transportation/errands":"3","Jogging (>10 min/mi)":"0","Running (<10 min/mi)":"4","Bicycling (include stationary machine)":"0","Tennis, squash, racquetball":"6","Lap swimming":"0","Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.)":"0","Lower-intensity exercise (e.g., yoga, stretching, toning)":"0","Other vigorous activities (e.g., lawn mowing)":"0","Arm weights":"0","Leg weights":"0","How many total flights of stairs (not individual steps) do you climb daily?":"5","What is your usual walking pace outdoors?":"3","":"5"},"your-smoking-history":{"Do you smoke cigarettes?":"No–Quit","How old were you when you started smoking? ":"16","How old were you when you quit smoking?":"20","How many cigarettes did you used to smoke per day, on average?":"5"}}
const PrefilJaneFuitisCorrect = {"general-information":{"What is your sex assigned at birth?":"1","How old are you?":"28","What is your ethnicity? ":"0","What is your race (Select all that apply.)":["American Indian or Alaska Native","Black or African American"],"What is your highest level of education?":"5"},"medical-history":{"What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) ":"22","What is your weight (in pounds)? Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified? ":"0","Have you ever been diagnosed with any of the following conditions? (Select all that apply.)":["Type 1 diabetes mellitus","Psoriasis","Systemic lupus erythematosus (SLE, Lupus)"],"How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?":"1","Have you had your appendix removed for any reason?":"1","Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)":"Yes","Were you breast-fed when you were a baby?":"0","When you were a child or young adult, did you have pets in your home? ":"1","What age(s) did you take antibiotics? (Select all that apply.)":["0–10 years old"],"What is your weight (in pounds)? (Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever taken birth control pills?":"1"},"family-history":{"parents":"1","parents_0_Parent index":"0","parents_0_Parent index: Age at diagnosis":"1"},"your-diet":{"Milk (8 oz. glass) Skim milk":"0","Milk (8 oz. glass) 1 or 2% milk":"0","Milk (8 oz. glass) Whole milk":"0","Milk (8 oz. glass) Soy milk":"0","Cream (e.g., coffee, sour); exclude fat-free (1 Tbs)":"0","Non-dairy coffee whitener; exclude fat-free (1 Tbs)":"5","Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":"0","Regular ice cream (1 cup)":"0","Spreads added to food or bread; exclude use in cooking - Pure butter":"0","Spreads added to food or bread; exclude use in cooking - Margarine (e.g., Country Crock)":"0","Spreads added to food or bread; exclude use in cooking - Spreadable butter or butter/oil blend (e.g., Olivio spread butter)":"0","Yogurt (4-6 oz.) - Plain":"0","Yogurt (4-6 oz.) - Artificially sweetened (e.g., light peach)":"0","Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":"0","Cottage or ricotta cheese (1/2 cup)":"0","Cream cheese (1 oz.)":"0","Other cheese (e.g., American, cheddar, etc.); plain or as part of a dish (1 slice or 1 oz. serving)":"0","What type of cheese do you usually eat?":"1"},"your-diet-2":{"Raisins (1 oz. or small pack) or grapes (1/2 cup)":"0","Prunes or dried plums (¼ cup or 6 dried)":"1","Prune juice (small glass)":"2","Bananas (1)":"3","Cantaloupe (1/4 melon)":"4","Avocado (1/2 fruit or 1/2 cup)":"5","Fresh apples or pears (1)":"6","Apple juice or cider (small glass)":"6","Oranges (1)":"0","Orange juice (small glass)":"0","Orange juice - Calcium- or Vit. D-fortified":"0","Orange juice - Regular (not calcium-fortified)":"0","Grapefruit (1/2) or grapefruit juice (small glass)":"0","Other fruit juices (e.g., cranberry, grape) (small glass)":"0","Strawberries, fresh, frozen, or canned (1/2 cup)":"0","Blueberries, fresh, frozen, or canned (1/2 cup)":"0","Peaches or plums (1 fresh or 1/2 cup canned)":"0","Apricots (1 fresh, 1/2 cup canned, or 5 dried)":"0"},"your-diet-3":{"Tomatoes (2 slices)":"2","Tomato or V-8 juice (small glass)":"2","Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":"2","Salsa, picante, or taco sauce (1/4 cup)":"2","String beans (1/2 cup)":"2","Beans or lentils (baked, dried, or soup) (1/2 cup)":"2","Tofu, soy burger, soybeans, miso, or other soy protein":"2","Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":"4","Broccoli (1/2 cup)":"2","Cauliflower (1/2 cup)":"2","Cabbage or coleslaw (1/2 cup)":"2","Brussels sprouts (1/2 cup)":"2","Carrots (raw); (1/2 carrot or 2-4 sticks)":"2","Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":"2","Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":"2","Mixed vegetables (stir-fry or soup); (1/2 cup)":"2","Yams or sweet potatoes (1/2 cup)":"2","Dark orange (winter) squash (1/2 cup)":"2","Eggplant, zucchini, or other summer squash (1/2 cup)":"2","Kale, arugula, mustard greens, or chard (1/2 cup)":"2","Spinach (cooked); (1/2 cup)":"5","Spinach (raw); (1 cup)":"2","Iceberg or head lettuce (1 serving)":"2","Romaine or leaf lettuce (1 serving)":"2","Celery (2-3 sticks)":"2","Green, yellow or red peppers (2 rings or 1/4 small)":"2","Onions (raw, as a garnish or in salad); (1 slice)":"2","Onions, cooked (e.g., rings or soup); (1/2 cup)":"2"},"your-diet-4":{"Eggs (1) - Omega-3 fortified, including yolk":"0","Eggs (1) - Regular eggs, including yolk":"0","Beef or pork hot dogs (1)":"0","Chicken or turkey hot dogs or sausage (1)":"0","Chicken/turkey sandwich or frozen dinner":"0","Other chicken or turkey (including ground), with skin (3 oz)":"0","Other chicken or turkey, without skin (3 oz)":"0","Bacon (2 slices)":"0","Salami, bologna, or other processed meat sandwiches":"0","Other processed meats (e.g., sausage, kielbasa, etc.); (2 oz. or 2 small links)":"0","Hamburger (1 patty) - Lean or extra lean":"0","Hamburger (1 patty) - Regular":"0","Beef, pork, or lamb as a sandwich or mixed dish (e.g., stew, casserole, lasagna, frozen dinners, etc.); (1 serving)":"0","Pork as a main dish (e.g., ham or chops); (4-6 oz.)":"0","Beef or lamb as a main dish (e.g., steak, roast); (4-6 oz.)":"0","Canned tuna fish (3-4 oz.)":"0","Breaded fish cakes, pieces, or fish sticks (store bought)":"0","Shrimp, lobster, or scallops as a main dish":"0","Dark-meat fish (e.g., tuna steak, mackerel, salmon, sardines, bluefish, or swordfish); (3-5 oz.)":"0","Other fish (e.g., cod, haddock, halibut); (3-5 oz.)":"0"},"your-diet-5":{"Cold breakfast cereal (1 serving)":"5","Cooked oatmeal/cooked oat bran (including instant) (1 cup)":"2","Other cooked breakfast cereal (1 cup)":"2","Bread (1 slice) - White bread (including pita)":"0","Bread (1 slice) - Rye/Pumpernickel":"0","Bread (1 slice) - Whole wheat, oatmeal, other whole grain":"6","Crackers (6) - Whole grain/whole wheat":"5","Crackers (6) - Other crackers":"0","Bagels, English muffins, or rolls (1)":"0","Muffins or biscuits (1)":"2","Pancakes or waffles (2 small pieces)":"0","Brown rice (1 cup)":"0","White rice (1 cup)":"0","Pasta (e.g., spaghetti, noodles, couscous, etc.); (1 cup)":"0","Tortillas, corn or flour (2)":"0","French fries (6 oz. or 1 serving)":"0","Potatoes, baked, boiled, or mashed (1 cup)":"0","Potato chips or corn/tortilla chips (small bag or 1 oz.)":"0","Pizza (2 slices)":"0"},"your-diet-6":{"CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types_Low-calorie beverage with caffeine (e.g., Diet Coke)":"0","_Other low-calorie beverage without caffeine (e.g., Diet 7-Up)":"0","CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":"0","_Other sugared beverages (e.g., punch, lemonade, sports drinks)":"0","OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":"5","_Regular beer (1 glass, bottle, can)":"0","_Light beer (e.g., Bud Light); (1 glass, bottle, or can)":"0","_Red wine (5 oz. glass)":"0","_White wine (5 oz. glass)":"0","_Liquor (e.g., vodka, gin, etc.); (1 drink or shot)":"0"," _Plain water (bottled, sparkling, or tap); (8 oz. cup)":"0"," _Decaffeinated tea (exclude herbal); (8 oz. cup)":"0"," _Tea with caffeine (including green tea); (8 oz. cup)":"0","_Decaffeinated coffee (8 oz. cup)":"0"," _Coffee with caffeine (8 oz. cup)":"0"," _Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)":"0"},"your-diet-7":{"Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":"0","Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":"0","Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":"0","Candy without chocolate (1 oz.)":"0","Cookies (1) or brownie (1) Fat-free or reduced-fat":"0","Cookies (1) or brownie (1) Other ready-made, mix, or dough":"0","Cookies (1) or brownie (1) Home-baked, from scratch":"0","Doughnut (1)":"2","Cake (home-baked or ready made); (slice)":"0","Pie (home-baked or ready made); (slice)":"0","Jams, jellies, preserves, syrup, or honey (1 Tbs)":"3","Peanut butter (1 Tbs)":"0","Popcorn (2-3 cups) Fat-free or light":"0","Popcorn (2-3 cups) Regular":"0","Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":"0","Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":"5","Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":"5","High-protein bar (e.g., Atkins, Zone, South Beach); (1)":"0","Slimfast shake (1)":"0","Ensure, Boost, or other meal-replacement drink (1)":"0","Pretzels (1 small bag or serving)":"0","Peanuts (1 small packet or 1 oz.)":"0","Walnuts (1 oz.)":"0","Other nuts (1 small packet or 1 oz.)":"0","Mixed dried fruit (1/4 cup)":"0","Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":"0","Wheat germ (1 Tbs)":"0","Chowder or cream soup (1 cup)":"0","Tomato soup (1 cup)":"0","Ketchup or red chili sauce (1 Tbs)":"0","Flaxseed (1 Tbs)":"0","Garlic (fresh, or powdered); (1 clove or 4 shakes)":"0","Olive oil added to food or bread (1 Tbs)":"0","Low-fat or fat-free mayonnaise (1 Tbs)":"0","Regular mayonnaise (1 Tbs)":"0","Salad dressing (1-2 Tbs)":"0","Artificial sweeteners (1 packet)":"0","Type of salad dressing :":"1","Type of artificial sweetener :":"0","":"8","Type of salad dressing:":"3","Type of artificial sweetener:":"1"},"your-physical-activity":{"Walking for exercise or walking for transportation/errands":"3","Jogging (>10 min/mi)":"0","Running (<10 min/mi)":"0","Bicycling (include stationary machine)":"2","Tennis, squash, racquetball":"0","Lap swimming":"0","Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.)":"0","Lower-intensity exercise (e.g., yoga, stretching, toning)":"0","Other vigorous activities (e.g., lawn mowing)":"0","Arm weights":"0","Leg weights":"0","How many total flights of stairs (not individual steps) do you climb daily?":"2","What is your usual walking pace outdoors?":"2","":"5"},"your-smoking-history":{"Do you smoke cigarettes?":"Yes","How old were you when you started smoking? ":"16","How old were you when you quit smoking?":"20","How many cigarettes did you used to smoke per day, on average?":"5","Since starting smoking, how many cigarettes have you smoked per day, on average? ":"16","In the last month only, how many cigarettes have you smoked per day, on average? ":"16","How motivated are you to quit smoking? (Use the ladder below to indicate your motivation to quit smoking, with 0 being “I have not considered quitting” and 10 being “I am taking action to quit [ex: cutting down, enrolling in a program].” You can choose any value from 0 to 10.)":"7"}}
const PrefileJaneFiberCorrect ={"general-information":{"What is your sex assigned at birth?":"1","How old are you?":"28","What is your ethnicity? ":"0","What is your race (Select all that apply.)":["American Indian or Alaska Native","Black or African American"],"What is your highest level of education?":"5"},"medical-history":{"What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) ":"22","What is your weight (in pounds)? Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified? ":"0","Have you ever been diagnosed with any of the following conditions? (Select all that apply.)":["Type 1 diabetes mellitus","Psoriasis","Systemic lupus erythematosus (SLE, Lupus)"],"How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?":"1","Have you had your appendix removed for any reason?":"1","Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)":"Yes","Were you breast-fed when you were a baby?":"0","When you were a child or young adult, did you have pets in your home? ":"1","What age(s) did you take antibiotics? (Select all that apply.)":["0–10 years old"],"What is your weight (in pounds)? (Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever taken birth control pills?":"1"},"family-history":{"parents":"1","parents_0_Parent index":"0","parents_0_Parent index: Age at diagnosis":"1"},"your-diet":{"Milk (8 oz. glass) Skim milk":"0","Milk (8 oz. glass) 1 or 2% milk":"0","Milk (8 oz. glass) Whole milk":"0","Milk (8 oz. glass) Soy milk":"0","Cream (e.g., coffee, sour); exclude fat-free (1 Tbs)":"0","Non-dairy coffee whitener; exclude fat-free (1 Tbs)":"5","Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":"0","Regular ice cream (1 cup)":"0","Spreads added to food or bread; exclude use in cooking - Pure butter":"0","Spreads added to food or bread; exclude use in cooking - Margarine (e.g., Country Crock)":"0","Spreads added to food or bread; exclude use in cooking - Spreadable butter or butter/oil blend (e.g., Olivio spread butter)":"0","Yogurt (4-6 oz.) - Plain":"0","Yogurt (4-6 oz.) - Artificially sweetened (e.g., light peach)":"0","Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":"0","Cottage or ricotta cheese (1/2 cup)":"0","Cream cheese (1 oz.)":"0","Other cheese (e.g., American, cheddar, etc.); plain or as part of a dish (1 slice or 1 oz. serving)":"0","What type of cheese do you usually eat?":"1"},"your-diet-2":{"Raisins (1 oz. or small pack) or grapes (1/2 cup)":"0","Prunes or dried plums (¼ cup or 6 dried)":"0","Prune juice (small glass)":"0","Bananas (1)":"2","Cantaloupe (1/4 melon)":"0","Avocado (1/2 fruit or 1/2 cup)":"4","Fresh apples or pears (1)":"0","Apple juice or cider (small glass)":"0","Oranges (1)":"0","Orange juice (small glass)":"0","Orange juice - Calcium- or Vit. D-fortified":"0","Orange juice - Regular (not calcium-fortified)":"0","Grapefruit (1/2) or grapefruit juice (small glass)":"0","Other fruit juices (e.g., cranberry, grape) (small glass)":"0","Strawberries, fresh, frozen, or canned (1/2 cup)":"0","Blueberries, fresh, frozen, or canned (1/2 cup)":"5","Peaches or plums (1 fresh or 1/2 cup canned)":"0","Apricots (1 fresh, 1/2 cup canned, or 5 dried)":"0"},"your-diet-3":{"Tomatoes (2 slices)":"0","Tomato or V-8 juice (small glass)":"0","Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":"0","Salsa, picante, or taco sauce (1/4 cup)":"0","String beans (1/2 cup)":"0","Beans or lentils (baked, dried, or soup) (1/2 cup)":"0","Tofu, soy burger, soybeans, miso, or other soy protein":"0","Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":"0","Broccoli (1/2 cup)":"3","Cauliflower (1/2 cup)":"0","Cabbage or coleslaw (1/2 cup)":"0","Brussels sprouts (1/2 cup)":"0","Carrots (raw); (1/2 carrot or 2-4 sticks)":"0","Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":"0","Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":"0","Mixed vegetables (stir-fry or soup); (1/2 cup)":"0","Yams or sweet potatoes (1/2 cup)":"0","Dark orange (winter) squash (1/2 cup)":"0","Eggplant, zucchini, or other summer squash (1/2 cup)":"0","Kale, arugula, mustard greens, or chard (1/2 cup)":"0","Spinach (cooked); (1/2 cup)":"5","Spinach (raw); (1 cup)":"0","Iceberg or head lettuce (1 serving)":"0","Romaine or leaf lettuce (1 serving)":"0","Celery (2-3 sticks)":"0","Green, yellow or red peppers (2 rings or 1/4 small)":"0","Onions (raw, as a garnish or in salad); (1 slice)":"0","Onions, cooked (e.g., rings or soup); (1/2 cup)":"0"},"your-diet-4":{"Eggs (1) - Omega-3 fortified, including yolk":"0","Eggs (1) - Regular eggs, including yolk":"0","Beef or pork hot dogs (1)":"0","Chicken or turkey hot dogs or sausage (1)":"0","Chicken/turkey sandwich or frozen dinner":"0","Other chicken or turkey (including ground), with skin (3 oz)":"0","Other chicken or turkey, without skin (3 oz)":"0","Bacon (2 slices)":"0","Salami, bologna, or other processed meat sandwiches":"0","Other processed meats (e.g., sausage, kielbasa, etc.); (2 oz. or 2 small links)":"0","Hamburger (1 patty) - Lean or extra lean":"0","Hamburger (1 patty) - Regular":"0","Beef, pork, or lamb as a sandwich or mixed dish (e.g., stew, casserole, lasagna, frozen dinners, etc.); (1 serving)":"0","Pork as a main dish (e.g., ham or chops); (4-6 oz.)":"0","Beef or lamb as a main dish (e.g., steak, roast); (4-6 oz.)":"0","Canned tuna fish (3-4 oz.)":"0","Breaded fish cakes, pieces, or fish sticks (store bought)":"0","Shrimp, lobster, or scallops as a main dish":"0","Dark-meat fish (e.g., tuna steak, mackerel, salmon, sardines, bluefish, or swordfish); (3-5 oz.)":"0","Other fish (e.g., cod, haddock, halibut); (3-5 oz.)":"0"},"your-diet-5":{"Cold breakfast cereal (1 serving)":"5","Cooked oatmeal/cooked oat bran (including instant) (1 cup)":"2","Other cooked breakfast cereal (1 cup)":"2","Bread (1 slice) - White bread (including pita)":"0","Bread (1 slice) - Rye/Pumpernickel":"0","Bread (1 slice) - Whole wheat, oatmeal, other whole grain":"6","Crackers (6) - Whole grain/whole wheat":"5","Crackers (6) - Other crackers":"0","Bagels, English muffins, or rolls (1)":"0","Muffins or biscuits (1)":"2","Pancakes or waffles (2 small pieces)":"0","Brown rice (1 cup)":"0","White rice (1 cup)":"0","Pasta (e.g., spaghetti, noodles, couscous, etc.); (1 cup)":"0","Tortillas, corn or flour (2)":"0","French fries (6 oz. or 1 serving)":"0","Potatoes, baked, boiled, or mashed (1 cup)":"0","Potato chips or corn/tortilla chips (small bag or 1 oz.)":"0","Pizza (2 slices)":"0"},"your-diet-6":{"CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types_Low-calorie beverage with caffeine (e.g., Diet Coke)":"0","_Other low-calorie beverage without caffeine (e.g., Diet 7-Up)":"0","CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":"0","_Other sugared beverages (e.g., punch, lemonade, sports drinks)":"0","OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":"5","_Regular beer (1 glass, bottle, can)":"0","_Light beer (e.g., Bud Light); (1 glass, bottle, or can)":"0","_Red wine (5 oz. glass)":"0","_White wine (5 oz. glass)":"0","_Liquor (e.g., vodka, gin, etc.); (1 drink or shot)":"0"," _Plain water (bottled, sparkling, or tap); (8 oz. cup)":"0"," _Decaffeinated tea (exclude herbal); (8 oz. cup)":"0"," _Tea with caffeine (including green tea); (8 oz. cup)":"0","_Decaffeinated coffee (8 oz. cup)":"0"," _Coffee with caffeine (8 oz. cup)":"0"," _Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)":"0"},"your-diet-7":{"Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":"0","Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":"0","Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":"0","Candy without chocolate (1 oz.)":"0","Cookies (1) or brownie (1) Fat-free or reduced-fat":"0","Cookies (1) or brownie (1) Other ready-made, mix, or dough":"0","Cookies (1) or brownie (1) Home-baked, from scratch":"0","Doughnut (1)":"2","Cake (home-baked or ready made); (slice)":"0","Pie (home-baked or ready made); (slice)":"0","Jams, jellies, preserves, syrup, or honey (1 Tbs)":"3","Peanut butter (1 Tbs)":"0","Popcorn (2-3 cups) Fat-free or light":"2","Popcorn (2-3 cups) Regular":"0","Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":"0","Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":"5","Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":"5","High-protein bar (e.g., Atkins, Zone, South Beach); (1)":"0","Slimfast shake (1)":"0","Ensure, Boost, or other meal-replacement drink (1)":"0","Pretzels (1 small bag or serving)":"0","Peanuts (1 small packet or 1 oz.)":"0","Walnuts (1 oz.)":"0","Other nuts (1 small packet or 1 oz.)":"0","Mixed dried fruit (1/4 cup)":"0","Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":"0","Wheat germ (1 Tbs)":"0","Chowder or cream soup (1 cup)":"0","Tomato soup (1 cup)":"0","Ketchup or red chili sauce (1 Tbs)":"0","Flaxseed (1 Tbs)":"0","Garlic (fresh, or powdered); (1 clove or 4 shakes)":"0","Olive oil added to food or bread (1 Tbs)":"0","Low-fat or fat-free mayonnaise (1 Tbs)":"0","Regular mayonnaise (1 Tbs)":"0","Salad dressing (1-2 Tbs)":"0","Artificial sweeteners (1 packet)":"0","Type of salad dressing :":"1","Type of artificial sweetener :":"0","":"8","Type of salad dressing:":"3","Type of artificial sweetener:":"1"},"your-physical-activity":{"Walking for exercise or walking for transportation/errands":"3","Jogging (>10 min/mi)":"0","Running (<10 min/mi)":"0","Bicycling (include stationary machine)":"2","Tennis, squash, racquetball":"0","Lap swimming":"0","Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.)":"0","Lower-intensity exercise (e.g., yoga, stretching, toning)":"0","Other vigorous activities (e.g., lawn mowing)":"0","Arm weights":"0","Leg weights":"0","How many total flights of stairs (not individual steps) do you climb daily?":"2","What is your usual walking pace outdoors?":"2","":"5"},"your-smoking-history":{"Do you smoke cigarettes?":"Yes","How old were you when you started smoking? ":"16","How old were you when you quit smoking?":"20","How many cigarettes did you used to smoke per day, on average?":"5","Since starting smoking, how many cigarettes have you smoked per day, on average? ":"16","In the last month only, how many cigarettes have you smoked per day, on average? ":"16","How motivated are you to quit smoking? (Use the ladder below to indicate your motivation to quit smoking, with 0 being “I have not considered quitting” and 10 being “I am taking action to quit [ex: cutting down, enrolling in a program].” You can choose any value from 0 to 10.)":"7"}}

const PrefileJoeFruitCorrect = {"general-information":{"What is your sex assigned at birth?":"0","How old are you?":"36","What is your ethnicity? ":"1","What is your race (Select all that apply.)":["American Indian or Alaska Native","Black or African American"],"What is your highest level of education?":"5"},"medical-history":{"What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) ":"22","What is your weight (in pounds)? Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified? ":"0","Have you ever been diagnosed with any of the following conditions? (Select all that apply.)":["Type 1 diabetes mellitus","Psoriasis","Systemic lupus erythematosus (SLE, Lupus)"],"How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?":"2","Have you had your appendix removed for any reason?":"1","Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)":"Yes","Were you breast-fed when you were a baby?":"1","When you were a child or young adult, did you have pets in your home? ":"1","What age(s) did you take antibiotics? (Select all that apply.)":["0–10 years old"],"What is your weight (in pounds)? (Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever taken birth control pills?":"1"},"family-history":{"parents":"2","parents_0_Parent index":"0","parents_0_Parent index: Age at diagnosis":"1","parents_1_Parent index":"0","parents_1_Parent index: Age at diagnosis":"0"},"your-diet":{"Milk (8 oz. glass) Skim milk":"0","Milk (8 oz. glass) 1 or 2% milk":"0","Milk (8 oz. glass) Whole milk":"0","Milk (8 oz. glass) Soy milk":"0","Cream (e.g., coffee, sour); exclude fat-free (1 Tbs)":"0","Non-dairy coffee whitener; exclude fat-free (1 Tbs)":"0","Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":"0","Regular ice cream (1 cup)":"0","Spreads added to food or bread; exclude use in cooking - Pure butter":"0","Spreads added to food or bread; exclude use in cooking - Margarine (e.g., Country Crock)":"0","Spreads added to food or bread; exclude use in cooking - Spreadable butter or butter/oil blend (e.g., Olivio spread butter)":"0","Yogurt (4-6 oz.) - Plain":"0","Yogurt (4-6 oz.) - Artificially sweetened (e.g., light peach)":"0","Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":"5","Cottage or ricotta cheese (1/2 cup)":"0","Cream cheese (1 oz.)":"0","Other cheese (e.g., American, cheddar, etc.); plain or as part of a dish (1 slice or 1 oz. serving)":"0","What type of cheese do you usually eat?":"1"},"your-diet-2":{"Raisins (1 oz. or small pack) or grapes (1/2 cup)":"0","Prunes or dried plums (¼ cup or 6 dried)":"0","Prune juice (small glass)":"0","Bananas (1)":"3","Cantaloupe (1/4 melon)":"0","Avocado (1/2 fruit or 1/2 cup)":"2","Fresh apples or pears (1)":"0","Apple juice or cider (small glass)":"0","Oranges (1)":"0","Orange juice (small glass)":"0","Orange juice - Calcium- or Vit. D-fortified":"2","Orange juice - Regular (not calcium-fortified)":"0","Grapefruit (1/2) or grapefruit juice (small glass)":"0","Other fruit juices (e.g., cranberry, grape) (small glass)":"0","Strawberries, fresh, frozen, or canned (1/2 cup)":"3","Blueberries, fresh, frozen, or canned (1/2 cup)":"0","Peaches or plums (1 fresh or 1/2 cup canned)":"0","Apricots (1 fresh, 1/2 cup canned, or 5 dried)":"0"},"your-diet-3":{"Tomatoes (2 slices)":"2","Tomato or V-8 juice (small glass)":"0","Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":"0","Salsa, picante, or taco sauce (1/4 cup)":"0","String beans (1/2 cup)":"0","Beans or lentils (baked, dried, or soup) (1/2 cup)":"0","Tofu, soy burger, soybeans, miso, or other soy protein":"0","Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":"0","Broccoli (1/2 cup)":"0","Cauliflower (1/2 cup)":"0","Cabbage or coleslaw (1/2 cup)":"0","Brussels sprouts (1/2 cup)":"0","Carrots (raw); (1/2 carrot or 2-4 sticks)":"3","Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":"0","Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":"0","Mixed vegetables (stir-fry or soup); (1/2 cup)":"0","Yams or sweet potatoes (1/2 cup)":"0","Dark orange (winter) squash (1/2 cup)":"0","Eggplant, zucchini, or other summer squash (1/2 cup)":"0","Kale, arugula, mustard greens, or chard (1/2 cup)":"0","Spinach (cooked); (1/2 cup)":"0","Spinach (raw); (1 cup)":"0","Iceberg or head lettuce (1 serving)":"0","Romaine or leaf lettuce (1 serving)":"6","Celery (2-3 sticks)":"0","Green, yellow or red peppers (2 rings or 1/4 small)":"0","Onions (raw, as a garnish or in salad); (1 slice)":"0","Onions, cooked (e.g., rings or soup); (1/2 cup)":"0"},"your-diet-4":{"Eggs (1) - Omega-3 fortified, including yolk":"0","Eggs (1) - Regular eggs, including yolk":"0","Beef or pork hot dogs (1)":"0","Chicken or turkey hot dogs or sausage (1)":"0","Chicken/turkey sandwich or frozen dinner":"0","Other chicken or turkey (including ground), with skin (3 oz)":"0","Other chicken or turkey, without skin (3 oz)":"0","Bacon (2 slices)":"0","Salami, bologna, or other processed meat sandwiches":"0","Other processed meats (e.g., sausage, kielbasa, etc.); (2 oz. or 2 small links)":"0","Hamburger (1 patty) - Lean or extra lean":"0","Hamburger (1 patty) - Regular":"0","Beef, pork, or lamb as a sandwich or mixed dish (e.g., stew, casserole, lasagna, frozen dinners, etc.); (1 serving)":"0","Pork as a main dish (e.g., ham or chops); (4-6 oz.)":"0","Beef or lamb as a main dish (e.g., steak, roast); (4-6 oz.)":"0","Canned tuna fish (3-4 oz.)":"0","Breaded fish cakes, pieces, or fish sticks (store bought)":"0","Shrimp, lobster, or scallops as a main dish":"0","Dark-meat fish (e.g., tuna steak, mackerel, salmon, sardines, bluefish, or swordfish); (3-5 oz.)":"0","Other fish (e.g., cod, haddock, halibut); (3-5 oz.)":"0"},"your-diet-5":{"Cold breakfast cereal (1 serving)":"4","Cooked oatmeal/cooked oat bran (including instant) (1 cup)":"2","Other cooked breakfast cereal (1 cup)":"2","Bread (1 slice) - White bread (including pita)":"0","Bread (1 slice) - Rye/Pumpernickel":"0","Bread (1 slice) - Whole wheat, oatmeal, other whole grain":"6","Crackers (6) - Whole grain/whole wheat":"0","Crackers (6) - Other crackers":"0","Bagels, English muffins, or rolls (1)":"0","Muffins or biscuits (1)":"2","Pancakes or waffles (2 small pieces)":"0","Brown rice (1 cup)":"0","White rice (1 cup)":"0","Pasta (e.g., spaghetti, noodles, couscous, etc.); (1 cup)":"0","Tortillas, corn or flour (2)":"0","French fries (6 oz. or 1 serving)":"0","Potatoes, baked, boiled, or mashed (1 cup)":"0","Potato chips or corn/tortilla chips (small bag or 1 oz.)":"0","Pizza (2 slices)":"0"},"your-diet-6":{"CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types_Low-calorie beverage with caffeine (e.g., Diet Coke)":"0","_Other low-calorie beverage without caffeine (e.g., Diet 7-Up)":"0","CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":"0","_Other sugared beverages (e.g., punch, lemonade, sports drinks)":"0","OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":"5","_Regular beer (1 glass, bottle, can)":"0","_Light beer (e.g., Bud Light); (1 glass, bottle, or can)":"0","_Red wine (5 oz. glass)":"0","_White wine (5 oz. glass)":"0","_Liquor (e.g., vodka, gin, etc.); (1 drink or shot)":"0"," _Plain water (bottled, sparkling, or tap); (8 oz. cup)":"0"," _Decaffeinated tea (exclude herbal); (8 oz. cup)":"0"," _Tea with caffeine (including green tea); (8 oz. cup)":"0","_Decaffeinated coffee (8 oz. cup)":"0"," _Coffee with caffeine (8 oz. cup)":"0"," _Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)":"0"},"your-diet-7":{"Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":"0","Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":"0","Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":"0","Candy without chocolate (1 oz.)":"0","Cookies (1) or brownie (1) Fat-free or reduced-fat":"0","Cookies (1) or brownie (1) Other ready-made, mix, or dough":"0","Cookies (1) or brownie (1) Home-baked, from scratch":"0","Doughnut (1)":"0","Cake (home-baked or ready made); (slice)":"0","Pie (home-baked or ready made); (slice)":"0","Jams, jellies, preserves, syrup, or honey (1 Tbs)":"3","Peanut butter (1 Tbs)":"0","Popcorn (2-3 cups) Fat-free or light":"2","Popcorn (2-3 cups) Regular":"0","Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":"0","Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":"5","Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":"5","High-protein bar (e.g., Atkins, Zone, South Beach); (1)":"5","Slimfast shake (1)":"0","Ensure, Boost, or other meal-replacement drink (1)":"0","Pretzels (1 small bag or serving)":"0","Peanuts (1 small packet or 1 oz.)":"0","Walnuts (1 oz.)":"0","Other nuts (1 small packet or 1 oz.)":"0","Mixed dried fruit (1/4 cup)":"0","Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":"0","Wheat germ (1 Tbs)":"0","Chowder or cream soup (1 cup)":"0","Tomato soup (1 cup)":"0","Ketchup or red chili sauce (1 Tbs)":"0","Flaxseed (1 Tbs)":"0","Garlic (fresh, or powdered); (1 clove or 4 shakes)":"0","Olive oil added to food or bread (1 Tbs)":"0","Low-fat or fat-free mayonnaise (1 Tbs)":"0","Regular mayonnaise (1 Tbs)":"0","Salad dressing (1-2 Tbs)":"0","Artificial sweeteners (1 packet)":"0","Type of salad dressing :":"1","Type of artificial sweetener :":"0","":"8","Type of salad dressing:":"3","Type of artificial sweetener:":"1"},"your-physical-activity":{"Walking for exercise or walking for transportation/errands":"3","Jogging (>10 min/mi)":"0","Running (<10 min/mi)":"4","Bicycling (include stationary machine)":"0","Tennis, squash, racquetball":"6","Lap swimming":"0","Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.)":"0","Lower-intensity exercise (e.g., yoga, stretching, toning)":"0","Other vigorous activities (e.g., lawn mowing)":"0","Arm weights":"0","Leg weights":"0","How many total flights of stairs (not individual steps) do you climb daily?":"5","What is your usual walking pace outdoors?":"3","":"5"},"your-smoking-history":{"Do you smoke cigarettes?":"No–Quit","How old were you when you started smoking? ":"16","How old were you when you quit smoking?":"20","How many cigarettes did you used to smoke per day, on average?":"5","Since starting smoking, how many cigarettes have you smoked per day, on average? ":"16","In the last month only, how many cigarettes have you smoked per day, on average? ":"16","How motivated are you to quit smoking? (Use the ladder below to indicate your motivation to quit smoking, with 0 being “I have not considered quitting” and 10 being “I am taking action to quit [ex: cutting down, enrolling in a program].” You can choose any value from 0 to 10.)":"7"}}

const PrefileJoeFiberCorrect= {"general-information":{"What is your sex assigned at birth?":"0","How old are you?":"36","What is your ethnicity? ":"1","What is your race (Select all that apply.)":["American Indian or Alaska Native","Black or African American"],"What is your highest level of education?":"5"},"medical-history":{"What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) ":"22","What is your weight (in pounds)? Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified? ":"0","Have you ever been diagnosed with any of the following conditions? (Select all that apply.)":["Type 1 diabetes mellitus","Psoriasis","Systemic lupus erythematosus (SLE, Lupus)"],"How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?":"2","Have you had your appendix removed for any reason?":"1","Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)":"Yes","Were you breast-fed when you were a baby?":"1","When you were a child or young adult, did you have pets in your home? ":"1","What age(s) did you take antibiotics? (Select all that apply.)":["0–10 years old"],"What is your weight (in pounds)? (Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever taken birth control pills?":"1"},"family-history":{"parents":"2","parents_0_Parent index":"0","parents_0_Parent index: Age at diagnosis":"1","parents_1_Parent index":"0","parents_1_Parent index: Age at diagnosis":"0"},"your-diet":{"Milk (8 oz. glass) Skim milk":"0","Milk (8 oz. glass) 1 or 2% milk":"0","Milk (8 oz. glass) Whole milk":"0","Milk (8 oz. glass) Soy milk":"0","Cream (e.g., coffee, sour); exclude fat-free (1 Tbs)":"0","Non-dairy coffee whitener; exclude fat-free (1 Tbs)":"0","Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":"0","Regular ice cream (1 cup)":"0","Spreads added to food or bread; exclude use in cooking - Pure butter":"0","Spreads added to food or bread; exclude use in cooking - Margarine (e.g., Country Crock)":"0","Spreads added to food or bread; exclude use in cooking - Spreadable butter or butter/oil blend (e.g., Olivio spread butter)":"0","Yogurt (4-6 oz.) - Plain":"0","Yogurt (4-6 oz.) - Artificially sweetened (e.g., light peach)":"0","Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":"5","Cottage or ricotta cheese (1/2 cup)":"0","Cream cheese (1 oz.)":"0","Other cheese (e.g., American, cheddar, etc.); plain or as part of a dish (1 slice or 1 oz. serving)":"0","What type of cheese do you usually eat?":"1"},"your-diet-2":{"Raisins (1 oz. or small pack) or grapes (1/2 cup)":"0","Prunes or dried plums (¼ cup or 6 dried)":"0","Prune juice (small glass)":"0","Bananas (1)":"2","Cantaloupe (1/4 melon)":"0","Avocado (1/2 fruit or 1/2 cup)":"3","Fresh apples or pears (1)":"0","Apple juice or cider (small glass)":"0","Oranges (1)":"0","Orange juice (small glass)":"0","Orange juice - Calcium- or Vit. D-fortified":"0","Orange juice - Regular (not calcium-fortified)":"0","Grapefruit (1/2) or grapefruit juice (small glass)":"0","Other fruit juices (e.g., cranberry, grape) (small glass)":"0","Strawberries, fresh, frozen, or canned (1/2 cup)":"0","Blueberries, fresh, frozen, or canned (1/2 cup)":"4","Peaches or plums (1 fresh or 1/2 cup canned)":"0","Apricots (1 fresh, 1/2 cup canned, or 5 dried)":"0"},"your-diet-3":{"Tomatoes (2 slices)":"2","Tomato or V-8 juice (small glass)":"0","Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":"0","Salsa, picante, or taco sauce (1/4 cup)":"0","String beans (1/2 cup)":"0","Beans or lentils (baked, dried, or soup) (1/2 cup)":"0","Tofu, soy burger, soybeans, miso, or other soy protein":"0","Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":"0","Broccoli (1/2 cup)":"0","Cauliflower (1/2 cup)":"0","Cabbage or coleslaw (1/2 cup)":"0","Brussels sprouts (1/2 cup)":"0","Carrots (raw); (1/2 carrot or 2-4 sticks)":"3","Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":"0","Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":"0","Mixed vegetables (stir-fry or soup); (1/2 cup)":"0","Yams or sweet potatoes (1/2 cup)":"0","Dark orange (winter) squash (1/2 cup)":"0","Eggplant, zucchini, or other summer squash (1/2 cup)":"0","Kale, arugula, mustard greens, or chard (1/2 cup)":"0","Spinach (cooked); (1/2 cup)":"0","Spinach (raw); (1 cup)":"0","Iceberg or head lettuce (1 serving)":"0","Romaine or leaf lettuce (1 serving)":"6","Celery (2-3 sticks)":"0","Green, yellow or red peppers (2 rings or 1/4 small)":"0","Onions (raw, as a garnish or in salad); (1 slice)":"0","Onions, cooked (e.g., rings or soup); (1/2 cup)":"0"},"your-diet-4":{"Eggs (1) - Omega-3 fortified, including yolk":"0","Eggs (1) - Regular eggs, including yolk":"0","Beef or pork hot dogs (1)":"0","Chicken or turkey hot dogs or sausage (1)":"0","Chicken/turkey sandwich or frozen dinner":"0","Other chicken or turkey (including ground), with skin (3 oz)":"0","Other chicken or turkey, without skin (3 oz)":"0","Bacon (2 slices)":"0","Salami, bologna, or other processed meat sandwiches":"0","Other processed meats (e.g., sausage, kielbasa, etc.); (2 oz. or 2 small links)":"0","Hamburger (1 patty) - Lean or extra lean":"0","Hamburger (1 patty) - Regular":"0","Beef, pork, or lamb as a sandwich or mixed dish (e.g., stew, casserole, lasagna, frozen dinners, etc.); (1 serving)":"0","Pork as a main dish (e.g., ham or chops); (4-6 oz.)":"0","Beef or lamb as a main dish (e.g., steak, roast); (4-6 oz.)":"0","Canned tuna fish (3-4 oz.)":"0","Breaded fish cakes, pieces, or fish sticks (store bought)":"0","Shrimp, lobster, or scallops as a main dish":"0","Dark-meat fish (e.g., tuna steak, mackerel, salmon, sardines, bluefish, or swordfish); (3-5 oz.)":"0","Other fish (e.g., cod, haddock, halibut); (3-5 oz.)":"0"},"your-diet-5":{"Cold breakfast cereal (1 serving)":"5","Cooked oatmeal/cooked oat bran (including instant) (1 cup)":"2","Other cooked breakfast cereal (1 cup)":"2","Bread (1 slice) - White bread (including pita)":"0","Bread (1 slice) - Rye/Pumpernickel":"0","Bread (1 slice) - Whole wheat, oatmeal, other whole grain":"6","Crackers (6) - Whole grain/whole wheat":"0","Crackers (6) - Other crackers":"0","Bagels, English muffins, or rolls (1)":"0","Muffins or biscuits (1)":"2","Pancakes or waffles (2 small pieces)":"0","Brown rice (1 cup)":"0","White rice (1 cup)":"0","Pasta (e.g., spaghetti, noodles, couscous, etc.); (1 cup)":"0","Tortillas, corn or flour (2)":"0","French fries (6 oz. or 1 serving)":"0","Potatoes, baked, boiled, or mashed (1 cup)":"0","Potato chips or corn/tortilla chips (small bag or 1 oz.)":"0","Pizza (2 slices)":"0"},"your-diet-6":{"CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types_Low-calorie beverage with caffeine (e.g., Diet Coke)":"0","_Other low-calorie beverage without caffeine (e.g., Diet 7-Up)":"0","CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":"0","_Other sugared beverages (e.g., punch, lemonade, sports drinks)":"0","OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":"5","_Regular beer (1 glass, bottle, can)":"0","_Light beer (e.g., Bud Light); (1 glass, bottle, or can)":"0","_Red wine (5 oz. glass)":"0","_White wine (5 oz. glass)":"0","_Liquor (e.g., vodka, gin, etc.); (1 drink or shot)":"0"," _Plain water (bottled, sparkling, or tap); (8 oz. cup)":"0"," _Decaffeinated tea (exclude herbal); (8 oz. cup)":"0"," _Tea with caffeine (including green tea); (8 oz. cup)":"0","_Decaffeinated coffee (8 oz. cup)":"0"," _Coffee with caffeine (8 oz. cup)":"0"," _Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)":"0"},"your-diet-7":{"Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":"0","Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":"0","Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":"0","Candy without chocolate (1 oz.)":"0","Cookies (1) or brownie (1) Fat-free or reduced-fat":"0","Cookies (1) or brownie (1) Other ready-made, mix, or dough":"0","Cookies (1) or brownie (1) Home-baked, from scratch":"0","Doughnut (1)":"0","Cake (home-baked or ready made); (slice)":"0","Pie (home-baked or ready made); (slice)":"0","Jams, jellies, preserves, syrup, or honey (1 Tbs)":"3","Peanut butter (1 Tbs)":"0","Popcorn (2-3 cups) Fat-free or light":"2","Popcorn (2-3 cups) Regular":"0","Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":"0","Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":"5","Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":"5","High-protein bar (e.g., Atkins, Zone, South Beach); (1)":"5","Slimfast shake (1)":"0","Ensure, Boost, or other meal-replacement drink (1)":"0","Pretzels (1 small bag or serving)":"0","Peanuts (1 small packet or 1 oz.)":"0","Walnuts (1 oz.)":"0","Other nuts (1 small packet or 1 oz.)":"0","Mixed dried fruit (1/4 cup)":"0","Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":"0","Wheat germ (1 Tbs)":"0","Chowder or cream soup (1 cup)":"0","Tomato soup (1 cup)":"0","Ketchup or red chili sauce (1 Tbs)":"0","Flaxseed (1 Tbs)":"0","Garlic (fresh, or powdered); (1 clove or 4 shakes)":"0","Olive oil added to food or bread (1 Tbs)":"0","Low-fat or fat-free mayonnaise (1 Tbs)":"0","Regular mayonnaise (1 Tbs)":"0","Salad dressing (1-2 Tbs)":"0","Artificial sweeteners (1 packet)":"0","Type of salad dressing :":"1","Type of artificial sweetener :":"0","":"8","Type of salad dressing:":"3","Type of artificial sweetener:":"1"},"your-physical-activity":{"Walking for exercise or walking for transportation/errands":"3","Jogging (>10 min/mi)":"0","Running (<10 min/mi)":"4","Bicycling (include stationary machine)":"0","Tennis, squash, racquetball":"6","Lap swimming":"0","Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.)":"0","Lower-intensity exercise (e.g., yoga, stretching, toning)":"0","Other vigorous activities (e.g., lawn mowing)":"0","Arm weights":"0","Leg weights":"0","How many total flights of stairs (not individual steps) do you climb daily?":"5","What is your usual walking pace outdoors?":"3","":"5"},"your-smoking-history":{"Do you smoke cigarettes?":"No–Quit","How old were you when you started smoking? ":"16","How old were you when you quit smoking?":"20","How many cigarettes did you used to smoke per day, on average?":"5","Since starting smoking, how many cigarettes have you smoked per day, on average? ":"16","In the last month only, how many cigarettes have you smoked per day, on average? ":"16","How motivated are you to quit smoking? (Use the ladder below to indicate your motivation to quit smoking, with 0 being “I have not considered quitting” and 10 being “I am taking action to quit [ex: cutting down, enrolling in a program].” You can choose any value from 0 to 10.)":"7"}}

const PrefileJane = {"general-information":{"What is your sex assigned at birth?":"1","How old are you?":"28","What is your ethnicity? ":"0","What is your race (Select all that apply.)":["American Indian or Alaska Native","Black or African American"],"What is your highest level of education?":"5"},"medical-history":{"What is your height? (Please use your height reported on a valid I.D., such as a driver’s license.) ":"22","What is your weight (in pounds)? Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever been diagnosed with Crohn’s disease, ulcerative colitis, or inflammatory bowel disease (IBD)-unclassified? ":"0","Have you ever been diagnosed with any of the following conditions? (Select all that apply.)":["Type 1 diabetes mellitus","Psoriasis","Systemic lupus erythematosus (SLE, Lupus)"],"How often do you use non-steroidal anti-inflammatory drugs (NSAIDs), such as Advil, Motrin, Aleve, ibuprofen, or naproxen?":"1","Have you had your appendix removed for any reason?":"1","Have you ever taken antibiotics? (Antibiotics are medicines used to treat infections like urinary tract infections, pneumonia, diverticulitis, strep throat, ear or sinus infection, and some sexually transmitted infections. They include medicines like amoxicillin, Augmentin, azithromycin or 'Z-pack,' nitrofurantoin or Macrobid, or ciprofloxacin.)":"Yes","Were you breast-fed when you were a baby?":"0","When you were a child or young adult, did you have pets in your home? ":"1","What age(s) did you take antibiotics? (Select all that apply.)":["0–10 years old"],"What is your weight (in pounds)? (Please use the same scale to measure your weight throughout this study. The weight you list here should be measured within the last week.)":"22","Have you ever taken birth control pills?":"1"},"family-history":{"parents":"1","parents_0_Parent index":"0","parents_0_Parent index: Age at diagnosis":"1"},"your-diet":{"Milk (8 oz. glass) Skim milk":"0","Milk (8 oz. glass) 1 or 2% milk":"0","Milk (8 oz. glass) Whole milk":"0","Milk (8 oz. glass) Soy milk":"0","Cream (e.g., coffee, sour); exclude fat-free (1 Tbs)":"0","Non-dairy coffee whitener; exclude fat-free (1 Tbs)":"5","Frozen yogurt, sherbet, sorbet, or low-fat ice cream (1 cup)":"0","Regular ice cream (1 cup)":"0","Spreads added to food or bread; exclude use in cooking - Pure butter":"0","Spreads added to food or bread; exclude use in cooking - Margarine (e.g., Country Crock)":"0","Spreads added to food or bread; exclude use in cooking - Spreadable butter or butter/oil blend (e.g., Olivio spread butter)":"0","Yogurt (4-6 oz.) - Plain":"0","Yogurt (4-6 oz.) - Artificially sweetened (e.g., light peach)":"0","Yogurt (4-6 oz.) - Sweetened (e.g., strawberry, vanilla)":"0","Cottage or ricotta cheese (1/2 cup)":"0","Cream cheese (1 oz.)":"0","Other cheese (e.g., American, cheddar, etc.); plain or as part of a dish (1 slice or 1 oz. serving)":"0","What type of cheese do you usually eat?":"1"},"your-diet-2":{"Raisins (1 oz. or small pack) or grapes (1/2 cup)":"0","Prunes or dried plums (¼ cup or 6 dried)":"1","Prune juice (small glass)":"2","Bananas (1)":"3","Cantaloupe (1/4 melon)":"4","Avocado (1/2 fruit or 1/2 cup)":"5","Fresh apples or pears (1)":"6","Apple juice or cider (small glass)":"6","Oranges (1)":"0","Orange juice (small glass)":"0","Orange juice - Calcium- or Vit. D-fortified":"0","Orange juice - Regular (not calcium-fortified)":"0","Grapefruit (1/2) or grapefruit juice (small glass)":"0","Other fruit juices (e.g., cranberry, grape) (small glass)":"0","Strawberries, fresh, frozen, or canned (1/2 cup)":"0","Blueberries, fresh, frozen, or canned (1/2 cup)":"0","Peaches or plums (1 fresh or 1/2 cup canned)":"0","Apricots (1 fresh, 1/2 cup canned, or 5 dried)":"0"},"your-diet-3":{"Tomatoes (2 slices)":"0","Tomato or V-8 juice (small glass)":"0","Tomato sauce (e.g., spaghetti sauce) (1/2 cup)":"0","Salsa, picante, or taco sauce (1/4 cup)":"0","String beans (1/2 cup)":"0","Beans or lentils (baked, dried, or soup) (1/2 cup)":"0","Tofu, soy burger, soybeans, miso, or other soy protein":"0","Peas or lima beans (fresh, frozen, canned, or soup) (1/2 cup)":"0","Broccoli (1/2 cup)":"3","Cauliflower (1/2 cup)":"0","Cabbage or coleslaw (1/2 cup)":"0","Brussels sprouts (1/2 cup)":"0","Carrots (raw); (1/2 carrot or 2-4 sticks)":"0","Carrots (cooked); (1/2 cup) or carrot juice (2-3 oz.)":"0","Corn (fresh, frozen, or canned); (1 ear or 1/2 cup)":"0","Mixed vegetables (stir-fry or soup); (1/2 cup)":"0","Yams or sweet potatoes (1/2 cup)":"0","Dark orange (winter) squash (1/2 cup)":"0","Eggplant, zucchini, or other summer squash (1/2 cup)":"0","Kale, arugula, mustard greens, or chard (1/2 cup)":"0","Spinach (cooked); (1/2 cup)":"5","Spinach (raw); (1 cup)":"0","Iceberg or head lettuce (1 serving)":"0","Romaine or leaf lettuce (1 serving)":"0","Celery (2-3 sticks)":"0","Green, yellow or red peppers (2 rings or 1/4 small)":"0","Onions (raw, as a garnish or in salad); (1 slice)":"0","Onions, cooked (e.g., rings or soup); (1/2 cup)":"0"},"your-diet-4":{"Eggs (1) - Omega-3 fortified, including yolk":"0","Eggs (1) - Regular eggs, including yolk":"0","Beef or pork hot dogs (1)":"0","Chicken or turkey hot dogs or sausage (1)":"0","Chicken/turkey sandwich or frozen dinner":"0","Other chicken or turkey (including ground), with skin (3 oz)":"0","Other chicken or turkey, without skin (3 oz)":"0","Bacon (2 slices)":"0","Salami, bologna, or other processed meat sandwiches":"0","Other processed meats (e.g., sausage, kielbasa, etc.); (2 oz. or 2 small links)":"0","Hamburger (1 patty) - Lean or extra lean":"0","Hamburger (1 patty) - Regular":"0","Beef, pork, or lamb as a sandwich or mixed dish (e.g., stew, casserole, lasagna, frozen dinners, etc.); (1 serving)":"0","Pork as a main dish (e.g., ham or chops); (4-6 oz.)":"0","Beef or lamb as a main dish (e.g., steak, roast); (4-6 oz.)":"0","Canned tuna fish (3-4 oz.)":"0","Breaded fish cakes, pieces, or fish sticks (store bought)":"0","Shrimp, lobster, or scallops as a main dish":"0","Dark-meat fish (e.g., tuna steak, mackerel, salmon, sardines, bluefish, or swordfish); (3-5 oz.)":"0","Other fish (e.g., cod, haddock, halibut); (3-5 oz.)":"0"},"your-diet-5":{"Cold breakfast cereal (1 serving)":"3","Cooked oatmeal/cooked oat bran (including instant) (1 cup)":"2","Other cooked breakfast cereal (1 cup)":"2","Bread (1 slice) - White bread (including pita)":"0","Bread (1 slice) - Rye/Pumpernickel":"0","Bread (1 slice) - Whole wheat, oatmeal, other whole grain":"6","Crackers (6) - Whole grain/whole wheat":"5","Crackers (6) - Other crackers":"0","Bagels, English muffins, or rolls (1)":"0","Muffins or biscuits (1)":"2","Pancakes or waffles (2 small pieces)":"0","Brown rice (1 cup)":"0","White rice (1 cup)":"0","Pasta (e.g., spaghetti, noodles, couscous, etc.); (1 cup)":"0","Tortillas, corn or flour (2)":"0","French fries (6 oz. or 1 serving)":"0","Potatoes, baked, boiled, or mashed (1 cup)":"0","Potato chips or corn/tortilla chips (small bag or 1 oz.)":"0","Pizza (2 slices)":"0"},"your-diet-6":{"CARBONATED BEVERAGES Consider the serving size as 1 glass, bottle, or can for these carbonated beverages. Low-calorie (sugar-free) types_Low-calorie beverage with caffeine (e.g., Diet Coke)":"0","_Other low-calorie beverage without caffeine (e.g., Diet 7-Up)":"0","CARBONATED BEVERAGES Regular types (not sugar-free)_Carbonated beverage with caffeine and sugar (e.g., Coke, Pepsi, Mt. Dew, Dr. Pepper)":"0","_Other sugared beverages (e.g., punch, lemonade, sports drinks)":"0","OTHER BEVERAGES_Other sugared beverages (e.g., punch, lemonade, sports drinks, or sugared ice tea); (1 glass, bottle, can)":"5","_Regular beer (1 glass, bottle, can)":"0","_Light beer (e.g., Bud Light); (1 glass, bottle, or can)":"0","_Red wine (5 oz. glass)":"0","_White wine (5 oz. glass)":"0","_Liquor (e.g., vodka, gin, etc.); (1 drink or shot)":"0"," _Plain water (bottled, sparkling, or tap); (8 oz. cup)":"0"," _Decaffeinated tea (exclude herbal); (8 oz. cup)":"0"," _Tea with caffeine (including green tea); (8 oz. cup)":"0","_Decaffeinated coffee (8 oz. cup)":"0"," _Coffee with caffeine (8 oz. cup)":"0"," _Hot/cold dairy coffee drink (e.g., cappuccino); (16 oz.)":"0"},"your-diet-7":{"Milk chocolate (e.g., Hershey’s, M&M’s); (1 bar or package)":"0","Dark chocolate (e.g., Hershey’s Dark or Dove Dark); (1 bar)":"0","Candy bars (e.g., Snickers, Milky Way, Reeses); (1 bar)":"0","Candy without chocolate (1 oz.)":"0","Cookies (1) or brownie (1) Fat-free or reduced-fat":"0","Cookies (1) or brownie (1) Other ready-made, mix, or dough":"0","Cookies (1) or brownie (1) Home-baked, from scratch":"0","Doughnut (1)":"2","Cake (home-baked or ready made); (slice)":"0","Pie (home-baked or ready made); (slice)":"0","Jams, jellies, preserves, syrup, or honey (1 Tbs)":"3","Peanut butter (1 Tbs)":"0","Popcorn (2-3 cups) Fat-free or light":"2","Popcorn (2-3 cups) Regular":"0","Sweet roll, coffee cake, or other pastry (regular, fat-free, or reduced fat); (1)":"0","Breakfast bar (e.g., Nutrigrain, Kashi, granola); (1)":"5","Energy bar (e.g., Clif, Luna, Glucerna, Powerbar); (1)":"5","High-protein bar (e.g., Atkins, Zone, South Beach); (1)":"5","Slimfast shake (1)":"0","Ensure, Boost, or other meal-replacement drink (1)":"0","Pretzels (1 small bag or serving)":"0","Peanuts (1 small packet or 1 oz.)":"0","Walnuts (1 oz.)":"0","Other nuts (1 small packet or 1 oz.)":"0","Mixed dried fruit (1/4 cup)":"0","Oat bran, other bran (e.g., wheat, etc.) added to food (1 Tbs)":"0","Wheat germ (1 Tbs)":"0","Chowder or cream soup (1 cup)":"0","Tomato soup (1 cup)":"0","Ketchup or red chili sauce (1 Tbs)":"0","Flaxseed (1 Tbs)":"0","Garlic (fresh, or powdered); (1 clove or 4 shakes)":"0","Olive oil added to food or bread (1 Tbs)":"0","Low-fat or fat-free mayonnaise (1 Tbs)":"0","Regular mayonnaise (1 Tbs)":"0","Salad dressing (1-2 Tbs)":"0","Artificial sweeteners (1 packet)":"0","Type of salad dressing :":"1","Type of artificial sweetener :":"0","":"8","Type of salad dressing:":"3","Type of artificial sweetener:":"1"},"your-physical-activity":{"Walking for exercise or walking for transportation/errands":"3","Jogging (>10 min/mi)":"0","Running (<10 min/mi)":"0","Bicycling (include stationary machine)":"2","Tennis, squash, racquetball":"0","Lap swimming":"0","Other aerobic exercise (e.g., aerobic dance, ski or stair machine, etc.)":"0","Lower-intensity exercise (e.g., yoga, stretching, toning)":"0","Other vigorous activities (e.g., lawn mowing)":"0","Arm weights":"0","Leg weights":"0","How many total flights of stairs (not individual steps) do you climb daily?":"2","What is your usual walking pace outdoors?":"2","":"5"},"your-smoking-history":{"Do you smoke cigarettes?":"Yes","How old were you when you started smoking? ":"16","How old were you when you quit smoking?":"20","How many cigarettes did you used to smoke per day, on average?":"5","Since starting smoking, how many cigarettes have you smoked per day, on average? ":"16","In the last month only, how many cigarettes have you smoked per day, on average? ":"16","How motivated are you to quit smoking? (Use the ladder below to indicate your motivation to quit smoking, with 0 being “I have not considered quitting” and 10 being “I am taking action to quit [ex: cutting down, enrolling in a program].” You can choose any value from 0 to 10.)":"10"}}
const OptionalSurveyIntermidiareData=[
   { Text:'We have an optional short (7 questions) multiple-choice survey that will help further our research. We greatly appreciate you taking the survey, if you can.'
}]


const MeetTheTeamData = [
    {
        ImageTitle:{
            image:'/meet-the-team-emily.jpg',
            title:'Emily W. Lopes, M.D., M.P.H',
            subTitle:'Principal Investigator',
            number:"",
            Desc:'Dr. Emily W. Lopes is a gastroenterology specialist in inflammatory bowel disease (IBD) at Massachusetts General Hospital (MGH), an Instructor of Medicine at Harvard Medical School, and a Physician-Investigator in the MGH Clinical and Translational Epidemiology Unit (CTEU). She earned her M.D. from New York University School of Medicine, and completed her internal medicine residency, chief residency, general gastroenterology fellowship, and advanced IBD fellowship at MGH. She completed a Master of Public Health (M.P.H.) degree in Clinical Effectiveness at the Harvard T.H. Chan School of Public Health. Her research interests include understanding how dietary, lifestyle, and genetic factors influence the development and course of inflammatory bowel disease, as well as methods for studying disease prevention in IBD. Her research has been funded by the American College of Gastroenterology and National Institutes of Health (NIH).'
        }
    },
    {
        ImageTitle:{
            image:'/meet-the-team-rachel.png',
            title:'Rachel Zhang, B.S.',
            subTitle:'Research Coordinator',
            number:"617-643-5280",
            Desc:'Rachel Zhang joined as a Clinical Research Coordinator in May 2024. She graduated from Northeastern University in May 2024 with a Bachelor of Science in Biology and a minor in Data Science. Rachel is involved in multiple projects studying the potential preventative measures for various inflammatory bowel diseases, as well as the genetic, molecular, and lifestyle factors associated with microscopic colitis.'
             }
    },
    {
        ImageTitle:{
            image:'/meet-the-team-zeling.png',
            title:'Zeling Yu, B.S.',
            subTitle:'Research Coordinator',
            number:"617-643-5280",
            Desc:'Zeling Yu joined the PRE-Crohn’s Study team in September 2023 as a Clinical Research Coordinator. She graduated from the University of Minnesota in 2020 with a degree in Biochemistry and minors in Chemistry and Math. Zeling works on multiple studies investigating how environmental factors like diet and lifestyle affect gastrointestinal diseases, including microscopic colitis and Crohn’s disease, as well as patients undergoing ileoanal anastomosis surgery.'
        }
    },
   
    
]

const behaviorContent = {
    "You’re eating enough fruit": {
      title: "You’re eating enough fruit",
      content: `
        <p>Congratulations on maintaining a heart- and gut-healthy diet by eating plenty of fruit! Research has shown that people who eat higher amounts of fruit have a lower risk of getting Crohn’s disease. In one study, each additional serving of regular daily fruit consumption reduced Crohn’s disease risk by 12%!</p>
        <p>Learn more about  <a href="https://www.heart.org/en/healthy-living/healthy-eating/add-color/fresh-frozen-or-canned-fruits-and-vegetables-all-can-be-healthy-choices" target="_blank">how to increase your fruit intake.</a></p>
      `,
    },
    "You’re eating enough fiber": {
      title: "You’re eating enough fiber",
      content: `
        <p>Congrats on eating plenty of fiber in your diet! Several studies have found that eating a diet high in fiber lowers the risk of Crohn’s disease. Did you know that only 1 in 20 people in the US gets enough fiber in their diet?</p>
        <p>Fiber comes from foods like whole grains, fruit, and vegetables. Whole grains are found in foods like whole-wheat bread, oatmeal, brown rice, quinoa, and even corn.</p>
        <p>You are already doing a great job with your fiber intake, but if you are looking for additional healthy options, there are great resources showing the <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/types-of-whole-grains" target="_blank">types of whole grains found in food</a> and <a href="https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials/food-sources-select-nutrients/food-0" target="_blank">lists of high-fiber foods</a>.</p>
      `,
    },
    "You don’t eat too much sucrose (sugar)": {
      title: "You don’t eat too much sucrose (sugar)",
      content: `
        <p>Nice work, you are already eating a diet low in sugar. Several studies have suggested an association between sucrose, or table sugar, and an increased risk of Crohn’s disease.</p>
        <p>In a typical American diet, sugar primarily comes from sugar-containing beverages (like Coca-Cola, Pepsi, Mountain Dew, Dr. Pepper, punch, and sugar-sweetened iced tea) and desserts and pastries (like cakes, cookies, pies, donuts, muffins, and ice cream). Both the US Department of Health and Human Services and the American Heart Association recommend limiting your intake of added sugar and sugar-containing foods and beverages in your diet. Keep up the good work!</p>
      `,
    },
    "You're physically active": {
      title: "You’re physically active",
      content: `
        <p>Great work keeping your activity level up! Studies have shown that people who get regular exercise are less likely to get Crohn’s disease. These studies also show that the more you exercise, the lower the risk goes, so every little bit counts.</p>
        <p>Additionally, daily exercise is important for mental wellbeing, bone health, reducing risk of cardiovascular disease and diabetes, and more. Both the American Heart Association and US Department of Health and Human Services recommend 150 minutes of moderate physical activity (or 75 minutes of vigorous physical activity) per week to maintain cardiovascular health .</p>
        <p>Moderate physical activity is an activity that makes your heartbeat and breathing faster, but during this exercise you can still talk. This includes walking for exercise, walking for transportation/errands, dancing, light aerobics, light water aerobics, biking leisurely, and tennis (doubles).</p>
        <p>Vigorous physical activity is an activity that requires a higher amount of effort, and during which you can’t talk without becoming out of breath. This includes running, swimming laps, heavy yard work, tennis (singles), cycling, or jumping rope.</p>
        <p>You are already doing a great job exercising, but if you would like more information, the American Heart Association website lists <a href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults" target="_blank">recommendations for staying active</a>.</p>
      `,
    },
    "You don't smoke": {
      title: "You don’t smoke",
      content: `
        <p>Great job. By not smoking, you reduce your risk for many smoking-related diseases including Crohn’s disease, numerous cancers (like lung cancer, esophageal cancer, colon cancer, and bladder cancer), heart disease, stroke, diabetes, and other diseases.</p>
      `,
      extra: `
        <p>Congratulations! By quitting smoking, you have taken one of the most important steps to improving your overall health. Smoking has been shown to increase your risk of Crohn’s disease, numerous cancers (like lung cancer, esophageal cancer, colon cancer, and bladder cancer), heart disease, stroke, diabetes, and other diseases. Now that you have quit, your risk of many diseases will drop.</p>
        <p>In fact, in one study, people who quit smoking had an almost 50% reduced risk of Crohn’s compared to those who kept smoking.</p>
      `,
    },
  };
const behaviorContentDrop = {
    "Eat more fruit": {
      title: "Eat more fruit",
      content: `
        <p>Research has shown that people who eat higher amounts of fruit have a lower risk of getting Crohn’s disease. In one study, each additional daily serving of fruit consumption reduced Crohn’s disease risk by 12%!</p>
        <p><b>How can you increase fruit intake?</b></p>
        <ul>
          <li>Put fruit in yogurt or oatmeal for breakfast.</li>
          <li>Buy frozen fruit to put in smoothies. You can even add vegetables like spinach, too!</li>
          <li>Replace traditional desserts with fruit. For example, instead of a traditional cake, try this <a href="https://www.heart.org/en/healthy-living/healthy-eating/cooking-skills/cooking/fruit/watermelon-cake" target="_blank">watermelon cake recipe</a>.</li>
          <li>Make <a href="https://www.heart.org/en/healthy-living/healthy-eating/cooking-skills/cooking/fruit/diy-dried-fruit" target="_blank">do-it-yourself (“DIY”) dried fruit from fruit that you have in your home</a>.</li>
        </ul>
        <p>The American Heart Association website has <a href=" https://www.heart.org/en/healthy-living/healthy-eating/add-color/fresh-frozen-or-canned-fruits-and-vegetables-all-can-be-healthy-choices" target="_blank">tips for how to increase your fruit intake</a> .</p>
      `,
    },
    "Eat more fiber": {
      title: "Eat more fiber",
      content: `
        <p>Several studies have found that eating a diet high in fiber lowers the risk of Crohn’s disease. Did you know that only 1 in 20 people in the US gets enough fiber in their diet?</p>
        <p>Fiber comes from foods like whole grains, fruit, and vegetables. Whole grains are found in foods like whole-wheat bread, oatmeal, brown rice, quinoa, and even corn. Eating more whole grains and fiber can also help stabilize your blood sugar levels, help your cholesterol, and may also help your gut microbiome, which are the normal (and good) bacteria that live in your colon.</p>
        <p><b>How can you increase whole grains and fiber intake?</b></p>
        <ul>
          <li>Buy whole-grain bread or whole-wheat bread instead of white bread.</li>
          <li>Buy brown rice or wild rice instead of white rice.</li>
          <li>Put granola and fruit in yogurt for breakfast.</li>
          <li>Replace potato chips with light popcorn as a snack.</li>
          <li>Add beans to salads, casseroles, and soups. Beans are a low-cost and easy-to-store source of fiber.</li>
          <li>Don’t throw out stale bread! Instead, try this <a href="https://www.heart.org/en/healthy-living/healthy-eating/cooking-skills/cooking/grains/homemade-croutons" target="_blank">homemade crouton recipe</a> with whole-grain bread. There are also many other <a href="https://www.heart.org/en/healthy-living/healthy-eating/cooking-skills/cooking/grains/7-ways-to-use-stale-bread" target="_blank">other great ways to use up stale, whole-grain bread</a>. </li>
        </ul>
        <p>If you are looking for additional healthy options, there are great resources showing the <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/types-of-whole-grains" target="_blank">types of whole grains found in food</a> and <a href="https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials/food-sources-select-nutrients/food-0" target="_blank">lists of high-fiber foods.</a></p>
      `,
    },
    "Eat less sucrose (sugar)": {
      title: "Eat less sucrose (sugar)",
      content: `
        <p>Several studies have suggested an association between sucrose, or table sugar, and an increased risk of Crohn’s disease. Too much sugar also increases your risk of obesity, diabetes, heart disease, and more.</p>
        <p>In a typical American diet, sugar primarily comes from sugar-containing beverages (like Coca-Cola, Pepsi, Mountain Dew, Dr. Pepper, punch, and sugar-sweetened iced tea) and desserts and pastries (like cakes, cookies, pies, donuts, muffins, and ice cream). Most guidelines recommend limiting your sugar intake to less than 10% of your total calories—that’s about 45 grams per day of sugar for women and 55 grams per day of sugar for men​​. However, some guidelines, like the American Heart Association, recommend even less—no more than 25 grams per day for women and no more than 36 grams per day for men</p>
        <p><b>Try cutting down on your sugar intake. Here are some tips:</b></p>
        <ul>
          <li>Pay attention to nutrition labels and ingredients. Choose foods that have the lowest amount of “added sugars” or foods that have no added sugars.</li>
          <li>Many beverages are loaded with added sugars. Use these <a href="https://www.heart.org/en/healthy-living/healthy-eating/cooking-skills/cooking/fruit/12-infused-water-recipes" target="_blank">recipes to replace sugary drinks with fruit-infused water</a> for a boost of flavor, or try seltzer or sparkling water instead.</li>
          <li>For dessert, choose fruit salad instead of sugary desserts.</li>
          <li>When baking cookies or cakes, try cutting the sugar in half—you often won’t notice the difference..</li>
        </ul>
        <p>Here are <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar/tips-for-cutting-down-on-sugar" target="_blank">more tips on how to lower your sugar intake</a>.</p>
      `,
    },
    "Increase your physical activity": {
      title: "Increase your physical activity",
      content: `
        <p>Studies have shown that people who get regular exercise are less likely to get Crohn’s disease. These studies also show that the more you exercise, the lower the risk goes, so every little bit counts.</p>
        <p>Additionally, daily exercise is important for mental wellbeing, bone health, reducing risk of cardiovascular disease and diabetes, and more. Both the American Heart Association and US Department of Health and Human Services recommend 150 minutes of moderate physical activity (or 75 minutes of vigorous physical activity) per week to maintain cardiovascular health.</p>
        <ul>
        Moderate physical activity is an activity that makes your heartbeat and breathing faster, but during this exercise you can still talk. This includes walking for exercise, walking for transportation/errands, dancing, light aerobics, light water aerobics, biking leisurely, and tennis (doubles).  
        </ul>
        <ul>
        Vigorous physical activity is an activity that requires a higher amount of effort, and during which you can’t talk without becoming out of breath. This includes running, swimming laps, heavy yard work, tennis (singles), cycling, or jumping rope. 
        </ul>
        <p><b>How to increase your physical activity:</b></p>
        <ul>
          <li>Add more variety and fun to your weekly exercises, such as dancing.</li>
          <li>Recruit family and friends to exercise with you.</li>
          <li>Set timers to stand up and walk around every few hours during the day.</li>
          <li>Make reasonable exercise goals, stay motivated, and be consistent.</li>
        </ul>
        <p>For more information and tips on engaging in physical activity, visit: </p>
        <p><a href="https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults" target="_blank">American Heart Association recommendations for physical activity in adults and kids</a></p>
        <p><a href="https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" target="_blank">Centers for Disease Control and Prevention's recommended levels of physical activity</a></p>
        
      `,
    },
    "Quit smoking": {
      title: "Quit smoking",
      content: `
        <p>You've probably heard it before: Quitting is the #1 thing you can do to lower your risk of serious diseases, such as:</p>
        <ul>
          <li>Numerous cancers, including lung, esophageal, colon, and bladder cancer</li>
          <li>Heart disease</li>
          <li>Diabetes</li>
          <li>Stroke</li>
          <li>Osteoporosis</li>
          <li>Emphysema</li>
          <li>Bronchitis</li>
          <li>Crohn’s disease</li>
           
        </ul>
        <p>Nothing raises your risk of disease as much as smoking.</p>
        <p>Quitting smoking is one of the most important steps you can take to lower your risk of Crohn’s disease. In fact, in one study, though both former and current smokers had an increased risk for Crohn’s disease, those who smoked and then quit had an almost 50% reduced risk of Crohn’s compared to those who currently smoked​.</p>
        <p>Call or visit <b>1-800-QUIT-NOW</b> or visit <a href="https://smokefree.gov" target="_blank">smokefree.gov</a> for help quitting.</p>
      `,
    },
  };
  
export {cardHomeDataLeft,cardHomeDataRight,AboutTheStudy,GeneralInformationData,YourmedicalhistoryData,behaviorContent,behaviorContentDrop,
    FamilyHistoryData,CrohnRiskData,riskLevels,riskColors,InfoModalData,Yourdiet,Yourphysicalactivity,PrefileJaneFiberCorrect,PrefilJaneFuitisCorrect,
    Yoursmokinghistory,Yourdietcheese,YourdietVEGETABLES,YourdietMEAT,YoutdietBREADS,YoutdietBEVERAGES,PrefileJoeFruitCorrect,PrefileJoeFiberCorrect,
    YourdietSWEETS,KnowledgEandAttitudes,DiseaseInformation,ContactPageContent,Prefill,ThankYouData,OptionalSurveyIntermidiareData,MeetTheTeamData,PrefillJeoCaseOne,PrefillJaneCaseOne,PrefileJane} ;
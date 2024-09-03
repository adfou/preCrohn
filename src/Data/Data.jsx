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

export {cardHomeDataLeft,cardHomeDataRight,AboutTheStudy,GeneralInformationData,YourmedicalhistoryData,FamilyHistoryData,CrohnRiskData,riskLevels,riskColors,InfoModalData} ;
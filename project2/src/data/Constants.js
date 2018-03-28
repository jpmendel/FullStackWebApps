const Constants = {
  SERVER_URL: "https://www.eg.bucknell.edu/~amm042/service/",
  BUCKNELL_COURSE_INFO_URL: "https://www.bannerssb.bucknell.edu",
  DEPARTMENTS: [
    "ACFM (Acct & Financial Management)",
    "AFST (Africana Studies)",
    "ANBE (Animal Behavior)",
    "ANTH (Anthropology)",
    "ARBC (Arabic)",
    "ARTH (Art History)",
    "ARST (Art Studio)",
    "ASTR (Astronomy)",
    "BIOL (Biology)",
    "BMEG (Biomedical Engineering)",
    "CHEG (Chemical Engineering)",
    "CHEM (Chemistry)",
    "CHIN (Chinese)",
    "CEEG (Civil & Environmental Engr.)",
    "CLAS (Classics)",
    "CSCI (Computer Science)",
    "ENCW (Creative Writing)",
    "DANC (Dance)",
    "EAST (East Asian Studies)",
    "ECON (Economics)",
    "EDUC (Education)",
    "ECEG (Electrical & Computer Engr.)",
    "ENGR (Engineering)",
    "ENGL (English)",
    "ENST (Environmental Studies)",
    "ENFS (Film/Media Studies)",
    "FOUN (Foundation Seminar)",
    "FREN (French)",
    "GEOG (Geography)",
    "GEOL (Geology)",
    "GRMN (German)",
    "GLBM (Global Management)",
    "GREK (Greek)",
    "HEBR (Hebrew)",
    "HIST (History)",
    "HUMN (Humanities)",
    "IDPT (Interdepartmental)",
    "IREL (International Relations)",
    "ITAL (Italian)",
    "JAPN (Japanese)",
    "LATN (Latin)",
    "LAMS (Latin American Studies)",
    "LING (Linguistics)",
    "ENLS (Literary Studies)",
    "MGMT (Management)",
    "MSUS (Managing for Sustainability)",
    "MIDE (Markets, Innovation & Design)",
    "MATH (Mathematics)",
    "MECH (Mechanical Engineering)",
    "MILS (Military Science)",
    "MUSC (Music)",
    "NEUR (Neuroscience)",
    "OCST (Off Campus Study)",
    "PHIL (Philosophy)",
    "PHYS (Physics)",
    "POLS (Political Science)",
    "PSYC (Psychology)",
    "RELI (Religion)",
    "RESC (Residential Colleges)",
    "RUSS (Russian)",
    "SIGN (Sign Language)",
    "SOCI (Sociology)",
    "SPAN (Spanish)",
    "SLIF (Student Life)",
    "THEA (Theatre)",
    "UNIV (University Course)",
    "WMST (Women's and Gender Studies)"
  ],
  REQUIREMENTS: [
    "ARHC (Arts and Humanities)",
    "AHLG (Arts and Humanities Learning Goals)",
    "CBL (Community Based Learning)",
    "DUSC (Diversity in the U.S.)",
    "GLSP (Engr. Global and Societal Perspectives)",
    "EGHU (Engineering Humanities)",
    "EGSS (Engineering Social Science)",
    "EVCN (Environmental Connections)",
    "FRST (First Year Course)",
    "CCFL (Foreign Language)",
    "FOUN (Foundation Seminar)",
    "GBCC (Global Connections)",
    "CCIP (Integrated Perspectives)",
    "LBSC (Lab Science)",
    "NSMC (Natural Science and Mathematics)",
    "NMLG (Natural Science and Math Learning Goals)",
    "CCQR (Quantitative Reasoning)",
    "SL (Service Learning Course)",
    "SLSC (Social Science)",
    "SSLG (Social Science Learning Goals)",
    "W1 (Writing Level 1)",
    "W2 (Writing Level 2)"
  ],
  MAJORS: [
    {
      name: "Computer Engineering",
      courses: {
        FIRST_YEAR_COURSES: [
          "MATH 201", "PHYS 211", "ENGR 100",
          "MATH 202", "PHYS 212", "ECEG 100"
        ],
        SOPHOMORE_COURSES: [
          "MATH 211", "ECEG 210", "ECEG 240",
          "MATH 241", "ECEG 270", "ECEG 247"
        ],
        JUNIOR_COURSES: [
          "ECEG 370", "CSCI 204", "ECEG 301",
          "CSCI 205", "ECEG 310"
        ],
        SENIOR_COURSES: [
          "ECEG 400", "ECEG 401"
        ]
      },
    },
    {
      name: "Computer Science and Engineering",
      courses: {
        FIRST_YEAR_COURSES: [
          "MATH 201", "PHYS 211", "ENGR 100",
          "MATH 202", "PHYS 212", "CSCI 203"
        ],
        SOPHOMORE_COURSES: [
          "CSCI 204", "MATH 211", "CHEM 201",
          "CSCI 205", "CSCI 206", "ENGR 211", "MATH 222", "MATH 241"
        ],
        JUNIOR_COURSES: [
          "CSCI 208", "CSCI 315", "ECEG 101", "MATH 226",
          "CSCI 240", "CSCI 245", "CSCI 311", "ECEG 245"
        ],
        SENIOR_COURSES: [
          "CSCI 320", "CSCI 475", "MATH 343", "MATH 245",
          "CSCI 476"
        ]
      },
    },
    {
      name: "Electrical Engineering",
      courses: {
        FIRST_YEAR_COURSES: [
          "MATH 201", "PHYS 211", "ENGR 100",
          "MATH 202", "PHYS 212", "ECEG 100"
        ],
        SOPHOMORE_COURSES: [
          "MATH 211", "ECEG 210", "ECEG 240", "ECEG 201",
          "MATH 212", "MATH 245", "ECEG 270", "ECEG 247"
        ],
        JUNIOR_COURSES: [
          "CHEM 201", "PHYS 222", "ECEG 370", "ECEG 350", "ECEG 301",
          "ECEG 390", "ECEG 310"
        ],
        SENIOR_COURSES: [
          "ECEG 400", "ECEG 401"
        ]
      }
    }
  ],
  CLASS_YEARS: [
    "Any",
    "First Year",
    "Sophomore",
    "Junior",
    "Senior"
  ]
}

export default Constants;

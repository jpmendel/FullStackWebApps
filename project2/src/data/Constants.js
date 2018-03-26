const Constants = {
  SERVER_URL: "https://www.eg.bucknell.edu/~amm042/service/",
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
    { value: "ARHC", display: "Arts and Humanities" },
    { value: "AHLG", display: "Arts and Humanities Learning Goals" },
    { value: "CBL", display: "Community Based Learning" },
    { value: "DUSC", display: "Diversity in the U.S." },
    { value: "GLSP", display: "Engineering Global and Societal Perspectives" },
    { value: "EGHU", display: "Engineering Humanities" },
    { value: "EGSS", display: "Engineering Social Science" },
    { value: "EVCN", display: "Environmental Connections" },
    { value: "FRST", display: "First Year Course" },
    { value: "CCFL", display: "Foreign Language" },
    { value: "FOUN", display: "Foundation Seminar" },
    { value: "GBCC", display: "Global Connections" },
    { value: "CCIP", display: "Integrated Perspectives" },
    { value: "LBSC", display: "Lab Science" },
    { value: "NSMC", display: "Natural Science and Mathematics" },
    { value: "NMLG", display: "Natural Science and Mathematics Learning Goals" },
    { value: "CCQR", display: "Quantitative Reasoning" },
    { value: "SL", display: "Service Learning Course" },
    { value: "SLSC", display: "Social Science" },
    { value: "SSLG", display: "Social Science Learning Goals" },
    { value: "W1", display: "Writing Level 1" },
    { value: "W2", display: "Writing Level 2" }
  ],
  MAJORS: [
    "Computer Engineering",
    "Computer Science and Engineering",
    "Electrical Engineering"
  ],
  CLASS_YEARS: [
    "Any",
    "First Year",
    "Sophomore",
    "Junior",
    "Senior"
  ],
  COMPUTER_SCIENCE_MAJOR: {
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
  COMPUTER_ENGINEERING_MAJOR: {
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
  ELECTRICAL_ENGINEERING_MAJOR: {
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

export default Constants;

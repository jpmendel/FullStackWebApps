const Constants = {
  SERVER_URL: "https://www.eg.bucknell.edu/~amm042/service/",
  DEPARTMENTS: [
    { value: "ACFM", display: "ACFM (Acct & Financial Management)" },
    { value: "AFST", display: "AFST (Africana Studies)" },
    { value: "ANBE", display: "ANBE (Animal Behavior)" },
    { value: "ANTH", display: "ANTH (Anthropology)" },
    { value: "ARBC", display: "ARBC (Arabic)" },
    { value: "ARTH", display: "ARTH (Art History)" },
    { value: "ARST", display: "ARST (Art Studio)" },
    { value: "ASTR", display: "ASTR (Astronomy)" },
    { value: "BIOL", display: "BIOL (Biology)" },
    { value: "BMEG", display: "BMEG (Biomedical Engineering)" },
    { value: "CHEG", display: "CHEG (Chemical Engineering)" },
    { value: "CHEM", display: "CHEM (Chemistry)" },
    { value: "CHIN", display: "CHIN (Chinese)" },
    { value: "CEEG", display: "CEEG (Civil & Environmental Engr.)" },
    { value: "CLAS", display: "CLAS (Classics)" },
    { value: "CSCI", display: "CSCI (Computer Science)" },
    { value: "ENCW", display: "ENCW (Creative Writing)" },
    { value: "DANC", display: "DANC (Dance)" },
    { value: "EAST", display: "EAST (East Asian Studies)" },
    { value: "ECON", display: "ECON (Economics)" },
    { value: "EDUC", display: "EDUC (Education)" },
    { value: "ECEG", display: "ECEG (Electrical & Computer Engr.)" },
    { value: "ENGR", display: "ENGR (Engineering)" },
    { value: "ENGL", display: "ENGL (English)" },
    { value: "ENST", display: "ENST (Environmental Studies)" },
    { value: "ENFS", display: "ENFS (Film/Media Studies)" },
    { value: "FOUN", display: "FOUN (Foundation Seminar)" },
    { value: "FREN", display: "FREN (French)" },
    { value: "GEOG", display: "GEOG (Geography)" },
    { value: "GEOL", display: "GEOL (Geology)" },
    { value: "GRMN", display: "GRMN (German)" },
    { value: "GLBM", display: "GLBM (Global Management)" },
    { value: "GREK", display: "GREK (Greek)" },
    { value: "HEBR", display: "HEBR (Hebrew)" },
    { value: "HIST", display: "HIST (History)" },
    { value: "HUMN", display: "HUMN (Humanities)" },
    { value: "IDPT", display: "IDPT (Interdepartmental)" },
    { value: "IREL", display: "IREL (International Relations)" },
    { value: "ITAL", display: "ITAL (Italian)" },
    { value: "JAPN", display: "JAPN (Japanese)" },
    { value: "LATN", display: "LATN (Latin)" },
    { value: "LAMS", display: "LAMS (Latin American Studies)" },
    { value: "LING", display: "LING (Linguistics)" },
    { value: "ENLS", display: "ENLS (Literary Studies)" },
    { value: "MGMT", display: "MGMT (Management)" },
    { value: "MSUS", display: "MSUS (Managing for Sustainability)" },
    { value: "MIDE", display: "MIDE (Markets, Innovation & Design)" },
    { value: "MATH", display: "MATH (Mathematics)" },
    { value: "MECH", display: "MECH (Mechanical Engineering)" },
    { value: "MILS", display: "MILS (Military Science)" },
    { value: "MUSC", display: "MUSC (Music)" },
    { value: "NEUR", display: "NEUR (Neuroscience)" },
    { value: "OCST", display: "OCST (Off Campus Study)" },
    { value: "PHIL", display: "PHIL (Philosophy)" },
    { value: "PHYS", display: "PHYS (Physics)" },
    { value: "POLS", display: "POLS (Political Science)" },
    { value: "PSYC", display: "PSYC (Psychology)" },
    { value: "RELI", display: "RELI (Religion)" },
    { value: "RESC", display: "RESC (Residential Colleges)" },
    { value: "RUSS", display: "RUSS (Russian)" },
    { value: "SIGN", display: "SIGN (Sign Language)" },
    { value: "SOCI", display: "SOCI (Sociology)" },
    { value: "SPAN", display: "SPAN (Spanish)" },
    { value: "SLIF", display: "SLIF (Student Life)" },
    { value: "THEA", display: "THEA (Theatre)" },
    { value: "UNIV", display: "UNIV (University Course)" },
    { value: "WMST", display: "WMST (Women's and Gender Studies)" }
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

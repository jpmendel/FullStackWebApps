const Constants = {
  SERVER_URL: "https://www.eg.bucknell.edu/~amm042/service/",
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

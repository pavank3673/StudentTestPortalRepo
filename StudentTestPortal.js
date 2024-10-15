import { question } from "readline-sync";

let studentsList = [{}];

studentsList[0] = {
  roll_no: 101,
  name: "sam",
  class: 6,
  gender: "M",
  test_score: [],
};

studentsList[1] = {
  roll_no: 102,
  name: "aman",
  class: 7,
  gender: "M",
  test_score: [],
};

studentsList[2] = {
  roll_no: 103,
  name: "devin",
  class: 7,
  gender: "M",
  test_score: [],
};

studentsList[3] = {
  roll_no: 104,
  name: "adam",
  class: 8,
  gender: "M",
  test_score: [],
};

studentsList[4] = {
  roll_no: 105,
  name: "roger",
  class: 9,
  gender: "M",
  test_score: [],
};

studentsList[5] = {
  roll_no: 106,
  name: "carl",
  class: 7,
  gender: "M",
  test_score: [],
};

studentsList[6] = {
  roll_no: 107,
  name: "monte",
  class: 6,
  gender: "F",
  test_score: [],
};

studentsList[7] = {
  roll_no: 108,
  name: "kassing",
  class: 6,
  gender: "F",
  test_score: [],
};

studentsList[8] = {
  roll_no: 109,
  name: "matthew",
  class: 8,
  gender: "M",
  test_score: [],
};

studentsList[9] = {
  roll_no: 110,
  name: "mark",
  class: 9,
  gender: "M",
  test_score: [],
};

studentsList[10] = {
  roll_no: 111,
  name: "jack",
  class: 6,
  gender: "M",
  test_score: [],
};

studentsList[11] = {
  roll_no: 112,
  name: "john",
  class: 6,
  gender: "M",
  test_score: [],
};

studentsList[12] = {
  roll_no: 113,
  name: "Frank",
  class: 7,
  gender: "F",
  test_score: [],
};

studentsList[13] = {
  roll_no: 114,
  name: "George",
  class: 8,
  gender: "M",
  test_score: [],
};

studentsList[14] = {
  roll_no: 115,
  name: "Hank",
  class: 7,
  gender: "M",
  test_score: [],
};

studentsList[15] = {
  roll_no: 116,
  name: "larry",
  class: 6,
  gender: "F",
  test_score: [],
};

studentsList[16] = {
  roll_no: 117,
  name: "nathan",
  class: 9,
  gender: "M",
  test_score: [],
};

studentsList[17] = {
  roll_no: 118,
  name: "peter",
  class: 7,
  gender: "M",
  test_score: [],
};

studentsList[18] = {
  roll_no: 119,
  name: "steve",
  class: 6,
  gender: "M",
  test_score: [],
};

studentsList[19] = {
  roll_no: 120,
  name: "thomas",
  class: 6,
  gender: "M",
  test_score: [],
};

studentsList[20] = {
  roll_no: 121,
  name: "victor",
  class: 7,
  gender: "M",
  test_score: [],
};

studentsList[21] = {
  roll_no: 122,
  name: "walter",
  class: 7,
  gender: "M",
  test_score: [],
};

studentsList[22] = {
  roll_no: 123,
  name: "sellon",
  class: 6,
  gender: "M",
  test_score: [],
};

studentsList[23] = {
  roll_no: 124,
  name: "sweeney",
  class: 7,
  gender: "F",
  test_score: [],
};

studentsList[24] = {
  roll_no: 125,
  name: "trusela",
  class: 7,
  gender: "F",
  test_score: [],
};

function takeTest() {
  for (let student of studentsList) {
    student.test_score = [
      {
        sub_name: "Physics",
        marks: Math.floor(Math.random() * 100),
      },
      {
        sub_name: "Chemistry",
        marks: Math.floor(Math.random() * 100),
      },
      {
        sub_name: "Mathematics",
        marks: Math.floor(Math.random() * 100),
      },
    ];
  }

  menuDisplay();
}

function viewResult() {
  for (let student of studentsList) {
    student.total_marks = student.test_score.reduce((total, score) => {
      return total + score.marks;
    }, 0);

    student.percentage = (student.total_marks / 300) * 100;
  }

  menuDisplay();
}

function viewStudentsResult() {
  console.log(
    "\nClass Results:\n+------+---------+-------------+-------------------+\n| Name | Roll No | Total Marks | Percentage        | \n+------+---------+-------------+-------------------+"
  );

  for (let student of studentsList) {
    if (student.total_marks == undefined) {
      student.total_marks = student.test_score.reduce((total, score) => {
        return total + score.marks;
      }, 0);
    }
    if (student.percentage == undefined) {
      student.percentage = (student.total_marks / 300) * 100;
    }

    console.log(
      student.name +
        "\t" +
        student.roll_no +
        "\t  " +
        student.total_marks +
        "\t\t" +
        student.percentage
    );
  }

  menuDisplay();
}

function viewClasswiseResult() {
  let classInput = question("Enter Class to view the result : ");

  console.log(
    "\nClass Results:\n+------+---------+-------------+-------------------+\n| Name | Roll No | Total Marks | Percentage        | \n+------+---------+-------------+-------------------+"
  );
  for (let student of studentsList) {
    if (student.class == classInput) {
      console.log(
        student.name +
          "\t" +
          student.roll_no +
          "\t  " +
          student.total_marks +
          "\t\t" +
          student.percentage
      );
    }
  }

  menuDisplay();
}

function menuDisplay() {
  let choice = question(
    "Display Menu :-\n 1) Take Test \n 2) View Result \n 3) View Students Result \n 4) View Classwise Result \n"
  );

  if (choice == 1) {
    takeTest();
  } else if (choice == 2) {
    viewResult();
  } else if (choice == 3) {
    viewStudentsResult();
  } else if (choice == 4) {
    viewClasswiseResult();
  }
}

menuDisplay();

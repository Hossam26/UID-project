import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cours-page',
  templateUrl: './cours-page.component.html',
  styleUrls: ['./cours-page.component.css'],
})
export class CoursPageComponent implements OnInit {
  id: any = 0;
  contents: Array<any> = [];
  constructor(private _ActivatedRoute: ActivatedRoute) {
    this.id = Number(_ActivatedRoute.snapshot.paramMap.get('id'));
    if (this.id == 1) {
      this.contents = this.course_content1;
    }
    if (this.id == 2) {
      this.contents = this.course_content2;
    }
    if (this.id == 3) {
      this.contents = this.course_content3;
    }
    if (this.id == 4) {
      this.contents = this.course_content4;
    }
  }

  course_name = [
    {
      courseName: 'Data Science Math Skills ',
      about_course:
        'Data science courses contain math—no avoiding that! This course is designed to teach learners the basic math you will need in order to be successful in almost any data science math course and was created for learners who have basic math skills but may not have taken algebra or pre-calculus. Data Science Math Skills introduces the core math that data science is built upon, with no extra complexity, introducing unfamiliar ideas and math symbols one-at-a-time. ',
    },
    {
      courseName: 'Bitcoin and Cryptocurrency Technologies',
      about_course:
        'To really understand what is special about Bitcoin, we need to understand how it works at a technical level. We’ll address the important questions about Bitcoin',
    },
    {
      courseName: 'Programming Languages, Part A',
      about_course:
        'This course is an introduction to the basic concepts of programming languages, with a strong emphasis on functional programming.',
    },
    {
      courseName: 'Computer Science: Programming with a Purpose',
      about_course:
        'The basis for education in the last millennium was “reading, writing, and arithmetic;” now it is reading, writing, and computing. Learning to program is an essential part of the education of every student',
    },
  ];
  Instructors = [
    {
      Name: 'Daniel Egger',
      work: 'Executive in Residence and Director, Center for Quantitative Modeling',
      numLearners: ' 936,313',
      courses: '8 courses',
    },
    {
      Name: ' Arvind Narayanan',
      work: 'Associate Professor Computer Science',
      numLearners: ' 651,281',
      courses: '1 courses',
    },
    {
      Name: ' Dan Grossman',
      work: 'ProfessorComputer Science & Engineering',
      numLearners: ' 158,036',
      courses: '3 Courses',
    },
    {
      Name: ' Robert Sedgewick',
      work: 'William O. Baker *39 Professor of Computer Science',
      numLearners: ' 1,166,942',
      courses: '7 Courses',
    },
  ];

  course_content1 = [
    {
      Week: '1',
      contentName: 'Welcome to Data Science Math Skills',
      dis: 'This short module includes an overview of the courses structure working process and information about course certificates',
      time: ' 18 minutes to complete',
      vid: '1 video (Total 3 min), 2 readings',
    },
    {
      Week: '2',
      contentName: 'Functions and Graphs',
      dis: 'This module builds vocabulary for graphing functions in the plane. In the first lesson,',
      time: '3 hours to complete',
      vid: '8 videos (Total 72 min), 3 readings, 3 quizzes',
    },
    {
      Week: '3',
      contentName: 'Measuring Rates of Change',
      dis: 'This module begins a very gentle introduction to the calculus concept of the derivative. The first lesson',
      time: '3 hours to complete',
      vid: '7 videos (Total 66 min), 3 readings, 3 quizzes',
    },
    {
      Week: '4',
      contentName: 'Introduction to Probability Theory',
      dis: 'Exact answers are often cumbersome, so we next consider a scientific approach to developing approximate answers that, again, mathematicians and scientists have used for centuries.',
      time: '3 hours to complete',
      vid: '8 videos (Total 66 min), 4 readings, 4 quizzes',
    },
  ];

  course_content2 = [
    {
      Week: '1',
      contentName: 'Introduction to Crypto and Cryptocurrencies',
      dis: 'Learn about cryptographic building blocks ("primitives") and reason about their security.',
      time: ' 4 hours to complete',
      vid: '6 videos (Total 59 min), 1 reading, 1 quiz',
    },
    {
      Week: '2',
      contentName: 'How Bitcoin Achieves Decentralization',
      dis: 'Learn Bitcoins consensus mechanism and reason about its security',
      time: '1 hour to complete',
      vid: '5 videos (Total 74 min)',
    },
    {
      Week: '3',
      contentName: 'Mechanics of Bitcoin',
      dis: 'earn how the individual components of the Bitcoin protocol make the whole system tick: transactions, script',
      time: '1 hour to complete',
      vid: '6 videos (Total 78 min)',
    },
    {
      Week: '4',
      contentName: 'How to Store and Use Bitcoins',
      dis: 'This week we will explore how using Bitcoins works in practice: different ways of storing Bitcoin keys',
      time: '4 hours to complete',
      vid: '7 videos (Total 81 min)',
    },
  ];
  course_content3 = [
    {
      Week: '1',
      contentName: 'Introduction and Course-Wide Information (Start Here)',
      dis: 'Welcome! Start here! Learn about this course and how its organized.',
      time: ' 2 hours to complete',
      vid: '7 videos (Total 56 min), 5 readings',
    },
    {
      Week: '2',
      contentName: 'Software Installation and Homework 0',
      dis: 'This module contains two things: (1) The information for the [unusual] software you need to install for Programming Languages Part A',
      time: '2 hours to complete',
      vid: '4 videos (Total 9 min), 3 readings, 2 quizzes',
    },
    {
      Week: '3',
      contentName: 'Section 1 and Homework 1',
      dis: 'Its time to dive in! Start with a careful reading of the Section 1 Welcome Message" and go from there.',
      time: '6 hours to complete',
      vid: '17 videos (Total 150 min), 6 readings, 2 quizzes',
    },
    {
      Week: '4',
      contentName: 'Section 3 and Homework 3 -- and Course Motivation',
      dis: 'This section is all about higher-order functions -- the feature that gives functional programming much of its expressiveness and elegance',
      time: '8 hours to complete',
      vid: '28 videos (Total 247 min), 6 readings, 2 quizzes',
    },
  ];

  course_content4 = [
    {
      Week: '1',
      contentName: 'BASIC PROGRAMMING CONCEPTS',
      dis: 'Why program? This lecture addresses that basic question. Then it describes the anatomy of your first program and the process of developing a program in Java using either virtual terminals',
      time: ' 10 hours to complete',
      vid: '4 videos (Total 75 min), 2 readings, 2 quizzes',
    },
    {
      Week: '2',
      contentName: 'CONDITIONALS AND LOOPS',
      dis: 'The if, while, and for statements are Javas fundamental control structures. ',
      time: '9 hours to complete',
      vid: '5 videos (Total 56 min), 2 readings, 2 quizzes',
    },
    {
      Week: '3',
      contentName: 'ARRAYS',
      dis: 'earn how the individual components of the Bitcoin protocol make the whole system tick: transactions, script',
      time: '9 hours to complete',
      vid: '3 videos (Total 57 min), 2 readings, 2 quizzes',
    },
    {
      Week: '4',
      contentName: 'INPUT AND OUTPUT',
      dis: 'To interact with our programs, we need mechanisms for taking information from the outside world and for presenting information to the outside world',
      time: '9 hours to complete',
      vid: '4 videos (Total 49 min), 2 readings, 2 quizzes',
    },
  ];

  ngOnInit(): void {}
}

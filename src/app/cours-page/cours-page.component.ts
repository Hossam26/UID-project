import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cours-page',
  templateUrl: './cours-page.component.html',
  styleUrls: ['./cours-page.component.css'],
})
export class CoursPageComponent implements OnInit {
  id:any = '';
  constructor(private _ActivatedRoute: ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');    
  }
  course_name = [
    {
      courseName: 'Analysis of Algorithms',
      about_course:
        'This course teaches a calculus that enables precise quantitative predictions of large combinatorial structures. In addition, this course covers generating functions and real asymptotics and then introduces the symbolic method in the context of applications in the analysis of algorithms and basic structures such as permutations, trees, strings, words, and mappings All the features of this course are available for free.It does not offer a certificate upon completion.',
    },
  ];
  Instructors = [
    {
      Name: 'Kashmira Shukla',
      work: 'Instructional Designer',
      numLearners: '152,406',
      courses: '1 course',
    },
  ];
  course_content = [
    {
      Week: '1',
      contentName: 'Analysis of Algorithms',
      dis: 'We begin by considering historical context and motivation for the scientific study of algorithm performance. Then we consider a classic example that illustrates the key ingredients of the process: the analysis of Quicksort. The lecture concludes with a discussion of some resources that you might find useful during this course.',
      time: ' 2 hours to complete',
      vid: '4 videos (Total 76 min), 2 readings, 1 quiz',
    },
    {
      Week: '2',
      contentName: 'Recurrences',
      dis: 'We begin this lecture with an overview of recurrence relations, which provides us with a direct mathematical model for the analysis of algorithms. We finish by examining the fascinating oscillatory behavior of the divide-and-conquer recurrence corresponding to the mergesort algorithm and the general "master theorem" for related recurrences.',
      time: '3 hours to complete',
      vid: '5 videos (Total 71 min), 1 reading, 3 quizzes',
    },
    {
      Week: '3',
      contentName: 'Generating Functions',
      dis: 'Since the 17th century, scientists have been using generating functions to solve recurrences, so we continue with an overview of generating functions, emphasizing their utility in solving problems like counting the number of binary trees with N nodes.',
      time: '2 hours to complete',
      vid: '5 videos (Total 84 min), 1 reading, 1 quiz',
    },
    {
      Week: '4',
      contentName: 'Asymptotics',
      dis: 'Exact answers are often cumbersome, so we next consider a scientific approach to developing approximate answers that, again, mathematicians and scientists have used for centuries.',
      time: '2 hours to complete',
      vid: '4 videos (Total 83 min), 1 reading, 1 quiz',
    },
  ];

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  registeredCourses = [
    {
      color: 'red',
      title: 'Course 1',
      assignments: [
        {
          title: 'Assignment 1',
          deadline: '2021-05-01',
        },
        {
          title: 'Assignment 2',
          deadline: '2021-05-01',
        },
      ],
    },
    {
      color: 'green',
      title: 'Course 2',
      assignments: [
        {
          title: 'Assignment 1',
          deadline: '2021-05-01',
        },
        {
          title: 'Assignment 2',
          deadline: '2021-05-01',
        },
      ],
    },
    {
      color: 'blue',
      title: 'Course 3',
      assignments: [
        {
          title: 'Assignment 1',
          deadline: '2021-05-01',
        },
        {
          title: 'Assignment 2',
          deadline: '2021-05-01',
        },
      ],
    },
    {
      color: 'yellow',
      title: 'Course 4',
      assignments: [
        {
          title: 'Assignment 1',

          deadline: '2021-05-01',
        },
        {
          title: 'Assignment 2',
          deadline: '2021-05-01',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

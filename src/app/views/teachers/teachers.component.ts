import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/interfaces/teacher';

@Component({
  selector: 'tna-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = [
    {
      name: 'Mr. Reacher',
      id: '087YGF65R',
      role: [
        'TEACHER',
        'ADMIN'
      ],
      socialLinks: [
        {icon: 'lni-facebook-filled', name: 'Facebook', url: 'https://facebook.com'},
        {icon: 'lni-twitter-original', name: 'Twitter', url: 'https://twitter.com'},
        {icon: 'lni-linkedin-original', name: 'LinkedIn', url: 'https://linkedin.com'},
        {icon: 'lni-behance-original', name: 'Behance', url: 'https://behance.com'},
      ],
      tags: ['JavaScript', 'PHP', 'HTML', 'CSS'],
      imgSrc: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
      name: 'Mr. Reacher',
      id: '087YGF65R',
      role: [
        'TEACHER',
        'ADMIN'
      ],
      socialLinks: [
        {icon: 'lni-facebook-filled', name: 'Facebook', url: 'https://facebook.com'},
        {icon: 'lni-twitter-original', name: 'Twitter', url: 'https://twitter.com'},
        {icon: 'lni-linkedin-original', name: 'LinkedIn', url: 'https://linkedin.com'},
        {icon: 'lni-behance-original', name: 'Behance', url: 'https://behance.com'},
      ],
      tags: ['JavaScript', 'PHP', 'HTML', 'CSS'],
      imgSrc: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
      name: 'Mr. Reacher',
      id: '087YGF65R',
      role: [
        'TEACHER',
        'ADMIN'
      ],
      socialLinks: [
        {icon: 'lni-facebook-filled', name: 'Facebook', url: 'https://facebook.com'},
        {icon: 'lni-twitter-original', name: 'Twitter', url: 'https://twitter.com'},
        {icon: 'lni-linkedin-original', name: 'LinkedIn', url: 'https://linkedin.com'},
        {icon: 'lni-behance-original', name: 'Behance', url: 'https://behance.com'},
      ],
      tags: ['JavaScript', 'PHP', 'HTML', 'CSS'],
      imgSrc: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
      name: 'Mr. Reacher',
      id: '087YGF65R',
      role: [
        'TEACHER',
        'ADMIN'
      ],
      socialLinks: [
        {icon: 'lni-facebook-filled', name: 'Facebook', url: 'https://facebook.com'},
        {icon: 'lni-twitter-original', name: 'Twitter', url: 'https://twitter.com'},
        {icon: 'lni-linkedin-original', name: 'LinkedIn', url: 'https://linkedin.com'},
        {icon: 'lni-behance-original', name: 'Behance', url: 'https://behance.com'},
      ],
      tags: ['JavaScript', 'PHP', 'HTML', 'CSS'],
      imgSrc: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
      name: 'Mr. Reacher',
      id: '087YGF65R',
      role: [
        'TEACHER',
        'ADMIN'
      ],
      socialLinks: [
        {icon: 'lni-facebook-filled', name: 'Facebook', url: 'https://facebook.com'},
        {icon: 'lni-twitter-original', name: 'Twitter', url: 'https://twitter.com'},
        {icon: 'lni-linkedin-original', name: 'LinkedIn', url: 'https://linkedin.com'},
        {icon: 'lni-behance-original', name: 'Behance', url: 'https://behance.com'},
      ],
      tags: ['JavaScript', 'PHP', 'HTML', 'CSS'],
      imgSrc: 'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
      name: 'Mr. Reacher',
      id: '087YGF65R',
      role: [
        'TEACHER',
        'ADMIN'
      ],
      socialLinks: [
        {icon: 'lni-facebook-filled', name: 'Facebook', url: 'https://facebook.com'},
        {icon: 'lni-twitter-original', name: 'Twitter', url: 'https://twitter.com'},
        {icon: 'lni-linkedin-original', name: 'LinkedIn', url: 'https://linkedin.com'},
        {icon: 'lni-behance-original', name: 'Behance', url: 'https://behance.com'},
      ],
      tags: ['JavaScript', 'PHP', 'HTML', 'CSS'],
      imgSrc: 'https://randomuser.me/api/portraits/men/47.jpg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

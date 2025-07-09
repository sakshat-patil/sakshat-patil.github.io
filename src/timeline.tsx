// src/data/timelineItems.ts

import 'react-vertical-timeline-component/style.min.css';
import './VerticalTimeline.css'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export interface TimelineItem {
    date: string;
    title: string;
    subtitle?: string;
    description?: string;
    icon?: React.ReactNode;  // you can pass in a FaGraduationCap, FaBriefcase, etc.
  }
  
  export const timelineItems: TimelineItem[] = [
    {
      date: '2020 – 2024',
      title: 'B.Sc. Computer Science',
      subtitle: 'University XYZ',
      description: 'Graduated with honors, GPA 3.8/4.0',
      icon: <FaGraduationCap />,
    },
    {
      date: '2024 – Present',
      title: 'MSSE Candidate',
      subtitle: 'San José State University',
      description: 'Focusing on cloud-native systems & AI',
      icon: <FaGraduationCap />,
    },
    {
      date: '2021 – 2023',
      title: 'Backend Engineer',
      subtitle: 'Reliance Jio',
      description: 'Built and scaled microservices on Kubernetes',
      icon: <FaBriefcase />,
    },
    // …add more entries as needed
  ];
  
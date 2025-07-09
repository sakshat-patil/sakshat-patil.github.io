// src/components/VerticalTimeline.tsx
import React from 'react';
import {
  VerticalTimeline as RVTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { timelineItems } from './timeline';

const VerticalTimeline: React.FC = () => (
  <RVTimeline lineColor="#888">
    {timelineItems.map((item, idx) => (
      <VerticalTimelineElement
        key={idx}
        date={item.date}
        iconStyle={{ background: '#333', color: '#fff' }}
        icon={item.icon}
        contentStyle={{ background: '#222', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #222' }}
      >
        <h3 style={{ margin: 0 }}>{item.title}</h3>
        {item.subtitle && <h4 style={{ margin: '0.25em 0' }}>{item.subtitle}</h4>}
        {item.description && <p style={{ margin: 0 }}>{item.description}</p>}
      </VerticalTimelineElement>
    ))}
  </RVTimeline>
);

export default VerticalTimeline;

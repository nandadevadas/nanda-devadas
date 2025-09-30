import React from 'react';

const timelineData = [
  {
    title: "B.Sc. Biotechnology",
    details: "University of Calicut",
    duration: "2015-2018 • First Class, Distinction",
    inProgress: false,
  },
  {
    title: "M.Sc. Biotechnology",
    details: "Mahatma Gandhi University",
    duration: "2018-2020 • First Rank, Distinction",
    inProgress: false,
  },
  {
    title: "Bachelor of Education (B.Ed.)",
    details: "University of Calicut",
    duration: "2020-2022 • First Class, Distinction",
    inProgress: false,
  },
  {
    title: "IGCSE Biology & Science Teacher",
    details: "AIMEE International School",
    duration: "2023-2025",
    inProgress: true,
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
            My Road So Far: From Foundations to Future Goals
          </h2>
        </div>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-1">{item.details}</p>
              <p className="text-sm text-muted-foreground">
                {item.duration}
                {item.inProgress && (
                  <span className="ml-2 inline-block px-2 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                    In progress
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

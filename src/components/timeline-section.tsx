import React from 'react';

const timelineData = [
  {
    title: "B.Sc. Biotechnology",
    institution: "University of Calicut",
    duration: "2015–2018",
    status: "First Class, Distinction",
    inProgress: false,
  },
  {
    title: "M.Sc. Biotechnology",
    institution: "Mahatma Gandhi University",
    duration: "2018–2020",
    status: "First Rank, Distinction",
    inProgress: false,
  },
  {
    title: "Bachelor of Education (B.Ed.)",
    institution: "University of Calicut",
    duration: "2020–2022",
    status: "First Class, Distinction",
    inProgress: false,
  },
  {
    title: "Cambridge IGCSE Biology & Science Teacher",
    institution: "AIMEE International School",
    duration: "2023–April 2025",
    status: "",
    inProgress: false, 
  },
  {
    title: "Toward Ontario Classrooms",
    institution: "On Track: OCT- Licensure",
    duration: "",
    status: "",
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
              <p className="text-muted-foreground mb-1">{item.institution}</p>
              <p className="text-sm text-muted-foreground">{item.duration}</p>
              <p className="text-sm text-muted-foreground">
                {item.status}
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

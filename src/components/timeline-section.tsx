import { timelineMilestones } from "@/lib/data";
import { GraduationCap, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const WaveSvg = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1100 100"
      preserveAspectRatio="none"
      className="absolute top-1/2 left-0 -translate-y-1/2"
      aria-hidden="true"
    >
      <path
        d="M0 50 Q 137.5 10, 275 50 T 550 50 T 825 50 T 1100 50"
        stroke="var(--timeline-accent-dark)"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );

export default function TimelineSection() {
    return (
        <section id="timeline-road-so-far" className="w-full bg-card py-16 md:py-24 lg:py-28">
            <div className="container max-w-[1100px] px-7 md:px-10 lg:px-16">
                <div className="text-center mb-8">
                    <h2 className="font-timeline-heading text-3xl md:text-4xl lg:text-[42px] leading-tight -tracking-tight text-timeline-text">
                        My Road So Far: From Foundations to Future
                    </h2>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative h-64 mt-8">
                    <WaveSvg />
                    <div className="relative z-10 timeline-container">
                        {timelineMilestones.map((milestone, index) => {
                            const isAbove = milestone.type === 'degree';
                            return (
                                <div key={index} className={cn("group relative flex flex-col items-center timeline-item", isAbove ? "justify-end" : "justify-start")}>
                                    <div className={cn("flex flex-col items-center", isAbove ? "absolute bottom-[calc(50%+36px)]" : "absolute top-[calc(50%+36px)]")}>
                                        <div className="text-center w-max max-w-[200px]">
                                            {milestone.type === 'degree' && (
                                                <GraduationCap className="mx-auto mb-2 h-7 w-7 text-timeline-accent-dark" aria-hidden="true" />
                                            )}
                                            <h3 className="font-timeline-body-semibold text-lg leading-tight group-hover:underline">{milestone.title}</h3>
                                            <p className="font-timeline-body text-base text-timeline-text/90">{milestone.institution}</p>
                                            <p className="font-timeline-body text-base text-timeline-text/90">{milestone.date} {milestone.details && `• ${milestone.details}`}</p>
                                        </div>
                                    </div>
                                    <div className="absolute w-0.5 h-9 bg-dotted-stem top-1/2 -translate-y-1/2 group-hover:bg-timeline-accent" />
                                    <div className="absolute rounded-full w-3 h-3 bg-timeline-accent-dark top-1/2 -translate-y-1/2 transition-transform group-hover:scale-115" />
                                </div>
                            )
                        })}
                         <div className="group absolute right-0 top-1/2 -translate-y-1/2">
                            <div className="relative flex items-center justify-center w-[84px] h-[84px] bg-timeline-accent-dark rounded-full text-white">
                                <Target className="absolute top-1 right-1 h-4 w-4" />
                                <div className="text-center">
                                    <p className="font-timeline-body-semibold text-sm uppercase tracking-wider">OCT</p>
                                    <p className="font-timeline-body text-xs">In progress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden mt-12">
                  <div className="relative pl-8">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-timeline-accent-dark" />
                    {timelineMilestones.map((milestone, index) => (
                      <div key={index} className="relative mb-8 last:mb-0">
                        <div className="absolute -left-2.5 top-1.5 w-3 h-3 rounded-full bg-timeline-accent-dark" />
                         <div className="absolute left-0 top-2.5 w-5 h-0.5 bg-muted" />
                        <div className="pl-4">
                           {milestone.type === 'degree' && (
                                <GraduationCap className="mb-2 h-6 w-6 text-timeline-accent-dark" aria-hidden="true" />
                            )}
                          <h3 className="font-timeline-body-semibold text-base">{milestone.title}</h3>
                          <p className="font-timeline-body text-sm text-timeline-text/90">{milestone.institution}</p>
                          <p className="font-timeline-body text-sm text-timeline-text/90">{milestone.date} {milestone.details && `• ${milestone.details}`}</p>
                        </div>
                      </div>
                    ))}
                     <div className="relative">
                        <div className="absolute -left-2.5 top-1.5 w-3 h-3 rounded-full bg-timeline-accent-dark" />
                         <div className="absolute left-0 top-2.5 w-5 h-0.5 bg-muted" />
                        <div className="pl-4 flex items-center gap-4">
                            <div className="relative flex items-center justify-center w-16 h-16 bg-timeline-accent-dark rounded-full text-white">
                                <Target className="absolute top-1 right-1 h-3 w-3" />
                                <div className="text-center">
                                    <p className="font-timeline-body-semibold text-xs uppercase tracking-wider">OCT</p>
                                    <p className="font-timeline-body text-[10px]">In progress</p>
                                </div>
                            </div>
                             <p className="font-timeline-body-semibold text-base">OCT Certification (In Progress)</p>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </section>
    );
}

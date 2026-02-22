import { MailIcon, MapPinIcon, LinkedInIcon } from "./icons";

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="sec-heading-row">
      <h2 className="sec-h2 font-heading">{title}</h2>
      <div className="sec-line" />
    </div>
  );
}

/* ── ABOUT ── */
export function AboutSection() {
  return (
    <section id="about">
      <header className="about-header">
        <div className="about-top">
          <h1 className="about-h1 font-heading">Ryan Haney</h1>
          <p className="about-bio">
            Strategic consultant and technical delivery manager with 15+ years
            implementing enterprise Atlassian solutions — spanning cloud
            migrations, ITSM/ESM, DevEx optimization, and AI-driven automation.
            Full deal-cycle owner from pre-sales discovery through post-sales
            expansion, across budgets up to $2M and clients in government,
            aerospace, SaaS, financial services, and education.
          </p>
        </div>
        <div className="contact-row">
          <a href="mailto:ryanmichaelhaney@gmail.com">
            <MailIcon />
            <span>ryanmichaelhaney@gmail.com</span>
          </a>
          <span>
            <MapPinIcon />
            <span>Brick, NJ</span>
          </span>
          <a
            href="https://linkedin.com/in/ryanhaney5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </div>
      </header>
    </section>
  );
}

/* ── EXPERIENCE ── */
interface ExperienceItem {
  logo: string;
  logoClass: string;
  role: string;
  company: string;
  companyNote?: string;
  dates: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    logo: "MC",
    logoClass: "l-mc",
    role: "Atlassian Delivery & Licensing Team Manager / Sr. Principal Atlassian Consultant",
    company: "Modus Create",
    dates: "Jul 2023 — Present",
    bullets: [
      "Delivered 42.5% CSAT increase and 25\u201350% reduction in consultant non-billable time by overhauling delivery standards and resource planning across a team of 7.",
      "Lead end-to-end lifecycle on the most complex Atlassian engagements \u2014 Cloud Migrations, JSM/ESM, Competitor Take-outs \u2014 managing budgets up to $2M across concurrent workstreams.",
      "Drive pre-sales from discovery through close: Crunchbase/LinkedIn research, tailored discovery calls, solution design, SoW authoring, and proposal presentations.",
      "Streamlined Delivery Plan creation via Loom + AI + Confluence automation; built HubSpot licensing workflow automations; partnered with Marketing on GTM content.",
      "Personally led or rescued highest-risk engagements; maintain post-delivery client relationships to drive upsells.",
    ],
  },
  {
    logo: "IC",
    logoClass: "l-ic",
    role: "Senior Technology Strategist & Application Administrator",
    company: "Independent Consultant",
    dates: "Aug 2022 — Jul 2023",
    bullets: [
      "Multi-client administration and optimization of Atlassian (Jira, JSM, Confluence, JPD \u2014 DC and Cloud), monday.com, Notion, Slack, and third-party integrations.",
    ],
  },
  {
    logo: "MB",
    logoClass: "l-mb",
    role: "Product & Service Offering Designer",
    company: "Magic Button Labs",
    companyNote: "(Part-time)",
    dates: "Aug 2022 — Jul 2023",
    bullets: [
      "Designed remote-collaboration products and services; built customized technical solutions and dynamic reporting dashboards for distributed teams.",
    ],
  },
  {
    logo: "CC",
    logoClass: "l-cc",
    role: "Director of Operations & Process Engineering",
    company: "Code Clearing House",
    companyNote: "(Part-time)",
    dates: "Oct 2022 — Mar 2023",
    bullets: [
      "Drove operational excellence at a rapidly growing startup: contract authoring, tooling/SOPs assessment, CRM/PM automation, and strategic recommendations to maximize revenue.",
    ],
  },
  {
    logo: "AV",
    logoClass: "l-av",
    role: "Technical Consultant",
    company: "Adaptavist",
    dates: "Jul 2019 — Aug 2022",
    bullets: [
      "Scoped, architected, and delivered Atlassian solutions for enterprise clients; full sales lifecycle contributor including pre-sales, proposal authoring, demo builds, and land-and-expand opportunities.",
    ],
  },
  {
    logo: "AA",
    logoClass: "l-aa",
    role: "Atlassian Solutions Architect",
    company: "Atlas Authority",
    dates: "Jun 2018 — Jul 2019",
    bullets: [
      "Atlassian SME for telecom and financial services clients; architected complex approval workflows for Hedge Fund/PE clients on Server, DC, and Cloud; Tier 1\u20133 admin for 2,000\u201310,000 user instances.",
    ],
  },
  {
    logo: "CV",
    logoClass: "l-cv",
    role: "US Technical Consultant",
    company: "ClearVision",
    dates: "Jul 2016 — Jan 2018",
    bullets: [
      "Delivered discovery, implementation, and training engagements; managed full project lifecycles to SoW deliverables on time and within budget.",
    ],
  },
  {
    logo: "LH",
    logoClass: "l-lh",
    role: "Sr. Associate / Associate — App Development & Integration",
    company: "LiquidHub, Inc.",
    dates: "Apr 2014 — Jun 2016",
    bullets: [
      "Led design and implementation of customized technical solutions across enterprise functional groups; supported sales with service offering materials and live SaaS demonstrations.",
    ],
  },
  {
    logo: "AL",
    logoClass: "l-al",
    role: "Associate Consultant",
    company: "Alliance Life Sciences Consulting Group",
    dates: "Jul 2012 — Oct 2013",
    bullets: [
      "Configured enterprise applications, executed UAT/regression testing, and developed case studies and training materials for client delivery.",
    ],
  },
  {
    logo: "DR",
    logoClass: "l-dr",
    role: "Channel Development Associate",
    company: "Dataram Corporation",
    dates: "Jun 2011 — May 2012",
    bullets: [
      "Prospected new enterprise business channels; cold-called 100+ C-Level executives daily; recruited and led intern team through targeted marketing campaigns.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeading title="Experience" />
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div className="exp-entry" key={i}>
            <div className="exp-top">
              <div className="exp-left">
                <div className={`exp-logo ${exp.logoClass}`}>{exp.logo}</div>
                <div className="exp-role-stack">
                  <span className="exp-role font-heading">{exp.role}</span>
                  <span className="exp-company">
                    {exp.company}
                    {exp.companyNote && (
                      <span
                        style={{
                          color: "var(--border)",
                          fontWeight: 400,
                          marginLeft: "0.35rem",
                        }}
                      >
                        {exp.companyNote}
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <span className="exp-dates">{exp.dates}</span>
            </div>
            <ul className="exp-bullets">
              {exp.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── KEY ENGAGEMENTS ── */
interface EngagementItem {
  tag: string;
  role: string;
  company: string;
  bullets: string[];
}

const engagements: EngagementItem[] = [
  {
    tag: "DC \u2192 Cloud Migration",
    role: "Jira Software + JSM Data Center to Cloud",
    company: "Cloud-First File Storage & Collaboration Platform",
    bullets: [
      "Co-sold with Atlassian AE/SE; produced feature parity docs and designed workarounds for blockers that had caused the client to defer migration for 12+ months.",
      "Strategically staffed 3 consultants at 50% capacity to distribute migration responsibilities; received direct client commendation for execution quality.",
    ],
  },
  {
    tag: "New Implementation",
    role: "GitLab \u2192 Jira Implementation & Enablement",
    company: "Enterprise-Grade Password & Secrets Management Platform",
    bullets: [
      "Stepped in mid-engagement after contractor departure; simultaneously served as Sr. Principal Consultant, co-delivery lead, enablement specialist, and Atlassian licensing liaison.",
      "Built custom Python/REST API scripts via Cursor AI to bulk-update Jira project roles across 100s of projects; delivered training integrated directly into client LMS.",
    ],
  },
  {
    tag: "Competitor Take-out",
    role: "Legacy Helpdesk \u2192 JSM Migration",
    company: "Multi-Unit Restaurant & Hospitality Operations SaaS",
    bullets: [
      "Led full solution design, demo build and delivery, and Atlassian SE collaboration to address ROI, tier features, license costs, and compliance requirements.",
    ],
  },
  {
    tag: "Workflow Optimization",
    role: "Jira + GitHub Integration & Developer Workflow Optimization",
    company: "Security Software & Developer Tools Companies (Multiple Clients)",
    bullets: [
      "Configured Jira-GitHub integrations, designed developer-optimized schemas and workflows, and built REST API automation rules to auto-transition issues on PR merge events.",
    ],
  },
];

export function EngagementsSection() {
  return (
    <section id="engagements">
      <SectionHeading title="Key Engagements" />
      <div className="exp-list">
        {engagements.map((eng, i) => (
          <div className="eng-entry" key={i}>
            <div className="eng-tag">{eng.tag}</div>
            <div className="exp-top" style={{ marginTop: "0.25rem" }}>
              <div className="exp-left" style={{ alignItems: "flex-start" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.125rem",
                  }}
                >
                  <span className="eng-role font-heading">{eng.role}</span>
                  <span className="eng-company">{eng.company}</span>
                </div>
              </div>
            </div>
            <ul className="exp-bullets" style={{ paddingLeft: 0 }}>
              {eng.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── SKILLS ── */
interface SkillGroup {
  name: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    name: "Atlassian Core",
    skills: [
      "Atlassian Rovo", "Atlassian Intelligence", "Jira Software",
      "Jira Service Management", "Jira Work Management", "Jira Product Discovery",
      "Confluence", "Atlassian Guard", "Loom + AI", "JSM Assets",
      "Automation for Jira", "Atlassian Analytics", "Cloud Platform (All Tiers)",
    ],
  },
  {
    name: "Marketplace Apps",
    skills: [
      "ScriptRunner for Jira", "Jira Suite Utilities", "JMWE", "Rich Filters",
      "ALM Works Structure", "Tempo Timesheets", "Tempo Planner", "ProForma",
      "Backbone Issue Sync", "Exalate", "ConfiForms", "Comalatech Suite",
    ],
  },
  {
    name: "AI Tools",
    skills: [
      "Atlassian Rovo", "Claude / Claude Code", "ChatGPT Pro", "Cursor AI",
      "Google Gemini", "Perplexity AI", "Microsoft CoPilot", "HubSpot AI",
      "Notion AI", "Slack AI", "v0 by Vercel", "Zapier / Make / n8n",
    ],
  },
  {
    name: "AI Skills",
    skills: [
      "Prompt Engineering", "Context Engineering", "Rovo Agent Development",
      "AI Tool Authentication", "AI Tool Integration", "AI Video Editing",
    ],
  },
  {
    name: "Other SaaS",
    skills: [
      "HubSpot", "Notion", "Slack", "monday.com", "Asana", "Miro / Mural",
      "Figma", "Google Workspace", "Airtable", "SmartSheet", "Office 365", "Workday",
    ],
  },
  {
    name: "Core Strengths",
    skills: [
      "Solution Architecture", "Pre-Sales Engineering", "Delivery Management",
      "Cloud Migration", "ITSM / ESM", "SoW Authoring", "Team Leadership",
      "Executive Communication", "REST API / Automation", "Process Engineering",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeading title="Skills & Tools" />
      <div className="skills-list">
        {skillGroups.map((group, i) => (
          <div className="skill-group" key={i}>
            <h3 className="skill-group-name font-heading">{group.name}</h3>
            <div className="pills">
              {group.skills.map((skill, j) => (
                <span className="pill" key={j}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── EDUCATION ── */
export function EducationSection() {
  return (
    <section id="education">
      <SectionHeading title="Education & Certifications" />
      <div className="edu-list">
        {/* Degree */}
        <div className="edu-entry">
          <div className="edu-top">
            <div className="edu-left">
              <div className="edu-logo" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.125rem",
                }}
              >
                <span className="edu-title font-heading">
                  Bachelor of Science, Interdisciplinary Business
                </span>
                <span className="edu-sub">The College of New Jersey</span>
              </div>
            </div>
            <span className="exp-dates">2012</span>
          </div>
        </div>

        {/* Atlassian Certs */}
        <div className="edu-entry">
          <div className="edu-top">
            <div className="edu-left">
              <div className="edu-logo" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.125rem",
                }}
              >
                <span className="edu-title font-heading">
                  Atlassian Accreditations & Certifications
                </span>
                <span className="edu-sub">Atlassian</span>
              </div>
            </div>
          </div>
          <ul className="exp-bullets" style={{ paddingLeft: 0 }}>
            <div className="cert-sublabel">Active</div>
            <li>
              Service Management Technical Delivery Accreditation{" "}
              <span style={{ color: "#3a4258" }}>{"\u2014"} Apr 2024</span>
            </li>
            <li>
              Software Development Technical Delivery Accreditation 2024{"\u2013"}2025{" "}
              <span style={{ color: "#3a4258" }}>{"\u2014"} Oct 2025</span>
            </li>
            <li>
              Teamwork Foundations Sales Accreditation{" "}
              <span style={{ color: "#3a4258" }}>
                {"\u2014"} expires Oct 2026
              </span>
            </li>
            <div className="cert-sublabel">Previously Obtained</div>
            <li className="dim">
              Atlassian Certified Jira Service Desk Administrator (ACP-JSD)
            </li>
            <li className="dim">
              Atlassian Certified Confluence Administrator {"\u2014"} DC & Server
              (ACP-CA)
            </li>
            <li className="dim">
              Atlassian Certified Jira Project Administration (AC-JPA)
            </li>
            <li className="dim">
              Pro Skills Badge: Confluence Space Administration (APB-CSA)
            </li>
            <li className="dim">
              Skills Badge: Customizing Jira Workflows (ASB-616)
            </li>
            <li className="dim">
              Skills Badge: Using Confluence for Documentation & Knowledge Bases
              (ASB-212)
            </li>
          </ul>
        </div>

        {/* Platform Certs */}
        <div className="edu-entry">
          <div className="edu-top">
            <div className="edu-left">
              <div className="edu-logo" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.125rem",
                }}
              >
                <span className="edu-title font-heading">
                  Platform Certifications
                </span>
              </div>
            </div>
          </div>
          <ul className="exp-bullets" style={{ paddingLeft: 0 }}>
            <div className="cert-sublabel">Active</div>
            <li>
              Asana Foundations Skill Badge{" "}
              <span style={{ color: "#3a4258" }}>{"\u2014"} Jan 2026</span>
            </li>
            <div className="cert-sublabel">Previously Obtained</div>
            <li className="dim">Slack Admin Certification</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

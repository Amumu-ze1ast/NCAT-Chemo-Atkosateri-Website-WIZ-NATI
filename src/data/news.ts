// Department news. Tanae Lewis story uses web-verified facts (2022); event
// stories are factual/general — confirm specifics (names, exact dates) before publish.

export interface Story {
  slug: string; date: string; year: number; category: string;
  title: string; excerpt: string; img: string | null; alt: string;
  body: string[]; featured?: boolean; source?: string;
}

export const news: Story[] = [
  {
    slug: "tanae-lewis-astronaut-goldwater-scholar",
    date: "August 2022", year: 2022, category: "Student",
    title: "Tanae Lewis makes history as Goldwater and Astronaut Scholar",
    excerpt: "Chemistry senior Tanae Lewis became the first NC A&T student — and the first from any HBCU — to be named both a Barry Goldwater Scholar and an Astronaut Scholar in the same year.",
    img: "/Photos/tanae-lewis.webp",
    alt: "Tanae Lewis, NC A&T chemistry student and 2022 Goldwater and Astronaut Scholar",
    featured: true,
    source: "https://www.ncat.edu/news/2022/08/lewis-goldwater-astronaut-scholar.php",
    body: [
      "In 2022, chemistry senior Tanae Lewis of Youngsville, North Carolina, made history as the first North Carolina A&T State University student — and the first from any historically Black college or university — to be named both a Barry Goldwater Scholar and an Astronaut Scholar in the same year.",
      "Lewis was named a 2022 Goldwater Scholar in March, becoming the fourth Goldwater Scholar in the university's history. The Goldwater Scholarship is the nation's preeminent undergraduate award in the natural sciences, mathematics, and engineering.",
      "That August, the Astronaut Scholarship Foundation named Lewis a 2022 Astronaut Scholar. The award provides up to $15,000 toward educational expenses, a paid trip to the Foundation's Innovators Week & Gala in Florida, and lifelong engagement with astronauts and leading STEM researchers.",
      "Lewis's recognition reflects the Department of Chemistry's emphasis on undergraduate research and close faculty mentorship — the same hands-on culture that defines the program today.",
    ],
  },
  {
    slug: "chemistry-honors-society-induction-2026",
    date: "Spring 2026", year: 2026, category: "Department",
    title: "Chemistry Honors Society welcomes new inductees",
    excerpt: "The department celebrated students inducted into its chemistry honor society, recognizing academic excellence and service in the chemical sciences.",
    img: "/Photos/site/induction-news.jpg",
    alt: "New inductees holding certificates at the 2026 Chemistry Honors Society induction",
    body: [
      "The Department of Chemistry recognized a new class of students inducted into its chemistry honor society, celebrating academic excellence and commitment to the chemical sciences.",
      "Honor-society membership recognizes strong scholarship in chemistry and a record of service, and connects students to a national community of chemists.",
      // EDITOR NOTE (not rendered): confirm the honor-society chapter, induction date, and 2026 inductee names before publishing.
    ],
  },
  {
    slug: "undergraduate-research-symposium",
    date: "Spring 2026", year: 2026, category: "Students",
    title: "Students present at the Undergraduate Research Symposium",
    excerpt: "Chemistry undergraduates shared their research with faculty and peers at the department's annual symposium.",
    img: "/Photos/site/symposium-talk.jpg",
    alt: "An NC A&T chemistry student presenting research at the Undergraduate Research Symposium",
    body: [
      "Chemistry undergraduates presented original research at the department's annual Undergraduate Research Symposium, sharing projects developed in faculty labs across the department's five research areas.",
      "The symposium is a capstone moment in the undergraduate experience, giving students practice communicating their science to an audience of faculty, graduate students, and peers.",
      // EDITOR NOTE (not rendered): confirm the symposium date, participating labs, and any award winners to feature before publishing.
    ],
  },
];

export const featuredNews: Story = news.find((n) => n.featured) || news[0];

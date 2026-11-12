import pagesJson from "@/content/pages.json";
import blogJson from "@/content/blog.json";

export type ContentBlock =
  | { type: "h2" | "h3" | "h4"; html: string }
  | { type: "p"; html: string }
  | { type: "quote"; html: string }
  | { type: "ul" | "ol"; items: string[] };

export type PageContent = {
  title: string;
  banner: string;
  blocks: ContentBlock[];
  images: { src: string; alt: string }[];
  related: { title: string; href: string; excerpt: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  hero: string;
  blocks: ContentBlock[];
  related: { title: string; href: string; excerpt: string }[];
  category: string;
  read: string;
  summary: string;
};

export const pages = pagesJson as unknown as Record<string, PageContent>;
export const blogPosts = blogJson as unknown as BlogPost[];

export function firstParagraph(blocks: ContentBlock[]) {
  for (const block of blocks) {
    if (block.type === "p") {
      return block.html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    }
  }
  return "";
}

export const site = {
  name: "Polished Dental",
  shortName: "Polished",
  tagline: "Gentle dentistry, beautifully polished.",
  description:
    "Gentle, personal dental care for children and adults in Bismarck, North Dakota. Three doctors, one standard: beautifully polished smiles.",
  address: {
    street: "1700 E. Interstate Ave.",
    city: "Bismarck",
    state: "ND",
    zip: "58503",
  },
  phone: {
    display: "701-222-GRIN (4746)",
    plain: "701-222-4746",
    href: "tel:+17012224746",
  },
  tollFree: { display: "1-800-600-4746", href: "tel:+18006004746" },
  fax: "701-222-1783",
  email: "info@polished-dental.net",
  emailHref: "mailto:info@polished-dental.net",
  appointmentsUrl:
    "https://d1.patientconnect365.com/Portal/Index/e83ab2ce6afd48d1a96c6bd4f715e365/RequestAppointment/1",
  patientFormsUrl: "https://forms.patientconnect365.com/18539",
  careCreditUrl: "https://carecredit.com/Pay/TXR737",
  mapUrl:
    "https://www.google.com/maps?q=1700+E+Interstate+Ave,+Bismarck,+ND+58503&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1700+E+Interstate+Ave,+Bismarck,+ND+58503",
  social: {
    facebook: "https://www.facebook.com/PolishedDentalBismarck/",
    instagram: "https://www.instagram.com/polisheddentalbismarck/",
  },
  hours: [
    { label: "Monday – Thursday", value: "7:00 a.m. – 4:00 p.m." },
    { label: "Friday", value: "Morning emergency calls" },
  ],
  summerHours: [
    { label: "Monday – Thursday", value: "7:00 a.m. – 3:30 p.m." },
    { label: "Friday", value: "Morning emergency calls" },
  ],
  legal: {
    copyright: `© ${new Date().getFullYear()} Polished Dental. All rights reserved.`,
    credit: "Dentistry in Bismarck, North Dakota",
  },
} as const;

export type NavChild = { label: string; href: string; description?: string };
export type NavSection = {
  label: string;
  href: string;
  description?: string;
  children?: NavChild[];
};

export const navigation: NavSection[] = [
  { label: "Home", href: "/" },
  {
    label: "Office",
    href: "/office",
    description: "The people, place, and practical details behind your visit.",
    children: [
      { label: "Meet Our Doctors", href: "/office/meet-our-doctors", description: "Three doctors, one shared standard of care." },
      { label: "Meet the Staff", href: "/office/meet-the-staff", description: "The friendly faces who make Polished feel like home." },
      { label: "Why Choose Us?", href: "/office/why-choose-us", description: "The little details that make a big difference." },
      { label: "Office Policies", href: "/office/office-policies", description: "Clear expectations for a smooth visit." },
      { label: "Financial", href: "/office/financial", description: "Payment options and insurance made simple." },
      { label: "Map & Directions", href: "/office/map-and-directions", description: "Find us on Interstate Avenue." },
      { label: "Polished Dental Blog", href: "/office/polished-dental-blog", description: "Notes on better oral health." },
      { label: "Request an Appointment", href: "/appointment", description: "Start your visit with a request." },
    ],
  },
  {
    label: "Patient",
    href: "/patient",
    description: "Everything you need before, during, and after your visit.",
    children: [
      { label: "First Visit", href: "/patient/first-visit" },
      { label: "FAQ", href: "/patient/faq" },
      { label: "Patient Forms", href: "/patient/patient-forms" },
      { label: "Emergencies", href: "/patient/emergencies" },
      { label: "Brushing & Flossing", href: "/patient/brushing-and-flossing" },
      { label: "Oral Hygiene for Kids", href: "/patient/oral-hygiene-for-kids" },
      { label: "Periodontal Gum Disease", href: "/patient/periodontal-gum-disease" },
      { label: "Digital X-Rays", href: "/patient/digital-x-rays" },
    ],
  },
  {
    label: "Treatment",
    href: "/treatment",
    description: "Modern, considered care for every stage of your smile.",
    children: [
      { label: "General Treatment", href: "/treatment/general-treatment" },
      { label: "TMJ Disorders", href: "/treatment/tmj-disorders" },
      { label: "Dental Implants", href: "/treatment/dental-implants" },
      { label: "Root Canal Treatment", href: "/treatment/root-canal-treatment" },
      { label: "CEREC", href: "/treatment/cerec" },
    ],
  },
  {
    label: "Cosmetic Dentistry",
    href: "/cosmetic-dentistry",
    description: "Subtle refinements and confident transformations.",
    children: [
      { label: "Crowns & Bridgework", href: "/cosmetic-dentistry/crowns-and-bridgework" },
      { label: "Smile Makeover", href: "/cosmetic-dentistry/smile-makeover" },
      { label: "Tooth-Colored Fillings", href: "/cosmetic-dentistry/tooth-colored-fillings" },
      { label: "BOTOX", href: "/cosmetic-dentistry/botox-dermal-fillers" },
      { label: "KöR Whitening", href: "/cosmetic-dentistry/kor-whitening" },
    ],
  },
  {
    label: "Pediatric Dentistry",
    href: "/pediatric-dentistry",
    description: "Gentle first visits and thoughtful care for growing smiles.",
    children: [
      { label: "Dental Sealants", href: "/pediatric-dentistry/dental-sealants" },
      { label: "Nitrous Oxide", href: "/pediatric-dentistry/nitrous-oxide" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export type Service = {
  title: string;
  href: string;
  description: string;
  icon: string;
  tag?: string;
};

export const serviceGroups: Record<
  "office" | "patient" | "treatment" | "cosmetic" | "pediatric",
  {
    eyebrow: string;
    title: string;
    description: string;
    services: Service[];
  }
> = {
  office: {
    eyebrow: "The practice",
    title: "Get to know Polished.",
    description:
      "A comfortable office, a genuinely friendly team, and the details that make coming to the dentist feel a little lighter.",
    services: [
      { title: "Meet Our Doctors", href: "/office/meet-our-doctors", description: "Dr. Jim, Dr. Kristin, and Dr. Kourtney — three distinct people with one shared standard of care.", icon: "stethoscope" },
      { title: "Meet the Staff", href: "/office/meet-the-staff", description: "Hygienists, assistants, and the front-office team who keep every visit moving smoothly.", icon: "users" },
      { title: "Why Choose Us?", href: "/office/why-choose-us", description: "A fireplace, a children's play area, free WiFi, digital X-rays, and care that never feels rushed.", icon: "sparkles" },
      { title: "Office Policies", href: "/office/office-policies", description: "Our mission, hours, appointment expectations, and insurance details in one clear place.", icon: "clipboard" },
      { title: "Financial", href: "/office/financial", description: "Payment options, insurance participation, and financing through CareCredit.", icon: "card" },
      { title: "Map & Directions", href: "/office/map-and-directions", description: "Easy-to-follow directions to 1700 E. Interstate Ave. in Bismarck.", icon: "map" },
      { title: "Polished Dental Blog", href: "/office/polished-dental-blog", description: "Practical notes on routines, technology, and the small habits behind a healthy smile.", icon: "pen" },
      { title: "Request an Appointment", href: "/appointment", description: "Tell us a little about yourself and we'll help find the right time for your visit.", icon: "calendar" },
    ],
  },
  patient: {
    eyebrow: "Patient resources",
    title: "Feel prepared before you arrive.",
    description:
      "From your first visit to the questions you forgot to ask, this is where the practical details live.",
    services: [
      { title: "First Visit", href: "/patient/first-visit", description: "What to expect, how long to allow, and how we build a treatment plan around you.", icon: "door" },
      { title: "FAQ", href: "/patient/faq", description: "Straight answers about checkups, brushing, toothpaste, emergencies, and payments.", icon: "help" },
      { title: "Patient Forms", href: "/patient/patient-forms", description: "Complete your paperwork online before your appointment through our secure portal.", icon: "file" },
      { title: "Emergencies", href: "/patient/emergencies", description: "Calm, practical first steps for toothaches, broken teeth, and other urgent moments.", icon: "heart" },
      { title: "Brushing & Flossing", href: "/patient/brushing-and-flossing", description: "The everyday techniques that do the quiet, consistent work of oral health.", icon: "brush" },
      { title: "Oral Hygiene for Kids", href: "/patient/oral-hygiene-for-kids", description: "Age-by-age guidance for babies, children, and teenagers.", icon: "smile" },
      { title: "Periodontal Gum Disease", href: "/patient/periodontal-gum-disease", description: "Understand the warning signs and the treatment options that protect your gums.", icon: "shield" },
      { title: "Digital X-Rays", href: "/patient/digital-x-rays", description: "Faster, safer imaging that gives us a clearer view with less radiation.", icon: "scan" },
    ],
  },
  treatment: {
    eyebrow: "General & restorative",
    title: "Considered treatment for lasting health.",
    description:
      "We build every treatment plan around the person in the chair — not a template. Here's how we care for your smile.",
    services: [
      { title: "General Treatment", href: "/treatment/general-treatment", description: "Exams, cleanings, fillings, crowns, bridges, root canals, and extractions under one roof.", icon: "tooth" },
      { title: "TMJ Disorders", href: "/treatment/tmj-disorders", description: "Relief for jaw pain, clicking, headaches, and tension with conservative care first.", icon: "activity" },
      { title: "Dental Implants", href: "/treatment/dental-implants", description: "A stable, natural-looking replacement for missing teeth, with complimentary consultations.", icon: "anchor" },
      { title: "Root Canal Treatment", href: "/treatment/root-canal-treatment", description: "Save your natural tooth and relieve pain with one of the most routine procedures in dentistry.", icon: "shieldCheck" },
      { title: "CEREC", href: "/treatment/cerec", description: "Computer-designed, one-visit crowns — no temporary restorations, no return appointment.", icon: "cpu", tag: "One visit" },
    ],
  },
  cosmetic: {
    eyebrow: "Cosmetic dentistry",
    title: "Refined, never overdone.",
    description:
      "The most beautiful work is the work that still looks like you. Explore our cosmetic services.",
    services: [
      { title: "Crowns & Bridgework", href: "/cosmetic-dentistry/crowns-and-bridgework", description: "Restore damaged teeth and close gaps with crowns and bridges matched to your smile.", icon: "crown" },
      { title: "Smile Makeover", href: "/cosmetic-dentistry/smile-makeover", description: "A personalized combination of treatments designed around your goals and your features.", icon: "sparkles" },
      { title: "Tooth-Colored Fillings", href: "/cosmetic-dentistry/tooth-colored-fillings", description: "Metal-free restorations that blend in while restoring strength and function.", icon: "droplet" },
      { title: "BOTOX", href: "/cosmetic-dentistry/botox-dermal-fillers", description: "Administered by dentists who understand the facial muscles — for relief and refinement.", icon: "sparkle" },
      { title: "KöR Whitening", href: "/cosmetic-dentistry/kor-whitening", description: "Deep, professional whitening with custom trays and a measurable difference.", icon: "sun" },
    ],
  },
  pediatric: {
    eyebrow: "Pediatric dentistry",
    title: "A gentle start for growing smiles.",
    description:
      "Children deserve a dental home that feels safe, calm, and genuinely fun to visit.",
    services: [
      { title: "Dental Sealants", href: "/pediatric-dentistry/dental-sealants", description: "A thin protective coating for the chewing surfaces of teeth — a quiet safeguard against decay.", icon: "shield" },
      { title: "Nitrous Oxide", href: "/pediatric-dentistry/nitrous-oxide", description: "Gentle sedation that takes the edge off for anxious patients of any age.", icon: "wind" },
    ],
  },
};

export type Doctor = {
  name: string;
  credentials: string;
  role: string;
  image: string;
  bio: string[];
  memberships: string[];
  quote: string;
};

export const doctors: Doctor[] = [
  {
    name: "Dr. James A. Nelson",
    credentials: "D.D.S.",
    role: "Founding Dentist",
    image: "/images/2025-Jim.jpg",
    bio: [
      "Dr. Jim Nelson was born and raised in the small town of Ortonville, MN. He attended North Dakota State University from 1978 to 1981 for his undergraduate studies, then was accepted to the University of Minnesota Dental School in 1981 and graduated with honors in 1985. He has been practicing dentistry in Bismarck ever since.",
      "In 1985, Dr. Jim founded Kirkwood Dental in the Kirkwood Mall. In 2003, when his new dental office was built, the name changed to Nelson Family Dentistry. With the recent addition of a new partner, Dr. Kristin, Polished Dental was established. Dr. Jim prides himself on being dedicated to providing high quality dentistry and ethical treatment to all patients. He very much enjoys the daily interaction with his patients and continues to love the art of dentistry.",
      "Dr. Jim has been married to the love of his life, Lorri (Behrendt) Nelson, since 1980. They enjoy entertaining family and friends, spending quality time with all their nieces and nephews, and hosting fund-raisers. In his spare time, he enjoys hunting, ranching, yard work, traveling, designing and construction of buildings, remodeling projects, music, movies, and theatre. Dr. Jim also has a soft spot in his heart for animals. He and his wife have fostered many cats over the years and now have two cats of their own, Tinkerbell and Cinderella.",
    ],
    memberships: [
      "American Dental Association",
      "North Dakota Dental Association",
      "Missouri Slope Dental Society",
      "American Academy of Facial Esthetics",
    ],
    quote:
      "Dedicated to providing high quality dentistry and ethical treatment to all patients.",
  },
  {
    name: "Dr. Kristin R. Schoch",
    credentials: "D.D.S.",
    role: "Partner Dentist",
    image: "/images/2025-Kristin.jpg",
    bio: [
      "Dr. Kristin (Kovar) Schoch is originally from New England, North Dakota. She is an honor graduate of New England High School. Dr. Kristin completed her undergraduate studies at Dickinson State University, where she graduated Magna Cum Laude with a Bachelor's degree in Biology. She graduated from the University of Colorado School of Dental Medicine in Denver, Colorado.",
      "Dr. Kristin is married to her childhood sweetheart, Brock, who is from Mohall, North Dakota. They are the proud parents of three children. Dr. Kristin enjoys spending time with family and friends, going on walks, reading, jogging, and being outdoors.",
      "She understands the value of hard work, prides herself on having solid ethics, and cherishes the opportunity to work in a team environment.",
    ],
    memberships: [
      "American Dental Association",
      "SPEAR Study Club",
      "CEREC Doctors Mentor",
      "North Dakota Dental Association",
      "Academy of General Dentistry",
      "Missouri Slope Dental Society",
      "American Academy of Facial Esthetics",
      "Delta Sigma Delta Dental Fraternity",
    ],
    quote:
      "She understands the value of hard work, prides herself on solid ethics, and cherishes working in a team environment.",
  },
  {
    name: "Dr. Kourtney A. Grace",
    credentials: "D.M.D.",
    role: "Associate Dentist",
    image: "/images/2025-Kourtney.jpg",
    bio: [
      "Dr. Kourtney Grace was born and raised in the Bismarck/Mandan area. She is an honor graduate of Saint Mary's Central High School and graduated Magna Cum Laude in Biology at the University of Mary. Dr. Kourtney graduated from the Lake Erie College of Osteopathic Medicine School of Dentistry in Bradenton, Florida. From there she began her career practicing in Chandler, Arizona, but is excited to return to Bismarck and care for the community she grew up in.",
      "Dr. Kourtney enjoys spending time outside, traveling, and above all, being with her husband Patrick and their two Westie pups, Kota and Portia.",
      "Dr. Kourtney's passion for dentistry stems from providing gentle and compassionate dental care to all of her patients. She enjoys connecting with every person that comes through the door and providing treatment tailored to meet each individual's needs.",
    ],
    memberships: [],
    quote:
      "Gentle, compassionate care — and treatment tailored to each individual who walks through the door.",
  },
];

export type StaffMember = { name: string; role: string; group: string; image: string };

export const staff: StaffMember[] = [
  { name: "Brianne", role: "Dental Hygienist", group: "Dental Hygienists", image: "/images/staff/brianne.jpg" },
  { name: "Carrie", role: "Dental Hygienist", group: "Dental Hygienists", image: "/images/staff/carrie.jpg" },
  { name: "Cindy", role: "Dental Hygienist", group: "Dental Hygienists", image: "/images/staff/cindy.jpg" },
  { name: "Heidi", role: "Dental Hygienist", group: "Dental Hygienists", image: "/images/staff/heidi.jpg" },
  { name: "Jenny", role: "Dental Hygienist", group: "Dental Hygienists", image: "/images/staff/jenny.jpg" },
  { name: "Kayla S", role: "Dental Hygienist", group: "Dental Hygienists", image: "/images/staff/kayla-s.jpg" },
  { name: "Mikaila", role: "Dental Hygienist", group: "Dental Hygienists", image: "/images/staff/mikaila.jpg" },
  { name: "Bobbi", role: "Dental Assistant", group: "Dental Assistants", image: "/images/staff/bobbi.jpg" },
  { name: "Bonita", role: "Dental Assistant", group: "Dental Assistants", image: "/images/staff/bonita.jpg" },
  { name: "Brittney", role: "Dental Assistant", group: "Dental Assistants", image: "/images/staff/brittney.jpg" },
  { name: "Hallie", role: "Dental Assistant", group: "Dental Assistants", image: "/images/staff/hallie-08252025.jpg" },
  { name: "Jubilee", role: "Dental Assistant", group: "Dental Assistants", image: "/images/staff/jubilee.jpg" },
  { name: "Julie", role: "Dental Assistant", group: "Dental Assistants", image: "/images/staff/julie.jpg" },
  { name: "Kayla H", role: "Dental Assistant", group: "Dental Assistants", image: "/images/staff/kayla-h.jpg" },
  { name: "Brandi", role: "Insurance Processor", group: "Administration", image: "/images/staff/brandi.jpg" },
  { name: "Dina", role: "Treatment Coordinator", group: "Administration", image: "/images/staff/dina.jpg" },
  { name: "Lacey", role: "Practice Manager", group: "Administration", image: "/images/staff/lacey.jpg" },
  { name: "Macie", role: "Treatment Coordinator", group: "Administration", image: "/images/staff/macie.jpg" },
  { name: "Laura", role: "Treatment Coordinator", group: "Administration", image: "/images/no_image_300.jpg" },
  { name: "Stephanie", role: "Patient Relations", group: "Administration", image: "/images/staff/stephanie-08252025.jpg" },
  { name: "Tanna", role: "Patient Relations", group: "Administration", image: "/images/staff/tanna-08252025.jpg" },
];

export type Review = {
  title: string;
  quote: string;
  author: string;
  date: string;
};

export const reviews: Review[] = [
  {
    title: "First time visit",
    quote: "Good experience with caring professionals.",
    author: "Anonymous",
    date: "November 04, 2026",
  },
  {
    title: "Always a great cleaning and check up!",
    quote: "Always a great cleaning and check up!",
    author: "David S.",
    date: "October 15, 2026",
  },
  {
    title: "I have been coming here for years",
    quote:
      "I have been coming here for years and feel that no one does a better job at helping me take care of my teeth period! This is where you go for polite and complete care.",
    author: "Carol E.",
    date: "October 13, 2026",
  },
  {
    title: "Very caring",
    quote:
      "Every one at Polished Dental is very caring. If you need a dentist, this is the place to go!!",
    author: "Irving J.",
    date: "October 08, 2026",
  },
  {
    title: "Great place for dental care",
    quote:
      "I've been going to Polished Dental for a couple years. They've done my routine cleaning, crowns, and fillings. Everyone that works there is an outstanding part of their team. They are all friendly and seem genuinely happy to see me walk in the door. I highly recommend Polished Dental.",
    author: "Anonymous",
    date: "October 08, 2026",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "How often should I see a dentist?",
    answer:
      "The American Dental Association (ADA) recommends visiting a dentist at least twice a year for a check-up and a professional cleaning. Our office also recommends a minimum of two visits per year.",
  },
  {
    question: "What do I do if I have a dental emergency?",
    answer:
      "Please call our office as soon as you determine that you have a dental emergency. If you have a dental emergency during regular business hours, we will be glad to work you into our schedule. After hours, over the weekend and during holidays, please call our office for the doctor's emergency contact number.",
  },
  {
    question: "What kind of toothbrush should I use?",
    answer:
      "Adults should use a small-to-medium size toothbrush with soft-to-medium bristles. The head of the brush needs to be small enough to brush all areas of the mouth thoroughly, specifically the back of the mouth, which can be hard to reach. Children should use small toothbrushes with soft bristles. People with sensitive teeth can benefit from using gentle, soft-bristled toothbrushes.",
  },
  {
    question: "How often should I replace my toothbrush?",
    answer:
      "The American Dental Association recommends that you replace your brush every 3 to 4 months. With each use, the bristles become worn and cleaning effectiveness decreases. Depending on your oral health, you may need to replace your brush sooner. Typically, children's toothbrushes need to be replaced more regularly than adults.",
  },
  {
    question: "Is a powered toothbrush more effective than a manual toothbrush?",
    answer:
      "Generally, manual toothbrushes are just as effective as powered toothbrushes. Children may find brushing with a powered toothbrush more exciting. If you have difficulty using a manual toothbrush, a powered toothbrush may be much more comfortable and easier to use.",
  },
  {
    question: "Should I brush or floss first?",
    answer:
      "As long as you brush and floss thoroughly, it does not matter if you brush then floss or floss then brush. However, flossing before brushing enables the fluoride in your toothpaste to better reach the areas between the teeth.",
  },
  {
    question: "Is one type of toothpaste better than the others?",
    answer:
      "No. However, we recommend you use a toothpaste that contains fluoride and carries the ADA Seal of Acceptance, which means it has been assessed for safety and effectiveness. Studies consistently show that fluoride helps strengthen and rebuild tooth structure, and helps prevent dental decay.",
  },
  {
    question: "Are payment plans available for my dental treatment?",
    answer:
      "Yes. We accept most major credit cards and many types of dental insurance. We will process your insurance claim for you upon receipt of your co-payment.",
  },
];

export const stats = [
  { value: 40, suffix: "+", label: "Years of care", note: "in Bismarck since 1985" },
  { value: 3, suffix: "", label: "Doctors", note: "one shared standard" },
  { value: 21, suffix: "", label: "Team members", note: "genuinely glad you're here" },
  { value: 1, suffix: "", label: "Visit CEREC crowns", note: "designed, milled, placed" },
];

export const pillars = [
  {
    number: "01",
    title: "A calmer kind of dental visit",
    body: "A comfortable office with a fireplace, televisions in treatment areas, free WiFi, and a children's play area. The atmosphere is part of the care.",
  },
  {
    number: "02",
    title: "Technology that earns its place",
    body: "Digital X-rays, CEREC single-visit crowns, and modern imaging help us see more, explain more clearly, and spend less time on the parts of dentistry nobody enjoys.",
  },
  {
    number: "03",
    title: "Doctors who know your name",
    body: "Dr. Jim, Dr. Kristin, and Dr. Kourtney work as a team. You are treated as an individual, with a treatment plan built around your needs and desires.",
  },
  {
    number: "04",
    title: "Referrals that speak for themselves",
    body: "The majority of our new patients come from people they know. We think that says more than any advertisement could.",
  },
];

export const serviceMenu = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "CEREC Crowns",
  "Pediatric Dentistry",
  "TMJ & BOTOX",
  "KöR Whitening",
  "Root Canals",
  "Digital X-Rays",
];

export const trustBadges = [
  { label: "ADA", sub: "American Dental Association" },
  { label: "NDDA", sub: "North Dakota Dental Association" },
  { label: "CEREC", sub: "One-visit restorations" },
  { label: "KöR", sub: "Professional whitening" },
  { label: "CareCredit", sub: "Financing available" },
];

export const pageMeta: Record<string, { eyebrow: string; description: string }> = {
  "/office": {
    eyebrow: "The practice",
    description:
      "A comfortable office, a friendly team, and the practical details that make visiting Polished Dental feel easy.",
  },
  "/office/meet-our-doctors": {
    eyebrow: "Our doctors",
    description:
      "Three doctors with different paths, one shared belief: good dentistry is personal, ethical, and never rushed.",
  },
  "/office/meet-the-staff": {
    eyebrow: "Our team",
    description:
      "Hygienists, assistants, coordinators, and patient relations — the people who make Polished Dental feel like Polished Dental.",
  },
  "/office/why-choose-us": {
    eyebrow: "The difference",
    description:
      "Comfort, technology, and a team that treats you like a person. Here's what our patients tell us matters most.",
  },
  "/office/office-policies": {
    eyebrow: "Office policies",
    description:
      "Our mission, hours, appointment expectations, and insurance details — clear from the start.",
  },
  "/office/financial": {
    eyebrow: "Financial",
    description:
      "Quality care shouldn't feel out of reach. Here's how payments, insurance, and financing work at Polished Dental.",
  },
  "/office/map-and-directions": {
    eyebrow: "Find us",
    description:
      "We're on East Interstate Avenue in Bismarck, with easy access and a front door that's simple to find.",
  },
  "/office/polished-dental-blog": {
    eyebrow: "The journal",
    description:
      "Practical notes on oral health, modern dentistry, and the small habits that keep a smile healthy.",
  },
  "/patient": {
    eyebrow: "Patient resources",
    description:
      "Everything you need to feel prepared — before your first visit, between appointments, and when something needs attention.",
  },
  "/patient/first-visit": {
    eyebrow: "New patients",
    description:
      "A thorough exam, a conversation about your goals, and a plan that makes sense. Here's what your first visit looks like.",
  },
  "/patient/faq": {
    eyebrow: "Questions, answered",
    description:
      "The questions we hear most often — about checkups, brushing, toothpaste, emergencies, and payment.",
  },
  "/patient/patient-forms": {
    eyebrow: "Paperwork, simplified",
    description:
      "Complete your patient forms online through our secure portal before you arrive.",
  },
  "/patient/emergencies": {
    eyebrow: "Dental emergencies",
    description:
      "When something hurts, you want clear next steps. Start here, then call us at 701-222-4746.",
  },
  "/patient/brushing-and-flossing": {
    eyebrow: "Daily care",
    description:
      "Two minutes, twice a day, plus a little floss. The simple routine that protects your smile for the long run.",
  },
  "/patient/oral-hygiene-for-kids": {
    eyebrow: "For families",
    description:
      "Age-by-age guidance for building healthy habits from the very first tooth.",
  },
  "/patient/periodontal-gum-disease": {
    eyebrow: "Gum health",
    description:
      "Gum disease can be quiet. Understanding the signs — and the treatment options — protects more than your smile.",
  },
  "/patient/digital-x-rays": {
    eyebrow: "Imaging",
    description:
      "Clearer images, faster results, and less radiation. Digital X-rays are one of the quiet advances that make modern dentistry better.",
  },
  "/treatment": {
    eyebrow: "General & restorative",
    description:
      "From routine cleanings to implants and one-visit crowns, we care for the health and function of your smile.",
  },
  "/treatment/general-treatment": {
    eyebrow: "General dentistry",
    description:
      "Exams, cleanings, fillings, crowns, bridges, root canals, and extractions — the dependable core of good dental care.",
  },
  "/treatment/tmj-disorders": {
    eyebrow: "TMJ & TMD",
    description:
      "Jaw pain, clicking, headaches, and tension can all point to the temporomandibular joint. Relief starts with an accurate diagnosis.",
  },
  "/treatment/dental-implants": {
    eyebrow: "Implants",
    description:
      "A lasting, natural-looking solution for missing teeth — and a complimentary consultation to talk through your options.",
  },
  "/treatment/root-canal-treatment": {
    eyebrow: "Endodontics",
    description:
      "Root canal treatment has a reputation it doesn't deserve. Modern endodontics is routine, effective, and often completed in a single visit.",
  },
  "/treatment/cerec": {
    eyebrow: "One-visit dentistry",
    description:
      "CEREC designs, mills, and places a custom ceramic restoration in a single appointment. No temporaries. No second visit.",
  },
  "/cosmetic-dentistry": {
    eyebrow: "Cosmetic dentistry",
    description:
      "Refined, natural-looking improvements — from tooth-colored fillings to whitening, crowns, and smile makeovers.",
  },
  "/cosmetic-dentistry/crowns-and-bridgework": {
    eyebrow: "Restorative aesthetics",
    description:
      "Crowns and bridges restore strength and appearance, matched carefully to the shape and color of your smile.",
  },
  "/cosmetic-dentistry/smile-makeover": {
    eyebrow: "Smile design",
    description:
      "A smile makeover is not one treatment — it's a thoughtful combination designed around your face, your goals, and your health.",
  },
  "/cosmetic-dentistry/tooth-colored-fillings": {
    eyebrow: "Metal-free restorations",
    description:
      "Modern composite fillings restore decayed teeth and blend beautifully with the rest of your smile.",
  },
  "/cosmetic-dentistry/botox-dermal-fillers": {
    eyebrow: "Facial aesthetics",
    description:
      "BOTOX from dentists who understand the facial muscles — for both therapeutic relief and subtle aesthetic refinement.",
  },
  "/cosmetic-dentistry/kor-whitening": {
    eyebrow: "Whitening",
    description:
      "Professional KöR Whitening, custom trays, and a noticeably brighter smile — without the sensitivity shortcuts.",
  },
  "/pediatric-dentistry": {
    eyebrow: "Pediatric dentistry",
    description:
      "Gentle, patient care for children — building trust and healthy habits from the first visit.",
  },
  "/pediatric-dentistry/dental-sealants": {
    eyebrow: "Prevention for kids",
    description:
      "A thin, protective coating that helps shield the chewing surfaces of teeth from decay.",
  },
  "/pediatric-dentistry/nitrous-oxide": {
    eyebrow: "Comfort care",
    description:
      "Gentle sedation that helps anxious patients relax — for children and adults alike.",
  },
  "/contact-us": {
    eyebrow: "Contact",
    description:
      "We're always available to talk with you and address your concerns. Call, email, or stop by.",
  },
  "/appointment": {
    eyebrow: "Request an appointment",
    description:
      "Tell us a little about yourself and your preferred time. We'll follow up to confirm the details.",
  },
  "/privacy-policy": {
    eyebrow: "Privacy",
    description:
      "How Polished Dental protects and uses your protected health information.",
  },
};

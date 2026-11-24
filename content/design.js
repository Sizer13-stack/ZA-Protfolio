const s = (n, label) => ({ n, label });
export const tasktap = {
  name: "TaskTap",
  line: "A work marketplace where employers post tasks and workers get paid for their skills. A personal web design project, drawn in Figma.",
  count: 47,
  preview: [
    { n: "09", alt: "TaskTap browse jobs page with filters and job cards", label: "Browse jobs" },
    { n: "23", alt: "TaskTap employer dashboard", label: "Employer dashboard" },
    { n: "17", alt: "TaskTap earnings page for workers", label: "Earnings" },
    { n: "45", alt: "TaskTap disputes page", label: "Disputes" },
  ],
  sections: [
    { id: "entry", title: "Getting in", blurb: "The landing page asks one question first: do you want to hire, or to work? Sign-up and onboarding then split by role.",
      screens: [s("04", "Landing page"), s("05", "Choose a role"), s("06", "Sign in"), s("07", "Worker sign-up"), s("08", "Employer sign-up"), s("01", "Worker onboarding"), s("03", "Employer onboarding"), s("02", "Employer onboarding, alternative layout")] },
    { id: "worker", title: "The worker's side", blurb: "Find a job, read the details, apply, then keep track of messages, a calendar and a profile that shows past work.",
      screens: [s("47", "Worker dashboard"), s("09", "Browse jobs"), s("10", "No results"), s("11", "Job details"), s("12", "Application details"), s("13", "Messages"), s("15", "Calendar"), s("14", "Calendar, week view"), s("18", "Worker profile"), s("19", "Edit profile: basics"), s("20", "Edit profile: work details"), s("21", "Edit profile: portfolio"), s("22", "Edit profile: verification")] },
    { id: "employer", title: "The employer's side", blurb: "Post a job, manage applicants and messages in one job view, and keep a company profile that workers can check.",
      screens: [s("23", "Employer dashboard"), s("24", "Post a job"), s("25", "Manage jobs"), s("26", "Job details"), s("27", "Job messages"), s("28", "Invite workers"), s("29", "Job settings"), s("30", "All applications"), s("31", "Company profile"), s("32", "Company: basics"), s("33", "Company: hiring"), s("34", "Company: team"), s("35", "Company: verification")] },
    { id: "money", title: "Paying and getting paid", blurb: "Employers pay in and see how a payment is processed. Workers see earnings and withdraw them.",
      screens: [s("17", "Earnings"), s("16", "Withdraw"), s("43", "Worker payout"), s("41", "Employer: pay in"), s("42", "Employer: payment in process"), s("36", "Billing and payments"), s("37", "Payment methods"), s("38", "Invoices")] },
    { id: "trust", title: "Trust", blurb: "Reviews and ratings with written guidelines, and a dispute flow for when a job goes wrong.",
      screens: [s("39", "Reviews and ratings"), s("40", "Review guidelines"), s("45", "Disputes"), s("44", "Dispute details"), s("46", "File a dispute")] },
  ],
};

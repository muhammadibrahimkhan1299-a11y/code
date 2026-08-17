export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tools: string[];
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-calculate-percentages",
    title: "How to Calculate Percentages: A Step-by-Step Guide",
    description:
      "Learn how to calculate percentages by hand, with the formulas for percentage of a number, percentage change and reverse percentage problems — plus a calculator to check your work.",
    publishedAt: "2026-01-12",
    category: "Math",
    tools: ["percentage-calculator", "percentage-increase-calculator", "discount-calculator"],
    sections: [
      {
        heading: "What is a percentage?",
        paragraphs: [
          "A percentage is simply a fraction with a denominator of 100. The word itself means \"per hundred\": 15% means 15 out of every 100, or 15 ÷ 100 = 0.15. Understanding this single idea unlocks every percentage problem, because every percentage calculation is just multiplication by a decimal.",
          "Percentages appear in almost every financial decision — tips, discounts, interest, tax, commission and salary changes. They are the common language of comparison: saying a price rose 10% tells you the relative change, which stays meaningful no matter the size of the number.",
        ],
      },
      {
        heading: "How to find a percentage of a number",
        paragraphs: [
          "The most common question is \"what is X% of Y?\". The formula is: (X ÷ 100) × Y. For 15% of 240, divide 15 by 100 to get 0.15, then multiply by 240: 0.15 × 240 = 36.",
          "To do it in your head, start with 1% by moving the decimal point two places left — 1% of 240 is 2.4 — then multiply by the percentage you need. 15% is 2.4 × 15 = 36. This mental method is fast enough for tips, discounts and quick checks at the shops.",
        ],
      },
      {
        heading: "How to calculate percentage increase and decrease",
        paragraphs: [
          "Percentage change measures how much a value moved relative to where it started: ((New − Old) ÷ Old) × 100. A price that goes from 80 to 92 changed by (92 − 80) ÷ 80 × 100 = 15%.",
          "A common trap: percentage changes are not reversible. A 15% increase from 80 reaches 92, but a 15% decrease from 92 lands at 78.2, not 80 — because each percentage is measured against a different base. That is why comparing rises and falls needs the same starting point to be honest.",
        ],
      },
      {
        heading: "Reverse percentages: finding the original number",
        paragraphs: [
          "Sometimes you know the result and need the original. If a jacket costs 84.49 after a 35% discount, the original price is 84.49 ÷ (1 − 0.35) = 129.98. In general: divide the final amount by (1 − percentage ÷ 100) for discounts, or (1 + percentage ÷ 100) for increases like added tax.",
          "This is the calculation behind \"what was the price before the sale?\" and \"what did this cost before VAT?\" — the two reverse percentage questions people search for most often.",
        ],
      },
      {
        heading: "Checking your work with the calculator",
        paragraphs: [
          "Every formula above is built into the percentage calculator: type the percentage and the value, and it returns the result with the arithmetic shown step by step, so you can check your own working at the same time. The percentage increase/decrease calculator handles change between two numbers, and the discount calculator automates the sale-price and reverse-sale calculations.",
          "Because the calculations run entirely in your browser, there is no upload, no sign-up and nothing stored — you can use the tools freely to verify homework, quotes, invoices or shopping maths.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-good-gpa",
    title: "What Is a Good GPA? A Complete Guide for Students",
    description:
      "What counts as a good GPA depends on your goals: scholarships, graduate school and jobs all look at different thresholds. Here is the breakdown, with a GPA calculator to check your standing.",
    publishedAt: "2026-02-03",
    category: "Education",
    tools: ["gpa-calculator", "cgpa-calculator", "grade-calculator"],
    sections: [
      {
        heading: "How GPA works on the 4.0 scale",
        paragraphs: [
          "GPA (grade point average) converts letter grades into points — typically A = 4.0, A− = 3.7, B+ = 3.3, B = 3.0 and so on — and averages them, weighted by each course's credit hours. A five-credit course moves your GPA far more than a one-credit elective, so the calculation is never a plain average of your grades.",
          "The formula is GPA = (grade points × credits, summed) ÷ total credits. That is exactly what the GPA calculator runs, which makes it the fastest way to see where a semester stands before it ends.",
        ],
      },
      {
        heading: "What a \"good\" GPA is for different goals",
        paragraphs: [
          "There is no single good GPA because the threshold depends on the next step. Most four-year colleges admit students in the 3.0–3.5 range, competitive programs commonly expect 3.5+, and merit scholarships often set minimums around 3.5–3.7. Graduate schools in competitive fields typically look for 3.3–3.7, with research experience weighing alongside grades.",
          "For jobs, the picture is shifting: many employers care more about internships, portfolios and interviews than a GPA, and most stop asking about it after the first job. A 3.0+ is broadly safe for most career paths, while a sub-3.0 can still be offset by strong experience — but it is worth knowing the number either way.",
        ],
      },
      {
        heading: "How to raise your GPA before it is too late",
        paragraphs: [
          "Because GPA is credit-weighted, the fastest way to move it is in the courses that carry the most credits. The grade calculator shows your current standing per course and — importantly — how much weight is still unmarked, which tells you exactly what a strong final exam can change.",
          "Projecting a target is easier than most students think: enter your current GPA and credits, then add expected grades for the courses still in progress. The CGPA calculator does the same across semesters, combining each semester's GPA with its credits to show the cumulative effect.",
        ],
      },
      {
        heading: "Converting GPA to a percentage",
        paragraphs: [
          "Many universities outside the United States report percentages, and conversion tables vary by institution. A common approximation on the 4.0 scale is percentage ≈ CGPA × 25 (so 3.5 ≈ 87.5%), but the official table at your own university is the only one that matters for applications.",
          "When your transcript needs a percentage, use your institution's published conversion — and when you need your GPA from grades, the GPA and CGPA calculators handle the weighted arithmetic for you in seconds.",
        ],
      },
    ],
  },
  {
    slug: "how-to-compress-a-pdf",
    title: "How to Compress a PDF: The Complete Guide",
    description:
      "PDF files are often too big to email or upload. Here is how to compress a PDF — free, in your browser, without uploading the file anywhere — plus what to do when the file is still too large.",
    publishedAt: "2026-02-20",
    category: "Files",
    tools: ["compress-pdf", "merge-pdf", "pdf-to-jpg"],
    sections: [
      {
        heading: "Why PDFs get so large",
        paragraphs: [
          "A PDF grows with everything embedded in it: high-resolution scans, photos saved at full quality, embedded fonts, and the raw image data behind each page. A single 3 MB photo inside a document can turn a small PDF into a 10 MB file that email servers and form uploads refuse.",
          "Most of that bulk is removable. Rebuilding the file, re-encoding its images at sensible quality and removing redundant data usually cuts the size dramatically — often by 50% or more — while keeping the text sharp and the layout intact.",
        ],
      },
      {
        heading: "How to compress a PDF in your browser",
        paragraphs: [
          "The compress PDF tool shrinks the file locally on your device: pick the file, choose a quality level, and download the smaller version. Because the processing happens in your browser, nothing is uploaded to a server — which matters for contracts, medical records, invoices and anything else you would not want on a third-party service.",
          "The local approach also removes the usual limits: no file size cap, no waiting in a queue and no account. Documents that are confidential stay on your device from start to finish.",
        ],
      },
      {
        heading: "What to do if the PDF is still too large",
        paragraphs: [
          "If the file is still too big after compression, the next step is usually the images inside it. Scanning pages to JPG and reassembling them with the JPG to PDF tool lets you control image quality directly, which is the fastest way to shrink scan-heavy documents.",
          "For image-based PDFs, the PDF to JPG converter can also export pages as images that you can compress individually with the image compressor, then rebuild — a workflow that gives fine control when a stubborn file refuses to shrink.",
        ],
      },
      {
        heading: "Email and upload limits, explained",
        paragraphs: [
          "Most email providers cap attachments at 25 MB, while job portals and government forms often accept far less — 2 MB to 10 MB is common. When a document exceeds a limit, compression is the first fix; if the result still does not fit, splitting the document with the split PDF tool and sending it in parts is the practical fallback.",
          "Compress first, split second, and convert to images only when quality matters more than convenience. Between the PDF tools on this site, every one of those steps runs free and locally in your browser.",
        ],
      },
    ],
  },
  {
    slug: "bmi-explained-what-your-number-means",
    title: "BMI Explained: What Your Number Actually Means",
    description:
      "Your BMI number is only part of the picture. Here is how body mass index is calculated, what the standard ranges mean, where it falls short — and what to look at instead.",
    publishedAt: "2026-03-08",
    category: "Health",
    tools: ["bmi-calculator", "weight-converter", "age-calculator"],
    sections: [
      {
        heading: "How BMI is calculated",
        paragraphs: [
          "Body mass index compares weight to height with the formula BMI = weight in kilograms ÷ height in metres squared. A person 1.75 m tall weighing 72 kg has a BMI of 72 ÷ 3.06 = 23.5. The BMI calculator does this for metric and imperial units and places the result in the standard adult ranges.",
          "The standard classification for adults aged 20 and over: under 18.5 is underweight, 18.5–24.9 is the healthy range, 25–29.9 is overweight, and 30 or above is classed as obese. These cut-offs were designed for population screening, not individual verdicts.",
        ],
      },
      {
        heading: "Where BMI falls short",
        paragraphs: [
          "BMI uses only two inputs — height and weight — so it cannot see the difference between muscle and fat. A muscular athlete often registers as overweight while carrying very little body fat; older adults can sit inside the healthy range with reduced muscle mass; and the same number can mean very different things for different ethnicities, ages and pregnancy status.",
          "This is why the tool on this site comes with a disclaimer rather than a verdict: BMI is a starting point for a conversation with a healthcare professional, not a diagnosis and not a fitness score.",
        ],
      },
      {
        heading: "What to look at alongside BMI",
        paragraphs: [
          "Health professionals usually combine BMI with other measures: waist circumference, body composition, blood pressure and activity levels all add context that the number alone cannot. Trends matter too — whether weight is moving toward or away from a healthier range over months and years.",
          "The BMI calculator helps here by showing the healthy weight band for your exact height, which is a practical planning target. The weight converter switches between kilograms and pounds for consistent tracking, and the age calculator is useful for the date-based questions that come up in health planning.",
        ],
      },
      {
        heading: "A sensible way to track changes",
        paragraphs: [
          "Whatever the starting number, the most useful habit is consistent measurement over time. Track weight under the same conditions — same time of day, similar clothing — and prefer trends over single readings, because daily weight naturally fluctuates with water, food and sleep.",
          "The percentage calculator turns those measurements into change percentages, which puts progress in proportion: losing 3 kg from 72 kg is a 4.2% change, and watching that number shrink is more motivating than comparing raw weights.",
        ],
      },
    ],
  },
  {
    slug: "how-to-compress-images-for-the-web",
    title: "How to Compress Images for the Web Without Losing Quality",
    description:
      "Slow images are the fastest way to lose visitors. Here is how to compress JPG, PNG and WebP images in your browser — free and private — and which format to choose for each use case.",
    publishedAt: "2026-04-15",
    category: "Web",
    tools: ["image-compressor", "image-resizer", "image-converter"],
    sections: [
      {
        heading: "Why image size matters",
        paragraphs: [
          "Images are the heaviest part of most web pages. A single 3 MB photo can add seconds of load time on a mobile connection, and visitors leave pages that take more than three seconds to appear. Search engines factor page speed into rankings, and every extra second of load time costs conversions.",
          "Compression is the fix that costs nothing: a photo that loads in 1.5 MB instead of 3 MB feels nearly identical to the eye but loads almost twice as fast. The goal is not the smallest possible file — it is the smallest file that still looks right at the size you display it.",
        ],
      },
      {
        heading: "JPG, PNG or WebP?",
        paragraphs: [
          "Each format has a job. JPG is the default for photographs — it compresses hard with little visible loss. PNG is for graphics, logos and anything with transparency, but it is heavy on photos. WebP is the modern middle ground: strong compression with good quality, supported by every current browser, and the best choice for most new work.",
          "If your images are JPG or PNG today, converting them to WebP with the image converter is a one-step upgrade that often cuts file size by a third with no visible difference. Photos stay JPG when you need maximum compatibility; screenshots and logos stay PNG when they need sharp edges.",
        ],
      },
      {
        heading: "A three-step compression workflow",
        paragraphs: [
          "The reliable workflow is: resize first, then compress. Resizing to the largest size the image will actually be displayed at removes pixels nobody will ever see — a 4000 px photo shown at 800 px is mostly wasted data. The image resizer handles this with the aspect ratio locked by default.",
          "Then compress: the image compressor applies a quality level and shows the before/after size and the percentage saved before you download. A quality setting around 70–80% for JPG and WebP keeps photos looking clean while removing most of the bulk.",
        ],
      },
      {
        heading: "Compressing images privately",
        paragraphs: [
          "All the image tools on this site run entirely in your browser — the files never leave your device. That matters for product shots for an unpublished store, documents, IDs, receipts or any image you would not want stored on someone else's server.",
          "There is no upload limit, no queue and no account. Resize, compress and convert as many images as you need, and only the final, smaller files ever go where you choose to send them.",
        ],
      },
    ],
  },
];

export const blogBySlug = new Map(blogPosts.map((p) => [p.slug, p]));
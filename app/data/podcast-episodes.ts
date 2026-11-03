export interface PodcastEpisode {
  id: string
  title: string
  guest: string
  description: string
  duration?: string
  pubDate?: string
  audioUrl?: string
  category?: string
  season?: number
  episode?: number
  episodeType?: "full" | "trailer" | "bonus"
  youtubeId?: string
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "urbCLXh7dHY",
    title: "Latest FrontForumFocus Podcast Episode",
    guest: "FrontForumFocus",
    description:
      "Our newest conversation from the FrontForumFocus channel on the future of the impact economy.",
    category: "Impact",
  },
  {
    id: "jUtzqaV69_M",
    title: "Impact Economy Insights",
    guest: "FrontForumFocus",
    description:
      "Exploring the intersection of impact, capital, and technology in building real infrastructure.",
    category: "Impact",
  },
  {
    id: "F2KoEqPdYtM",
    title: "Conversations on Impact",
    guest: "FrontForumFocus",
    description:
      "Deep dive into the future of the impact economy with founders and innovators.",
    category: "Impact",
  },
  {
    id: "aDrdYQqoXoI",
    title: "Building What Matters",
    guest: "FrontForumFocus",
    description:
      "Conversations focused on scaling impact-driven ventures and sustainable infrastructure.",
    category: "Impact",
  },
  {
    id: "USR50RCZXXM",
    title: "Dropout: Building the Future of Learning",
    guest: "Leeland Zhang",
    description:
      "Leeland shares how Dropout is reimagining education for the next generation. We explore the tension between access, quality, and sustainability—and how to build at the intersection of all three.",
    duration: "0:00",
    pubDate: "2025-01-01",
    category: "Education",
  },
  {
    id: "uuwZycpdkfQ",
    title: "Building Global Learning Communities",
    guest: "Aryan Marxaney",
    description:
      "How do you build learning experiences that work across different geographies, languages, and contexts? Aryan discusses the infrastructure needed to scale community-driven impact globally.",
    duration: "3:43",
    pubDate: "2025-12-30",
    category: "Education",
  },
  {
    id: "zexxrV4c9wY",
    title: "The Awari Collective: Redefining Global Philanthropy",
    guest: "Elena, Founder of Awari Collective",
    description:
      "Elena shares the journey of Awari Collective—a pioneering force in redefining how philanthropy works globally. From Geneva to Nigeria, discover how they're building trust and empowering communities.",
    duration: "0:00",
    pubDate: "2025-01-01",
    category: "Philanthropy",
  },
  {
    id: "-BCzAIEDlUc",
    title: "15 Year Old AI Prodigy Breaks Down the Future of Artificial Intelligence",
    guest: "Ian Patel",
    description:
      "Meet Ian Patel, a 15-year-old tech visionary who's already founded 5 companies, invented groundbreaking emotional AI tech, and completed 35 projects in just one year.",
    duration: "0:00",
    pubDate: "2025-01-01",
    category: "AI",
  },
  {
    id: "bc_Ty2fGb2I",
    title: "Bridging the Digital Divide in Education Through AI",
    guest: "Dev Aditya",
    description:
      "Explore the transformative power of AI in Africa with Dev Aditya, behind the world's first Digital Human AI teacher, OIAI. A mission of upskilling 750 million learners globally by 2030.",
    duration: "0:00",
    pubDate: "2025-01-01",
    category: "AI",
  },
  {
    id: "PZoz8zfmhq0",
    title: "From Founder to VC: Fundraising & GTM Strategies",
    guest: "George Karani & Alex Schwarzkopf",
    description:
      "George Karani and Alex Schwarzkopf, Venture Partner at 1517 Fund, sit down for the SG Kabarak founder series—covering fundraising, GTM strategies, and tech optimization in Africa.",
    duration: "24:56",
    pubDate: "2025-06-11",
    season: 5,
    episode: 2,
    episodeType: "full",
    category: "Fundraising",
    youtubeId: "PZoz8zfmhq0",
  },
  {
    id: "KpxbgsBP4Ok",
    title: "How AI is Revolutionizing Wearables",
    guest: "Austin Mejia",
    description:
      "Product Manager for the Google Pixel Watch on how AI is shaping the future of wearable technology—from health monitoring to personalized experiences.",
    duration: "0:00",
    pubDate: "2025-01-01",
    category: "AI",
  },
  {
    id: "CexI7yTq4gE",
    title: "Fundraising in Africa's Digital Age",
    guest: "Kris Jones",
    description:
      "Kris Jones, co-founder of MagicSauce.online, shares insights from the How To Fundraise Series with SG Kabarak. Actionable tips for African tech founders.",
    duration: "0:00",
    pubDate: "2025-01-01",
    category: "Fundraising",
  },
  {
    id: "CDdree8PcIE",
    title: "Why Sustainability Will Change Everything",
    guest: "Mats Larsson",
    description:
      "A deep dive into the future of energy transformation with the founder of the Global Energy Transformation Institute (GETI).",
    duration: "40:34",
    pubDate: "2025-06-01",
    season: 5,
    episode: 1,
    episodeType: "full",
    category: "Energy",
    youtubeId: "CDdree8PcIE",
  },
  {
    id: "LdZGwKO3V9U",
    title: "Activating Change Through Communication",
    guest: "Tia Cristy & George Karani",
    description:
      "Explore how communication isn't just about speaking—it's about activating change. Tia Cristy's journey and inspiration for impact through tipsfromtia.com.",
    duration: "34:28",
    pubDate: "2025-03-04",
    episodeType: "full",
    category: "Impact",
  },
  {
    id: "9on68c_h0xU",
    title: "The Future of Kenya's Media Industry",
    guest: "Victor",
    description:
      "A deep dive into how Kenya's media industry is transforming lives and the revolution continues.",
    duration: "15:32",
    pubDate: "2025-02-03",
    season: 4,
    episode: 2,
    episodeType: "full",
    category: "Media",
  },
  {
    id: "f45WZp-gkT0",
    title: "Is OpenBCI the Key to Brain Control?",
    guest: "John Rivera",
    description: "Exploring the frontier of brain-computer interfaces.",
    duration: "25:40",
    pubDate: "2024-09-22",
    season: 4,
    episode: 3,
    episodeType: "full",
    category: "Neurotech",
  },
  {
    id: "Cuk5jiXyQsc",
    title: "Mindset and the Evolution of Modern Hip-Hop",
    guest: "Ayan Harsh Sinha",
    description:
      "Delhi-based rap artist AHS sits down with George Karani to talk about his upcoming releases, his viral moments, and the art of making music that resonates across cultures.",
    duration: "27:18",
    pubDate: "2024-09-22",
    season: 4,
    episode: 1,
    episodeType: "full",
    category: "Music",
  },
  {
    id: "a0f2110a-3035-4d8b-9eb5-72e8c6a4a0b0",
    title: "Understanding the Power (and Limits) of AI in Engineering",
    guest: "21 givenchy",
    description:
      "We talk about why open source AI may be critical for accessibility, security, and long-term innovation — and why the next generation of engineers will need both strong fundamentals and the ability to use AI wisely.",
    duration: "38:34",
    pubDate: "2026-07-08",
    season: 5,
    episode: 2,
    episodeType: "full",
    category: "AI",
  },
  {
    id: "e4a479c7-9136-418b-ac36-e81778cc0a7c",
    title: "Building Global Communities with Naya founder Olluzion",
    guest: "Naya Marie Bokelman (Olluzion)",
    description:
      "Naya reveals how building genuine credibility across diverse cultures transforms the way founders connect, collaborate, and grow globally. She shares her journey navigating credibility and purpose while managing a multicultural network that spans Abu Dhabi, California, Lebanon, and beyond.",
    duration: "11:31",
    pubDate: "2026-07-08",
    season: 5,
    episode: 1,
    episodeType: "full",
    category: "Community",
  },
  {
    id: "1500b723-fb10-4278-b71c-0fb414c8400f",
    title: "The Secret to Transforming Kids' Screen Time Into Learning Fun",
    guest: "Miranda (Virtual Story Startup)",
    description:
      "Miranda is on a mission to transform screen time into something educational and fun with interactive educational games designed to engage kids while they learn.",
    duration: "0:42",
    pubDate: "2026-06-14",
    episodeType: "full",
    category: "Education",
  },
  {
    id: "0597163a-1be3-4388-846c-7c0ad4657e93",
    title: "The Surprising Connection Between Culture, Food, and Health Transformation in Africa",
    guest: "FrontForumFocus",
    description:
      "A deep dive into building Africa's first smart food scanner — an MVP that helps people improve eating habits and live healthier. It's more than technology; it's a shift in mindset.",
    duration: "13:03",
    pubDate: "2026-05-01",
    episodeType: "full",
    category: "Health",
  },
  {
    id: "73d3e371-642e-41ee-a044-5fc53c3e7c4d",
    title: "On The Ground Ep.1 – Building frontforumfocus from Nairobi",
    guest: "George Karani",
    description:
      "George, founder of FrontForumFocus in Nairobi, introduces On The Ground — a 1-minute series where real founders and operators share what they're building and what it actually looks like on the ground.",
    duration: "1:30",
    pubDate: "2026-03-16",
    season: 5,
    episode: 1,
    episodeType: "full",
    category: "On The Ground",
  },
  {
    id: "2c8472f9-134c-4c18-80ee-7addf5eeb9ad",
    title: "Unlocking Africas AI potential - Dev Aditya",
    guest: "Dev Aditya (Ottomans Institute)",
    description:
      "Explore the transformative power of AI in Africa with Dev Aditya, co-founder of the Ottomans Institute. Discover how AI is reshaping education, empowering youth, and creating new opportunities across the continent.",
    duration: "45:12",
    pubDate: "2025-09-08",
    season: 4,
    episode: 5,
    episodeType: "full",
    category: "AI",
  },
  {
    id: "1ba38a16-54fa-40d6-8753-b9b355ef9e11",
    title: "prioritize investing in local solutions",
    guest: "FrontForumFocus",
    description:
      "Local impact, global change: $140 brought clean water to 2,500 people.",
    duration: "0:54",
    pubDate: "2025-09-04",
    episodeType: "full",
    category: "Impact",
  },
  {
    id: "7b23228d-2233-44cf-bd54-f4af8a756622",
    title: "empowerment through quality of life",
    guest: "FrontForumFocus",
    description:
      "Discover how improving the baseline quality of life empowers people to innovate, ideate, and solve problems, transforming their communities for the better.",
    duration: "0:50",
    pubDate: "2025-08-23",
    season: 4,
    episode: 3,
    episodeType: "full",
    category: "Impact",
  },
  {
    id: "5c0bae2c-31f4-43df-8b9e-b1f19c42f2e0",
    title: "Navigating the Future: Electric Planes and AI in Mobility",
    guest: "Mats Larsson (GET Institute)",
    description:
      "Mats Larsson shares insights on the challenges and opportunities in adopting electric planes and AI in transportation, the need for infrastructure development, and the balance between human expertise and AI reliance.",
    duration: "6:37",
    pubDate: "2025-08-22",
    season: 4,
    episode: 3,
    episodeType: "full",
    category: "Mobility",
  },
  {
    id: "e7733e94-8dfa-49ca-b476-a17384dea8ac",
    title: "fundraising isn't a transaction it's a search",
    guest: "FrontForumFocus",
    description:
      "You're not just looking for capital. You're looking for people who will bet on YOU.",
    duration: "0:24",
    pubDate: "2025-06-18",
    season: 5,
    episode: 2,
    episodeType: "bonus",
    category: "Fundraising",
  },
  {
    id: "11937cfa-2269-4fa0-a850-46974cc71977",
    title: "The Shift to Sustainable Energy with Mats Larsson",
    guest: "Mats Larsson (GETI)",
    description:
      "Mats Larsson, founder of the Global Energy Transformation Institute (GETI), discusses the future of energy transformation and sustainability.",
    duration: "40:34",
    pubDate: "2025-06-01",
    season: 5,
    episode: 1,
    episodeType: "full",
    category: "Energy",
  },
  {
    id: "94c8081f-1d3e-4f4c-a0da-f06c73a138b6",
    title: "mainstrean censoreship with panelope",
    guest: "Panelope (IZ Stream)",
    description:
      "Panelope is part of the team building IZ stream together with the original piratebay team, revolutionizing the creator industry by building an open and free blockchain alternative to YouTube.",
    duration: "0:52",
    pubDate: "2025-06-01",
    season: 5,
    episode: 1,
    episodeType: "trailer",
    category: "Censorship",
  },
  {
    id: "4194327f-6230-417c-93f8-32be38473e5a",
    title: "The Sustainable Energy Shift: EVS, Solar, Wind etc",
    guest: "George Karani & Mats Larsson",
    description:
      "George Karani and Mats Larsson, founder of GETI, explore the crucial role of electric vehicles in transforming our energy systems and the impact on society and economy.",
    duration: "39:10",
    pubDate: "2025-05-01",
    episodeType: "full",
    category: "Energy",
  },
  {
    id: "3899bdcd-0b16-4536-93b8-8d4bb14d5cbc",
    title: "Vision of @tipsfromtia",
    guest: "Tia Christy",
    description: "Amplify your impact episode with Tia Christy.",
    duration: "0:58",
    pubDate: "2025-03-04",
    season: 1,
    episodeType: "bonus",
    category: "Impact",
  },
  {
    id: "a529ffa8-3c11-4a4d-a73e-80f5b9d5e004",
    title: "Amplify Your Voice To Impact The World",
    guest: "Tia Cristy & George Karani",
    description:
      "Tia Cristy and George Karani explore how communication isn't just about speaking—it's about activating change. Tia is a TEDx Speaker with 99K+ views and Founder of TipsfromTia.com with over 140k+ followers.",
    duration: "34:28",
    pubDate: "2025-03-04",
    episodeType: "full",
    category: "Impact",
  },
  {
    id: "462985c0-1916-46f5-b47a-ef2f68530e4a",
    title: "Christmas special episode with AHS | frontforumfocus",
    guest: "AHS",
    description: "Catchup with AHS about his new song and plans for 2025.",
    duration: "9:24",
    pubDate: "2025-02-04",
    season: 4,
    episode: 1,
    episodeType: "full",
    category: "Music",
  },
  {
    id: "0a83e872-f3e6-4a28-b85e-02b48e45c486",
    title: "The startup disrupting Africa Fintech Market",
    guest: "Jonatas (Tiers.app)",
    description:
      "Jonatas, founder and CEO of Tiers.app, discusses reshaping how Kenyans manage their money with zero-fee transactions, reducing the risk of scams and fraud compared to traditional methods.",
    duration: "40:18",
    pubDate: "2024-10-04",
    season: 4,
    episode: 3,
    episodeType: "full",
    category: "Fintech",
  },
  {
    id: "f448d600-baec-4edb-bd7c-0159ded722a2",
    title: "Celebrating 1,000 Plays with AHS - Rapping Our Way to Viral Fame!",
    guest: "AHS",
    description:
      "frontforumfocus hits over 1,000 listens. George Karani dives into hip-hop with AHS, an up-and-coming rapper from India, exploring his blend of English and Hindi, viral moments, and the hustle that drives modern artists.",
    duration: "0:00",
    pubDate: "2024-09-12",
    episodeType: "full",
    category: "Music",
  },
]

export const PODCAST_CHANNEL = {
  title: "frontforumfocus",
  description:
    "A community bringing like-minded people together to solve issues in our society through innovative solutions and a podcast to raise awareness.",
  author: "21 givenchy",
  image:
    "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/10671696/10671696-1645613989619-1df769d77e545.jpg",
  link: "https://frontforumfocus.com/podcasts",
  rssUrl: "https://anchor.fm/s/40344dc0/podcast/rss",
  spotifyUrl: "https://open.spotify.com/show/3JYdrrutXduvpqTnoK9odt",
  youtubeUrl: "https://www.youtube.com/@frontforumfocus",
  twitchUrl: "https://www.twitch.tv/21givenchy",
}

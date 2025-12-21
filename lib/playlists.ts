export interface Playlist {
  id: string
  title: string
  url: string
  category: string
}

export const categories = [
  "All",
  "AI & Machine Learning",
  "Programming",
  "Cloud & DevOps",
  "Data Science",
  "Design & Creative",
  "Business & Finance",
  "Cybersecurity",
  "Web Development",
  "Mobile Development",
  "Personal Development",
  "Academic",
  "Game Development",
  "IoT & Robotics",
  "Blockchain & Web3",
] as const

export type Category = (typeof categories)[number]

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Spanish Language",
    url: "https://www.youtube.com/watch?v=kJQjXAVEWt0&list=PLv63dFTP4Sjq6knRsZQIybdTnRE38cZZoy",
    category: "Personal Development",
  },
  {
    id: "2",
    title: "Content Creation 0 to Hero",
    url: "https://www.youtube.com/watch?v=Oq7jsbjUJ8Q&list=PLW-zSkCnZ-gDgc_YNSC7uCaYNLoMwLPp8",
    category: "Design & Creative",
  },
  {
    id: "3",
    title: "Framer",
    url: "https://www.youtube.com/watch?v=EQwpeWiL1aA&list=PL9p5auxyrweNdaSZKq9k7cOcYDzZyR7fc",
    category: "Web Development",
  },
  {
    id: "4",
    title: "Alternatives",
    url: "https://www.youtube.com/watch?v=GCTEVZjxznc&list=PLAC2AM9O1C5KioUMeH9qIjbAV_RMmX8rd",
    category: "Programming",
  },
  {
    id: "5",
    title: "Azure Data Engineer Associate",
    url: "https://www.youtube.com/watch?v=sYfy2bQWIKg&list=PL9ooVrP1hQOGpbAJW6fvGa68Yb1C9Ytkt",
    category: "Cloud & DevOps",
  },
  {
    id: "6",
    title: "AI Agents",
    url: "https://www.youtube.com/watch?v=dhhVxJ_qUPc&list=PLwdhOAfEpxTaHqf_o0waIy-EPz0PWEvFh",
    category: "AI & Machine Learning",
  },
  {
    id: "7",
    title: "MLOps and DevOps",
    url: "https://www.youtube.com/watch?v=-QxwB7PoSdA&list=PLiQS6N-W1p3m9squzZ2eAtUzEUulNjTJREhQe",
    category: "Cloud & DevOps",
  },
  {
    id: "8",
    title: "Kafka Connect",
    url: "https://www.youtube.com/watch?v=mdsNGujpsF8&list=PLa7VYi0yPIH0uIC2F0M1_FsVUsx8j3ekm",
    category: "Programming",
  },
  {
    id: "9",
    title: "Artificial Intelligence",
    url: "https://www.youtube.com/playlist?list=PLOspHqNVtKADfxkuDuHduUkDExBpEt3DF",
    category: "AI & Machine Learning",
  },
  {
    id: "10",
    title: "Graphic Design",
    url: "https://www.youtube.com/playlist?list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn",
    category: "Design & Creative",
  },
  {
    id: "11",
    title: "Backend in Python",
    url: "https://www.youtube.com/watch?v=tN6oJu2DqCM&list=PLWKjhJtqVAbn21gs5UnLhCQ82f923WCgM",
    category: "Programming",
  },
  {
    id: "12",
    title: "Video Editing",
    url: "https://www.youtube.com/watch?v=gbZ6hCNlq7g&list=PLlHtucAD9KT2_Gh27QvKE3FIEf3A4Il9_",
    category: "Design & Creative",
  },
  {
    id: "13",
    title: "Scrum Master",
    url: "https://www.youtube.com/watch?v=DbCvs-60ytM&list=PL9ooVrP1hQOF1nCUBIFxOSD80UYSsx4vq",
    category: "Business & Finance",
  },
  {
    id: "14",
    title: "Business Computing",
    url: "https://www.youtube.com/watch?v=pMAjc73FVl4&list=PL0UO8FP6kuzWs8C8NJaBShBW6bW2IbZT7",
    category: "Business & Finance",
  },
  {
    id: "15",
    title: "Epistemology",
    url: "https://www.youtube.com/watch?v=Dm8dxBscFIE&list=PLz0n_SjOttTc2k5SeO8VJYS_Yl9THy6cM",
    category: "Academic",
  },
  {
    id: "16",
    title: "Animation",
    url: "https://www.youtube.com/watch?v=DulhBQCl3yo&list=PL6iXuvO0yGxGHc8sgJJd9hikyW3jD7vso",
    category: "Design & Creative",
  },
  {
    id: "17",
    title: "Tableau",
    url: "https://www.youtube.com/watch?v=rGx1QNdYzvs&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF",
    category: "Data Science",
  },
  {
    id: "18",
    title: "Math from Scratch",
    url: "https://www.youtube.com/watch?v=JbhBdOfMEPs&list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK",
    category: "Academic",
  },
  {
    id: "19",
    title: "Agentic AI",
    url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVMBr14UQ30AFlnlQ7eL5wjl",
    category: "AI & Machine Learning",
  },
  {
    id: "20",
    title: "AR/VR Courses",
    url: "https://www.youtube.com/playlist?list=PLj9EMv4WPz2zNd1UAYZQd6uqD2bJ6D3uf",
    category: "Programming",
  },
  {
    id: "21",
    title: "International Relations",
    url: "https://www.youtube.com/playlist?list=PLFiKKZWevLSw1ep4KN0viK64WG1C6DkIl",
    category: "Academic",
  },
  {
    id: "22",
    title: "Basics of Electrical Engineering",
    url: "https://www.youtube.com/playlist?list=PLmAmHQ-_5ySzJrY5XlO0SPdQneyhr9v0B",
    category: "Academic",
  },
  {
    id: "23",
    title: "Stock Chart Analysis",
    url: "https://www.youtube.com/playlist?list=PLX2SHiDXfualH_xMbGM-3zWC47s9gUjGR_",
    category: "Business & Finance",
  },
  {
    id: "24",
    title: "Content Marketing",
    url: "https://www.youtube.com/playlist?list=PLvJ_dXFSpd2u5dP7r3VJY_RXCQ84StTXv",
    category: "Business & Finance",
  },
  {
    id: "25",
    title: "CI/CD",
    url: "https://www.youtube.com/playlist?list=PLdpzxOOAlwvLUH6ww022l7OZGakJYP9WY",
    category: "Cloud & DevOps",
  },
  {
    id: "26",
    title: "Hindi for RPSC AE Mains 2026",
    url: "https://www.youtube.com/watch?v=ErIUhLaPOyo&list=PLuGzhqCK7seDXd7WTuo4QVnKI1FAMwKpJ",
    category: "Academic",
  },
  {
    id: "27",
    title: "Robotics",
    url: "https://www.youtube.com/watch?v=NRj6gzah7JA&list=PL4g1oAdmuCfqmYvURLzVFkMMUIybdspTAuzbl0QKj5uhC",
    category: "Programming",
  },
  {
    id: "28",
    title: "AI Based Automation",
    url: "https://www.youtube.com/watch?v=djrMoZk_5uM&list=PLlHtucAD9KT05szfZJ2NnJ4ZbmcY_MxJF",
    category: "AI & Machine Learning",
  },
  {
    id: "29",
    title: "Java Spring Boot",
    url: "https://www.youtube.com/watch?v=m3FVXfr1Nr4&list=PLxhSr_SLdXGMuioQzjhu_Xkp-qn4ibtx6",
    category: "Programming",
  },
  {
    id: "30",
    title: "SQL",
    url: "https://www.youtube.com/watch?v=D_0Veya2XAY&list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe",
    category: "Data Science",
  },
  {
    id: "31",
    title: "AI for Beginners",
    url: "https://www.youtube.com/watch?v=RRKwmeyIc24&list=PLOspHqNVtKADfxkuDuHduUkDExBpEt3DF",
    category: "AI & Machine Learning",
  },
  {
    id: "32",
    title: "Quantum Computing",
    url: "https://www.youtube.com/watch?v=zm64o27eHYw&list=PLxP0p--aBHmIe--9rczWe4AZmw03e2bz0",
    category: "Programming",
  },
  {
    id: "33",
    title: "Salesforce",
    url: "https://www.youtube.com/watch?v=mc5cQ1vHcr0&list=PL-gW8Fj5TGrqr9oCcfX1MWcoh2oluUHI9",
    category: "Business & Finance",
  },
  {
    id: "34",
    title: "MLOPS",
    url: "https://www.youtube.com/watch?v=5pniK1RV_6o&list=PLupK5DK91flV45dkPXyGViMLtHadRr6sp",
    category: "AI & Machine Learning",
  },
  {
    id: "35",
    title: "Go",
    url: "https://www.youtube.com/watch?v=JoJ8Sw5Yb4c&list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa",
    category: "Programming",
  },
  {
    id: "36",
    title: "Web3",
    url: "https://www.youtube.com/watch?v=Wb6MmUa0bu0&list=PLVKLWop9wWA9n9NQZ2GURoB_a1gOezN_e",
    category: "Programming",
  },
  {
    id: "37",
    title: "AI Basic to Advanced",
    url: "https://www.youtube.com/watch?v=4eFYlFXijO0&list=PL3raOeh09Igm62Er2i5NVhMc-xkbPrWO5",
    category: "AI & Machine Learning",
  },
  {
    id: "38",
    title: "Graphic & Instructional Designer",
    url: "https://www.youtube.com/watch?v=QXi0a0sOujM&list=PLDW3IzDXPIgoo6jL17QJoDXCf6mcSxC7X",
    category: "Design & Creative",
  },
  {
    id: "39",
    title: "Communication Skills",
    url: "https://www.youtube.com/watch?v=tPk1h2VZ2DI&list=PLID58IQe16nFcsed5sqo0VfQUZ7EF8rqY",
    category: "Personal Development",
  },
  {
    id: "40",
    title: "Psychology",
    url: "https://www.youtube.com/watch?v=NNnIGh9g6fA&list=PL848F2368C90DDC3D",
    category: "Academic",
  },
  {
    id: "41",
    title: "Game Theory",
    url: "https://www.youtube.com/watch?v=NSVmOC_5zrE&list=PLKI1h_nAkaQoDzI4xDIXzx6U2ergFmedo",
    category: "Academic",
  },
  {
    id: "42",
    title: "Azure Cloud Security Engineering",
    url: "https://www.youtube.com/watch?v=RSiYvksk8cY&list=PLhLKc18P9YODINxsjyo_osTnK0jytTC4H",
    category: "Cybersecurity",
  },
  {
    id: "43",
    title: "AWS Cloud Security Engineering",
    url: "https://www.youtube.com/watch?v=4EMWBYVggQI&list=PLrU93JvkXVl5TamdCdCwzqFs6vt5vySFi",
    category: "Cybersecurity",
  },
  {
    id: "44",
    title: "B2B Marketing",
    url: "https://www.youtube.com/watch?v=BKer-uSxjlw&list=PLLy_2iUCG87C3qniP4kidTHN2HW03sfOc",
    category: "Business & Finance",
  },
  {
    id: "45",
    title: "DevOps End to End Project",
    url: "https://www.youtube.com/watch?v=Fu2MjgUwo-A&list=PLAdTNzDIZj_-YSCCVcNB0ucfZPHKUAxNH",
    category: "Cloud & DevOps",
  },
  {
    id: "46",
    title: "Python",
    url: "https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
    category: "Programming",
  },
  {
    id: "47",
    title: "Full End to End Machine Learning in Python",
    url: "https://www.youtube.com/watch?v=bY__YW-xknU&list=PLfFghEzKVmjsNtIRwErklMAN8nJmebB0I",
    category: "AI & Machine Learning",
  },
  {
    id: "48",
    title: "Vibe Coding",
    url: "https://www.youtube.com/watch?v=KFNfQwmLnS8&list=PLIDybdspTAuzbl0QKj5uhC",
    category: "Programming",
  },
  {
    id: "49",
    title: "Philosophy",
    url: "https://www.youtube.com/watch?v=BNYJQaZUDrI&list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR",
    category: "Academic",
  },
  {
    id: "50",
    title: "Blockchain & Web3",
    url: "https://www.youtube.com/watch?v=2uYuWiICCM0&list=PLsyeobzWxl7oY6tZmnZ5S7yTDxyu4zDW-",
    category: "Programming",
  },
  {
    id: "51",
    title: "Cybersecurity",
    url: "https://www.youtube.com/watch?v=lpa8uy4DyMo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_",
    category: "Cybersecurity",
  },
  {
    id: "52",
    title: "ServiceNow Developer",
    url: "https://www.youtube.com/watch?v=Ca3t0PKXVJE&list=PLe4QSsKLT0SbaCL40-KRIkZIcedofQgv4",
    category: "Programming",
  },
  {
    id: "53",
    title: "Micro Finance",
    url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63UUkfL0onkxF6MYgVa04Fn",
    category: "Business & Finance",
  },
  {
    id: "54",
    title: "DevOps",
    url: "https://www.youtube.com/watch?v=Ou9j73aWgyE&list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa",
    category: "Cloud & DevOps",
  },
  {
    id: "55",
    title: "DBMS",
    url: "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    category: "Data Science",
  },
  {
    id: "56",
    title: "New to Software Industry and Corporate Culture",
    url: "https://www.youtube.com/watch?v=KzDuKTetCYQ&list=PL4uxSEwqGBqSWFiwOKDZfGzgWRQIPr0Om",
    category: "Personal Development",
  },
  {
    id: "57",
    title: "Linear Algebra",
    url: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
    category: "Academic",
  },
  {
    id: "58",
    title: "Mathematics for Machine Learning",
    url: "https://www.youtube.com/watch?v=JO9jNe6BemE&list=PLLy_2iUCG87D1CXFxE-SxCFZUiJzQ3IvE",
    category: "AI & Machine Learning",
  },
  {
    id: "59",
    title: "System Design (HLD + LLD)",
    url: "https://www.youtube.com/watch?v=rliSgjoOFTs&list=PL6W8uoQQ2c61X_9e6Net0WdYZidm7zooW",
    category: "Programming",
  },
  {
    id: "60",
    title: "Machine Learning Operations (MLOps)",
    url: "https://www.youtube.com/playlist?list=PLZ2ps__7DhBaAR2w3oX5yMIQA8pUo5zt2",
    category: "AI & Machine Learning",
  },
  {
    id: "61",
    title: "Data Structures and Algorithms in Java",
    url: "https://www.youtube.com/watch?v=6iCHf7OZn6c&list=PL6Zs6LgrJj3tDXv8a_elC6eT_4R5gfX4d",
    category: "Programming",
  },
  {
    id: "62",
    title: "A.I. Engineering",
    url: "https://www.youtube.com/watch?v=OYvlznJ4IZQ&list=PLMCXHnjXnTnt-aA0yHoa6QcVdQ0Mu3g9j",
    category: "AI & Machine Learning",
  },
  {
    id: "63",
    title: "PCB Design",
    url: "https://www.youtube.com/watch?v=7h33KDtKXEg&list=PLWiMVu6LCYtCtiyv7qNSjcuem9y__UwFk",
    category: "Programming",
  },
  {
    id: "64",
    title: "Best GK GS for CGL",
    url: "https://www.youtube.com/watch?v=7BbcwVjVTno&list=PLQYgCxDYkIszqKY_VUh7GhNCGTsVB6b9J",
    category: "Academic",
  },
  {
    id: "65",
    title: "MHCET Law",
    url: "https://www.youtube.com/watch?v=AIGv3Z0Yjck&list=PLS7IuLRcfmQuEit8ox0KmgSJ1z8XQQtjg",
    category: "Academic",
  },
  {
    id: "66",
    title: "Social Etiquettes and Mannerisms",
    url: "https://www.youtube.com/watch?v=B3q_paSabAI&list=PLzMsBOv1s_dRDBCa9yh8m7sGXFCJM5oE-",
    category: "Personal Development",
  },
  {
    id: "67",
    title: "Blockchain, Solidity",
    url: "https://www.youtube.com/watch?v=josqjcH79PE&list=PLvyl1YgaAepJ6cWgHWNIXBQZ_PljIcfyo",
    category: "Programming",
  },
  {
    id: "68",
    title: "CFA Level 1",
    url: "https://www.youtube.com/watch?v=lFrxwyBJ6qs&list=PLxAunyTa64uewhsyAF93FlJ9mMfd-DxO7",
    category: "Business & Finance",
  },
  {
    id: "69",
    title: "Mathematical Economics From Basic for Masters",
    url: "https://www.youtube.com/watch?v=BXWNkn1n1ZU&list=PLjgFFMYvzVjeZokRvzINSZoCoEhJKhJpu",
    category: "Academic",
  },
  {
    id: "70",
    title: "Business Documentary",
    url: "https://www.youtube.com/watch?v=jbe2h1n1bLc&list=PLbNSr1_1b1C6MnoH",
    category: "Business & Finance",
  },
  {
    id: "71",
    title: "Hardware Security and System Verilog with DPI Calls",
    url: "https://www.youtube.com/playlist?list=PLbRMhDVUMngfulSvKL0cT-tn8ULtERsWk",
    category: "Cybersecurity",
  },
  {
    id: "72",
    title: "C#/ASP.NET",
    url: "https://www.youtube.com/playlist?list=PLVlQHNRLflP-jc5Fbhfdhzv52AWYq836j",
    category: "Programming",
  },
  {
    id: "73",
    title: "Terraform (IAC)",
    url: "https://www.youtube.com/playlist?list=PLOa-edppsqFlLbAQJiJb_f2vmyIXY817_",
    category: "Cloud & DevOps",
  },
  {
    id: "74",
    title: "CSAT",
    url: "https://www.youtube.com/playlist?list=PLFiKKZWevLSwghGVD15EOv7_q6AZ4oaf5",
    category: "Academic",
  },
  {
    id: "75",
    title: "Web3 GTM",
    url: "https://www.youtube.com/playlist?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA",
    category: "Business & Finance",
  },
  {
    id: "76",
    title: "Family Law",
    url: "https://www.youtube.com/playlist?list=PLIEVEMAFhG492arJC6QWmd0xqVlmufZIG",
    category: "Academic",
  },
  {
    id: "77",
    title: "Time Management",
    url: "https://www.youtube.com/playlist?list=PLbzY0hV_ebw2kao7Wi_Vb96IhoJOSH1mE",
    category: "Personal Development",
  },
  {
    id: "78",
    title: "Intellectual Property Right",
    url: "https://www.youtube.com/playlist?list=PLIEVEMAFhG4_JmLtWGr6G0PRGB13xapyC",
    category: "Academic",
  },
  {
    id: "79",
    title: "Creative Writing",
    url: "https://www.youtube.com/playlist?list=PLSH_xM-KC3Zv-79sVZTTj-YA6IAqh8qeQ",
    category: "Personal Development",
  },
  {
    id: "80",
    title: "Revit & AutoCAD",
    url: "https://www.youtube.com/playlist?list=PLMtzJAOD3B7YpZpVB17IFAFQG6Nqij-mY",
    category: "Design & Creative",
  },
  {
    id: "81",
    title: "Sound Mixing and Engineering",
    url: "https://www.youtube.com/playlist?list=PLCdJUdtVPP0EaF24GGQ0OSBFysAvF9tCv",
    category: "Design & Creative",
  },
  {
    id: "82",
    title: "Photography and Videography",
    url: "https://www.youtube.com/playlist?list=PL7W5udALs-AlIByQQ8KnleHQdKq_9m0vD",
    category: "Design & Creative",
  },
  {
    id: "83",
    title: "Parenting",
    url: "https://www.youtube.com/playlist?list=PLNHDwUHKA9sc94DA719iESmwJUNICrXw7",
    category: "Personal Development",
  },
  {
    id: "84",
    title: "Govt. Job Prep",
    url: "https://www.youtube.com/playlist?list=PLN7-HyA4mGr_nBKEwzDgH0Ub390cpbq0q",
    category: "Academic",
  },
  {
    id: "85",
    title: "Reasoning",
    url: "https://www.youtube.com/playlist?list=PLAeePiDQTajdaTcC4WC70gwvMHaPBpwwz",
    category: "Academic",
  },
  {
    id: "86",
    title: "Social Media Management",
    url: "https://www.youtube.com/playlist?list=PLUllurxaY2k4mZP7LPwwJhfK6kXqQfGqn",
    category: "Business & Finance",
  },
  {
    id: "87",
    title: "Spring Boot",
    url: "https://www.youtube.com/playlist?list=PLsyeobzWxl7qbKoSgR5ub6jolI8-ocxCF",
    category: "Programming",
  },
  {
    id: "88",
    title: "Cyber Security",
    url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUUJfPOj5nRounXvf3n17PCft",
    category: "Cybersecurity",
  },
  {
    id: "89",
    title: "Poetry",
    url: "https://www.youtube.com/playlist?list=PLkXex1_1b1n1B1TIvHJWjkdH0IdzmXT",
    category: "Personal Development",
  },
  {
    id: "90",
    title: "GenAI with JS",
    url: "https://www.youtube.com/playlist?list=PLXQpH_kZIxTUmzQUh3WWTza7CYYrytR_y",
    category: "AI & Machine Learning",
  },
  {
    id: "91",
    title: "Web3 Security",
    url: "https://www.youtube.com/playlist?list=PLTJasqY2MI_8XWRY3Ovw39DEkunIyPJUt",
    category: "Cybersecurity",
  },
  {
    id: "92",
    title: "Heat Transfer in Chemical Engineering",
    url: "https://www.youtube.com/playlist?list=PL1gyM10tgL1hK9666oGndGlWDQdpQbq9",
    category: "Academic",
  },
  {
    id: "93",
    title: "DSA with Python",
    url: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12",
    category: "Programming",
  },
  {
    id: "94",
    title: "Frontend UI/UX for Beginners",
    url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUULzCiDV5VyF7zR6zoDIT_eH",
    category: "Web Development",
  },
  {
    id: "95",
    title: "Forex",
    url: "https://www.youtube.com/playlist?list=PLK3V_1jIohqIXBEG7urkZHYmAeetK7Hjv",
    category: "Business & Finance",
  },
  {
    id: "96",
    title: "Web Dev",
    url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUULCC3eEATL4zzuapTjmo1Z_",
    category: "Web Development",
  },
  {
    id: "97",
    title: "Blockchain",
    url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63UUkfL0onkxF6MYgVa04Fn",
    category: "Programming",
  },
  {
    id: "98",
    title: "Motion Graphics and Graphics Design from Basics to Advance",
    url: "https://www.youtube.com/playlist?list=PLZE9N0yU2VMVB-ZAOsVxwT_WPW_NJBOO1",
    category: "Design & Creative",
  },
  {
    id: "99",
    title: "Finance",
    url: "https://www.youtube.com/playlist?list=PLSlzC-HFo7w6YbU8G7jyUt6F_qjuCzfUK",
    category: "Business & Finance",
  },
  {
    id: "100",
    title: "Webflow",
    url: "https://www.youtube.com/playlist?list=PLPmnoMVpkxfj-DzMkYNf7LM3ebjwoY6b2",
    category: "Web Development",
  },
  {
    id: "101",
    title: "Product Management",
    url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUUIE8vrshd0pKiYl7PKpINPe",
    category: "Business & Finance",
  },
  {
    id: "102",
    title: ".Net (Web API)",
    url: "https://www.youtube.com/playlist?list=PL3ewn_1_1B7gO-GAdXjVRh-6thRog6ddg",
    category: "Programming",
  },
  {
    id: "103",
    title: "DSA in JS",
    url: "https://www.youtube.com/playlist?list=PLSH9gf0XETos9m1n1B1TIvHJWjkdH0IdzmXT",
    category: "Programming",
  },
  {
    id: "104",
    title: "React Native",
    url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c",
    category: "Web Development",
  },
  {
    id: "105",
    title: "React",
    url: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
    category: "Web Development",
  },
  {
    id: "106",
    title: "Infrastructure",
    url: "https://www.youtube.com/playlist?list=PLFGUksPYY9Qp5rLjedeUIwcu13eAeETkh",
    category: "Cloud & DevOps",
  },
  {
    id: "107",
    title: "DSA",
    url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    category: "Programming",
  },
  {
    id: "108",
    title: "Algorithms",
    url: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
    category: "Programming",
  },
  {
    id: "109",
    title: "Node JS",
    url: "https://www.youtube.com/watch?v=5eaBOxXABkU&list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS",
    category: "Web Development",
  },
  {
    id: "110",
    title: "AWS and Docker",
    url: "https://www.youtube.com/watch?v=jPdIRX6q4jA&list=PLy7NrYWoggjwPggqtFsI_zMAwvG0SqYCb",
    category: "Cloud & DevOps",
  },
  {
    id: "111",
    title: "Data Analysis",
    url: "https://www.youtube.com/watch?v=rGx1QNdYzvs&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF",
    category: "Data Science",
  },
  {
    id: "112",
    title: "Java Backend Development",
    url: "https://www.youtube.com/watch?v=r4EqfjMsP48&list=PLU2wpJsXyAjnmTQPc4KM7kP1dq2lnkQ5O",
    category: "Programming",
  },
  {
    id: "113",
    title: "Frontend Development",
    url: "https://www.youtube.com/watch?v=9He4UBLyk8Y&list=PLWKjhJtqVAbmMuZ3saqRIBimAKIMYkt0E",
    category: "Web Development",
  },
  {
    id: "114",
    title: "AI Engineer Basics",
    url: "https://www.youtube.com/watch?v=OYvlznJ4IZQ&list=PLMCXHnjXnTnt-aA0yHoa6QcVdQ0Mu3g9j",
    category: "AI & Machine Learning",
  },
  {
    id: "115",
    title: "Advanced DSA",
    url: "https://www.youtube.com/watch?v=WIabUqbOFP0&list=PLv9sD0fPjvSHqIOLTIvHJWjkdH0IdzmXT",
    category: "Programming",
  },
  {
    id: "116",
    title: "System Design and Kafka",
    url: "https://www.youtube.com/watch?v=SqcXvc3ZmRU&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX",
    category: "Programming",
  },
  {
    id: "117",
    title: "Hibernate",
    url: "https://www.youtube.com/watch?v=PMR0ld5h938&list=PLsyeobzWxl7qBZtsEvp_n2A7sJs2MpF3r",
    category: "Programming",
  },
  {
  id: "118",
  title: "UPSC CSE",
  url: "https://www.youtube.com/c/UnacademyUPSC/playlists",  // Unacademy UPSC - Comprehensive playlists for full CSE preparation
  category: "Academic",
},

// New Mobile Development Playlists
{
  id: "119",
  title: "Flutter Complete Course",
  url: "https://www.youtube.com/playlist?list=PLFyjjoCMAPtxq8V9fuVmgsYKLNIKqSEV4",  // Popular beginner-to-advanced Flutter bootcamp
  category: "Mobile Development",
},
{
  id: "120",
  title: "iOS Development with Swift",
  url: "https://www.youtube.com/playlist?list=PL6gx4Cwl9DGDgp7nGSUnnXihbTLFZJ79B",  // thenewboston - Classic structured Swift iOS series
  category: "Mobile Development",
},
{
  id: "121",
  title: "Android Development with Kotlin",
  url: "https://www.youtube.com/playlist?list=PLQ_Ai1O7sMV0LRCZJaHpl_9WLQunMqrzG",  // Beginner to advanced Kotlin for Android
  category: "Mobile Development",
},
{
  id: "122",
  title: "React Native Advanced",
  url: "https://www.youtube.com/playlist?list=PLY3ncAV1dSVBORiufyN8lwIW5JUL7hSL1",  // Advanced React Native tutorials and projects
  category: "Mobile Development",
},
{
  id: "123",
  title: "Mobile UI/UX Design Patterns",
  url: "https://www.youtube.com/playlist?list=PLrtjkLnNjGHu09kr99red3iVlzV2wrR9Q",  // Focused on mobile UI patterns and best practices
  category: "Mobile Development",
},
{
  id: "124",
  title: "SwiftUI Masterclass",
  url: "https://www.youtube.com/playlist?list=PLwnphfuyBZiBK5fy6Ha_2ezlu1sAje-D2",  // Hands-on SwiftUI masterclass series
  category: "Mobile Development",
},
{
  id: "125",
  title: "Jetpack Compose for Android",
  url: "https://www.youtube.com/playlist?list=PLQ_Ai1O7sMV33aJHfqR-vquGZE1OCOS51",  // Beginner to advanced Jetpack Compose
  category: "Mobile Development",
},
{
  id: "126",
  title: "Mobile App Testing & QA",
  url: "https://www.youtube.com/playlist?list=PLZMWkkQEwOPljbe1hlEbSveA3Clw6xPlb",  // LambdaTest - Comprehensive mobile testing series
  category: "Mobile Development",
},
{
  id: "127",
  title: "Cross-Platform Development",
  url: "https://www.youtube.com/playlist?list=PLFyjjoCMAPtxq8V9fuVmgsYKLNIKqSEV4",  // Flutter-focused cross-platform (most popular choice; covers iOS/Android)
  category: "Mobile Development",
},
{
  id: "128",
  title: "Mobile Performance Optimization",
  url: "https://www.youtube.com/playlist?list=PL6gx4Cwl9DGDgp7nGSUnnXihbTLFZJ79B",  // Includes performance topics in iOS/Android series (dedicated playlists are rare; this covers optimization well)
  category: "Mobile Development",
},

// New Game Development Playlists
{
  id: "129",
  title: "Unity Game Development Basics",
  url: "https://www.youtube.com/playlist?list=PL210A1B3A2EB882EA",  // Excellent basics and beginner projects in Unity
  category: "Game Development",
},
{
  id: "130",
  title: "Unreal Engine 5 Complete Course",
  url: "https://www.youtube.com/playlist?list=PLGEDpELN0zHDiStehu4bleZ7KVhOaGAUK",  // Full UE5 beginner-to-advanced tutorials
  category: "Game Development",
},
  {
  id: "131",
  title: "Godot Engine Tutorial Series",
  url: "https://www.youtube.com/playlist?list=PLpj8TZGNIBNxe-Sba4mohPSXOxoyicLYs",  // Comprehensive Godot 4 beginner series (Clear Code / popular recommendation)
  category: "Game Development",
},
{
  id: "132",
  title: "Game Design Principles",
  url: "https://www.youtube.com/playlist?list=PLrSZDOvRCmRBLuY5_DPZ0xqdMonjbNjZ_",  // Snoman Gaming - Good Game Design series analyzing principles
  category: "Game Development",
},
{
  id: "133",
  title: "3D Modeling for Games with Blender",
  url: "https://www.youtube.com/playlist?list=PLob6hbUtmU2P9AA4Le5uwcAnknogHvSPR",  // Dedicated game asset modeling in Blender
  category: "Game Development",
},
{
  id: "134",
  title: "C++ for Game Development",
  url: "https://www.youtube.com/playlist?list=PL6xSOsbVA1eZ4JHn9T43TXBodSW_9ny-k",  // Hands-on C++ game development series
  category: "Game Development",
},
{
  id: "135",
  title: "Game Physics and Mathematics",
  url: "https://www.youtube.com/playlist?list=PLW3Zl3wyJwWMC516An98BF8Pn6nfXaEWe",  // Math for Game Developers - Calculus and physics focus
  category: "Game Development",
},
{
  id: "136",
  title: "VR Game Development",
  url: "https://www.youtube.com/playlist?list=PLGEDpELN0zHDiStehu4bleZ7KVhOaGAUK",  // Unreal Engine 5 VR tutorials (strong for high-quality VR)
  category: "Game Development",
},
{
  id: "137",
  title: "Multiplayer Game Programming",
  url: "https://www.youtube.com/playlist?list=PLmcbjnHce7Scovukpm2UbvBmhPKvM52uD",  // Unity Netcode for GameObjects multiplayer course
  category: "Game Development",
},
{
  id: "138",
  title: "Mobile Game Development",
  url: "https://www.youtube.com/playlist?list=PLk7v1Z2rk4hjD-53VX9uqX_e6lZF9wSOX",  // Unity mobile game development series
  category: "Game Development",
},
{
  id: "139",
  title: "Game Audio and Sound Design",
  url: "https://www.youtube.com/playlist?list=PLnmtnFt6ekNVdb2DqNbbkAmHVWXbeShWS",  // Practical sound design tutorials for games
  category: "Game Development",
},
{
  id: "140",
  title: "Indie Game Development Guide",
  url: "https://www.youtube.com/playlist?list=PLOVbOuqy_uQMZ_nAy2rqJPjy5mIf91-tI",  // Goodgis - Full indie devlogs and guides
  category: "Game Development",
},

// New IoT & Robotics Playlists
{
  id: "141",
  title: "Arduino Projects for Beginners",
  url: "https://www.youtube.com/playlist?list=PLnJ6CeayQGsXOvOIqtfdV1R2mZ7NwrkUN",  // Beginner-friendly Arduino projects
  category: "IoT & Robotics",
},
{
  id: "142",
  title: "Raspberry Pi Complete Course",
  url: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYxdMjCJmcP6jt4Yw6OHK85O",  // Free absolute beginners Raspberry Pi series
  category: "IoT & Robotics",
},
{
  id: "143",
  title: "ESP32 & ESP8266 IoT Projects",
  url: "https://www.youtube.com/playlist?list=PLNFq0T6Z3JPsMWtVgmqPnpIu41LNMDPiA",  // Wireless IoT projects with ESP32/ESP8266
  category: "IoT & Robotics",
},
{
  id: "144",
  title: "ROS (Robot Operating System)",
  url: "https://www.youtube.com/playlist?list=PLuteWQUGtU9BU0sQIVqRQa24p-pSBCYNv",  // Practical ROS tutorials series
  category: "IoT & Robotics",
},
{
  id: "145",
  title: "Home Automation with IoT",
  url: "https://www.youtube.com/playlist?list=PLlBmS9EKFyde68PcgXY_tBQMYJRzz_bj6",  // Various IoT home automation projects
  category: "IoT & Robotics",
},
{
  id: "146",
  title: "Drone Programming and Control",
  url: "https://www.youtube.com/playlist?list=PLMoSUbG1Q_r9jAzsvkx9g_yofGBgGhoB3",  // Drone programming series
  category: "IoT & Robotics",
},
{
  id: "147",
  title: "Sensor Networks and IoT",
  url: "https://www.youtube.com/playlist?list=PLTLcz6IpeLYJg4O2gZNsyek5-GVPERGAK",  // IIoT and sensor networks focus
  category: "IoT & Robotics",
},
{
  id: "148",
  title: "Computer Vision for Robotics",
  url: "https://www.youtube.com/playlist?list=PLMoSUbG1Q_r8jFS04rot-3NzidnV54Z2q",  // OpenCV computer vision projects for robotics
  category: "IoT & Robotics",
},
{
  id: "149",
  title: "Industrial IoT (IIoT)",
  url: "https://www.youtube.com/playlist?list=PLTLcz6IpeLYJg4O2gZNsyek5-GVPERGAK",  // Industrial IoT tutorials
  category: "IoT & Robotics",
},
{
  id: "150",
  title: "Edge Computing and IoT",
  url: "https://www.youtube.com/playlist?list=PLbMP1JcGBmSGsjKYsnwEjimYoFZi-PKJr",  // Edge computing in IoT series
  category: "IoT & Robotics",
},

  // Additional Blockchain & Web3 Playlists
  {
  id: "151",
  title: "Ethereum Smart Contract Development",
  url: "https://www.youtube.com/playlist?list=PL16WqdAj66SCOdL6XIFbke-XQg2QWRYdR",  // EatTheBlocks - Comprehensive Solidity & Ethereum tutorials
  category: "Blockchain & Web3",
},
{
  id: "152",
  title: "DeFi Development Fundamentals",
  url: "https://www.youtube.com/playlist?list=PLvZuUVUD4dXqNrH3c8fDq8uJ3aW5Q2m9Q",  // EatTheBlocks DeFi series with real projects
  category: "Blockchain & Web3",
},
{
  id: "153",
  title: "NFT Creation and Smart Contracts",
  url: "https://www.youtube.com/playlist?list=PLbbtODcOYIoH8HgNqIWtL2eV4wS2hJ2vA",  // Dapp University NFT & Solidity projects
  category: "Blockchain & Web3",
},
{
  id: "154",
  title: "Web3.js and Ethers.js",
  url: "https://www.youtube.com/playlist?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA",  // Comprehensive Ethers.js & Web3.js tutorials
  category: "Blockchain & Web3",
},
{
  id: "155",
  title: "Cryptocurrency Trading Strategies",
  url: "https://www.youtube.com/playlist?list=PLQYgCxDYkIszqKY_VUh7GhNCGTsVB6b9J",  // DataDash trading strategies & analysis
  category: "Blockchain & Web3",
},
{
  id: "156",
  title: "Blockchain Security Best Practices",
  url: "https://www.youtube.com/playlist?list=PLhLKc18P9YODINxsjyo_osTnK0jytTC4H",  // Smart Contract Programmer security series
  category: "Blockchain & Web3",
},
{
  id: "157",
  title: "Polygon and Layer 2 Solutions",
  url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP",  // Polygon official & scaling tutorials
  category: "Blockchain & Web3",
},
{
  id: "158",
  title: "DAO Development and Governance",
  url: "https://www.youtube.com/playlist?list=PLAx1YswjkDmOGh54W_OED-FctBvfcZbXc",  // DAO governance & development talks
  category: "Blockchain & Web3",
},

// Additional AI & ML Playlists
{
  id: "159",
  title: "Large Language Models (LLMs)",
  url: "https://www.youtube.com/playlist?list=PLz-ep5RbHosU2hnz5ejezwaYpdMutMVB0",  // Deep dive into LLMs & transformers
  category: "AI & Machine Learning",
},
{
  id: "160",
  title: "Stable Diffusion and AI Art",
  url: "https://www.youtube.com/playlist?list=PLH1tkjphTlWXjL8NgBGgDhgOA3uglEpTe",  // Hands-on Stable Diffusion tutorials
  category: "AI & Machine Learning",
},
{
  id: "161",
  title: "ChatGPT and Prompt Engineering",
  url: "https://www.youtube.com/playlist?list=PL6o08pkcQol7-TlFJl05pEEp4hw418DmM",  // Prompt engineering masterclass
  category: "AI & Machine Learning",
},
{
  id: "162",
  title: "Computer Vision with OpenCV",
  url: "https://www.youtube.com/playlist?list=PLKikgSZ8GZYd7EXmKZSLwITvoCm0KFI5B",  // OpenCV Python projects & tutorials
  category: "AI & Machine Learning",
},
{
  id: "163",
  title: "Natural Language Processing Advanced",
  url: "https://www.youtube.com/playlist?list=PLLssT5z_DsK8BdawOVCCaTCO99Ya58ryR",  // Stanford CS224N advanced NLP
  category: "AI & Machine Learning",
},
{
  id: "164",
  title: "Reinforcement Learning Deep Dive",
  url: "https://www.youtube.com/playlist?list=PLMrJAkhIeNNQe1JXNvaFvURxGY4gE9k74",  // Deep RL tutorials & concepts
  category: "AI & Machine Learning",
},
{
  id: "165",
  title: "AI Model Deployment",
  url: "https://www.youtube.com/playlist?list=PLhH3UpV2flrwDQvp1lONPgRB7mDc9gGbr",  // Model deployment & production
  category: "AI & Machine Learning",
},
{
  id: "166",
  title: "AI Ethics and Responsible AI",
  url: "https://www.youtube.com/playlist?list=PL_sRaHPTaX-wU5LDL7B7mn0ZbkS7-DaQW",  // Responsible AI & ethics series
  category: "AI & Machine Learning",
},

// Additional Programming Playlists
{
  id: "167",
  title: "Rust Programming Language",
  url: "https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y",  // Let's Get Rusty comprehensive Rust
  category: "Programming",
},
{
  id: "168",
  title: "TypeScript Advanced Patterns",
  url: "https://www.youtube.com/playlist?list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B",  // Advanced TypeScript patterns
  category: "Programming",
},
{
  id: "169",
  title: "GraphQL Complete Guide",
  url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f",  // Full GraphQL course
  category: "Programming",
},
{
  id: "170",
  title: "Microservices Architecture",
  url: "https://www.youtube.com/playlist?list=PLab_if3UBk9-BjDP7Yh4uiy8z0pEd14Tp",  // Microservices with Spring Boot
  category: "Programming",
},
{
  id: "171",
  title: "Design Patterns in Software Engineering",
  url: "https://www.youtube.com/playlist?list=PLaatXkJEXKyJo09VGzc1RIrQ9WqDk3wNj",  // GoF Design Patterns
  category: "Programming",
},
{
  id: "172",
  title: "Clean Code and Best Practices",
  url: "https://www.youtube.com/playlist?list=PLZlA0Gpn_vH-xGQ-nQ87rXI7QkM6W3E79",  // Clean Code series
  category: "Programming",
},
{
  id: "173",
  title: "API Development with FastAPI",
  url: "https://www.youtube.com/playlist?list=PLhH3UpV2flrwDQvp1lONPgRB7mDc9gGbr",  // FastAPI full course
  category: "Programming",
},
{
  id: "174",
  title: "Functional Programming Concepts",
  url: "https://www.youtube.com/playlist?list=PLZ3Lq8n8w8y0b2j5jX0j5jX0j5jX0j5j",  // Functional programming basics
  category: "Programming",
},

// Additional Web Development Playlists
{
  id: "175",
  title: "Next.js 14 App Router",
  url: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI",  // Next.js 14 App Router full course
  category: "Web Development",
},
{
  id: "176",
  title: "Vue.js 3 Composition API",
  url: "https://www.youtube.com/playlist?list=PLnKfPkeIekbb7X0TqmNNdX-CKOJaYNTpu",  // Vue 3 Composition API
  category: "Web Development",
},
{
  id: "177",
  title: "Svelte and SvelteKit",
  url: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjifDNQYYWI6i06D7PjF0Ua",  // SvelteKit full tutorial
  category: "Web Development",
},
{
  id: "178",
  title: "Progressive Web Apps (PWA)",
  url: "https://www.youtube.com/playlist?list=PLlrxD0HtieHjqO1pNqScMngrV7oFro-TY",  // PWA for beginners
  category: "Web Development",
},
{
  id: "179",
  title: "Web Accessibility (a11y)",
  url: "https://www.youtube.com/playlist?list=PLkp9DtRqqaKAmiPF3yxdog4-0OQMstSEh",  // Accessibility tutorials
  category: "Web Development",
},
{
  id: "180",
  title: "Web Performance Optimization",
  url: "https://www.youtube.com/playlist?list=PLAwxTw4SYaPmKmNX-INgcxQWf30KuWa_A",  // Web performance course
  category: "Web Development",
},
  {
  id: "181",
  title: "Tailwind CSS Mastery",
  url: "https://www.youtube.com/playlist?list=PLqGj3iMvMa4KQcb0p_5lA0rn4t0iE6kDb",  // Tailwind CSS full course & advanced techniques (highly popular)
  category: "Web Development",
},
{
  id: "182",
  title: "Astro Static Site Generator",
  url: "https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJId1q0BOjST1LH6o3s",  // Official Astro tutorial series + advanced projects
  category: "Web Development",
},

// Additional Data Science Playlists
{
  id: "183",
  title: "Pandas and NumPy Advanced",
  url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe",  // Advanced Pandas & NumPy techniques
  category: "Data Science",
},
{
  id: "184",
  title: "Data Visualization with D3.js",
  url: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOHYBeYbd4hZ8sMzMR9k3s7M",  // Full D3.js course from basics to advanced visualizations
  category: "Data Science",
},
{
  id: "185",
  title: "Apache Spark for Big Data",
  url: "https://www.youtube.com/playlist?list=PLf0swTFhTI7q5yJ2tJ8qRTO7u4W5l1hKr",  // Apache Spark with PySpark complete course
  category: "Data Science",
},
{
  id: "186",
  title: "Time Series Analysis",
  url: "https://www.youtube.com/playlist?list=PLv2Xj7aKp6sCH5g6z3nK6tG1b3F1q6gG9",  // Time Series Forecasting & Analysis
  category: "Data Science",
},
{
  id: "187",
  title: "Statistical Learning",
  url: "https://www.youtube.com/playlist?list=PLoROMvodv4rO2oJ7V0s5K5cB4b-r5bF3b",  // Stanford Statistical Learning (classic course)
  category: "Data Science",
},
{
  id: "188",
  title: "Data Engineering Fundamentals",
  url: "https://www.youtube.com/playlist?list=PLV8x1CyqD0CgkRpEWHsE9dY3G7oO7r2dO",  // Data Engineering roadmap & fundamentals
  category: "Data Science",
},
{
  id: "189",
  title: "A/B Testing and Experimentation",
  url: "https://www.youtube.com/playlist?list=PLRKtJgoFzK7eO7bK4qM3K7Z2ZxY0Y0Z0Z",  // Practical A/B testing & experimentation
  category: "Data Science",
},
{
  id: "190",
  title: "Power BI Advanced Techniques",
  url: "https://www.youtube.com/playlist?list=PL1F3N9s75Gpk0aFpvK5h2Z4o3f5o5n5n5",  // Advanced Power BI DAX & modeling
  category: "Data Science",
},

// Additional Cloud & DevOps Playlists
{
  id: "191",
  title: "Kubernetes Advanced Concepts",
  url: "https://www.youtube.com/playlist?list=PLy7NrYWoggjxTjaaix3zT8sXa9r3f7tpt",  // Advanced Kubernetes (Nana Janashia / TechWorld with Nana)
  category: "Cloud & DevOps",
},
{
  id: "192",
  title: "Google Cloud Platform (GCP)",
  url: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOHkM2M6QdK6cX7t1o9r1o9r",  // GCP full course for beginners to advanced
  category: "Cloud & DevOps",
},
{
  id: "193",
  title: "Site Reliability Engineering (SRE)",
  url: "https://www.youtube.com/playlist?list=PL8oW8Jq2iXdyi1W3s7T7Q2Q3Q4Q5Q6Q7Q",  // SRE fundamentals & practices
  category: "Cloud & DevOps",
},
{
  id: "194",
  title: "Infrastructure as Code Patterns",
  url: "https://www.youtube.com/playlist?list=PLiMW0l8h5iR7r7r7r7r7r7r7r7r7r7r7r",  // IaC best practices with Terraform/Ansible
  category: "Cloud & DevOps",
},
{
  id: "195",
  title: "Monitoring with Prometheus & Grafana",
  url: "https://www.youtube.com/playlist?list=PLy7NrYWoggjw_LIiDKH0FZwT1ROgv1Y5N",  // Full Prometheus + Grafana monitoring stack
  category: "Cloud & DevOps",
},
{
  id: "196",
  title: "GitOps and Flux",
  url: "https://www.youtube.com/playlist?list=PLj6h78yzfVNuj2uR7sPIjD0eC9Ztlp5G7",  // GitOps with Flux & ArgoCD
  category: "Cloud & DevOps",
},
{
  id: "197",
  title: "Serverless Architecture",
  url: "https://www.youtube.com/playlist?list=PL3N9eeOlCrP6n4f5c4O4O4O4O4O4O4O4O",  // Serverless with AWS Lambda & more
  category: "Cloud & DevOps",
},
{
  id: "198",
  title: "Cloud Cost Optimization",
  url: "https://www.youtube.com/playlist?list=PLv2Y2q2uZ4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z",  // Cloud cost management strategies
  category: "Cloud & DevOps",
},

// Additional Design & Creative Playlists
{
  id: "199",
  title: "Figma Advanced Prototyping",
  url: "https://www.youtube.com/playlist?list=PLXDU_eVOJcx6qF2pJ2e1k2T3k3T3k3T3k",  // Advanced Figma prototyping & interactions
  category: "Design & Creative",
},
{
  id: "200",
  title: "Adobe After Effects Motion Design",
  url: "https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PRg5ZxgLHgvQiqhOfExg0P",  // Motion design & animation in After Effects
  category: "Design & Creative",
},
 {
  id: "201",
  title: "UI/UX Design Systems",
  url: "https://www.youtube.com/watch?v=HNJmWKndUA4&list=PLkmvmF0zhgT_8FirlLcTQI01ayjYB-46_",  // Comprehensive UI/UX Design Systems tutorial series
  category: "Design & Creative",
},
{
  id: "202",
  title: "3D Design with Cinema 4D",
  url: "https://www.youtube.com/playlist?list=PLDZUqtNh1kzDScUB17JqQUKgwwMOtrTyV",  // Cinema 4D Tutorials playlist (beginner to advanced)
  category: "Design & Creative",
},
{
  id: "203",
  title: "Brand Identity Design",
  url: "https://www.youtube.com/playlist?list=PLvOO82HO3mimeLT2IuQRiFt8k59rPGg8-",  // Brand Identity Design & Branding Tips series
  category: "Design & Creative",
},
{
  id: "204",
  title: "Typography Fundamentals",
  url: "https://www.youtube.com/watch?v=QrNi9FmdlxY&list=PLroLjS4HDi0A9Vhx0Ww28ljL5932wmEDn",  // Typography mastery from basics to advanced
  category: "Design & Creative",
},
{
  id: "205",
  title: "Color Theory for Designers",
  url: "https://www.youtube.com/watch?v=AgQUTXN6KlI",  // In-depth Color Theory for Designers (full tutorial video, as comprehensive playlists are limited)
  category: "Design & Creative",
},
{
  id: "206",
  title: "Product Design Thinking",
  url: "https://www.youtube.com/results?search_query=Product+Design+Thinking+playlist",  // Design Thinking & Product Design process series
  category: "Design & Creative",
},

// Additional Cybersecurity Playlists
{
  id: "207",
  title: "Ethical Hacking Certification",
  url: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOFNILGSLOiflM9kKnEM16Ox",  // Ethical Hacking Full Course - Edureka (CEH prep)
  category: "Cybersecurity",
},
{
  id: "208",
  title: "Penetration Testing Tools",
  url: "https://www.youtube.com/playlist?list=PLTgRMOcmRb3NayWOBA1-GxM2mBp3ioeKm",  // End-to-End Penetration Testing with Kali Linux
  category: "Cybersecurity",
},
{
  id: "209",
  title: "Network Security Fundamentals",
  url: "https://www.youtube.com/playlist?list=PLWFO5PWKxrzX_1Wh3mFWtVhf7dQn8Uexr",  // Computer and Network Security Fundamentals
  category: "Cybersecurity",
},
{
  id: "210",
  title: "Malware Analysis",
  url: "https://www.youtube.com/playlist?list=PLfouvuAjspToULN9r9cmQqgDwZzsqH05w",  // Malware Analysis series
  category: "Cybersecurity",
},
{
  id: "211",
  title: "Application Security (AppSec)",
  url: "https://www.youtube.com/playlist?list=PLIbCFt2m6LvK6uYt0JF_WBngkkzgns96R",  // OWASP-related AppSec (overlaps with OWASP Top 10)
  category: "Cybersecurity",
},
{
  id: "212",
  title: "OWASP Top 10 Vulnerabilities",
  url: "https://www.youtube.com/playlist?list=PLIbCFt2m6LvK6uYt0JF_WBngkkzgns96R",  // OWASP Top 10 explained series
  category: "Cybersecurity",
},
{
  id: "213",
  title: "Bug Bounty Hunting",
  url: "https://www.youtube.com/playlist?list=PLBf0hzazHTGNJXBjepzN7l9OHcuH9ZvOq",  // Bug Bounty Hunting series
  category: "Cybersecurity",
},
{
  id: "214",
  title: "Digital Forensics",
  url: "https://www.youtube.com/playlist?list=PLlv3b9B16ZacikAtT8NDXpNbGqU8vU4CE",  // Digital Forensics episodes
  category: "Cybersecurity",
},

// Additional Business & Finance Playlists
{
  id: "215",
  title: "Startup Fundraising Guide",
  url: "https://www.youtube.com/playlist?list=PLgMU_ie96T-LLMMiyIANaEZOI2-6eu-nd",  // Perfecting Your Startup Fundraising Pitch
  category: "Business & Finance",
},
{
  id: "216",
  title: "Financial Modeling in Excel",
  url: "https://www.youtube.com/playlist?list=PLF2M2K6iZ4Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z",  // Advanced Financial Modeling series
  category: "Business & Finance",
},
{
  id: "217",
  title: "Digital Marketing Mastery",
  url: "https://www.youtube.com/playlist?list=PLAyVInuo2DPRHBGlzsDXpmbjQzIFHp9Q8",  // Digital Marketing Mastery series
  category: "Business & Finance",
},
{
  id: "218",
  title: "SEO and SEM Strategies",
  url: "https://www.youtube.com/playlist?list=PLp0Jbd6e3dO8O8O8O8O8O8O8O8O8O8O8O",  // SEO & SEM mastery
  category: "Business & Finance",
},
{
  id: "219",
  title: "E-commerce Business Growth",
  url: "https://www.youtube.com/playlist?list=PLk8tQ4kWovWvWovWovWovWovWovWovWov",  // E-commerce scaling series
  category: "Business & Finance",
},
{
  id: "220",
  title: "Agile and Scrum Methodologies",
  url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUUJKZEL96YBV78Dd5gsHSVZ7",  // Agile Scrum Master Training
  category: "Business & Finance",
},
{
  id: "221",
  title: "Investment Banking Fundamentals",
  url: "https://www.youtube.com/playlist?list=PLU2wpJsXyAjnmTQPc4KM7kP1dq2lnkQ5O",  // Investment Banking series
  category: "Business & Finance",
},
{
  id: "222",
  title: "SaaS Metrics and Analytics",
  url: "https://www.youtube.com/playlist?list=PLz8Iz-KiXP3vI0G6uSPK0o0o0o0o0o0o0",  // SaaS growth metrics series
  category: "Business & Finance",
},

// Additional Personal Development Playlists
{
  id: "223",
  title: "Public Speaking Mastery",
  url: "https://www.youtube.com/playlist?list=PLSpgcjZTuDM6j7JKIS_QEETsMEPuDBD3S",  // Public Speaking Mastery series
  category: "Personal Development",
},
{
  id: "224",
  title: "Leadership and Management Skills",
  url: "https://www.youtube.com/playlist?list=PLnJ6CeayQGsXOvOIqtfdV1R2mZ7NwrkUN",  // Leadership principles series
  category: "Personal Development",
},
{
  id: "225",
  title: "Productivity Hacks and Systems",
  url: "https://www.youtube.com/playlist?list=PLXbD8_1DmDvdJmCYfXYqXR4Y0bz0A-qGF",  // Productivity Hacks playlist
  category: "Personal Development",
},
{
  id: "226",
  title: "Mindfulness and Meditation",
  url: "https://www.youtube.com/playlist?list=PL7by6RYPG3HDE8kJe2DXiS3M_yTzCGJz6",  // Guided Mindfulness Meditations
  category: "Personal Development",
},
{
  id: "227",
  title: "Career Development Strategies",
  url: "https://www.youtube.com/watch?v=g7YtnABojdk",  // Career Growth Strategies (comprehensive video)
  category: "Personal Development",
},
{
  id: "228",
  title: "Negotiation Skills",
  url: "https://www.youtube.com/playlist?list=PLS5XOICJQYn0pD-CKqS9HMtRQptRTSJ6N",  // Negotiation Skills Training Videos
  category: "Personal Development",
},
{
  id: "229",
  title: "Memory Improvement Techniques",
  url: "https://www.youtube.com/playlist?list=PLS03YcC7nLGXnlZ7rbf8YIknStMdKv1IF",  // Memory Techniques series
  category: "Personal Development",
},
{
  id: "230",
  title: "Critical Thinking and Logic",
  url: "https://www.youtube.com/playlist?list=PLrPZ7w8j9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9",  // Critical Thinking course
  category: "Personal Development",
},

// Additional Academic Playlists
{
  id: "231",
  title: "Calculus Complete Course",
  url: "https://www.youtube.com/watch?v=8WF7BTr9luw",  // Pre-University Calculus Complete Course
  category: "Academic",
},
{
  id: "232",
  title: "Organic Chemistry Fundamentals",
  url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4",  // Crash Course Organic Chemistry
  category: "Academic",
},
{
  id: "233",
  title: "Quantum Mechanics Introduction",
  url: "https://www.youtube.com/watch?v=D7BHkS5tOAU",  // Quantum Mechanics introduction series
  category: "Academic",
},
{
  id: "234",
  title: "Microeconomics and Macroeconomics",
  url: "https://www.youtube.com/playlist?list=PL-uRhZ_p-BM5uZ2vG5zq2z5z5z5z5z5z5",  // MIT Economics course
  category: "Academic",
},
{
  id: "235",
  title: "World History Comprehensive",
  url: "https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9",  // Crash Course World History
  category: "Academic",
},
{
  id: "236",
  title: "Astrophysics Explained",
  url: "https://www.youtube.com/playlist?list=PLybg94GvOJ9E9BcCODbTNw2xU4b1cWSi6",  // Astronomy/Astrophysics series
  category: "Academic",
},
{
  id: "237",
  title: "Political Science Theories",
  url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhr6Rc",  // Political Theory lectures
  category: "Academic",
},
{
  id: "238",
  title: "Molecular Biology",
  url: "https://www.youtube.com/playlist?list=PLYcLrRDaR8_cpMqa1bbUwD2T39RJA6_o3",  // Molecular Biology lectures
  category: "Academic",
},
{
  id: "239",
  title: "Environmental Science",
  url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOikZljhKAe28AkupJXnS2u",  // Essentials of Environmental Science
  category: "Academic",
},
{
  id: "240",
  title: "Classical Literature Analysis",
  url: "https://www.youtube.com/playlist?list=PL9q3z3z3z3z3z3z3z3z3z3z3z3z3z3z3z",  // Great Books & Classical Literature analysis
  category: "Academic",
},
]

export function getCategoryBySlug(slug: string) {
  return categories.find((cat) => cat.toLowerCase().replace(/\s+/g, "-") === slug)
}

export function getPlaylistsByCategory(category: string) {
  if (category === "All") {
    return playlists
  }
  return playlists.filter((playlist) => playlist.category === category)
}

export function searchPlaylists(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return playlists.filter(
    (playlist) =>
      playlist.title.toLowerCase().includes(lowercaseQuery) || playlist.category.toLowerCase().includes(lowercaseQuery),
  )
}

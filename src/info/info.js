// Nav bar confi
const navs_config = [
  'About',
  'Demo',
  'Project',
  'Resume'
];
// Github project info
const username = 'fredchen000';
const repos = [
  'COMP4462_2020Final_Project',
  'fredchen000.github.io',
];

// Personal info config
import CV from '@info/FredChenCV.pdf';
const personal_info = {
  name: 'Liang-Yu, Chen',
  prefered_name: 'Fred',
  phone: '(765)746-9491',
  address: '2419 Neil Armstrong Dr. #1A, West Lafayette, IN. 47906.',
  email: 'lchenbm000work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/liang-yu-chen-fred',
  github: 'https://github.com/fredchen000',
  cv: CV,
  opensource: 'https://github.com/fredchen000/fredchen000.github.io',
};

const about_me = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lorem, hendrerit in ex et, facilisis consectetur urna. Duis semper tellus in scelerisque porttitor. Proin fringilla aliquam elit eget cursus. Ut auctor arcu dolor, sed vehicula massa pretium sed. Suspendisse vehicula libero eget finibus volutpat. Curabitur ut consectetur enim. Proin sagittis faucibus risus, non congue mi tincidunt dictum. Nullam sollicitudin tortor in magna blandit, nec posuere lectus condimentum. Mauris id sodales ante. Aliquam nec feugiat ligula. Quisque in semper est, non facilisis sem. Fusce scelerisque, eros eget laoreet accumsan, massa velit mattis tellus, sit amet semper magna felis eget quam.';

const education_info = [
  {
    name: 'Purdue University - West Lafayette',
    title: 'M.S. in Computer Science',
    date: 'Expected Jan. 2023'
  },
  {
    name: 'Hong Kong University of Science and Technology',
    title: 'B.Eng in Computer Science',
    date: 'Sept. 2016 - Sept. 2020',
    awards: 'First Class Honors | Dean’s List x 2 | One Year Admission Scholarship'
  }
];

const work_info = [
  {
    name: 'MediaTek Inc.',
    title: 'Software Developer Intern',
    date: 'June 2019 - Aug. 2019',
    place: 'Taiwan'
  },
  {
    name: 'D-Engraver Limited',
    title: 'Co-Founder, Software Developer',
    date: 'July 2018 – Apr. 2019',
    place: 'Hong Kong'
  },
  {
    name: 'SHAKEE Limited',
    title: 'Software Engineer',
    date: 'June 2017 – July 2018',
    place: 'Hong Kong'
  }
];

//demo website info
import Art from '@info/images/art-display.png';
import Dengrave from '@info/images/d-engraver.png';
import SingComp from '@info/images/sing-comp.png';
const demo_info = [
  {
    image: Dengrave,
    title: "D-Engraver Enterprise Website",
    link: "https://d-engraver-display.web.app/",
    description: "This is the previous offcial website of D-Engraver Limited, which is the company I co-founded when I was a junior.",
    date: "Dec. 2018",
  },
  {
    image: Art,
    title: "Art Display Website",
    link: "https://art-display-msssug.web.app/",
    description: "This is the website I built for a society event which display students' poems, photography, and paintings.",
    date: "Mar. 2017",
  },
  {
    image: SingComp,
    title: "Singing Competition Website",
    link: "https://singing-competition-msssug.web.app/",
    description: "I created this website for the singing competition of our society when I was a freshman.",
    date: "Apr. 2017",
  }
];

const info_icon_config = {
  resume: {
    key:'resume',
    display: 'Resume',
    icon: '\ue729',
    href: CV
  },
  mail: {
    key: 'mail',
    display: 'lchenbm000work@gmail.com',
    icon: '\ue7b7',
    href: 'mailto:lchenbm000work@gmail.com'
  },
  phone: {
    key: 'phone',
    display: '(765)746-9491',
    icon: '\ue7b8',
    href: ''
  },
  address: {
    key: 'address',
    display: '2419 Neil Armstrong Dr. #1A, West Lafayette, IN. 47906.',
    icon: '\ue624',
    href: ''

  },
  linkedin: {
    key: 'linkedin',
    display: 'Linkedin',
    icon: '\uebf6',
    href: 'https://www.linkedin.com/in/liang-yu-chen-fred'
  },
  github: {
    key: 'github',
    display: 'Github',
    icon: '\ue7ab',
    href: 'https://github.com/fredchen000'
  },
};


export { navs_config, username, repos, personal_info, about_me, education_info, work_info, demo_info, info_icon_config};

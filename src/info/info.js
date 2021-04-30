// Nav bar config

const navs_config = [
  'About',
  'Blogs',
  'Projects',
  'Resume'
];

// Personal info config
const personal_info = {
  name: 'Liang-Yu, Chen',
  prefered_name: 'Fred',
  phone: '(+886) 988129901',
  address: 'No. 2, Aly. 25, Ln. 12, Aikou 2nd Rd., Zhubei City, Hsinchu County 302, Taiwan',
  email: 'lchenbm000work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/liang-yu-chen-fred',
  github: 'https://github.com/fredchen000',
};

const about_me = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lorem, hendrerit in ex et, facilisis consectetur urna. Duis semper tellus in scelerisque porttitor. Proin fringilla aliquam elit eget cursus. Ut auctor arcu dolor, sed vehicula massa pretium sed. Suspendisse vehicula libero eget finibus volutpat. Curabitur ut consectetur enim. Proin sagittis faucibus risus, non congue mi tincidunt dictum. Nullam sollicitudin tortor in magna blandit, nec posuere lectus condimentum. Mauris id sodales ante. Aliquam nec feugiat ligula. Quisque in semper est, non facilisis sem. Fusce scelerisque, eros eget laoreet accumsan, massa velit mattis tellus, sit amet semper magna felis eget quam.";

const education_info = [
  {
    name: 'Purdue University - West Lafayette',
    title: 'M.S. in Computer Science',
    date: 'Sept. 2021 - Present'
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
    date: 'July 2018 - Apr. 2019',
    place: 'Hong Kong'
  },
  {
    name: "SHAKEE Limited",
    title: "Software Engineer",
    date: "June 2017 – July 2018",
    place: 'Hong Kong'
  }
];

const info_icon_config = {
  'resume': {
    key:'resume',
    display: 'Resume',
    icon: '\ue729',
    href: ''
  },
  'mail': {
    key: 'mail',
    display: 'lchenbm000work@gmail.com',
    icon: '\ue7b7',
    href: 'mailto:lchenbm000work@gmail.com'
  },
  'phone': {
    key: 'phone',
    display: '(+886) 988129901',
    icon: '\ue7b8',
    href: ''
  },
  'address': {
    key: 'address',
    display: 'No. 2, Aly. 25, Ln. 12, Aikou 2nd Rd., Zhubei City, Hsinchu County 302, Taiwan',
    icon: '\ue624',
    href: ''

  },
  'linkedin': {
    key: 'linkedin',
    display: 'Linkedin',
    icon: '\uebf6',
    href: 'https://www.linkedin.com/in/liang-yu-chen-fred'
  },
  'github': {
    key: 'github',
    display: 'Github',
    icon: '\ue7ab',
    href: 'https://github.com/fredchen000'
  },
};


export { navs_config, personal_info, about_me, education_info, work_info, info_icon_config};

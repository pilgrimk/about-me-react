import images from '../constants/images'

const pages = [
    { title: 'About', link: '#about' },
    { title: 'Projects', link: '#projects' },
    { title: 'Work History', link: '#workhistory' },
    { title: 'Contact Me', link: '#footer' }
];

const projects = [
    {
        title: 'Home Service Groups',
        sub_title: '',
        url: 'https://homeservicegroups.com',
        imgUrl: images.home_service_groups,
        img_alt: 'home service',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        title: 'Dog Training',
        sub_title: '',
        url: 'https://cool-stroopwafel-c066dc.netlify.app',
        imgUrl: images.dogs_playing,
        img_alt: 'dogs',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Gericht Restaurant',
        sub_title: 'Fine dining tutorial',
        url: 'https://scintillating-pithivier-428425.netlify.app',
        imgUrl: images.gericht,
        img_alt: 'restaurant',
        desc: 'Ut diam quam nulla porttitor massa id neque aliquam. Imperdiet dui accumsan sit amet nulla facilisi. Consectetur a erat nam at lectus urna duis. Neque vitae tempus quam pellentesque nec. interdum consectetur libero id faucibus.'
    },
    {
        title: 'eCommerce Site',
        sub_title: '',
        url: 'https://spectacular-lolly-6f317a.netlify.app',
        imgUrl: images.ecomm,
        img_alt: 'eComm',
        desc: 'Eget nunc scelerisque viverra mauris in aliquam sem. Ultrices eros in cursus turpis massa tincidunt dui. Arcu dictum varius duis at consectetur lorem donec massa sapien.'
    }
]

const work_history = [
    {
        title: 'Software Engineer II',
        sub_title: '',
        company: 'Yardi Systems, Inc',
        address1: '9200 E Pima Center Pkwy',
        city: 'Scottsdale',
        state: 'AZ',
        postal: '85258',
        hire_dates: '2015 - Present',
        experience: [
            'Software developer for a nationwide property management, software development company; responsible for application development and rolling out of code enhancements for clients utilizing our existing code base',
            'Personally responsible for the addition of aTwilio SMS messaging service to the application functionality',
            'Use of Microsoft Visual Studio and Oracle SQL Developer software development environments'
        ]
    },
    {
        title: 'Interface Developer',
        sub_title: '',
        company: 'ChartLogic, Inc',
        address1: '3995 South 700 East, Ste 200',
        city: 'Salt Lake City',
        state: 'UT',
        postal: '84107',
        hire_dates: '2008 - 2015',
        experience: [
            'Interface developer for a nationwide medical software development company; personally responsible for providing communication software between our proprietary EMR system and various medical PMS systems, laboratory systems, medical billing systems, scheduling systems and national medical agencies utilizing SQL, VB.NET software and HL7 messaging protocol',
            'Responsible for the design, architecture and implementation of our hosted EMR interface mechanism making use of Corepoint software, our proprietary CLXCentralizedService and SQL databases to process an average of 3.5 million monthly interface messages in support of over 200 hosted client systems'
        ]
    },
    {
        title: 'Senior Staff Engineer',
        sub_title: 'Software Lead',
        company: 'Novellus Systems',
        address1: '305 N. 54th Street',
        city: 'Chandler',
        state: 'AZ',
        postal: '85226',
        hire_dates: '1997 - 2003',
        experience: [
            'Software Engineer or Software Lead Engineer in several machine control development projects to include Automated Wafer Mapping and Enhanced Wet Mode on the Capella Cleaner machine, CEPD Requirement Enhancements, AutoID Tag Reader, SMIF Port Serial Communication and SECS/GEM Communication on the Auriga-C CMP Machine. Machine programming, VB.',
            'Demonstrated ability to quickly apply newly acquired programming skills in the areas of machine controls, serial/digital communication protocols and component programming towards the successful completion of several development projects.',
            'Demonstrated technical knowledge of CMP products while performing installations and software upgrades at key domestic and international customer sites to include Austin Texas, Dresden Germany, Taipei Taiwan and Seoul Korea.'
        ]
    },
    {
        title: 'Software Engineer',
        sub_title: '',
        company: 'Viasoft',
        address1: '3033 N. 44th Street',
        city: 'Phoenix',
        state: 'AZ',
        postal: '85018',
        hire_dates: '1996 - 1997',
        experience: [
            'Software Engineer in the development of Bridge2000, a mainframe-based Y2K solutions application. Pascal, Cobol, VAX/VMS',
            'Demonstrated ability to quickly apply new skills in mainframe-based application development, becoming a key member in the development team responsible for successfully bringing a complex and high-profile application to market on schedule.'
        ]
    },
    {
        title: 'Software Engineer',
        sub_title: 'Program Analyst',
        company: 'USA Group TRG',
        address1: '4343 E. Camelback Rd',
        city: 'Phoenix',
        state: 'AZ',
        postal: '85018',
        hire_dates: '1994 - 1996',
        experience: [
            'Software Engineer and Systems Analyst utilizing programming skills in the development of several client-server based applications to include a User-defined Business Rules Processor engine, Project Management application, Person/ BioDemo application, University Recruitment/ Admissions Program application.',
            'Uniface, PowerBuilder, SQL, Database design'
        ]
    },
    {
        title: 'Software Engineer',
        sub_title: 'Program Analyst',
        company: 'General Electric',
        address1: 'Industrial Power Supply',
        city: 'Schenectady',
        state: 'NY',
        postal: '12345',
        hire_dates: '1993 - 1994',
        experience: [
            'Implemented several new functionalities during the development of the Cadence Program which utilized data output from a mainframe-based Materials Resource Planning application to create what-if scenarios in a client/server-based environment and maintained system support for a user community of sixty. Uniface, SQL.'
        ]
    },
];

const social_media = [
    {
        title: 'Facebook',
        link: 'https://www.facebook.com/kevin.pilgrim.184/'
    },
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/kevin.pilgrim.184/'
    },
    {
        title: 'Twitter',
        link: 'https://twitter.com/pilgrimka1'
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/kevinpilgrim/'
    }
];

const data = {
    pages,
    projects,
    work_history,
    social_media,
};

export default data;
import { IPageItem } from '~/interfaces/PageItem';

import OutbuildingHeaderBG from '~/resources/projects/outbuilding-company/outbuilding-headerBG.jpg';
import OutbuildingImages from '~/resources/projects/outbuilding-company/outbuilding-displays.jpg';
import OutbuildingImagesMobile from '~/resources/projects/outbuilding-company/mobile-outbuilding-displays.jpg';
import OutbuildingLogos from '~/resources/projects/outbuilding-company/logos.jpg';
import OutbuildingLogosMobile from '~/resources/projects/outbuilding-company/logos-mobile.jpg';
import OutbuildingColours from '~/resources/projects/outbuilding-company/outbuilding-colours.jpg';
import OutbuildingColoursMobile from '~/resources/projects/outbuilding-company/outbuilding-colours-mobile.jpg';
import OutbuildingIcons from '~/resources/projects/outbuilding-company/outbuilding-icons.jpg';
import OutbuildingIconsMobile from '~/resources/projects/outbuilding-company/outbuilding-icons-mobile.jpg';

import BusyHiveHeaderBG from '~/resources/projects/busy-hive/busy-hiveBG.jpg';
import BusyHiveImages from '~/resources/projects/busy-hive/busy-hive-displays.jpg';
import BusyHiveImagesMobile from '~/resources/projects/busy-hive/mobile-busy-hive-displays.jpg';
import BusyHiveLogos from '~/resources/projects/busy-hive/logos.jpg';
import BusyHiveLogosMobile from '~/resources/projects/busy-hive/logos-mobile.jpg';
import BusyHiveColours from '~/resources/projects/busy-hive/busy-hive-colours.jpg';
import BusyHiveColoursMobile from '~/resources/projects/busy-hive/busy-hive-colours-mobile.jpg';
import BusyHiveIcons from '~/resources/projects/busy-hive/busyhive-icons.jpg';
import BusyHiveIconsMobile from '~/resources/projects/busy-hive/busyhive-icons-mobile.jpg';

import SmartheatHeaderBG from '~/resources/projects/smartheat/smart-heatheaderBG.jpg';
import SmartheatImages from '~/resources/projects/smartheat/smartheat-displays.jpg';
import SmartheatImagesMobile from '~/resources/projects/smartheat/mobile-smartheat-displays.jpg';
import SmartheatLogos from '~/resources/projects/smartheat/logos.jpg';
import SmartheatLogosMobile from '~/resources/projects/smartheat/logos-mobile.jpg';
import SmartheatColours from '~/resources/projects/smartheat/smartheat-colours.jpg';
import SmartheatColoursMobile from '~/resources/projects/smartheat/smartheat-colours-mobile.jpg';
import SmartheatIcons from '~/resources/projects/smartheat/smartheat-icons.jpg';
import SmartheatIconsMobile from '~/resources/projects/smartheat/smartheat-icons-mobile.jpg';

import InvoiceBookAPPHeaderBG from '~/resources/projects/invoice-book-app/invoice-book-app-headerBG.jpg';
import InvoiceBookAPPImages from '~/resources/projects/invoice-book-app/invoice-book-app-displays.jpg';
import InvoiceBookAPPImagesMobile from '~/resources/projects/invoice-book-app/mobile-invoice-book-app-displays.jpg';
import InvoiceBookAPPLogos from '~/resources/projects/invoice-book-app/logos.jpg';
import InvoiceBookAPPLogosMobile from '~/resources/projects/invoice-book-app/logos-mobile.jpg';
import InvoiceBookAPPColours from '~/resources/projects/invoice-book-app/invoice-book-app-colours.jpg';
import InvoiceBookAPPColoursMobile from '~/resources/projects/invoice-book-app/invoice-book-app-colours-mobile.jpg';
import InvoiceBookAPPIcons from '~/resources/projects/invoice-book-app/invoice-book-app-icons.jpg';
import InvoiceBookAPPIconsMobile from '~/resources/projects/invoice-book-app/invoice-book-app-icons-mobile.jpg';


const pages: IPageItem[] = [
  {
    bannerInfo: {
      headerBG: OutbuildingHeaderBG,
      role: 'Role: Senior Web Designer',
      title: 'Outbuilding Co.',
      date: 'Date: December 2016',
      context: 'Context: Website Design',
      projectDescription: 'Create unique outdoor spaces for work and leisure',
    },
    challenge: 'The Outbuilding Company designs and builds bespoke garden rooms for clients.\n' +
      'Our garden rooms can be built at a fraction of the cost of adding an extension to your home, and as such, ' +
      'they are the most affordable means of creating additional living space at your property.\n' +
      'In addition, most of our outbuildings do not require planning permission and can be used all year round.',


    solution: 'The Outbuilding Company design, I focused on information and images, using appropriately placed \n' +
      'call to actions across the homepage.  This enables users to get in touch, or take action at any ' +
      'point on the website. With a brown colour scheme vividly across the site by making use of big background images.\n' +
      'Everything on the website has been created for easy navigation for a customer to easily get information about.\n' +
      'their product and what they have to offer. ',

    fonts: {
      description: 'Maven PRO, Impact',
    },
    icons: {
      description: 'Nice big modern icons designed to represent The Outbuilding Company architech look and feel.\n',
    },
    conclusion: 'The Outbuilding Company was extremely pleased with the end result of the website. \n' +
      'They were extremely excited to launch their fully rebranded website and start marketing in order to bring more clients in!.\n',

    title: '',
    route: '/outbuilding',
    images: {
      images: OutbuildingImages,
      imagesMobile: OutbuildingImagesMobile,
      logos: OutbuildingLogos,
      logosMobile: OutbuildingLogosMobile,
      colors: OutbuildingColours,
      colorsMobile: OutbuildingColoursMobile,
      icons: OutbuildingIcons,
      iconsMobile: OutbuildingIconsMobile,
    },
  },

  //

  {
    bannerInfo: {
      headerBG: BusyHiveHeaderBG,
      title: 'Busy Hive',
      role: 'Role: Senior Web Designer',
      date: 'Date: Febraury 2017',
      context: 'Context: Website Design',
      projectDescription: 'Help when and as you need it.',
    },
    challenge: 'Busy Hive PA has over 16 years experience of supplying and sourcing administrative and personal support in \n' +
      'key sectors across Brighton including start-up business, professional organisations and events. \n' +
      'sectors across Brighton including start up business, professional organisations and events. \n' +
      'The client wanted a modern, user-friendly website that needed to be interactive with the users visiting their site.',

    solution: 'When discussing the client’s requirements, they already had a clear vision of their design. The \n' +
      'use of colour had to represent their brand; a white background, with black and yellow text, along ' +
      'with visual elements such as icons and imagery.\n' +
      'One of the biggest challenges was to display all the content in a pleasant way. Hereby, the \n' +
      'website layout was created has a one-pager to keep the design interactive. A large amount of text \n' +
      'causes the user to read through long sections of content; this may cause the website to appear \n' +
      'text-heavy and therefore the website won’t be as user-friendly. To break up the text-heavy \n' +
      'sections, modern icon designs and use of other visuals such as imagery helped to balance the design. \n' +
      'Furthermore, rotating text sections also helped to create a cleaner design and the use of  \n' +
      'animation effects added the final touch to round off this great-looking website.',
    fonts: {
      description: 'Muli',
    },
    icons: {
      description: 'I designed nice modern big descriptive icons. The yellow, gray, black & white colour scheme was perfect for \n' +
        'the clean and calming look the client was going for.',
    },
    conclusion: 'Client loved her website! \n' +
      'She was excited to launch her fully rebranded website and start marketing in order to bring her clients \n' +
      'to view the brilliantly fresh rebranded website that is now busyhivepa.com',

    title: '',
    route: '/busy-hive',
    images: {
      images: BusyHiveImages,
      imagesMobile: BusyHiveImagesMobile,
      logos: BusyHiveLogos,
      logosMobile: BusyHiveLogosMobile,
      colors: BusyHiveColours,
      colorsMobile: BusyHiveColoursMobile,
      icons: BusyHiveIcons,
      iconsMobile: BusyHiveIconsMobile,
    },
  },

  //

  {
    bannerInfo: {
      headerBG: SmartheatHeaderBG,
      title: 'Smartheat',
      role: 'Role: Senior Web Designer',
      date: 'Date: May 2016',
      context: 'Context: Website Design',
      projectDescription: 'Heating solutions that wont cost the earth',
    },
    challenge: 'Smart Heat is a fully qualified, fully insured and gas-safe registered company based in London.\n' +
      'They are built on a solid foundation of more than 10 years experience, so you can rest assure the job will be done by a professional. \n' +
      'They embrace new technologies when it comes to plumbing, which means they try to use only energy efficient smart solutions to do the job.\n' +
      'This means we save you money, while also protecting the environment with our energy and water efficient products.',
    solution: 'The colour scheme for this website, orange and white with shades of gray. The images which were used were \n' +
      'very minimalist and went really well with the overall colour scheme, which brought all elements together \n' +
      'in the end (look and feel). The website font and navigation has been kept simple and clear to make it \n' +
      'more user-friendly, and the responsiveness has been applied so users can browse on their tablet / \n' +
      'desktop / laptop / mobile devices.',
    fonts: {
      description: 'Maven PRO',
    },
    icons: {
      description: 'Nice big descriptive icons, to make the website less text heavy.',
    },
    conclusion: 'Client was excited to launch his new website and start marketing in order to bring new clients.',

    title: '',

    route: '/smartheat',
    images: {
      images: SmartheatImages,
      imagesMobile: SmartheatImagesMobile,
      logos: SmartheatLogos,
      logosMobile: SmartheatLogosMobile,
      colors: SmartheatColours,
      colorsMobile: SmartheatColoursMobile,
      icons: SmartheatIcons,
      iconsMobile: SmartheatIconsMobile,
    },
  },

  //

  {
    bannerInfo: {
      headerBG: InvoiceBookAPPHeaderBG,
      role: 'Role: Senior Web Designer',
      title: 'Invoice APP',
      date: 'Date: March 2017',
      context: 'Context: Website Design',
      projectDescription: 'Your Invoice book in your pocket.',
    },
    challenge: 'Presenting your clients and customers with a professional invoice is essential, however not all of \n' +
      'with a twist. Everything on the website has been created for easy navigation \n' +
      ' an invoice especially if you already have a professional accountant handling your books.',

    solution: 'Client had example site that he liked and wanted me to take certain elements they liked.\n' +
      'with a twist on behalf of the designer. Everything on the website has been created for easy navigation \n' +
      'for a customer to easily get information about their product and what they have to offer. The green and .\n' +
      'white colour scheme was perfect for the clean and calming look the client was going for.',
    fonts: {
      description: 'Muli',
    },
    icons: {
      description: 'Icons display what the APP looks like on the phone.',
    },
    conclusion: 'The client loved his website! .\n' +
      'He was excited to launch his new website and start marketing in order to bring her clients to view the new website',
    title: '',

    route: '/invoice-app',
    images: {
      images: InvoiceBookAPPImages,
      imagesMobile: InvoiceBookAPPImagesMobile,
      logos: InvoiceBookAPPLogos,
      logosMobile: InvoiceBookAPPLogosMobile,
      colors: InvoiceBookAPPColours,
      colorsMobile: InvoiceBookAPPColoursMobile,
      icons: InvoiceBookAPPIcons,
      iconsMobile: InvoiceBookAPPIconsMobile,
    },
  },
];

export default pages;



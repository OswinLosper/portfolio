import { IPageItem } from '~/interfaces/PageItem';

import BusyHiveImages from '~/resources/projects/busy-hive/busy-hive-displays.jpg';
import BusyHiveLogos from '~/resources/projects/busy-hive/logos.jpg';
import BusyHiveColours from '~/resources/projects/busy-hive/busy-hive-colours.jpg';
import BusyHiveIcons from '~/resources/projects/busy-hive/busyhive-icons.jpg';

import OutbuildingImages from '~/resources/projects/outbuilding-company/outbuilding-displays.jpg';
import OutbuildingLogos from '~/resources/projects/outbuilding-company/logos.jpg';
import OutbuildingColours from '~/resources/projects/outbuilding-company/outbuilding-colours.jpg';
import OutbuildingIcons from '~/resources/projects/outbuilding-company/outbuilding-icons.jpg';

const pages: IPageItem[] = [
  {
    bannerInfo: {
      role: 'Role: Web Senior Designer',
      title: 'Building Company',
      date: 'Date: 20 July 2018',
      context: 'Context: Website Design',
      projectDescription: 'Create unique outdoor spaces for work and leisure',
    },
    challenge: 'The Outbuilding Company designs and builds bespoke garden rooms for clients.\n' +
      'Our garden rooms can be built at a fraction of the cost of adding an extension to your home, and as such, ' +
      'they are the most affordable means of creating additional living space at your property.\n' +
      'In addition, most of our outbuildings do not require planning permission and can be used all year round',
    solution: 'The Outbuilding Company designs and builds bespoke garden rooms for clients.\n' +
      'Our garden rooms can be built at a fraction of the cost of adding an extension to your home, and as such, ' +
      'they are the most affordable means of creating additional living space at your property.\n' +
      'In addition, most of our outbuildings do not require planning permission and can be used all year round',
    fonts: {
      description: 'Maven PRO, Impact',
    },
    icons: {
      description: 'The Outbuilding Company designs and builds bespoke garden rooms for clients.\n' +
        'Our garden rooms can be built at a fraction of the cost of adding an extension',
    },
    conclusion: 'The Outbuilding Company designs and builds bespoke garden rooms for clients.\n' +
      'Our garden rooms can be built at a fraction of the cost of adding an extension',
    title: '',
    route: '/outbuilding',
    images: {
      images: OutbuildingImages,
      logos: OutbuildingLogos,
      colors: OutbuildingColours,
      icons: OutbuildingIcons,
    },
  },
  {
    bannerInfo: {
      role: 'Role: Web Senior Designer',
      title: 'Busy Hive',
      date: 'Date: 20 July 2018',
      context: 'Context: Website Design',
      projectDescription: 'Website built for Busy Hive case study',
    },
    challenge: `Busy Hive have over 16 years’
    experience of supplying and sourcing administrative and personal support in key
    sectors across Brighton including start up business', professional organisations and events.
    We understand the challenges that you and your company face with admin support,
    company management and planning whether for a particular project at short notice or strengthening your business.`,
    solution: 'The Outbuilding Company designs and builds bespoke garden rooms for clients.\n' +
      'Our garden rooms can be built at a fraction of the cost of adding an extension to your home, and as such, ' +
      'they are the most affordable means of creating additional living space at your property.\n' +
      'In addition, most of our outbuildings do not require planning permission and can be used all year round',
    fonts: {
      description: 'Maven PRO, Impact',
    },
    icons: {
      description: 'The Outbuilding Company designs and builds bespoke garden rooms for clients.\n' +
        'Our garden rooms can be built at a fraction of the cost of adding an extension',
    },
    conclusion: 'The Outbuilding Company designs and builds bespoke garden rooms for clients.\n' +
      'Our garden rooms can be built at a fraction of the cost of adding an extension',
    title: '',
    route: '/busy-hive',
    images: {
      images: BusyHiveImages,
      logos: BusyHiveLogos,
      colors: BusyHiveColours,
      icons: BusyHiveIcons,
    },
  },
];

export default pages;

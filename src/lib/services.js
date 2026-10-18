// ============================================================
// SERVICE DEFINITIONS — all service-page content lives here.
//
// EDIT BEFORE GOING LIVE: only keep the items you genuinely offer. Every list below is
// plain text so you can add, remove or reword lines without touching any component.
// ============================================================

import { IMAGE_SIZES } from './images.js';

export const SERVICES = [
  // ------------------------------------------------------------------ PLUMBING
  {
    slug: 'plumbing-service',
    path: '/plumbing-service',
    theme: 'plumbing',
    name: 'Plumbing Service',
    navLabel: 'Plumbing Service',
    icon: 'Droplets',
    enquiryName: 'plumbing service',
    short:
      'Plumbing assistance for common household plumbing issues, water leaks, drainage concerns, and other plumbing requirements.',
    images: {
      card: '/images/plumbing-service.webp',
      hero: '/images/plumbing-hero.webp',
      gallery: ['/images/plumbing-repair-1.webp', '/images/plumbing-repair-2.webp'],
    },
    alts: {
      card: 'Technician checking a kitchen sink pipe for leaks in a Singapore home',
      hero: 'RJ Handyman technician repairing a tap and basin plumbing in Singapore',
      gallery: [
        'Close-up of a pipe connection being tightened under a sink',
        'Replacing a bathroom tap fitting during a plumbing repair',
      ],
    },
    seo: {
      title: 'Plumbing Services in Singapore | RJ Handyman',
      description:
        'Dripping taps, leaks, slow drains or fixture replacement? Call or WhatsApp RJ Handyman to discuss your plumbing issue anywhere in Singapore.',
    },
    h1: 'Plumbing Services in Singapore',
    heroText:
      'From dripping taps to slow drains, RJ Handyman helps Singapore homes and small businesses look into everyday plumbing problems and find a practical fix. Send us a message with photos and we will take it from there.',
    introHeading: 'Practical plumbing help for Singapore homes',
    intro: [
      'Plumbing problems rarely wait for a convenient time. A dripping tap, a slow basin or a damp patch under the kitchen sink can start small and turn into a bigger repair if it is left alone. RJ Handyman helps households and small businesses across Singapore look into these everyday issues and work out a sensible way to deal with them.',
      'The quickest way to start is to tell us what you are seeing: where the water is, how long it has been happening and whether it is getting worse. Photos or a short video sent over WhatsApp often make it much easier to understand the problem before anyone visits.',
    ],
    problemsHeading: 'Common plumbing problems we can help you look into',
    problems: [
      { title: 'Dripping or leaking taps', text: 'Constant dripping, water running at the base of a tap, or a handle that no longer closes fully.' },
      { title: 'Damp patches and water stains', text: 'Wet cabinets under sinks, stained ceilings or walls, or a musty smell that points to a hidden leak.' },
      { title: 'Slow or blocked drainage', text: 'Basins, kitchen sinks and floor traps that drain slowly, gurgle or hold standing water.' },
      { title: 'Weak or uneven water flow', text: 'Low flow from a tap or shower head, or flow that changes from one fitting to another.' },
      { title: 'Toilet cistern issues', text: 'A cistern that keeps running, refills slowly or has a worn flush mechanism.' },
      { title: 'Worn hoses and fittings', text: 'Loose bidet sprays, cracked flexible hoses and ageing angle valves that need replacing.' },
    ],
    offeredHeading: 'Plumbing services offered',
    offered: [
      {
        title: 'Leak troubleshooting',
        items: [
          'Checking taps, pipe connections and fittings for visible leaks',
          'Looking into damp areas under sinks and around basins',
          'Advice on whether a leak needs a small repair or further work',
        ],
      },
      {
        title: 'Taps, fixtures and fittings',
        items: [
          'Tap and faucet repair or replacement',
          'Installing or replacing basin mixers, shower sets and bidet sprays',
          'Replacing flexible hoses, angle valves and toilet flush parts',
        ],
      },
      {
        title: 'Drainage and water flow',
        items: [
          'Clearing minor blockages in sinks, basins and floor traps',
          'Investigating slow drainage and recurring blockages',
          'Looking into low water flow at taps and showers',
        ],
      },
      {
        title: 'General plumbing maintenance',
        items: [
          'Routine checks of exposed pipes, joints and fixtures',
          'Replacing worn seals and washers before they fail',
        ],
      },
    ],
    processHeading: 'How our plumbing service works',
    process: [
      { title: 'Tell us the problem', text: 'Call or WhatsApp and describe what is happening and where.' },
      { title: 'Share photos if you can', text: 'A photo of the leak, fitting or drain helps us understand the job faster.' },
      { title: 'Confirm details and pricing', text: 'We confirm availability, scope and pricing directly with you before arranging the work.' },
      { title: 'Get the work done', text: 'The repair or installation is carried out at your home or premises in Singapore.' },
    ],
    whyHeading: 'Why contact RJ Handyman for plumbing?',
    why: [
      { title: 'Easy to reach', text: 'Describe the leak on WhatsApp or ring us — whichever is quicker for you.' },
      { title: 'One contact for several home services', text: 'Plumbing, electrical, ducting and washing machine repair through the same team.' },
      { title: 'Singapore-wide coverage', text: 'We serve customers across Singapore, from the east to the west and everywhere in between.' },
      { title: 'Clear communication', text: 'Scope and pricing are confirmed directly with you before the job goes ahead.' },
    ],
    faqsHeading: 'Plumbing service FAQs',
    faqs: [
      {
        q: 'What plumbing problems can RJ Handyman help with?',
        a: 'We can help look into leaking taps, damp patches, slow drains, weak water flow, worn fittings and fixture replacement. If you are unsure whether your issue is something we can handle, send us a message and we will let you know.',
      },
      {
        q: 'Can I send photos of the leak before booking?',
        a: 'Yes. Photos or a short video sent through WhatsApp are very helpful. They let us understand the problem and discuss the next steps before arranging a visit.',
      },
      {
        q: 'Can you clear blocked sinks and floor traps?',
        a: 'Minor blockages in sinks, basins and floor traps are something we can look into. Recurring or severe blockages may need a closer inspection, which we can discuss when you get in touch.',
      },
      {
        q: 'How much does a plumbing job cost?',
        a: 'The cost depends on the problem, the parts involved and the work required, so we do not publish fixed prices. Contact us with the details and we will confirm pricing directly with you.',
      },
      {
        q: 'Do you serve my area in Singapore?',
        a: 'RJ Handyman serves customers throughout Singapore. Let us know your location when you enquire so we can confirm availability.',
      },
    ],
    areaText:
      'Whether you live in a HDB flat in Tampines, a condo in Jurong or a shophouse in the city, RJ Handyman can discuss plumbing work across Singapore. Tell us your area when you get in touch.',
    ctaHeading: 'Got a leak or a blocked drain?',
    ctaText: 'Message us on WhatsApp with a photo or give us a call to discuss your plumbing issue.',
  },

  // ---------------------------------------------------------------- ELECTRICAL
  {
    slug: 'electrical-service',
    path: '/electrical-service',
    theme: 'electrical',
    name: 'Electrical Service',
    navLabel: 'Electrical Service',
    icon: 'Zap',
    enquiryName: 'electrical service',
    short:
      'Electrical repair and installation assistance for suitable residential and commercial electrical requirements.',
    images: {
      card: '/images/electrical-service.webp',
      hero: '/images/electrical-hero.webp',
      gallery: ['/images/electrical-repair-1.webp', '/images/electrical-repair-2.webp'],
    },
    alts: {
      card: 'Technician replacing a wall switch in a Singapore apartment',
      hero: 'RJ Handyman technician working on a ceiling light installation in Singapore',
      gallery: [
        'Replacing a wall socket faceplate during an electrical repair',
        'Installing a new ceiling light fitting in a living room',
      ],
    },
    seo: {
      title: 'Electrical Services in Singapore | RJ Handyman',
      description:
        'Faulty switches, flickering lights or new fittings to install? Contact RJ Handyman to discuss your electrical requirements anywhere in Singapore.',
    },
    h1: 'Electrical Services in Singapore',
    heroText:
      'Light fittings, switches, sockets and everyday electrical faults — RJ Handyman helps Singapore households and businesses with suitable electrical requirements. Tell us what you need and we will discuss it with you.',
    introHeading: 'Electrical help for homes and small businesses',
    intro: [
      'Electrical issues are easy to put off until they become a nuisance — or a safety concern. A switch that crackles, a light that flickers or a socket that no longer holds a plug firmly are all worth getting checked. RJ Handyman helps with suitable residential and commercial electrical requirements across Singapore.',
      'Because electricity is regulated in Singapore, some work must be done by an appropriately licensed professional. When you get in touch, describe what you need and we will discuss what can be handled and what the next step should be.',
    ],
    notice: {
      title: 'Licensed work in Singapore',
      text: 'Regulated electrical installation work in Singapore must be carried out by an appropriately licensed electrical worker where the law requires it. Please confirm the scope of your job with us when you enquire. If you notice a burning smell, sparks or a hot socket, switch off the supply if it is safe to do so and contact a licensed professional immediately.',
    },
    problemsHeading: 'Common electrical issues we can help you look into',
    problems: [
      { title: 'Circuit breaker keeps tripping', text: 'Power cutting out repeatedly when certain appliances are switched on.' },
      { title: 'Flickering or dead lights', text: 'Lights that flicker, buzz or stop working even after the bulb has been changed.' },
      { title: 'Loose or damaged switches', text: 'Switches that feel loose, stick, crackle or no longer control the light properly.' },
      { title: 'Sockets that no longer work', text: 'Dead sockets, loose plug fit or sockets showing signs of wear.' },
      { title: 'New fittings to install', text: 'Ceiling lights, wall lights or downlights that you have bought and need fitted.' },
      { title: 'Ageing fittings', text: 'Older switches, sockets and light fittings that are due for replacement.' },
    ],
    offeredHeading: 'Electrical services offered',
    offered: [
      {
        title: 'Fault troubleshooting',
        items: [
          'Looking into lights, switches and sockets that have stopped working',
          'Investigating repeated tripping of the power supply',
          'Advising on the next step when a fault is beyond a simple repair',
        ],
      },
      {
        title: 'Lights and fixtures',
        items: [
          'Installing ceiling lights, wall lights and downlights',
          'Replacing old or damaged light fittings',
          'Fitting selected lighting accessories supplied by you',
        ],
      },
      {
        title: 'Switches and sockets',
        items: [
          'Replacing loose or worn switches and sockets',
          'Changing faceplates and fitting additional points where suitable',
        ],
      },
      {
        title: 'Electrical maintenance',
        items: [
          'General checks of visible fittings and accessories',
          'Replacing worn components before they cause bigger problems',
        ],
      },
    ],
    processHeading: 'How our electrical service works',
    process: [
      { title: 'Describe the issue', text: 'Call or WhatsApp and tell us what is not working or what you want installed.' },
      { title: 'Discuss the scope', text: 'We talk through the job, share photos if helpful and confirm what the work involves.' },
      { title: 'Confirm details and pricing', text: 'Availability and pricing are confirmed directly with you before the work is arranged.' },
      { title: 'Complete the work', text: 'The work is carried out in line with the scope agreed, with licensed professionals involved where required.' },
    ],
    whyHeading: 'Why contact RJ Handyman for electrical work?',
    why: [
      { title: 'Straightforward conversation', text: 'Explain the problem in plain language — no need to know the technical terms.' },
      { title: 'Safety-minded approach', text: 'We tell you when a job needs a licensed professional rather than glossing over it.' },
      { title: 'Several services, one contact', text: 'Combine electrical work with plumbing, ducting or appliance repair enquiries.' },
      { title: 'Across Singapore', text: 'Residential and commercial customers throughout Singapore can get in touch.' },
    ],
    faqsHeading: 'Electrical service FAQs',
    faqs: [
      {
        q: 'Do I need a licensed professional for electrical work in Singapore?',
        a: 'Many electrical installation works in Singapore are regulated and must be carried out by an appropriately licensed electrical worker. When you contact us, we will discuss your requirement and what it involves so you know the right way to proceed.',
      },
      {
        q: 'Can you install lights I bought myself?',
        a: 'In many cases, yes. Send us a photo or the product details over WhatsApp and we will tell you what is involved and whether it is suitable.',
      },
      {
        q: 'My power keeps tripping. What should I do?',
        a: 'Switch off or unplug the appliance you suspect and avoid repeatedly resetting the breaker. Then contact us with details of when it happens so we can discuss the next step.',
      },
      {
        q: 'How much does electrical work cost?',
        a: 'It depends on the fault, parts and amount of work, so we do not publish fixed prices. Share the details and we will confirm pricing directly with you.',
      },
      {
        q: 'Do you handle both homes and commercial premises?',
        a: 'We help with suitable residential and commercial electrical requirements. Tell us about your premises and the job when you enquire.',
      },
    ],
    areaText:
      'From Woodlands to Bedok and Jurong to Ang Mo Kio, RJ Handyman can discuss electrical requirements for customers across Singapore. Let us know where you are located when you get in touch.',
    ctaHeading: 'Need an electrical issue checked?',
    ctaText: 'Call us or send a WhatsApp message with a photo of the light, switch or socket and we will discuss the next step.',
  },

  // ------------------------------------------------------------------- DUCTING
  {
    slug: 'ducting-service',
    path: '/ducting-service',
    theme: 'ducting',
    name: 'Ducting Service',
    navLabel: 'Ducting Service',
    icon: 'Wind',
    enquiryName: 'ducting service',
    short:
      'Ducting installation, maintenance, and related solutions for suitable ventilation and exhaust system requirements.',
    images: {
      card: '/images/ducting-service.webp',
      hero: '/images/ducting-hero.webp',
      gallery: ['/images/ducting-work-1.webp', '/images/ducting-work-2.webp'],
    },
    alts: {
      card: 'Ventilation ducting being installed along a ceiling',
      hero: 'RJ Handyman technician installing exhaust ducting in a Singapore premises',
      gallery: [
        'Exhaust duct run connected to a kitchen extraction point',
        'Duct joints being sealed and secured during maintenance',
      ],
    },
    seo: {
      title: 'Ducting Services in Singapore | RJ Handyman',
      description:
        'Ducting installation, maintenance and exhaust solutions for homes and businesses in Singapore. Contact RJ Handyman to discuss your ventilation requirements.',
    },
    h1: 'Ducting Services in Singapore',
    heroText:
      'Good airflow keeps kitchens, bathrooms and workspaces comfortable. RJ Handyman helps with ducting installation, maintenance and exhaust solutions for suitable residential and commercial projects across Singapore.',
    introHeading: 'Ducting and ventilation solutions that fit your space',
    intro: [
      'In Singapore’s warm and humid climate, poor ventilation shows up quickly — cooking smells that linger, bathrooms that stay damp, stuffy rooms and equipment that runs hotter than it should. Well-planned ducting moves air and fumes where they need to go. RJ Handyman helps with ducting work for suitable homes and commercial premises.',
      'Every space is different, so the right solution depends on the layout, the equipment being connected and the building. Tell us about your project and share photos or measurements if you have them, and we will discuss the options with you.',
    ],
    problemsHeading: 'Common ducting and ventilation requirements',
    problems: [
      { title: 'Cooking smells and fumes', text: 'Kitchen odours or oil-laden air that is not being removed effectively.' },
      { title: 'Damp or stuffy bathrooms', text: 'Moisture that lingers because ventilation is weak or poorly routed.' },
      { title: 'New equipment to connect', text: 'Extractors, fans or machines that need a proper exhaust or supply duct run.' },
      { title: 'Damaged or loose ducting', text: 'Sections that have come loose, been crushed, or have leaking joints.' },
      { title: 'Noisy or inefficient airflow', text: 'Rattling, whistling or weak airflow that suggests a problem with the duct run.' },
      { title: 'Renovation and fit-out projects', text: 'Ducting needed as part of a home renovation or small commercial fit-out.' },
    ],
    offeredHeading: 'Ducting services offered',
    offered: [
      {
        title: 'Ducting installation',
        items: [
          'Supplying and installing duct runs for suitable ventilation needs',
          'Connecting ducting to fans, extractors and other equipment',
          'Routing and securing ducts neatly within the available space',
        ],
      },
      {
        title: 'Ducting maintenance',
        items: [
          'Inspecting accessible ducting for damage, loose joints and blockages',
          'Re-securing, sealing or replacing damaged duct sections',
        ],
      },
      {
        title: 'Exhaust ducting',
        items: [
          'Exhaust ducting for kitchens, bathrooms and utility areas',
          'Solutions for removing fumes, steam and odours from enclosed spaces',
        ],
      },
      {
        title: 'Ventilation-related solutions',
        items: [
          'Discussing practical options to improve airflow in a space',
          'Residential and commercial projects, depending on suitability',
        ],
      },
    ],
    processHeading: 'How our ducting service works',
    process: [
      { title: 'Share your requirement', text: 'Call or WhatsApp with a description of the space and what you want to achieve.' },
      { title: 'Send photos and measurements', text: 'Pictures of the area and rough measurements help us discuss realistic options.' },
      { title: 'Confirm scope and pricing', text: 'Where needed an inspection is arranged, then scope, timing and pricing are confirmed with you.' },
      { title: 'Carry out the work', text: 'Ducting is installed or repaired and checked as agreed.' },
    ],
    whyHeading: 'Why contact RJ Handyman for ducting?',
    why: [
      { title: 'Practical approach', text: 'We focus on solutions that suit your space, equipment and budget.' },
      { title: 'Residential and commercial enquiries', text: 'Homeowners and business owners across Singapore are welcome to get in touch.' },
      { title: 'Easy to discuss', text: 'Talk through your project over WhatsApp or by phone and share photos as you go.' },
      { title: 'Related repairs under one roof', text: 'Need electrical or plumbing work done alongside ducting? One contact covers it.' },
    ],
    faqsHeading: 'Ducting service FAQs',
    faqs: [
      {
        q: 'What kinds of ducting work can RJ Handyman help with?',
        a: 'We can discuss ducting installation, maintenance and exhaust or ventilation requirements for suitable residential and commercial projects. Contact us with your requirement and we will confirm whether it is something we can take on.',
      },
      {
        q: 'Do I need approval before installing ducting?',
        a: 'It depends on your premises and the work. Some projects in HDB flats, condominiums or commercial buildings may need approval from the management, landlord or relevant authorities. We can discuss this with you when you enquire.',
      },
      {
        q: 'Can you work with the equipment I already have?',
        a: 'Often yes. Let us know the type and model of the extractor, fan or machine and send photos of the area so we can discuss how the ducting would connect.',
      },
      {
        q: 'Is an inspection needed before a quotation?',
        a: 'For simple jobs we may be able to discuss options from photos and measurements. More involved projects usually benefit from an inspection so the scope and pricing are accurate.',
      },
      {
        q: 'Do you handle both homes and businesses?',
        a: 'We help with suitable residential and commercial ducting projects across Singapore. Tell us about your premises when you get in touch.',
      },
    ],
    areaText:
      'RJ Handyman can discuss ducting projects for homes and businesses across Singapore, including Tampines, Yishun, Jurong and neighbourhoods in between. Mention your location when you enquire.',
    ctaHeading: 'Planning a ducting or exhaust project?',
    ctaText: 'Tell us about your space on WhatsApp or give us a call and we will discuss the options with you.',
  },

  // ----------------------------------------------------------- WASHING MACHINE
  {
    slug: 'washing-machine-repair',
    path: '/washing-machine-repair',
    theme: 'washing',
    name: 'Washing Machine Repair',
    navLabel: 'Washing Machine Repair',
    icon: 'WashingMachine',
    enquiryName: 'washing machine repair service',
    short:
      'Troubleshooting and repair assistance for washing machine problems to help customers explore repair options before considering replacement.',
    images: {
      card: '/images/washing-machine-repair.webp',
      hero: '/images/washing-machine-hero.webp',
      gallery: ['/images/washing-machine-repair-1.webp', '/images/washing-machine-repair-2.webp'],
    },
    alts: {
      card: 'Technician inspecting a front-load washing machine',
      hero: 'RJ Handyman technician repairing a washing machine in a Singapore home',
      gallery: [
        'Checking the drain hose at the back of a washing machine',
        'Inspecting the door seal and drum of a front-load washing machine',
      ],
    },
    seo: {
      title: 'Washing Machine Repair Singapore | RJ Handyman',
      description:
        'Washing machine not draining, leaking or spinning? Contact RJ Handyman to troubleshoot and explore repair options for your machine in Singapore.',
    },
    h1: 'Washing Machine Repair in Singapore',
    heroText:
      'A washing machine that stops mid-cycle, leaks or makes alarming noises does not always need replacing. RJ Handyman helps Singapore households troubleshoot problems and explore repair options first.',
    introHeading: 'Find out what is wrong before you replace the machine',
    intro: [
      'When a washing machine breaks down, it is tempting to assume the worst. In many cases the cause is a specific part or a blockage, and repairing it can be more sensible than buying a new machine. RJ Handyman helps customers across Singapore troubleshoot washing machine faults and understand their repair options.',
      'The right solution depends on your machine’s model, its age, the fault and what an inspection shows. To get started, send us the brand and model, describe the symptoms and mention any error code on the display.',
    ],
    problemsHeading: 'Common washing machine problems',
    problems: [
      { title: 'Machine will not start', text: 'No lights, no response when you press start, or the cycle begins and then stops.' },
      { title: 'Water leakage', text: 'Water pooling around the machine, at the door seal, at the detergent drawer or the hoses.' },
      { title: 'Not draining', text: 'Water left in the drum after a cycle, or very slow draining.' },
      { title: 'Loud noise or heavy vibration', text: 'Banging, grinding or squealing, or a machine that walks across the floor while spinning.' },
      { title: 'Not spinning properly', text: 'Clothes come out soaking wet or the drum does not spin up.' },
      { title: 'Error codes', text: 'A code on the display that you are unsure how to interpret or clear.' },
    ],
    offeredHeading: 'Washing machine repair services',
    offered: [
      {
        title: 'Troubleshooting',
        items: [
          'Working through your symptoms and any error codes to narrow down the cause',
          'Checking water inlet, drainage and door-seal areas',
          'Discussing whether the fault looks like a simple fix or a part replacement',
        ],
      },
      {
        title: 'Repairs',
        items: [
          'Repairing faults with water supply, drainage, drum movement and spinning',
          'Replacing worn parts where suitable parts are available',
          'Addressing leaks from hoses, seals and connections',
        ],
      },
      {
        title: 'Repair or replace guidance',
        items: [
          'Discussing whether repair makes sense for your machine and fault',
          'Helping you weigh up your options before you commit to a replacement',
        ],
      },
    ],
    processHeading: 'How our washing machine repair works',
    process: [
      { title: 'Tell us the symptoms', text: 'Message or call with the brand, model, what is happening and any error code.' },
      { title: 'Send a photo or video', text: 'A quick clip of the fault, or a photo of the model label, helps a lot.' },
      { title: 'Inspection and options', text: 'We arrange an inspection where needed and explain what the repair involves.' },
      { title: 'Repair if you wish', text: 'Pricing is confirmed with you directly, and the repair goes ahead once you are happy.' },
    ],
    whyHeading: 'Why contact RJ Handyman for washing machine repair?',
    why: [
      { title: 'Explore repair first', text: 'We help you understand whether repair is a realistic option before replacing.' },
      { title: 'Easy symptom-based enquiry', text: 'You do not need technical terms — describe what you see and hear.' },
      { title: 'Across Singapore', text: 'Customers in all parts of Singapore can get in touch to discuss their machine.' },
      { title: 'Direct communication', text: 'Availability, scope and pricing are confirmed directly with you.' },
    ],
    faqsHeading: 'Washing machine repair FAQs',
    faqs: [
      {
        q: 'Is it worth repairing my washing machine?',
        a: 'It depends on the model, age, the fault and the results of an inspection. That is why we encourage you to get in touch first so we can discuss what is wrong and help you weigh up repair against replacement.',
      },
      {
        q: 'What information should I give when I enquire?',
        a: 'The brand and model, a description of the problem, any error code on the display and a photo or short video are all helpful. The model label is usually on the back or inside the door.',
      },
      {
        q: 'What should I do if my washing machine is leaking?',
        a: 'Stop the cycle, switch off the machine at the socket and turn off the water supply if you can do so safely. Mop up any water around the machine and contact us with details.',
      },
      {
        q: 'Do you repair front-load and top-load machines?',
        a: 'Send us your machine’s type and model and we will confirm whether it is something we can look into.',
      },
      {
        q: 'How much does a washing machine repair cost?',
        a: 'The cost depends on the fault, the parts needed and the time required, so we cannot give a fixed price in advance. We will confirm pricing with you directly after discussing or inspecting the problem.',
      },
    ],
    areaText:
      'RJ Handyman can discuss washing machine repairs for customers across Singapore, from Bedok and Pasir Ris to Clementi and Woodlands. Let us know your area when you get in touch.',
    ctaHeading: 'Washing machine giving you trouble?',
    ctaText: 'Send us the model, a short video of the problem or just call, and we will help you explore your repair options.',
  },
];

export const SERVICE_IMAGE_SIZES = IMAGE_SIZES;

export const getServiceByPath = (path) => SERVICES.find((s) => s.path === path);
export const getRelatedServices = (slug) => SERVICES.filter((s) => s.slug !== slug);

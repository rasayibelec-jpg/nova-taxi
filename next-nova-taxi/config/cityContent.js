// Unique SEO content for each city page (DE + EN nested per slug)
// Structure: cityContent[slug] = { de: {...}, en: {...} }
import { deSchwyz } from "./content/de_schwyz";
import { deLuzern } from "./content/de_luzern";
import { deZug } from "./content/de_zug";
import { enExtras } from "./content/en_extras";

// Existing English content blocks (preserved from initial generation)
const enOriginal = {
  // LUCERNE (English)
  "luzern": {
    lang: "en",
    seoTitle: "Taxi Lucerne | 24/7 Airport & City Transfers",
    metaDescription: "Professional taxi service in Lucerne. Airport transfers, Chapel Bridge tours, KKL rides. Book Nova Taxi now – reliable & comfortable.",
    heroTitle: "Taxi Service in Lucerne",
    heroSubtitle: "Your Gateway to Switzerland's Most Beautiful City",
    
    sections: {
      intro: {
        title: "Reliable Taxi in Lucerne",
        content: `Lucerne captivates visitors with its medieval architecture, crystal-clear lake waters, and breathtaking mountain backdrop. When exploring this gem of Central Switzerland, having a dependable taxi service transforms your experience from stressful to seamless.

Nova Taxi understands Lucerne's unique character. Whether you're arriving at the bustling train station after a scenic journey through the Alps or need quick transport from your lakeside hotel to the iconic Chapel Bridge, our drivers know every cobblestone street and hidden shortcut in this historic city.

The city's compact old town might seem walkable, but Lucerne's steep hills and unpredictable weather make taxi service invaluable. From the waterfront promenades near the Culture and Congress Centre to the residential areas of Tribschen, we cover every corner of this vibrant Swiss destination.`
      },
      
      services: {
        title: "Our Services in Lucerne",
        content: `Our Lucerne taxi fleet operates around the clock, understanding that travel doesn't follow a 9-to-5 schedule. Early morning flights from Zurich Airport? We'll have you there with time to spare. Late-night arrival after a concert at KKL Lucerne? Our drivers wait patiently at your pickup point.

For tourists, we offer specialized transport to Mount Pilatus, Rigi, and the Swiss Museum of Transport. Business travelers appreciate our professional service to corporate offices along Alpenquai and the business districts near Lucerne station.

Hotel transfers represent a significant portion of our Lucerne operations. We partner with establishments ranging from boutique guesthouses in the old town to the grand hotels overlooking the lake, ensuring your guests receive consistent, courteous service.`,
        features: [
          "Zurich Airport transfers – approximately 50 minutes direct",
          "Chapel Bridge and Old Town transport",
          "KKL Lucerne concert and event pickup",
          "Mount Pilatus railway station connections",
          "Lake Lucerne boat pier transfers",
          "Corporate accounts for local businesses"
        ]
      },
      
      whyUs: {
        title: "Why Choose Us in Lucerne",
        content: `Lucerne demands a taxi service that matches its sophistication. Our multilingual drivers speak German, English, and often French or Italian – essential in a city welcoming visitors from every continent.

We maintain intimate knowledge of Lucerne's event calendar. During Fasnacht carnival, when streets close and routes change hourly, our drivers navigate alternative paths. When the Lucerne Festival brings classical music enthusiasts from worldwide, we coordinate pickups at venues across the city.

Our vehicles meet Swiss standards for cleanliness and comfort. Air conditioning keeps you cool during summer lake cruises, while heated seats provide warmth on crisp autumn mornings when mist rises from the Vierwaldstättersee.`
      },
      
      gettingAround: {
        title: "Getting Around in Lucerne",
        content: `Lucerne's geography creates unique transportation challenges. The city spans both banks of the Reuss River, with the historic center on the right bank and residential neighborhoods climbing the surrounding hills.

Public transport serves major routes well, but connecting between the station, lakefront, and hillside districts often requires transfers. Our taxi service bridges these gaps efficiently, particularly valuable when carrying luggage or traveling with elderly family members.

The nearby communities of Kriens, Horw, and Meggen have grown into Lucerne's metropolitan area. We provide seamless connections throughout this greater region, whether you're commuting to work or visiting friends in neighboring towns.`
      }
    },
    
    faq: [
      {
        question: "How long does a taxi take from Lucerne to Zurich Airport?",
        answer: "The journey typically takes 50-60 minutes depending on traffic conditions. We recommend booking 3 hours before your flight departure for international flights."
      },
      {
        question: "Can you pick me up from a Lake Lucerne boat cruise?",
        answer: "Absolutely. We regularly collect passengers from the SGV boat piers at Lucerne station, Weggis, Vitznau, and other lakeside stops. Just provide your arrival time and pier location."
      },
      {
        question: "Do you offer tours to Mount Pilatus from Lucerne?",
        answer: "We provide transfers to the Pilatus railway stations in Kriens (gondola) and Alpnachstad (cogwheel railway). For the famous golden round trip, we can coordinate both departure and return transport."
      },
      {
        question: "What's the taxi fare from Lucerne station to the old town hotels?",
        answer: "Short trips within central Lucerne typically range from CHF 15-25. We offer fixed prices for hotel transfers – contact us for a specific quote."
      },
      {
        question: "Are your taxis available during Lucerne Carnival (Fasnacht)?",
        answer: "Yes, though routes may vary due to parade closures. We know the alternative paths and can navigate you around the festivities or to prime viewing locations."
      }
    ]
  },

  // EINSIEDELN (English)
  "einsiedeln": {
    lang: "en",
    seoTitle: "Taxi Einsiedeln | Monastery Transfers & Airport",
    metaDescription: "Taxi service in Einsiedeln, Switzerland. Monastery visits, ski resort transfers, Zurich Airport connections. Call Nova Taxi 24/7.",
    heroTitle: "Taxi Service in Einsiedeln",
    heroSubtitle: "Connecting Switzerland's Spiritual Heart to the World",
    
    sections: {
      intro: {
        title: "Reliable Taxi in Einsiedeln",
        content: `Einsiedeln holds a special place in Swiss culture as one of Europe's most important pilgrimage destinations. The magnificent Baroque monastery, with its Black Madonna statue, draws hundreds of thousands of visitors annually seeking spiritual renewal or architectural wonder.

Nova Taxi serves this unique community with understanding and respect. Our drivers appreciate that many passengers arrive emotionally moved after visiting the monastery, or physically tired after climbing the 300 steps of the Holy Stairway replica. We provide a calm, comfortable transition back to everyday life.

Beyond its religious significance, Einsiedeln surprises visitors with its alpine sports facilities. The Hoch-Ybrig ski area and cross-country trails attract winter enthusiasts, while summer brings hikers to the Sihlsee reservoir and surrounding meadows. Our service connects all these attractions to the wider region.`
      },
      
      services: {
        title: "Our Services in Einsiedeln",
        content: `Pilgrimage groups form a cornerstone of our Einsiedeln operations. We accommodate parties of various sizes, from individual spiritual seekers to organized church groups. Our drivers can coordinate pickups at the monastery plaza, allowing visitors to complete their devotions without time pressure.

Zurich Airport lies just 45 minutes away, making Einsiedeln surprisingly accessible for international visitors. We meet arriving pilgrims with their name displayed, guiding them directly to their accommodation or to the monastery itself.

Winter transforms our service focus. Ski transfers to Hoch-Ybrig peak during school holidays and weekends. We transport families with their equipment safely up the winding mountain roads, then collect tired but happy skiers at day's end.`,
        features: [
          "Monastery and pilgrimage group transfers",
          "Zurich Airport connections (45 minutes)",
          "Hoch-Ybrig ski resort transport",
          "Sihlsee recreational area access",
          "Einsiedeln train station pickups",
          "Wedding and special ceremony transport"
        ]
      },
      
      whyUs: {
        title: "Why Choose Us in Einsiedeln",
        content: `Einsiedeln's location in the pre-Alpine region creates specific driving challenges. Winter brings snow-covered roads, while summer thunderstorms can make mountain routes temporarily hazardous. Our drivers possess local expertise gained through years of navigating these conditions.

We understand the rhythm of pilgrimage. Major religious festivals like the Feast of the Miraculous Dedication (September 14) bring extraordinary visitor numbers. During these events, we expand our fleet and coordinate with local accommodations to ensure smooth transportation.

Discretion matters in this spiritual setting. Whether serving church officials, retreat participants, or tourists simply curious about the monastery, our drivers maintain professional boundaries while remaining warmly welcoming.`
      },
      
      gettingAround: {
        title: "Getting Around in Einsiedeln",
        content: `Einsiedeln sits in a high valley, surrounded by forested hills that create a natural amphitheater around the monastery. The town itself is compact enough for walking, but connections to neighboring areas require transport.

The Südostbahn railway links Einsiedeln to Zurich via Wädenswil, but train frequency limits spontaneous travel. Our taxi service fills the gaps, particularly for early morning departures or late evening returns.

The Sihlsee, Switzerland's largest reservoir, stretches southwest of town. Summer visitors enjoy swimming, sailing, and fishing, but public transport to the lake's recreational facilities remains limited. We provide easy access to boat rentals, beaches, and waterfront restaurants.`
      }
    },
    
    faq: [
      {
        question: "How do I arrange transport for a pilgrimage group to Einsiedeln?",
        answer: "Contact us at least one week ahead for groups. We'll coordinate vehicle sizes, pickup times, and any special requirements like wheelchair accessibility or luggage capacity."
      },
      {
        question: "What's the cost from Einsiedeln to Zurich Airport?",
        answer: "Airport transfers from Einsiedeln typically range from CHF 120-150 depending on time of day. We offer fixed pricing for this popular route – call for your exact quote."
      },
      {
        question: "Do you provide ski transfers to Hoch-Ybrig?",
        answer: "Yes, we transport skiers daily during winter season. We can accommodate ski and snowboard equipment in our vehicles. Book early for weekend and holiday periods."
      },
      {
        question: "Can you recommend the best time to visit the monastery?",
        answer: "While we're taxi drivers rather than tour guides, our experience suggests early mornings offer the most peaceful atmosphere. Vespers services in the evening also provide special experiences."
      },
      {
        question: "Is the train station far from the monastery?",
        answer: "Einsiedeln station is about 1 kilometer from the monastery – a 15-minute walk or 3-minute taxi ride. We're happy to transfer visitors, especially those with mobility concerns."
      }
    ]
  },

  // MEGGEN (German)
  "meggen": {
    lang: "de",
    seoTitle: "Taxi Meggen | Ihr lokales Taxi am Vierwaldstättersee",
    metaDescription: "Taxi Meggen – Zuverlässiger Taxiservice für Seeanstösser. Flughafen Zürich, Luzern Stadt, lokale Fahrten. Nova Taxi 24h.",
    heroTitle: "Taxiservice in Meggen",
    heroSubtitle: "Erstklassige Mobilität an privilegierter Seelage",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Meggen",
        content: `Meggen zählt zu den begehrtesten Wohngemeinden der Zentralschweiz. Die Kombination aus direkter Seelage, Blick auf Pilatus und Rigi sowie die Nähe zu Luzern macht diesen Ort einzigartig. Entsprechend hoch sind die Ansprüche an einen lokalen Taxiservice.

Nova Taxi erfüllt diese Erwartungen mit Professionalität und Diskretion. Unsere Fahrzeuge passen zu den gepflegten Villenquartieren von Meggen. Ob Bankdirektor mit frühem Flug oder Familie auf dem Weg zum Samstagseinkauf – wir behandeln jeden Fahrgast mit der gleichen Sorgfalt.

Die Gemeinde erstreckt sich vom Seeufer bis zur Meggenalp. Dieser Höhenunterschied bedeutet, dass viele Wege zu steil oder zu lang für bequemes Gehen sind. Unser Taxiservice verbindet alle Höhenlagen zuverlässig miteinander.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Meggen",
        content: `Flughafentransfers gehören zu unseren häufigsten Fahrten ab Meggen. Der Flughafen Zürich erreichen wir in etwa 45 Minuten – ideal für Geschäftsreisende, die den Tag produktiv nutzen möchten. Wir holen Sie vor Ihrer Haustür ab und bringen Sie direkt zum Terminal.

Die kurze Distanz nach Luzern macht Meggen auch für abendliche Kulturveranstaltungen attraktiv. Nach einem Konzert im KKL oder einem Theaterabend bringen wir Sie sicher nach Hause, ohne dass Sie sich um Parkplatzsuche oder den letzten Bus sorgen müssen.

Für Bootsbesitzer bieten wir Transfers zum Megger Hafen und zu den verschiedenen Bootsanlegestellen. Auch Golfplatzfahrten zum nahegelegenen Dietschiberg gehören zu unserem Repertoire.`,
        features: [
          "Flughafen Zürich Transfer – ca. 45 Minuten",
          "Luzern Innenstadt und KKL Fahrten",
          "Schulweg-Begleitung für Kinder",
          "Hafen und Bootsanleger Transfers",
          "Golfplatz Dietschiberg Verbindungen",
          "Arztbesuche und Spitalfahrten"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Meggen",
        content: `Diskretion ist in einer Gemeinde wie Meggen unverzichtbar. Unsere Fahrer verstehen dies instinktiv. Was im Taxi besprochen wird, bleibt im Taxi. Diese Vertrauenswürdigkeit haben wir uns über Jahre erarbeitet.

Pünktlichkeit wird in Meggen vorausgesetzt. Wenn wir 6:15 Uhr vereinbaren, stehen wir um 6:14 Uhr bereit. Diese Zuverlässigkeit schätzen besonders Vielflieger, die ihren Ablauf minutengenau planen.

Unsere Fahrzeugflotte entspricht dem Megger Standard. Gepflegte Limousinen und geräumige Vans bieten den Komfort, den unsere Kunden erwarten. Auf Wunsch organisieren wir auch gehobene Fahrzeuge für besondere Anlässe.`
      },
      
      gettingAround: {
        title: "Mobilität in Meggen",
        content: `Meggens Topografie prägt die Verkehrswege. Die Hauptstrasse folgt dem Seeufer, während Stichstrassen in die Hanglagen führen. Der öffentliche Verkehr konzentriert sich auf die Buslinien nach Luzern, erreicht aber nicht alle Wohngebiete optimal.

Das Dorfzentrum mit seinen Geschäften liegt für viele Bewohner der Hanglage zu weit für einen Fussmarch mit Einkäufen. Unser Taxiservice schliesst diese Lücke praktisch und komfortabel.

Die Nachbargemeinden Adligenswil und Küssnacht sind ebenfalls Teil unseres Einzugsgebiets. Verwandtenbesuche, gemeinsame Anlässe oder der Besuch bei Freunden – wir verbinden Meggen mit der gesamten Region.`
      }
    },
    
    faq: [
      {
        question: "Wie lange dauert eine Fahrt von Meggen zum Flughafen Zürich?",
        answer: "Bei normalem Verkehr rechnen wir mit etwa 45 Minuten. Für Frühflüge empfehlen wir einen Puffer von zusätzlichen 15 Minuten."
      },
      {
        question: "Bieten Sie regelmässige Schulfahrten an?",
        answer: "Ja, wir organisieren zuverlässige Schulwegbegleitung. Gerne erstellen wir ein individuelles Angebot für Ihre Familie."
      },
      {
        question: "Kann ich das Taxi für den ganzen Abend buchen?",
        answer: "Selbstverständlich. Für Abendveranstaltungen, Geburtstage oder ähnliche Anlässe bieten wir Pauschalpreise an. Kontaktieren Sie uns für Details."
      },
      {
        question: "Fahren Sie auch zur Meggenalp?",
        answer: "Ja, wir bedienen alle Höhenlagen von Meggen, einschliesslich der Meggenalp und der höher gelegenen Wohngebiete."
      },
      {
        question: "Akzeptieren Sie Firmenkonten?",
        answer: "Ja, wir führen Firmenkonten für regelmässige Geschäftskunden. Die Abrechnung erfolgt monatlich nach Vereinbarung."
      }
    ]
  },

  // FREIENBACH (English)
  "freienbach": {
    lang: "en",
    seoTitle: "Taxi Freienbach & Pfäffikon SZ | Business Transfers",
    metaDescription: "Taxi Freienbach and Pfäffikon SZ. Business travel, Zurich Airport transfers, Lake Zurich transport. Nova Taxi – your local partner.",
    heroTitle: "Taxi Service in Freienbach",
    heroSubtitle: "Business-Class Transport on Lake Zurich's Shores",
    
    sections: {
      intro: {
        title: "Reliable Taxi in Freienbach",
        content: `Freienbach municipality encompasses the dynamic business hub of Pfäffikon SZ, the traditional village of Freienbach, and the charming lakeside communities of Hurden and Wilen. This diverse landscape demands a taxi service that understands both corporate urgency and relaxed waterfront living.

Nova Taxi has grown alongside Freienbach's remarkable economic development. The Seedamm Center, office parks, and countless international companies choose this location for its perfect balance – Zurich accessibility combined with lower tax rates and higher quality of life.

Our drivers navigate daily between board meetings in gleaming office towers and peaceful residential streets where families have lived for generations. This versatility defines our service: equally comfortable delivering executives to presentations and grandparents to medical appointments.`
      },
      
      services: {
        title: "Our Services in Freienbach",
        content: `Corporate transfers dominate our Freienbach operations. The concentration of financial services, trading companies, and tech startups generates constant demand for professional transport. We serve arrivals at Pfäffikon SZ station, coordinate airport pickups, and facilitate meetings throughout the greater Zurich economic area.

Zurich Airport sits just 35 minutes away, making Freienbach exceptionally convenient for international business. Our flight monitoring ensures we're waiting when your plane lands, regardless of delays. For departures, we factor in traffic patterns to guarantee timely arrival.

Beyond business, Freienbach offers unexpected recreational opportunities. The wooden bridge to Rapperswil, Lake Zurich swimming spots, and the Nuolen wetlands attract weekend visitors. We provide transfers to these attractions for tourists and residents alike.`,
        features: [
          "Zurich Airport transfer – 35 minutes",
          "Pfäffikon SZ train station service",
          "Corporate account programs",
          "Seedamm Center and business park transport",
          "Rapperswil wooden bridge excursions",
          "Medical appointment transfers"
        ]
      },
      
      whyUs: {
        title: "Why Choose Us in Freienbach",
        content: `Business travelers expect punctuality measured in seconds, not minutes. Our reputation in Freienbach's corporate community rests on this precision. When you book an 8:00 pickup for an 8:30 meeting, you arrive at 8:25 – not rushing, not waiting.

Confidentiality matters in business transport. Sensitive phone calls happen during rides. Documents are reviewed. Our drivers maintain strict professional boundaries, creating a mobile private office where clients feel secure discussing any topic.

We've adapted to changing work patterns. Video calls during transit, evening pickups for late strategy sessions, weekend airport runs for international roadshows – our flexibility matches modern business demands.`
      },
      
      gettingAround: {
        title: "Getting Around in Freienbach",
        content: `Freienbach spreads along Lake Zurich's upper reaches, connected by the lakeside road and efficient rail service. The S-Bahn from Pfäffikon SZ reaches Zurich Hauptbahnhof in 30 minutes, but last-mile transport from offices and homes to the station often requires additional planning.

The historic causeway connecting Hurden to Rapperswil has created unique traffic patterns. During summer weekends, visitors flood the area, while business days see commuter flows in the opposite direction. Our local knowledge helps navigate these predictable variations.

The A3 motorway provides fast access to Zurich and beyond, but reaching it from different parts of Freienbach varies significantly. We know which on-ramps flow smoothly and which to avoid during peak hours.`
      }
    },
    
    faq: [
      {
        question: "Do you offer corporate accounts for Freienbach businesses?",
        answer: "Yes, many companies in the Pfäffikon SZ area maintain accounts with us. We provide monthly invoicing, dedicated phone lines, and priority booking for account holders."
      },
      {
        question: "How early should I book for Zurich Airport transfers?",
        answer: "For guaranteed availability, book 24 hours ahead for regular times. Early morning flights (before 7am) benefit from booking 2-3 days in advance."
      },
      {
        question: "Can you meet clients at Pfäffikon SZ station with a name sign?",
        answer: "Absolutely. Meet-and-greet service with name display is standard for business pickups. Just provide your guest's name and train arrival time."
      },
      {
        question: "What's the fare from Freienbach to Zurich city center?",
        answer: "Depending on exact pickup location and city destination, fares typically range CHF 80-120. We offer fixed pricing for frequent routes – contact us for specifics."
      },
      {
        question: "Do you transport to Rapperswil Castle or the zoo?",
        answer: "Yes, tourist transfers to Rapperswil attractions are popular. The old town, castle, and Knies Kinderzoo are all frequent destinations from Freienbach."
      }
    ]
  },

  // ROTHENBURG (German)
  "rothenburg": {
    lang: "de",
    seoTitle: "Taxi Rothenburg LU | Zuverlässig & Günstig",
    metaDescription: "Taxi Rothenburg bei Luzern. Gewerbegebiet, Wohnquartiere, Flughafen Zürich. Nova Taxi – Ihr Partner vor Ort. 24h Service.",
    heroTitle: "Taxiservice in Rothenburg",
    heroSubtitle: "Verbindungen für eine wachsende Gemeinde",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Rothenburg",
        content: `Rothenburg hat sich in den vergangenen Jahrzehnten von einem beschaulichen Dorf zu einer der am schnellsten wachsenden Gemeinden im Kanton Luzern entwickelt. Neue Wohnquartiere, moderne Gewerbegebiete und ausgezeichnete Verkehrsanbindungen locken junge Familien und Unternehmen gleichermassen.

Nova Taxi wächst mit dieser Dynamik. Wir kennen die neuen Überbauungen genauso wie die traditionellen Ortsteile. Wenn ein Neuzuzüger erstmals ein Taxi nach Rothenburg bestellt, finden wir auch die neueste Adresse ohne Umwege.

Die Gemeinde liegt strategisch zwischen Luzern und Emmen, profitiert von der Autobahnanbindung und dem regionalen Busnetz. Dennoch gibt es Mobilitätslücken, die unser Taxiservice schliesst – besonders für Bewohner abseits der Hauptachsen.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Rothenburg",
        content: `Das Rothenburger Gewerbegebiet beherbergt zahlreiche Firmen, die regelmässig Taxidienste benötigen. Mitarbeiter erreichen frühe Schichten, Kunden werden vom Bahnhof Luzern abgeholt, und Geschäftsführer schaffen es pünktlich zum Flug nach Frankfurt. Wir sind der verlässliche Partner für all diese Anforderungen.

Für Familien bieten wir flexible Alltagsunterstützung. Kinder zum Sporttraining bringen, wenn beide Eltern arbeiten. Grosseltern zum Arzttermin begleiten. Einkäufe vom Einkaufszentrum nach Hause transportieren, wenn der Bus ungünstig fährt.

Der Flughafen Zürich ist in gut einer Stunde erreichbar. Wir koordinieren Abholzeiten mit Ihrem Flugplan und stellen sicher, dass Sie entspannt am Check-in ankommen.`,
        features: [
          "Gewerbegebiet Shuttle und Firmenkunden",
          "Flughafen Zürich Transfer – ca. 60 Minuten",
          "Bahnhof Luzern Anbindung",
          "Familien- und Seniorenfahrten",
          "Einkaufszentrum Emmen Transfers",
          "Spital- und Arztbesuche"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Rothenburg",
        content: `Als lokaler Taxidienst kennen wir Rothenburg aus täglicher Erfahrung. Wir wissen, welche Strassen bei Schnee zuerst geräumt werden und wo sich bei Starkregen Pfützen bilden. Diese Ortskenntnis übersetzt sich in sichere, zuverlässige Fahrten.

Preislich positionieren wir uns fair. Rothenburg ist keine Luxusgemeinde, und unsere Tarife respektieren das. Gleichzeitig kompromittieren wir nie bei Sicherheit oder Sauberkeit unserer Fahrzeuge.

Viele unserer Kunden kennen wir persönlich. Diese Beziehung bedeutet, dass wir auf individuelle Bedürfnisse eingehen können. Der Stammkunde, der immer dieselbe Morgenzeit bucht. Die Familie, die einen bestimmten Fahrer bevorzugt. Wir merken uns solche Präferenzen.`
      },
      
      gettingAround: {
        title: "Mobilität in Rothenburg",
        content: `Rothenburg erstreckt sich beidseitig der Hauptverkehrsachse zwischen Luzern und Emmen. Die Buslinien bedienen diese Achse zuverlässig, aber die neueren Quartiere abseits dieser Route haben längere Fusswege zu Haltestellen.

Die Nähe zum Autobahnkreuz Emmen-Süd macht Rothenburg zu einem Verkehrsknotenpunkt. Für Bewohner bedeutet dies schnelle Verbindungen in alle Richtungen – sofern sie motorisiert sind. Wer kein Auto besitzt oder nicht fahren kann, schätzt unseren Taxiservice als flexible Alternative.

Der Ortskern mit seinen Einkaufsmöglichkeiten liegt für manche Quartiere günstig, für andere weniger. Wir verbinden alle Teile der Gemeinde miteinander und mit den wichtigen Zielen in der Region.`
      }
    },
    
    faq: [
      {
        question: "Wie teuer ist ein Taxi von Rothenburg nach Luzern Bahnhof?",
        answer: "Die Fahrt kostet je nach genauem Abholort etwa CHF 25-35. Für regelmässige Fahrten bieten wir vergünstigte Pauschalen an."
      },
      {
        question: "Fahren Sie auch ins Gewerbegebiet Rothenburg?",
        answer: "Selbstverständlich. Das Gewerbegebiet gehört zu unseren häufigsten Zielen. Wir kennen die einzelnen Firmenstandorte und Zufahrten."
      },
      {
        question: "Kann ich für meinen betagten Vater regelmässige Arztfahrten buchen?",
        answer: "Ja, wir organisieren Serien von Arzt- oder Therapiefahrten. Unsere Fahrer helfen gerne beim Ein- und Aussteigen und warten bei Bedarf."
      },
      {
        question: "Wie weit im Voraus muss ich buchen?",
        answer: "Spontane Bestellungen erfüllen wir oft innerhalb von 15-20 Minuten. Für garantierte Verfügbarkeit bei Flughafentransfers empfehlen wir 24 Stunden Vorlauf."
      },
      {
        question: "Akzeptieren Sie Kartenzahlung?",
        answer: "Ja, wir nehmen alle gängigen Kredit- und Debitkarten sowie TWINT. Barzahlung ist natürlich auch möglich."
      }
    ]
  },

  // HORW (English)
  "horw": {
    lang: "en",
    seoTitle: "Taxi Horw | Pilatus Base & Lucerne Connection",
    metaDescription: "Taxi service in Horw near Lucerne. Mount Pilatus transfers, airport connections, lakeside transport. Nova Taxi 24/7.",
    heroTitle: "Taxi Service in Horw",
    heroSubtitle: "Where Mountain Meets Lake in Perfect Harmony",
    
    sections: {
      intro: {
        title: "Reliable Taxi in Horw",
        content: `Horw occupies one of Central Switzerland's most enviable positions – nestled between the shores of Lake Lucerne and the dramatic slopes of Mount Pilatus. This privileged geography creates a community that values both natural beauty and practical connectivity.

Nova Taxi serves Horw with deep appreciation for its character. Our drivers witness daily the parade of hikers heading for Pilatus trails, families enjoying lakeside weekends, and professionals commuting to Lucerne's commercial center. We accommodate each journey with equal care.

The Horw peninsula creates a distinctive microclimate, often sunny when Lucerne lies shrouded in fog. Residents treasure this advantage, and visitors discover unexpected Mediterranean ambiance along the Kastanienbaum shore. Our taxi service helps explore every corner of this varied landscape.`
      },
      
      services: {
        title: "Our Services in Horw",
        content: `Mount Pilatus dominates Horw's tourism potential. We transport visitors to the Fräkmüntegg cable car station and the Pilatus-Bahn valley station in Kriens. For the famous Golden Round Trip combining boat, cogwheel railway, and aerial gondola, we coordinate multiple transfer points seamlessly.

University of Applied Sciences students and staff form a significant passenger group. The campus brings young energy to Horw, along with transport needs that don't always align with public bus schedules. Late library sessions, weekend study groups, and semester-end moves – we're ready for academic life's demands.

Lake activities generate summer transport peaks. Swimmers heading to Strandbad Horw, sailors launching from the yacht club, and restaurant guests seeking waterfront dining all rely on flexible taxi availability.`,
        features: [
          "Mount Pilatus railway connections",
          "Zurich Airport transfer – approximately 55 minutes",
          "Lucerne University campus transport",
          "Lakeside restaurant and beach access",
          "Strandbad Horw summer service",
          "Horw train station pickups"
        ]
      },
      
      whyUs: {
        title: "Why Choose Us in Horw",
        content: `Horw's residents expect service quality matching their community's standards. Clean vehicles, punctual arrivals, and courteous drivers aren't extras – they're baseline requirements we consistently meet.

Our local knowledge extends beyond addresses to understanding Horw's rhythms. We know when the university releases classes, when the beach fills up on summer afternoons, and when Pilatus-bound tourists cluster at transport points. This awareness helps us position vehicles strategically for quick response.

Environmental consciousness runs strong in Horw. We maintain our fleet to minimize emissions and are actively expanding cleaner vehicle options. Passengers who care about sustainability can request our newer, more efficient cars.`
      },
      
      gettingAround: {
        title: "Getting Around in Horw",
        content: `Horw stretches from the lakefront at Kastanienbaum through the village center to the hillsides approaching Pilatus. This varied terrain means distances that look short on maps can involve significant elevation changes.

The S-Bahn station provides excellent connections to Lucerne in just 6 minutes, but many destinations within Horw itself aren't easily walkable from the platform. Our taxi service bridges this gap, connecting train arrivals with their final destinations efficiently.

Winkel, Kastanienbaum, and the industrial area each have distinct characters and access patterns. Local taxi knowledge means we approach each neighborhood appropriately, knowing where parking is tight and which routes flow smoothly.`
      }
    },
    
    faq: [
      {
        question: "How do I get from Horw to the Pilatus gondola station?",
        answer: "We drive you to Fräkmüntegg valley station in Kriens in about 10 minutes. From there, the gondola whisks you up to the mountain. Return pickup can be arranged for any time."
      },
      {
        question: "Is the University of Applied Sciences far from Horw station?",
        answer: "The campus is about 1.5 km from the station – a 20-minute walk or 3-minute taxi ride. We frequently transport students, especially during bad weather or with heavy materials."
      },
      {
        question: "Can you take me to Strandbad Horw beach?",
        answer: "Absolutely. Summer beach transfers are very popular. We can also coordinate pickup times based on when you want to leave the beach."
      },
      {
        question: "What's the fare from Horw to Lucerne city center?",
        answer: "Typical fares range from CHF 20-30 depending on exact locations. The train is faster for station-to-station travel, but a taxi works better for door-to-door convenience."
      },
      {
        question: "Do you serve the Kastanienbaum area?",
        answer: "Yes, we cover all of Horw municipality including Kastanienbaum. The peninsula's restaurants and sailing facilities are frequent destinations."
      }
    ]
  },

  // BAAR (English)
  "baar": {
    lang: "en",
    seoTitle: "Taxi Baar | Business Hub Transport Canton Zug",
    metaDescription: "Taxi Baar – professional transport in Canton Zug's largest town. Corporate transfers, Zurich Airport, local rides. Nova Taxi 24/7.",
    heroTitle: "Taxi Service in Baar",
    heroSubtitle: "Professional Transport for Switzerland's Business Heartland",
    
    sections: {
      intro: {
        title: "Reliable Taxi in Baar",
        content: `Baar has transformed from a quiet agricultural community into Canton Zug's most populous municipality and a major Swiss business center. International corporations, trading companies, and financial services firms cluster in its modern office parks, creating transport demands that require professional solutions.

Nova Taxi has evolved alongside Baar's commercial growth. We understand that in this environment, a delayed taxi can mean a missed meeting worth millions. Our reliability isn't just convenient – it's business critical.

Yet Baar remains more than corporate headquarters. Traditional farming continues on the outskirts. The historic village center preserves its character. The Lorzentobel gorge offers unexpected wilderness minutes from glass towers. Our service connects all these Baar identities seamlessly.`
      },
      
      services: {
        title: "Our Services in Baar",
        content: `Corporate transport forms our core business in Baar. We maintain accounts with major companies, providing seamless billing, priority booking, and drivers who know individual corporate requirements. Regular passengers find their preferred routes and timing preferences remembered.

Zurich Airport access ranks among our most frequent requests. The 30-minute journey makes Baar exceptionally convenient for international business. We monitor flights, adjust for delays, and ensure executives arrive at their gates without stress.

Intercantonal connections matter in Baar's networked business environment. Quick hops to Zug city, trips to Lucerne meetings, and transfers to Zurich offices all flow through our service. We think regionally while serving locally.`,
        features: [
          "Zurich Airport – 30 minutes direct",
          "Corporate account management",
          "Zug train station connections",
          "Business park and office transfers",
          "Executive airport meet-and-greet",
          "Confidential document transport available"
        ]
      },
      
      whyUs: {
        title: "Why Choose Us in Baar",
        content: `Baar's business community operates at international standards. This means expecting taxis with impeccable interiors, drivers who dress professionally, and service that matches what clients experience in London, Singapore, or New York.

We've invested in meeting these expectations. Our vehicles feature leather seating, climate control, and mobile charging. Drivers receive training in professional conduct and discretion. For VIP situations, we can arrange premium vehicles.

Beyond corporate needs, we serve Baar's diverse residential population. Young families in new developments, seniors in established neighborhoods, and everyone between – all receive the same professional treatment.`
      },
      
      gettingAround: {
        title: "Getting Around in Baar",
        content: `Baar sprawls across the valley between Zug and the Albis hills. The A4 motorway bisects the municipality, providing fast regional access but also dividing neighborhoods. Our taxi service connects areas that the highway separates.

Public transport centers on bus lines to Zug station, but coverage of Baar's expanding commercial zones varies. Many office parks lack direct bus service, making taxis essential for the last mile of business travel.

The growing Baar-North district attracts young professionals who increasingly rely on mobility services rather than car ownership. We're adapting our service to meet this shifting demand with flexible booking options and rapid response times.`
      }
    },
    
    faq: [
      {
        question: "How do I set up a corporate account for my Baar-based company?",
        answer: "Contact us directly to discuss your company's typical needs. We'll create a customized account with monthly invoicing, designated contact person, and any special requirements you have."
      },
      {
        question: "What's the fastest way from Baar to Zurich Airport?",
        answer: "Our direct taxi route typically takes 30 minutes via the A4 motorway. We recommend allowing 45-50 minutes total to account for any traffic variations and terminal navigation."
      },
      {
        question: "Do you offer fixed prices for airport transfers?",
        answer: "Yes, we provide fixed-price airport transfers from Baar to Zurich Airport. The exact rate depends on your pickup location within Baar – contact us for a quote."
      },
      {
        question: "Can you pick up my clients arriving at Zug station?",
        answer: "Absolutely. Meet-and-greet service at Zug station includes waiting with a name sign, assistance with luggage, and transport to your Baar office or specified destination."
      },
      {
        question: "Is weekend service available in Baar?",
        answer: "Yes, we operate 24/7 including weekends. While business transport slows on weekends, we handle personal travel, airport transfers, and leisure trips throughout Baar."
      }
    ]
  },

  // EBIKON (English)
  "ebikon": {
    lang: "en",
    seoTitle: "Taxi Ebikon | Mall of Switzerland & Local Service",
    metaDescription: "Taxi Ebikon – your transport to Mall of Switzerland, Lucerne, and surroundings. Shopping trips, commutes, airport. Nova Taxi 24h.",
    heroTitle: "Taxi Service in Ebikon",
    heroSubtitle: "Gateway to Shopping, Living, and Leisure",
    
    sections: {
      intro: {
        title: "Reliable Taxi in Ebikon",
        content: `Ebikon has emerged as one of the Lucerne agglomeration's most dynamic communities. The opening of Mall of Switzerland transformed the area into a regional shopping destination, while thoughtful urban development has created attractive residential neighborhoods for young families and professionals.

Nova Taxi has grown with Ebikon's evolution. We remember when the main road was quieter and weekends slower. Now, we navigate the increased traffic with local expertise, knowing back routes and timing patterns that keep passengers moving efficiently.

The community balances suburban convenience with urban accessibility. Lucerne's cultural offerings lie just minutes away, while green spaces and family-friendly amenities define local life. Our taxi service connects these complementary aspects of Ebikon living.`
      },
      
      services: {
        title: "Our Services in Ebikon",
        content: `Mall of Switzerland generates significant transport demand. Shoppers arrive from across Central Switzerland, but parking challenges and heavy bags make taxi service attractive. We offer dedicated shopping trip packages – drop off at the entrance, collect calls for pickup with your purchases loaded curbside.

Commuter connections represent steady daily business. Many Ebikon residents work in Lucerne or Zug, using our taxi service for station transfers when weather discourages walking or timing is tight. The Rontal tram extension has improved public transit, but first-mile and last-mile gaps remain.

Family transport needs fill our calendar: children to activities, grandparents to appointments, airport trips for vacation departures. We've become the flexible solution when family logistics get complicated.`,
        features: [
          "Mall of Switzerland shopping transfers",
          "Lucerne train station connection – 10 minutes",
          "Zurich Airport – approximately 50 minutes",
          "School and activity transport",
          "Medical appointment transfers",
          "Evening entertainment pickups"
        ]
      },
      
      whyUs: {
        title: "Why Choose Us in Ebikon",
        content: `Ebikon's rapid growth has attracted new taxi services, but Nova Taxi offers established local knowledge that newcomers can't match. We watched neighborhoods develop, learned the new street names, and adapted our service as the community changed.

Shopping trip expertise sets us apart. Our drivers know Mall of Switzerland's layout, can suggest pickup points based on which stores you're visiting, and help load purchases efficiently. This specialized knowledge transforms a taxi ride into a proper shopping service.

For families, we offer consistency. The same careful approach whether transporting your teenager, your toddler, or your grandmother. Child seats are available on request, and our drivers understand the patience required when helping elderly passengers.`
      },
      
      gettingAround: {
        title: "Getting Around in Ebikon",
        content: `Ebikon stretches along the Rontal, from the commercial areas near the motorway junction to quieter residential zones toward Buchrain. This elongated geography means significant distances between neighborhoods.

The Rontal tram provides backbone public transport, but stops are spaced for efficiency rather than comprehensive coverage. Many residential streets sit a considerable walk from the nearest platform. Our taxi service complements public transit by covering these access gaps.

Mall of Switzerland has altered traffic patterns significantly. Weekend afternoons see congestion around the commercial area that spreads to surrounding roads. Local knowledge of alternative routes keeps our passengers moving when others sit in queues.`
      }
    },
    
    faq: [
      {
        question: "Can you wait while I shop at Mall of Switzerland?",
        answer: "Rather than waiting, we recommend our call-back service. Shop at your pace, then call when you're ready. We typically arrive within 10-15 minutes for pickup at the mall."
      },
      {
        question: "How much does a taxi cost from Ebikon to Lucerne station?",
        answer: "The fare typically ranges from CHF 20-30 depending on your exact location in Ebikon. For regular commuters, we offer discounted multi-ride packages."
      },
      {
        question: "Do you provide child seats?",
        answer: "Yes, we have child seats and booster seats available. Please mention the ages and number of children when booking so we can prepare the appropriate equipment."
      },
      {
        question: "Is there taxi service late at night in Ebikon?",
        answer: "We operate 24 hours. Late-night service is particularly useful for restaurant returns, event pickups, and early morning airport departures. Book ahead for guaranteed availability after midnight."
      },
      {
        question: "Can you help carry shopping bags?",
        answer: "Absolutely. Our drivers assist with loading and unloading shopping. For larger purchases, we can arrange vehicles with appropriate cargo space."
      }
    ]
  },

  // ROTKREUZ (English)
  "rotkreuz": {
    lang: "en",
    seoTitle: "Taxi Rotkreuz | Tech Hub & Rail Junction Service",
    metaDescription: "Taxi Rotkreuz – transport hub of Central Switzerland. Suurstoffi, train station, Zurich Airport. Nova Taxi for business & residents.",
    heroTitle: "Taxi Service in Rotkreuz",
    heroSubtitle: "Where Innovation Meets Infrastructure",
    
    sections: {
      intro: {
        title: "Reliable Taxi in Rotkreuz",
        content: `Rotkreuz has reinvented itself dramatically. Once a railway junction village, it now hosts the Suurstoffi campus – a showcase of Swiss sustainability and innovation – alongside traditional residential areas. This combination creates unique transport dynamics.

Nova Taxi serves both faces of Rotkreuz. We transport tech workers to their open-plan offices in carbon-neutral buildings and longtime residents to the village bakery they've visited for decades. Understanding this dual character defines our approach.

The train station remains Rotkreuz's transport heart. As the junction where lines from Lucerne, Zug, and Zurich meet, it generates constant transfer traffic. Our taxi service connects this hub with destinations throughout the municipality and beyond.`
      },
      
      services: {
        title: "Our Services in Rotkreuz",
        content: `Suurstoffi campus transport dominates our business weekday bookings. The innovative district houses university facilities, company headquarters, and residential units in car-free zones. We drop passengers at designated points and coordinate pickups for maximum convenience.

Students from Lucerne University of Applied Sciences form a significant passenger group. Campus locations split between Rotkreuz and other sites create intercampus travel needs. We offer student-friendly rates for these regular journeys.

Rail connections make Rotkreuz a strategic point for regional travel. Our taxi service extends rail mobility, providing links to destinations not directly served by trains. Business travelers particularly value this connectivity for reaching meetings across Central Switzerland.`,
        features: [
          "Suurstoffi campus access and transfers",
          "Train station connections – central hub",
          "University campus transport",
          "Zurich Airport – approximately 35 minutes",
          "Cross-platform rail connection assistance",
          "Corporate accounts for campus businesses"
        ]
      },
      
      whyUs: {
        title: "Why Choose Us in Rotkreuz",
        content: `Rotkreuz's transformation requires taxi service that adapts continuously. New buildings, altered access roads, and evolving drop-off protocols at Suurstoffi demand drivers who stay current. We invest in knowing these changes before they confuse passengers.

The innovation-focused community expects modern service standards. Our booking system accommodates digital natives who prefer apps to phone calls. Real-time tracking lets busy professionals monitor their taxi's arrival precisely.

For traditional Rotkreuz residents, we offer familiar reliability. Many remember when the village was smaller and quieter. We provide continuity – the same professional service whether heading to a smart building or a family gathering.`
      },
      
      gettingAround: {
        title: "Getting Around in Rotkreuz",
        content: `Rotkreuz's geography divides naturally into zones. The station area and Suurstoffi form the modern core. Residential neighborhoods spread toward Risch and Buonas. Industrial areas occupy the motorway-adjacent land. Each zone has distinct access patterns.

The car-free design of Suurstoffi creates specific transport challenges. Vehicles cannot penetrate the district, so taxi transfers require knowledge of appropriate drop-off points and walking distances to final destinations.

Train service excellence paradoxically increases local taxi demand. Travelers reaching Rotkreuz by rail often need last-mile transport that public buses don't efficiently provide. Our positioning near the station enables rapid response to these needs.`
      }
    },
    
    faq: [
      {
        question: "Where exactly can taxis drop off at Suurstoffi?",
        answer: "We use designated drop-off zones at the Suurstoffi entrance points. Our drivers know which zone works best for different campus buildings, minimizing your walk to the final destination."
      },
      {
        question: "How long does it take from Rotkreuz to Zurich Airport?",
        answer: "The journey typically takes 35 minutes via the A4 motorway. We recommend booking 2.5 hours before international flight departure for comfortable timing."
      },
      {
        question: "Do you offer discounts for university students?",
        answer: "Yes, we provide student rates for regular campus travel. Show a valid student ID and ask about our multi-ride packages designed for academic schedules."
      },
      {
        question: "Can you help with train connections at Rotkreuz station?",
        answer: "Certainly. We can transfer you between platforms quickly when tight connections don't allow walking time, or transport you onwards if you've missed a connection."
      },
      {
        question: "Is there parking at Rotkreuz where I can leave my car and take a taxi to the airport?",
        answer: "Several parking options exist near the station. We can advise on locations and pick you up directly from your parked car for airport transfers."
      }
    ]
  },

  // GOLDAU (English)
  "goldau": {
    lang: "en",
    seoTitle: "Taxi Goldau | Rigi Base & Rail Hub Transport",
    metaDescription: "Taxi Goldau – gateway to Mount Rigi and Central Switzerland. Station transfers, Nature Park, airport connections. Nova Taxi 24/7.",
    heroTitle: "Taxi Service in Goldau",
    heroSubtitle: "Your Starting Point for Alpine Adventures",
    
    sections: {
      intro: {
        title: "Reliable Taxi in Goldau",
        content: `Goldau sits at a geographical and historical crossroads. The dramatic landslide of 1806 shaped the landscape that visitors see today, while the railway junction that followed made this small community a transport hub of surprising importance.

Nova Taxi operates from this unique position. We serve tourists bound for Rigi adventures, business travelers transferring between trains, and residents navigating daily life in a village that punches above its weight in regional significance.

The Nature and Animal Park draws families year-round, its bears and wolves offering wildlife encounters impossible elsewhere in Switzerland. Our taxi service connects this attraction with the wider area, helping visitors explore beyond the park's boundaries.`
      },
      
      services: {
        title: "Our Services in Goldau",
        content: `Mount Rigi transfers anchor our tourism business. The Arth-Rigi-Bahn departs steps from the main station, but coordinating train arrivals with mountain railway connections often requires transport assistance. We bridge these gaps, ensuring visitors maximize their alpine time.

The station's importance as a railway junction creates unique transfer needs. Cross-platform connections can be tight, and unfamiliar travelers sometimes need help navigating between services. Our presence at the station provides reassurance and practical assistance.

Nature and Animal Park visitors represent steady business, particularly families with tired children at day's end. We transport guests to accommodations throughout the region, from lakeside hotels to mountain retreats.`,
        features: [
          "Mount Rigi railway connections",
          "Nature and Animal Park transport",
          "Station transfer assistance",
          "Zurich Airport – approximately 50 minutes",
          "Lakeside hotel transfers",
          "Hiking trailhead access"
        ]
      },
      
      whyUs: {
        title: "Why Choose Us in Goldau",
        content: `Goldau's modest size belies its complexity. The station, the park, the Rigi railway, and the residential areas each generate distinct transport patterns. Local expertise helps navigate these efficiently.

Tourism requires patience and flexibility that we've developed through years of service. Visitors don't always speak German, may be unfamiliar with Swiss customs, and sometimes need guidance beyond simple transport. Our drivers provide welcoming assistance.

For regular residents and commuters, we offer reliability that matches the trains. When you need to reach the station for a specific departure, you can trust our punctuality. This consistency builds the relationships that sustain local taxi service.`
      },
      
      gettingAround: {
        title: "Getting Around in Goldau",
        content: `Goldau clusters around its station and extends toward neighboring Arth. The communities are closely linked, sharing services and identity while maintaining distinct characters. Our taxi service covers both seamlessly.

The famous landslide terrain creates interesting travel patterns. Some routes that look direct on maps require detours around the geological formations. Local knowledge ensures efficient navigation of these topographical quirks.

Lake Zug and Lake Lauerz both lie within easy reach. Summer brings swimmers and sailors seeking waterfront access. Winter attracts visitors to the snow-covered Nature Park. Year-round, the Rigi beckons. Our service adapts to these seasonal rhythms.`
      }
    },
    
    faq: [
      {
        question: "How do I get from Goldau station to the Rigi railway?",
        answer: "The Arth-Rigi-Bahn station is adjacent to the main Goldau station – literally a short walk. However, if you have heavy luggage or limited mobility, we can drive you directly to the Rigi railway platform entrance."
      },
      {
        question: "Can you take us to the Nature and Animal Park?",
        answer: "Yes, though the park is easily walkable from the station (about 10 minutes). We're more useful for pickup when visiting with young children who are tired after exploring."
      },
      {
        question: "What's the fare from Goldau to Zurich Airport?",
        answer: "Airport transfers from Goldau typically cost CHF 140-160. We offer fixed pricing for this popular route – contact us for an exact quote based on your specific pickup point."
      },
      {
        question: "Do you serve the lakeside areas near Goldau?",
        answer: "Yes, we cover the Lake Zug shore from Arth to Walchwil, and the Lake Lauerz area as well. Beach access, restaurant transport, and hotel transfers are all available."
      },
      {
        question: "Is there taxi service for Rigi hikers returning to Goldau?",
        answer: "Absolutely. Hikers often descend different routes than they ascended. We can collect you from various Rigi base points and return you to Goldau station or your accommodation."
      }
    ]
  },

  // SCHWYZ (German)
  "schwyz": {
    lang: "de",
    seoTitle: "Taxi Schwyz | Kantonshauptstadt & Mythen-Region",
    metaDescription: "Taxi Schwyz – Zuverlässiger Taxiservice in der historischen Kantonshauptstadt. Flughafentransfer, Mythen-Region, 24/7 erreichbar.",
    heroTitle: "Taxiservice in Schwyz",
    heroSubtitle: "Im Herzen der Urschweiz",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Schwyz",
        content: `Schwyz, die namensgebende Kantonshauptstadt der Schweiz, verbindet historische Bedeutung mit lebendiger Gegenwart. Das Bundesbriefmuseum bewahrt die Gründungsdokumente der Eidgenossenschaft, während die imposanten Mythen das Stadtbild prägen.

Nova Taxi kennt Schwyz aus täglicher Erfahrung. Wir fahren Besucher zum Museum, bringen Geschäftsleute zu Terminen im Kantonszentrum und holen Wanderer von den Mythen-Talstationen ab. Diese Vielseitigkeit macht unseren Service aus.

Die Gemeinde erstreckt sich vom historischen Kern bis zu den Wohnquartieren am Bergfuss. Öffentliche Verkehrsmittel bedienen die Hauptachsen, aber viele Ziele erfordern flexible Mobilität. Unser Taxi schliesst diese Lücken zuverlässig.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Schwyz",
        content: `Der Flughafen Zürich ist in etwa 50-60 Minuten erreichbar. Für Geschäftsreisende und Urlauber bieten wir pünktliche Transfers mit Flugüberwachung – auch bei Verspätungen warten wir.

Kulturelle Veranstaltungen im Forum Schwyz und sportliche Events in der Region generieren regelmässigen Transportbedarf. Wir koordinieren Gruppenfahrten und individuelle Abholungen gleichermassen professionell.

Die Mythen-Region lockt Wanderer und Skifahrer. Wir bringen Sie zu den Talstationen und holen Sie nach Ihrem Bergerlebnis wieder ab – müde, aber zufrieden.`,
        features: [
          "Flughafen Zürich Transfer – ca. 50-60 Minuten",
          "Bundesbriefmuseum und Altstadt Fahrten",
          "Mythen-Talstation Transfers",
          "Forum Schwyz Event-Service",
          "Bahnhof Schwyz Anbindung",
          "Arzt- und Spitalfahrten"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Schwyz",
        content: `Als lokaler Anbieter verstehen wir die Bedürfnisse der Schwyzer Bevölkerung. Die ältere Generation schätzt persönliche Betreuung beim Ein- und Aussteigen. Familien verlassen sich auf unsere Kindersitze. Geschäftsleute erwarten Pünktlichkeit.

Wir kennen die Eigenheiten des Schwyzer Verkehrs – die Marktplatz-Parkierung, die Schulwege, die Festtags-Umfahrungen. Dieses Wissen übersetzt sich in reibungslose Fahrten ohne Umwege oder Verzögerungen.

Unser Preis-Leistungs-Verhältnis respektiert das Budget einer Kantonshauptstadt, die bodenständig geblieben ist. Keine versteckten Kosten, klare Kommunikation.`
      },
      
      gettingAround: {
        title: "Mobilität in Schwyz",
        content: `Schwyz liegt an der Hauptverkehrsachse zwischen Zürich und dem Gotthard. Der Bahnhof bietet regelmässige Verbindungen, aber die letzte Meile zu Wohngebieten und Ausflugszielen erfordert oft zusätzlichen Transport.

Die Ibergeregg-Strasse führt in beliebte Wandergebiete, ist aber für Fussgänger nicht zugänglich. Unser Taxi ermöglicht auch automobilfreien Haushalten den Zugang zu diesen Naturerlebnissen.

Nachbargemeinden wie Ingenbohl, Muotathal und Steinen gehören zu unserem erweiterten Einzugsgebiet. Familiäre Verbindungen und regionale Anlässe führen zu regelmässigen Fahrten in diese Ortschaften.`
      }
    },
    
    faq: [
      {
        question: "Wie lange dauert ein Taxi von Schwyz zum Flughafen Zürich?",
        answer: "Bei normalem Verkehr etwa 50-60 Minuten. Wir empfehlen, 2,5-3 Stunden vor Abflug abgeholt zu werden."
      },
      {
        question: "Fahren Sie auch zur Mythen-Talstation?",
        answer: "Ja, wir bringen Wanderer und Skifahrer zu den Bergbahn-Stationen und holen sie nach dem Bergerlebnis wieder ab."
      },
      {
        question: "Kann ich für regelmässige Arztbesuche ein Taxi buchen?",
        answer: "Selbstverständlich. Wir organisieren Serien von medizinischen Fahrten mit persönlicher Betreuung."
      },
      {
        question: "Sind Kindersitze verfügbar?",
        answer: "Ja, wir haben Kindersitze für verschiedene Altersgruppen. Bitte bei der Buchung angeben."
      }
    ]
  },

  // VITZNAU (German)
  "vitznau": {
    lang: "de",
    seoTitle: "Taxi Vitznau | Rigi-Bahn & Seehotels",
    metaDescription: "Taxi Vitznau am Vierwaldstättersee. Transfers zu Hotels, Rigi-Bahn, Schiffstation. Nova Taxi – Ihr Partner am See.",
    heroTitle: "Taxiservice in Vitznau",
    heroSubtitle: "Perle am Vierwaldstättersee",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Vitznau",
        content: `Vitznau liegt malerisch am Südufer des Vierwaldstättersees, eingerahmt von der Rigi und dem glitzernden Wasser. Das mondäne Dorf zieht Erholungssuchende, Bergfreunde und Geniesser gleichermassen an.

Nova Taxi versteht die besondere Atmosphäre von Vitznau. Unsere Fahrer wissen, dass Gäste hier Ruhe und Stil erwarten. Entsprechend diskret und professionell gestalten wir jeden Transfer.

Die Rigi-Zahnradbahn startet direkt in Vitznau. Wir bringen Ausflügler zum Bahnhof und koordinieren Rückholungen nach der Bergfahrt. Für den Golden Round Trip – Schiff, Zahnradbahn, Gondel – bieten wir nahtlose Transfers zwischen den Verkehrsmitteln.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Vitznau",
        content: `Hoteltransfers dominieren unser Vitznauer Geschäft. Vom Park Hotel Vitznau bis zu kleineren Boutique-Häusern – wir kennen jeden Eingang und jede Anfahrt. Gäste schätzen die reibungslose Ankunft nach langer Reise.

Die Schiffstation Vitznau verbindet mit Luzern, Weggis und dem Urnersee. Wir synchronisieren unsere Fahrten mit dem Schiffsfahrplan, damit keine unnötige Wartezeit entsteht.

Für Hochzeiten, Firmenevents und private Feiern in den exklusiven Locations von Vitznau organisieren wir Sammeltransporte. Ihre Gäste kommen entspannt an und müssen sich nicht um Parkplätze sorgen.`,
        features: [
          "Rigi-Zahnradbahn Vitznau Transfers",
          "Seehotel Ankunft und Abholung",
          "Schiffstation Verbindungen",
          "Hochzeits- und Event-Transport",
          "Flughafen Zürich – ca. 70 Minuten",
          "Ausflüge nach Weggis und Küssnacht"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Vitznau",
        content: `Vitznaus exklusives Publikum erwartet entsprechenden Service. Unsere Fahrzeuge sind gepflegt, unsere Fahrer kleiden sich angemessen, und der Umgangston bleibt stets höflich-professionell.

Ortskenntnis macht den Unterschied. Wir wissen, wo das Park Hotel den Haupteingang hat, wie man die Rigi-Bahn-Station am einfachsten erreicht, und welche Restaurants besonderen Service verdienen.

Flexibilität gehört zu Vitznau. Wenn das Abendessen im Parkrestaurant länger dauert oder der Sonnenuntergang zum Verweilen einlädt – wir passen uns Ihrem Zeitplan an.`
      },
      
      gettingAround: {
        title: "Mobilität in Vitznau",
        content: `Vitznau ist ein lineares Dorf, das sich am Seeufer entlangzieht. Die Hauptstrasse führt durch den Ort, aber viele Hotels liegen etwas abseits in ruhigeren Lagen.

Die Anbindung erfolgt primär über das Schiff und den Postbus. Für individuelle Mobilität und spontane Ausflüge bleibt das Taxi die flexibleste Option.

Die umliegenden Orte – Weggis, Gersau, Brunnen – sind attraktive Ziele für Tagesausflüge. Wir verbinden Vitznau mit der gesamten Rigi-Region.`
      }
    },
    
    faq: [
      {
        question: "Wie erreiche ich die Rigi-Zahnradbahn von meinem Hotel?",
        answer: "Wir holen Sie direkt am Hotel ab und bringen Sie zur Rigi-Bahn Station Vitznau – üblicherweise 3-5 Minuten Fahrt."
      },
      {
        question: "Kann ich ein Taxi für den ganzen Tag buchen?",
        answer: "Ja, für Ausflüge in der Region bieten wir Tagesarrangements zu Pauschalpreisen an."
      },
      {
        question: "Fahren Sie auch nach Luzern?",
        answer: "Selbstverständlich. Die Fahrt nach Luzern dauert etwa 25-30 Minuten entlang des Sees."
      },
      {
        question: "Sind Transfers zur Schiffstation möglich?",
        answer: "Ja, wir koordinieren unsere Fahrten mit dem Schiffsfahrplan für optimale Anschlüsse."
      }
    ]
  },

  // WEGGIS (German)
  "weggis": {
    lang: "de",
    seoTitle: "Taxi Weggis | Riviera am Vierwaldstättersee",
    metaDescription: "Taxi Weggis – Ihr Taxiservice an der Schweizer Riviera. Hotelabholungen, Rigi-Transfers, Flughafenfahrten. 24/7 verfügbar.",
    heroTitle: "Taxiservice in Weggis",
    heroSubtitle: "Die Schweizer Riviera erfahren",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Weggis",
        content: `Weggis trägt den Beinamen "Schweizer Riviera" zu Recht. Das milde Klima lässt Palmen und Feigenbäume gedeihen, während der Vierwaldstättersee mediterranes Flair verbreitet. Kein Wunder, dass dieser Ort seit Generationen Erholungssuchende anzieht.

Nova Taxi bedient Weggis mit dem Gespür für diese besondere Atmosphäre. Hier herrscht kein Grossstadttempo – unsere Fahrer passen sich dem entspannten Rhythmus an, ohne dabei Zuverlässigkeit zu vernachlässigen.

Die Seilbahn Weggis-Rigi Kaltbad schwebt von hier auf die Königin der Berge. Ausflügler schätzen unseren Transfer zum Bahnhof und die Abholung nach dem Bergabenteuer.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Weggis",
        content: `Ferienhotels und Wellness-Resorts prägen Weggis. Wir transportieren Gäste vom Flughafen Zürich direkt in ihre Unterkunft – nach der Anreise beginnt der Urlaub sofort, ohne Stress mit Mietwagen oder öffentlichen Verkehrsmitteln.

Die Gemeinde erstreckt sich vom See hinauf in die Höhenlagen. Wanderer nutzen unseren Service, um zu Ausgangspunkten zu gelangen, die zu Fuss schwer erreichbar sind.

Für Seminare und Firmenklausuren in den Weggiser Hotels organisieren wir Gruppentransfers. Teilnehmer aus der ganzen Schweiz erreichen so den Tagungsort entspannt.`,
        features: [
          "Seilbahn Weggis-Rigi Kaltbad Transfers",
          "Wellness-Hotel Abholungen",
          "Flughafen Zürich – ca. 60 Minuten",
          "Wanderausgangspunkt-Service",
          "Seminar- und Firmen-Shuttles",
          "Schiffstation Verbindungen"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Weggis",
        content: `Weggis lebt vom Tourismus, und wir verstehen die Erwartungen der Gäste. Freundlichkeit, Sauberkeit und Flexibilität sind selbstverständlich – sie bilden das Fundament unseres Service.

Viele unserer Fahrgäste sprechen kein Deutsch. Unsere Fahrer kommunizieren problemlos auf Englisch und helfen bei organisatorischen Fragen über den reinen Transport hinaus.

Die Stammgäste von Weggis kehren Jahr für Jahr zurück. Manche buchen bereits vor ihrer Ankunft denselben Fahrer – ein Vertrauensbeweis, den wir mit Konstanz honorieren.`
      },
      
      gettingAround: {
        title: "Mobilität in Weggis",
        content: `Weggis liegt verkehrstechnisch abseits der Hauptachsen. Das Schiff verbindet mit Luzern und dem Urnersee, der Bus fährt nach Küssnacht. Für individuelle Mobilität bleibt das Taxi die praktischste Lösung.

Die steilen Gassen und engen Kurven der Dorfstrassen fordern ortskundige Fahrer. Wir kennen jeden Winkel und navigieren auch grosse Fahrzeuge sicher zu abgelegenen Adressen.

Nachbarorte wie Vitznau, Gersau und Küssnacht laden zu Tagesausflügen ein. Wir verbinden Weggis mit der gesamten Rigi-Region und darüber hinaus.`
      }
    },
    
    faq: [
      {
        question: "Wie komme ich vom Flughafen Zürich nach Weggis?",
        answer: "Wir holen Sie direkt am Terminal ab. Die Fahrt dauert etwa 60 Minuten über die Autobahn und landschaftlich schöne Uferstrasse."
      },
      {
        question: "Fahren Sie zur Rigi Kaltbad Seilbahn?",
        answer: "Ja, wir bringen Sie zur Talstation in Weggis und holen Sie nach der Bergfahrt wieder ab."
      },
      {
        question: "Kann ich ein Taxi für einen Ausflug buchen?",
        answer: "Selbstverständlich. Halbtages- und Ganztagestouren in der Region bieten wir zu Pauschalpreisen an."
      },
      {
        question: "Sind Sie auch am Wochenende verfügbar?",
        answer: "Ja, unser Service läuft 24/7, auch an Wochenenden und Feiertagen."
      }
    ]
  },

  // KÜSSNACHT (German)
  "kuessnacht": {
    lang: "de",
    seoTitle: "Taxi Küssnacht am Rigi | Hohle Gasse & Seezugang",
    metaDescription: "Taxi Küssnacht am Rigi – Ihr lokaler Taxiservice. Hohle Gasse, Seeufer, Bahnhof-Transfers. Nova Taxi 24/7.",
    heroTitle: "Taxiservice in Küssnacht am Rigi",
    heroSubtitle: "Wo Geschichte auf Natur trifft",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Küssnacht",
        content: `Küssnacht am Rigi verbindet Schweizer Geschichte mit attraktiver Seelage. Die berühmte Hohle Gasse erinnert an Wilhelm Tell, während das Seeufer zu Spaziergängen und Badefreuden einlädt.

Nova Taxi kennt Küssnacht von der Hauptstrasse bis zu den Hanglagen. Ob schneller Transfer zum Bahnhof oder gemütliche Fahrt zum See – wir passen uns Ihrem Tempo an.

Die Gemeinde liegt strategisch zwischen Luzern und Zug, was sie für Pendler und Geschäftsreisende attraktiv macht. Unser Taxiservice unterstützt diese regionale Mobilität.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Küssnacht",
        content: `Bahnhof-Transfers bilden einen Schwerpunkt unserer Arbeit. Die S-Bahn-Verbindung nach Luzern und Zug ist praktisch, aber der letzte Kilometer zu Wohnquartieren erfordert oft ein Taxi.

Touristen besuchen die Hohle Gasse und das Tell-Museum. Wir bieten Transfers zu diesen historischen Stätten und kombinieren sie auf Wunsch mit weiteren Ausflugszielen.

Für die lokale Bevölkerung sind wir der flexible Partner im Alltag – Einkaufsfahrten, Arztbesuche, Abendveranstaltungen. Küssnacht ist überschaubar, und wir kennen jeden Winkel.`,
        features: [
          "Bahnhof Küssnacht S-Bahn-Anbindung",
          "Hohle Gasse und Tell-Museum Transfers",
          "Seebad und Strandbad Fahrten",
          "Flughafen Zürich – ca. 40 Minuten",
          "Arzt- und Alltagsfahrten",
          "Verbindungen nach Weggis und Arth"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Küssnacht",
        content: `Küssnacht ist ein Dorf mit städtischen Ansprüchen. Die Nähe zu Luzern und Zug prägt die Erwartungen – man will professionellen Service ohne Grossstadtpreise.

Wir erfüllen diesen Anspruch mit lokaler Verankerung. Unsere Fahrer grüssen bekannte Gesichter, kennen die Schulwege und wissen, welche Strassen bei Schnee zuerst geräumt werden.

Zuverlässigkeit ist in einer Pendlergemeinde entscheidend. Wenn Sie den Zug um 7:23 Uhr erreichen müssen, steht unser Taxi um 7:10 Uhr bereit – ohne Ausnahme.`
      },
      
      gettingAround: {
        title: "Mobilität in Küssnacht",
        content: `Küssnacht erstreckt sich vom Seeufer bis zu den Hanglagen Richtung Rigi. Diese Topografie bedeutet, dass viele alltägliche Wege Höhenunterschiede überwinden müssen.

Die Hauptverkehrsachse führt durch das Dorfzentrum, aber die Wohnquartiere verteilen sich weitläufig. Öffentliche Busse decken die Hauptrouten ab, erreichen aber nicht jede Strasse.

Die Nachbargemeinden Immensee, Merlischachen und Greppen gehören zum Küssnachter Lebensraum. Familiäre und geschäftliche Verbindungen führen zu regelmässigen Fahrten in diese Richtungen.`
      }
    },
    
    faq: [
      {
        question: "Wie weit ist es von Küssnacht zum Flughafen Zürich?",
        answer: "Die Fahrt dauert etwa 40 Minuten über die Autobahn A4. Wir empfehlen 2,5 Stunden Vorlauf für internationale Flüge."
      },
      {
        question: "Fahren Sie auch zur Hohlen Gasse?",
        answer: "Ja, wir bringen Touristen zur Hohlen Gasse und dem Tell-Museum. Auf Wunsch warten wir oder holen später ab."
      },
      {
        question: "Gibt es Kindersitze?",
        answer: "Ja, wir haben Kindersitze für verschiedene Altersgruppen. Bitte bei der Buchung angeben."
      },
      {
        question: "Kann ich regelmässige Pendlerfahrten buchen?",
        answer: "Selbstverständlich. Für regelmässige Fahrten bieten wir vergünstigte Abonnements an."
      }
    ]
  },

  // ROOT (German)
  "root": {
    lang: "de",
    seoTitle: "Taxi Root | D4 Business Center & Rotkreuz",
    metaDescription: "Taxi Root – Ihr Partner im Wirtschaftsraum Root-Rotkreuz. Business-Transfers, Bahnhof, Flughafen. Nova Taxi 24/7.",
    heroTitle: "Taxiservice in Root",
    heroSubtitle: "Business-Mobilität zwischen Luzern und Zug",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Root",
        content: `Root hat sich vom ländlichen Dorf zum attraktiven Wirtschaftsstandort entwickelt. Das D4 Business Center zieht Unternehmen aus der ganzen Schweiz an, während die Wohnquartiere junge Familien ansprechen.

Nova Taxi versteht diese duale Identität. Morgens bringen wir Geschäftsleute zu Meetings, nachmittags Kinder zum Sport, abends Paare zum Ausgang. Diese Vielseitigkeit prägt unseren Service.

Die Lage zwischen Luzern und Zug ist strategisch optimal. Beide Stadtzentren sind in 15-20 Minuten erreichbar, der Flughafen Zürich in unter einer Stunde.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Root",
        content: `Business-Transfers zum D4 Center und den umliegenden Firmensitzen dominieren unser Tagesgeschäft. Wir verstehen die Anforderungen: Pünktlichkeit, Diskretion, saubere Fahrzeuge.

Der Bahnhof Root D4 bietet S-Bahn-Verbindungen nach Luzern und Zug. Wir ergänzen diese Anbindung mit Zubringerdiensten zu den Bürogebäuden und Wohnquartieren.

Für Familien sind wir der flexible Partner im Alltag. Schulfahrten, Sportverein-Transfers, Wochenend-Ausflüge – Root hat kurze Wege, und wir machen sie noch kürzer.`,
        features: [
          "D4 Business Center Transfers",
          "Bahnhof Root D4 Anbindung",
          "Flughafen Zürich – ca. 40 Minuten",
          "Schulweg-Begleitung",
          "Verbindungen nach Luzern und Zug",
          "Firmenkonten für Unternehmen"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Root",
        content: `Der Wirtschaftsraum Root verlangt professionelle Standards. Unsere Fahrer kleiden sich angemessen, unsere Fahrzeuge entsprechen Business-Erwartungen.

Gleichzeitig bleiben wir erschwinglich. Root ist kein Finanzzentrum mit entsprechenden Preisen – unser Angebot respektiert das lokale Preisniveau.

Flexibilität definiert unseren Ansatz. Wenn ein Meeting länger dauert oder ein Flug Verspätung hat, passen wir uns an. Kommunikation läuft über WhatsApp, Telefon oder E-Mail – wie es Ihnen passt.`
      },
      
      gettingAround: {
        title: "Mobilität in Root",
        content: `Root liegt an der Achse Luzern-Zug, profitiert von der S-Bahn und der Autobahnanbindung. Für die letzte Meile – vom Bahnhof zum Büro, von der Haltestelle nach Hause – bleibt das Taxi die effizienteste Lösung.

Die Wohnquartiere verteilen sich um das Dorfzentrum und entlang der Zufahrtsstrassen. Nicht alle sind optimal an den öffentlichen Verkehr angebunden.

Nachbargemeinden wie Rotkreuz, Gisikon und Dierikon bilden eine zusammenhängende Wirtschaftsregion. Wir verbinden diese Orte nahtlos miteinander.`
      }
    },
    
    faq: [
      {
        question: "Bieten Sie Firmenkonten für D4-Unternehmen an?",
        answer: "Ja, viele Firmen im D4 Business Center haben Konten bei uns. Monatliche Sammelrechnung und Priority-Booking inklusive."
      },
      {
        question: "Wie schnell sind Sie in Root verfügbar?",
        answer: "In der Regel innerhalb von 10-15 Minuten. Für garantierte Verfügbarkeit empfehlen wir Vorausbuchung."
      },
      {
        question: "Fahren Sie auch nach Rotkreuz?",
        answer: "Selbstverständlich. Root und Rotkreuz sind eng verbunden, die Fahrt dauert nur wenige Minuten."
      },
      {
        question: "Sind Abendfahrten möglich?",
        answer: "Ja, wir sind 24/7 verfügbar, auch für späte Geschäftsessen oder Abendveranstaltungen."
      }
    ]
  },

  // GERSAU (German)
  "gersau": {
    lang: "de",
    seoTitle: "Taxi Gersau | Kleinste Republik & Seeidylle",
    metaDescription: "Taxi Gersau – Ihr Taxiservice in der ehemaligen kleinsten Republik. Seetransfers, Wanderwege, Flughafen. Nova Taxi.",
    heroTitle: "Taxiservice in Gersau",
    heroSubtitle: "Idyllisch am Vierwaldstättersee",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Gersau",
        content: `Gersau rühmt sich seiner Geschichte als kleinste Republik der Welt – über 400 Jahre war der Ort unabhängig. Heute zieht diese Seegemeinde Erholungssuchende mit ihrer geschützten Bucht und dem milden Klima an.

Nova Taxi bedient Gersau mit Verständnis für seine besondere Lage. Der Ort liegt abseits der Hauptverkehrsachsen, was Ruhe garantiert, aber auch flexible Mobilität erfordert.

Die Uferpromenade, die historischen Gebäude und der Blick auf die Mythen schaffen eine einzigartige Atmosphäre. Unsere Fahrer kennen jeden Winkel dieser Perle am Vierwaldstättersee.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Gersau",
        content: `Hoteltransfers für Feriengäste bilden einen wichtigen Teil unserer Gersauer Fahrten. Nach langer Anreise bringen wir Gäste direkt vom Flughafen oder Bahnhof in ihre Unterkunft.

Die Schiffstation verbindet Gersau mit Brunnen, Vitznau und Luzern. Wir koordinieren Anschlussfahrten für optimale Weiterreise.

Wanderer schätzen unseren Service zu Ausgangspunkten, die zu Fuss schwer erreichbar sind. Die Rigi-Südflanke bietet herrliche Routen, und wir bringen Sie hin.`,
        features: [
          "Ferienhotel Transfers",
          "Schiffstation Gersau Anbindung",
          "Wanderweg-Ausgangspunkte",
          "Flughafen Zürich – ca. 75 Minuten",
          "Verbindungen nach Brunnen und Schwyz",
          "Event-Fahrten zu Seefesten"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Gersau",
        content: `Gersau liegt abseits – das macht seinen Charme aus, erfordert aber verlässlichen Transport. Wir sind der lokale Partner, auf den Sie zählen können.

Die saisonalen Schwankungen des Tourismus kennen wir aus Erfahrung. Im Sommer verstärken wir unser Angebot, im Winter bleiben wir für die Einheimischen verfügbar.

Diskretion und Freundlichkeit prägen unseren Service. In einem Dorf, wo jeder jeden kennt, behandeln wir jeden Fahrgast respektvoll.`
      },
      
      gettingAround: {
        title: "Mobilität in Gersau",
        content: `Gersau ist nur über die Seestrasse oder das Schiff erreichbar. Diese abgeschiedene Lage bedeutet, dass individuelle Mobilität besonders wertvoll ist.

Der öffentliche Bus verkehrt zwischen Brunnen und Gersau, aber die Frequenz ist begrenzt. Für flexible Fahrten bleibt das Taxi die beste Wahl.

Die umliegenden Ausflugsziele – Rigi, Schwyz, Luzern – sind mit unserem Service bequem erreichbar. Wir verbinden die Seeidylle mit der weiteren Region.`
      }
    },
    
    faq: [
      {
        question: "Wie komme ich vom Flughafen Zürich nach Gersau?",
        answer: "Wir holen Sie am Flughafen ab. Die Fahrt dauert etwa 75 Minuten über Schwyz oder Brunnen."
      },
      {
        question: "Fahren Sie auch zur Schiffstation?",
        answer: "Ja, wir bringen Sie zur Schiffstation und koordinieren mit dem Fahrplan für optimale Anschlüsse."
      },
      {
        question: "Sind Sie auch im Winter verfügbar?",
        answer: "Selbstverständlich. Auch in der ruhigeren Jahreszeit sind wir rund um die Uhr erreichbar."
      },
      {
        question: "Kann ich ein Taxi für einen Ausflug nach Schwyz buchen?",
        answer: "Ja, wir bieten Tages- und Halbtagesausflüge in die Region zu Pauschalpreisen an."
      }
    ]
  },

  // EMMEN (German)
  "emmen": {
    lang: "de",
    seoTitle: "Taxi Emmen | Grösste Vorortsgemeinde Luzerns",
    metaDescription: "Taxi Emmen – Zuverlässiger Service in Luzerns grösster Vorortsgemeinde. Einkaufszentren, Gewerbe, Flughafen. Nova Taxi 24/7.",
    heroTitle: "Taxiservice in Emmen",
    heroSubtitle: "Dynamisch und vielfältig",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Emmen",
        content: `Emmen ist die grösste Gemeinde im Kanton Luzern – eine lebendige Mischung aus Wohnquartieren, Industrie und Gewerbe. Die Nähe zu Luzern macht den Ort für Pendler attraktiv, während die eigene Infrastruktur Selbstständigkeit garantiert.

Nova Taxi kennt Emmen in all seinen Facetten. Vom Emmen Center über die Industrie-quartiere bis zu den ruhigeren Wohnlagen – wir navigieren sicher durch diese vielfältige Gemeinde.

Die Verkehrslage ist strategisch: Autobahn, Buslinien und bald die verlängerte Stadtbahn verbinden Emmen mit der Region. Unser Taxi ergänzt diese Optionen für flexible, individuelle Mobilität.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Emmen",
        content: `Das Emmen Center zieht Shopper aus der ganzen Region an. Wir bieten Abhol- und Bringservice für entspanntes Einkaufen ohne Parkplatzstress.

Industriebetriebe und Gewerbezonen generieren regelmässigen Transportbedarf. Schichtarbeiter, Kunden, Lieferanten – wir bedienen die Wirtschaft von Emmen flexibel.

Für Familien sind wir der zuverlässige Partner im Alltag. Schulwege, Arztbesuche, Freizeitaktivitäten – Emmen hat kurze Wege, und wir machen sie noch bequemer.`,
        features: [
          "Emmen Center Shopping-Transfers",
          "Industrie- und Gewerbezonen Service",
          "Bahnhof Emmenbrücke Anbindung",
          "Flughafen Zürich – ca. 50 Minuten",
          "Luzern Innenstadt Verbindungen",
          "Schichtarbeiter-Fahrten"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Emmen",
        content: `Emmen ist eine Arbeitergemeinde mit praktischen Erwartungen. Unser Preis-Leistungs-Verhältnis entspricht diesem Anspruch – fair, transparent, zuverlässig.

Die Grösse der Gemeinde erfordert Ortskenntnis. Wir wissen, welche Quartiere wie heissen, wo Einbahnstrassen verlaufen und welche Abkürzungen funktionieren.

Flexibilität ist in Emmen gefragt. Schichtende um 22 Uhr, Einkauf im Center am Samstag, Sonntagsausflug – wir passen uns Ihrem Lebensrhythmus an.`
      },
      
      gettingAround: {
        title: "Mobilität in Emmen",
        content: `Emmen erstreckt sich über ein grosses Gebiet mit verschiedenen Ortsteilen. Emmenbrücke, Emmen Dorf, Rüeggisingen – jeder Teil hat eigenen Charakter und eigene Verkehrsanbindung.

Die Buslinien konzentrieren sich auf Hauptachsen. Für Quartiere abseits dieser Routen bietet unser Taxi die praktische Ergänzung.

Die geplante Stadtbahn-Verlängerung wird die Anbindung verbessern, aber die letzte Meile zu Wohnungen und Arbeitsplätzen bleibt Taxi-Territorium.`
      }
    },
    
    faq: [
      {
        question: "Fahren Sie zum Emmen Center?",
        answer: "Ja, wir bringen Sie hin und holen Sie mit Ihren Einkäufen wieder ab. Rufen Sie uns einfach, wenn Sie fertig sind."
      },
      {
        question: "Bieten Sie Fahrten für Schichtarbeiter an?",
        answer: "Selbstverständlich. Auch nachts und am Wochenende sind wir verfügbar für Industrie- und Gewerbemitarbeiter."
      },
      {
        question: "Wie teuer ist ein Taxi nach Luzern Bahnhof?",
        answer: "Je nach Abholort in Emmen etwa CHF 25-35. Für regelmässige Fahrten bieten wir Rabatte."
      },
      {
        question: "Kann ich Grosseinkäufe transportieren?",
        answer: "Ja, unsere Fahrzeuge haben Platz für Einkaufstaschen und sperrigere Artikel. Bei grossen Mengen Kombi vorbestellen."
      }
    ]
  },

  // WALCHWIL (German)
  "walchwil": {
    lang: "de",
    seoTitle: "Taxi Walchwil | Sonnenterrasse am Zugersee",
    metaDescription: "Taxi Walchwil – Ihr Taxiservice an der Sonnenterrasse. Kirschblüten, Wanderwege, Bahnhof-Transfers. Nova Taxi 24/7.",
    heroTitle: "Taxiservice in Walchwil",
    heroSubtitle: "Die Sonnenseite des Zugersees",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Walchwil",
        content: `Walchwil geniesst den Ruf als Sonnenterrasse am Zugersee. Die südexponierte Lage beschert dem Dorf überdurchschnittlich viele Sonnenstunden und ermöglicht den Anbau von Kirschen, die überregional bekannt sind.

Nova Taxi bedient diese idyllische Gemeinde mit dem Verständnis für ihre besondere Atmosphäre. Hier ticken die Uhren ruhiger, und unser Service passt sich diesem Tempo an – ohne Abstriche bei Zuverlässigkeit.

Die Lage zwischen Zug und Arth-Goldau macht Walchwil auch für Pendler attraktiv. Wir verbinden das beschauliche Dorfleben mit der Dynamik der Nachbarstädte.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Walchwil",
        content: `Der Bahnhof Walchwil an der Gotthardlinie bietet regelmässige Verbindungen. Wir ergänzen diese Anbindung mit Zubringerfahrten zu den Wohnquartieren, die sich den Hang hinauf erstrecken.

Wanderer schätzen unseren Service zu Ausgangspunkten am Zugerberg und zur Wildspitz. Nach der Tour holen wir müde, aber zufriedene Bergfreunde wieder ab.

Für Feste und Feiern – besonders während der Kirschblüte – organisieren wir Transfers zu den Restaurants und Höfen. Walchwil lebt von seiner Gastfreundschaft.`,
        features: [
          "Bahnhof Walchwil Zubringerdienste",
          "Zugerberg und Wildspitz Wandertransfers",
          "Kirschenhöfe und Restaurants",
          "Flughafen Zürich – ca. 45 Minuten",
          "Verbindungen nach Zug und Arth",
          "Seepromenade und Badeplätze"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Walchwil",
        content: `Walchwil ist ein Dorf, wo Qualität vor Quantität kommt. Unser Service entspricht diesem Anspruch – gepflegte Fahrzeuge, freundliche Fahrer, verlässliche Zeiten.

Die steilen Strassen und engen Kurven erfordern Erfahrung. Unsere Fahrer kennen jeden Meter der Walchwiler Topografie und navigieren sicher auch bei winterlichen Verhältnissen.

Persönliche Beziehungen zählen in einer kleinen Gemeinde. Viele Fahrgäste kennen wir mittlerweile, und diese Vertrautheit schätzen sie.`
      },
      
      gettingAround: {
        title: "Mobilität in Walchwil",
        content: `Walchwil erstreckt sich vom Seeufer steil hinauf zum Zugerberg. Diese Topografie bedeutet erhebliche Höhenunterschiede, die zu Fuss anstrengend sein können.

Der öffentliche Bus verkehrt zwischen Bahnhof und Dorf, aber die höheren Lagen sind schlecht erschlossen. Unser Taxi bringt Sie auch zu abgelegenen Adressen.

Die Nachbargemeinden Zug und Arth sind mit dem Zug schnell erreichbar. Für Ziele abseits der Bahnlinie – Ausflüge, Besuche, Einkäufe – bietet unser Service flexible Mobilität.`
      }
    },
    
    faq: [
      {
        question: "Fahren Sie auch in die oberen Quartiere von Walchwil?",
        answer: "Selbstverständlich. Wir bedienen alle Höhenlagen, auch die steilen Strassen zum Zugerberg hinauf."
      },
      {
        question: "Kann ich ein Taxi für eine Wanderung auf die Wildspitz buchen?",
        answer: "Ja, wir bringen Sie zum Ausgangspunkt und holen Sie nach der Tour an einem vereinbarten Punkt ab."
      },
      {
        question: "Wie weit ist es zum Flughafen Zürich?",
        answer: "Etwa 45 Minuten über die Autobahn A4. Wir empfehlen 2,5 Stunden Vorlauf für internationale Flüge."
      },
      {
        question: "Fahren Sie auch zur Kirschblüten-Zeit?",
        answer: "Besonders dann! Wir bringen Besucher zu den Höfen und Aussichtspunkten für das jährliche Spektakel."
      }
    ]
  },

  // UNTERÄGERI (German)
  "unteraegeri": {
    lang: "de",
    seoTitle: "Taxi Unterägeri | Ägerisee & Erholung",
    metaDescription: "Taxi Unterägeri – Ihr Partner am Ägerisee. Badeanstalten, Wanderwege, Skigebiete. Nova Taxi 24/7 verfügbar.",
    heroTitle: "Taxiservice in Unterägeri",
    heroSubtitle: "Erholung am Ägerisee",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Unterägeri",
        content: `Unterägeri liegt idyllisch am Ägerisee und zieht Erholungssuchende aus der ganzen Region an. Das klare Wasser, die umliegenden Wälder und die Ruhe abseits der Grossstädte machen den Ort zu einem beliebten Ausflugs- und Wohnziel.

Nova Taxi kennt Unterägeri von der Seepromenade bis zu den Höhenlagen Richtung Morgarten. Ob Badegäste im Sommer oder Skifahrer im Winter – wir transportieren Gäste das ganze Jahr.

Die Gemeinde verbindet Naturerlebnis mit guter Erreichbarkeit. Zug und der Flughafen Zürich sind in akzeptabler Zeit erreichbar, ohne dass man auf die Vorzüge des ländlichen Lebens verzichten muss.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Unterägeri",
        content: `Freizeittransfers prägen unser Unterägerer Geschäft. Im Sommer bringen wir Familien zu Strandbädern und Ausflugsrestaurants. Im Winter transportieren wir Skifahrer zum nahen Sattel-Hochstuckli.

Die Ägerital-Gemeinden – Unterägeri und Oberägeri – bilden einen zusammenhängenden Lebensraum. Wir verbinden beide Orte und die umliegenden Weiler miteinander.

Für Pendler nach Zug und darüber hinaus bieten wir zuverlässige Anschlussfahrten. Der Bus verkehrt regelmässig, aber für individuelle Zeiten bleibt das Taxi die flexible Alternative.`,
        features: [
          "Strandbad und Seepromenade Transfers",
          "Sattel-Hochstuckli Skigebiet",
          "Wanderweg-Ausgangspunkte",
          "Flughafen Zürich – ca. 40 Minuten",
          "Verbindungen nach Zug und Baar",
          "Morgarten Schlachtfeld Touren"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Unterägeri",
        content: `Unterägeri lebt von Erholung und Lebensqualität. Unser Service unterstützt diesen Anspruch – entspannte Fahrten, freundliche Fahrer, keine Hektik.

Die saisonalen Schwankungen zwischen Sommer und Winter kennen wir aus Erfahrung. Entsprechend passen wir unsere Verfügbarkeit an die jeweiligen Bedürfnisse an.

Familien mit Kindern schätzen unsere Flexibilität. Kindersitze, Platz für Sportausrüstung, geduldige Fahrer – wir machen Familienausflüge stressfrei.`
      },
      
      gettingAround: {
        title: "Mobilität in Unterägeri",
        content: `Unterägeri erstreckt sich rund um das Seeende und hinauf in die Hanglagen. Die Buslinie aus Zug erschliesst den Ortskern gut, aber abgelegenere Gebiete sind auf individuelle Mobilität angewiesen.

Die Strasse über den Sattel verbindet mit der Innerschweiz, kann im Winter aber anspruchsvoll sein. Unsere Fahrer kennen die Verhältnisse und fahren entsprechend vorsichtig.

Der Nachbarort Oberägeri und die Ausflugsziele rund um den See gehören zu unserem Einzugsgebiet. Wir verbinden das ganze Ägerital.`
      }
    },
    
    faq: [
      {
        question: "Fahren Sie auch zum Strandbad Unterägeri?",
        answer: "Ja, besonders im Sommer bringen wir viele Badegäste. Wir können auch zu einer vereinbarten Zeit abholen."
      },
      {
        question: "Bieten Sie Ski-Transfers zum Sattel an?",
        answer: "Selbstverständlich. Wir transportieren Skifahrer und Snowboarder inklusive Ausrüstung zum Sattel-Hochstuckli."
      },
      {
        question: "Wie weit ist es nach Zug?",
        answer: "Die Fahrt nach Zug dauert etwa 15-20 Minuten, je nach Verkehr und genauem Ziel."
      },
      {
        question: "Sind Sie auch in Oberägeri verfügbar?",
        answer: "Ja, das Ägerital ist unser Einzugsgebiet. Wir bedienen beide Gemeinden gleichermaßen."
      }
    ]
  },

  // KRIENS (German)
  "kriens": {
    lang: "de",
    seoTitle: "Taxi Kriens | Pilatus-Bahnen & Luzern-Anbindung",
    metaDescription: "Taxi Kriens – Ihr Taxiservice am Fusse des Pilatus. Pilatus-Bahnen, Luzern Stadt, Flughafentransfer. Nova Taxi 24/7.",
    heroTitle: "Taxiservice in Kriens",
    heroSubtitle: "Tor zum Pilatus",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Kriens",
        content: `Kriens liegt unmittelbar südlich von Luzern, am Fusse des majestätischen Pilatus. Die drittgrösste Gemeinde des Kantons verbindet städtische Infrastruktur mit direktem Bergzugang – eine Kombination, die Bewohner und Besucher gleichermassen schätzen.

Nova Taxi kennt Kriens von der Pilatusstrasse bis zu den Höhenlagen bei Obernau. Wir bringen Touristen zu den Bergbahnen und Einheimische zu ihren Alltagszielen.

Die Nähe zu Luzern macht Kriens zu einer attraktiven Wohngemeinde. Viele arbeiten in der Stadt und schätzen die kurzen Wege – per Bus, Tram oder eben mit unserem Taxi.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Kriens",
        content: `Die Pilatus-Bahnen starten in Kriens. Wir bringen Ausflügler zur Talstation der Panorama-Gondelbahn und koordinieren Rückholungen nach dem Bergerlebnis. Der Golden Round Trip – Gondel, Zahnradbahn, Schiff – beginnt oft mit einer Taxifahrt.

Für die Krienser Bevölkerung sind wir der flexible Partner im Alltag. Einkäufe im Pilatusmarkt, Arztbesuche, Schulwege – die Wege in Kriens sind oft zu lang zum Gehen, aber zu kurz für komplizierte ÖV-Verbindungen.

Geschäftskunden schätzen unsere Zuverlässigkeit. Meetings in Luzern, Flughafentransfers, Kundenbesuche – wir unterstützen die Wirtschaft von Kriens.`,
        features: [
          "Pilatus-Bahnen Talstation Transfers",
          "Golden Round Trip Koordination",
          "Pilatusmarkt Shopping-Service",
          "Flughafen Zürich – ca. 55 Minuten",
          "Luzern Innenstadt Verbindungen",
          "Schulweg und Kinderbetreuung"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Kriens",
        content: `Kriens ist eine Gemeinde mit praktischen Ansprüchen. Unser Service entspricht dem – zuverlässig, fair bepreist, ohne unnötigen Luxus aber mit solidem Standard.

Die Pilatus-Touristen erwarten professionellen Service. Wir sprechen Englisch, kennen die Fahrpläne der Bergbahnen und geben gerne Tipps für das Bergerlebnis.

Für Einheimische sind wir der vertraute Partner. Viele Fahrgäste kennen wir seit Jahren, und diese Beziehung prägt unseren freundlich-persönlichen Umgang.`
      },
      
      gettingAround: {
        title: "Mobilität in Kriens",
        content: `Kriens hat sich von der Industriegemeinde zum vielfältigen Vorort gewandelt. Die Zentrumsüberbauung, Wohnquartiere und Gewerbegebiete erzeugen vielfältige Mobilitätsbedürfnisse.

Die neue Stadtbahn verbessert die Anbindung an Luzern deutlich. Für Ziele abseits der Tramachse bleibt unser Taxi die flexible Ergänzung.

Die Hanglage Richtung Pilatus bedeutet Höhenunterschiede, die besonders für ältere Personen herausfordernd sein können. Wir bringen Sie bequem zu jeder Adresse.`
      }
    },
    
    faq: [
      {
        question: "Wie komme ich zur Pilatus-Gondelbahn?",
        answer: "Wir bringen Sie direkt zur Talstation in Kriens. Die Fahrt vom Krienser Zentrum dauert etwa 5 Minuten."
      },
      {
        question: "Fahren Sie auch nach Luzern?",
        answer: "Selbstverständlich. Die Fahrt nach Luzern Bahnhof dauert etwa 10-15 Minuten, je nach Verkehr."
      },
      {
        question: "Bieten Sie Familienfahrten an?",
        answer: "Ja, mit Kindersitzen auf Anfrage. Wir bringen Familien sicher zu Ausflugszielen und Freizeitaktivitäten."
      },
      {
        question: "Wie weit ist es zum Flughafen Zürich?",
        answer: "Etwa 55 Minuten über die Autobahn. Wir empfehlen 2,5 Stunden Vorlauf für internationale Flüge."
      }
    ]
  },

  // CHAM (German)
  "cham": {
    lang: "de",
    seoTitle: "Taxi Cham | Zugersee & Papieri-Areal",
    metaDescription: "Taxi Cham – Zuverlässiger Service am Zugersee. Papieri-Areal, Hirsgarten, Flughafentransfer. Nova Taxi 24/7.",
    heroTitle: "Taxiservice in Cham",
    heroSubtitle: "Modern leben am Zugersee",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Cham",
        content: `Cham hat sich vom Industriestandort zur attraktiven Wohngemeinde gewandelt. Das Papieri-Areal symbolisiert diese Transformation – wo einst Papier produziert wurde, entstanden moderne Wohnungen, Büros und Restaurants direkt am Zugersee.

Nova Taxi begleitet diesen Wandel. Wir transportieren Bewohner der neuen Quartiere genauso wie alteingesessene Chamerinnen und Chamer. Diese Mischung macht unseren Service vielfältig.

Die Lage am Zugersee und die gute Verbindung nach Zug, Luzern und Zürich machen Cham für Familien und Berufstätige attraktiv. Unser Taxi ergänzt die Mobilität für alle Lebenssituationen.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Cham",
        content: `Das Papieri-Areal mit seinen Restaurants und Veranstaltungen generiert regelmässigen Transportbedarf. Wir bringen Gäste zum Abendessen und holen sie nach dem letzten Drink wieder ab.

Für Pendler bieten wir Bahnhof-Zubringerfahrten. Die S-Bahn verbindet Cham mit Zug und Zürich, aber der Weg von zu Hause zum Bahnhof ist oft zu weit für den Fussmarsch.

Der Hirsgarten und die Seepromenade ziehen Erholungssuchende an. Wir bringen Familien zum Picknick und Senioren zum Spaziergang – Cham hat viel Grün zu bieten.`,
        features: [
          "Papieri-Areal Restaurant-Transfers",
          "Bahnhof Cham Zubringerdienste",
          "Zugersee Strandbad Fahrten",
          "Flughafen Zürich – ca. 35 Minuten",
          "Hirsgarten und Parks",
          "Einkaufszentrum Zugerland"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Cham",
        content: `Cham hat sich verjüngt und modernisiert. Unser Service entspricht diesem neuen Cham – digital buchbar, zuverlässig, mit zeitgemässem Standard.

Die Seelage schafft besondere Atmosphäre. Wir fahren nicht nur von A nach B, sondern geniessen mit unseren Fahrgästen manchmal den Blick auf den Zugersee – wenn die Zeit es erlaubt.

Familien bilden einen wichtigen Teil unserer Kundschaft. Kindersitze, Geduld bei längeren Einsteigezeiten, Verständnis für Kinderlärm – wir sind familienfreundlich unterwegs.`
      },
      
      gettingAround: {
        title: "Mobilität in Cham",
        content: `Cham erstreckt sich vom Seeufer über das Zentrum bis zu den Höhenlagen Richtung Lindencham und Hünenberg. Diese Ausdehnung bedeutet erhebliche Distanzen zwischen den Quartieren.

Die Buslinien konzentrieren sich auf Hauptachsen. Für Adressen abseits dieser Routen bietet unser Taxi die flexible Ergänzung.

Die Nachbarorte Hünenberg, Steinhausen und Zug gehören zum erweiterten Lebensraum der Chamer Bevölkerung. Wir verbinden diese Gemeinden nahtlos.`
      }
    },
    
    faq: [
      {
        question: "Fahren Sie auch ins Papieri-Areal?",
        answer: "Ja, das Papieri ist ein beliebtes Ziel. Wir bringen Sie zu Restaurants und Events und holen Sie später wieder ab."
      },
      {
        question: "Wie weit ist es zum Flughafen Zürich?",
        answer: "Etwa 35 Minuten über die Autobahn A4. Cham liegt verkehrsgünstig mit schnellem Flughafenzugang."
      },
      {
        question: "Bieten Sie Transfers zum Zugersee an?",
        answer: "Ja, wir bringen Badegäste und Spaziergänger zur Seepromenade und zum Strandbad."
      },
      {
        question: "Sind Kindersitze verfügbar?",
        answer: "Ja, wir haben Kindersitze verschiedener Grössen. Bitte bei der Buchung angeben."
      }
    ]
  },

  // STEINHAUSEN (German)
  "steinhausen": {
    lang: "de",
    seoTitle: "Taxi Steinhausen | Kleinste Gemeinde, grosser Service",
    metaDescription: "Taxi Steinhausen – Ihr lokaler Taxiservice zwischen Zug und Cham. Bahnhof, Einkauf, Alltag. Nova Taxi 24/7.",
    heroTitle: "Taxiservice in Steinhausen",
    heroSubtitle: "Klein, aber zentral gelegen",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Steinhausen",
        content: `Steinhausen ist flächenmässig die kleinste politische Gemeinde der Schweiz – aber ihre zentrale Lage zwischen Zug und Cham macht sie zu einem attraktiven Wohn- und Arbeitsort.

Nova Taxi bedient Steinhausen mit der Aufmerksamkeit, die auch eine kleine Gemeinde verdient. Hier kennt man sich, und persönlicher Service ist keine Floskel sondern gelebte Praxis.

Die kompakte Grösse täuscht: Steinhausen hat Einkaufsmöglichkeiten, Gewerbe und eine gute Verkehrsanbindung. Unser Taxi ergänzt diese Infrastruktur für individuelle Mobilitätswünsche.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Steinhausen",
        content: `Bahnhof-Transfers bilden einen Schwerpunkt. Die S-Bahn-Station verbindet Steinhausen mit Zug und Zürich, aber der Weg dorthin ist für manche Quartiere umständlich.

Einkaufsfahrten zum nahegelegenen Zugerland Center in Steinhausen und Umgebung gehören zum Alltag. Wir bringen Sie hin und helfen beim Verstauen der Taschen.

Für ältere Bewohner sind wir oft der zuverlässige Begleiter zu Arztterminen und sozialen Anlässen. Persönliche Betreuung zählt in einer kleinen Gemeinde.`,
        features: [
          "Bahnhof Steinhausen Zubringerfahrten",
          "Zugerland Shopping-Transfers",
          "Arzt- und Therapiebegleitung",
          "Flughafen Zürich – ca. 30 Minuten",
          "Verbindungen nach Zug und Cham",
          "Alltagsbesorgungen und Seniorenservice"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Steinhausen",
        content: `In einer kleinen Gemeinde zählt persönlicher Service besonders. Wir kennen viele Fahrgäste mit Namen und wissen, welche Unterstützung sie benötigen.

Die zentrale Lage Steinhausens bedeutet kurze Wege in alle Richtungen. Ob nach Zug, Cham oder zum Flughafen – von hier aus geht es schnell.

Zuverlässigkeit ist unser Versprechen. In einer Gemeinde, wo Verspätungen auffallen und besprochen werden, können wir uns keine Unzuverlässigkeit leisten.`
      },
      
      gettingAround: {
        title: "Mobilität in Steinhausen",
        content: `Steinhausen liegt eingeklemmt zwischen Zug und Cham, profitiert aber gerade von dieser Sandwich-Position. Beide Zentren sind in Minuten erreichbar.

Die S-Bahn und Buslinien bieten gute Grundversorgung. Für individuelle Fahrten ausserhalb der Fahrplanzeiten oder zu Zielen abseits der Haltestellen springen wir ein.

Die kurzen Distanzen innerhalb der Gemeinde machen manche Fahrten zu Mini-Trips. Das ist kein Problem – auch kurze Strecken fahren wir gerne und zu fairen Preisen.`
      }
    },
    
    faq: [
      {
        question: "Wie weit ist es zum Flughafen Zürich?",
        answer: "Nur etwa 30 Minuten – Steinhausen liegt verkehrsgünstig für Flugreisende."
      },
      {
        question: "Fahren Sie auch für kurze Strecken innerhalb Steinhausen?",
        answer: "Selbstverständlich. Gerade für ältere oder mobilitätseingeschränkte Personen sind auch kurze Fahrten sinnvoll."
      },
      {
        question: "Bieten Sie regelmässige Arztfahrten an?",
        answer: "Ja, wir organisieren Serien von medizinischen Terminen mit persönlicher Betreuung."
      },
      {
        question: "Kann ich zum Zugerland Center gebracht werden?",
        answer: "Ja, Einkaufsfahrten sind ein häufiger Service. Wir helfen auch beim Ein- und Ausladen."
      }
    ]
  },

  // BRUNNEN (German)
  "brunnen": {
    lang: "de",
    seoTitle: "Taxi Brunnen | Urnersee & Rütli-Transfers",
    metaDescription: "Taxi Brunnen – Ihr Taxiservice am Urnersee. Schiffstation, Rütli, Flughafentransfer. Nova Taxi 24/7 verfügbar.",
    heroTitle: "Taxiservice in Brunnen",
    heroSubtitle: "Herz der Innerschweiz",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Brunnen",
        content: `Brunnen liegt spektakulär am Urnersee, dem südlichsten Arm des Vierwaldstättersees. Der Blick auf die Urner Alpen, die historische Bedeutung als Tor zur Innerschweiz und die lebendige Tourismus-Tradition machen den Ort einzigartig.

Nova Taxi kennt Brunnen aus täglicher Erfahrung. Wir bringen Touristen zur Schiffstation für die Fahrt zum Rütli, transportieren Geschäftsreisende zum Bahnhof und begleiten Einheimische durch den Alltag.

Die Gemeinde Ingenbohl-Brunnen verbindet den touristischen Kern Brunnen mit den ruhigeren Wohngebieten von Ingenbohl. Unser Service deckt beide Teile ab.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Brunnen",
        content: `Die Schifffahrt auf dem Vierwaldstättersee startet oft in Brunnen. Wir koordinieren Transfers mit Schiffsabfahrten, besonders für die populäre Fahrt zum Rütli – der Wiege der Eidgenossenschaft.

Hotels und Restaurants am Seequai generieren regelmässigen Transportbedarf. Wir holen Hotelgäste vom Flughafen ab und bringen Restaurantbesucher nach dem Abendessen sicher nach Hause.

Der Bahnhof Brunnen bietet Anschluss an die Gotthardlinie. Für Reisende, die den Zug verpassen oder einen Transfer zu Unterkünften benötigen, stehen wir bereit.`,
        features: [
          "Schiffstation Brunnen Transfers",
          "Rütli und Urnersee Ausflüge",
          "Gotthardlinie Bahnhof-Service",
          "Flughafen Zürich – ca. 65 Minuten",
          "Axenstrasse Panoramafahrten",
          "Hotel und Restaurant Service"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Brunnen",
        content: `Brunnen lebt vom Tourismus, und wir verstehen die Erwartungen internationaler Gäste. Englisch-sprechende Fahrer, Wissen über lokale Sehenswürdigkeiten und ein Gespür für Service sind selbstverständlich.

Die dramatische Landschaft verdient angemessene Wertschätzung. Wenn ein Fahrgast beim Blick auf die Urner Alpen verweilen möchte, geben wir gerne ein paar Minuten extra.

Für Einheimische bleiben wir der verlässliche Nachbar. Die Touristen kommen und gehen, aber Brunnen bleibt unser Zuhause, und entsprechend sorgfältig pflegen wir diese Beziehungen.`
      },
      
      gettingAround: {
        title: "Mobilität in Brunnen",
        content: `Brunnen liegt an der Axenstrasse, einer der schönsten und spektakulärsten Verkehrswege der Schweiz. Diese Strasse verbindet die Zentralschweiz mit dem Kanton Uri und dem Gotthardpass.

Die Gemeinde erstreckt sich vom touristischen Seequai bis zu den Wohngebieten von Ingenbohl. Diese Zweiteilung erfordert flexible Mobilität zwischen verschiedenen Welten.

Die Schiffverbindungen sind saisonal unterschiedlich getaktet. Wir kennen die Fahrpläne und können Transfers optimal koordinieren, auch in der Nebensaison.`
      }
    },
    
    faq: [
      {
        question: "Fahren Sie auch zum Rütli?",
        answer: "Wir bringen Sie zur Schiffstation in Brunnen für die Fahrt zum Rütli. Das Rütli selbst ist nur per Schiff erreichbar."
      },
      {
        question: "Wie lange dauert die Fahrt zum Flughafen Zürich?",
        answer: "Etwa 65 Minuten über die Autobahn A4. Wir empfehlen 3 Stunden Vorlauf für internationale Flüge."
      },
      {
        question: "Bieten Sie Panoramafahrten auf der Axenstrasse an?",
        answer: "Ja, für Touristen organisieren wir Fahrten entlang dieser spektakulären Route. Auf Wunsch mit Fotostopps."
      },
      {
        question: "Sind Sie auch im Winter verfügbar?",
        answer: "Ja, ganzjährig 24/7. Im Winter ist die Nachfrage geringer, aber wir bleiben zuverlässig erreichbar."
      }
    ]
  },

  // SURSEE (German)
  "sursee": {
    lang: "de",
    seoTitle: "Taxi Sursee | Sempachersee & Luzerner Hinterland",
    metaDescription: "Taxi Sursee – Ihr Taxiservice im Luzerner Hinterland. Altstadt, Sempachersee, Bahnhof. Nova Taxi 24/7.",
    heroTitle: "Taxiservice in Sursee",
    heroSubtitle: "Historisches Zentrum des Luzerner Hinterlands",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Sursee",
        content: `Sursee ist die heimliche Hauptstadt des Luzerner Hinterlands. Die historische Altstadt, der nahegelegene Sempachersee und die Funktion als regionales Zentrum machen den Ort zu einem attraktiven Lebens- und Wirtschaftsraum.

Nova Taxi kennt Sursee und die umliegende Region. Wir bringen Geschäftsleute zu Terminen, Familien zu Ausflugszielen und Einheimische durch den Alltag.

Die Stadt hat regionale Bedeutung: Spital, Berufsschulen, Einkaufsmöglichkeiten und Behörden ziehen Menschen aus dem ganzen Hinterland an. Unser Taxi erleichtert diese Wege.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Sursee",
        content: `Der Bahnhof Sursee ist ein wichtiger Verkehrsknotenpunkt. Wir bieten Zubringerfahrten für Pendler und Reisende, die von hier aus nach Luzern, Olten oder weiter fahren.

Der Sempachersee mit seinen Badeplätzen und Restaurants zieht Erholungssuchende an. Wir bringen Familien zum Schwimmen und Paare zum romantischen Abendessen.

Für die Wirtschaft der Region sind wir ein flexibler Partner. Kundenbesuche, Messefahrten, Flughafentransfers – die Unternehmen in Sursee schätzen unsere Zuverlässigkeit.`,
        features: [
          "Bahnhof Sursee Zubringerdienste",
          "Sempachersee Freizeitfahrten",
          "Altstadt und Veranstaltungen",
          "Flughafen Zürich – ca. 60 Minuten",
          "Spital und Arztbesuche",
          "Regionaler Wirtschaftsverkehr"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Sursee",
        content: `Sursee ist eine Stadt mit ländlichem Charakter. Unser Service passt zu dieser Mischung – professionell genug für geschäftliche Anforderungen, persönlich genug für nachbarschaftliche Beziehungen.

Die regionale Funktion von Sursee bedeutet Vielfalt: Wir fahren Patienten zum Spital, Lehrlinge zur Berufsschule und Touristen in die Altstadt. Diese Bandbreite meistern wir mit Erfahrung.

Pünktlichkeit ist im ländlichen Raum genauso wichtig wie in der Stadt. Wenn Ihr Zug um 7:15 fährt, sind wir um 7:00 vor Ihrer Tür – garantiert.`
      },
      
      gettingAround: {
        title: "Mobilität in Sursee",
        content: `Sursee liegt zentral im Luzerner Hinterland, aber die Distanzen zu umliegenden Orten sind grösser als im Ballungsraum Luzern. Unser Taxi überbrückt diese Distanzen komfortabel.

Der öffentliche Verkehr konzentriert sich auf die Bahnlinie und regionale Busverbindungen. Für Ziele abseits dieser Achsen bleibt das Taxi die flexible Alternative.

Die Nachbarstädte und -gemeinden – Sempach, Schenkon, Oberkirch, Triengen – gehören zum Einzugsgebiet von Sursee. Wir verbinden diese Orte mit dem regionalen Zentrum.`
      }
    },
    
    faq: [
      {
        question: "Wie weit ist es von Sursee zum Flughafen Zürich?",
        answer: "Etwa 60 Minuten über die Autobahn. Sursee liegt etwas weiter vom Flughafen als die Stadt Luzern."
      },
      {
        question: "Fahren Sie auch zum Sempachersee?",
        answer: "Ja, besonders im Sommer bringen wir viele Badegäste. Auch Restaurants am See sind beliebte Ziele."
      },
      {
        question: "Bieten Sie Transfers zum Kantonsspital an?",
        answer: "Selbstverständlich. Spitalfahrten sind ein wichtiger Teil unseres Service, inklusive Begleitung bei Bedarf."
      },
      {
        question: "Sind Sie auch abends und am Wochenende verfügbar?",
        answer: "Ja, wir sind 24/7 erreichbar, auch für Abendveranstaltungen und Wochenend-Ausflüge."
      }
    ]
  },

  // ADLIGENSWIL (German)
  "adligenswil": {
    lang: "de",
    seoTitle: "Taxi Adligenswil | Familienfreundlich & zentral",
    metaDescription: "Taxi Adligenswil – Ihr lokaler Taxiservice über Luzern. Familien, Pendler, Alltag. Nova Taxi 24/7 verfügbar.",
    heroTitle: "Taxiservice in Adligenswil",
    heroSubtitle: "Ruhig wohnen, gut verbunden sein",
    
    sections: {
      intro: {
        title: "Zuverlässiges Taxi in Adligenswil",
        content: `Adligenswil liegt erhöht über Luzern und bietet das Beste aus zwei Welten: ländliche Ruhe und städtische Nähe. Die familienfreundliche Gemeinde zieht Menschen an, die dem Stadttumult entfliehen, ohne auf gute Verbindungen zu verzichten.

Nova Taxi kennt Adligenswil von der Dorfstrasse bis zu den Weilern. Wir bringen Berufstätige zur Arbeit, Kinder zur Schule und Familien zu gemeinsamen Unternehmungen.

Die Hanglage über Luzern bedeutet Aussicht, aber auch Höhenunterschiede. Für ältere Personen oder bei schlechtem Wetter ist unser Taxi die komfortable Alternative zum steilen Fussweg.`
      },
      
      services: {
        title: "Unsere Dienstleistungen in Adligenswil",
        content: `Pendlerfahrten nach Luzern dominieren die Morgen- und Abendstunden. Die Busverbindung ist gut, aber wenn der Bus gerade weg ist oder die Zeit drängt, springen wir ein.

Für Familien sind wir der flexible Helfer im Alltag. Kinderbetreuung-Fahrten, Sportverein-Transfers, Grosselternbesuche – Adligenswil hat aktive Familien mit vielfältigen Mobilitätsbedürfnissen.

Der Flughafen Zürich ist in unter einer Stunde erreichbar. Für Ferienreisen und Geschäftsflüge bieten wir zuverlässige Transfers direkt ab Haustür.`,
        features: [
          "Pendlerfahrten nach Luzern",
          "Kinderbetreuung und Schulwege",
          "Flughafen Zürich – ca. 55 Minuten",
          "Einkaufsfahrten nach Luzern",
          "Seniorenbegleitung",
          "Wochenendausflüge"
        ]
      },
      
      whyUs: {
        title: "Warum Nova Taxi in Adligenswil",
        content: `Adligenswil ist eine Gemeinde, wo man sich kennt. Unser Service passt zu dieser Atmosphäre – persönlich, zuverlässig, mit Verständnis für lokale Bedürfnisse.

Familien schätzen unsere Flexibilität und Geduld. Kindersitze sind selbstverständlich, und wenn das Einsteigen mit Kleinkindern etwas länger dauert, bleibt unser Fahrer gelassen.

Die Senioren der Gemeinde vertrauen uns bei Arztfahrten und sozialen Anlässen. Hilfe beim Ein- und Aussteigen, Tragen von Taschen, Begleitung zum Wartezimmer – Service über das Fahren hinaus.`
      },
      
      gettingAround: {
        title: "Mobilität in Adligenswil",
        content: `Adligenswil erstreckt sich über hügeliges Terrain mit zerstreuten Weilern und Einzelhöfen. Diese Struktur macht individuelle Mobilität besonders wertvoll.

Die Busverbindung nach Luzern ist praktisch, aber die Taktfrequenz begrenzt. Für spontane Fahrten oder ungünstige Zeiten ist das Taxi die schnellere Wahl.

Die Nachbargemeinden Meggen, Udligenswil und Meierskappel bilden einen zusammenhängenden ländlichen Raum. Wir verbinden diese Orte untereinander und mit dem Zentrum Luzern.`
      }
    },
    
    faq: [
      {
        question: "Wie teuer ist ein Taxi von Adligenswil nach Luzern?",
        answer: "Je nach genauem Abholort etwa CHF 25-35. Für regelmässige Fahrten bieten wir Rabatte an."
      },
      {
        question: "Fahren Sie auch zu den Weilern ausserhalb des Dorfkerns?",
        answer: "Selbstverständlich. Wir bedienen die gesamte Gemeinde, auch abgelegene Adressen."
      },
      {
        question: "Haben Sie Kindersitze?",
        answer: "Ja, wir haben Kindersitze verschiedener Grössen. Bitte bei der Buchung Alter und Anzahl der Kinder angeben."
      },
      {
        question: "Kann ich regelmässige Schulfahrten buchen?",
        answer: "Ja, wir organisieren Schulweg-Begleitung mit zuverlässigen Fahrern. Kontaktieren Sie uns für ein Angebot."
      }
    ]
  }
};

// Strip the lang field that was on the original entries (we now use nested structure)
function stripLang(obj) {
  const result = {};
  for (const [slug, content] of Object.entries(obj)) {
    const { lang, ...rest } = content;
    result[slug] = rest;
  }
  return result;
}

const enAll = { ...stripLang(enOriginal), ...enExtras };
const deAll = { ...deSchwyz, ...deLuzern, ...deZug };

// Merge into nested per-slug structure: { slug: { de, en } }
const allSlugs = new Set([...Object.keys(deAll), ...Object.keys(enAll)]);
export const cityContent = {};
for (const slug of allSlugs) {
  cityContent[slug] = {
    de: deAll[slug] || null,
    en: enAll[slug] || null
  };
}

export default cityContent;

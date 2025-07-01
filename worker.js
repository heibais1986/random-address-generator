// Country coordinates data
const countryCoordinates = {
    "US": [{ lat: 37.7749, lng: -122.4194 }, { lat: 34.0522, lng: -118.2437 }],
    "UK": [{ lat: 51.5074, lng: -0.1278 }, { lat: 53.4808, lng: -2.2426 }],
    "FR": [{ lat: 48.8566, lng: 2.3522 }, { lat: 45.7640, lng: 4.8357 }],
    "DE": [{ lat: 52.5200, lng: 13.4050 }, { lat: 48.1351, lng: 11.5820 }],
    "CN": [{ lat: 39.9042, lng: 116.4074 }, { lat: 31.2304, lng: 121.4737 }],
    "TW": [{ lat: 25.0330, lng: 121.5654 }, { lat: 22.6273, lng: 120.3014 }],
    "HK": [{ lat: 22.3193, lng: 114.1694 },{ lat: 22.3964, lng: 114.1095 }],
    "JP": [{ lat: 35.6895, lng: 139.6917 }, { lat: 34.6937, lng: 135.5023 }],
    "IN": [{ lat: 28.6139, lng: 77.2090 }, { lat: 19.0760, lng: 72.8777 }],
    "AU": [{ lat: -33.8688, lng: 151.2093 }, { lat: -37.8136, lng: 144.9631 }],
    "BR": [{ lat: -23.5505, lng: -46.6333 }, { lat: -22.9068, lng: -43.1729 }],
    "CA": [{ lat: 43.651070, lng: -79.347015 }, { lat: 45.501690, lng: -73.567253 }],
    "RU": [{ lat: 55.7558, lng: 37.6173 }, { lat: 59.9343, lng: 30.3351 }],
    "ZA": [{ lat: -33.9249, lng: 18.4241 }, { lat: -26.2041, lng: 28.0473 }],
    "MX": [{ lat: 19.4326, lng: -99.1332 }, { lat: 20.6597, lng: -103.3496 }],
    "KR": [{ lat: 37.5665, lng: 126.9780 }, { lat: 35.1796, lng: 129.0756 }],
    "IT": [{ lat: 41.9028, lng: 12.4964 }, { lat: 45.4642, lng: 9.1900 }],
    "ES": [{ lat: 40.4168, lng: -3.7038 }, { lat: 41.3851, lng: 2.1734 }],
    "TR": [{ lat: 41.0082, lng: 28.9784 }, { lat: 39.9334, lng: 32.8597 }],
    "SA": [{ lat: 24.7136, lng: 46.6753 }, { lat: 21.3891, lng: 39.8579 }],
    "AR": [{ lat: -34.6037, lng: -58.3816 }, { lat: -31.4201, lng: -64.1888 }],
    "EG": [{ lat: 30.0444, lng: 31.2357 }, { lat: 31.2156, lng: 29.9553 }],
    "NG": [{ lat: 6.5244, lng: 3.3792 }, { lat: 9.0579, lng: 7.4951 }],
    "ID": [{ lat: -6.2088, lng: 106.8456 }, { lat: -7.7956, lng: 110.3695 }]
};

// Names data
const namesByCountry = {
    "CN": {
        first: ["Li", "Wang", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Xu", "Sun", "Ma", "Zhu", "Hu", "Guo", "He", "Gao", "Lin", "Zheng"],
        last: ["Wei", "Fang", "Na", "Xiuying", "Min", "Jing", "Li", "Qiang", "Lei", "Jun", "Yang", "Yong", "Yan", "Jie", "Tao", "Ming", "Chao", "Xiulan", "Xia", "Ping"]
    },
    "JP": {
        first: ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato"],
        last: ["Shota", "Ren", "Hina", "Yui", "Hiroto", "Sota", "Yota", "Misaki", "Nanami", "Yuto"]
    },
    "KR": {
        first: ["Kim", "Lee", "Park", "Choi", "Jung", "Kang", "Jo", "Yoon", "Jang", "Lim"],
        last: ["Minjun", "Seojun", "Doyun", "Jiho", "Jihun", "Seoyeon", "Seoyun", "Jiwoo", "Seohyun", "Minseo"]
    },
    "TW": {
        first: ["Chen", "Lin", "Huang", "Chang", "Lee", "Wang", "Wu", "Liu", "Tsai", "Yang"],
        last: ["Zhiming", "Jianhong", "Junjie", "Yijun", "Shufen", "Meiling", "Yating", "Jiahao", "Zhihao", "Shuhui"]
    },
    "HK": {
        first: ["Chan", "Lee", "Wong", "Cheung", "Lau", "Wang", "Ng", "Cheng", "Leung", "Ho"],
        last: ["Chiming", "Kayan", "Junjie", "Wingsze", "Kaming", "Meiling", "Kahao", "Winger", "Chihao", "Shukfan"]
    },
    "US": {
        first: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"],
        last: ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Christopher"]
    },
    "UK": {
        first: ["Smith", "Jones", "Williams", "Taylor", "Brown", "Davies", "Evans", "Wilson", "Thomas", "Roberts"],
        last: ["Oliver", "Jack", "Harry", "George", "Noah", "Charlie", "Jacob", "Oscar", "William", "Leo"]
    },
    "FR": {
        first: ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau"],
        last: ["Lucas", "Louis", "Gabriel", "Arthur", "Jules", "Hugo", "Leo", "Adam", "Raphael", "Paul"]
    },
    "DE": {
        first: ["Mueller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann"],
        last: ["Ben", "Paul", "Leon", "Noah", "Luis", "Finn", "Felix", "Jonas", "Maximilian", "Henry"]
    },
    "IT": {
        first: ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana", "Conti", "Esposito"],
        last: ["Leonardo", "Francesco", "Alessandro", "Lorenzo", "Matteo", "Andrea", "Gabriele", "Marco", "Antonio", "Giuseppe"]
    },
    "ES": {
        first: ["Garcia", "Rodriguez", "Gonzalez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Martin", "Gomez"],
        last: ["Antonio", "Jose", "Manuel", "Francisco", "David", "Juan", "Miguel", "Javier", "Rafael", "Carlos"]
    },
    "BR": {
        first: ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes"],
        last: ["Miguel", "Arthur", "Heitor", "Pedro", "Davi", "Gabriel", "Bernardo", "Lucas", "Matheus", "Rafael"]
    },
    "RU": {
        first: ["Ivanov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Petrov", "Sokolov", "Mikhailov", "Fedorov", "Morozov"],
        last: ["Alexander", "Dmitry", "Maxim", "Ivan", "Andrey", "Mikhail", "Artem", "Daniel", "Roman", "Sergey"]
    },
    "IN": {
        first: ["Kumar", "Singh", "Sharma", "Patel", "Gupta", "Shah", "Verma", "Rao", "Reddy", "Joshi"],
        last: ["Aarav", "Vihaan", "Vivaan", "Aditya", "Arjun", "Reyansh", "Ayaan", "Sai", "Krishna", "Ishaan"]
    },
    "AU": {
        first: ["Smith", "Jones", "Williams", "Brown", "Wilson", "Taylor", "Johnson", "White", "Anderson", "Thompson"],
        last: ["Oliver", "William", "Jack", "Noah", "Thomas", "James", "Lucas", "Henry", "Ethan", "Alexander"]
    },
    "CA": {
        first: ["Smith", "Brown", "Tremblay", "Martin", "Roy", "Wilson", "MacDonald", "Taylor", "Campbell", "Anderson"],
        last: ["Liam", "Noah", "Oliver", "William", "James", "Benjamin", "Lucas", "Henry", "Theodore", "Jack"]
    },
    "MX": {
        first: ["Garcia", "Rodriguez", "Martinez", "Lopez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres", "Flores"],
        last: ["Santiago", "Mateo", "Sebastian", "Leonardo", "Diego", "Daniel", "Gabriel", "Adrian", "David", "Alexander"]
    },
    "TR": {
        first: ["Yilmaz", "Kaya", "Demir", "Sahin", "Celik", "Yildiz", "Erdogan", "Ozturk", "Aydin", "Ozdemir"],
        last: ["Yusuf", "Eymen", "Ömer", "Mustafa", "Ali", "Mehmet", "Ahmet", "Emir", "Hamza", "Ibrahim"]
    },
    "SA": {
        first: ["Al-Saud", "Al-Sheikh", "Al-Rashid", "Al-Qahtani", "Al-Ghamdi", "Al-Zahrani", "Al-Dossari", "Al-Shammari", "Al-Otaibi", "Al-Harbi"],
        last: ["Mohammed", "Abdullah", "Ahmed", "Ali", "Omar", "Ibrahim", "Khalid", "Hassan", "Fahad", "Abdul"]
    },
    "AR": {
        first: ["Gonzalez", "Rodriguez", "Garcia", "Fernandez", "Lopez", "Martinez", "Perez", "Romero", "Sanchez", "Diaz"],
        last: ["Mateo", "Thiago", "Benjamin", "Valentino", "Santiago", "Juan", "Lucas", "Martin", "Nicolas", "Joaquin"]
    },
    "EG": {
        first: ["Mohamed", "Ahmed", "Mahmoud", "Ibrahim", "Ali", "Hassan", "Hussein", "Mostafa", "Kamal", "Samir"],
        last: ["Omar", "Youssef", "Adam", "Malik", "Zain", "Hamza", "Kareem", "Hassan", "Ali", "Ibrahim"]
    },
    "NG": {
        first: ["Okafor", "Adebayo", "Okonkwo", "Eze", "Oluwaseun", "Adegoke", "Afolabi", "Ogunleye", "Adeniyi", "Adesina"],
        last: ["Oluwadamilare", "Oluwatobiloba", "Ayomide", "Temitope", "Oluwaseun", "Adebayo", "Chibuike", "Chisom", "Chidi", "Obinna"]
    },
    "ID": {
        first: ["Wijaya", "Kusuma", "Suryanto", "Halim", "Santoso", "Tanaka", "Wibowo", "Susanto", "Hidayat", "Putra"],
        last: ["Muhammad", "Ahmad", "Abdul", "Aditya", "Budi", "Dimas", "Eko", "Fajar", "Gading", "Hadi"]
    },
    "ZA": {
        first: ["Nkosi", "Van der Merwe", "Botha", "Mkhize", "Khumalo", "Pretorius", "Venter", "Ndlovu", "Fourie", "Nel"],
        last: ["Bandile", "Themba", "Sipho", "Thabo", "Jabu", "Mandla", "Blessing", "Gift", "Lucky", "Precious"]
    }
};

// Phone number format configuration
const phoneFormats = {
    "US": {
        format: "+1 (XXX) XXX-XXXX",
        areaCodeRanges: [[201, 989]]
    },
    "CN": {
        format: "+86 1XX-XXXX-XXXX",
        mobilePrefix: ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "50", "51", "52", "53", "55", "56", "57", "58", "59", "66", "70", "71", "72", "73", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89"]
    },
    "JP": {
        format: "+81 XX-XXXX-XXXX",
        mobilePrefix: ["70", "80", "90"]
    },
    "KR": {
        format: "+82 10-XXXX-XXXX"
    },
    "UK": {
        format: "+44 7XXX XXXXXX",
        mobilePrefix: ["7"]
    },
    "FR": {
        format: "+33 6 XX XX XX XX",
        mobilePrefix: ["6", "7"]
    },
    "DE": {
        format: "+49 15X XXXXXXXX",
        mobilePrefix: ["15", "16", "17"]
    },
    "TW": {
        format: "+886 9XX-XXX-XXX"
    },
    "HK": {
        format: "+852 XXXX XXXX",
        mobilePrefix: ["5", "6", "9"]
    },
    "AU": {
        format: "+61 4XX XXX XXX",
        mobilePrefix: ["4"]
    },
    "CA": {
        format: "+1 (XXX) XXX-XXXX",
        areaCodeRanges: [[204, 989]]
    },
    "MX": {
        format: "+52 1XX XXX XXXX"
    },
    "TR": {
        format: "+90 5XX XXX XXXX",
        mobilePrefix: ["5"]
    },
    "SA": {
        format: "+966 5XX XXX XXXX",
        mobilePrefix: ["5"]
    },
    "AR": {
        format: "+54 9XX XXXX-XXXX"
    },
    "EG": {
        format: "+20 1XX XXX XXXX",
        mobilePrefix: ["1"]
    },
    "NG": {
        format: "+234 8XX XXX XXXX",
        mobilePrefix: ["7", "8", "9"]
    },
    "ID": {
        format: "+62 8XX-XXXX-XXXX",
        mobilePrefix: ["8"]
    },
    "ZA": {
        format: "+27 8X XXX XXXX",
        mobilePrefix: ["6", "7", "8"]
    }
};

// Utility functions
function getRandomLocation(country) {
    const coordsArray = countryCoordinates[country];
    const randomCity = coordsArray[Math.floor(Math.random() * coordsArray.length)];
    const lat = randomCity.lat + (Math.random() - 0.5) * 0.1;
    const lng = randomCity.lng + (Math.random() - 0.5) * 0.1;
    return { lat, lng };
}

function getRandomName(country) {
    if (!namesByCountry[country]) {
        return null;
    }
    const names = namesByCountry[country];
    const firstName = names.first[Math.floor(Math.random() * names.first.length)];
    const lastName = names.last[Math.floor(Math.random() * names.last.length)];
    return `${firstName} ${lastName}`;
}

function generateAreaCode(ranges) {
    const range = ranges[Math.floor(Math.random() * ranges.length)];
    const [min, max] = range;
    return Math.floor(min + Math.random() * (max - min + 1));
}

function getRandomPhoneNumber(country) {
    const format = phoneFormats[country] || phoneFormats["US"];
    let phone = format.format;

    if (format.areaCodeRanges) {
        const areaCode = generateAreaCode(format.areaCodeRanges);
        phone = phone.replace("XXX", areaCode);
        phone = phone.replace(/X/g, () => Math.floor(Math.random() * 10));
    } else if (format.mobilePrefix) {
        const prefix = format.mobilePrefix[Math.floor(Math.random() * format.mobilePrefix.length)];
        // Replace prefix first
        if (prefix.length === 2) {
            phone = phone.replace(/XX/, prefix);
        } else {
            phone = phone.replace(/X/, prefix);
        }
        // Then replace remaining X's
        phone = phone.replace(/X/g, () => Math.floor(Math.random() * 10));
    } else {
        phone = phone.replace(/X/g, () => Math.floor(Math.random() * 10));
    }
    return phone;
}

function generateRandomPostcode(country) {
    const postcodeFormats = {
        "US": () => Math.floor(10000 + Math.random() * 90000).toString(),
        "UK": () => {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const first = letters[Math.floor(Math.random() * letters.length)];
            const second = letters[Math.floor(Math.random() * letters.length)];
            const num1 = Math.floor(1 + Math.random() * 9);
            const num2 = Math.floor(1 + Math.random() * 9);
            const third = letters[Math.floor(Math.random() * letters.length)];
            const fourth = letters[Math.floor(Math.random() * letters.length)];
            return `${first}${second}${num1} ${num2}${third}${fourth}`;
        },
        "CA": () => {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const first = letters[Math.floor(Math.random() * letters.length)];
            const num1 = Math.floor(Math.random() * 10);
            const second = letters[Math.floor(Math.random() * letters.length)];
            const num2 = Math.floor(Math.random() * 10);
            const third = letters[Math.floor(Math.random() * letters.length)];
            const num3 = Math.floor(Math.random() * 10);
            return `${first}${num1}${second} ${num2}${third}${num3}`;
        },
        "CN": () => Math.floor(100000 + Math.random() * 900000).toString(),
        "JP": () => `${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
        "FR": () => Math.floor(10000 + Math.random() * 90000).toString(),
        "DE": () => Math.floor(10000 + Math.random() * 90000).toString(),
        "AU": () => Math.floor(1000 + Math.random() * 9000).toString(),
        "BR": () => `${Math.floor(10000 + Math.random() * 90000)}-${Math.floor(100 + Math.random() * 900)}`
    };
    
    return postcodeFormats[country] ? postcodeFormats[country]() : Math.floor(10000 + Math.random() * 90000).toString();
}

function isValidAddress(data) {
    if (!data || !data.address) {
        return false;
    }
    
    // Check necessary address components
    const hasHouseNumber = data.address.house_number || data.address.building_number;
    const hasRoad = data.address.road || data.address.street;
    const hasCity = data.address.city || data.address.town || data.address.locality;
    
    return hasHouseNumber && hasRoad && hasCity;
}

// CORS headers for handling requests
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// HTML template
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Address Generator</title>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3914969090265698" crossorigin="anonymous"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'gradient': 'gradient 15s ease infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s ease-in-out infinite',
                        'slide-up': 'slideUp 0.5s ease-out',
                        'fade-in': 'fadeIn 0.8s ease-out',
                    },
                    keyframes: {
                        gradient: {
                            '0%, 100%': {
                                'background-size': '400% 400%',
                                'background-position': '0% 50%'
                            },
                            '50%': {
                                'background-size': '400% 400%',
                                'background-position': '100% 50%'
                            }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(20px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' }
                        },
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' }
                        }
                    },
                    colors: {
                        primary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                        },
                        accent: {
                            50: '#fdf4ff',
                            100: '#fae8ff',
                            200: '#f5d0fe',
                            300: '#f0abfc',
                            400: '#e879f9',
                            500: '#d946ef',
                            600: '#c026d3',
                            700: '#a21caf',
                            800: '#86198f',
                            900: '#701a75',
                        }
                    }
                }
            }
        }
    </script>
    <script defer src="https://umami.selenium39.me/script.js" data-website-id="ee29c4be-deb2-401f-968e-b15807b92f2d"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-800 min-h-screen font-['Inter'] relative overflow-x-hidden">
    <!-- Background Decorations -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-200/20 to-primary-300/20 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-100/20 to-accent-100/20 rounded-full blur-2xl animate-float"></div>
    </div>

    <!-- Header -->
    <header class="relative bg-gradient-to-r from-slate-900 via-primary-900 to-slate-900 animate-gradient shadow-2xl backdrop-blur-sm border-b border-white/10">
        <div class="max-w-6xl mx-auto px-6 py-8">
            <!-- Centered Logo and Title -->
            <div class="flex flex-col items-center justify-center text-center">
                <div class="flex items-center gap-4 animate-fade-in mb-4">
                    <div class="relative">
                        <svg width="56" height="56" viewBox="0 0 48 48" class="transform hover:scale-110 transition-all duration-300 animate-float">
                            <defs>
                                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#38bdf8;stop-opacity:1" />
                                    <stop offset="50%" style="stop-color:#0ea5e9;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#0369a1;stop-opacity:1" />
                                </linearGradient>
                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                    <feMerge> 
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                                <filter id="shadow">
                                    <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0369a1" flood-opacity="0.3"/>
                                </filter>
                            </defs>
                            
                            <!-- Main map marker -->
                            <path d="M24 4C16.268 4 10 10.268 10 18c0 9.5 14 22 14 22s14-12.5 14-22c0-7.732-6.268-14-14-14z" 
                                  fill="url(#logoGradient)" 
                                  filter="url(#shadow)"/>
                            
                            <!-- Inner circle -->
                            <circle cx="24" cy="18" r="6" fill="white" opacity="0.95" filter="url(#glow)"/>
                            <circle cx="24" cy="18" r="3" fill="url(#logoGradient)" opacity="0.8"/>
                            
                            <!-- Random elements - optimized small circles -->
                            <circle cx="15" cy="10" r="2.5" fill="#fbbf24" opacity="0.9" filter="url(#glow)">
                                <animate attributeName="opacity" values="0.9;0.4;0.9" dur="3s" repeatCount="indefinite"/>
                                <animate attributeName="r" values="2.5;3;2.5" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="33" cy="12" r="2" fill="#10b981" opacity="0.9" filter="url(#glow)">
                                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite"/>
                                <animate attributeName="r" values="2;2.5;2" dur="2.5s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="37" cy="28" r="1.8" fill="#f59e0b" opacity="0.8" filter="url(#glow)">
                                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="4s" repeatCount="indefinite"/>
                            </circle>
                            
                            <!-- Enhanced data flow lines -->
                            <path d="M8 38 Q16 34 24 38 Q32 42 40 38" 
                                  stroke="url(#logoGradient)" 
                                  stroke-width="2.5" 
                                  fill="none" 
                                  opacity="0.7"
                                  stroke-dasharray="6,3"
                                  filter="url(#glow)">
                                <animate attributeName="stroke-dashoffset" values="0;-18" dur="2s" repeatCount="indefinite"/>
                            </path>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-4xl font-bold bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                            Random Address Generator
                        </h1>
                    </div>
                </div>
                <p class="text-primary-200 text-sm mt-3 font-medium tracking-wide mb-3">Generate realistic addresses worldwide</p>
                
                <!-- GitHub Link - Small and centered -->
                <div class="animate-fade-in" style="animation-delay: 0.3s;">
                    <a href="https://github.com/Selenium39/random-address-generator" target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 text-white hover:text-primary-100 shadow-md hover:shadow-lg group text-xs">
                        <svg class="w-4 h-4 transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span class="font-medium">View on GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="relative container mx-auto px-6 py-12 max-w-7xl">
        <!-- Loading Animation -->
        <div id="loading" class="hidden fixed inset-0 bg-slate-900/20 backdrop-blur-md flex items-center justify-center z-50">
            <div class="bg-white/95 backdrop-blur-sm rounded-3xl p-12 flex flex-col items-center shadow-2xl border border-white/20">
                <div class="relative">
                    <div class="animate-spin rounded-full h-20 w-20 border-4 border-primary-200"></div>
                    <div class="animate-spin rounded-full h-20 w-20 border-t-4 border-primary-500 absolute top-0"></div>
                </div>
                <div class="text-slate-700 text-xl font-semibold mt-6 animate-pulse">Generating address...</div>
                <div class="text-slate-500 text-sm mt-2">Please wait a moment</div>
            </div>
        </div>

        <div id="copied" class="hidden fixed top-6 right-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-2xl shadow-2xl z-50 transform transition-all duration-500 border border-white/20">
            <div class="flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="font-semibold">Copied to clipboard!</span>
            </div>
        </div>

        <!-- Country Selection -->
        <div class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 mb-12 animate-slide-up">
            <div class="flex flex-col lg:flex-row items-center gap-6">
                <div class="flex-1 w-full">
                    <label for="country" class="block text-slate-700 font-bold text-lg mb-3 flex items-center gap-2">
                        <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Select Country/Region
                    </label>
                    <select id="country" 
                            onchange="changeCountry(this.value)" 
                            class="w-full bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-4 text-slate-700 text-lg font-medium focus:ring-4 focus:ring-primary-200 focus:border-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                    </select>
                </div>
                <button onclick="generateNewAddress(document.getElementById('country').value)" 
                        class="px-8 py-4 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-primary-200 focus:ring-opacity-50 shadow-xl border border-primary-400/20 whitespace-nowrap">
                    <div class="flex items-center gap-3">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                        Generate New Address
                    </div>
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <!-- Left Panel -->
            <div class="space-y-8 animate-slide-up" style="animation-delay: 0.2s;">
                <!-- Information Card -->
                <div class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 h-[600px] flex flex-col">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-slate-700">Personal Information</h2>
                    </div>
                    <div class="space-y-5 flex-1 overflow-hidden">
                        <div class="group bg-gradient-to-r from-slate-50 to-blue-50/50 p-5 rounded-2xl cursor-pointer hover:from-primary-50 hover:to-primary-100/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-slate-200/50" 
                             onclick="copyToClipboard(document.getElementById('name').textContent)">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="p-2 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors">
                                        <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <strong class="text-slate-600 font-semibold text-sm uppercase tracking-wide">Name</strong>
                                        <div id="name" class="text-slate-800 font-bold text-lg mt-1">Loading...</div>
                                    </div>
                                </div>
                                <svg class="w-5 h-5 text-slate-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="group bg-gradient-to-r from-slate-50 to-blue-50/50 p-5 rounded-2xl cursor-pointer hover:from-primary-50 hover:to-primary-100/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-slate-200/50" 
                             onclick="copyToClipboard(document.getElementById('gender').textContent)">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="p-2 bg-accent-100 rounded-xl group-hover:bg-accent-200 transition-colors">
                                        <svg class="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <strong class="text-slate-600 font-semibold text-sm uppercase tracking-wide">Gender</strong>
                                        <div id="gender" class="text-slate-800 font-bold text-lg mt-1">Loading...</div>
                                    </div>
                                </div>
                                <svg class="w-5 h-5 text-slate-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="group bg-gradient-to-r from-slate-50 to-blue-50/50 p-5 rounded-2xl cursor-pointer hover:from-primary-50 hover:to-primary-100/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-slate-200/50" 
                             onclick="copyToClipboard(document.getElementById('phone').textContent)">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="p-2 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors">
                                        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <strong class="text-slate-600 font-semibold text-sm uppercase tracking-wide">Phone</strong>
                                        <div id="phone" class="text-slate-800 font-bold text-lg mt-1">Loading...</div>
                                    </div>
                                </div>
                                <svg class="w-5 h-5 text-slate-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="group bg-gradient-to-r from-slate-50 to-blue-50/50 p-5 rounded-2xl cursor-pointer hover:from-primary-50 hover:to-primary-100/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-slate-200/50" 
                             onclick="copyToClipboard(document.getElementById('address').textContent)">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="p-2 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                                        <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <strong class="text-slate-600 font-semibold text-sm uppercase tracking-wide">Address</strong>
                                        <div id="address" class="text-slate-800 font-bold text-base mt-1 break-words overflow-wrap-anywhere leading-relaxed">Loading...</div>
                                    </div>
                                </div>
                                <svg class="w-5 h-5 text-slate-400 group-hover:text-primary-500 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Combined Action Section -->
                <div class="h-[600px] flex flex-col space-y-6">
                    <!-- Save Button -->
                    <button onclick="saveAddress()" 
                            class="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white font-bold text-lg py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-emerald-200 focus:ring-opacity-50 shadow-xl border border-emerald-400/20">
                        <div class="flex items-center justify-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                            </svg>
                            Save Address
                        </div>
                    </button>

                    <!-- TempMail Promotion Card -->
                    <div class="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-3xl p-6 border border-blue-200/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] flex-1 flex flex-col justify-center">
                        <div class="flex items-start gap-4">
                            <div class="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex-shrink-0">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-lg font-bold text-slate-800 mb-2">Need a Temporary Email?</h3>
                                <p class="text-slate-600 text-sm mb-4 leading-relaxed">Perfect for signing up with your new address! Get instant disposable email addresses to protect your privacy.</p>
                                <a href="https://chat-tempmail.com" target="_blank" rel="noopener noreferrer"
                                   class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                    Get Free Temp Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Panel -->
            <div class="space-y-8 animate-slide-up" style="animation-delay: 0.4s;">
                <!-- Map -->
                <div class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 h-[600px] flex flex-col">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-slate-700">Map Preview</h2>
                    </div>
                    <div class="relative flex-1">
                        <iframe id="map" class="w-full h-full rounded-2xl border-2 border-slate-200 shadow-lg"></iframe>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl pointer-events-none"></div>
                    </div>
                </div>

                <!-- Featured Service Card -->
                <div class="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-lg rounded-3xl p-8 border border-purple-200/30 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] h-[600px] flex flex-col justify-center">
                    <div class="text-center">
                        <div class="inline-flex p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl shadow-xl mb-6">
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-800 mb-4">Complete Your Privacy Setup</h3>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            You've got the address, now get a temporary email to go with it! Perfect for account registrations, online shopping, and protecting your real identity.
                        </p>
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center justify-center gap-3 text-slate-700">
                                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span class="text-sm font-medium">Instant email generation</span>
                            </div>
                            <div class="flex items-center justify-center gap-3 text-slate-700">
                                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span class="text-sm font-medium">No registration required</span>
                            </div>
                            <div class="flex items-center justify-center gap-3 text-slate-700">
                                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span class="text-sm font-medium">100% free service</span>
                            </div>
                        </div>
                        <a href="https://chat-tempmail.com" target="_blank" rel="noopener noreferrer"
                           class="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 hover:from-purple-600 hover:via-indigo-700 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            Get Temp Email Now
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Saved Addresses Table -->
        <div class="mt-16 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 animate-slide-up" style="animation-delay: 0.6s;">
            <div class="flex items-center gap-3 mb-8">
                <div class="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2m0 0V9a2 2 0 012-2m0 0V7a2 2 0 012-2h12a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                </div>
                <h2 class="text-2xl font-bold text-slate-700">Saved Addresses</h2>
            </div>
            <div class="overflow-x-auto">
                <div class="min-w-full">
                    <div class="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-2xl overflow-hidden shadow-xl">
                        <table class="w-full" id="savedAddressesTable">
                            <thead>
                                <tr class="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white">
                                    <th class="p-6 text-left font-bold text-sm uppercase tracking-wider">
                                        <div class="flex items-center gap-2">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                            Name
                                        </div>
                                    </th>
                                    <th class="p-6 text-left font-bold text-sm uppercase tracking-wider">
                                        <div class="flex items-center gap-2">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                            </svg>
                                            Gender
                                        </div>
                                    </th>
                                    <th class="p-6 text-left font-bold text-sm uppercase tracking-wider">
                                        <div class="flex items-center gap-2">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                            Phone
                                        </div>
                                    </th>
                                    <th class="p-6 text-left font-bold text-sm uppercase tracking-wider">
                                        <div class="flex items-center gap-2">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            Address
                                        </div>
                                    </th>
                                    <th class="p-6 text-left font-bold text-sm uppercase tracking-wider">
                                        <div class="flex items-center gap-2">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                            </svg>
                                            Notes
                                        </div>
                                    </th>
                                    <th class="p-6 text-left font-bold text-sm uppercase tracking-wider">
                                        <div class="flex items-center gap-2">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                            </svg>
                                            Actions
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white/95 backdrop-blur-sm divide-y divide-slate-200"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="relative mt-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 border-t border-slate-700/50">
        <div class="max-w-6xl mx-auto px-6 text-center">
            <div class="flex items-center justify-center gap-3 mb-6">
                <div class="p-2 bg-primary-500/20 rounded-xl">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <span class="text-lg font-semibold text-slate-300">Random Address Generator</span>
            </div>
            
            <p class="text-slate-400 text-sm mb-6">
                © <span id="currentYear"></span> <a href="https://chat-tempmail.com" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 font-semibold transition-colors">ChatTempMail</a>. All rights reserved.
            </p>
        </div>
    </footer>

    <script>
        // Country data
        const countries = [
            { name: "United States", code: "US" },
            { name: "United Kingdom", code: "UK" },
            { name: "France", code: "FR" },
            { name: "Germany", code: "DE" },
            { name: "China", code: "CN" },
            { name: "Taiwan", code: "TW" },
            { name: "Hong Kong", code: "HK" },
            { name: "Japan", code: "JP" },
            { name: "India", code: "IN" },
            { name: "Australia", code: "AU" },
            { name: "Brazil", code: "BR" },
            { name: "Canada", code: "CA" },
            { name: "Russia", code: "RU" },
            { name: "South Africa", code: "ZA" },
            { name: "Mexico", code: "MX" },
            { name: "South Korea", code: "KR" },
            { name: "Italy", code: "IT" },
            { name: "Spain", code: "ES" },
            { name: "Turkey", code: "TR" },
            { name: "Saudi Arabia", code: "SA" },
            { name: "Argentina", code: "AR" },
            { name: "Egypt", code: "EG" },
            { name: "Nigeria", code: "NG" },
            { name: "Indonesia", code: "ID" }
        ];

        // Initialize country selection dropdown
        function initCountrySelect() {
            const select = document.getElementById('country');
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code;
                option.textContent = country.name;
                select.appendChild(option);
            });
        }

        // Copy to clipboard
        function copyToClipboard(text) {
            if (!text || text.trim() === '' || text === 'Loading...') {
                showMessage('No content to copy', 'error');
                return;
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    showMessage('Copied to clipboard!', 'success');
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                    fallbackCopyTextToClipboard(text);
                });
            } else {
                fallbackCopyTextToClipboard(text);
            }
        }

        // Fallback copy method for older browsers
        function fallbackCopyTextToClipboard(text) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    showMessage('Copied to clipboard!', 'success');
                } else {
                    showMessage('Failed to copy', 'error');
                }
            } catch (err) {
                console.error('Fallback: Could not copy text: ', err);
                showMessage('Copy not supported', 'error');
            }
            
            document.body.removeChild(textArea);
        }

        // Show message function
        function showMessage(message, type = 'success') {
            const messageDiv = document.getElementById('copied');
            const messageText = messageDiv.querySelector('span');
            
            // Update message text
            messageText.textContent = message;
            
            // Update colors based on type
            if (type === 'error') {
                messageDiv.className = 'fixed top-6 right-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl shadow-2xl z-50 transform transition-all duration-500 border border-white/20';
            } else {
                messageDiv.className = 'fixed top-6 right-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-2xl shadow-2xl z-50 transform transition-all duration-500 border border-white/20';
            }
            
            // Show message
            messageDiv.classList.remove('hidden');
            messageDiv.classList.add('translate-y-0');
            messageDiv.classList.remove('translate-y-[-100%]');
            
            // Hide message after delay
            setTimeout(() => {
                messageDiv.classList.add('translate-y-[-100%]');
                messageDiv.classList.remove('translate-y-0');
                setTimeout(() => {
                    messageDiv.classList.add('hidden');
                }, 300);
            }, 2000);
        }

        // Show/hide loading animation
        function toggleLoading(show) {
            const loading = document.getElementById('loading');
            if (show) {
                loading.classList.remove('hidden');
            } else {
                loading.classList.add('hidden');
            }
        }

        // Change country
        function changeCountry(country) {
            toggleLoading(true);
            generateNewAddress(country);
        }

        // Save address
        function saveAddress() {
            const note = prompt('Enter a note (optional):') || '';
            const savedAddresses = JSON.parse(localStorage.getItem('savedAddresses') || '[]');
            const newEntry = {
                note: note,
                name: document.getElementById('name').textContent,
                gender: document.getElementById('gender').textContent,
                phone: document.getElementById('phone').textContent,
                address: document.getElementById('address').textContent
            };
            savedAddresses.push(newEntry);
            localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
            renderSavedAddresses();
        }

        // Render saved addresses
        function renderSavedAddresses() {
            const savedAddresses = JSON.parse(localStorage.getItem('savedAddresses') || '[]');
            const tbody = document.querySelector('#savedAddressesTable tbody');
            tbody.innerHTML = '';
            
            savedAddresses.forEach((entry, index) => {
                const row = tbody.insertRow();
                row.className = 'hover:bg-slate-50/80 transition-all duration-300 border-b border-slate-100 last:border-b-0';
                
                const cells = ['name', 'gender', 'phone', 'address', 'note', ''];
                cells.forEach((cell, i) => {
                    const td = row.insertCell();
                    td.className = 'p-6 text-slate-700 font-medium';
                    
                    if (i === cells.length - 1) {
                        const deleteBtn = document.createElement('button');
                        deleteBtn.innerHTML = '<div class="flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>Delete</div>';
                        deleteBtn.className = 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-red-200 focus:ring-opacity-50 shadow-lg hover:shadow-xl text-sm font-semibold';
                        deleteBtn.onclick = () => {
                            if (confirm('Are you sure you want to delete this record?')) {
                                savedAddresses.splice(index, 1);
                                localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
                                renderSavedAddresses();
                            }
                        };
                        td.appendChild(deleteBtn);
                    } else {
                        td.textContent = entry[cell];
                        if (cell === 'address') {
                            td.className += ' max-w-xs break-words';
                        }
                    }
                });
            });
        }

        // Generate new address
        async function generateNewAddress(country) {
            if (!country) {
                country = document.getElementById('country').value;
            }
            toggleLoading(true);
            
            try {
                const response = await fetch(\`\${window.location.href}api?country=\${country}\`);
                const data = await response.json();
                
                if (data.error) {
                    alert(data.error);
                    return;
                }
                
                document.getElementById('name').textContent = data.name;
                document.getElementById('gender').textContent = data.gender;
                document.getElementById('phone').textContent = data.phone;
                document.getElementById('address').textContent = data.address;
                
                // Update map
                document.getElementById('map').src = \`https://www.google.com/maps?q=\${encodeURIComponent(data.address)}&output=embed\`;
            } catch (error) {
                console.error('Error fetching address:', error);
                alert('Error occurred while fetching address, please try again');
            } finally {
                toggleLoading(false);
            }
        }

        // Initialize when page loads
        window.onload = function() {
            initCountrySelect();
            generateNewAddress();
            renderSavedAddresses();
            
            // Set current year in footer
            document.getElementById('currentYear').textContent = new Date().getFullYear();
        };
    </script>
</body>
</html>`;

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle API requests
    if (path === '/api') {
        // Original API handling logic
        return handleApiRequest(request);
    }

    // Handle root path requests, return HTML page
    return new Response(htmlContent, {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            ...corsHeaders
        }
    });
}

// Move original handling logic to separate function
async function handleApiRequest(request) {
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            headers: corsHeaders
        });
    }

    if (request.method !== 'GET') {
        return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(request.url);
    const country = url.searchParams.get('country') || 'US';

    if (!countryCoordinates[country]) {
        return new Response(JSON.stringify({
            error: 'Invalid country code'
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
            }
        });
    }

    let attempts = 0;
    const maxAttempts = 20;
    
    while (attempts < maxAttempts) {
        try {
            const location = getRandomLocation(country);
            // Use BigDataCloud API (free, no API key required, good stability)
            const bigDataCloudUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.lng}&localityLanguage=en`;
11            
            const response = await fetch(bigDataCloudUrl);
            const bigDataResult = await response.json();
            
            let data = null;
            if (bigDataResult && (bigDataResult.locality || bigDataResult.city)) {
                // Generate random house number
                const houseNumber = Math.floor(Math.random() * 9999) + 1;
                
                // Build road name
                const roadNames = ['Main St', 'Oak Ave', 'Pine Rd', 'Elm St', 'Maple Ave', 'Cedar Ln', 'Park Ave', 'First St', 'Second St', 'Third Ave'];
                const randomRoad = roadNames[Math.floor(Math.random() * roadNames.length)];
                
                data = {
                    address: {
                        house_number: houseNumber,
                        road: randomRoad,
                        city: bigDataResult.city || bigDataResult.locality,
                        postcode: bigDataResult.postcode || generateRandomPostcode(country),
                        country: bigDataResult.countryName || country
                    }
                };
            }
            
            if (isValidAddress(data)) {
                let city = data.address.city || data.address.town || data.address.locality || '';
                city = city.split(';')[0].trim();
                
                const houseNumber = data.address.house_number || data.address.building_number;
                const road = data.address.road || data.address.street;
                const postcode = data.address.postcode || data.address.postal_code || '';
                
                const address = `${houseNumber} ${road}, ${city}, ${postcode}, ${country}`.replace(/\s+/g, ' ').trim();
                
                const name = getRandomName(country);
                const gender = Math.random() > 0.5 ? 'Male' : 'Female';
                const phone = getRandomPhoneNumber(country);
                
                const result = {
                    name,
                    gender,
                    phone,
                    address,
                    coordinates: {
                        lat: location.lat,
                        lng: location.lng
                    }
                };
                
                return new Response(JSON.stringify(result), {
                    headers: {
                        'Content-Type': 'application/json',
                        ...corsHeaders
                    }
                });
            }
            
            // If all APIs fail, generate a basic address
            if (!data || !isValidAddress(data)) {
                console.log('All APIs failed, generating fallback address');
                
                const fallbackAddresses = {
                    "US": ["123 Main Street, New York, NY 10001", "456 Oak Avenue, Los Angeles, CA 90210", "789 Pine Road, Chicago, IL 60601"],
                    "CN": ["No.1 Jianguomenwai Avenue, Chaoyang District, Beijing 100004", "No.1000 Lujiazui Ring Road, Pudong New Area, Shanghai 200120", "No.85 Huacheng Avenue, Zhujiang New Town, Tianhe District, Guangzhou 510623"],
                    "UK": ["10 Downing Street, London SW1A 2AA", "221B Baker Street, London NW1 6XE", "1 Abbey Road, London NW8 9AY"],
                    "JP": ["1-1-1 Shibuya, Shibuya City, Tokyo 150-0002", "1-1-1 Umeda, Kita Ward, Osaka 530-0001", "1-1 Karasuma-dori, Nakagyo Ward, Kyoto 604-8005"],
                    "FR": ["1 Rue de la Paix, 75001 Paris", "10 Avenue des Champs-Élysées, 75008 Paris", "5 Place Vendôme, 75001 Paris"],
                    "DE": ["Unter den Linden 1, 10117 Berlin", "Maximilianstraße 1, 80539 München", "Königsallee 1, 40212 Düsseldorf"],
                    "TW": ["No.1 Zhongshan South Road, Zhongzheng District, Taipei City 100", "No.200 Minsheng East Road, Songshan District, Taipei City 105", "No.85 Zhonghua Road, Xinxing District, Kaohsiung City 800"],
                    "HK": ["1 Central Plaza, Wan Chai, Hong Kong", "2 International Finance Centre, Central, Hong Kong", "3 Garden Road, Central, Hong Kong"],
                    "KR": ["1 Sejong-daero, Jung-gu, Seoul 04524", "2 Haeundae-gu, Busan 48099", "3 Junggu-ro, Jung-gu, Incheon 22382"],
                    "IN": ["1 Connaught Place, New Delhi 110001", "2 Marine Drive, Mumbai 400020", "3 Brigade Road, Bangalore 560001"],
                    "AU": ["1 George Street, Sydney NSW 2000", "2 Collins Street, Melbourne VIC 3000", "3 Queen Street, Brisbane QLD 4000"],
                    "BR": ["Avenida Paulista 1000, São Paulo SP 01310-100", "Rua Copacabana 500, Rio de Janeiro RJ 22070-011", "Rua da Praia 200, Porto Alegre RS 90010-001"],
                    "CA": ["1 Yonge Street, Toronto ON M5E 1W7", "2 Rue Sainte-Catherine, Montreal QC H3B 1A7", "3 Granville Street, Vancouver BC V6C 1T1"],
                    "RU": ["1 Red Square, Moscow 109012", "2 Nevsky Prospect, Saint Petersburg 191186", "3 Lenin Avenue, Novosibirsk 630007"],
                    "ZA": ["1 Adderley Street, Cape Town 8001", "2 Sandton Drive, Johannesburg 2196", "3 Smith Street, Durban 4001"],
                    "MX": ["Avenida Reforma 1, Ciudad de México 06600", "Avenida Juárez 2, Guadalajara 44100", "Boulevard Díaz Ordaz 3, Tijuana 22320"],
                    "IT": ["Via del Corso 1, 00186 Roma", "Via Montenapoleone 2, 20121 Milano", "Via dei Calzaiuoli 3, 50122 Firenze"],
                    "ES": ["Calle Gran Vía 1, 28013 Madrid", "Las Ramblas 2, 08002 Barcelona", "Calle Larios 3, 29005 Málaga"],
                    "TR": ["Istiklal Caddesi 1, Beyoğlu, Istanbul 34433", "Kızılay Meydanı 2, Çankaya, Ankara 06420", "Kordon 3, Konak, Izmir 35210"],
                    "SA": ["King Fahd Road 1, Riyadh 11564", "Corniche Road 2, Jeddah 21589", "King Faisal Street 3, Dammam 31411"],
                    "AR": ["Avenida 9 de Julio 1, Buenos Aires C1043AAA", "Avenida Córdoba 2, Córdoba X5000", "San Martín 3, Rosario S2000"],
                    "EG": ["Tahrir Square 1, Cairo 11511", "Corniche El Nil 2, Alexandria 21599", "El Mahatta Square 3, Aswan 81511"],
                    "NG": ["Victoria Island 1, Lagos 101241", "Garki District 2, Abuja 900211", "New Haven 3, Enugu 400001"],
                    "ID": ["Jalan Sudirman 1, Jakarta 10220", "Jalan Malioboro 2, Yogyakarta 55271", "Jalan Asia Afrika 3, Bandung 40111"]
                };
                
                const addresses = fallbackAddresses[country] || fallbackAddresses["US"];
                const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
                
                const name = getRandomName(country);
                const gender = Math.random() > 0.5 ? 'Male' : 'Female';
                const phone = getRandomPhoneNumber(country);
                
                const result = {
                    name,
                    gender,
                    phone,
                    address: randomAddress,
                    coordinates: {
                        lat: location.lat,
                        lng: location.lng
                    }
                };
                
                return new Response(JSON.stringify(result), {
                    headers: {
                        'Content-Type': 'application/json',
                        ...corsHeaders
                    }
                });
            }
            
            attempts++;
            if (attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        } catch (error) {
            attempts++;
            if (attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    }
    
    return new Response(JSON.stringify({
        error: 'Failed to generate valid address after multiple attempts'
    }), {
        status: 500,
        headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
        }
    });
}

// Register event listener
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
}); 
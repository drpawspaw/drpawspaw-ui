/* Application Endpoint Management */
// export const API_BASE_URL = "http://localhost:8000/api/v1/"
// export const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.email%20https%3A//www.googleapis.com/auth/userinfo.profile&access_type=offline&include_granted_scopes=true&response_type=code&redirect_uri=http://localhost:8000/api/auth/google/callback&client_id=289867524343-18mmo5g12ln6a413sik7207dbsje6fj8.apps.googleusercontent.com"

export const API_BASE_URL = "https://api.drpawspaw.com/api/v1/";
export const GOOGLE_AUTH_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.email%20https%3A//www.googleapis.com/auth/userinfo.profile&access_type=offline&include_granted_scopes=true&response_type=code&redirect_uri=https://api.drpawspaw.com/api/auth/google/callback&client_id=289867524343-18mmo5g12ln6a413sik7207dbsje6fj8.apps.googleusercontent.com";

/* Application Status */
export const NON_DESKTOP_MEDIA_QUERY = "(max-width: 992px)";
export const USER = "user";
export const BOT = "bot";
export const DOG = "dog";
export const CAT = "cat";
export const HTTP_GET = "get";
export const HTTP_POST = "post";
export const HTTP_PUT = "put";
export const HTTP_DELETE = "delete";
export const ACCESS_TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";
export const SHOW_MESSAGE = "show_message";
export const CURRENT_USER_PROFILE = "user_profile";
export const NOT_FOUND = "not-found";
export const MESSAGE_LOADING = "message-loading-state";
export const UNAUTHORISED = "unauthorized";
export const SERVICES_NOT_AVAILABLE = "service-not-available";
export const NOTIFY_STATE = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  default: "defualt",
};

/* Application Constants */
export const DOG_IMG_1_URL =
  "https://firebasestorage.googleapis.com/v0/b/drpawspaw-ui.appspot.com/o/dog-image-1.png?alt=media&token=2edc6964-7d4b-4b09-994c-d0bda7ba2988";
export const DOG_IMG_2_URL =
  "https://firebasestorage.googleapis.com/v0/b/drpawspaw-ui.appspot.com/o/dog-image-2.png?alt=media&token=04928377-64cc-4ae5-be83-4b6d3aa4dc0a";
export const CAT_IMG_1_URL =
  "https://firebasestorage.googleapis.com/v0/b/drpawspaw-ui.appspot.com/o/cat-image-1.png?alt=media&token=8c3bec04-7ebf-425d-845a-06a1b039cb17";
export const CAT_IMG_2_URL =
  "https://firebasestorage.googleapis.com/v0/b/drpawspaw-ui.appspot.com/o/cat-image-2.png?alt=media&token=6b2bd57a-6253-4308-a0fa-d8cbcb14772f";
export const APPLICATION_LOGO =
  "https://firebasestorage.googleapis.com/v0/b/drpawspaw-ui.appspot.com/o/drpawspaw-logo.png?alt=media&token=1ca37884-c9ff-4686-b936-49fe4c2b3298";
export const UNAUTHORISED_IMAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/drpawspaw-ui.appspot.com/o/403.jpg?alt=media&token=40f22459-7015-4804-b844-63a3ef5a7a8e";
export const NOT_FOUND_IMAGE_URL =
  "https://firebasestorage.googleapis.com/v0/b/drpawspaw-ui.appspot.com/o/404.jpg?alt=media&token=8fd6dcf0-1b42-401d-9009-c31b3231ac3f";
export const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas ",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory ",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands ",
  "Central African Republic ",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos Islands ",
  "Colombia",
  "Comoros ",
  "Congo",
  "Congo ",
  "Cook Islands ",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic ",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands  [Malvinas]",
  "Faroe Islands ",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories ",
  "Gabon",
  "Gambia ",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See ",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic ",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands ",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands ",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger ",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands ",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines ",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation ",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan ",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands ",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates ",
  "United Kingdom of Great Britain and Northern Ireland ",
  "United States Minor Outlying Islands ",
  "United States of America ",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (US)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];
export const DOG_BREEDS = [
  "Affenpinscher",
  "African",
  "Airedale",
  "Akita",
  "Appenzeller",
  "Australian",
  "Basenji",
  "Beagle",
  "Bluetick",
  "Borzoi",
  "Bouvier",
  "Boxer",
  "Brabancon",
  "Briard",
  "Buhund",
  "Bulldog",
  "Bullterrier",
  "Cattledog",
  "Chihuahua",
  "Chow",
  "Clumber",
  "Cockapoo",
  "Collie",
  "Coonhound",
  "Corgi",
  "Cotondetulear",
  "Dachshund",
  "Dalmatian",
  "Dane",
  "Deerhound",
  "Dhole",
  "Dingo",
  "Doberman",
  "Elkhound",
  "Entlebucher",
  "Eskimo",
  "Finnish",
  "Frise",
  "Germanshepherd",
  "Greyhound",
  "Groenendael",
  "Havanese",
  "Hound",
  "Husky",
  "Keeshond",
  "Kelpie",
  "Komondor",
  "Kuvasz",
  "Labradoodle",
  "Labrador",
  "Leonberg",
  "Lhasa",
  "Malamute",
  "Malinois",
  "Maltese",
  "Mastiff",
  "Mexicanhairless",
  "Mix",
  "Mountain",
  "Newfoundland",
  "Otterhound",
  "Ovcharka",
  "Papillon",
  "Pekinese",
  "Pembroke",
  "Pinscher",
  "Pitbull",
  "Pointer",
  "Pomeranian",
  "Poodle",
  "Pug",
  "Puggle",
  "Pyrenees",
  "Redbone",
  "Retriever",
  "Ridgeback",
  "Rottweiler",
  "Saluki",
  "Samoyed",
  "Schipperke",
  "Schnauzer",
  "Segugio",
  "Setter",
  "Sharpei",
  "Sheepdog",
  "Shiba",
  "Shihtzu",
  "Spaniel",
  "Spitz",
  "Springer",
  "Stbernard",
  "Terrier",
  "Tervuren",
  "Vizsla",
  "Waterdog",
  "Weimaraner",
  "Whippet",
  "Wolfhound",
];
export const CAT_BREEDS = [
  "Russian White, Black and Tabby",
  "Sam Sawet",
  "Savannah",
  "Scottish Fold",
  "Selkirk Rex",
  "Serengeti",
  "Serrade petit",
  "Siamese",
  "Siberian",
  "Singapura",
  "Snowshoe",
  "Sokoke",
  "Somali",
  "Sphynx",
  "Suphalak",
  "Thai",
  "Thai Lilac",
  "Tonkinese",
  "Toyger",
  "Turkish Angora",
  "Turkish Van",
  "Ukrainian Levkoy",
  "York Chocolate",
  "LaPerm",
  "Lykoi",
  "Maine Coon",
  "Manx",
  "Mekong Bobtail",
  "Minskin",
  "Munchkin",
  "Nebelung",
  "Napoleon",
  "Norwegian Forest cat",
  "Ocicat",
  "Ojos Azules",
  "Oregon Rex",
  "Oriental Bicolor",
  "Oriental Shorthair",
  "Oriental Longhair",
  "PerFoldæ(Experimental Breed - WCF)",
  "Persian (Modern Persian Cat)",
  "Persian (Traditional Persian Cat)",
  "Peterbald",
  "Pixie-bob",
  "Raas",
  "Ragamuffin",
  "Ragdoll",
  "Russian Blue",
  "Cheetoh",
  "Colorpoint Shorthair",
  "Cornish Rex",
  "Cymric or Manx Longhair",
  "Cyprus",
  "Devon Rex",
  "Donskoy, or Don Sphynx",
  "Dragon Li",
  "Dwarf cat, or Dwelf",
  "Egyptian Mau",
  "European Shorthair",
  "Exotic Shorthair",
  "Foldex[4]",
  "German Rex",
  "Havana Brown",
  "Highlander",
  "Himalayan, or Colorpoint Persian",
  "Japanese Bobtail",
  "Javanese",
  "Karelian Bobtail",
  "Khao Manee",
  "Korat",
  "Korean Bobtail",
  "Korn Ja",
  "Kurilian Bobtail, or Kuril Islands Bobtail",
  "Abyssinian",
  "Aegean",
  "American Curl",
  "American Bobtail",
  "American Shorthair",
  "American Wirehair",
  "Arabian Mau",
  "Australian Mist",
  "Asian",
  "Asian Semi-longhair",
  "Balinese",
  "Bambino",
  "Bengal",
  "Birman",
  "Bombay",
  "Brazilian Shorthair",
  "British Semi-longhair",
  "British Shorthair",
  "British Longhair",
  "Burmese",
  "Burmilla",
  "California Spangled",
  "Chantilly-Tiffany",
  "Chartreux",
  "Chausie",
];

export interface BranchInterface {
  country: string;
  name?: string;
  telephone: string;
  telephoneExtension?: string;
  address: string;
  fax?: string;
  mail: string;
  website?: string;
}

export const internationalBranchInfo: BranchInterface[] = [
  {
    country: "India",
    name: "indian courior service pvt ltd",
    telephone: "98075555, 265264646",
    address:
      "Budget House, Daya Complex ,Budget House, Daya Complex, Budget House, Daya Complex",
    mail: "support@budget1.net",
    fax: "8955, 454",
    website: "www.idealcourier.com.np",
  },
  {
    country: "Singapore",
    name: "singpour courior service pvt ltd",
    telephone: "98075555, 265264646",
    address: "9 Airline Rd, Singapore 819827",
    mail: "info@idealcourier.com.np",
    fax: "8955, 819827",
    website: "www.idealcourier.com.np",
  },
  {
    country: "Middle East",
    name: "middle east courier pvt ltd",
    telephone: "+971 4 253 0300",
    address:
      "Warehouse No1, 21a St, Salahuddin Rd Al Khabisi Area,Deira, Behind RAK Ceramics - Dubai - United Arab Emirates",
    mail: "info@idealcourier.com.np",
    fax: "8955, 819827",
    website: "www.idealcourier.com.np",
  },
  {
    country: "USA/Canada",
    name: "Ship Global",
    telephone: "212 382 1741, 905 205 0897",
    address:
      "42W 38TH STREET, STE. 7051, MISSASSAUGA ON L4T 0A1, NEW YORK, NY 10018.",
    mail: "sales@shipglobal.us",
    fax: "8955, 819827",
    website: "www.idealcourier.com.np",
  },
  {
    country: "Honk Kong",
    name: "Far Dar Express Worldwide (HK) Ltd",
    telephone: "852 27826501, +852 27704576",
    telephoneExtension: "8001, 8007, 8005",
    address:
      "MISSASSAUGA ON L4T 0A1, 42W 38TH STREET, STE. 7051, NEW YORK, NY 10018",
    mail: "fardar@biznetvigator.com, hkgops@ayzexpress.com, fardar@biznetvigator.com, hkgops@ayzexpress.com",
    fax: "",
    website: "www.fardar.com",
  },
  {
    country: "United Kingdom",
    name: "United Business Xpress Ltd",
    telephone: "01753 762 860",
    telephoneExtension: "8001 8007 8005",
    address: " AIRHUB 1425 6,Poyle Trading Estate,Poyle Road,Colnbrook",
    mail: "",
    fax: "",
    website: "",
  },
];

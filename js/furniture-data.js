/**
 * Asha Furniture - Central Inventory & Products Database
 * Enterprise of Diamond Group • Kundanoor, Cochin, Kerala
 * Direct MD & Workshop Phone: +91 89431 80277
 */

export const FURNITURE_PRODUCTS = [
  {
    id: "handcrafted-wooden-cot",
    name: "Handcrafted Traditional Wooden Cot",
    eyebrow: "Featured Wooden Cot • Architectural Design 01",
    subtitle: "Bring timeless craftsmanship into your home with a handcrafted wooden cot featuring intricate traditional carving, substantial corner posts, and a confirmed 100% solid-wood sleeping platform.",
    heroImage: "../../Assets/furniture/bed-workshop-ornate.png",
    cardThumb: "../../Assets/furniture/bed-workshop-ornate.png",
    category: "Cots & Bedroom",
    status: "In Stock",
    badge: "In Stock • Featured",
    finishingAvailability: ["natural", "polished"],
    keywords: ["cot", "bed", "headboard", "carving", "bedroom", "kerala", "solid wood platform", "king size", "queen size"],
    specs: [
      { key: "Headboard Carving", val: "Elaborate carved floral centerpiece, decorative scrollwork, symmetrical lattice pattern, raised ornamental crest, and rounded finials." },
      { key: "Footboard Design", val: "Structured rectangular panel arrangement, square/open rectangular center sections, solid framing, and rounded corner posts." },
      { key: "Sleeping Platform", val: "Confirmed 100% Solid-Wood sleeping platform (no particle board or hollow fillers)." },
      { key: "Frame & Rails", val: "Thick wooden side rails, substantial solid corner posts, precision traditional mortise-and-tenon joinery." },
      { key: "Timber Sourcing", val: "Sourced from Kerala. Handcrafted at our Kundanoor workshop in Cochin." },
      { key: "Available Sizes", val: "King Size (72\" x 78\"), Queen Size (60\" x 78\"), or Custom Tailored Dimensions." }
    ],
    gallery: [
      { src: "../../Assets/furniture/bed-workshop-ornate.png", badge: "Workshop Authentic Perspective", label: "Workshop View" },
      { src: "../../Assets/furniture/bed-raw-workshop-full.jpg", badge: "Raw Timber Post & Side Rails View", label: "Raw Timber Post" },
      { src: "../../Assets/furniture/bed-angle-carving-detail.png", badge: "Headboard Floral Motif & Lattice Detail", label: "Carving Detail" },
      { src: "../../Assets/furniture/bed-angle-raw-headboard.png", badge: "Solid-Wood Sleeping Platform & Corner Posts", label: "Platform View" },
      { src: "../../Assets/furniture/bed-showcase-1.png", badge: "Polished Mahogany Finished Showcase", label: "Polished Concept" },
      { src: "../../Assets/furniture/bed-raw-vs-polished.png", badge: "Raw Wood vs Finished Mahogany Comparison", label: "Finishing Comparison" }
    ],
    options: {
      raw: "Allows you to inspect the 100% solid wood and joinery directly, or independently engage your trusted polisher.",
      polished: "Workshop polishes to your preferred wood shade (Mahogany, Walnut, Teak, or Espresso) and sheen level (Matte, Satin, or Gloss)."
    },
    metaTitle: "Handcrafted Traditional Wooden Cot | Asha Furniture Cochin Kerala",
    metaDesc: "Handcrafted traditional wooden cot by Asha Furniture, Cochin. Featuring intricate floral carved headboard, structured footboard, solid-wood sleeping platform, and flexible finishing options."
  },
  {
    id: "solid-wood-dining-table",
    name: "Solid Hardwood Dining Table Suite",
    eyebrow: "Dining Suite • Master Woodcraft",
    subtitle: "Solid hardwood dining table suite handcrafted in Cochin by Asha Furniture. Custom seating from 6 to 12 seats, authentic wood grain, robust traditional joinery, and dual finishing options.",
    heroImage: "../../Assets/furniture/dining-table-angle-1.png",
    cardThumb: "../../Assets/furniture/dining-table-angle-1.png",
    category: "Dining Suites",
    status: "In Stock",
    badge: "In Stock • Dining",
    finishingAvailability: ["natural", "polished"],
    keywords: ["dining table", "chairs", "dining suite", "hardwood", "solid wood", "6 seater", "8 seater", "dinner", "cushion"],
    specs: [
      { key: "Seating Capacity", val: "Standard 6-seater, 8-seater, 10-seater, or expansive 12-seater configurations." },
      { key: "Timber Sourcing", val: "Solid hardwood sourced from Kerala with natural grain character." },
      { key: "Tabletop Construction", val: "Solid hardwood joined planks engineered for long-term structural integrity and zero bowing." },
      { key: "Chair Ergonomics", val: "Contoured solid wood backrests and reinforced corner-blocked leg joints." },
      { key: "Finishing Choices", val: "Option A: Natural Unfinished or Option B: Custom Workshop Stain & PU Sealant." }
    ],
    gallery: [
      { src: "../../Assets/furniture/dining-table-angle-1.png", badge: "Solid Hardwood Dining Table & Ergonomic Chairs", label: "Dining Suite View" },
      { src: "../../Assets/furniture/dining-table-angle-2.png", badge: "Tabletop Wood Grain & Hand-Shaped Profiles", label: "Wood Profiles" },
      { src: "../../Assets/furniture/bed-workshop-ornate.png", badge: "Authentic Kundanoor Workshop Production", label: "Workshop Bench" }
    ],
    options: {
      raw: "Supplied in finely sanded raw timber state for on-site matching with your dining hall architecture.",
      polished: "Hand-rubbed stain and multi-layer heat/water-resistant polyurethane sealant executed in our Cochin workshop."
    },
    metaTitle: "Solid Hardwood Dining Table Suite | Asha Furniture Cochin Kerala",
    metaDesc: "Solid hardwood dining table suite handcrafted in Cochin by Asha Furniture. Custom seating from 6 to 12 seats, real wood grain, robust joinery, and dual finishing options."
  },
  {
    id: "custom-furniture-orders",
    name: "Custom Furniture & Architectural Blueprints",
    eyebrow: "Made to Order • Bespoke Service",
    subtitle: "Asha Furniture translates your architectural CAD blueprints, interior designer specifications, or hand-drawn sketches into heirloom solid wood furniture built to exact millimetre tolerances.",
    heroImage: "../../Assets/furniture/bed-workshop-ornate.png",
    cardThumb: "../../Assets/furniture/bed-angle-carving-detail.png",
    category: "Custom Blueprints",
    status: "Made to Order",
    badge: "Made to Order",
    finishingAvailability: ["natural", "polished"],
    keywords: ["custom", "blueprint", "cad", "architect", "bespoke", "dimensions", "interior designer", "orders", "tailored"],
    specs: [
      { key: "Eligible Pieces", val: "Cots, Headboards, Dining Tables, Bench Seating, Executive Desks, TV Consoles, Pooja Mandirs, Kerala Diwans." },
      { key: "Input Formats", val: "AutoCAD / PDF blueprints, SketchUp 3D models, Pinterest reference photos, or hand sketches." },
      { key: "Joinery Techniques", val: "Authentic traditional mortise & tenon joinery, heavy-duty solid framing, reinforced interlocking corners." },
      { key: "Timber Sourcing", val: "Timber sourced from Kerala. Verified solid wood construction without hollow fillers." },
      { key: "Mid-Build Inspection", val: "Clients and interior designers are invited to inspect the framing in Kundanoor before finishing." }
    ],
    gallery: [
      { src: "../../Assets/furniture/bed-workshop-ornate.png", badge: "Bespoke Handcrafted Cot in Workshop", label: "Workshop Bed" },
      { src: "../../Assets/furniture/dining-table-angle-1.png", badge: "Architectural Solid Wood Dining Suite", label: "Custom Dining" },
      { src: "../../Assets/furniture/bed-angle-carving-detail.png", badge: "Intricate Hand-Carved Architectural Relief", label: "Carving Detail" },
      { src: "../../Assets/furniture/bed-raw-workshop-full.jpg", badge: "Solid Timber Joinery & Sleeping Platform", label: "Joinery Structure" },
      { src: "../../Assets/furniture/dining-table-angle-2.png", badge: "Custom Profile Wooden Seating & Tabletop", label: "Seating Profiles" },
      { src: "../../Assets/furniture/bed-raw-vs-polished.png", badge: "Finishing Freedom: Raw Wood vs Polished", label: "Finish Freedom" }
    ],
    options: {
      raw: "Raw sanded delivery allows complete timber inspection and effortless coordination with other on-site interior woodwork.",
      polished: "Full workshop polishing to your exact architectural sample finish, stain, and sheen."
    },
    metaTitle: "Custom Architectural & Made-to-Order Wooden Furniture | Asha Furniture Cochin",
    metaDesc: "Custom handcrafted wooden furniture by Asha Furniture, Cochin. Custom dimensions, architectural CAD blueprints, traditional joinery, and dual finishing choices."
  },
  {
    id: "kerala-heritage-diwan",
    name: "Traditional Kerala Heritage Diwan",
    eyebrow: "Living Heritage • Kerala Traditional",
    subtitle: "Classic Kerala wooden diwan handcrafted with floral scrollwork cresting, curved resting arms, and a solid timber base built for timeless family living spaces.",
    heroImage: "../../Assets/furniture/bed-angle-carving-detail.png",
    cardThumb: "../../Assets/furniture/bed-angle-carving-detail.png",
    category: "Living & Heritage",
    status: "Made to Order",
    badge: "Heritage Classic",
    finishingAvailability: ["natural", "polished"],
    keywords: ["diwan", "living room", "heritage", "traditional", "carved sofa", "kerala style", "charukasera", "floral"],
    specs: [
      { key: "Heritage Motif", val: "Hand-carved traditional floral head crest and scrolled baluster arm supports." },
      { key: "Seating Base", val: "Solid wooden plank base engineered for high load-bearing and mattress placement." },
      { key: "Timber Origin", val: "Responsibly sourced timber from Kerala, seasoned for generational endurance." },
      { key: "Dimensions", val: "Standard 6ft x 2.5ft or custom tailored to your living hall floor plan." }
    ],
    gallery: [
      { src: "../../Assets/furniture/bed-angle-carving-detail.png", badge: "Carved Heritage Floral Detail", label: "Floral Motif" },
      { src: "../../Assets/furniture/bed-workshop-ornate.png", badge: "Workshop Assembly Perspective", label: "Assembly View" },
      { src: "../../Assets/furniture/bed-raw-vs-polished.png", badge: "Natural vs Custom Polished Options", label: "Finish Options" }
    ],
    options: {
      raw: "Natural raw wood sanded smooth, ready for on-site matching with your traditional wooden pillars and doors.",
      polished: "Rich heritage mahogany or golden teakwood hand-rubbed finish with silky satin protection."
    },
    metaTitle: "Traditional Kerala Heritage Diwan | Asha Furniture Cochin",
    metaDesc: "Handcrafted traditional Kerala wooden diwan by Asha Furniture Cochin. Authentic hand-carved floral motifs, solid wooden base, and flexible finishing options."
  },
  {
    id: "executive-hardwood-desk",
    name: "Executive Hardwood Director's Desk",
    eyebrow: "Executive Office • Architectural Build",
    subtitle: "Commanding executive desk handcrafted from solid Kerala timber featuring deep storage drawers with dovetail joinery and custom cable management ports.",
    heroImage: "../../Assets/furniture/dining-table-angle-2.png",
    cardThumb: "../../Assets/furniture/dining-table-angle-2.png",
    category: "Office & Study",
    status: "Made to Order",
    badge: "Executive Build",
    finishingAvailability: ["natural", "polished"],
    keywords: ["desk", "office", "executive desk", "director table", "study table", "hardwood", "drawers", "writing table"],
    specs: [
      { key: "Desktop Surface", val: "Thick joined solid hardwood top with beveled edges and smooth finish." },
      { key: "Pedestal Storage", val: "Twin locking pedestal drawers with traditional dovetail joinery." },
      { key: "Timber Sourcing", val: "High-density Kerala hardwood selected for dimensional stability and rich grain." },
      { key: "Customization", val: "Available in 5ft, 6ft, or 7ft lengths with optional modesty panel carving." }
    ],
    gallery: [
      { src: "../../Assets/furniture/dining-table-angle-2.png", badge: "Solid Hardwood Surface Grain", label: "Surface Detail" },
      { src: "../../Assets/furniture/dining-table-angle-1.png", badge: "Structural Framing & Leg Joinery", label: "Leg Framing" },
      { src: "../../Assets/furniture/bed-workshop-ornate.png", badge: "Kundanoor Workshop Bench View", label: "Workshop Bench" }
    ],
    options: {
      raw: "Finely machine-sanded raw state for direct inspection of solid wood pedestals.",
      polished: "Polyurethane sealed matte or satin executive dark espresso and rich mahogany coats."
    },
    metaTitle: "Executive Hardwood Director's Desk | Asha Furniture Cochin",
    metaDesc: "Solid hardwood executive desk handcrafted in Cochin by Asha Furniture. Stately design, dovetail drawers, and custom finishing choices."
  }
];

/**
 * Utility to find a product by ID
 */
export function getProductById(id) {
  if (!id) return FURNITURE_PRODUCTS[0];
  const found = FURNITURE_PRODUCTS.find(p => p.id === id);
  return found || FURNITURE_PRODUCTS[0];
}

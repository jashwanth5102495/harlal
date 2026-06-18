export const GAZETTE = '16th February, 2026 S.O. 876(E)';

export const PRODUCTS = [
  { 
    brand: 'Rhizo Maxx', 
    specification: 'Microbial cell (Methylococcus):1*109 cfu/g (Powder)', 
    category: 'Humic Acid and Fulvic Acid  and their Derivatives',
    crops: ['Paddy', 'Maize'], 
    dosage: ['Paddy: Three applications (One seedling dip and two foilar applications) at 40 g/ha ', 'Maize: Two foliar applications at 40 g/ha'], 
    gazette: '16th February, 2026 S.O. 876(E)', 
    composition: [
      '(i)  Microbial cell (Methylococcus capsulatus) concentrate, cfu/g, minimum 1x109'
    ] 
  }
];

export const SLUG_TO_BRAND = {
  'Rhizo Maxx': 'Rhizo Maxx',
  'BLACK-DIAMOND': 'Rhizo Maxx',
  'BLACK%20DIAMOND': 'Rhizo Maxx',
};

export function findProductBySlug(slug) {
  if (!slug) return PRODUCTS[0];
  
  const decoded = decodeURIComponent(slug).toUpperCase();
  const normalized = decoded.replace(/-/g, ' ').replace(/\+/g, ' ').trim();
  
  // Try direct match in SLUG_TO_BRAND
  if (SLUG_TO_BRAND[normalized]) return findProductByBrand(SLUG_TO_BRAND[normalized]);
  if (SLUG_TO_BRAND[decoded]) return findProductByBrand(SLUG_TO_BRAND[decoded]);

  // Try matching against brand names directly
  const found = PRODUCTS.find(p => 
    p.brand.toUpperCase() === normalized || 
    p.brand.toUpperCase().replace(/\s+/g, '') === normalized.replace(/\s+/g, '')
  );
  
  return found || PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand.toUpperCase() === brand.toUpperCase()) || PRODUCTS[0];
}

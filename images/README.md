# Product image replacement guide

The catalog uses temporary unbranded product imagery. Each image source is named in `js/products.js` under `SITE_IMAGES`, and every product card references one of those named sources.

To replace an image with an approved client photograph:

1. Add the image file to this folder with a descriptive name.
2. Update the relevant `SITE_IMAGES` value in `js/products.js` to the relative path.
3. Keep the product's `imageAlt` description accurate.

Suggested filenames:

- `peptide-ghk-cu-serum.jpg`
- `peptide-ghk-cu-vial.jpg`
- `peptide-tesamorelin.jpg`
- `peptide-bpc-157.jpg`
- `peptide-mots-c.jpg`
- `peptide-serum.jpg`
- `vitamin-c.jpg`
- `vitamin-d3.jpg`
- `vitamin-b12.jpg`
- `multivitamin.jpg`
- `magnesium.jpg`
- `zinc.jpg`
- `omega-3.jpg`
- `biotin.jpg`
- `electrolytes.jpg`
- `protein-support.jpg`
- `creatine-support.jpg`

For example, change:

```js
peptideSerumCopper: "https://..."
```

to:

```js
peptideSerumCopper: "images/peptide-ghk-cu-serum.jpg"
```

# Abu Jubayer Portfolio — Version 2

A Next.js portfolio for Md. Abu Jubayer, improved in place using its existing content, components, images, and npm setup. Environmental work, PlantScholar, institutional leadership, and research lead the professional story. Existing projects, publications, experience, awards, education, training, affiliations, and contact information are retained.

Typography uses version 1’s font pairing: Oswald for the hero heading and Inter for the rest of the site via Next.js font optimization. Google Fonts are downloaded during compilation and served locally to visitors.

## Content editing

- `src/lib/data.ts`: original verified projects, publications, career entries, credentials, and contact details.
- `src/lib/portfolio.ts`: existing image mappings, award photos, project subject classifications, and publication grouping. Classifications supplement original record fields.
- `src/lib/initiatives.ts`: PlantScholar profile and BMDF leadership. PlantScholar programme details and its website are sourced from SRCL’s official programme page. Replace the null image only with genuine programme imagery; the section automatically renders it. The fallback fieldwork photograph is labelled as existing portfolio imagery, not a PlantScholar screenshot.
- SRCL’s current Managing Director role is verified on its homepage and displayed separately from the historical consulting timeline; no appointment date is invented.
- BMDF contains only the owner-supplied Vice President role, 2026–2029 term, and public representation description. Add additional contributions, logos, and event photos only when verified.

## Run locally

```bash
npm ci
npm run j
```

Open http://localhost:3000. If the original portfolio is running on port 3000, run this project on another port:

```bash
npm run j -- --port 3001
```

## Checks and production build

```bash
npm run lint
npm exec -- tsc --noEmit
npm run build
npm start
```

Experience and project details expand, environmental assignments filter by six subject areas, and publications are grouped without changing their titles or DOI links. Award images open at full size. Mobile navigation closes after selecting a link and supports Escape with focus return. The contact form opens an email draft in the visitor’s email app; it does not submit messages to a server.

Project images illustrate the wider practice and are not presented as verified photos of each named assignment. No new testimonials, awards, or project metrics are introduced.

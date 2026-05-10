# Plan: Reorganize CV Portfolio Codebase

## Goal
Restructure the flat, disorganized codebase into a clean, logical directory hierarchy — separating components by role, extracting inline data into dedicated files, isolating configuration, removing dead code, and organizing assets.

## Affected Files

| File | Action |
|---|---|
| `.gitignore` | Edit — expand to cover build/, .env, *.log, .DS_Store |
| `public/MockUpvideo3.mp4` | Move → `public/assets/videos/MockUpvideo3.mp4` |
| `public/NightLifeapp.MP4` | Move → `public/assets/videos/NightLifeapp.MP4` |
| `src/components/Navigation.js` | Move → `src/components/layout/Navigation.js` |
| `src/components/Hero.js` | Move → `src/components/sections/Hero.js`, then refactor |
| `src/components/About.js` | Move → `src/components/sections/About.js` |
| `src/components/Skills.js` | Move → `src/components/sections/Skills.js` |
| `src/components/Projects.js` | Move → `src/components/sections/Projects.js` |
| `src/components/Education.js` | Move → `src/components/sections/Education.js` |
| `src/components/Contact.js` | Move → `src/components/sections/Contact.js` |
| `src/components/Resume.js` | Move → `src/components/shared/Resume.js` |
| `src/components/Experience.js` | Delete (dead code) |
| `src/App.js` | Edit — update all import paths |
| `OU THORNINVITHYEA - Front -End - CV (...).pdf` | Move → `docs/CV_OuThorninvithyea.pdf` |

**New files to create:**
- `src/data/projects.js` — extracted project data array
- `src/data/skills.js` — extracted skill categories array
- `src/data/education.js` — extracted education + certifications array
- `src/data/navigation.js` — extracted navItems array
- `src/config/emailjs.js` — EmailJS credentials (public key, serviceID, templateID)
- `src/utils/pdfExport.js` — extracted PDF export function

---

## Step-by-step Changes

### Step 1: Expand `.gitignore`
**Edit `.gitignore`** — add entries for `build/`, `.env`, `.env.local`, `*.log`, `.DS_Store`, `.vercel`

### Step 2: Create new directory structure
```
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/shared
mkdir -p src/data
mkdir -p src/config
mkdir -p src/utils
mkdir -p public/assets/videos
mkdir -p docs
```

### Step 3: Move video assets to public/assets/videos/
```bash
mv public/MockUpvideo3.mp4 public/assets/videos/
mv public/NightLifeapp.MP4 public/assets/videos/
```

### Step 4: Move root PDF to docs/
```bash
mv "OU THORNINVITHYEA - Front -End - CV (Software Engineering).pdf" docs/CV_OuThorninvithyea.pdf
```

### Step 5: Move components to new subfolders
Move each component file into its new location:
- `Navigation.js` → `src/components/layout/Navigation.js`
- `Hero.js` → `src/components/sections/Hero.js`
- `About.js` → `src/components/sections/About.js`
- `Skills.js` → `src/components/sections/Skills.js`
- `Projects.js` → `src/components/sections/Projects.js`
- `Education.js` → `src/components/sections/Education.js`
- `Contact.js` → `src/components/sections/Contact.js`
- `Resume.js` → `src/components/shared/Resume.js`

### Step 6: Delete dead code
```bash
rm src/components/Experience.js
```

### Step 7: Update import paths in App.js
Change all 8 imports from `./components/...` to the new paths:
- `./components/Navigation` → `./components/layout/Navigation`
- `./components/Hero` → `./components/sections/Hero`
- `./components/About` → `./components/sections/About`
- `./components/Skills` → `./components/sections/Skills`
- `./components/Projects` → `./components/sections/Projects`
- `./components/Education` → `./components/sections/Education`
- `./components/Contact` → `./components/sections/Contact`
- Remove the Experience import line entirely

### Step 8: Update Resume import in Hero.js
Change `import Resume from "./Resume"` → `import Resume from "../shared/Resume"`

### Step 9: Create src/data/navigation.js
Extract the `navItems` array from `Navigation.js` into a new file with named export.

### Step 10: Create src/data/projects.js
Extract the `projects` array (5 project objects) from `Projects.js` into a new file. Import it back into Projects.js.

### Step 11: Create src/data/skills.js
Extract the `skillCategories` array and the `futureReadyCompetencies` array from `Skills.js` into a new file. Import them back into Skills.js.

### Step 12: Create src/data/education.js
Extract the `education` array and `certifications` array from `Education.js` into a new file. Import them back into Education.js.

### Step 13: Create src/config/emailjs.js
Extract `publicKey`, `serviceID`, `templateID` from `Contact.js` into a config file. Import and use in Contact.js.

### Step 14: Create src/utils/pdfExport.js
Extract `exportResumePdf` and `disableAnimationsTemporarily` functions from `Hero.js` into a utility file. Import and use in Hero.js.

### Step 15: Update video src paths in Projects.js
Change `video: "/NightLifeapp.MP4"` → `video: "/assets/videos/NightLifeapp.MP4"` and similarly for `MockUpvideo3.mp4`.

### Step 16: Verify everything works
```bash
npm start          # Dev server loads without errors
npm run build      # Production build succeeds
```

---

## Risks & Edge Cases

| Risk | Mitigation |
|---|---|
| **Broken video paths** | The video paths in Projects.js are template strings `"/NightLifeapp.MP4"`. Miss one and the video 404s. Verify each after moving. |
| **Experience.js import removed but someone references it** | Grep confirms it only exists in the commented-out line in App.js. Low risk. |
| **Data extraction changes component shape** | Named exports + default imports keep the interface identical. Verify each component still renders its data. |
| **EmailJS config in separate file** — still client-side exposed | The keys are already exposed in Contact.js. Moving to config/ doesn't fix the security issue but makes it easier to manage. Still hardcoded in the bundle. |
| **PDF export broken after Hero refactor** | The `exportResumePdf` function references `#resume-print` and `#about` DOM elements — moving the function to utils/ won't change this. Verify PDF download still works. |

---

## Verification

After all steps are complete, run these checks:

```bash
# 1. Dev server starts clean
npm start
# → No compilation errors, page loads

# 2. Check video playback
open http://localhost:3000
# → Scroll to Projects, both videos autoplay

# 3. Check navigation
# → Click all nav links, each scrolls to correct section

# 4. Check PDF export
# → Click "Download CV" button, valid PDF downloads

# 5. Check contact form
# → Fill form, submit, EmailJS fires (check console)

# 6. Check mobile menu
# → Resize to <1024px, hamburger menu opens/closes

# 7. Production build
npm run build
# → Build succeeds, no warnings

# 8. No leftover Experience.js references
grep -r "Experience" src/ --include="*.js"
# → Should return nothing (or only unrelated matches)

# 9. Verify clean git status
git status
# → Shows only the expected moves and new files
# → No stray changes
```

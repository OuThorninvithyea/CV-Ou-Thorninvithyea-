## Goal

Add backend development experience to the CV project by inserting backend-related skills (Go, Laravel, API, Fiber) into the data files, About section, and PDF resume. The user builds backend systems with Go, Laravel, REST APIs, and the Fiber Go web framework.

## Affected Files

1. `src/data/skills.js` — Add a new "Backend Development" skill category
2. `src/components/sections/About.js` — Update tech tags and summary to include backend experience
3. `src/components/shared/Resume.js` — Update Technical Skills section to include backend technologies, update Professional Summary

## Step-by-step Changes

### Step 1: Add "Backend Development" skill category to `src/data/skills.js`

**Why:** This displays backend skills on the Skills section of the portfolio.

**Change:** Insert a new entry at index 0 (top) in the `skillCategories` array:
```js
  {
    title: "Backend Development",
    gradient: "from-amber-400 to-orange-600",
    skills: [
      { name: "Go", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "Fiber (Go Web)", level: 80 },
      { name: "REST API Design", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 75 },
    ],
  },
```

Add before the existing first element (`Frontend Development`). This is a new category so it should appear first to signal the backend focus the user wants to highlight.

### Step 2: Update About.js tech tags to include backend technologies

**Why:** The tech tags section lists key technologies the user works with. Adding Go, Laravel, Fiber, and REST APIs shows backend competency.

**Change:** In `src/components/sections/About.js`, replace the tech tags array (lines 92-98):
```js
                  {[
                    "React",
                    "TypeScript",
                    "Go",
                    "Laravel",
                    "Fiber",
                    "REST APIs",
                    "Tailwind CSS",
                    "PostgreSQL",
                  ].map((tech, index) => (
```

This replaces the old 6-item list with an 8-item list that includes backend technologies.

### Step 3: Update About.js Professional Summary to mention backend work

**Why:** The professional summary currently only mentions front-end development. Adding backend context makes it a full-stack profile.

**Change:** In `src/components/sections/About.js`, line 59, change:
- Old: "Passionate Software Engineer with 2+ years of experience in front-end development, specializing in React, JavaScript, and modern UI engineering."
- New: "Passionate Software Engineer with 2+ years of experience in full-stack development, specializing in React, Go, Laravel, and modern API engineering."

### Step 4: Update Resume.js — Technical Skills section to include backend

**Why:** The PDF resume's "TECHNICAL SKILLS" section needs to reflect backend technologies.

**Change 4a:** In the "Frameworks & Libraries" subsection (line 87-89):
- Old: `React, Next.js, Tailwind CSS, Node.js`
- New: `React, Next.js, Laravel, Fiber, Tailwind CSS, Node.js`

**Change 4b:** Add a new subsection row for "Backend & Databases" after "Frameworks & Libraries". This means adding a new div block in the grid. The grid is `grid-cols-2` so adding 2 new items makes it a 3×2 grid (6 items):

Replace the entire Technical Skills section (lines 61-114) with:
```jsx
      {/* Technical Skills */}
      <section className="mb-6">
        <h2
          className="text-lg font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          TECHNICAL SKILLS
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Programming Languages
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              Go, JavaScript, HTML5, CSS3, TypeScript
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Frameworks & Libraries
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              React, Next.js, Laravel, Fiber, Tailwind CSS, Node.js
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Backend & Databases
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              REST APIs, PostgreSQL, MySQL, API Design, Authentication
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Software Engineering
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              Problem Solving, Debugging, Data Structures, Design Patterns
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Development Tools
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              Git/GitHub, VS Code, Chrome DevTools, NPM, ESLint
            </p>
          </div>
        </div>
      </section>
```

Note: "Backend & Databases" replaces the old "Development Tools" position, and "Development Tools" is moved to the 5th slot (previously didn't exist as a separate slot but was the 4th).

### Step 5: Update Resume.js — Professional Summary

**Why:** The summary should reflect full-stack capabilities.

**Change:** Line 48-57, replace:
- Old: "Passionate Software Engineer with 2+ years of experience in full-stack web development, specializing in designing, developing, and maintaining scalable web applications. Proficient in React, JavaScript, and modern frameworks..."
- New: "Passionate Software Engineer with 2+ years of experience in full-stack web development, specializing in building scalable web applications with React, Go, and Laravel. Proficient in modern frontend frameworks and backend API development with Fiber..."

## Risks

- Low risk — all changes are additive (adding data to arrays, adding text to existing components)
- No risk of breaking existing functionality since no logic is changed, only content
- Verify the app still compiles: `npm run build` or `npx react-scripts build`

## Verification Commands

1. `npx react-scripts build` — confirms the app compiles without errors

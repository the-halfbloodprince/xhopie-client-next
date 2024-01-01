# Work Log / Diary

This will be a work log / diary of what I have been doing in this project, just like a commit history, but simpler, more broad, explanatory.

This file only outlines the progress in this repository. All it's submodules will have their own work-log files.

> Starting this repo with the start of 2024. Let's see what 2024 has in store.

### 1st Jan 2024

- decided the project structure
- made 3 categories for the app
  - marketing (all the landing pages / marketing pages)
  - store (main store app)
  - seller (seller interface)
  - admin (admin dashboard)
- gave each of these their own `layout.tsx` file as they can have drastically separate layouts later.
- made all of them to by-default reference the `globals.css` in the `app` folder. As they would progressively need different styles, we may point to different `globals.css` in their respective folders/groups.
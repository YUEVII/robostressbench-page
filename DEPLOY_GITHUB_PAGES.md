# Deploy RoboStressBench to GitHub Pages

This project is now a static GitHub Pages site. The `Join Evaluation` page does
not save files or write to a database. Users who want to participate should send
their prediction file by email to `lwu398@connect.hkust-gz.edu.cn`.

## 1. Install Bun Locally

If you want to test the build on your machine:

```bash
curl -fsSL https://bun.sh/install | bash
```

Restart the terminal if `bun` is still not found.

## 2. Test the Build Locally

From the project root:

```bash
cd /Users/leyiwu/Downloads/code/robostressbench-page
bun install
bun run build
```

The static output is generated at:

```text
dist
```

## 3. Enable GitHub Pages

Open:

```text
https://github.com/YUEVII/robostressbench-page/settings/pages
```

Set:

- `Source`: `GitHub Actions`

No Supabase variables or secrets are required.

## 4. Push and Deploy

Commit your changes and push to `main`:

```bash
git add .
git commit -m "Deploy RoboStressBench static site"
git push origin main
```

GitHub Actions will run `.github/workflows/deploy.yml`, build the site, and
publish `dist` to GitHub Pages.

After the workflow finishes, open:

```text
https://YUEVII.github.io/robostressbench-page/
```

## 5. Check the Site

Verify:

- The home page loads.
- `/leaderboards` loads and still works after refresh.
- `/join` shows the email-based submission instructions.
- Static images and figures load correctly.

## 6. Evaluation Submission Email

Ask participants to send their prediction file to:

```text
lwu398@connect.hkust-gz.edu.cn
```

Suggested email content:

- Model name and version
- Affiliation or organization
- Contact person
- JSON prediction file

Example JSON:

```json
[
  {
    "id": 1,
    "question_id": "CholecTrack20_VID01_q1_distinct-instruments-counting",
    "dataset": "CholecTrack20",
    "answer": "D"
  }
]
```

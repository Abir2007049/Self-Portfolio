# Contentful CMS Setup Guide

This guide will help you set up Contentful CMS to manage your portfolio content through a dashboard without touching any code.

## What You Can Edit Through Contentful Dashboard:

- ✏️ Your name, title, and bio
- 🖼️ Profile picture
- 💼 Skills (add/remove/edit)
- 🚀 Projects (add/remove/edit with images, descriptions, technologies)
- 📧 Contact information

---

## Step 1: Create a Contentful Account

1. Go to [https://www.contentful.com/](https://www.contentful.com/)
2. Click **"Start building for free"**
3. Sign up with your email or GitHub account
4. Create a new **Space** (name it "Portfolio" or anything you like)

---

## Step 2: Create Content Types

You need to create 3 content types: **About**, **Skills**, and **Projects**.

### 2.1 Create "About" Content Type

1. In Contentful, go to **Content model** in the sidebar
2. Click **"Add content type"**
3. Name: `about` (use lowercase)
4. Display name: `About`
5. Click **Create**
6. Add these fields (click "Add field" for each):

   | Field Name | Field ID | Type | Options |
   |------------|----------|------|---------|
   | Name | `name` | Short text | Required |
   | Title | `title` | Short text | Required |
   | Bio | `bio` | Long text | Required |
   | Profile Image | `profileImage` | Media (single file) | Required |

7. Click **Save**

### 2.2 Create "Skills" Content Type

1. Click **"Add content type"** again
2. Name: `skills` (use lowercase)
3. Display name: `Skills`
4. Click **Create**
5. Add these fields:

   | Field Name | Field ID | Type | Options |
   |------------|----------|------|---------|
   | Category | `category` | Short text | Required (e.g., "Frontend", "Backend") |
   | Items | `items` | Short text, list | Required (add multiple skills) |

6. Click **Save**

### 2.3 Create "Projects" Content Type

1. Click **"Add content type"** again
2. Name: `projects` (use lowercase)
3. Display name: `Projects`
4. Click **Create**
5. Add these fields:

   | Field Name | Field ID | Type | Options |
   |------------|----------|------|---------|
   | Title | `title` | Short text | Required |
   | Description | `description` | Long text | Required |
   | Technologies | `technologies` | Short text, list | Required |
   | Image | `image` | Media (single file) | Optional |
   | GitHub | `github` | Short text | Required (GitHub repo URL) |
   | Demo | `demo` | Short text | Optional (Live demo URL) |

6. Click **Save**

---

## Step 3: Add Your Content

### 3.1 Add About Information

1. Go to **Content** in the sidebar
2. Click **"Add entry"** → Select **"About"**
3. Fill in:
   - **Name**: Sadik Zaman Abir
   - **Title**: Full Stack Developer | Problem Solver | Tech Enthusiast
   - **Bio**: Write your bio
   - **Profile Image**: Upload your profile picture
4. Click **Publish**

### 3.2 Add Skills

For each skill category (Frontend, Backend, Database, Tools):

1. Click **"Add entry"** → Select **"Skills"**
2. Fill in:
   - **Category**: Frontend
   - **Items**: Add your skills (e.g., React, JavaScript, HTML/CSS, Tailwind CSS)
3. Click **Publish**

Repeat for Backend, Database, and Tools.

**Example:**
- Frontend: React, JavaScript, HTML/CSS, Tailwind CSS
- Backend: Node.js, Python, Laravel, Express, Django, REST APIs
- Database: MongoDB, PostgreSQL, MySQL, Firebase
- Tools: Git, VS Code, Figma, Docker, Postman (add these now!)

### 3.3 Add Projects

For each project:

1. Click **"Add entry"** → Select **"Projects"**
2. Fill in:
   - **Title**: Real Life Fraud Detection App
   - **Description**: Your project description
   - **Technologies**: React, Node.js, Machine Learning, MongoDB
   - **Image**: Upload a screenshot (optional)
   - **GitHub**: https://github.com/Abir2007049/Civic-Monitoring-App-5-Civic-Fraud-Protection.git
   - **Demo**: Leave blank or add live demo URL
3. Click **Publish**

Repeat for all your projects!

---

## Step 4: Get Your API Keys

1. Go to **Settings** → **API keys** in the sidebar
2. Click **"Add API key"** (or use the existing "Example space token 1")
3. Copy these two values:
   - **Space ID**
   - **Content Delivery API - access token**

---

## Step 5: Configure Your Portfolio

1. In VS Code, create a new file called `.env` in the root folder:

```env
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

2. Replace `your_space_id_here` and `your_access_token_here` with the values from Step 4

3. Save the file

4. **Restart your development server**:
   - Stop the current server (Ctrl+C in the terminal)
   - Run: `npm run dev`

---

## Step 6: Test It!

1. Open your portfolio: http://localhost:5173/self_portfolio/
2. You should now see content from Contentful!
3. Go back to Contentful, edit any content, and **Publish**
4. Refresh your portfolio to see the changes

---

## How to Add/Edit Content Later

### Add a New Skill:
1. Go to Contentful → **Content**
2. Find the Skills entry for the category you want to edit
3. Click on it
4. Add to the **Items** list
5. Click **Publish**
6. Refresh your portfolio

### Add a New Project:
1. Go to Contentful → **Content**
2. Click **"Add entry"** → **"Projects"**
3. Fill in the details
4. Upload a project screenshot
5. Click **Publish**
6. Refresh your portfolio

### Change Profile Picture:
1. Go to Contentful → **Content**
2. Click on your **About** entry
3. Click on **Profile Image** → Upload new image
4. Click **Publish**
5. Refresh your portfolio

### Update Technologies/Tags:
1. Go to Contentful → **Content**
2. Click on the project you want to edit
3. Edit the **Technologies** field (add/remove tags)
4. Click **Publish**
5. Refresh your portfolio

---

## Important Notes:

- ⚠️ Changes in Contentful only appear after you click **"Publish"**
- ⚠️ You need to **refresh your browser** to see changes
- ⚠️ Keep your `.env` file private - never commit it to GitHub!
- ✅ If Contentful is not set up, your portfolio will show default data
- ✅ Images uploaded to Contentful are automatically hosted by them

---

## Troubleshooting:

**Portfolio still shows default data?**
- Make sure you created all 3 content types with exact field IDs
- Make sure you've added at least one entry for each content type
- Make sure you clicked **Publish** on all entries
- Restart the development server: `Ctrl+C` then `npm run dev`

**Can't see profile picture?**
- Make sure the Profile Image field is named `profileImage` (case-sensitive)
- Make sure you uploaded an image and published it

**Projects not showing?**
- Make sure the Projects content type has all required fields
- Make sure each project has a Title and Description
- Make sure you published all project entries

---

## You're All Set! 🎉

Now you can manage your entire portfolio through the Contentful dashboard without touching any code!

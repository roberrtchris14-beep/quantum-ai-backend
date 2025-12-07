# 🚀 Quick Start Guide

Get your Quantum AI platform running in 10 minutes!

## Prerequisites

- GitHub account (you have this!)
- [Supabase account](https://supabase.com) (free)
- [Railway account](https://railway.app) (free)

---

## Step 1: Set Up Database (3 minutes)

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **"New Project"**
3. Fill in:
   - Name: `quantum-ai-db`
   - Database Password: (create a strong password)
   - Region: (choose closest to you)
4. Click **"Create new project"** and wait ~2 minutes
5. Once ready, go to **SQL Editor** (left sidebar)
6. Copy the contents of `database/schema.sql` from this repo
7. Paste into SQL Editor and click **"Run"**
8. Go to **Settings → API** and copy:
   - **Project URL** (looks like: `https://xxx.supabase.co`)
   - **anon/public key** (long string starting with `eyJ...`)

✅ Database is ready!

---

## Step 2: Deploy Backend (5 minutes)

1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose **`quantum-ai-backend`** repository
5. Click **"Add variables"** and add these:

```
PORT=3000
NODE_ENV=production
SUPABASE_URL=<paste your Supabase Project URL>
SUPABASE_KEY=<paste your Supabase anon key>
JWT_SECRET=<any random string, e.g., quantum-secret-2025-xyz>
ALLOWED_ORIGINS=https://roberrtchris14-beep.github.io
```

6. Click **"Deploy"**
7. Wait ~2 minutes for deployment
8. Once deployed, click **"Settings"** → **"Generate Domain"**
9. Copy your Railway URL (looks like: `https://quantum-ai-backend-production.up.railway.app`)

✅ Backend is live!

---

## Step 3: Connect Frontend (2 minutes)

1. Go to your `quantum-ai-website` repository on GitHub
2. Edit `index.html`
3. Find this line (around line 400):
```javascript
const API_URL = 'http://localhost:3000';
```
4. Replace with your Railway URL:
```javascript
const API_URL = 'https://quantum-ai-backend-production.up.railway.app';
```
5. Commit the change

✅ Frontend connected!

---

## Step 4: Test Everything! (1 minute)

1. Visit your website: https://roberrtchris14-beep.github.io/quantum-ai-website/
2. Click **"Get Started"** to register
3. Fill in your details and register
4. You should see the Dashboard!
5. Try running a quantum computation

---

## 🎉 You're Done!

Your full-stack Quantum AI platform is now live with:

- ✅ Frontend: https://roberrtchris14-beep.github.io/quantum-ai-website/
- ✅ Backend API: Your Railway URL
- ✅ Database: Supabase PostgreSQL
- ✅ Authentication: JWT-based
- ✅ Quantum Simulations: Working!

---

## What You Can Do Now

### User Features:
- Register/Login with email
- Run quantum computations
- View computation history
- See analytics dashboard
- Track qubit usage

### API Features:
- RESTful API with 10+ endpoints
- JWT authentication
- Rate limiting (100 req/15min)
- CORS enabled
- Secure password hashing

### Database:
- User management
- Computation history
- Analytics tracking
- Indexed for performance

---

## Troubleshooting

### "API Status: Configure Backend URL"
- Make sure you updated `API_URL` in index.html with your Railway URL
- Check that Railway deployment succeeded

### "Error connecting to server"
- Verify Railway environment variables are set correctly
- Check Railway logs for errors
- Ensure CORS is configured with your GitHub Pages URL

### "Invalid credentials"
- Make sure you registered first
- Check email/password are correct
- Try registering a new account

### Database errors
- Verify Supabase schema was created (run schema.sql)
- Check SUPABASE_URL and SUPABASE_KEY are correct
- Ensure Supabase project is active

---

## Next Steps

1. **Customize the frontend** - Change colors, add features
2. **Add more algorithms** - Implement real quantum algorithms
3. **Enhance analytics** - Add charts and visualizations
4. **Add payment** - Integrate Stripe for premium features
5. **Mobile app** - Build React Native app using same API

---

## Support

- **API Docs**: See `API_DOCUMENTATION.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Backend Code**: Explore the `routes/` folder

---

## Architecture

```
┌─────────────────┐
│  GitHub Pages   │  Frontend (HTML/CSS/JS)
│   (Frontend)    │  https://username.github.io/quantum-ai-website
└────────┬────────┘
         │
         │ HTTPS API Calls
         │
┌────────▼────────┐
│    Railway      │  Backend (Node.js/Express)
│   (Backend)     │  https://your-app.railway.app
└────────┬────────┘
         │
         │ SQL Queries
         │
┌────────▼────────┐
│   Supabase      │  Database (PostgreSQL)
│   (Database)    │  Managed by Supabase
└─────────────────┘
```

Happy quantum computing! ⚛️
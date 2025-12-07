# Deployment Guide

## Step 1: Set Up Supabase Database

1. Go to [Supabase](https://supabase.com) and create a free account
2. Create a new project
3. Go to SQL Editor and run the schema from `database/schema.sql`
4. Get your credentials:
   - Project URL: Settings → API → Project URL
   - Anon Key: Settings → API → Project API keys → anon/public

## Step 2: Deploy to Railway

1. Go to [Railway](https://railway.app) and sign in with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `quantum-ai-backend` repository
4. Add environment variables:
   ```
   PORT=3000
   NODE_ENV=production
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_KEY=your_supabase_anon_key
   JWT_SECRET=your_random_secret_key_here
   ALLOWED_ORIGINS=https://roberrtchris14-beep.github.io
   ```
5. Deploy!

## Step 3: Get Your API URL

After deployment, Railway will provide a URL like:
`https://quantum-ai-backend-production.up.railway.app`

## Step 4: Update Frontend

Update the frontend to use your API URL in the JavaScript code.

## Database Tables Created

- **users**: User accounts with authentication
- **quantum_computations**: Quantum computation history and results

## API Endpoints Available

- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `POST /api/quantum/compute` - Run computation
- `GET /api/quantum/history` - Get history
- `GET /api/quantum/status` - System status
- `GET /api/analytics/user` - User analytics
- `GET /api/users/profile` - User profile

## Testing

Test the health endpoint:
```bash
curl https://your-railway-url.railway.app/health
```

## Security Notes

- JWT tokens expire in 7 days
- Passwords are hashed with bcrypt
- Rate limiting: 100 requests per 15 minutes
- CORS enabled for your frontend domain
- Helmet.js for security headers
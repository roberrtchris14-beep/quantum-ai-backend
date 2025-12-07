# Quantum AI Backend

Full-stack backend API for the Quantum AI platform with Node.js, Express, and Supabase PostgreSQL.

## Features

- 🔐 JWT Authentication (Register/Login)
- ⚛️ Quantum Computation Simulation
- 📊 Analytics & Reporting
- 👤 User Management
- 🛡️ Security (Helmet, Rate Limiting, CORS)
- 📝 Request Logging
- 🗄️ PostgreSQL Database (Supabase)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Quantum Operations
- `POST /api/quantum/compute` - Run quantum computation
- `GET /api/quantum/history` - Get computation history
- `GET /api/quantum/status` - Get quantum system status

### Analytics
- `GET /api/analytics/user` - Get user analytics
- `GET /api/analytics/platform` - Get platform analytics

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Quantum Computations Table
```sql
CREATE TABLE quantum_computations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  algorithm VARCHAR(100) NOT NULL,
  parameters JSONB,
  qubits INTEGER NOT NULL,
  result FLOAT,
  execution_time FLOAT,
  fidelity FLOAT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables (copy .env.example to .env)

3. Set up Supabase database with the schema above

4. Run the server:
```bash
npm start
```

## Deployment

Deploy to Railway, Heroku, or any Node.js hosting platform.

## Tech Stack

- Node.js
- Express.js
- Supabase (PostgreSQL)
- JWT Authentication
- bcryptjs
- Helmet (Security)
- CORS
- Rate Limiting

## License

MIT
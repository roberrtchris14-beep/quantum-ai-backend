# Quantum AI API Documentation

Base URL: `https://your-railway-url.railway.app`

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## Auth Endpoints

### Register User
**POST** `/api/auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "name": "John Doe"
  }
}
```

### Login
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "name": "John Doe"
  }
}
```

---

## Quantum Endpoints

### Run Quantum Computation
**POST** `/api/quantum/compute` 🔒

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "algorithm": "Grover",
  "qubits": 5,
  "parameters": {
    "iterations": 100
  }
}
```

**Response:**
```json
{
  "success": true,
  "computation": {
    "algorithm": "Grover",
    "qubits": 5,
    "executionTime": 87.45,
    "fidelity": 0.9823,
    "result": 456.789,
    "timestamp": "2025-12-07T08:55:00.000Z"
  },
  "id": "computation-uuid"
}
```

### Get Computation History
**GET** `/api/quantum/history` 🔒

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "computations": [
    {
      "id": "uuid",
      "algorithm": "Grover",
      "qubits": 5,
      "result": 456.789,
      "execution_time": 87.45,
      "fidelity": 0.9823,
      "created_at": "2025-12-07T08:55:00.000Z"
    }
  ]
}
```

### Get Quantum System Status
**GET** `/api/quantum/status`

**Response:**
```json
{
  "status": "operational",
  "availableQubits": 127,
  "queueLength": 3,
  "averageWaitTime": 25,
  "uptime": "99.9%"
}
```

---

## Analytics Endpoints

### Get User Analytics
**GET** `/api/analytics/user` 🔒

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "analytics": {
    "totalComputations": 42,
    "averageExecutionTime": 85.32,
    "averageFidelity": 0.9756,
    "totalQubitsUsed": 210,
    "algorithms": ["Grover", "Shor", "VQE"]
  }
}
```

### Get Platform Analytics
**GET** `/api/analytics/platform`

**Response:**
```json
{
  "totalUsers": 150,
  "totalComputations": 5420,
  "activeToday": 35,
  "systemLoad": 0.67
}
```

---

## User Endpoints

### Get User Profile
**GET** `/api/users/profile` 🔒

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "name": "John Doe",
    "created_at": "2025-12-01T10:00:00.000Z"
  }
}
```

### Update User Profile
**PUT** `/api/users/profile` 🔒

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "John Updated Doe"
}
```

**Response:**
```json
{
  "message": "Profile updated",
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "name": "John Updated Doe"
  }
}
```

---

## Health Check

### Health Status
**GET** `/health`

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-12-07T08:55:00.000Z",
  "service": "Quantum AI Backend"
}
```

---

## Error Responses

All endpoints may return these error responses:

**400 Bad Request:**
```json
{
  "error": "Validation error message"
}
```

**401 Unauthorized:**
```json
{
  "error": "Access token required"
}
```

**403 Forbidden:**
```json
{
  "error": "Invalid or expired token"
}
```

**404 Not Found:**
```json
{
  "error": "Route not found"
}
```

**500 Internal Server Error:**
```json
{
  "error": "Internal server error"
}
```

---

## Rate Limiting

- **Limit:** 100 requests per 15 minutes per IP
- **Applies to:** All `/api/*` endpoints
- **Response when exceeded:** 429 Too Many Requests

---

## CORS

Allowed origins are configured via `ALLOWED_ORIGINS` environment variable.

---

## Example Usage (JavaScript)

```javascript
// Register
const registerResponse = await fetch('https://your-api.railway.app/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
  })
});
const { token } = await registerResponse.json();

// Run computation
const computeResponse = await fetch('https://your-api.railway.app/api/quantum/compute', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    algorithm: 'Grover',
    qubits: 5
  })
});
const result = await computeResponse.json();
```

🔒 = Requires Authentication
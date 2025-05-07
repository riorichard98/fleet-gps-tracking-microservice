# Fleet GPS Tracking Microservice

A Node.js & TypeScript-based microservice for GPS tracking, authentication, and log cleanup.

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js & npm must be installed on your system

### 📦 Install Dependencies

```bash
npm install

⚙️ Environment Variables

Create a .env file in the root directory with the following content:

DATABASE_URL="postgresql://fleet-gps-tracking-microservice_owner:npg_ut8HgwXF3qMU@ep-odd-field-a46rz8lo-pooler.us-east-1.aws.neon.tech/fleet-gps-tracking-microservice?sslmode=require"
PORT=3000
JWT_SECRET=rio
CLEANUP_LOGS_AFTER_DAYS=30

🔧 Build the Project (TypeScript → JavaScript)

npm run build

▶️ Start the Server

npm run start

📮 API Testing
🧪 Postman

    Import the posman-collection.json file into Postman.

    Use the login endpoint with the following test credentials:

{
  "email": "rio@mail.com",
  "password": "123"
}

📝 Notes

    This project is developed using TypeScript and compiled to JavaScript before running.

    Logs older than CLEANUP_LOGS_AFTER_DAYS (default: 30) will be
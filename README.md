# MediTrust 🔒💊  
*AI-Powered Pharmaceutical Supply Chain Security*  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
*Track. Verify. Trust.*  

## 🚀 Project Overview  
MediTrust is a blockchain-integrated AI platform that:  
- 🛡️ Tracks pharmaceutical products from manufacturer to end-user  
- 🔍 Detects supply chain tampering using ML models  
- 📲 Generates blockchain-anchored QR codes for verification  
- 🔗 Uses autonomous shade agents for task coordination  

## ✨ Key Features  
### **Secure Dashboard**  
- Role-based authentication (JWT/OAuth2)  
- Supplier/procedure management interface  
- Real-time blockchain record viewer  
- QR code generator with product ID binding  

### **AI Verification Engine**  
```python  
# Sample anomaly detection  
def detect_tampering(supply_chain_data):  
    model = load_model('meditrust_ai_v1.h5')  
    prediction = model.predict(preprocess(data))  
    return prediction > CONFIDENCE_THRESHOLD  
Blockchain Integration
Hyperledger Fabric network for immutable records

Smart contract example:

solidity
Copy
// SPDX-License-Identifier: MIT  
pragma solidity ^0.8.0;  

contract DrugTracking {  
    struct Package {  
        string supplier;  
        uint256 timestamp;  
        bool isVerified;  
    }  
    mapping(string => Package) public packages;  
}
```
⚙️ Installation
Clone repo:
```python
git clone https://github.com/yourusername/meditrust.git
```

Install dependencies:
```python
cd client && npm install  
cd ../server && npm install
```

# Launch backend  
```python
node server.js
```

# Run frontend  
```python
npm run dev
```
📸 Usage Demo
Generating QR Tracking Code
Dashboard Demo

Verifying Package
# Scan QR code via API  

```python
POST /api/verify  
{  
  "qr_hash": "1a2b3c...",  
  "current_location": "Warehouse7"  
}
```

🌐 Tech Stack
Frontend: React + Redux | Backend: Node.js/Express
AI: TensorFlow/PyTorch | Blockchain: Hyperledger Fabric
Database: PostgreSQL + IPFS | Auth: Auth0

🤝 Contributing
Fork repo

Create feature branch: git checkout -b feature/amazing-feature

Commit changes: git commit -m 'Add amazing feature'

Push: git push origin feature/amazing-feature

Open PR

📜 License
MIT License - see LICENSE

📧 Contact
Team MediTrust
Email
GitHub Profile | LinkedIn

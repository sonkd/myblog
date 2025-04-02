Let’s build a web app to help friends split bills based on your requirements: creating bill requests, exporting to the Notes app, and sharing directly to Telegram or Messenger. I’ll also suggest some improvements and provide a step-by-step guide with code snippets to get you started.

---

### Understanding Your Requirements
Your basic idea includes:

1. **Creating Requests**: The payer can create multiple bill requests, each with:
   - A title (e.g., "Dinner at Restaurant").
   - A total amount (e.g., $100).
   - A list of payees, each with a name, amount owed, and a note (e.g., "Alice, $20, Salad").

2. **Exporting**: Allow users to save bill details to the Notes app on iOS or Android.

3. **Sharing**: Enable sharing the bill directly to a group via Telegram or Messenger.

### Improving Your Idea
Before diving into the implementation, here are some enhancements to consider:

- **Shareable Links**: Instead of direct Telegram/Messenger integration (which can be complex), generate a unique URL for each bill that users can share via any platform. On mobile, use the Web Share API to simplify sharing.
- **Multiple Split Options**: Allow splitting the bill equally, by percentage, or by exact amounts.
- **Payment Tracking**: Track who has paid (optional for later).
- **User Authentication**: Add login functionality to manage bills securely (optional for the initial version).
- **Group Management**: Let users define groups to reuse payee lists.

For the initial version (Minimum Viable Product, or MVP), let’s focus on your core requirements with a simple sharing solution.

---

### Steps to Build the App
Here’s a step-by-step plan to code your bill-splitting web app:

#### Step 1: Plan the Data Structure
Each bill needs a structure to store its details. Here’s a sample JSON representation:

```json
{
  "title": "Dinner at Restaurant",
  "totalAmount": 100.00,
  "payees": [
    {"name": "Alice", "amount": 20.00, "note": "Salad"},
    {"name": "Bob", "amount": 30.00, "note": "Steak"},
    {"name": "Charlie", "amount": 50.00, "note": "Wine"}
  ]
}
```

#### Step 2: Set Up the Backend
We’ll use **Node.js with Express** for the server and **MongoDB** to store bills.

**Install Dependencies**:
```bash
mkdir bill-splitter
cd bill-splitter
npm init -y
npm install express mongoose cors
```

**Backend Code (server.js)**:
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost/bill-splitter', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Bill Schema
const payeeSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  note: String
});

const billSchema = new mongoose.Schema({
  title: String,
  totalAmount: Number,
  payees: [payeeSchema]
});

const Bill = mongoose.model('Bill', billSchema);

// Create a new bill
app.post('/bills', async (req, res) => {
  const bill = new Bill(req.body);
  await bill.save();
  res.json({ id: bill._id });
});

// Get bill details by ID
app.get('/bills/:id', async (req, res) => {
  const bill = await Bill.findById(req.params.id);
  if (!bill) return res.status(404).send('Bill not found');
  res.json(bill);
});

// Export bill as text
app.get('/bills/:id/export', async (req, res) => {
  const bill = await Bill.findById(req.params.id);
  if (!bill) return res.status(404).send('Bill not found');
  let text = `Title: ${bill.title}\nTotal Amount: ${bill.totalAmount}\n\nPayees:\n`;
  bill.payees.forEach(payee => {
    text += `${payee.name}: ${payee.amount} - ${payee.note}\n`;
  });
  res.set('Content-Type', 'text/plain');
  res.send(text);
});

app.listen(5000, () => console.log('Server running on port 5000'));
```

Run the server:
```bash
node server.js
```
(Ensure MongoDB is installed and running locally, or use a cloud service like MongoDB Atlas.)

#### Step 3: Develop the Frontend
We’ll use **React.js** for the user interface.

**Set Up React**:
```bash
npx create-react-app client
cd client
npm install axios
```

**Main Component (src/App.js)**:
```javascript
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [payees, setPayees] = useState([{ name: '', amount: '', note: '' }]);
  const [billId, setBillId] = useState(null);

  const addPayee = () => setPayees([...payees, { name: '', amount: '', note: '' }]);

  const handlePayeeChange = (index, field, value) => {
    const newPayees = [...payees];
    newPayees[index][field] = value;
    setPayees(newPayees);
  };

  const createBill = async () => {
    const bill = { title, totalAmount: parseFloat(totalAmount), payees };
    const response = await axios.post('http://localhost:5000/bills', bill);
    setBillId(response.data.id);
  };

  const shareBill = () => {
    const url = `${window.location.origin}/bills/${billId}`;
    if (navigator.share) {
      navigator.share({
        title: 'Bill Details',
        text: 'Check out this bill',
        url
      });
    } else {
      alert(`Share this link: ${url}`);
    }
  };

  const exportBill = () => {
    window.location.href = `http://localhost:5000/bills/${billId}/export`;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bill Splitter</h1>
      <input
        type="text"
        placeholder="Bill Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total Amount"
        value={totalAmount}
        onChange={(e) => setTotalAmount(e.target.value)}
      />
      {payees.map((payee, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Name"
            value={payee.name}
            onChange={(e) => handlePayeeChange(index, 'name', e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={payee.amount}
            onChange={(e) => handlePayeeChange(index, 'amount', e.target.value)}
          />
          <input
            type="text"
            placeholder="Note"
            value={payee.note}
            onChange={(e) => handlePayeeChange(index, 'note', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addPayee}>Add Payee</button>
      <button onClick={createBill}>Create Bill</button>
      {billId && (
        <>
          <p>Shareable Link: {`${window.location.origin}/bills/${billId}`}</p>
          <button onClick={shareBill}>Share Bill</button>
          <button onClick={exportBill}>Export to Notes</button>
        </>
      )}
    </div>
  );
}

export default App;
```

**Bill View Component (src/BillView.js)**:
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BillView({ id }) {
  const [bill, setBill] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/bills/${id}`).then(response => setBill(response.data));
  }, [id]);

  if (!bill) return <div>Loading...</div>;

  return (
    <div>
      <h1>{bill.title}</h1>
      <p>Total Amount: ${bill.totalAmount}</p>
      <h2>Payees:</h2>
      <ul>
        {bill.payees.map((payee, index) => (
          <li key={index}>{payee.name}: ${payee.amount} - {payee.note}</li>
        ))}
      </ul>
    </div>
  );
}

export default BillView;
```

**Routing (src/App.js with Router)**:
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import BillView from './BillView';

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/bills/:id" render={(props) => <BillView id={props.match.params.id} />} />
      </Switch>
    </Router>
  );
}

export default Main;
```
Update `index.js` to render `Main`:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

ReactDOM.render(<Main />, document.getElementById('root'));
```

Run the frontend:
```bash
cd client
npm start
```

#### Step 4: Implement Sharing and Exporting
- **Sharing**: Each bill gets a unique URL (e.g., `yourapp.com/bills/{bill_id}`). The `shareBill` function uses the Web Share API on mobile or shows the link on desktop.
- **Exporting**: The `/bills/:id/export` endpoint returns a text file. Clicking "Export to Notes" triggers a download, which users can save to their Notes app manually.

#### Step 5: Deploy the Application
- **Frontend**: Deploy to Netlify or Vercel.
  - Drag the `client/build` folder (after running `npm run build`) to Netlify, or push to a Git repo for Vercel.
- **Backend**: Deploy to Heroku or Render.
  - Push the `server.js` code to a Git repo and deploy via Heroku CLI or Render dashboard.
- **CORS**: Ensure the backend allows requests from the frontend domain (handled by `cors` middleware).

---

### How It Meets Your Requirements
1. **Creating Requests**: The form lets the payer input title, total amount, and payees with notes.
2. **Exporting**: The export button downloads a text file that can be saved to Notes.
3. **Sharing**: The shareable link (with Web Share API support) lets users send the bill via Telegram, Messenger, or any app.

---

### Next Steps
- **Test Locally**: Start MongoDB, run the backend (`node server.js`), and frontend (`npm start`).
- **Enhance**: Add authentication, payment tracking, or direct Telegram/Messenger integration (using their APIs) later.

This MVP gives you a functional bill-splitting app with room to grow! Let me know if you need help with any part.
const db = require('F:\\folder-projekty\\praca-mati\\ecpp-projekt\\server.js');

function Companies (req, res) {
    const query = `SELECT Nazwa_firmy from firma WHERE Archiwum = 0`;
    
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error in query:', err);
            return res.status(500).json({ error: 'Database query error' });
        }

        const companies = result.map(company => company.Nazwa_firmy);
        res.json(companies);
    });
}

module.exports = Companies;
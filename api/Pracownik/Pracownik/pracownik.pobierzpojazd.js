const db = require('F:\folder-projekty\praca-mati\ecpp-projekt\server\server.js');;

function PobierzPracownicyPojazd(req, res) {
    const query = `SELECT idPojazdy, Nr_rejestracyjny FROM pojazdy WHERE Archiwum = 0;`;

    db.query(query, (err, result) => {
        if (err) {
            console.error('Błąd pobierania pojazdów:', err);
            res.status(500).send('Błąd pobierania pojazdów');
            return;
        }
        res.json(result);
    }
    );
}

module.exports = PobierzPracownicyPojazd;
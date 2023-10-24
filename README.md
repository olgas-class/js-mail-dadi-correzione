### Esercizio 1
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

### Soluzione
**Dati**
1. Array di email registrati
2. Richiedere email all'utente

**Logica**
1. Inizializzo il frag per segnalare se email è stata trovata
2. Scorro array, per ogni elemento:
    Se elemento è uguale a email dell'utente
        Metto il flag a true
3. Dopo il ciclo for
    Se flag è true
        Allora stampo "trovato, puoi accedere"
    Altrimenti 
        Stampo "non puoi accedere"


### Esercizio 2
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

**Dati**
1. Generare un numero per utente
2. Generare un numero per computer

**Logica**
SE (numero dell'utente > numero del computer) 
    Allora il messaggio è "Hai vinto"
Altrimenti SE (numero del computer > numero dell'utente)
    Allora il messaggio è "Hai perso"
Altrimenti
    Il messaggio è "Pareggio"

**Stampa**
Stampare il messaggio
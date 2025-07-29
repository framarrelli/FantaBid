
# Fantabid - Specifica dei Requisiti Funzionali e Tecnici

**Versione:** 1.0  
**Autore:** OpenDev Studio  
**Data:** 2025-07-29

---

## 1. Descrizione del Sistema

Fantabid è un'applicazione web per la gestione professionale di aste del Fantacalcio, progettata per garantire solidità, flessibilità e continuità operativa.  
Supporta aste multiple (multi-lega), accesso multi-dispositivo tramite QR code, autenticazione opzionale per squadra, rilanci con countdown automatico, gestione budget, esportazione dati e cronologia completa.

---

## 2. Attori del Sistema

- **Amministratore (Banditore):** crea leghe, configura squadre, controlla aste, visualizza risultati
- **Partecipante (Squadra):** effettua offerte durante l'asta, visualizza saldo e rosa

---

## 3. Requisiti Funzionali

### 3.1 Aste (Lega)

- RF-001: Il sistema deve permettere la creazione di più leghe d'asta.
- RF-002: Ogni lega ha un identificatore unico (`auctionId`) usato come query string.
- RF-003: Tutti i dati relativi a calciatori, squadre, budget e cronologia sono referenziati all'`auctionId`.

### 3.2 Squadre

- RF-010: Le squadre possono registrarsi a una lega con nome e budget iniziale.
- RF-011: Ogni squadra può avere una password opzionale.
- RF-012: Il sistema genera un QR code per ogni squadra che punta alla URL `bidder.html?asta=<auctionId>&team=<nome>`.

### 3.3 Offerte

- RF-020: Una squadra può fare rilanci digitando manualmente l'importo.
- RF-021: Il sistema verifica in tempo reale che l'importo non superi il budget residuo.
- RF-022: Ad ogni rilancio, il countdown si resetta (default 15s, personalizzabile).
- RF-023: Alla scadenza del countdown, l’asta viene assegnata e registrata.

### 3.4 Rosa e Ruoli

- RF-030: I ruoli ammessi sono Portiere, Difensore, Centrocampista, Attaccante.
- RF-031: L’admin imposta i limiti rosa per ciascun ruolo.
- RF-032: Il sistema impedisce di superare i limiti per ruolo durante le assegnazioni.

### 3.5 Persistenza e Continuità

- RF-040: Tutti i dati vengono salvati su database SQLite.
- RF-041: Le squadre possono accedere da dispositivi diversi mantenendo il loro stato (rosa, budget).
- RF-042: Il sistema deve permettere export/import manuale dei dati.

### 3.6 Esportazioni

- RF-050: Il sistema deve generare un PDF tabellare con rosa e saldo finale.
- RF-051: Il sistema deve generare esportazioni in formato CSV e JSON.
- RF-052: Il sistema può inviare via email i risultati dell’asta.

---

## 4. Requisiti Tecnici

- RT-001: Frontend responsivo HTML5/CSS3 con layout leggero.
- RT-002: Backend basato su Node.js (Express).
- RT-003: Database SQLite locale.
- RT-004: Generazione dinamica di QR code per ogni squadra.
- RT-005: Compatibilità browser: Chrome, Firefox, Safari, Edge.
- RT-006: Il sistema deve supportare minimo 6 e massimo 12 squadre per lega.
- RT-007: Deve essere possibile configurare countdown e budget iniziali.

---

## 5. Sicurezza

- RS-001: Se abilitata, la password viene richiesta prima dell’accesso alla schermata offerte.
- RS-002: Il nome squadra deve essere univoco all’interno di ogni lega.
- RS-003: Il sistema deve validare i dati di input e impedire accessi non autorizzati.

---

## 6. Formato URL QR

```
https://<dominio>/bidder.html?asta=lega-2025&team=RealMarrelli
```

---

## 7. Estensioni Future (non obbligatorie)

- Import automatico calciatori da file Excel ufficiale Fantacalcio
- Draft turnato con ordine prestabilito
- Classifica rosa in tempo reale
- Autenticazione multiutente + dashboard avanzata

---

## 8. Allegati

- README.md con istruzioni installazione
- File `.zip` contenente codice completo frontend + backend
- File CSV e JSON di esempio (in fase successiva)

---

**Documento creato per uso professionale.**  
Può essere analizzato da un sistema AI per generazione automatica di codice.

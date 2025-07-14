# SauceDemo Testautomatisierung mit Playwright

## Ziel

Automatisierte Tests für den Onlineshop "SauceDemo" (https://www.saucedemo.com/).

## Setup

```
npm install
npx playwright install
```

## Tests ausführen

```
npx playwright test
```

## Testbericht öffnen

```
npx playwright show-report
```

## Ordnerstruktur

```
bQ-academy-saucedemo/
├── tests/                  # Testfälle (Login, Checkout, etc.)
│   ├── login.spec.ts
│   └── checkout.spec.ts
├── pages/                  # Page Objects für POM-Architektur
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutStepOnePage.ts
│   └── CheckoutStepTwoPage.ts
│   └── CheckoutCompletePage.ts
├── utils/                  # Hilfsfunktionen und Testdaten
│   ├── testData.ts
│   └── helpers.ts
├── package-lock.json       # Exakte Versionen der Abhängigkeiten
├── package.json            # Abhängigkeiten und Scripts
├── playwright.config.ts    # Playwright-Konfiguration
└── README.md               # Projektdokumentation
```

## Reporting an den Kunden

### Was wurde bereits umgesetzt?
#### Hohe Priorität

- Login-Test mit validen Daten
- Login-Test bei invaliden Daten
- Checkout-Prozess
### Was steht noch aus?

#### Mittlere Priorität

- Produktauswahl und Warenkorb-Funktionalität
- Produktdetailseite

#### Niedrige Priorität

- Sortierung
- Layout

### Warum wurden diese Bereiche priorisiert?

#### Hohe Priorität

Die Funktionalität "Login" ist sicherheitskritisch und wird von jedem Benutzer verwendet. Der Checkout-Prozess betrifft den direkten Kaufabschluss und hat die höchste geschäftliche Relevanz.

#### Mittlere Priorität

Diese Funktionen sind wichtig für die User Experience, aber bei Fehlern ist eine begrenzte Nutzung noch möglich. Die Produktauswahl und der Warenkorb ermöglichen es den Nutzern, Produkte zu sammeln, bevor sie zur Kasse gehen. Die Produktdetailseite liefert wichtige Informationen, beeinflusst aber nicht unmittelbar die Kaufabwicklung.

#### Niedrige Priorität

Diese Punkte haben einen geringen Einfluss auf die Hauptfunktionen. Eine fehlerhafte Sortierung oder ein nicht perfektes Layout kann die Nutzererfahrung beeinträchtigen, verhindert aber nicht den eigentlichen Kaufprozess.

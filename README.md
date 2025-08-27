# single-page-application
# &#9889; Vanilla JS SPA

Minimal **Single Page Application** with **hash routing**.
No frameworks. No build step.

---

## &#128194; Files

```

index.html  # layout + navigation
app.js      # routes + rendering

```

---

## &#9654; Run

1. Open `index.html` in a browser.
2. Use the top navigation or edit the URL hash.

---

## &#128270; Routes

- `#/` &#8594; Home
- `#/about` &#8594; About
- `#/contact` &#8594; Contact
- Unknown &#8594; 404

---

## &#128248; Demo

**Home**
```

Welcome Home
This is our SPA home page.

```

**About**
```

About Us
Lern about our company.

```

**Contact**
```

Contact Us
Get in touch with our team.

```

**404**
```

Page Not Found

```

---

## &#128256; Flow

```

User clicks link ──► URL hash changes
                                |
                                ▼
                        Router checks route    
                             |
                 ┏━━━━━━━━━━━╋━━━━━━━━━━━┓  
                 ▼           ▼           ▼  
                \#/       #/about    #/contact 
               (Home)     (About)     (Contact)                     
                 ┃
                 ▼
              Unknown → 404

```
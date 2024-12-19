# Dev-Dragons

This project was built as part of the Alura course **JavaScript: classes and inheritance in object-oriented development**. It showcases the use of modular JavaScript to build a dynamic card-based application.

## 🌐 Live Demo

See the application in action at: [Dev-Dragons](https://dev-dragons-chi.vercel.app/)

## 🖼️ Preview

![Dev-Dragons Preview](./src/assets/img/preview.png)

## 🔨 Project Features
- **Object-Oriented Programming (OOP):**
  - Implementation of classes (`Mage`, `Warrior`, `Archer`, and `ArcherMage`) extending a base `Character` class.
  - Use of encapsulation, inheritance, and polymorphism.
- **Dynamic Rendering:**
  - JavaScript dynamically generates character cards based on their attributes.
  - Integration of styles and images for each character type.
- **Interactive Duel System:**
  - Select characters to battle.
  - Displays the winner or a tie based on the level and attributes.

## ✔️ Technologies Used
- **HTML**: Semantic structure of the page.
- **CSS**:
  - Styling for card layouts and modal interactions.
  - Responsive design using Flexbox.
- **JavaScript**:
  - Modular approach with separate files for character logic and rendering.
  - Class-based implementation for clean and reusable code.

## 📂 Project Structure
```bash
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── modal.css       # Modal styling
│   │   │   ├── reset.css       # CSS reset
│   │   │   ├── style.css       # Main styles
│   │   ├── img/                # Images for characters and layout
│   ├── components/
│   │   ├── character-view.js   # Renders character cards
│   │   ├── modal.js            # Modal logic
│   ├── modules/
│   │   ├── character.js        # Base Character class
│   │   ├── mage.js             # Mage class
│   │   ├── warrior.js          # Warrior class
│   │   ├── archer.js           # Archer class
│   │   ├── archer-mage.js      # ArcherMage class
│   ├── index.html              # Main HTML file
├── index.js                    # Entry point script
```

## 🚀 Deployment
The project was deployed using **Vercel**, ensuring fast and reliable hosting.

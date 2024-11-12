# ✨ Artem Dinh Cyber Portfolio: https://artemislong.netlify.app/

---

### 🖥 Project Overview
A cyber-themed portfolio website developed to showcase my professional experiences, playful projects, and personal interests (information not updated since 2022). Built using React and powered by components from the [Arwes UI Framework](https://github.com/arwes/arwes), the site features interactive sound effects, animations, and a futuristic cyberpunk design.

---

### 🛠 Key Components

#### ⚙️ `App.js`
The central component of the application, `App.js`, orchestrates the layout, themes, sounds, and user interface interactions across the portfolio.

- **Imports**:
  - Utilizes [Arwes](https://github.com/arwes/arwes), a futuristic design framework that provides cyber-themed components and animations. Most UI elements are sourced from this framework, including `ThemeProvider`, `SoundsProvider`, `Button`, `Frame`, `Highlight`, `Header`, and `Footer`.
  - Imports sound effects (`click`, `deploy`, `typing`) and background images to create an engaging visual and auditory experience.
  - Includes primary components like `Profile`, `InfoFrame`, and navigation buttons for LinkedIn and Contact.

- **Theme and Sound Configurations**:
  - **Custom Theme**: Defines a cyberpunk color palette with neon greens, blues, and bright accents.
  - **Sounds**: Configures sound effects that trigger with user interactions, enhancing the immersive experience.

- **Sections**:
  - **HighlightNav**: An animated navigation menu allowing users to switch between "Experience," "Play," and "Ideas" sections.
  - **InfoFrame**: Displays content based on the selected section, with smooth transitions.

- **Main Layout**:
  - Leverages the `Arwes` framework's `ThemeProvider`, `SoundsProvider`, and layout components to create a cohesive cyber look and feel.
  - **Header and Footer**: Includes site title, social media links, and a "Back to top" button for easy navigation.

---

### 📄 Sections and Data

1. **Experience** 🧑‍🔬
   - Highlights professional projects and volunteer experiences, including:
     - Research on polarized laparoscopic camera development.
     - Stanford Cleantech 2020 finalist team.
     - Social audio platform project with USC Lavalab.

2. **Playful Projects** 🎮
   - Showcases creative projects like:
     - *Covidtrip*: Information platform for travelers.
     - *Biteguide*: A skill-sharing platform with step-by-step text tutorials.
     - *Smart Food Plate*: A project for nutrition education for children.

3. **Thoughts & Ideas** 💡
   - Personal reflections and ideas, including thoughts on history, random ideas, etc.

---

### 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/artemislong/Artem_Cyber_Portfolio.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

### 🔮 Future Enhancements

- **Image and Content Updates**:
  - Replace placeholder images with high-quality photos.
  - Add more content under "Thoughts & Ideas" for personal insights.

- **Credits**:
  - Locate and credit the original source of some design elements if found.

- **Additional Privacy Measures**:
  - Review any sensitive information displayed to ensure compliance with privacy standards.

---

### 🤝 Acknowledgments
This project’s design, CSS, and components are heavily inspired by and utilize the [Arwes UI Framework](https://github.com/arwes/arwes), which provides a futuristic and cyberpunk aesthetic that aligns with the portfolio's vision. Special thanks to the creators of Arwes for their creative contributions to the cyber-themed design.

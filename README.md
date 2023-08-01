<h1 align="center">Ginger Up - Food Recipe Website</h1>

Welcome to Ginger Up, your one-stop destination for exploring delicious recipes from around the world. Our website offers an interactive user-friendly interface with sign-up credentials, a powerful API to fetch recipes based on various criteria, a helpful chatbot that personalizes your recipe recommendations, and video tutorials to assist you in creating culinary masterpieces.


![home page](https://github.com/Shaina-Sarika/Ginger-Up/assets/130648106/b7af2dcd-ef38-4317-a51d-dcc83e9499c9)

## Features

1. **Interactive User-friendly Interface:** Our website is designed to provide a seamless user experience. The intuitive interface allows you to navigate through various recipes and find what you desire quickly.

2. **User Sign-up and Login:** Sign up with your email and password to create an account and log in to Foodie Delights. This will enable you to save your favorite recipes, keep track of your cooking journey, and engage with other food enthusiasts.

3. **API for Recipe Search:** Our powerful API allows you to search for recipes based on different criteria:
   - **Ingredient:** Find recipes that include your favorite ingredient.
   - **Region:** Explore culinary delights from specific regions around the globe.
   - **Letter:** Discover recipes starting with a particular letter.
   - **Cuisine:** Indulge in the flavors of various cuisines from different cultures.
   - **Type:** Choose recipes based on your preferred meal type (breakfast, lunch, dinner, dessert, etc.).

4. **Personalized Recipe Recommendations:** Our smart chatbot engages in a friendly conversation with you, asking questions about your dietary preferences, allergies, and tastes. Based on your responses, it provides tailored recipe suggestions that match your unique requirements.

5. **Video Tutorials:** We understand that visual guidance can be invaluable when trying out new recipes. Foodie Delights offers a collection of video tutorials to assist you in preparing the most delightful dishes with ease.

## Tech Stack

- **Backend:**
  - Node.js and Express: For building the server and handling API requests.
  - MongoDB: To store and manage recipe data and user information.

- **Frontend:**
  - HTML, CSS, and JavaScript: For creating the user interface and interactivity.

## Getting Started

1. Ensure you have Node.js and MongoDB installed on your system.

2. Clone this repository to your local machine:
   ```
   git clone https://github.com/your-username/foodie-delights.git
   ```

3. Navigate to the backend directory and install the required dependencies:
   ```
   cd foodie-delights/backend
   npm install
   ```

4. Set up your MongoDB connection in `config.js`:

   ```javascript
   module.exports = {
     mongodbURI: 'your-mongodb-connection-string',
   };
   ```

5. Start the backend server:
   ```
   npm start
   ```

6. Open a new terminal window, navigate to the frontend directory, and install the required dependencies:
   ```
   cd ../frontend
   npm install
   ```

7. Start the frontend development server:
   ```
   npm start
   ```

8. Open your web browser and visit `http://localhost:3000` to access Foodie Delights.

## Contributing

We welcome contributions from the open-source community. If you find any issues or want to enhance the website's functionality, feel free to submit a pull request.

## License

Foodie Delights is open-source and licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact Us

If you have any questions, suggestions, or feedback, please don't hesitate to [contact us](mailto:contact@foodiedelights.com).

Happy cooking and bon appétit! 🍽️

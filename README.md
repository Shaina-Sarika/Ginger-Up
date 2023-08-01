<h1 align="center">Ginger Up - Food Recipe Website</h1>

Welcome to Ginger Up, your one-stop destination for exploring delicious recipes from around the world. Our website offers an interactive user-friendly interface with sign-up credentials, a powerful API to fetch recipes based on various criteria, a helpful chatbot that personalizes your recipe recommendations, and video tutorials to assist you in creating culinary masterpieces.

Project is live at <https://shaina-sarika.github.io/Ginger-Up/>


![home page](https://github.com/Shaina-Sarika/Ginger-Up/assets/130648106/b7af2dcd-ef38-4317-a51d-dcc83e9499c9)

##Problem Statement
Many of us have faced the dilemma of wanting to cook something delicious but being short on ingredients at home. It becomes challenging to figure out what to cook with the limited items available in our kitchen. Whether we cannot go out to buy groceries or are confined to our homes due to various circumstances like the COVID-19 pandemic, we often find ourselves feeling helpless in such situations.

We resort to searching for recipes online that match our available ingredients, but it's frustrating to hardly find any suitable results, and the process consumes a lot of time. As a result, we often end up disappointed, unable to make the most of what we have in our kitchen. There is a clear need for a solution that can take our available ingredients as input and provide us with a list of recipes that perfectly suit our situation, enabling us to create delicious food at home.

##Our Solution
Introducing "Ginger Up" a user-friendly system designed to assist you in such predicaments. Ginger Up offers a comprehensive solution to address the challenges faced when cooking with limited ingredients. Our system provides the following functionalities:

Ingredient-Based Search: Input the ingredients available in your kitchen, and Ginger Up will find recipes that incorporate those specific ingredients, turning your limited supplies into delightful culinary creations.

Region-Based Exploration: Embark on a culinary journey around the world by exploring recipes from different regions. Discover unique and authentic flavors from diverse cultures.

Letter-Based Search: Feeling adventurous or want to try a new dish? Ginger Up allows you to find recipes that start with a specific letter, making cooking more exciting and experimental.

Cuisine Selection: Indulge in the exquisite flavors of various cuisines. Whether you crave Italian pasta, Indian curry, or Japanese sushi, Ginger Up has it all covered.

Meal Type Filter: Select your preferred meal type, whether it's breakfast, lunch, dinner, or dessert, and Ginger Up will provide you with the perfect recipe to suit your tastes.

With Ginger Up, you no longer need to worry about lacking ingredients or searching fruitlessly for recipes. Our system will guide you step-by-step, ensuring a satisfying cooking experience every time.


## Features

1. **Interactive User-friendly Interface:** Our website is designed to provide a seamless user experience. The intuitive interface allows you to navigate through various recipes and find
what you desire quickly.

 ![User-friendly](https://github.com/Shaina-Sarika/Ginger-Up/assets/130648106/836413e8-e880-4817-9141-9664d5ab2eef)

 
2. **User Sign-up** Sign up with your username, email, phone number and password to create an account and log in to Foodie Delights. This will enable you to receive updates on new recipes and weekly newslates on delightful recipes.



3. **API for Recipe Search:** Our powerful API allows you to search for recipes based on different criteria:
   - **Ingredient:** Find recipes that include your favorite ingredient.
   - **Region:** Explore culinary delights from specific regions around the globe.
   - **Letter:** Discover recipes starting with a particular letter.
   - **Cuisine:** Indulge in the flavors of various cuisines from different cultures.
   - **Type:** Choose recipes based on your preferred meal type (breakfast, lunch, dinner, dessert, etc.).

![Recipe Search](https://github.com/Shaina-Sarika/Ginger-Up/assets/130648106/63bf2387-671d-430e-afb9-1930d1044322)


4. **Personalized Recipe Recommendations:** Our smart chatbot engages in a friendly conversation with you, asking questions about your dietary preferences, tastes and  number of people to be fed. Based on your responses, it provides tailored recipe suggestions that match your unique requirements.

![ChatBot](https://github.com/Shaina-Sarika/Ginger-Up/assets/130648106/e15d7335-69e1-45d8-9fae-2dfcc8daa00a)
![ChatBot (2)](https://github.com/Shaina-Sarika/Ginger-Up/assets/130648106/e6c16b2a-4c19-4dc4-9d63-aee340be900b)



5. **Video Tutorials:** We understand that visual guidance can be invaluable when trying out new recipes. Foodie Delights offers a collection of video tutorials to assist you in preparing the most delightful dishes with ease.

![video tutorials](https://github.com/Shaina-Sarika/Ginger-Up/assets/130648106/8efba718-4ce2-4f61-bc54-a4d83387c103)


## Tech Stack

- **Backend:**
  - Node.js and Express: For building the server and handling API requests.
  - MongoDB: To store and manage recipe data and user information.

- **Frontend:**
  - HTML, CSS, Bootstrap and JavaScript: For creating the user interface and interactivity.

## Getting Started

1. Ensure you have Node.js and MongoDB installed on your system.

2. Clone this repository to your local machine:
   ```
   git clone https://github.com/Shaina-Sarika/Ginger-Up.git
   ```

3. Navigate to the backend directory and install the required dependencies:
   ```
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
   npm install
   ```

7. Start the frontend development server:
   ```
   npm start
   ```

8. Open your web browser and visit `http://localhost:3000` to access Ginger Up.

## Contributing

We welcome contributions from the open-source community. If you find any issues or want to enhance the website's functionality, feel free to submit a pull request.
Give a ⭐️ if you like this project!

## Contact Us

If you have any questions, suggestions, or feedback, please don't hesitate to [contact us](mailto:shainasarika@gmail.com).
LinkedIn : <https://www.linkedin.com/in/shaina-sarika/>
GitHub : <https://github.com/Shaina-Sarika>

Happy cooking and bon appétit! 🍽️

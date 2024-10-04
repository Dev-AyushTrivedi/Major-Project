<h1>Welcome to the Travel Planner App! 🌍✈️</h1>

<p>This project is a <strong>Travel Planning</strong> application built using <strong>React Native</strong> with
  <strong>Expo</strong>, integrated with <strong>Firebase</strong> for authentication, <strong>Gemini AI</strong> for
  intelligent suggestions, and <strong>Google API</strong> for location-based data.</p>

<p>This is an <a href="https://expo.dev" target="_blank">Expo</a> project created with <a
    href="https://www.npmjs.com/package/create-expo-app" target="_blank">create-expo-app</a>.</p>

<hr>

<h2>🚀 Get Started</h2>

<h3>1. Install dependencies</h3>
<pre><code>npm install</code></pre>

<h3>2. Start the app</h3>
<pre><code>npx expo start</code></pre>

<p>You’ll see options to open the app in:</p>
<ul>
  <li><a href="https://docs.expo.dev/develop/development-builds/introduction/" target="_blank">Development Build</a>
  </li>
  <li><a href="https://docs.expo.dev/workflow/android-studio-emulator/" target="_blank">Android Emulator</a></li>
  <li><a href="https://docs.expo.dev/workflow/ios-simulator/" target="_blank">iOS Simulator</a></li>
  <li><a href="https://expo.dev/go" target="_blank">Expo Go</a>, a sandbox for testing apps quickly</li>
</ul>

<h3>3. Firebase Setup</h3>
<ol>
  <li>Create a Firebase project in the <a href="https://console.firebase.google.com/" target="_blank">Firebase
      Console</a>.</li>
  <li>Add your Firebase config to the <code>firebase.js</code> file.</li>
</ol>

<h3>4. Google API Setup</h3>
<ol>
  <li>Enable Google Places API in the <a href="https://console.cloud.google.com/" target="_blank">Google Cloud
      Console</a>.</li>
  <li>Add your API key to the environment variables.</li>
</ol>

<hr>

<h2>🌍 App Overview</h2>

<h3>Travel Planner App</h3>
<p>The app enables users to plan their trips, receive AI-powered suggestions for destinations, and create detailed
  itineraries. It features:</p>
<ul>
  <li><strong>User Authentication</strong> with Firebase.</li>
  <li><strong>AI-generated Recommendations</strong> using Gemini AI.</li>
  <li><strong>Google API Integration</strong> for location-based data and searching destinations.</li>
</ul>

<h3>App Flow</h3>
<p>Here is a visual representation of the app’s workflow:</p>
<img src="path-to-your-diagram.png" alt="App Flow Diagram">

<ul>
  <li><strong>Phase 1</strong>: User Sign-In or Sign-Up.</li>
  <li><strong>Phase 2</strong>: Start a new trip by selecting the destination.</li>
  <li><strong>Phase 3</strong>: Enter trip details such as dates, number of travelers, and budget.</li>
  <li><strong>Phase 4</strong>: AI-generated trip suggestions using Gemini.</li>
  <li><strong>Phase 5</strong>: View the final trip itinerary and daily plans.</li>
</ul>

<hr>

<h2>🧠 Key Features</h2>
<ol>
  <li><strong>Firebase Authentication</strong>: Users can securely sign up or log in using Firebase.</li>
  <li><strong>Gemini AI Integration</strong>: Personalized travel recommendations based on budget, preferences, and
    travel dates.</li>
  <li><strong>Google API Integration</strong>: Provides users with destination search, places, and reviews using the
    Google Places API.</li>
  <li><strong>Detailed Itineraries</strong>: Users can view day-to-day trip itineraries and activities.</li>
</ol>

<hr>

<h2>🛠️ Project Structure</h2>
<ul>
  <li><strong>app/</strong>: Contains all the core app components.</li>
  <li><strong>firebase.js</strong>: Configuration and functions for Firebase Authentication.</li>
  <li><strong>Gemini.js</strong>: AI integration for generating travel suggestions.</li>
  <li><strong>GoogleAPI.js</strong>: Fetches data from Google Places API for destinations.</li>
</ul>

<hr>

<h2>📸 Screenshots</h2>
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Screenshot</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Sign-In Screen</strong></td>
      <td><img src="path-to-sign-in-screenshot.png" alt="Sign In Screen"></td>
    </tr>
    <tr>
      <td><strong>Trip Planner</strong></td>
      <td><img src="path-to-trip-planner-screenshot.png" alt="Trip Planner Screen"></td>
    </tr>
    <tr>
      <td><strong>AI Suggestions</strong></td>
      <td><img src="path-to-ai-suggestions-screenshot.png" alt="AI Suggestions Screen"></td>
    </tr>
    <tr>
      <td><strong>Itinerary Details</strong></td>
      <td><img src="path-to-itinerary-details-screenshot.png" alt="Itinerary Details Screen"></td>
    </tr>
  </tbody>
</table>

<hr>

<h2>🎥 Demo Video</h2>
<p><a href="path-to-your-demo-video" target="_blank">Click here to watch the demo video</a></p>

<hr>

<h2>🔧 Development Workflow</h2>
<p>You can begin development by editing files inside the <strong>app/</strong> directory. The project uses <a
    href="https://docs.expo.dev/router/introduction/" target="_blank">file-based routing</a> for easy navigation between
  screens.</p>
<p>If you want to reset the project, you can run:</p>
<pre><code>npm run reset-project</code></pre>
<p>This command moves the starter code to <strong>app-example/</strong> and creates a blank <strong>app/</strong>
  directory for fresh development.</p>

<hr>

<h2>📚 Learn More</h2>
<p>For more details about developing apps using Expo, check out these resources:</p>
<ul>
  <li><a href="https://docs.expo.dev/" target="_blank">Expo Documentation</a>: Dive into the basics or advanced topics.
  </li>
  <li><a href="https://docs.expo.dev/tutorial/introduction/" target="_blank">Learn Expo Tutorial</a>: Step-by-step guide
    to building apps for Android, iOS, and web.</li>
</ul>

<hr>

<h2>💬 Join the Community</h2>
<ul>
  <li><a href="https://github.com/expo/expo" target="_blank">Expo GitHub</a>: Contribute to the open-source platform.
  </li>
  <li><a href="https://chat.expo.dev" target="_blank">Expo Discord</a>: Chat with fellow developers, ask questions, and
    share your work.</li>
</ul>

<hr>

<h2>🚀 Future Enhancements</h2>
<ul>
  <li><strong>Push Notifications</strong>: Alerts for trip reminders and updates.</li>
  <li><strong>Offline Access</strong>: Enable users to access saved trip details even without an internet connection.
  </li>
  <li><strong>Social Sharing</strong>: Allow users to share trip itineraries with friends or on social media.</li>
</ul>

<hr>

<h2>📝 License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE" target="_blank">LICENSE</a> file for
  details.</p>
</body>

</html>

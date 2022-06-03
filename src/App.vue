<template>
 
  

  <RouterView />
</template>

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDqF2Zm6FCCVlLuLLcoKpVHEZCtdZBTzu0",
    authDomain: "jazz-fest-sae-203.firebaseapp.com",
    projectId: "jazz-fest-sae-203",
    storageBucket: "jazz-fest-sae-203.appspot.com",
    messagingSenderId: "473515842369",
    appId: "1:473515842369:web:73de4fadb6931d821a5fc0",
    measurementId: "G-JQFYGZ43RC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
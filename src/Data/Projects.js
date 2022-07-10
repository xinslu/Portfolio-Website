let projects = [
    {
        title: "Speech2Code",
        link: "https://github.com/saisree27/speechtocode",
        tech: "Python, ReactJS, Express.js",
        description: `Speech2Code is a <span class="highlight"> turing-complete website</span> that helps translate a spoken english like <span class="highlight"> meta language </span> to Java, JavaScript and Python, using a <span class="highlight"> language agnostic class-based abstraction system </span> that enables easy addtion of language support. The speech transcription is done using the <span class="highlight"> AssemblyAI API </span>. I worked on making the Programming Language Middle-End and worked on making CSS changes on the front-end website.`,
    },
    {
        title: "DetectCNN",
        link: "https://github.com/xinslu/DetectCNN",
        tech: "OCaml, Owl, Eigen",
        description: `DetectCNN is my implementation of the <span class="highlight">Mask Region Based Convolutional Neural Network</span> Paper, written in OCaml using Owl and Eigen. Worked on sorting <span class="highlight">LLVM</span> issues in Owl on <span class="highlight">Darwin M1</span> by contributing to the Github issue. Read and summarized findings of the <span class="highlight">  R-CNN, Fast R-CNN, Faster R-CNN Papers </span>. Studied <span class="highlight"> Instance and Semantic Segmentation approaches, Region Proposal Techniques </span> and <span class="highlight"> Feature Extraction Methods. </span>`,
    },
    {
        title: "Enhance",
        link: "https://github.com/xinslu/Enhance",
        tech: "Python, Tensorflow, Keras",
        description: `Enhance is my implementation of the <span class="highlight">Super Resolution Generative Adverserial Network</span> Paper using tensorflow, which uses a ResNet with a <span class="highlight">Perceptual Loss function</span> based on discriminator probability and the euclidean distance between the feature representations of a <span class="highlight">reconstructed image</span> and <span class="highlight">reference image</span>, to achieve a high level of super resolution. Ran and trained the model on the DIV2K dataset achieving perceptible improvements in image quality on the <span class="highlight">DIV2K dataset with downscale factor 4 </span>`,
    },
    {
        title: "DeusCL",
        link: "https://github.com/xinslu/deusCL",
        tech: "Python",
        description: `DeusCL is a <span class="highlight">Common LISP</span> implementation with a REPL built in <span class="highlight">Rust</span> . Built on a memory-efficient, memory-safe and fast REPL using <span class="highlight">Rust references and borrowing principles</span>. Made a <span class="highlight">Recursive Descent Parser</span> and a Scanner to <span class="highlight">parse S-Expressions</span>. Added functionality for addtional operators.`,
    },
    {
        title: "PaperPlanes",
        link: "https://github.com/AllisanLu/PaperPlanes",
        tech: "Unity, C#",
        description: `Working on Paper Planes, a <span class="highlight">2D sidescroller platformer</span> created with <span class="highlight">Unity</span> as a part of the VGDev Club on campus. I worked on a <span class="highlight">relaunch mechanism</span> using custom aero dynamics, a <span class="highlight">particle system</span> for paper plane trail, and one for <span class="highlight">collisions with objects</span>. I also worked on making a <span class="highlight">Quest API</span> to show the current quests going on.`,
    },
    {
        title: "hack-a-lang",
        link: "https://github.com/xinslu/hack-a-lang",
        tech: "Python",
        description: `As a part of a dependently-typed (Programming Language Club) on campus, I worked on a <span class="highlight">python implementation</span> of the common teaching language Lox. I worked on building and degubbing a <span class="highlight">Recursive Descent Parser, Scanner</span> and a made a script to generate a <span class="highlight">python class system</span> for different atoms and a <span class="highlight">visitor pattern</span> for the interpreter class. I also worked on the <span class="highlight">AST</span> and a <span class="highlight">language environment</span> to store function and variable declration. I lectured at the event about <span class="highlight">AST evaluation, dynamic environment creation</span> for functional and recrusive calls and <span class="highlight">implementating the vistitor patters </span> for interpreters.`,
    },
    {
        title: "Publixmon",
        link: "https://github.com/saisree27/publixmon",
        tech: "ReactJS, Express.js, Flask, Firebase, Solidity, Ganache, IPFS, Web3.js, NCR API",
        description: `Publixmon is a <span class="highlight">full-stack mobile app</span> integrating modern day NFT and Style Tranfer technologies to create a unique interactive retail experience. With every checkout, the app has a chance to give the user a NFT using a <span class="highlight">style tranfer machine learning model</span> based on two attributes a famous painting by a <span class="highlight">renaissance painting</span> and an item in your <span class="highlight">purchase history</span>. Users walk into a store and scan a QR code to see other active users who are in the store and they can <span class="highlight">socialize</span>, see each other's collections of virtual toys, and <span class="highlight">trade</span> them to grow their collection. A user's collection is auto-scored based on size and <span class="highlight">variety of collectibles</span>, resulting in <span class="highlight">higher engagement</span> for the business. I worked on making the backend blockchain that generates the NFTs that uses the style tranfer images using <span class="highlight">Solidity</span> and a <span class="highlight">Ganache Blockchain</span> to test it on. I worked on creating the backend for the project that uses the <span class="highlight">NCR API</span> to serve purchase history and <span class="highlight">CDN Network</span> to store the style transfered images.`,
    },
    {
        title: "Mental Health Chat",
        link: "https://github.com/xinslu/mental-health-chat",
        tech: "ReactJS, Express.js, MongoDB, Firebase, Socket.IO",
        description: `A timed chat for people to share and talk about issues they're having in relation with their mental health and help them overcome it. A message in the <span class="highlight">Redis database</span> to expire in about <span class="highlight">6 hours</span> in order to encourage people to come out and discourage users from harrasing one another. Created a <span class="highlight">Dockerized App</span> with a Redis Instance during development. Set-up a Log-In page using <span class="highlight">Firebase</span> that is capable of using <span class="highlight">Google OAuth</span>, the users can then set their username, add a profile picture and set the theme (light/dark) for the app, before getting started chatting on the server.`,
    },
    {
        title: "Twitake",
        link: "https://twitake.netlify.app/",
        tech: "ReactJS, Express.js, MongoDB, Firebase, Twitter API, Gensim, NLTK, Node.js",
        description: `A <span class="highlight">full-stack fake disaster tweet analysis tool</span> that uses <span class="highlight">TwitterAPI</span> to extract the text from the tweet link that the user pastes in input box and data processing tools like <span class="highlight">lemmatization, tokenization, N-Grams, Stop Words </span>, removal of punctuation, and a <span class="highlight">TD-IDF based Logistic Regression NLP model</span> with a 81% accuracy. Used MongoDB, to store user hashed user credentials, created a token authentication system and used localstorage to automatically sign-in and verify the user.`,
    },
    {
        title: "Cravescale",
        link: "https://xd.adobe.com/view/4fe38c47-1f58-4a35-4fdb-46ef7a26ea66-39d2/grid/",
        tech: "AbodeXD, Python",
        description: `An app to combat food waste that uses machine learning to predict accurately, the calories a person has to consume at any given time. The <span class="highlight">multi-feature regression model</span> uses parameters like based on factors like <span class="highlight">BMI, Diet Regime and Food Schedule</span> that are entered when the users registers for the app. These calories are then converted to the <span class="highlight">users favourite foods</span> and the quantity so that the user can avoid ordering or making excess food and stop wasting. The app includes an additional feature that helps the users contact the <span class="highlight">food donation agencies</span> around them, so that they can call the agencies if there is food leftover.`,
    },
    {
        title: "Spam Filter",
        link: "https://github.com/xinslu/Spam-Classifier",
        tech: "Python",
        description: `A spam classification <span class="highlight">TD-IDF Logistic Regression NLP model</span> with a <span class="highlight">95% accuracy</span> to be used in mail and SMS filtering. I visualized and analyzed data using <span class="highlight">WordCloud </span> and worked on setting optimal parameters.`,
    },
];

export default projects;

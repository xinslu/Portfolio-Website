---
layout: ../layouts/Markdown.astro
title: Projects
activeTab: projects
---
# Projects


## [Hateful Memes Challenge](https://github.com/xinslu/hateful-memes-dl)
*Python, PyTorch, Hugging Face*

Created a model to compete in the Hateful Memes challenge by Meta. The model
utilizes Facebook's **MMF** (Multi-Model Framework) and the **MultiModal Bitransfomer
HuggingFace Model**, which integrates **BERT** and **CLIP** models. The model uses the
CLIP part of the model for image encoder and BERT part of the model for text
encoder. There was an extensive tiling function applied for the image
processing that enabled more context for the CLIP model. The text was augmented
using the **Easy Augmentation Method**. This model with relatively low short amount
of training managed to make the same performance as the **top 50 submissions** in
the competition.

## [Tectonic (WIP)](https://github.com/xinslu/tectonic)
*Rust*

Contributed to an open source project called tectonic, which is a modernized,
complete, self-contained TeX/LaTeX engine, powered by XeTeX and TeXLive. I
added the ability for users to specify a **target output pdf** to build, amongst a
series of outputs.


## [BuzzOS Rust Standard Library](https://github.com/xinslu/rust-std-buzzos)
*Rust*

Worked on making a minimal implementation of the **Rust Standard Library** for
BuzzOS, which is an OS developed by the TAs of the Operating Systems class at
GT. This special version of the Standard Library was implemnented **without a
libc**, and using wrapper based interface around **raw syscalls**. I included a
**String**, **Vector**, **Box** and **Cell** Implementation along with the
**multiple traits** implemented for each of these types. Implemented a **user
space**, and allowed the kernel to gracefully handoff to the userspace after
setup.

## [Mandelbrot Madness (WIP)](https://github.com/saisree27/mandelbrot-madness)
*C++, SFML*

Mandlebrot Madness is a **3D Fractal Based Platformer** that is written in C++
using the SFML library. Writing a **3D camera** with mouse and keyboard controls
for the user.

## [Brush (WIP)](https://github.com/xinslu/brush)
*C*

Brush is a **minimally POSIX compliant shell** that is written in C. Written to
implement how much ever of the POSIX compliancy I can. Added **basic shell**
that can process any command in the PATH with proper **error reporting**.
Working on implementing a **POSIX interpreter** enabling the building of
command-line scripts.

## [Speech2Code](https://github.com/saisree27/speechtocode)
*Python, ReactJS, Express.js*

Speech2Code is a **turing-complete website** that helps translate a spoken
english like **meta language** to Java, JavaScript and Python, using a
**language agnostic class-based abstraction system** that enables easy addtion
of language support. The speech transcription is done using the **AssemblyAI
API**. I worked on making the Programming Language Middle-End and worked on
making CSS changes on the front-end website.

## [DetectCNN (WIP)](https://github.com/xinslu/DetectCNN)
*OCaml, Owl, Eigen*

DetectCNN is my implementation of the **Mask Region Based Convolutional Neural
Network** Paper, written in OCaml using Owl and Eigen. Worked on sorting
**LLVM** issues in Owl on **Darwin M1** by contributing to the Github issue.
Read and summarized findings of the **R-CNN, Fast R-CNN, Faster R-CNN Papers**.
Studied **Instance and Semantic Segmentation approaches, Region Proposal
Techniques** and **Feature Extraction Methods**.

## [Enhance](https://github.com/xinslu/Enhance)
*Python, Tensorflow, Keras*

Enhance is my implementation of the **Super Resolution Generative Adverserial
Network** Paper using tensorflow, which uses a ResNet with a **Perceptual Loss
function** based on discriminator probability and the euclidean distance
between the feature representations of a **reconstructed image** and
**reference image**, to achieve a high level of super resolution. Ran and
trained the model on the DIV2K dataset achieving perceptible improvements in
image quality on the **DIV2K dataset with downscale factor 4**.

## [DeusCL](https://github.com/xinslu/deusCL)
*Rust, Yew Framework*

DeusCL is a memory-safe **Common LISP** implementation with a REPL built in
**Rust** . Built a handwritten **recursive descent parser** and a visitor
pattern dependent evaluator. Added a basic **type inference**, **type
checking** and **error handling system**. Added **dynamic evaluation of
functional environment** and parameters. Wrote a simple **garbage collector**
and environment cleaner. Built a frontend in **Yew Framework** in Rust to
enable users to use a web based simulation of REPL.

## [PaperPlanes](https://github.com/AllisanLu/PaperPlanes)
*Unity, C#*

Working on Paper Planes, a **2D sidescroller platformer** created with
**Unity** as a part of the VGDev Club on campus. I worked on a **relaunch
mechanism** using custom aero dynamics, a **particle system** for paper plane
trail, and one for **collisions with objects**. I also worked on making a
**Quest API** to show the current quests going on.

## [hack-a-lang](https://github.com/xinslu/hack-a-lang)
*Python*

As a part of a dependently-typed (Programming Language Club) on campus, I
worked on a **python implementation** of the common teaching language Lox. I
worked on building and degubbing a **Recursive Descent Parser**, **Scanner**
and a made a script to generate a **python class system** for different atoms
and a **visitor pattern** for the interpreter class. I also worked on the
**AST** and a **language environment** to store function and variable
declration. I lectured at the event about **AST evaluation, dynamic environment
creation** for functional and recrusive calls and **implementating the vistitor
patters** for interpreters.

## [Publixmon](https://github.com/saisree27/publixmon)
*ReactJS, Express.js, Flask, Firebase, Solidity, Ganache, IPFS, Web3.js, NCR API*

Publixmon is a **full-stack mobile app** integrating modern day NFT and Style
Tranfer technologies to create a unique interactive retail experience. With
every checkout, the app has a chance to give the user a NFT using a **style
tranfer machine learning model** based on two attributes a famous painting by a
**renaissance painting** and an item in your **purchase history**. Users walk
into a store and scan a QR code to see other active users who are in the store
and they can **socialize**, see each other's collections of virtual toys, and
**trade** them to grow their collection. A user's collection is auto-scored
based on size and **variety of collectibles**, resulting in **higher
engagement** for the business. I worked on making the backend blockchain that
generates the NFTs that uses the style tranfer images using **Solidity** and a
**Ganache Blockchain** to test it on. I worked on creating the backend for the
project that uses the **NCR API** to serve purchase history and **CDN Network**
to store the style transfered images.

## [Mental Health Chat](https://github.com/xinslu/mental-health-chat)
*ReactJS, Express.js, MongoDB, Firebase, Socket.IO*

A timed chat for people to share and talk about issues they're having in
relation with their mental health and help them overcome it. A message in the
**Redis database** to expire in about **6 hours** in order to encourage people
to come out and discourage users from harrasing one another. Created a
**Dockerized App** with a Redis Instance during development. Set-up a Log-In
page using **Firebase** that is capable of using **Google OAuth**, the users
can then set their username, add a profile picture and set the theme
(light/dark) for the app, before getting started chatting on the server.

## [Twitake](https://twitake.netlify.app/)
*ReactJS, Express.js, MongoDB, Firebase, Twitter API, Gensim, NLTK, Node.js*

A **full-stack fake disaster tweet analysis tool** that uses **TwitterAPI** to
extract the text from the tweet link that the user pastes in input box and data
processing tools like **lemmatization, tokenization, N-Grams, Stop Words **,
removal of punctuation, and a **TD-IDF based Logistic Regression NLP model**
with a 81% accuracy. Used MongoDB, to store user hashed user credentials,
created a token authentication system and used localstorage to automatically
sign-in and verify the user.

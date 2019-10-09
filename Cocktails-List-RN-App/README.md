# RN-Code-Challenge

## Steps to run the app

Before start running the app make sure you have node, npm, cocoapods, Android Studio and XCode installed correctly.

From the terminal go to the project folder and run:
npm install -g react-native-cli
npm install
react-native upgrade --legacy true // to generate Android and Ios projects
// The terminal asks if you want to replace the package.json (Select no)
react-native link react-native-vector-icons

Run on Android:
(open the android studio simulator or connect an android device)
Run in the terminal:
react-native run-android

Run on Ios:
Close Xcode if is open.
In the terminal go to ios folder and run:
pod install
Go back to the root folder and run:
react-native run-ios


## Answers to the challenge questions:

A) Describe the strategy used to consume the API endpoints and the data management.

Short answer:

I created a Redux store that holds the drinks list. It has some reducers and actions that are intended mostly to load a list of drinks in the store or update a specific drink of the list.

I created a service that exports two async functions, one for retrieving all the drinks and the other for getting the detailed information of a specific drink.

The react components of this app calls the service functions and dispatches the data to the store when is available but does not hold its own state.

Long answer:

Taking into account the description of the Api I didn't develop a paged drinks list. In a production situation I would probably suggest paging on the server side.

How the app works and how it handles the data?

When CocktailsList component starts it gets all drinks. This component is connected to Redux, through the mapDispatchToProps function property, it assigns to the component's props a function that dispatches data to the general store. The way to obtain the data is to call the DrinkService function that gets all drinks and with those obtained drinks make a dispatch to the store with the corresponding action.

For each card in the list, you should call the server to obtain the ingredients information. I could see two problems here, the first was that I didn't want to lock the entire card content while obtaining that data, so I implemented the use of a spinner for the ingredients part. The other problem was that: if rendering all the drinks on the screen generates a performance problem, then rendering all the drinks and getting the extended detail of each one generates a SUPER performance problem.

To solve this I investigated what alternatives I had for handling lists in react native and discovered that FlatList is a very useful component that basically virtualizes the contents of a list rendering the elements in a more performant way. You can configure how many elements are actually rendered at the beginning among many other configurable parameters that allow more performant rendering.

Each time a DrinkCard is created, it calls in the constructor a DrinkService function that gets the detailed information of the drink. When the data is received, through the mapDispatchToProps function definition we can dispatch to the store an "updateDrink" action that replaces the not extended drink by the new extended drink in the store list. This call will be made only for the items shown by the FlatList. As the CocktailsList component in its connection with the store defines a mapStateToProps, then it will receive the update of the list of drinks and with this update will run the render function again because of the change in the props. Having in mind that we are using a FlatList and a PureComponent for the DrinkCard we know that it will render again just the changed cards.

If we press on a card the app goes to the drink detail, where the extended information of the drink is also needed. We don't want to go to the server twice to bring the same information so I had to find a way to solve this.
Through mapStateToProps CocktailDetail is listening to see if the drink that it's showing is updated in the store. If it's updated then the component props are updated and the drink detail is displayed correctly. This solution allows it to work properly whether the extended information has been obtained before pressing on the card or if it is still being obtained while the card is pressed. In this last case, CocktailDetail shows a spinner similar to the one of DrinkCard until the data is received.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

Is my first experience with react native so I used the most standard library that I found: react-navigation. I don't know yet if it implies some issue with thousands of users apps.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

Answered in A.

D) Would you like to add any further comments or observations?

Nothing technical but if I should mention that it was an excellent experience for me, I really liked this technology.
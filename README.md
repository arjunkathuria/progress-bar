## Progress Bar
A simple configurable Progress Bar implemented in React.

### Features
The Component is highly configurable with sensible defaults properties, in case you miss some ; )

It has:-
- Multiple discrete steps.
- Number of steps is Configurable.
- Movement of progress bar is Animated.
- Move Progress indicator dynamically to a step by clicking on it.

BONUS:- Configurable progress bar colors ; )

### The example
In the Example page, i hooked the Progress bar to page scrolling i.e. as you scroll down, it depicts how much progress did you make scrolling the page.

it implements 5 progress bars, having:-
1. 5 steps
2. 10 steps
3. 20 steps
4. 33 steps
5. 100 steps

## Live Deployment.
The example site is deployed `live` and can be accessed at:-
```
https://arjun-progress-bar.surge.sh
```

## How Code is organised.
The code is nicely organised and resembles the following tree hierarchy.

```
/ (app root)
|
|----/dist (final bundled distributables)
|
|----/src (source files here)
|    |
|    |----/components (React components that make up the app)
|
|---- project config files (.edtiorconf, .gitignore, webpack config, package.json)
```

### How to run the example on local machines
How to use:-

- clone this repository
- npm install
- npm run start and visit localhost:8080

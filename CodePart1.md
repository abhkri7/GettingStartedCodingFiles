First of all, we need to include SDL into our project and make sure SDL lets us use the default main function.
```cpp
#define SDL_MAIN_READY
#include <SDL2/SDL.h> // or <SDL.h>, whichever doesn't produce an error
```
After that, we need to initialize SDL using the function SDL_Init(). For now, we can just pass the flag *SDL_INIT_VIDEO*  as the parameter to the function:
```cpp
SDL_SetMainReady();
SDL_Init(SDL_INIT_VIDEO);
```
Now we are at the interesting part: creating the window. We make a SDL_Window* variable by calling the function SDL_CreateWindow. We pass in the window title, the screen position, the size, and any additional flags. For now, we can add placeholders in the x and y components.
```cpp
SDL_Window* window = SDL_CreateWindow("Snake Game", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, 500, 500, SDL_WINDOW_SHOWN);
```
To keep the window open, lets put some code that will make the window stay open. This code will be explained in the future, so for now, just paste it into your code.

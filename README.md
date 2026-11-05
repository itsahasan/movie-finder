# Movie Finder

An Android app to find movies and keep a watchlist. Movie data comes from TMDB (The Movie Database).

## Features

1. Browse popular movies
2. Search movies by title
3. Filter movies by genre
4. View movie details (poster, rating, runtime, genres, overview, budget, revenue and more)
5. Save movies to a watchlist (stored on the phone with SQLite)
6. Share a movie with the Android share sheet

## Tech stack

- Expo, React Native and TypeScript
- Expo Router (bottom tabs)
- expo-sqlite for the watchlist
- Plain `fetch` for the TMDB API
- `StyleSheet` for styling

## What you need

- Node.js 22.13 or newer (check with `node -v`)
- A free TMDB account and API key (see step 2 below)
- One of these to run the app:
  - An Android emulator (install Android Studio, then create a virtual device in Device Manager), or
  - An Android phone with USB debugging turned on and the Expo Go app installed from the Play Store

## How to run

1. Open a terminal in the project folder and install the packages:

   ```
   npm install
   ```

2. Get a TMDB API key:
   - Create a free account at https://www.themoviedb.org
   - Open Settings > API and request a key
   - Copy the **API Key** (the short v3 key, not the long "Read Access Token")

3. Create the `.env` file. Copy `.env.example` to `.env`:

   ```
   cp .env.example .env
   ```

   On Windows use `copy .env.example .env`. Then open `.env` and paste your key:

   ```
   EXPO_PUBLIC_TMDB_API_KEY=your_key_here
   ```

4. Start the Android emulator from Android Studio (Device Manager > Play button), or connect your phone with a USB cable. Check that the device is found:

   ```
   adb devices
   ```

   The list must show your device. If `adb` is not found, add the Android SDK `platform-tools` folder to your PATH.

5. Start the app:

   ```
   npx expo start --android
   ```

   Expo opens the app on the emulator or phone. The first start can take a minute. If Expo Go is missing or too old on the emulator, Expo installs the right version.

## Run on a phone with the Expo Go QR code

1. Install **Expo Go** from the Play Store on the phone.
2. Connect the phone and the computer to the same Wi-Fi network.
3. Do steps 1 to 3 of "How to run" above (install packages and create `.env`).
4. Start the app with a clean cache:

   ```
   npx expo start -c
   ```a

5. Open Expo Go on the phone, tap **Scan QR code**, and scan the QR code shown in the terminal.
6. Wait for the app to load. The Home tab shows popular movies.

If the phone cannot connect, stop the app with `Ctrl+C` and run `npx expo start --tunnel` instead.

The Watchlist tab uses SQLite. If Expo Go shows `Cannot find native module 'ExpoSQLite'`, connect the phone with USB or start an emulator and run `npx expo run:android`.

## Check the code

```
npx tsc --noEmit
npx expo lint
```

## Troubleshooting

- **"Could not load movies":** check that the device has internet and that `.env` has a valid key. Then press Retry. After you change `.env`, stop the app and run `npx expo start --android --clear`.
- **Port 8081 is already in use:** answer yes to use another port, or close the program that uses it.
- **No device found:** run `adb devices`. The emulator must be fully started, or the phone must show "USB debugging" as allowed.
- **Phone and computer:** when using a real phone without a cable, both must be on the same Wi-Fi network.
- **Weird errors after updating packages:** delete the `node_modules` folder and run `npm install` again.

## Folder structure

```
src/
  app/             screens (Expo Router): tabs and movie details
  components/      MovieCard, MovieGrid, GenreChips, StatusView, Toast and the details parts
  services/tmdb.ts all TMDB API calls
  db/watchlist.ts  all SQLite code
  constants/       theme (colors, spacing) and the genre list
  types/movie.ts   TypeScript types
specs/product.md   product spec
```

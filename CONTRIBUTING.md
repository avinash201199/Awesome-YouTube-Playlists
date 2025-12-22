# Contributing Guidelines

Thank you for your interest in contributing to Awesome YouTube Playlists! 🎉

## How to Add a Playlist

1. **Open `lib/playlists.ts`**
   - All playlists are stored in the `playlists` array in this file.

2. **Add Your Playlist**
   - Each playlist should be an object with the following structure:

     ```ts
     {
       id: "unique-id", // Use a unique string (e.g., next number or a UUID)
       title: "Playlist Title",
       url: "https://www.youtube.com/playlist?list=...",
       category: "Category Name" // Must match one of the categories in the `categories` array
     }
     ```

   - Example:
     ```ts
     {
       id: "123",
       title: "React for Beginners",
       url: "https://www.youtube.com/playlist?list=PL...",
       category: "Web Development"
     }
     ```

3. **Check the Category**
   - Make sure the `category` matches one of the existing categories in the `categories` array at the top of the file.

4. **Submit a Pull Request**
   - After adding your playlist, commit your changes and open a pull request with a short description of your addition.

## Tips
- Only add high-quality, educational playlists.
- Avoid duplicates.
- Make sure the playlist is public and accessible.

Thank you for helping us grow this resource! 🚀

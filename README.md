# Eagles Converting Tool
FFMPEG-based video converter with customizable options for seamless format conversion (Assuming it works)


## Goals

The primary goals of Eagles Converting Tool are to provide a user-friendly and efficient video and audio conversion experience. The application aims to:

1. Enable seamless conversion: Allow users to convert video and audio files from one format to another effortlessly, without compromising on quality.

2. Support a wide range of formats: Support a comprehensive list of input and output formats to ensure compatibility with diverse media requirements.

3. Offer customizable options: Provide users with the flexibility to configure encoding settings such as resolution, bitrate, codec, and other parameters according to their specific needs.

4. Ensure high performance: Utilize the power of FFMPEG to deliver fast and efficient conversions, utilizing multi-threading capabilities where possible.

5. Provide a user-friendly interface: Design an intuitive and visually appealing interface that simplifies the conversion process and enhances the overall user experience.

6. Enable batch processing: Allow users to convert multiple files simultaneously, saving time and effort when dealing with large volumes of media files.

By accomplishing these goals, Eagles Converting Tool aims to become a reliable and go-to solution for users seeking a versatile and efficient video and audio conversion application.


## App Structure

- Main Process: The main process in Electron serves as the entry point of your application. It handles the overall control flow and coordination between the different windows or screens. It launches the user interface and manages interactions between components.
- Main Window: The initial window that appears when the application is launched. It provides options to select the input and output folders using native file dialogs.
- Encoding Options Window: This window allows users to configure the encoding settings for the videos they want to convert.
- Secondary Encoding Options Window: This window is specifically for choosing the bit depth for the selected codec and shows relevant encoding options based on the user's selection.
- Confirmation Window: Displays a summary of the selected settings and provides a confirmation message. Includes options such as "Proceed" and "Cancel" to confirm or abort the conversion process.
- Processing Window: Replaces the current window when the user proceeds from the confirmation window. It displays a progress bar or estimated time remaining to indicate the conversion progress.


## Disclaimer

Please note that this project is developed by a beginner programmer (AKA - ME) who is still learning. While utmost care is taken to ensure the accuracy and functionality of the application, there may be areas that can be further improved or optimized. Feedback, suggestions, and contributions from experienced developers are greatly appreciated.

Thank you for your understanding and support as I continue to grow and enhance my programming skills.

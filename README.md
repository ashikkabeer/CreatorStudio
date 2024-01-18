# CreatorStudio

Welcome to CreatorStudio! This application allows YouTubers to delegate video uploading permissions to editors, streamlining the content creation process. The admin has control over the approval process, ensuring only approved videos are published on the channel.

## How it Works

1. **Admin Approval Process**
   - YouTubers can delegate video uploading permissions to editors.
   - Admins review and approve the videos submitted by editors.
   - Approved videos are sent to the server for processing.

2. **Platform for Editors and Admins**
   - Build a centralized platform for editors and admins to sign in.
   - Admins can manage and approve video submissions.
   - Editors can access pending tasks and submit videos for approval.

3. **Video Handling**
   - Videos are uploaded to our server first.
   - After admin approval, videos are transferred to the YouTube server.
   - Videos are automatically deleted from our server after a specified time.

## Editor Features

### Authentication
- Editors can sign in using Google OAuth for secure authentication.

### Task Management
- View pending tasks assigned by YouTubers.
- Sort tasks based on submission dates or assigned dates.
- Open pending tasks to start the video submission process.

### Video Submission
- Upload videos with an optional thumbnail.
- Track progress during the upload process.
- Receive confirmation once the upload is successful.

## Creator Features

### Authentication
- Creators can sign in using Google OAuth for secure authentication.

### Editor Management
- Search for editors based on their email IDs.
- View a list of assigned editors.

### Video Review
- Access submitted videos with an integrated video player to preview content.
- Add comments for improvements.
- Accept videos for upload to the creator's YouTube channel.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/youtube-permission-layer.git
   ```

2. Set up the required dependencies and environment variables.

3. Run the application locally for testing and development.

4. Ensure proper integration with Google OAuth for secure authentication.

5. Customize the application to fit your specific use case.

## Contributors

- [Your Name](https://github.com/your-username)
- [Contributor 1](https://github.com/contributor1)
- [Contributor 2](https://github.com/contributor2)

Feel free to contribute, report issues, or suggest improvements. Happy coding!
# CS571 - Mobile Application Development
## Final Project - Pet Records App
### Application specifications and requirements
You will create a mobile application to help pet owners keep the medical records for their little furry friends.
  
Pet owners will have to sign up for a new account (using a unique email, phone number, full name, password). Every time they sign in, the application will read their location and only allow them to proceed if they are located in the United States, the application will display 2 tabs:
1. **List of Pets**
    * Add Pet (breed, birth date, color, pet name, type (cat/dog), weight)
    * List of Vaccines (Any vaccine older than 1 year should appear in 'Red' color with a label 'Expired')
      * Add Vaccine
2. **Vet Support**
    * List of Questions (ordered by date)

  
Users should be able to update/remove their pets/vaccines easily. 
  
The Vet Support feature allows users to ask a question to an automated bot that uses AI to find answers to general questions, the app will simply send an SMS to a certain predefined number and keep a copy of the SMS within the app.
  
Your project must include the following:
* Implement a login based system using JSON Web Token (JWT).
* Use UI Kit.
* Use Expo SDK.
* Use Express/MongoDB for supportive backend REST API. All Express routes should be protected from public access by JWT (except sign up and sign in routes). Persist the app state in AsyncStorage, so users don't need to login everytime they start the app.  
  
This is not a group project, students should not work in groups or share code or copy code from any source. Remember to respect the code honor submission policy. All written code must be original. Presenting something as one’s own work when it came from another source is plagiarism and is forbidden. Plagiarism is a very serious thing in all American academic institutions and is guarded against vigilantly by every professor.    
  
Project will be evaluated based on your code quality (not quantity).  

## Submission Requirements:
The project deadline is Wednesday 9:00 AM. Please make sure you submit following requirements before the deadline:  
* Detailed project plan for your daily performance (day/task/time) and submit it with your code.
* Documentation file with full details about your backend API and frontend mobile app design structure.   

**Presentation details TBA.** 
  
**Good luck and happy coding!**

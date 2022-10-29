# Test specification

## How the library is tested
The library is tested with manual testing and automatic unit tests. The manual tests is done using a test application located in the `./test-app` folder. For the automatic tests, the test framework Jest is used. 

Requirements that doesn't have test cases are yet to be implemented. Test suites are documented and the test reports can be found in the test reports folder. 

## Automatic unit tests
Automatic unit tests are defined in [https://github.com/emiliaajax/emoticons/tree/main/test](https://github.com/emiliaajax/emoticons/tree/main/test) and covers all the implemented requirements.

## Manual tests
### Test matrix
| Test | UC1 | UC2 | UC3 | UC4 | UC5 | UC6 | UC7 | UC10 | UC11 |
|------|-----|-----|-----|-----|------|-----|-----|-----|-----|
| TC1.1 | 1/:white_check_mark: | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| TC2.1 | 0 | 1/:white_check_mark: | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| TC2.2 | 0 | 1/:white_check_mark: | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| TC2.3 | 0 | 1/:white_check_mark: | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| TC3.1 | 0 | 0 | 1/xx | 0 | 0 | 0 | 0 | 0 | 0 |
| TC4.1 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 | 0 | 0 | 0 |
| TC4.2 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 | 0 | 0 | 0 |
| TC4.3 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 | 0 | 0 | 0 |
| TC5.1 | 0 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 | 0 | 0 |
| TC5.2 | 0 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 | 0 | 0 |
| TC6.1 | 0 | 0 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC6.2 | 0 | 0 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC6.3 | 0 | 0 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 | 0 |
| TC7.1 | 0 | 0 | 0 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 |
| TC7.2 | 0 | 0 | 0 | 0 | 0 | 0 | 1/:white_check_mark: | 0 | 0 |
| TC10.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1/:white_check_mark: | 0 |
| TC11.1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1/:white_check_mark: |
| COVERAGE & SUCCESS | 1/:white_check_mark: | 3/:white_check_mark:  | 1/xx  | 3/:white_check_mark: | 2/:white_check_mark: | 3/:white_check_mark: | 2/:white_check_mark: | 1/:white_check_mark: | 1/:white_check_mark: |

### Test cases
#### **TC1.1 - Successful generation of all emojis**

###### **Input**

- Start the test application by opening ./test-app/index.html in a web browser.

###### **Output**

- All emojis is shown in the open emoji component.

#### **TC2.1 - Successful generation of all emojis from a valid category**

###### **Input**

- Check the checkbox option "Flags"
- Click on OK.
- Open the emoji component if not already open.
- Scroll through the emoji component.

###### **Output**
- Only emojis belonging to the kategori "Flags" are shown.

#### **TC2.2 Successful generation of all emojis from two or more valid categories**

###### **Input**

- Check the checkbox options "Flags" and "Travel & Places".
- Click on OK.
- Open the emoji component if not already open.
- Scroll through the emoji component.

###### **Output**
- - Only emojis belonging to the kategori "Flags" and "Travel & Places are shown.

#### **TC2.3 Unsuccessful generation of emojis from an invalid category**

###### **Input**

- Check the checkbox option "Invalid option"
- Click on OK.
- Open the emoji component if not already open.
- Scroll through the emoji component.

###### **Output**
- The emoji component has not been updated.
- An error message is printed in the console.

#### **TC3.1 - Successful generation of all emojis and tags**

###### **Input**

- Check the checkbox "All emojis & tags".
- Look at the table to the right.

###### **Output**

- All emojis and tags are shown.

#### **TC4.1 - Successful generation of emojis and tags from a valid category**

###### **Input**

- Check the checkbox option "Flags".
- Click on OK.
- Look at the table to the right.

###### **Output**

- Only emojis and tags belonging to the category "Flags" are shown.

#### **TC4.2 Successful generation of emojis and tags from two or more valid categories**

###### **Input**

- Check the checkboxes "Flags" and "Travel & Places".
- Click on OK.
- Look at the table to the right.

###### **Output**

- Only emojis belonging to the categories "Flags" and "Travel & Places" are shown.

#### **TC4.3 Successful generation of emojis and tags from an invalid category**

###### **Input**

- Check the checkbox option "Invalid option".
- Click on OK.
- Look at the table to the right.

###### **Output**

- The table has not been updated.
- An error message is printed in the console.

#### **TC5.1 - Successful generation of emojis matching text**

###### **Input**

- Fill in the textfield where it says "Type here..." with "sad".
- Click on OK.
- Open the emoji component if not already open.
- Scroll through the emoji component.

###### **Output**

- The following emojis are shown in the emoji component: 😓 😿 😞 😢 

#### **TC5.2 Generation of emojis matching an empty string**

###### **Input**

- Erase everything in the textfield.
- Click in OK.
- Open the emoji component.

###### **Output**

- The emoji component doesn't open as it's empty.

#### **TC6.1 Successful convertion of a text with one emoticon**

###### **Input**

- Fill in the text field where it says "Write a message with emoticons here..." with "Hi :D".
- Click on the send symbol or press Enter.

###### **Output**

- ”Hi 😃” is shown in the box above the text field.

#### **TC6.2 Successful conversion of a text with two or more emoticons**

###### **Input**

- Fill in the text field where it says "Write a message with emoticons here..." with "Hi :D :) :$ How are you? <3 :d :P :O".
- Click on the send symbol or press Enter.

###### **Output**

- ”Hi 😃 😊 😳 How are you? ❤️ 😃 😛 😛 😮” is shown in the box above the text field.

#### **TC6.3 Conversion of a text with an invalid emoticon**

###### **Input**

- Fill in the text field where it says "Write a message with emoticons here..." with "Hi :G".
- Click on the send symbol or press Enter.

###### **Output**

- ”Hi :G” is shown in the box above the textfield.

#### **TC7.1 Successful generation of an emoji matching a given tag**

###### **Input**

- Fill in the text field where it says "Write a tag here..." with "piano".
- Click on OK.

###### **Output**

- ”🎹” is shown next to the text field.

#### **TC7.2 Unsuccesful generation of an emoji with a given tag that doesn't correspond to an emoji**

###### **Input**

- Fill i the text field where it says "Write a tag here..." with "fika".
- Click on OK.

###### **Output**

- No emoji is shown.
- An error message is shown in the console.

#### **TC10.1 Successful confirmation of library working in the browser**

###### **Input**

- TC1.1
- Look at the emoji component.

###### **Output**

- Emojis are shown in the emoji component.

#### **TC11.1 Successful confirmation that the library doesn't have external dependencies**

###### **Input**

- Open [./package.json](https://github.com/emiliaajax/emoji-provider/blob/main/package.json)
.
- Look for the field "dependencies".

###### **Output**

- There's no "dependencies" field to be found.
- The library has no external dependencies.
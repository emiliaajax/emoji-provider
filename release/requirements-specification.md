# Requirements specification

:white_check_mark: Implemented with passing tests. <br>
:x: Implemented with failing tests. <br>
:heavy_minus_sign: Not implemented

### Functional requirements

| Requirement | Description | Priority | Status |
|------|-------------|-----------|----------|
| 1 | The library should be able to generate all emojis desribed with unicode | 1 | :white_check_mark: |
| 2 | The library should be able to generate emojis based on category | 1 | :white_check_mark: |
| 3 | The library should be able to generate emojis and corresponding tags | 1 | :white_check_mark: |
| 4 | The library should be able to generate emojis and corresponding tags based on category | 1 | :white_check_mark: |
| 5 | The library should be able to generate all emojis where the corresponding tag begins with given characters | 1 | :white_check_mark: |
| 6 | The library should be able to convert emoticons in text to emojis | 1 | :white_check_mark: |
| 7 | The library should be able to translate a tag to an emoji | 1 | :white_check_mark: |
| 8 | The library should be able to translate tags in text to emojis | 2 | :heavy_minus_sign: |
| 9 | The library should be able to filter out emojis not supported by the user's operating system | 2 | :heavy_minus_sign: |

### Non-functional requirements

| Requirements | Description | Priority | Status |
|------|-------------|-----------|---------|
| 10 | The library should be supported by modern browsers | 1 | :white_check_mark: |
| 11 | The library should not have external dependencies | 1 | :white_check_mark: |
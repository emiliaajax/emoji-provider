# Inlämning Laboration 1 - 1DV610

# Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [x] Koden är objektorienterad
  - [x] Jag har skrivit en modul som riktar sig till programmerare

# Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [ ] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [ ] De flesta testfall fungerar
    - [ ] Koden är förberedd på Återanvändning
    - [ ] All kod samt historik finns i git 
    - [ ] Kodkvaliterskraven är ifyllda
    - [ ] Reflektion är skriven utifrån bokens kapitel 
  - [x] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [x] Samtliga testfall är skrivna    
    - [x] Testfall är automatiserade
    - [x] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [x] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 

Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 

# Återanvändning
Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.

# Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.

![Class diagram](./images/class-diagram.png "Class diagram")

# Kravspecifikation
### Funktionella krav

| Krav | Beskrivning | Prioritet |
|------|-------------|-----------|
| 1 | Biblioteket ska kunna generera alla emojis som finns beskrivna med unicode | 1 |
| 2 | Biblioteket ska kunna generera emojis baserat på kategori | 1 |
| 3 | Biblioteket ska kunna generera emojis med motsvarande taggar | 1 |
| 4 | Biblioteket ska kunna generera emojis med motsvarande taggar baserat på kategori | 1 |
| 5 | Biblioteket ska kunna generera alla emojis vars tagg startar med givna tecken | 1 |
| 6 | Biblioteket ska kunna konvertera emoticons i text till emojis | 1 |
| 7 | Biblioteket ska kunna översätta en tagg till en emoji | 1 |
| 8 | Biblioteket ska kunna översätta taggar i text till emojis | 2 |
| 9 | Biblioteket ska kunna filtrera bort emojis som inte stöds av användarens operativsystem | 2 |

### Icke-funktionella krav

| Krav | Beskrivning | Prioritet |
|------|-------------|-----------|
| 10 | Biblioteket ska fungera i webbläsaren | 1 |
| 11 | Biblioteket ska inte ha några externa beroenden | 1 |

# Hur jag testat
Jag har testat genom manuella tester och automatisk enhetstestning. Krav som ännu inte har testfall är krav som kommer implementeras i nästa version.

## Automatiska enhetstester
Automatiska enhetstester definieras i [https://github.com/emiliaajax/emoticons/tree/main/test](https://github.com/emiliaajax/emoticons/tree/main/test) och täcker alla implementerade krav (krav 1-7).

## Manuella tester
### Testmatris
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

### Testfall
#### **TC1.1 - Lyckad generering av alla emojis**

###### **Input**

- Starta testapplikationen genom att öppna ./test-app/index.html i webbläsaren.

###### **Output**

- Alla emojis visas i den öppna emojikomponenten.

#### **TC2.1 - Lyckad generering av emojis från en tillåten kategori**

###### **Input**

- Klicka i checkboxen ”Flags”.
- Klicka på OK.
- Öppna emojikomponenten om den inte redan är öppen.
- Bläddra igenom emojikomponenten.

###### **Output**
- Endast emojis av kategorin ”Flags” visas.

#### **TC2.2 Lyckad generering av emojis från flera tillåtna kategorier**

###### **Input**

- Klicka i checkboxarna ”Flags” och ”Travel & Places”.
- Klicka på OK.
- Öppna emojikomponenten om den inte redan är öppen.
- Bläddra igenom emojikomponenten.

###### **Output**
- Endast emojis av kategorin ”Flags” och ”Travel & Places” visas.

#### **TC2.3 Misslyckad generering av emojis från en otillåten kategori**

###### **Input**

- Klicka i checkboxen ”Invalid option”.
- Klicka på OK.
- Öppna emojikomponenten om den inte redan är öppen.
- Bläddra igenom emojikomponenten.

###### **Output**
- Emojikomponenten har inte uppdaterats.
- Ett felmeddelande är utskrivet i konsolen.

#### **TC3.1 - Lyckad generering av alla emojis och taggar**

###### **Input**

- Klicka i checkboxen ”Alla”.
- Klicka på OK.
- Se på tabellen till höger.

###### **Output**

- Alla emojis och taggar visas.

#### **TC4.1 - Lyckad av generering av emojis och taggar från en tillåten kategori**

###### **Input**

- Klicka i checkboxen ”Flags”.
- Klicka på OK.
- Se på tabellen till höger.

###### **Output**

- Endast emojis och taggar av kategorin ”Flags” visas.

#### **TC4.2 Lyckad generering av emojis från flera tillåtna kategorier**

###### **Input**

- Klicka i checkboxarna ”Flags” och ”Travel & Places”.
- Klicka på OK.
- Se på tabellen till höger.

###### **Output**

- Endast emojis av kategorin ”Flags” och ”Travel & Places” visas.

#### **TC4.3 Lyckad generering av emojis och taggar från en otillåten kategori**

###### **Input**

- Klicka i checkboxen ”Invalid option”.
- Klicka på OK.
- Se på tabellen till höger.

###### **Output**

- Tabellen har inte uppdaterats.
- Ett felmeddelande är utskrivet i konsolen.

#### **TC5.1 - Lyckad generering av emojis som matchar en text**

###### **Input**

- Fyll i textfältet där det står ”Type here…” med ”sad”.
- Klicka på OK.
- Öppna emojikomponenten om den inte redan är öppen.
- Bläddra igenom emojikomponenten.

###### **Output**

- Följande emojis visas i emojikomponenten: 😓 😿 😞 😢 

#### **TC5.2 Genering av emojis som matchar text med en tom sträng**

###### **Input**

- Radera allt i textfältet.
- Klicka på OK.
- Öppna emojikomponenten.

###### **Output**

- Emojikomponenten öppnas inte på grund av att den är tom.

#### **TC6.1 Konverting av text med en emoji**

###### **Input**

- Fyll i textfältet där det står ”Write a message with emoticons here…” med ”Hej :D”.
- Klicka på symbolen för att skicka eller tryck på Enter.

###### **Output**

- ”Hej 😃” visas i rutan ovanför textfältet.

#### **TC6.2 Konvertering av text med flera emojis**

###### **Input**

- Fyll i textfältet där det står ”Write a message with emoticons here…” med ”Hej :D :) :$ Hur mår du? <3 :d :p :P :O”.
- Klicka på symbolen för att skicka eller tryck på Enter.

###### **Output**

- ”Hej 😃 😊 😳 Hur mår du? ❤️ 😃 😛 😛 😮” visas i rutan ovanför textfältet.

#### **TC6.3 Konvertering av text utan giltig emoji**

###### **Input**

- Fyll i textfältet där det står ”Write a message with emoticons here…” med ”Hej :G”.
- Klicka på symbolen för att skicka eller tryck på Enter.

###### **Output**

- ”Hej :G” visas i rutan ovanför textfältet.

#### **TC7.1 Lyckad generering av en emoji med en existerande tagg**

###### **Input**

- Fyll i textfältet där det står ”Write a tag here…” med ”piano”.
- Klicka på OK.

###### **Output**

- ”🎹” visas bredvid textfältet.

#### **TC7.2 Misslyckad generering av en emoji med en icke-existerande tagg**

###### **Input**

- Fyll i textfältet där det står ”Write a tag here…” med ”fika”.
- Klicka på OK.

###### **Output**

- Ingen emoji visas.
- Ett felmeddelande visas i konsolen.

#### **TC10.1 Lyckad bekräftelse av att biblioteket fungerar i webbläsaren**

###### **Input**

- TC1.1
- Granska att emojis visas i emojikomponenten.

###### **Output**

- Emojis visas i emojikomponenten.

#### **TC11.1 Lyckad bekräftelse av att biblioteket inte har externa beroenden**

###### **Input**

- Öppna [./package.json](https://github.com/emiliaajax/emoji-provider/blob/main/package.json)
.
- Leta efter fältet "dependencies".

###### **Output**

- Fältet "dependencies" finns inte.
- Biblioteket har inga externa beroenden.

## Testrapporter
### Testrapport 1

**Datum**: 1/10-2022<br>**Version**: 1.0.0<br>**Testmiljö**: Testerna utfördes i utvecklingsmiljö.

![Autmatic Test Results 1/10-22](./images/TS1_1okt.png "Automatic test tesults 1/10-22")
![Autmatic Test Results 1/10-22](./images/TS1_1okt_2.png "Automatic test tesults 1/10-22")

### Testrapport 2

**Datum**: 3/10-2022<br>**Version**: 1.0.0<br>**Testmiljö**: Testerna utfördes i utvecklingsmiljö.

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

# Kodkvalitetskrav
**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.

### Namngivning
| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|          **```EmojiProvider```**<br>Huvudklassen som tillhandahåller metoderna för det publika interfacet       |                      <br>**Class Names**<br>Enligt boken ska klassnamn vara substantiv eller en substantivfras (direktöversatt från *noun phrase*) och det har jag gjort här då både Emoji och Provider är substantiv.<br><br>
|      **```getEmojisAndTags()```**<br>Returnerar en array av emojiobjekt som har emoji och tag som egenskaper.           |                    <br>**Method Name**<br>Här uppfyller jag regeln med att metodnamn ska bestå av ett verb eller en fras av verb.<br><br>**Use Intention-Revealing Names & Make Meaningful Destinctions**<br>Den här metoden har bytt namn otaliga gånger och jag har aldrig blivit riktigt nöjd. Jag hade boken i bakhuvudet där det står att man ska byta namn så fort man hittar ett bättre och jag har funderat fram och tillbaka på vad jag tycker. Jag har mest alternerat mellan det slutliga metodnamnet jag valt att använda och ```getEmojiObjects```. Jag hade faktiskt bestämt mig för ```getEmojiObjects``` då objekten som returnerades även innehöll emoticons och då blev namnet ```getEmojisAndTags``` lite missvisande. Men när jag sedan skrev instruktionerna för användaren så gillade jag det inte. Det lät otydligt och jag hade frågan från boken i huvudet: *"How are the programmers in this project supposed to know which of these functions to call?"* (s.123).  Jag bestämde mig för att skriva om metoden så att den bara returnar emojis och taggar och byta tillbaka till ```getEmojisAndTags```. Nu när jag ser det i instruktionerna tycker jag att det passar mycket bättre.<br><br>                      |                          |
|       **```getMatchingEmojis(text)```**<br>Tar in en textsträng och returnerar en array med emojis som matchar den textsträngen<br>           |      <br>**Make Meaningful Distinctions**<br>Här tycker jag inte att jag lyckats speciellt väl. Jag upptäckte nu under reflektionen, när jag gick igenom koden, att jag har två metoder som heter ungefär likadant. Den första metoden är den i kolumnen till vänster och den andra är en privat metod som har namnet **searchForMatchingEmojis(text)**. Det är svårt att avgöra vad som skiljer de här metoderna åt och jag var själv tvungen att gå igenom koden för att ta reda på skillnaden mellan dem (en skillnad som för övrigt var extremt liten, de gjorde nästan samma sak) och då är det ändå jag själv som har skrivit koden.<br><br>                                  |
|        **```replaceEmoticonsWithEmojis(text)```**<br>Tar in en text och om det finns emoticons i texten ersätter metoden alla emoticons med motsvarande emojis.         |              <br>**Use Intention-Revealing Names**<br>Här anser jag att jag lyckats med att uppfylla regeln med att namnet ska avslöja vad funktionen gör. Jag tycker att det är tydligt att när man skickar in en text som argument så kommer metoden att byta ut emoticons med emojis i texten.<br><br>**Use Searchable Names**<br>Jag tycker att metodnamnet uppfyller regeln om att vara sökbar. Metodnamnet är något längre och det kommer inte att dyka upp många resultat när man söker efter det.<br><br> **Make Meaningful Destinctions**<br>Jag såg i skrivande stund att jag faktiskt har en metod med liknande namn i en annan klass men som har "All" i namnet. Jag tycker i detta fall att det inte gör någonting då de är väldigt tätt sammankopplade (den ena är beroende av den andra) så om man skulle behöva felsöka så kommer man ändå att behöva titta i båda metoderna. De tillhör dessutom två olika klasser och kommer oavsett att behöva föregås av en klassinstans.<br><br>                         |
|         **```getEmojis()```**<br>Returnerar en array med alla emojis som finns tillgängliga i biblioteket.            |                    <br>**Avoid Disinformation**<br>Jag blir lite osäker över mitt namnval här. För boken nämner att ```get``` ska användas för accessors, mutators och predicates. Jag har använt det trots att det inte är en get-metod i den bemärkelsen. Mitt resonemang var att det returnerar någonting. Att användaren får något tillbaka och det var det jag ville berätta med namnet, men jag blir osäker på om det är bra att användas på det här sättet, eller om det räknas som vilseledande?<br><br>**Use Pronounceable Names**<br>Jag har tänkt på, under tiden jag skrivit koden, att använda vanliga namn som kan uttalas som vanligt utan att det låter konstigt eller måste bokstaveras. Jag tycker jag uppfyller det här.<br><br>                        |

### Funktioner
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|       **checkIfPresentAndReplace(emojiObject)**<br>Tar in ett emojiobjekt och i funktionen kollas om en viss angiven emoticon existerar någonstans i objektet. Om det gör det, anropas en annan metod som byter ut emoticon mot emoji                |                                              |

# Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 

/* - - UPPGIFT 2 - Variabler och Scope - - */

console.log(cookie3);

{
    const applicationTitle = "Månadens favoritkakor:";
    console.log(applicationTitle);

    let cookie1 = "Kanelbulle";
    console.log(cookie1);
    
    //console.log(cookie2);
    let cookie2 = "Hallongrotta";

    var cookie3 = "Morotskaka";

    var cookie4 = "Dumlesnitt";
}

console.log(cookie4);

    /* REFLEKTION - uppgift 2

    1. Ordet "scoped" innebär vart i koden en variabel finns, exempelvis i koduppbyggnaden
    ovan finner vi variablerna "let", "var" & "const" i ett blockscope. Detta innebär
    att placeringen av variablernas utskrift, styrs beroende på vilken av dessa tre
    nämnda varibaler som används. Let existerar endast inom det block där den deklareras
    (tilldelas ett namn) och den kan ändra sitt primitiva värde. Den kan dock aldrig
    deklareras flera gånger, vilket innebär att variabelnamnet inte kan återupprepas
    inom samma block. Const fungerar på samma sätt som let, men eftersom det är en
    konstant kan den inte ändra sitt primitiva värde. Var skiljer sig från de andra
    variablerna i den utsträckning att den existerar på det globala objektet. Dessutom
    finns det risk att råka skriva över variabler med var, då dessa kan anropas utanför
    block. Om Var deklareras i en funktion existerar den enbart i den funktionen.
    

    2. Eftersom "let" & "const" enbart fungerar i sitt block, måste därmed utskriften
    ("console.log()") också ske där i. I koden ovan ser vi ett exempel på när en variabel
    inte är definierad när utskriften körs. Detta gäller "cookie2" som då kommer skapa
    ett felmeddelande. Samma sak gäller "cookie3" som är applicerad innan blockscoped.
    Eftersom det är en var-variabel bör den ignoeraras av att det är ett block, men
    placeringen skapar "undefined" då även denna variabel inte är definierad när koden
    körs. Till skillnad från "cookie3", kan utskriften av "cookie4" ske, eftersom den
    ligger under sin definierade variabel och eftersom det är en var-variabel nås den
    dessutom utanför sitt block.
*/


/* - - UPPGIFT 3 - Jämförelser och Specialvärden - - */

//1.
console.log("23" == 23); // true
console.log("23" === 23); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false
console.log("5" === "5"); // true
console.log(7 === 7); // true
console.log(7 === 5); // false
console.log("9" === "4"); // false

console.log(NaN === NaN); // false
console.log(undefined === undefined); // true

console.log(undefined == null); // true
console.log(undefined === null); // false

console.log(undefined == false); // false
console.log(undefined === false); // false
console.log(undefined == true); // false
console.log(undefined === true); // false

//2.
console.log(undefined ? "truthy" : "falsy"); //falsy

    /* REFLEKTION - uppgift 3

    1. "=" används för att tilldela en variabel ett värde och detta skall inte blandas
    ihop med jämförelse-operatorer, exempelvis "==" eller "===".
    "==" och "===" jämför om två värden är samma och returnerar true om operanderna är lika,
    samt false om de är olika. Det som skiljer de åt är att "===" är en strikt likhetsoperator och
    kontrollerar helt enkelt om två operander är identiska. Detta innebär att inga
    konventeringar sker av operanderna. Om du exempelvis har en sträng och ett tal, även 
    om de är samma, kommer ändå utskriften bli false. Om du har två strängar som är
    identiska kommer utskriften generera true. Se alla varianter ovan. Utskrifter med "=="
    generera true eftersom denna operator typkonventerar strängen till ett tal. I utskriften
    ovan görs strängen "23" om till talet 23, då jämförs talet 23 med talet 23 och
    konsollrutan visar true. Därmed spelar det ingen roll om du använder dig av strängar
    eller tal när denna operator används, eftersom koden konventerar om operanderna.

    NaN är det enda värde i JavaScript som inte är lika med sig själv och kommer därmed
    alltid att visa false i output vid jämförelse med sig självt. Det kan symboliseras
    som en "varningsklocka" som hänvisar att något gick fel. Precis som stycket ovan är
    undefined och null samma sak om det får typkonventera, men inte "identiska".
    Därmed gäller false vid output om strikt likhetsoperator används i stället.
    True och false är boolean värden (värde som representerar sant eller falskt) och
    kan därmed inte jämföras med undefined, varken strikt eller via konvention.
    Detta kommer alltid generera false i konsollrutan.

    
    2. Om ett värde står för sig självt, kommer resultatet antingen bli truthy eller falsy.


    3. NaN är förkortningen för "Not a Number" och representerar ett numreriskt värde som
    inte är ett giltigt tal. Undefined står för att värdet ej är definierat. Det värde
    som en variabel har innan det ens blivit tilldelat ett värde. Null representerar
    avsaknad av ett värde. Det som skiljer null och undefined är att null anges avsiktligt
    av programmeraren.
*/


/* - - UPPGIFT 4 - Funktioner - - */

//1
    /* Orsakar felmeddelande i koden. Deklarationen är ej genomförd.
    name = "Nina"; */

    /* Skriver ut funktionsanropet direkt. */
    console.log(greet("Hilda"));
    
    /* name existerar ännu inte.
    console.log(name); */
    
    
    /* Variant 1 - funktionsdeklaration: */
    function greet(name) {
        console.log(name);

        name = "Nina";
        console.log(name); 

        return "Hej " + name;
    }
    const greetValue = greet("Hilda");


    /* Variant 2 - funktionsuttryck:
    const greetExpr = function (name) {
        return "Hej " + name;
    } */


    /* Variant 3 - arrow function:
    const greetArrow1 = (name) => {
        return "Hej " + name;
    } */

    
    /* En variant av arrow function som komprimerar koden (OBS! kan försvåra läsbarheten):
    const greetArrow2 = (name) => "Hej " + name; */


//2
    console.log(greetValue);

    /* console.log(greetExpr("Hilda")); */

    /* console.log(greetArrow1("Hilda")); */

    /* console.log(greetArrow2("Hilda")); */


//3
    let name = "Mitt namn är Hilda";
    console.log(name);

    name = "Nina";
    console.log(name);


    /* REFLEKTION - uppgift 4

    1. Funktionsdeklarationen består av nyckelordet "function", en identiferare, samt
    paranteser med funktionens parametrar. Denna funktion avslutar med måsvingar.
    Funktionsdeklarationernas funktionsnamn blir en variabel vars värde är själva funktionen.
    Varför kan då denna kod anropas före definitionen? Jo, funktionsdeklarationer "hoistas"
    till toppen av skriptet, alltså kommer alla funktioner som deklareras i ett block vara
    definierade genom hela blocket. Ett funktionsuttryck har ett valfritt funktionsnamn.
    Ett uttryck deklarerar inte en variabel på samma sätt som en funktionsdeklaration.
    Den måste istället lagras i en variabel, t.ex. som koden ovan är det lagrat i "const".
    Du kan heller inte anropa ett funktionsuttryck innan den har tilldelats en variabel,
    eftersom funktionen inte existerar förrän koden körts. Arrow function är en kompakt syntax.
    Nyckelordet "function" används inte och eftersom det är ett uttryck utesluts ett funktionsnamn.
    Om en arrow function endast består av en return-sats som variant 3 har ovan, kan den
    komprimeras till en kortare syntax. Se exemplet nedanför variant 3 ovan. Även denna
    funktionstyp hoistas inte.

    Jag valde att skriva ut alla tre funktionstyper för att få öva mig på de tre varianter
    som finns tillgängliga. Dock har de lite olika styrkor och det kan vara bra att variera
    vilken funktionstyp som används beroende på situation. Funktionsdeklaration är den
    "klassiska" typen som kan anropas från flera ställen. Uttryck används när en funktion
    skall sparas i en variabel. Arrow function är den mer moderna, komprimerade funktionen.


    2. I en funktionsdeklaration kan anropet ske innan funktionen har skapats.
    Funktionsdeklarationerna påminner om "var" som är kopplat till det yttersta globala objektet.
    Därför blir de tillgängliga direkt och ordningen för vart anropet sker i koden, spelar
    därmed ingen roll. När det gäller funktionsuttryck och arrow functions som är deklarerade
    med "const", kan anropet inte ske innan funkionen skapats. 

    
    3. Om det nya värdet på name skrivs ut innan funktionsdeklarationen kommer koden visa
    felmeddelande, eftersom variabeln name inte deklarerats ännu. I funktionsdeklarationen
    kommer parametern name ändras från "Hilda" till "Nina" så när name returneras, blir det
    "Nina" som skrivs ut istället för "Hilda". Sammanfattningsvis, om varibelvärdet ändras,
    är det vikigt att ha koll så att inte utskriften påverkar andra delar som du inte önskar justera.


    4. En parameter är en vanlig term inom funktioner i JavaScript. En parameter
    definierar vilket värde en funktion kan ta emot och den finner vi inuti parenteserna
    när en funktion deklareras. Exempelvis, i koden ovan "function greet(name)" är name
    en parameter. Ett argument är det faktiska värdet som skickas till parametern,
    exempelvis i koden ovan anropas "greet("Hilda")", alltå är "Hilda" argumentet.
    En variabel är ett namn som lagrar ett värde i minnet. Variablerna kan finnas
    globalt som i funktioner och block. Exempelvis, i koden ovan "const greetExpr = function (name)"
    är greetExpr en variabel.
*/


/* - - EXTRAUPPGIFT - Räknare - - */

//Kom inte längre med extrauppgiften, men ville testa skriva ut window.promt
const input1 = window.prompt("Skriv in ett tal:", "t.ex. 3");
console.log(input1);


const input2 = window.prompt("Skriv in ett annat tal:", "t.ex. 7");
console.log(input2);
